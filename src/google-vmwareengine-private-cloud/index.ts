/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVmwareenginePrivateCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of hours to delay this request. You can set this value to an hour between 0 to 8, where setting it to 0 starts the deletion request immediately. If no value is set, a default value is set at the API Level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#deletion_delay_hours GoogleVmwareenginePrivateCloud#deletion_delay_hours}
  */
  readonly deletionDelayHours?: number;
  /**
  * User-provided description for this private cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#description GoogleVmwareenginePrivateCloud#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#id GoogleVmwareenginePrivateCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location where the PrivateCloud should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#location GoogleVmwareenginePrivateCloud#location}
  */
  readonly location: string;
  /**
  * The ID of the PrivateCloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#name GoogleVmwareenginePrivateCloud#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#project GoogleVmwareenginePrivateCloud#project}
  */
  readonly project?: string;
  /**
  * While set true, deletion_delay_hours value will be sent in the request even for zero value of the field. This field is only useful for setting 0 value to the deletion_delay_hours field. It can be used both alone and together with deletion_delay_hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#send_deletion_delay_hours_if_zero GoogleVmwareenginePrivateCloud#send_deletion_delay_hours_if_zero}
  */
  readonly sendDeletionDelayHoursIfZero?: boolean | cdktf.IResolvable;
  /**
  * Initial type of the private cloud. Possible values: ["STANDARD", "TIME_LIMITED", "STRETCHED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#type GoogleVmwareenginePrivateCloud#type}
  */
  readonly type?: string;
  /**
  * management_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#management_cluster GoogleVmwareenginePrivateCloud#management_cluster}
  */
  readonly managementCluster: GoogleVmwareenginePrivateCloudManagementCluster;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#network_config GoogleVmwareenginePrivateCloud#network_config}
  */
  readonly networkConfig: GoogleVmwareenginePrivateCloudNetworkConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#timeouts GoogleVmwareenginePrivateCloud#timeouts}
  */
  readonly timeouts?: GoogleVmwareenginePrivateCloudTimeouts;
}
export interface GoogleVmwareenginePrivateCloudHcx {
}

