/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGkeonpremVmwareAdminClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations on the VMware Admin Cluster.
  * This field has the same restrictions as Kubernetes annotations.
  * The total size of all keys and values combined is limited to 256k.
  * Key can have 2 segments: prefix (optional) and name (required),
  * separated by a slash (/).
  * Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#annotations GoogleGkeonpremVmwareAdminCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The bootstrap cluster this VMware admin cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#bootstrap_cluster_membership GoogleGkeonpremVmwareAdminCluster#bootstrap_cluster_membership}
  */
  readonly bootstrapClusterMembership?: string;
  /**
  * A human readable description of this VMware admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#description GoogleGkeonpremVmwareAdminCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#id GoogleGkeonpremVmwareAdminCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The OS image type for the VMware admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#image_type GoogleGkeonpremVmwareAdminCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#location GoogleGkeonpremVmwareAdminCluster#location}
  */
  readonly location: string;
  /**
  * The VMware admin cluster resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#name GoogleGkeonpremVmwareAdminCluster#name}
  */
  readonly name: string;
  /**
  * The Anthos clusters on the VMware version for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#on_prem_version GoogleGkeonpremVmwareAdminCluster#on_prem_version}
  */
  readonly onPremVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#project GoogleGkeonpremVmwareAdminCluster#project}
  */
  readonly project?: string;
  /**
  * addon_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#addon_node GoogleGkeonpremVmwareAdminCluster#addon_node}
  */
  readonly addonNode?: GoogleGkeonpremVmwareAdminClusterAddonNode;
  /**
  * anti_affinity_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#anti_affinity_groups GoogleGkeonpremVmwareAdminCluster#anti_affinity_groups}
  */
  readonly antiAffinityGroups?: GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#authorization GoogleGkeonpremVmwareAdminCluster#authorization}
  */
  readonly authorization?: GoogleGkeonpremVmwareAdminClusterAuthorization;
  /**
  * auto_repair_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#auto_repair_config GoogleGkeonpremVmwareAdminCluster#auto_repair_config}
  */
  readonly autoRepairConfig?: GoogleGkeonpremVmwareAdminClusterAutoRepairConfig;
  /**
  * control_plane_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_node GoogleGkeonpremVmwareAdminCluster#control_plane_node}
  */
  readonly controlPlaneNode?: GoogleGkeonpremVmwareAdminClusterControlPlaneNode;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#load_balancer GoogleGkeonpremVmwareAdminCluster#load_balancer}
  */
  readonly loadBalancer?: GoogleGkeonpremVmwareAdminClusterLoadBalancer;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#network_config GoogleGkeonpremVmwareAdminCluster#network_config}
  */
  readonly networkConfig: GoogleGkeonpremVmwareAdminClusterNetworkConfig;
  /**
  * platform_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#platform_config GoogleGkeonpremVmwareAdminCluster#platform_config}
  */
  readonly platformConfig?: GoogleGkeonpremVmwareAdminClusterPlatformConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#timeouts GoogleGkeonpremVmwareAdminCluster#timeouts}
  */
  readonly timeouts?: GoogleGkeonpremVmwareAdminClusterTimeouts;
  /**
  * vcenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#vcenter GoogleGkeonpremVmwareAdminCluster#vcenter}
  */
  readonly vcenter?: GoogleGkeonpremVmwareAdminClusterVcenter;
}
export interface GoogleGkeonpremVmwareAdminClusterFleet {
}

export function googleGkeonpremVmwareAdminClusterFleetToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterFleetToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterFleetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }
}

export class GoogleGkeonpremVmwareAdminClusterFleetList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterFleetOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterFleetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterStatusConditions {
}

export function googleGkeonpremVmwareAdminClusterStatusConditionsToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterStatusConditionsToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterStatusConditions | undefined) {
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

export class GoogleGkeonpremVmwareAdminClusterStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterStatus {
}

export function googleGkeonpremVmwareAdminClusterStatusToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterStatusToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleGkeonpremVmwareAdminClusterStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GoogleGkeonpremVmwareAdminClusterStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterStatusOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig {
  /**
  * Whether to enable controle plane node auto resizing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference | GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference | GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterAddonNode {
  /**
  * auto_resize_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#auto_resize_config GoogleGkeonpremVmwareAdminCluster#auto_resize_config}
  */
  readonly autoResizeConfig?: GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig;
}

export function googleGkeonpremVmwareAdminClusterAddonNodeToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference | GoogleGkeonpremVmwareAdminClusterAddonNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_resize_config: googleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToTerraform(struct!.autoResizeConfig),
  }
}


