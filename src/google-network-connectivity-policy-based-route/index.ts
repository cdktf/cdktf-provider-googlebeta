/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkConnectivityPolicyBasedRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#description GoogleNetworkConnectivityPolicyBasedRoute#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#labels GoogleNetworkConnectivityPolicyBasedRoute#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the policy based route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#name GoogleNetworkConnectivityPolicyBasedRoute#name}
  */
  readonly name: string;
  /**
  * Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#network GoogleNetworkConnectivityPolicyBasedRoute#network}
  */
  readonly network: string;
  /**
  * The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_ilb_ip GoogleNetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}
  */
  readonly nextHopIlbIp?: string;
  /**
  * Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_other_routes GoogleNetworkConnectivityPolicyBasedRoute#next_hop_other_routes}
  */
  readonly nextHopOtherRoutes?: string;
  /**
  * The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#priority GoogleNetworkConnectivityPolicyBasedRoute#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}
  */
  readonly project?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#filter GoogleNetworkConnectivityPolicyBasedRoute#filter}
  */
  readonly filter: GoogleNetworkConnectivityPolicyBasedRouteFilter;
  /**
  * interconnect_attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#interconnect_attachment GoogleNetworkConnectivityPolicyBasedRoute#interconnect_attachment}
  */
  readonly interconnectAttachment?: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#timeouts GoogleNetworkConnectivityPolicyBasedRoute#timeouts}
  */
  readonly timeouts?: GoogleNetworkConnectivityPolicyBasedRouteTimeouts;
  /**
  * virtual_machine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#virtual_machine GoogleNetworkConnectivityPolicyBasedRoute#virtual_machine}
  */
  readonly virtualMachine?: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine;
}
export interface GoogleNetworkConnectivityPolicyBasedRouteWarnings {
}

export function googleNetworkConnectivityPolicyBasedRouteWarningsToTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleNetworkConnectivityPolicyBasedRouteWarningsToHclTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkConnectivityPolicyBasedRouteWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkConnectivityPolicyBasedRouteWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // warning_message - computed: true, optional: false, required: false
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
}

export class GoogleNetworkConnectivityPolicyBasedRouteWarningsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference {
    return new GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkConnectivityPolicyBasedRouteFilter {
  /**
  * The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#dest_range GoogleNetworkConnectivityPolicyBasedRoute#dest_range}
  */
  readonly destRange?: string;
  /**
  * The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#ip_protocol GoogleNetworkConnectivityPolicyBasedRoute#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#protocol_version GoogleNetworkConnectivityPolicyBasedRoute#protocol_version}
  */
  readonly protocolVersion: string;
  /**
  * The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#src_range GoogleNetworkConnectivityPolicyBasedRoute#src_range}
  */
  readonly srcRange?: string;
}

export function googleNetworkConnectivityPolicyBasedRouteFilterToTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference | GoogleNetworkConnectivityPolicyBasedRouteFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_range: cdktf.stringToTerraform(struct!.destRange),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    protocol_version: cdktf.stringToTerraform(struct!.protocolVersion),
    src_range: cdktf.stringToTerraform(struct!.srcRange),
  }
}