export function googleVmwareenginePrivateCloudHcxToTerraform(struct?: GoogleVmwareenginePrivateCloudHcx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVmwareenginePrivateCloudHcxToHclTerraform(struct?: GoogleVmwareenginePrivateCloudHcx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVmwareenginePrivateCloudHcxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVmwareenginePrivateCloudHcx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareenginePrivateCloudHcx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleVmwareenginePrivateCloudHcxList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVmwareenginePrivateCloudHcxOutputReference {
    return new GoogleVmwareenginePrivateCloudHcxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVmwareenginePrivateCloudNsx {
}

export function googleVmwareenginePrivateCloudNsxToTerraform(struct?: GoogleVmwareenginePrivateCloudNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVmwareenginePrivateCloudNsxToHclTerraform(struct?: GoogleVmwareenginePrivateCloudNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVmwareenginePrivateCloudNsxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVmwareenginePrivateCloudNsx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareenginePrivateCloudNsx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleVmwareenginePrivateCloudNsxList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVmwareenginePrivateCloudNsxOutputReference {
    return new GoogleVmwareenginePrivateCloudNsxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVmwareenginePrivateCloudVcenter {
}

export function googleVmwareenginePrivateCloudVcenterToTerraform(struct?: GoogleVmwareenginePrivateCloudVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleVmwareenginePrivateCloudVcenterToHclTerraform(struct?: GoogleVmwareenginePrivateCloudVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleVmwareenginePrivateCloudVcenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVmwareenginePrivateCloudVcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareenginePrivateCloudVcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class GoogleVmwareenginePrivateCloudVcenterList extends cdktf.ComplexList {

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
  public get(index: number): GoogleVmwareenginePrivateCloudVcenterOutputReference {
    return new GoogleVmwareenginePrivateCloudVcenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs {
  /**
  * Customized number of cores available to each node of the type.
  * This number must always be one of 'nodeType.availableCustomCoreCounts'.
  * If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
  * This cannot be changed once the PrivateCloud is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#custom_core_count GoogleVmwareenginePrivateCloud#custom_core_count}
  */
  readonly customCoreCount?: number;
  /**
  * The number of nodes of this type in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#node_count GoogleVmwareenginePrivateCloud#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#node_type_id GoogleVmwareenginePrivateCloud#node_type_id}
  */
  readonly nodeTypeId: string;
}

export function googleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsToTerraform(struct?: GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_core_count: cdktf.numberToTerraform(struct!.customCoreCount),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
  }
}


export function googleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsToHclTerraform(struct?: GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_core_count: {
      value: cdktf.numberToHclTerraform(struct!.customCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCoreCount = this._customCoreCount;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customCoreCount = undefined;
      this._nodeCount = undefined;
      this._nodeTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customCoreCount = value.customCoreCount;
      this._nodeCount = value.nodeCount;
      this._nodeTypeId = value.nodeTypeId;
    }
  }

  // custom_core_count - computed: false, optional: true, required: false
  private _customCoreCount?: number; 
  public get customCoreCount() {
    return this.getNumberAttribute('custom_core_count');
  }
  public set customCoreCount(value: number) {
    this._customCoreCount = value;
  }
  public resetCustomCoreCount() {
    this._customCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCoreCountInput() {
    return this._customCoreCount;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_type_id - computed: false, optional: false, required: true
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }
}

export class GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference {
    return new GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig {
  /**
  * Zone that will remain operational when connection between the two zones is lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#preferred_location GoogleVmwareenginePrivateCloud#preferred_location}
  */
  readonly preferredLocation?: string;
  /**
  * Additional zone for a higher level of availability and load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#secondary_location GoogleVmwareenginePrivateCloud#secondary_location}
  */
  readonly secondaryLocation?: string;
}

export function googleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigToTerraform(struct?: GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference | GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_location: cdktf.stringToTerraform(struct!.preferredLocation),
    secondary_location: cdktf.stringToTerraform(struct!.secondaryLocation),
  }
}


export function googleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigToHclTerraform(struct?: GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference | GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_location: {
      value: cdktf.stringToHclTerraform(struct!.preferredLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_location: {
      value: cdktf.stringToHclTerraform(struct!.secondaryLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLocation = this._preferredLocation;
    }
    if (this._secondaryLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryLocation = this._secondaryLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredLocation = undefined;
      this._secondaryLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredLocation = value.preferredLocation;
      this._secondaryLocation = value.secondaryLocation;
    }
  }

  // preferred_location - computed: false, optional: true, required: false
  private _preferredLocation?: string; 
  public get preferredLocation() {
    return this.getStringAttribute('preferred_location');
  }
  public set preferredLocation(value: string) {
    this._preferredLocation = value;
  }
  public resetPreferredLocation() {
    this._preferredLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLocationInput() {
    return this._preferredLocation;
  }

  // secondary_location - computed: false, optional: true, required: false
  private _secondaryLocation?: string; 
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }
  public set secondaryLocation(value: string) {
    this._secondaryLocation = value;
  }
  public resetSecondaryLocation() {
    this._secondaryLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryLocationInput() {
    return this._secondaryLocation;
  }
}
export interface GoogleVmwareenginePrivateCloudManagementCluster {
  /**
  * The user-provided identifier of the new Cluster. The identifier must meet the following requirements:
  *   * Only contains 1-63 alphanumeric characters and hyphens
  *   * Begins with an alphabetical character
  *   * Ends with a non-hyphen character
  *   * Not formatted as a UUID
  *   * Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#cluster_id GoogleVmwareenginePrivateCloud#cluster_id}
  */
  readonly clusterId: string;
  /**
  * node_type_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#node_type_configs GoogleVmwareenginePrivateCloud#node_type_configs}
  */
  readonly nodeTypeConfigs?: GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs[] | cdktf.IResolvable;
  /**
  * stretched_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#stretched_cluster_config GoogleVmwareenginePrivateCloud#stretched_cluster_config}
  */
  readonly stretchedClusterConfig?: GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig;
}

export function googleVmwareenginePrivateCloudManagementClusterToTerraform(struct?: GoogleVmwareenginePrivateCloudManagementClusterOutputReference | GoogleVmwareenginePrivateCloudManagementCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    node_type_configs: cdktf.listMapper(googleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsToTerraform, true)(struct!.nodeTypeConfigs),
    stretched_cluster_config: googleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigToTerraform(struct!.stretchedClusterConfig),
  }
}


export function googleVmwareenginePrivateCloudManagementClusterToHclTerraform(struct?: GoogleVmwareenginePrivateCloudManagementClusterOutputReference | GoogleVmwareenginePrivateCloudManagementCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_configs: {
      value: cdktf.listMapperHcl(googleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsToHclTerraform, true)(struct!.nodeTypeConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList",
    },
    stretched_cluster_config: {
      value: googleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigToHclTerraform(struct!.stretchedClusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVmwareenginePrivateCloudManagementClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVmwareenginePrivateCloudManagementCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._nodeTypeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeConfigs = this._nodeTypeConfigs?.internalValue;
    }
    if (this._stretchedClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stretchedClusterConfig = this._stretchedClusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareenginePrivateCloudManagementCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._nodeTypeConfigs.internalValue = undefined;
      this._stretchedClusterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._nodeTypeConfigs.internalValue = value.nodeTypeConfigs;
      this._stretchedClusterConfig.internalValue = value.stretchedClusterConfig;
    }
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

  // node_type_configs - computed: false, optional: true, required: false
  private _nodeTypeConfigs = new GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(this, "node_type_configs", true);
  public get nodeTypeConfigs() {
    return this._nodeTypeConfigs;
  }
  public putNodeTypeConfigs(value: GoogleVmwareenginePrivateCloudManagementClusterNodeTypeConfigs[] | cdktf.IResolvable) {
    this._nodeTypeConfigs.internalValue = value;
  }
  public resetNodeTypeConfigs() {
    this._nodeTypeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeConfigsInput() {
    return this._nodeTypeConfigs.internalValue;
  }

  // stretched_cluster_config - computed: false, optional: true, required: false
  private _stretchedClusterConfig = new GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference(this, "stretched_cluster_config");
  public get stretchedClusterConfig() {
    return this._stretchedClusterConfig;
  }
  public putStretchedClusterConfig(value: GoogleVmwareenginePrivateCloudManagementClusterStretchedClusterConfig) {
    this._stretchedClusterConfig.internalValue = value;
  }
  public resetStretchedClusterConfig() {
    this._stretchedClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchedClusterConfigInput() {
    return this._stretchedClusterConfig.internalValue;
  }
}
export interface GoogleVmwareenginePrivateCloudNetworkConfig {
  /**
  * Management CIDR used by VMware management appliances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#management_cidr GoogleVmwareenginePrivateCloud#management_cidr}
  */
  readonly managementCidr: string;
  /**
  * The relative resource name of the VMware Engine network attached to the private cloud.
  * Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
  * where {project} can either be a project number or a project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#vmware_engine_network GoogleVmwareenginePrivateCloud#vmware_engine_network}
  */
  readonly vmwareEngineNetwork?: string;
}

export function googleVmwareenginePrivateCloudNetworkConfigToTerraform(struct?: GoogleVmwareenginePrivateCloudNetworkConfigOutputReference | GoogleVmwareenginePrivateCloudNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_cidr: cdktf.stringToTerraform(struct!.managementCidr),
    vmware_engine_network: cdktf.stringToTerraform(struct!.vmwareEngineNetwork),
  }
}


export function googleVmwareenginePrivateCloudNetworkConfigToHclTerraform(struct?: GoogleVmwareenginePrivateCloudNetworkConfigOutputReference | GoogleVmwareenginePrivateCloudNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_cidr: {
      value: cdktf.stringToHclTerraform(struct!.managementCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmware_engine_network: {
      value: cdktf.stringToHclTerraform(struct!.vmwareEngineNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVmwareenginePrivateCloudNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVmwareenginePrivateCloudNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementCidr = this._managementCidr;
    }
    if (this._vmwareEngineNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmwareEngineNetwork = this._vmwareEngineNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVmwareenginePrivateCloudNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementCidr = undefined;
      this._vmwareEngineNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementCidr = value.managementCidr;
      this._vmwareEngineNetwork = value.vmwareEngineNetwork;
    }
  }

  // dns_server_ip - computed: true, optional: false, required: false
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }

  // management_cidr - computed: false, optional: false, required: true
  private _managementCidr?: string; 
  public get managementCidr() {
    return this.getStringAttribute('management_cidr');
  }
  public set managementCidr(value: string) {
    this._managementCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementCidrInput() {
    return this._managementCidr;
  }

  // management_ip_address_layout_version - computed: true, optional: false, required: false
  public get managementIpAddressLayoutVersion() {
    return this.getNumberAttribute('management_ip_address_layout_version');
  }

  // vmware_engine_network - computed: false, optional: true, required: false
  private _vmwareEngineNetwork?: string; 
  public get vmwareEngineNetwork() {
    return this.getStringAttribute('vmware_engine_network');
  }
  public set vmwareEngineNetwork(value: string) {
    this._vmwareEngineNetwork = value;
  }
  public resetVmwareEngineNetwork() {
    this._vmwareEngineNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareEngineNetworkInput() {
    return this._vmwareEngineNetwork;
  }

  // vmware_engine_network_canonical - computed: true, optional: false, required: false
  public get vmwareEngineNetworkCanonical() {
    return this.getStringAttribute('vmware_engine_network_canonical');
  }
}
export interface GoogleVmwareenginePrivateCloudTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#create GoogleVmwareenginePrivateCloud#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#delete GoogleVmwareenginePrivateCloud#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#update GoogleVmwareenginePrivateCloud#update}
  */
  readonly update?: string;
}

export function googleVmwareenginePrivateCloudTimeoutsToTerraform(struct?: GoogleVmwareenginePrivateCloudTimeouts | cdktf.IResolvable): any {
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


export function googleVmwareenginePrivateCloudTimeoutsToHclTerraform(struct?: GoogleVmwareenginePrivateCloudTimeouts | cdktf.IResolvable): any {
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

export class GoogleVmwareenginePrivateCloudTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVmwareenginePrivateCloudTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVmwareenginePrivateCloudTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud google_vmwareengine_private_cloud}
*/
export class GoogleVmwareenginePrivateCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_private_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVmwareenginePrivateCloud to import
  * @param importFromId The id of the existing GoogleVmwareenginePrivateCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVmwareenginePrivateCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_private_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_vmwareengine_private_cloud google_vmwareengine_private_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVmwareenginePrivateCloudConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVmwareenginePrivateCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_private_cloud',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.7.0',
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
    this._deletionDelayHours = config.deletionDelayHours;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._sendDeletionDelayHoursIfZero = config.sendDeletionDelayHoursIfZero;
    this._type = config.type;
    this._managementCluster.internalValue = config.managementCluster;
    this._networkConfig.internalValue = config.networkConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_delay_hours - computed: false, optional: true, required: false
  private _deletionDelayHours?: number; 
  public get deletionDelayHours() {
    return this.getNumberAttribute('deletion_delay_hours');
  }
  public set deletionDelayHours(value: number) {
    this._deletionDelayHours = value;
  }
  public resetDeletionDelayHours() {
    this._deletionDelayHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionDelayHoursInput() {
    return this._deletionDelayHours;
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

  // hcx - computed: true, optional: false, required: false
  private _hcx = new GoogleVmwareenginePrivateCloudHcxList(this, "hcx", false);
  public get hcx() {
    return this._hcx;
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

  // nsx - computed: true, optional: false, required: false
  private _nsx = new GoogleVmwareenginePrivateCloudNsxList(this, "nsx", false);
  public get nsx() {
    return this._nsx;
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

  // send_deletion_delay_hours_if_zero - computed: false, optional: true, required: false
  private _sendDeletionDelayHoursIfZero?: boolean | cdktf.IResolvable; 
  public get sendDeletionDelayHoursIfZero() {
    return this.getBooleanAttribute('send_deletion_delay_hours_if_zero');
  }
  public set sendDeletionDelayHoursIfZero(value: boolean | cdktf.IResolvable) {
    this._sendDeletionDelayHoursIfZero = value;
  }
  public resetSendDeletionDelayHoursIfZero() {
    this._sendDeletionDelayHoursIfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDeletionDelayHoursIfZeroInput() {
    return this._sendDeletionDelayHoursIfZero;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // vcenter - computed: true, optional: false, required: false
  private _vcenter = new GoogleVmwareenginePrivateCloudVcenterList(this, "vcenter", false);
  public get vcenter() {
    return this._vcenter;
  }

  // management_cluster - computed: false, optional: false, required: true
  private _managementCluster = new GoogleVmwareenginePrivateCloudManagementClusterOutputReference(this, "management_cluster");
  public get managementCluster() {
    return this._managementCluster;
  }
  public putManagementCluster(value: GoogleVmwareenginePrivateCloudManagementCluster) {
    this._managementCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterInput() {
    return this._managementCluster.internalValue;
  }

  // network_config - computed: false, optional: false, required: true
  private _networkConfig = new GoogleVmwareenginePrivateCloudNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleVmwareenginePrivateCloudNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVmwareenginePrivateCloudTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVmwareenginePrivateCloudTimeouts) {
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
      deletion_delay_hours: cdktf.numberToTerraform(this._deletionDelayHours),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      send_deletion_delay_hours_if_zero: cdktf.booleanToTerraform(this._sendDeletionDelayHoursIfZero),
      type: cdktf.stringToTerraform(this._type),
      management_cluster: googleVmwareenginePrivateCloudManagementClusterToTerraform(this._managementCluster.internalValue),
      network_config: googleVmwareenginePrivateCloudNetworkConfigToTerraform(this._networkConfig.internalValue),
      timeouts: googleVmwareenginePrivateCloudTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_delay_hours: {
        value: cdktf.numberToHclTerraform(this._deletionDelayHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_deletion_delay_hours_if_zero: {
        value: cdktf.booleanToHclTerraform(this._sendDeletionDelayHoursIfZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_cluster: {
        value: googleVmwareenginePrivateCloudManagementClusterToHclTerraform(this._managementCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVmwareenginePrivateCloudManagementClusterList",
      },
      network_config: {
        value: googleVmwareenginePrivateCloudNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVmwareenginePrivateCloudNetworkConfigList",
      },
      timeouts: {
        value: googleVmwareenginePrivateCloudTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVmwareenginePrivateCloudTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