export function googleGkeonpremVmwareAdminClusterAddonNodeToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference | GoogleGkeonpremVmwareAdminClusterAddonNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_resize_config: {
      value: googleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigToHclTerraform(struct!.autoResizeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterAddonNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoResizeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoResizeConfig = this._autoResizeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterAddonNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoResizeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoResizeConfig.internalValue = value.autoResizeConfig;
    }
  }

  // auto_resize_config - computed: false, optional: true, required: false
  private _autoResizeConfig = new GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference(this, "auto_resize_config");
  public get autoResizeConfig() {
    return this._autoResizeConfig;
  }
  public putAutoResizeConfig(value: GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig) {
    this._autoResizeConfig.internalValue = value;
  }
  public resetAutoResizeConfig() {
    this._autoResizeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResizeConfigInput() {
    return this._autoResizeConfig.internalValue;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups {
  /**
  * Spread nodes across at least three physical hosts (requires at least three
  * hosts).
  * Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#aag_config_disabled GoogleGkeonpremVmwareAdminCluster#aag_config_disabled}
  */
  readonly aagConfigDisabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterAntiAffinityGroupsToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference | GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aag_config_disabled: cdktf.booleanToTerraform(struct!.aagConfigDisabled),
  }
}


export function googleGkeonpremVmwareAdminClusterAntiAffinityGroupsToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference | GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aag_config_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.aagConfigDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aagConfigDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aagConfigDisabled = this._aagConfigDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aagConfigDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aagConfigDisabled = value.aagConfigDisabled;
    }
  }

  // aag_config_disabled - computed: false, optional: false, required: true
  private _aagConfigDisabled?: boolean | cdktf.IResolvable; 
  public get aagConfigDisabled() {
    return this.getBooleanAttribute('aag_config_disabled');
  }
  public set aagConfigDisabled(value: boolean | cdktf.IResolvable) {
    this._aagConfigDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aagConfigDisabledInput() {
    return this._aagConfigDisabled;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers {
  /**
  * The name of the user, e.g. 'my-gcp-id@gmail.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#username GoogleGkeonpremVmwareAdminCluster#username}
  */
  readonly username: string;
}

export function googleGkeonpremVmwareAdminClusterAuthorizationViewerUsersToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleGkeonpremVmwareAdminClusterAuthorizationViewerUsersToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._username = value.username;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterAuthorization {
  /**
  * viewer_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#viewer_users GoogleGkeonpremVmwareAdminCluster#viewer_users}
  */
  readonly viewerUsers?: GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterAuthorizationToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference | GoogleGkeonpremVmwareAdminClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    viewer_users: cdktf.listMapper(googleGkeonpremVmwareAdminClusterAuthorizationViewerUsersToTerraform, true)(struct!.viewerUsers),
  }
}


export function googleGkeonpremVmwareAdminClusterAuthorizationToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference | GoogleGkeonpremVmwareAdminClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    viewer_users: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareAdminClusterAuthorizationViewerUsersToHclTerraform, true)(struct!.viewerUsers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._viewerUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewerUsers = this._viewerUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._viewerUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._viewerUsers.internalValue = value.viewerUsers;
    }
  }

  // viewer_users - computed: false, optional: true, required: false
  private _viewerUsers = new GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList(this, "viewer_users", false);
  public get viewerUsers() {
    return this._viewerUsers;
  }
  public putViewerUsers(value: GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers[] | cdktf.IResolvable) {
    this._viewerUsers.internalValue = value;
  }
  public resetViewerUsers() {
    this._viewerUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerUsersInput() {
    return this._viewerUsers.internalValue;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterAutoRepairConfig {
  /**
  * Whether auto repair is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterAutoRepairConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference | GoogleGkeonpremVmwareAdminClusterAutoRepairConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleGkeonpremVmwareAdminClusterAutoRepairConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference | GoogleGkeonpremVmwareAdminClusterAutoRepairConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterAutoRepairConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterAutoRepairConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterControlPlaneNode {
  /**
  * The number of vCPUs for the control-plane node of the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#cpus GoogleGkeonpremVmwareAdminCluster#cpus}
  */
  readonly cpus?: number;
  /**
  * The number of mebibytes of memory for the control-plane node of the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#memory GoogleGkeonpremVmwareAdminCluster#memory}
  */
  readonly memory?: number;
  /**
  * The number of control plane nodes for this VMware admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#replicas GoogleGkeonpremVmwareAdminCluster#replicas}
  */
  readonly replicas?: number;
}

export function googleGkeonpremVmwareAdminClusterControlPlaneNodeToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference | GoogleGkeonpremVmwareAdminClusterControlPlaneNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpus: cdktf.numberToTerraform(struct!.cpus),
    memory: cdktf.numberToTerraform(struct!.memory),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function googleGkeonpremVmwareAdminClusterControlPlaneNodeToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference | GoogleGkeonpremVmwareAdminClusterControlPlaneNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterControlPlaneNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterControlPlaneNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpus = undefined;
      this._memory = undefined;
      this._replicas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpus = value.cpus;
      this._memory = value.memory;
      this._replicas = value.replicas;
    }
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

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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
}
export interface GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config {
  /**
  * The load balancer's IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#address GoogleGkeonpremVmwareAdminCluster#address}
  */
  readonly address?: string;
  /**
  * he preexisting partition to be used by the load balancer. T
  * his partition is usually created for the admin cluster for example:
  * 'my-f5-admin-partition'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#partition GoogleGkeonpremVmwareAdminCluster#partition}
  */
  readonly partition?: string;
  /**
  * The pool name. Only necessary, if using SNAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#snat_pool GoogleGkeonpremVmwareAdminCluster#snat_pool}
  */
  readonly snatPool?: string;
}

export function googleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    partition: cdktf.stringToTerraform(struct!.partition),
    snat_pool: cdktf.stringToTerraform(struct!.snatPool),
  }
}


