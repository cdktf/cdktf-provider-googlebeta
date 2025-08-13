/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeWireGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the wire group is administratively enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#admin_enabled GoogleComputeWireGroup#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Required cross site network to which wire group belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#cross_site_network GoogleComputeWireGroup#cross_site_network}
  */
  readonly crossSiteNetwork: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#description GoogleComputeWireGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#id GoogleComputeWireGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be
  * 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters must be a dash,
  * lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#name GoogleComputeWireGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#project GoogleComputeWireGroup#project}
  */
  readonly project?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#endpoints GoogleComputeWireGroup#endpoints}
  */
  readonly endpoints?: GoogleComputeWireGroupEndpoints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#timeouts GoogleComputeWireGroup#timeouts}
  */
  readonly timeouts?: GoogleComputeWireGroupTimeouts;
  /**
  * wire_group_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#wire_group_properties GoogleComputeWireGroup#wire_group_properties}
  */
  readonly wireGroupProperties?: GoogleComputeWireGroupWireGroupProperties;
  /**
  * wire_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#wire_properties GoogleComputeWireGroup#wire_properties}
  */
  readonly wireProperties?: GoogleComputeWireGroupWireProperties;
}
export interface GoogleComputeWireGroupTopologyEndpoints {
}

export function googleComputeWireGroupTopologyEndpointsToTerraform(struct?: GoogleComputeWireGroupTopologyEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeWireGroupTopologyEndpointsToHclTerraform(struct?: GoogleComputeWireGroupTopologyEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeWireGroupTopologyEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeWireGroupTopologyEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupTopologyEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }
}

export class GoogleComputeWireGroupTopologyEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeWireGroupTopologyEndpointsOutputReference {
    return new GoogleComputeWireGroupTopologyEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeWireGroupTopology {
}

export function googleComputeWireGroupTopologyToTerraform(struct?: GoogleComputeWireGroupTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeWireGroupTopologyToHclTerraform(struct?: GoogleComputeWireGroupTopology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeWireGroupTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeWireGroupTopology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupTopology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new GoogleComputeWireGroupTopologyEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
}

export class GoogleComputeWireGroupTopologyList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeWireGroupTopologyOutputReference {
    return new GoogleComputeWireGroupTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeWireGroupWiresEndpoints {
}

export function googleComputeWireGroupWiresEndpointsToTerraform(struct?: GoogleComputeWireGroupWiresEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeWireGroupWiresEndpointsToHclTerraform(struct?: GoogleComputeWireGroupWiresEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeWireGroupWiresEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeWireGroupWiresEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupWiresEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interconnect - computed: true, optional: false, required: false
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }

  // vlan_tag - computed: true, optional: false, required: false
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
}

export class GoogleComputeWireGroupWiresEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeWireGroupWiresEndpointsOutputReference {
    return new GoogleComputeWireGroupWiresEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeWireGroupWiresWireProperties {
}

export function googleComputeWireGroupWiresWirePropertiesToTerraform(struct?: GoogleComputeWireGroupWiresWireProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeWireGroupWiresWirePropertiesToHclTerraform(struct?: GoogleComputeWireGroupWiresWireProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeWireGroupWiresWirePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeWireGroupWiresWireProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupWiresWireProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_unmetered - computed: true, optional: false, required: false
  public get bandwidthUnmetered() {
    return this.getNumberAttribute('bandwidth_unmetered');
  }

  // fault_response - computed: true, optional: false, required: false
  public get faultResponse() {
    return this.getStringAttribute('fault_response');
  }
}

export class GoogleComputeWireGroupWiresWirePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeWireGroupWiresWirePropertiesOutputReference {
    return new GoogleComputeWireGroupWiresWirePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeWireGroupWires {
}

export function googleComputeWireGroupWiresToTerraform(struct?: GoogleComputeWireGroupWires): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleComputeWireGroupWiresToHclTerraform(struct?: GoogleComputeWireGroupWires): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleComputeWireGroupWiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeWireGroupWires | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupWires | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_enabled - computed: true, optional: false, required: false
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new GoogleComputeWireGroupWiresEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // wire_properties - computed: true, optional: false, required: false
  private _wireProperties = new GoogleComputeWireGroupWiresWirePropertiesList(this, "wire_properties", false);
  public get wireProperties() {
    return this._wireProperties;
  }
}

export class GoogleComputeWireGroupWiresList extends cdktf.ComplexList {

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
  public get(index: number): GoogleComputeWireGroupWiresOutputReference {
    return new GoogleComputeWireGroupWiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeWireGroupEndpointsInterconnects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#interconnect GoogleComputeWireGroup#interconnect}
  */
  readonly interconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#interconnect_name GoogleComputeWireGroup#interconnect_name}
  */
  readonly interconnectName: string;
  /**
  * VLAN tags for the interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#vlan_tags GoogleComputeWireGroup#vlan_tags}
  */
  readonly vlanTags?: number[];
}

export function googleComputeWireGroupEndpointsInterconnectsToTerraform(struct?: GoogleComputeWireGroupEndpointsInterconnects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interconnect: cdktf.stringToTerraform(struct!.interconnect),
    interconnect_name: cdktf.stringToTerraform(struct!.interconnectName),
    vlan_tags: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vlanTags),
  }
}


export function googleComputeWireGroupEndpointsInterconnectsToHclTerraform(struct?: GoogleComputeWireGroupEndpointsInterconnects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interconnect: {
      value: cdktf.stringToHclTerraform(struct!.interconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interconnect_name: {
      value: cdktf.stringToHclTerraform(struct!.interconnectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_tags: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vlanTags),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeWireGroupEndpointsInterconnectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeWireGroupEndpointsInterconnects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnect = this._interconnect;
    }
    if (this._interconnectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnectName = this._interconnectName;
    }
    if (this._vlanTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTags = this._vlanTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupEndpointsInterconnects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interconnect = undefined;
      this._interconnectName = undefined;
      this._vlanTags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interconnect = value.interconnect;
      this._interconnectName = value.interconnectName;
      this._vlanTags = value.vlanTags;
    }
  }

  // interconnect - computed: false, optional: true, required: false
  private _interconnect?: string; 
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }
  public set interconnect(value: string) {
    this._interconnect = value;
  }
  public resetInterconnect() {
    this._interconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect;
  }

  // interconnect_name - computed: false, optional: false, required: true
  private _interconnectName?: string; 
  public get interconnectName() {
    return this.getStringAttribute('interconnect_name');
  }
  public set interconnectName(value: string) {
    this._interconnectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectNameInput() {
    return this._interconnectName;
  }

  // vlan_tags - computed: false, optional: true, required: false
  private _vlanTags?: number[]; 
  public get vlanTags() {
    return this.getNumberListAttribute('vlan_tags');
  }
  public set vlanTags(value: number[]) {
    this._vlanTags = value;
  }
  public resetVlanTags() {
    this._vlanTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagsInput() {
    return this._vlanTags;
  }
}

export class GoogleComputeWireGroupEndpointsInterconnectsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeWireGroupEndpointsInterconnects[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeWireGroupEndpointsInterconnectsOutputReference {
    return new GoogleComputeWireGroupEndpointsInterconnectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeWireGroupEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#endpoint GoogleComputeWireGroup#endpoint}
  */
  readonly endpoint: string;
  /**
  * interconnects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#interconnects GoogleComputeWireGroup#interconnects}
  */
  readonly interconnects?: GoogleComputeWireGroupEndpointsInterconnects[] | cdktf.IResolvable;
}

export function googleComputeWireGroupEndpointsToTerraform(struct?: GoogleComputeWireGroupEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    interconnects: cdktf.listMapper(googleComputeWireGroupEndpointsInterconnectsToTerraform, true)(struct!.interconnects),
  }
}


export function googleComputeWireGroupEndpointsToHclTerraform(struct?: GoogleComputeWireGroupEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interconnects: {
      value: cdktf.listMapperHcl(googleComputeWireGroupEndpointsInterconnectsToHclTerraform, true)(struct!.interconnects),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleComputeWireGroupEndpointsInterconnectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeWireGroupEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeWireGroupEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._interconnects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnects = this._interconnects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._interconnects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._interconnects.internalValue = value.interconnects;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // interconnects - computed: false, optional: true, required: false
  private _interconnects = new GoogleComputeWireGroupEndpointsInterconnectsList(this, "interconnects", true);
  public get interconnects() {
    return this._interconnects;
  }
  public putInterconnects(value: GoogleComputeWireGroupEndpointsInterconnects[] | cdktf.IResolvable) {
    this._interconnects.internalValue = value;
  }
  public resetInterconnects() {
    this._interconnects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectsInput() {
    return this._interconnects.internalValue;
  }
}

export class GoogleComputeWireGroupEndpointsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeWireGroupEndpoints[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeWireGroupEndpointsOutputReference {
    return new GoogleComputeWireGroupEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeWireGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#create GoogleComputeWireGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#delete GoogleComputeWireGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#update GoogleComputeWireGroup#update}
  */
  readonly update?: string;
}

export function googleComputeWireGroupTimeoutsToTerraform(struct?: GoogleComputeWireGroupTimeouts | cdktf.IResolvable): any {
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


export function googleComputeWireGroupTimeoutsToHclTerraform(struct?: GoogleComputeWireGroupTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeWireGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeWireGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeWireGroupTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleComputeWireGroupWireGroupProperties {
  /**
  * Type of wire group (enum).
  * WIRE: a single pseudowire over two Interconnect connections   with no redundancy.
  * REDUNDANT: two pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.
  * BOX_AND_CROSS: four pseudowires over four Interconnect connections, with two connections in one metro and two connections in another metro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#type GoogleComputeWireGroup#type}
  */
  readonly type?: string;
}

export function googleComputeWireGroupWireGroupPropertiesToTerraform(struct?: GoogleComputeWireGroupWireGroupPropertiesOutputReference | GoogleComputeWireGroupWireGroupProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleComputeWireGroupWireGroupPropertiesToHclTerraform(struct?: GoogleComputeWireGroupWireGroupPropertiesOutputReference | GoogleComputeWireGroupWireGroupProperties): any {
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

export class GoogleComputeWireGroupWireGroupPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeWireGroupWireGroupProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupWireGroupProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
}
export interface GoogleComputeWireGroupWireProperties {
  /**
  * The unmetered bandwidth setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#bandwidth_unmetered GoogleComputeWireGroup#bandwidth_unmetered}
  */
  readonly bandwidthUnmetered?: number;
  /**
  * Response when a fault is detected in a pseudowire:
  * NONE: default.
  * DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#fault_response GoogleComputeWireGroup#fault_response}
  */
  readonly faultResponse?: string;
}

export function googleComputeWireGroupWirePropertiesToTerraform(struct?: GoogleComputeWireGroupWirePropertiesOutputReference | GoogleComputeWireGroupWireProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_unmetered: cdktf.numberToTerraform(struct!.bandwidthUnmetered),
    fault_response: cdktf.stringToTerraform(struct!.faultResponse),
  }
}


export function googleComputeWireGroupWirePropertiesToHclTerraform(struct?: GoogleComputeWireGroupWirePropertiesOutputReference | GoogleComputeWireGroupWireProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_unmetered: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthUnmetered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fault_response: {
      value: cdktf.stringToHclTerraform(struct!.faultResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeWireGroupWirePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeWireGroupWireProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthUnmetered !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthUnmetered = this._bandwidthUnmetered;
    }
    if (this._faultResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultResponse = this._faultResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeWireGroupWireProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthUnmetered = undefined;
      this._faultResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthUnmetered = value.bandwidthUnmetered;
      this._faultResponse = value.faultResponse;
    }
  }

  // bandwidth_unmetered - computed: false, optional: true, required: false
  private _bandwidthUnmetered?: number; 
  public get bandwidthUnmetered() {
    return this.getNumberAttribute('bandwidth_unmetered');
  }
  public set bandwidthUnmetered(value: number) {
    this._bandwidthUnmetered = value;
  }
  public resetBandwidthUnmetered() {
    this._bandwidthUnmetered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUnmeteredInput() {
    return this._bandwidthUnmetered;
  }

  // fault_response - computed: false, optional: true, required: false
  private _faultResponse?: string; 
  public get faultResponse() {
    return this.getStringAttribute('fault_response');
  }
  public set faultResponse(value: string) {
    this._faultResponse = value;
  }
  public resetFaultResponse() {
    this._faultResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultResponseInput() {
    return this._faultResponse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group google_compute_wire_group}
*/
export class GoogleComputeWireGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_wire_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeWireGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeWireGroup to import
  * @param importFromId The id of the existing GoogleComputeWireGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeWireGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_wire_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_wire_group google_compute_wire_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeWireGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeWireGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_wire_group',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.48.0',
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
    this._adminEnabled = config.adminEnabled;
    this._crossSiteNetwork = config.crossSiteNetwork;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._endpoints.internalValue = config.endpoints;
    this._timeouts.internalValue = config.timeouts;
    this._wireGroupProperties.internalValue = config.wireGroupProperties;
    this._wireProperties.internalValue = config.wireProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // cross_site_network - computed: false, optional: false, required: true
  private _crossSiteNetwork?: string; 
  public get crossSiteNetwork() {
    return this.getStringAttribute('cross_site_network');
  }
  public set crossSiteNetwork(value: string) {
    this._crossSiteNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSiteNetworkInput() {
    return this._crossSiteNetwork;
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

  // topology - computed: true, optional: false, required: false
  private _topology = new GoogleComputeWireGroupTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }

  // wires - computed: true, optional: false, required: false
  private _wires = new GoogleComputeWireGroupWiresList(this, "wires", false);
  public get wires() {
    return this._wires;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new GoogleComputeWireGroupEndpointsList(this, "endpoints", true);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: GoogleComputeWireGroupEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeWireGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeWireGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wire_group_properties - computed: false, optional: true, required: false
  private _wireGroupProperties = new GoogleComputeWireGroupWireGroupPropertiesOutputReference(this, "wire_group_properties");
  public get wireGroupProperties() {
    return this._wireGroupProperties;
  }
  public putWireGroupProperties(value: GoogleComputeWireGroupWireGroupProperties) {
    this._wireGroupProperties.internalValue = value;
  }
  public resetWireGroupProperties() {
    this._wireGroupProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireGroupPropertiesInput() {
    return this._wireGroupProperties.internalValue;
  }

  // wire_properties - computed: false, optional: true, required: false
  private _wireProperties = new GoogleComputeWireGroupWirePropertiesOutputReference(this, "wire_properties");
  public get wireProperties() {
    return this._wireProperties;
  }
  public putWireProperties(value: GoogleComputeWireGroupWireProperties) {
    this._wireProperties.internalValue = value;
  }
  public resetWireProperties() {
    this._wireProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirePropertiesInput() {
    return this._wireProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      cross_site_network: cdktf.stringToTerraform(this._crossSiteNetwork),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      endpoints: cdktf.listMapper(googleComputeWireGroupEndpointsToTerraform, true)(this._endpoints.internalValue),
      timeouts: googleComputeWireGroupTimeoutsToTerraform(this._timeouts.internalValue),
      wire_group_properties: googleComputeWireGroupWireGroupPropertiesToTerraform(this._wireGroupProperties.internalValue),
      wire_properties: googleComputeWireGroupWirePropertiesToTerraform(this._wireProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_enabled: {
        value: cdktf.booleanToHclTerraform(this._adminEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cross_site_network: {
        value: cdktf.stringToHclTerraform(this._crossSiteNetwork),
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
      endpoints: {
        value: cdktf.listMapperHcl(googleComputeWireGroupEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeWireGroupEndpointsList",
      },
      timeouts: {
        value: googleComputeWireGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeWireGroupTimeouts",
      },
      wire_group_properties: {
        value: googleComputeWireGroupWireGroupPropertiesToHclTerraform(this._wireGroupProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeWireGroupWireGroupPropertiesList",
      },
      wire_properties: {
        value: googleComputeWireGroupWirePropertiesToHclTerraform(this._wireProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeWireGroupWirePropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