export function googleNetworkConnectivityPolicyBasedRouteFilterToHclTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference | GoogleNetworkConnectivityPolicyBasedRouteFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_range: {
      value: cdktf.stringToHclTerraform(struct!.destRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.protocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_range: {
      value: cdktf.stringToHclTerraform(struct!.srcRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkConnectivityPolicyBasedRouteFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRange = this._destRange;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._srcRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRange = this._srcRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkConnectivityPolicyBasedRouteFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destRange = undefined;
      this._ipProtocol = undefined;
      this._protocolVersion = undefined;
      this._srcRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destRange = value.destRange;
      this._ipProtocol = value.ipProtocol;
      this._protocolVersion = value.protocolVersion;
      this._srcRange = value.srcRange;
    }
  }

  // dest_range - computed: false, optional: true, required: false
  private _destRange?: string; 
  public get destRange() {
    return this.getStringAttribute('dest_range');
  }
  public set destRange(value: string) {
    this._destRange = value;
  }
  public resetDestRange() {
    this._destRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRangeInput() {
    return this._destRange;
  }

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // protocol_version - computed: false, optional: false, required: true
  private _protocolVersion?: string; 
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // src_range - computed: false, optional: true, required: false
  private _srcRange?: string; 
  public get srcRange() {
    return this.getStringAttribute('src_range');
  }
  public set srcRange(value: string) {
    this._srcRange = value;
  }
  public resetSrcRange() {
    this._srcRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRangeInput() {
    return this._srcRange;
  }
}
export interface GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment {
  /**
  * Cloud region to install this policy-based route on for Interconnect attachments. Use 'all' to install it on all Interconnect attachments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#region GoogleNetworkConnectivityPolicyBasedRoute#region}
  */
  readonly region: string;
}

export function googleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentToTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference | GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function googleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentToHclTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference | GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface GoogleNetworkConnectivityPolicyBasedRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}
  */
  readonly update?: string;
}

export function googleNetworkConnectivityPolicyBasedRouteTimeoutsToTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkConnectivityPolicyBasedRouteTimeoutsToHclTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkConnectivityPolicyBasedRouteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkConnectivityPolicyBasedRouteTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine {
  /**
  * A list of VM instance tags that this policy-based route applies to. VM instances that have ANY of tags specified here will install this PBR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#tags GoogleNetworkConnectivityPolicyBasedRoute#tags}
  */
  readonly tags: string[];
}

export function googleNetworkConnectivityPolicyBasedRouteVirtualMachineToTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference | GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function googleNetworkConnectivityPolicyBasedRouteVirtualMachineToHclTerraform(struct?: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference | GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route google_network_connectivity_policy_based_route}
*/
export class GoogleNetworkConnectivityPolicyBasedRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_connectivity_policy_based_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkConnectivityPolicyBasedRoute to import
  * @param importFromId The id of the existing GoogleNetworkConnectivityPolicyBasedRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkConnectivityPolicyBasedRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_connectivity_policy_based_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_policy_based_route google_network_connectivity_policy_based_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkConnectivityPolicyBasedRouteConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkConnectivityPolicyBasedRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_connectivity_policy_based_route',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._network = config.network;
    this._nextHopIlbIp = config.nextHopIlbIp;
    this._nextHopOtherRoutes = config.nextHopOtherRoutes;
    this._priority = config.priority;
    this._project = config.project;
    this._filter.internalValue = config.filter;
    this._interconnectAttachment.internalValue = config.interconnectAttachment;
    this._timeouts.internalValue = config.timeouts;
    this._virtualMachine.internalValue = config.virtualMachine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // next_hop_ilb_ip - computed: false, optional: true, required: false
  private _nextHopIlbIp?: string; 
  public get nextHopIlbIp() {
    return this.getStringAttribute('next_hop_ilb_ip');
  }
  public set nextHopIlbIp(value: string) {
    this._nextHopIlbIp = value;
  }
  public resetNextHopIlbIp() {
    this._nextHopIlbIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIlbIpInput() {
    return this._nextHopIlbIp;
  }

  // next_hop_other_routes - computed: false, optional: true, required: false
  private _nextHopOtherRoutes?: string; 
  public get nextHopOtherRoutes() {
    return this.getStringAttribute('next_hop_other_routes');
  }
  public set nextHopOtherRoutes(value: string) {
    this._nextHopOtherRoutes = value;
  }
  public resetNextHopOtherRoutes() {
    this._nextHopOtherRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopOtherRoutesInput() {
    return this._nextHopOtherRoutes;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new GoogleNetworkConnectivityPolicyBasedRouteWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleNetworkConnectivityPolicyBasedRouteFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // interconnect_attachment - computed: false, optional: true, required: false
  private _interconnectAttachment = new GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference(this, "interconnect_attachment");
  public get interconnectAttachment() {
    return this._interconnectAttachment;
  }
  public putInterconnectAttachment(value: GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment) {
    this._interconnectAttachment.internalValue = value;
  }
  public resetInterconnectAttachment() {
    this._interconnectAttachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectAttachmentInput() {
    return this._interconnectAttachment.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkConnectivityPolicyBasedRouteTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine = new GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference(this, "virtual_machine");
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine) {
    this._virtualMachine.internalValue = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      next_hop_ilb_ip: cdktf.stringToTerraform(this._nextHopIlbIp),
      next_hop_other_routes: cdktf.stringToTerraform(this._nextHopOtherRoutes),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      filter: googleNetworkConnectivityPolicyBasedRouteFilterToTerraform(this._filter.internalValue),
      interconnect_attachment: googleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentToTerraform(this._interconnectAttachment.internalValue),
      timeouts: googleNetworkConnectivityPolicyBasedRouteTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_machine: googleNetworkConnectivityPolicyBasedRouteVirtualMachineToTerraform(this._virtualMachine.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_ilb_ip: {
        value: cdktf.stringToHclTerraform(this._nextHopIlbIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_other_routes: {
        value: cdktf.stringToHclTerraform(this._nextHopOtherRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
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
      filter: {
        value: googleNetworkConnectivityPolicyBasedRouteFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkConnectivityPolicyBasedRouteFilterList",
      },
      interconnect_attachment: {
        value: googleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentToHclTerraform(this._interconnectAttachment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentList",
      },
      timeouts: {
        value: googleNetworkConnectivityPolicyBasedRouteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkConnectivityPolicyBasedRouteTimeouts",
      },
      virtual_machine: {
        value: googleNetworkConnectivityPolicyBasedRouteVirtualMachineToHclTerraform(this._virtualMachine.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