export function googleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_pool: {
      value: cdktf.stringToHclTerraform(struct!.snatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._snatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._partition = undefined;
      this._snatPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._partition = value.partition;
      this._snatPool = value.snatPool;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool?: string; 
  public get snatPool() {
    return this.getStringAttribute('snat_pool');
  }
  public set snatPool(value: string) {
    this._snatPool = value;
  }
  public resetSnatPool() {
    this._snatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig {
  /**
  * NodePort for add-ons server in the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#addons_node_port GoogleGkeonpremVmwareAdminCluster#addons_node_port}
  */
  readonly addonsNodePort?: number;
  /**
  * NodePort for control plane service. The Kubernetes API server in the admin
  * cluster is implemented as a Service of type NodePort (ex. 30968).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_node_port GoogleGkeonpremVmwareAdminCluster#control_plane_node_port}
  */
  readonly controlPlaneNodePort?: number;
  /**
  * NodePort for ingress service's http. The ingress service in the admin
  * cluster is implemented as a Service of type NodePort (ex. 32527).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ingress_http_node_port GoogleGkeonpremVmwareAdminCluster#ingress_http_node_port}
  */
  readonly ingressHttpNodePort?: number;
  /**
  * NodePort for ingress service's https. The ingress service in the admin
  * cluster is implemented as a Service of type NodePort (ex. 30139).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ingress_https_node_port GoogleGkeonpremVmwareAdminCluster#ingress_https_node_port}
  */
  readonly ingressHttpsNodePort?: number;
  /**
  * NodePort for konnectivity server service running as a sidecar in each
  * kube-apiserver pod (ex. 30564).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#konnectivity_server_node_port GoogleGkeonpremVmwareAdminCluster#konnectivity_server_node_port}
  */
  readonly konnectivityServerNodePort?: number;
}

export function googleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons_node_port: cdktf.numberToTerraform(struct!.addonsNodePort),
    control_plane_node_port: cdktf.numberToTerraform(struct!.controlPlaneNodePort),
    ingress_http_node_port: cdktf.numberToTerraform(struct!.ingressHttpNodePort),
    ingress_https_node_port: cdktf.numberToTerraform(struct!.ingressHttpsNodePort),
    konnectivity_server_node_port: cdktf.numberToTerraform(struct!.konnectivityServerNodePort),
  }
}


export function googleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons_node_port: {
      value: cdktf.numberToHclTerraform(struct!.addonsNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_plane_node_port: {
      value: cdktf.numberToHclTerraform(struct!.controlPlaneNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_http_node_port: {
      value: cdktf.numberToHclTerraform(struct!.ingressHttpNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_https_node_port: {
      value: cdktf.numberToHclTerraform(struct!.ingressHttpsNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    konnectivity_server_node_port: {
      value: cdktf.numberToHclTerraform(struct!.konnectivityServerNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonsNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonsNodePort = this._addonsNodePort;
    }
    if (this._controlPlaneNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneNodePort = this._controlPlaneNodePort;
    }
    if (this._ingressHttpNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHttpNodePort = this._ingressHttpNodePort;
    }
    if (this._ingressHttpsNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHttpsNodePort = this._ingressHttpsNodePort;
    }
    if (this._konnectivityServerNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.konnectivityServerNodePort = this._konnectivityServerNodePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonsNodePort = undefined;
      this._controlPlaneNodePort = undefined;
      this._ingressHttpNodePort = undefined;
      this._ingressHttpsNodePort = undefined;
      this._konnectivityServerNodePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonsNodePort = value.addonsNodePort;
      this._controlPlaneNodePort = value.controlPlaneNodePort;
      this._ingressHttpNodePort = value.ingressHttpNodePort;
      this._ingressHttpsNodePort = value.ingressHttpsNodePort;
      this._konnectivityServerNodePort = value.konnectivityServerNodePort;
    }
  }

  // addons_node_port - computed: true, optional: true, required: false
  private _addonsNodePort?: number; 
  public get addonsNodePort() {
    return this.getNumberAttribute('addons_node_port');
  }
  public set addonsNodePort(value: number) {
    this._addonsNodePort = value;
  }
  public resetAddonsNodePort() {
    this._addonsNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsNodePortInput() {
    return this._addonsNodePort;
  }

  // control_plane_node_port - computed: true, optional: true, required: false
  private _controlPlaneNodePort?: number; 
  public get controlPlaneNodePort() {
    return this.getNumberAttribute('control_plane_node_port');
  }
  public set controlPlaneNodePort(value: number) {
    this._controlPlaneNodePort = value;
  }
  public resetControlPlaneNodePort() {
    this._controlPlaneNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodePortInput() {
    return this._controlPlaneNodePort;
  }

  // ingress_http_node_port - computed: true, optional: true, required: false
  private _ingressHttpNodePort?: number; 
  public get ingressHttpNodePort() {
    return this.getNumberAttribute('ingress_http_node_port');
  }
  public set ingressHttpNodePort(value: number) {
    this._ingressHttpNodePort = value;
  }
  public resetIngressHttpNodePort() {
    this._ingressHttpNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHttpNodePortInput() {
    return this._ingressHttpNodePort;
  }

  // ingress_https_node_port - computed: true, optional: true, required: false
  private _ingressHttpsNodePort?: number; 
  public get ingressHttpsNodePort() {
    return this.getNumberAttribute('ingress_https_node_port');
  }
  public set ingressHttpsNodePort(value: number) {
    this._ingressHttpsNodePort = value;
  }
  public resetIngressHttpsNodePort() {
    this._ingressHttpsNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHttpsNodePortInput() {
    return this._ingressHttpsNodePort;
  }

  // konnectivity_server_node_port - computed: true, optional: true, required: false
  private _konnectivityServerNodePort?: number; 
  public get konnectivityServerNodePort() {
    return this.getNumberAttribute('konnectivity_server_node_port');
  }
  public set konnectivityServerNodePort(value: number) {
    this._konnectivityServerNodePort = value;
  }
  public resetKonnectivityServerNodePort() {
    this._konnectivityServerNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get konnectivityServerNodePortInput() {
    return this._konnectivityServerNodePort;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig {
  /**
  * Metal LB is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig {
  /**
  * The VIP to configure the load balancer for add-ons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#addons_vip GoogleGkeonpremVmwareAdminCluster#addons_vip}
  */
  readonly addonsVip?: string;
  /**
  * The VIP which you previously set aside for the Kubernetes
  * API of this VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_vip GoogleGkeonpremVmwareAdminCluster#control_plane_vip}
  */
  readonly controlPlaneVip: string;
}

export function googleGkeonpremVmwareAdminClusterLoadBalancerVipConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addons_vip: cdktf.stringToTerraform(struct!.addonsVip),
    control_plane_vip: cdktf.stringToTerraform(struct!.controlPlaneVip),
  }
}


export function googleGkeonpremVmwareAdminClusterLoadBalancerVipConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addons_vip: {
      value: cdktf.stringToHclTerraform(struct!.addonsVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_vip: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonsVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonsVip = this._addonsVip;
    }
    if (this._controlPlaneVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneVip = this._controlPlaneVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonsVip = undefined;
      this._controlPlaneVip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonsVip = value.addonsVip;
      this._controlPlaneVip = value.controlPlaneVip;
    }
  }

  // addons_vip - computed: false, optional: true, required: false
  private _addonsVip?: string; 
  public get addonsVip() {
    return this.getStringAttribute('addons_vip');
  }
  public set addonsVip(value: string) {
    this._addonsVip = value;
  }
  public resetAddonsVip() {
    this._addonsVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsVipInput() {
    return this._addonsVip;
  }

  // control_plane_vip - computed: false, optional: false, required: true
  private _controlPlaneVip?: string; 
  public get controlPlaneVip() {
    return this.getStringAttribute('control_plane_vip');
  }
  public set controlPlaneVip(value: string) {
    this._controlPlaneVip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVipInput() {
    return this._controlPlaneVip;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterLoadBalancer {
  /**
  * f5_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#f5_config GoogleGkeonpremVmwareAdminCluster#f5_config}
  */
  readonly f5Config?: GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config;
  /**
  * manual_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#manual_lb_config GoogleGkeonpremVmwareAdminCluster#manual_lb_config}
  */
  readonly manualLbConfig?: GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig;
  /**
  * metal_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#metal_lb_config GoogleGkeonpremVmwareAdminCluster#metal_lb_config}
  */
  readonly metalLbConfig?: GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig;
  /**
  * vip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#vip_config GoogleGkeonpremVmwareAdminCluster#vip_config}
  */
  readonly vipConfig: GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig;
}

export function googleGkeonpremVmwareAdminClusterLoadBalancerToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_config: googleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigToTerraform(struct!.f5Config),
    manual_lb_config: googleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToTerraform(struct!.manualLbConfig),
    metal_lb_config: googleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToTerraform(struct!.metalLbConfig),
    vip_config: googleGkeonpremVmwareAdminClusterLoadBalancerVipConfigToTerraform(struct!.vipConfig),
  }
}


export function googleGkeonpremVmwareAdminClusterLoadBalancerToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference | GoogleGkeonpremVmwareAdminClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_config: {
      value: googleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigToHclTerraform(struct!.f5Config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigList",
    },
    manual_lb_config: {
      value: googleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigToHclTerraform(struct!.manualLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigList",
    },
    metal_lb_config: {
      value: googleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigToHclTerraform(struct!.metalLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigList",
    },
    vip_config: {
      value: googleGkeonpremVmwareAdminClusterLoadBalancerVipConfigToHclTerraform(struct!.vipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5Config = this._f5Config?.internalValue;
    }
    if (this._manualLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualLbConfig = this._manualLbConfig?.internalValue;
    }
    if (this._metalLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metalLbConfig = this._metalLbConfig?.internalValue;
    }
    if (this._vipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipConfig = this._vipConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5Config.internalValue = undefined;
      this._manualLbConfig.internalValue = undefined;
      this._metalLbConfig.internalValue = undefined;
      this._vipConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5Config.internalValue = value.f5Config;
      this._manualLbConfig.internalValue = value.manualLbConfig;
      this._metalLbConfig.internalValue = value.metalLbConfig;
      this._vipConfig.internalValue = value.vipConfig;
    }
  }

  // f5_config - computed: false, optional: true, required: false
  private _f5Config = new GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference(this, "f5_config");
  public get f5Config() {
    return this._f5Config;
  }
  public putF5Config(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config) {
    this._f5Config.internalValue = value;
  }
  public resetF5Config() {
    this._f5Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5ConfigInput() {
    return this._f5Config.internalValue;
  }

  // manual_lb_config - computed: false, optional: true, required: false
  private _manualLbConfig = new GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference(this, "manual_lb_config");
  public get manualLbConfig() {
    return this._manualLbConfig;
  }
  public putManualLbConfig(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig) {
    this._manualLbConfig.internalValue = value;
  }
  public resetManualLbConfig() {
    this._manualLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualLbConfigInput() {
    return this._manualLbConfig.internalValue;
  }

  // metal_lb_config - computed: false, optional: true, required: false
  private _metalLbConfig = new GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference(this, "metal_lb_config");
  public get metalLbConfig() {
    return this._metalLbConfig;
  }
  public putMetalLbConfig(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig) {
    this._metalLbConfig.internalValue = value;
  }
  public resetMetalLbConfig() {
    this._metalLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metalLbConfigInput() {
    return this._metalLbConfig.internalValue;
  }

  // vip_config - computed: false, optional: false, required: true
  private _vipConfig = new GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference(this, "vip_config");
  public get vipConfig() {
    return this._vipConfig;
  }
  public putVipConfig(value: GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig) {
    this._vipConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConfigInput() {
    return this._vipConfig.internalValue;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig {
  /**
  * enabled is a flag to mark if DHCP IP allocation is
  * used for VMware admin clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps {
  /**
  * Hostname of the machine. VM's name will be used if this field is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#hostname GoogleGkeonpremVmwareAdminCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ip GoogleGkeonpremVmwareAdminCluster#ip}
  */
  readonly ip: string;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock {
  /**
  * The network gateway used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#gateway GoogleGkeonpremVmwareAdminCluster#gateway}
  */
  readonly gateway: string;
  /**
  * The netmask used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#netmask GoogleGkeonpremVmwareAdminCluster#netmask}
  */
  readonly netmask: string;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ips GoogleGkeonpremVmwareAdminCluster#ips}
  */
  readonly ips: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    ips: cdktf.listMapper(googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToTerraform, true)(struct!.ips),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsToHclTerraform, true)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gateway = undefined;
      this._netmask = undefined;
      this._ips.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
      this._ips.internalValue = value.ips;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ips - computed: false, optional: false, required: true
  private _ips = new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig {
  /**
  * control_plane_ip_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_ip_block GoogleGkeonpremVmwareAdminCluster#control_plane_ip_block}
  */
  readonly controlPlaneIpBlock?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_ip_block: googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToTerraform(struct!.controlPlaneIpBlock),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_ip_block: {
      value: googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockToHclTerraform(struct!.controlPlaneIpBlock),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneIpBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneIpBlock = this._controlPlaneIpBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneIpBlock.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneIpBlock.internalValue = value.controlPlaneIpBlock;
    }
  }

  // control_plane_ip_block - computed: false, optional: true, required: false
  private _controlPlaneIpBlock = new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference(this, "control_plane_ip_block");
  public get controlPlaneIpBlock() {
    return this._controlPlaneIpBlock;
  }
  public putControlPlaneIpBlock(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock) {
    this._controlPlaneIpBlock.internalValue = value;
  }
  public resetControlPlaneIpBlock() {
    this._controlPlaneIpBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIpBlockInput() {
    return this._controlPlaneIpBlock.internalValue;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig {
  /**
  * DNS search domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#dns_search_domains GoogleGkeonpremVmwareAdminCluster#dns_search_domains}
  */
  readonly dnsSearchDomains?: string[];
  /**
  * DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#dns_servers GoogleGkeonpremVmwareAdminCluster#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * NTP servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ntp_servers GoogleGkeonpremVmwareAdminCluster#ntp_servers}
  */
  readonly ntpServers?: string[];
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigHostConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSearchDomains),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigHostConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSearchDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSearchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSearchDomains = this._dnsSearchDomains;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsSearchDomains = undefined;
      this._dnsServers = undefined;
      this._ntpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsSearchDomains = value.dnsSearchDomains;
      this._dnsServers = value.dnsServers;
      this._ntpServers = value.ntpServers;
    }
  }

  // dns_search_domains - computed: false, optional: true, required: false
  private _dnsSearchDomains?: string[]; 
  public get dnsSearchDomains() {
    return this.getListAttribute('dns_search_domains');
  }
  public set dnsSearchDomains(value: string[]) {
    this._dnsSearchDomains = value;
  }
  public resetDnsSearchDomains() {
    this._dnsSearchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchDomainsInput() {
    return this._dnsSearchDomains;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps {
  /**
  * Hostname of the machine. VM's name will be used if this field is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#hostname GoogleGkeonpremVmwareAdminCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ip GoogleGkeonpremVmwareAdminCluster#ip}
  */
  readonly ip: string;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks {
  /**
  * The network gateway used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#gateway GoogleGkeonpremVmwareAdminCluster#gateway}
  */
  readonly gateway: string;
  /**
  * The netmask used by the VMware Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#netmask GoogleGkeonpremVmwareAdminCluster#netmask}
  */
  readonly netmask: string;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ips GoogleGkeonpremVmwareAdminCluster#ips}
  */
  readonly ips: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    ips: cdktf.listMapper(googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToTerraform, true)(struct!.ips),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsToHclTerraform, true)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._netmask = undefined;
      this._ips.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
      this._ips.internalValue = value.ips;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ips - computed: false, optional: false, required: true
  private _ips = new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ip_blocks GoogleGkeonpremVmwareAdminCluster#ip_blocks}
  */
  readonly ipBlocks?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToTerraform, true)(struct!.ipBlocks),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipBlocks.internalValue = value.ipBlocks;
    }
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterNetworkConfig {
  /**
  * All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.
  * Only a single range is supported. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#pod_address_cidr_blocks GoogleGkeonpremVmwareAdminCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * All services in the cluster are assigned an RFC1918 IPv4 address
  * from these ranges. Only a single range is supported.. This field
  * cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#service_address_cidr_blocks GoogleGkeonpremVmwareAdminCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
  /**
  * vcenter_network specifies vCenter network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#vcenter_network GoogleGkeonpremVmwareAdminCluster#vcenter_network}
  */
  readonly vcenterNetwork?: string;
  /**
  * dhcp_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#dhcp_ip_config GoogleGkeonpremVmwareAdminCluster#dhcp_ip_config}
  */
  readonly dhcpIpConfig?: GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig;
  /**
  * ha_control_plane_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ha_control_plane_config GoogleGkeonpremVmwareAdminCluster#ha_control_plane_config}
  */
  readonly haControlPlaneConfig?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#host_config GoogleGkeonpremVmwareAdminCluster#host_config}
  */
  readonly hostConfig?: GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig;
  /**
  * static_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#static_ip_config GoogleGkeonpremVmwareAdminCluster#static_ip_config}
  */
  readonly staticIpConfig?: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig;
}

export function googleGkeonpremVmwareAdminClusterNetworkConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
    vcenter_network: cdktf.stringToTerraform(struct!.vcenterNetwork),
    dhcp_ip_config: googleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToTerraform(struct!.dhcpIpConfig),
    ha_control_plane_config: googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToTerraform(struct!.haControlPlaneConfig),
    host_config: googleGkeonpremVmwareAdminClusterNetworkConfigHostConfigToTerraform(struct!.hostConfig),
    static_ip_config: googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToTerraform(struct!.staticIpConfig),
  }
}


export function googleGkeonpremVmwareAdminClusterNetworkConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference | GoogleGkeonpremVmwareAdminClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vcenter_network: {
      value: cdktf.stringToHclTerraform(struct!.vcenterNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_ip_config: {
      value: googleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigToHclTerraform(struct!.dhcpIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigList",
    },
    ha_control_plane_config: {
      value: googleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigToHclTerraform(struct!.haControlPlaneConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigList",
    },
    host_config: {
      value: googleGkeonpremVmwareAdminClusterNetworkConfigHostConfigToHclTerraform(struct!.hostConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigList",
    },
    static_ip_config: {
      value: googleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigToHclTerraform(struct!.staticIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAddressCidrBlocks = this._podAddressCidrBlocks;
    }
    if (this._serviceAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddressCidrBlocks = this._serviceAddressCidrBlocks;
    }
    if (this._vcenterNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterNetwork = this._vcenterNetwork;
    }
    if (this._dhcpIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpIpConfig = this._dhcpIpConfig?.internalValue;
    }
    if (this._haControlPlaneConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.haControlPlaneConfig = this._haControlPlaneConfig?.internalValue;
    }
    if (this._hostConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConfig = this._hostConfig?.internalValue;
    }
    if (this._staticIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpConfig = this._staticIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podAddressCidrBlocks = undefined;
      this._serviceAddressCidrBlocks = undefined;
      this._vcenterNetwork = undefined;
      this._dhcpIpConfig.internalValue = undefined;
      this._haControlPlaneConfig.internalValue = undefined;
      this._hostConfig.internalValue = undefined;
      this._staticIpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podAddressCidrBlocks = value.podAddressCidrBlocks;
      this._serviceAddressCidrBlocks = value.serviceAddressCidrBlocks;
      this._vcenterNetwork = value.vcenterNetwork;
      this._dhcpIpConfig.internalValue = value.dhcpIpConfig;
      this._haControlPlaneConfig.internalValue = value.haControlPlaneConfig;
      this._hostConfig.internalValue = value.hostConfig;
      this._staticIpConfig.internalValue = value.staticIpConfig;
    }
  }

  // pod_address_cidr_blocks - computed: false, optional: false, required: true
  private _podAddressCidrBlocks?: string[]; 
  public get podAddressCidrBlocks() {
    return this.getListAttribute('pod_address_cidr_blocks');
  }
  public set podAddressCidrBlocks(value: string[]) {
    this._podAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAddressCidrBlocksInput() {
    return this._podAddressCidrBlocks;
  }

  // service_address_cidr_blocks - computed: false, optional: false, required: true
  private _serviceAddressCidrBlocks?: string[]; 
  public get serviceAddressCidrBlocks() {
    return this.getListAttribute('service_address_cidr_blocks');
  }
  public set serviceAddressCidrBlocks(value: string[]) {
    this._serviceAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressCidrBlocksInput() {
    return this._serviceAddressCidrBlocks;
  }

  // vcenter_network - computed: false, optional: true, required: false
  private _vcenterNetwork?: string; 
  public get vcenterNetwork() {
    return this.getStringAttribute('vcenter_network');
  }
  public set vcenterNetwork(value: string) {
    this._vcenterNetwork = value;
  }
  public resetVcenterNetwork() {
    this._vcenterNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterNetworkInput() {
    return this._vcenterNetwork;
  }

  // dhcp_ip_config - computed: false, optional: true, required: false
  private _dhcpIpConfig = new GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference(this, "dhcp_ip_config");
  public get dhcpIpConfig() {
    return this._dhcpIpConfig;
  }
  public putDhcpIpConfig(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig) {
    this._dhcpIpConfig.internalValue = value;
  }
  public resetDhcpIpConfig() {
    this._dhcpIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpConfigInput() {
    return this._dhcpIpConfig.internalValue;
  }

  // ha_control_plane_config - computed: false, optional: true, required: false
  private _haControlPlaneConfig = new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference(this, "ha_control_plane_config");
  public get haControlPlaneConfig() {
    return this._haControlPlaneConfig;
  }
  public putHaControlPlaneConfig(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig) {
    this._haControlPlaneConfig.internalValue = value;
  }
  public resetHaControlPlaneConfig() {
    this._haControlPlaneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haControlPlaneConfigInput() {
    return this._haControlPlaneConfig.internalValue;
  }

  // host_config - computed: false, optional: true, required: false
  private _hostConfig = new GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference(this, "host_config");
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig) {
    this._hostConfig.internalValue = value;
  }
  public resetHostConfig() {
    this._hostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigInput() {
    return this._hostConfig.internalValue;
  }

  // static_ip_config - computed: false, optional: true, required: false
  private _staticIpConfig = new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference(this, "static_ip_config");
  public get staticIpConfig() {
    return this._staticIpConfig;
  }
  public putStaticIpConfig(value: GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig) {
    this._staticIpConfig.internalValue = value;
  }
  public resetStaticIpConfig() {
    this._staticIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpConfigInput() {
    return this._staticIpConfig.internalValue;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions {
}

export function googleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions | undefined) {
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

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus {
}

export function googleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles {
}

export function googleGkeonpremVmwareAdminClusterPlatformConfigBundlesToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterPlatformConfigBundlesToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions {
}

export function googleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions | undefined) {
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

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus {
}

export function googleGkeonpremVmwareAdminClusterPlatformConfigStatusToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareAdminClusterPlatformConfigStatusToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference {
    return new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareAdminClusterPlatformConfig {
  /**
  * The required platform version e.g. 1.13.1.
  * If the current platform version is lower than the target version,
  * the platform version will be updated to the target version.
  * If the target version is not installed in the platform
  * (bundle versions), download the target version bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#required_platform_version GoogleGkeonpremVmwareAdminCluster#required_platform_version}
  */
  readonly requiredPlatformVersion?: string;
}

export function googleGkeonpremVmwareAdminClusterPlatformConfigToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference | GoogleGkeonpremVmwareAdminClusterPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_platform_version: cdktf.stringToTerraform(struct!.requiredPlatformVersion),
  }
}


export function googleGkeonpremVmwareAdminClusterPlatformConfigToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference | GoogleGkeonpremVmwareAdminClusterPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_platform_version: {
      value: cdktf.stringToHclTerraform(struct!.requiredPlatformVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredPlatformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredPlatformVersion = this._requiredPlatformVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requiredPlatformVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requiredPlatformVersion = value.requiredPlatformVersion;
    }
  }

  // bundles - computed: true, optional: false, required: false
  private _bundles = new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList(this, "bundles", false);
  public get bundles() {
    return this._bundles;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // required_platform_version - computed: false, optional: true, required: false
  private _requiredPlatformVersion?: string; 
  public get requiredPlatformVersion() {
    return this.getStringAttribute('required_platform_version');
  }
  public set requiredPlatformVersion(value: string) {
    this._requiredPlatformVersion = value;
  }
  public resetRequiredPlatformVersion() {
    this._requiredPlatformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPlatformVersionInput() {
    return this._requiredPlatformVersion;
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}
export interface GoogleGkeonpremVmwareAdminClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#create GoogleGkeonpremVmwareAdminCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#delete GoogleGkeonpremVmwareAdminCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#update GoogleGkeonpremVmwareAdminCluster#update}
  */
  readonly update?: string;
}

export function googleGkeonpremVmwareAdminClusterTimeoutsToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable): any {
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


export function googleGkeonpremVmwareAdminClusterTimeoutsToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleGkeonpremVmwareAdminClusterVcenter {
  /**
  * The vCenter IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#address GoogleGkeonpremVmwareAdminCluster#address}
  */
  readonly address?: string;
  /**
  * Contains the vCenter CA certificate public key for SSL verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ca_cert_data GoogleGkeonpremVmwareAdminCluster#ca_cert_data}
  */
  readonly caCertData?: string;
  /**
  * The name of the vCenter cluster for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#cluster GoogleGkeonpremVmwareAdminCluster#cluster}
  */
  readonly cluster?: string;
  /**
  * The name of the virtual machine disk (VMDK) for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#data_disk GoogleGkeonpremVmwareAdminCluster#data_disk}
  */
  readonly dataDisk?: string;
  /**
  * The name of the vCenter datacenter for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#datacenter GoogleGkeonpremVmwareAdminCluster#datacenter}
  */
  readonly datacenter?: string;
  /**
  * The name of the vCenter datastore for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#datastore GoogleGkeonpremVmwareAdminCluster#datastore}
  */
  readonly datastore?: string;
  /**
  * The name of the vCenter folder for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#folder GoogleGkeonpremVmwareAdminCluster#folder}
  */
  readonly folder?: string;
  /**
  * The name of the vCenter resource pool for the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#resource_pool GoogleGkeonpremVmwareAdminCluster#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * The name of the vCenter storage policy for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#storage_policy_name GoogleGkeonpremVmwareAdminCluster#storage_policy_name}
  */
  readonly storagePolicyName?: string;
}

export function googleGkeonpremVmwareAdminClusterVcenterToTerraform(struct?: GoogleGkeonpremVmwareAdminClusterVcenterOutputReference | GoogleGkeonpremVmwareAdminClusterVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    ca_cert_data: cdktf.stringToTerraform(struct!.caCertData),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    data_disk: cdktf.stringToTerraform(struct!.dataDisk),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
  }
}


export function googleGkeonpremVmwareAdminClusterVcenterToHclTerraform(struct?: GoogleGkeonpremVmwareAdminClusterVcenterOutputReference | GoogleGkeonpremVmwareAdminClusterVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.caCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.stringToHclTerraform(struct!.dataDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareAdminClusterVcenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareAdminClusterVcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._caCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertData = this._caCertData;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._dataDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareAdminClusterVcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._caCertData = undefined;
      this._cluster = undefined;
      this._dataDisk = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._folder = undefined;
      this._resourcePool = undefined;
      this._storagePolicyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._caCertData = value.caCertData;
      this._cluster = value.cluster;
      this._dataDisk = value.dataDisk;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._folder = value.folder;
      this._resourcePool = value.resourcePool;
      this._storagePolicyName = value.storagePolicyName;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert_data - computed: false, optional: true, required: false
  private _caCertData?: string; 
  public get caCertData() {
    return this.getStringAttribute('ca_cert_data');
  }
  public set caCertData(value: string) {
    this._caCertData = value;
  }
  public resetCaCertData() {
    this._caCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertDataInput() {
    return this._caCertData;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: string; 
  public get dataDisk() {
    return this.getStringAttribute('data_disk');
  }
  public set dataDisk(value: string) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster}
*/
export class GoogleGkeonpremVmwareAdminCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_vmware_admin_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleGkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleGkeonpremVmwareAdminCluster to import
  * @param importFromId The id of the existing GoogleGkeonpremVmwareAdminCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleGkeonpremVmwareAdminCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gkeonprem_vmware_admin_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGkeonpremVmwareAdminClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGkeonpremVmwareAdminClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_vmware_admin_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.15.0',
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
    this._bootstrapClusterMembership = config.bootstrapClusterMembership;
    this._description = config.description;
    this._id = config.id;
    this._imageType = config.imageType;
    this._location = config.location;
    this._name = config.name;
    this._onPremVersion = config.onPremVersion;
    this._project = config.project;
    this._addonNode.internalValue = config.addonNode;
    this._antiAffinityGroups.internalValue = config.antiAffinityGroups;
    this._authorization.internalValue = config.authorization;
    this._autoRepairConfig.internalValue = config.autoRepairConfig;
    this._controlPlaneNode.internalValue = config.controlPlaneNode;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._networkConfig.internalValue = config.networkConfig;
    this._platformConfig.internalValue = config.platformConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vcenter.internalValue = config.vcenter;
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

  // bootstrap_cluster_membership - computed: true, optional: true, required: false
  private _bootstrapClusterMembership?: string; 
  public get bootstrapClusterMembership() {
    return this.getStringAttribute('bootstrap_cluster_membership');
  }
  public set bootstrapClusterMembership(value: string) {
    this._bootstrapClusterMembership = value;
  }
  public resetBootstrapClusterMembership() {
    this._bootstrapClusterMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClusterMembershipInput() {
    return this._bootstrapClusterMembership;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fleet - computed: true, optional: false, required: false
  private _fleet = new GoogleGkeonpremVmwareAdminClusterFleetList(this, "fleet", false);
  public get fleet() {
    return this._fleet;
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

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // local_name - computed: true, optional: false, required: false
  public get localName() {
    return this.getStringAttribute('local_name');
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

  // on_prem_version - computed: false, optional: true, required: false
  private _onPremVersion?: string; 
  public get onPremVersion() {
    return this.getStringAttribute('on_prem_version');
  }
  public set onPremVersion(value: string) {
    this._onPremVersion = value;
  }
  public resetOnPremVersion() {
    this._onPremVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremVersionInput() {
    return this._onPremVersion;
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
  private _status = new GoogleGkeonpremVmwareAdminClusterStatusList(this, "status", false);
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

  // addon_node - computed: false, optional: true, required: false
  private _addonNode = new GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference(this, "addon_node");
  public get addonNode() {
    return this._addonNode;
  }
  public putAddonNode(value: GoogleGkeonpremVmwareAdminClusterAddonNode) {
    this._addonNode.internalValue = value;
  }
  public resetAddonNode() {
    this._addonNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNodeInput() {
    return this._addonNode.internalValue;
  }

  // anti_affinity_groups - computed: false, optional: true, required: false
  private _antiAffinityGroups = new GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference(this, "anti_affinity_groups");
  public get antiAffinityGroups() {
    return this._antiAffinityGroups;
  }
  public putAntiAffinityGroups(value: GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups) {
    this._antiAffinityGroups.internalValue = value;
  }
  public resetAntiAffinityGroups() {
    this._antiAffinityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityGroupsInput() {
    return this._antiAffinityGroups.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: GoogleGkeonpremVmwareAdminClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // auto_repair_config - computed: false, optional: true, required: false
  private _autoRepairConfig = new GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference(this, "auto_repair_config");
  public get autoRepairConfig() {
    return this._autoRepairConfig;
  }
  public putAutoRepairConfig(value: GoogleGkeonpremVmwareAdminClusterAutoRepairConfig) {
    this._autoRepairConfig.internalValue = value;
  }
  public resetAutoRepairConfig() {
    this._autoRepairConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairConfigInput() {
    return this._autoRepairConfig.internalValue;
  }

  // control_plane_node - computed: false, optional: true, required: false
  private _controlPlaneNode = new GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference(this, "control_plane_node");
  public get controlPlaneNode() {
    return this._controlPlaneNode;
  }
  public putControlPlaneNode(value: GoogleGkeonpremVmwareAdminClusterControlPlaneNode) {
    this._controlPlaneNode.internalValue = value;
  }
  public resetControlPlaneNode() {
    this._controlPlaneNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodeInput() {
    return this._controlPlaneNode.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: GoogleGkeonpremVmwareAdminClusterLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // network_config - computed: false, optional: false, required: true
  private _networkConfig = new GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleGkeonpremVmwareAdminClusterNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // platform_config - computed: false, optional: true, required: false
  private _platformConfig = new GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference(this, "platform_config");
  public get platformConfig() {
    return this._platformConfig;
  }
  public putPlatformConfig(value: GoogleGkeonpremVmwareAdminClusterPlatformConfig) {
    this._platformConfig.internalValue = value;
  }
  public resetPlatformConfig() {
    this._platformConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformConfigInput() {
    return this._platformConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGkeonpremVmwareAdminClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vcenter - computed: false, optional: true, required: false
  private _vcenter = new GoogleGkeonpremVmwareAdminClusterVcenterOutputReference(this, "vcenter");
  public get vcenter() {
    return this._vcenter;
  }
  public putVcenter(value: GoogleGkeonpremVmwareAdminClusterVcenter) {
    this._vcenter.internalValue = value;
  }
  public resetVcenter() {
    this._vcenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInput() {
    return this._vcenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      bootstrap_cluster_membership: cdktf.stringToTerraform(this._bootstrapClusterMembership),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      image_type: cdktf.stringToTerraform(this._imageType),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      on_prem_version: cdktf.stringToTerraform(this._onPremVersion),
      project: cdktf.stringToTerraform(this._project),
      addon_node: googleGkeonpremVmwareAdminClusterAddonNodeToTerraform(this._addonNode.internalValue),
      anti_affinity_groups: googleGkeonpremVmwareAdminClusterAntiAffinityGroupsToTerraform(this._antiAffinityGroups.internalValue),
      authorization: googleGkeonpremVmwareAdminClusterAuthorizationToTerraform(this._authorization.internalValue),
      auto_repair_config: googleGkeonpremVmwareAdminClusterAutoRepairConfigToTerraform(this._autoRepairConfig.internalValue),
      control_plane_node: googleGkeonpremVmwareAdminClusterControlPlaneNodeToTerraform(this._controlPlaneNode.internalValue),
      load_balancer: googleGkeonpremVmwareAdminClusterLoadBalancerToTerraform(this._loadBalancer.internalValue),
      network_config: googleGkeonpremVmwareAdminClusterNetworkConfigToTerraform(this._networkConfig.internalValue),
      platform_config: googleGkeonpremVmwareAdminClusterPlatformConfigToTerraform(this._platformConfig.internalValue),
      timeouts: googleGkeonpremVmwareAdminClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vcenter: googleGkeonpremVmwareAdminClusterVcenterToTerraform(this._vcenter.internalValue),
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
      bootstrap_cluster_membership: {
        value: cdktf.stringToHclTerraform(this._bootstrapClusterMembership),
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
      image_type: {
        value: cdktf.stringToHclTerraform(this._imageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      on_prem_version: {
        value: cdktf.stringToHclTerraform(this._onPremVersion),
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
      addon_node: {
        value: googleGkeonpremVmwareAdminClusterAddonNodeToHclTerraform(this._addonNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterAddonNodeList",
      },
      anti_affinity_groups: {
        value: googleGkeonpremVmwareAdminClusterAntiAffinityGroupsToHclTerraform(this._antiAffinityGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsList",
      },
      authorization: {
        value: googleGkeonpremVmwareAdminClusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterAuthorizationList",
      },
      auto_repair_config: {
        value: googleGkeonpremVmwareAdminClusterAutoRepairConfigToHclTerraform(this._autoRepairConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterAutoRepairConfigList",
      },
      control_plane_node: {
        value: googleGkeonpremVmwareAdminClusterControlPlaneNodeToHclTerraform(this._controlPlaneNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterControlPlaneNodeList",
      },
      load_balancer: {
        value: googleGkeonpremVmwareAdminClusterLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterLoadBalancerList",
      },
      network_config: {
        value: googleGkeonpremVmwareAdminClusterNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterNetworkConfigList",
      },
      platform_config: {
        value: googleGkeonpremVmwareAdminClusterPlatformConfigToHclTerraform(this._platformConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterPlatformConfigList",
      },
      timeouts: {
        value: googleGkeonpremVmwareAdminClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterTimeouts",
      },
      vcenter: {
        value: googleGkeonpremVmwareAdminClusterVcenterToHclTerraform(this._vcenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareAdminClusterVcenterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
