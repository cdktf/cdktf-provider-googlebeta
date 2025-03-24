/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDnsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A textual description field. Defaults to 'Managed by Terraform'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#description GoogleDnsPolicy#description}
  */
  readonly description?: string;
  /**
  * Allows networks bound to this policy to receive DNS queries sent
  * by VMs or applications over VPN connections. When enabled, a
  * virtual IP address will be allocated from each of the sub-networks
  * that are bound to this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#enable_inbound_forwarding GoogleDnsPolicy#enable_inbound_forwarding}
  */
  readonly enableInboundForwarding?: boolean | cdktf.IResolvable;
  /**
  * Controls whether logging is enabled for the networks bound to this policy.
  * Defaults to no logging if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#enable_logging GoogleDnsPolicy#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#id GoogleDnsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User assigned name for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#name GoogleDnsPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#project GoogleDnsPolicy#project}
  */
  readonly project?: string;
  /**
  * alternative_name_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#alternative_name_server_config GoogleDnsPolicy#alternative_name_server_config}
  */
  readonly alternativeNameServerConfig?: GoogleDnsPolicyAlternativeNameServerConfig;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#networks GoogleDnsPolicy#networks}
  */
  readonly networks?: GoogleDnsPolicyNetworks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#timeouts GoogleDnsPolicy#timeouts}
  */
  readonly timeouts?: GoogleDnsPolicyTimeouts;
}
export interface GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers {
  /**
  * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
  * decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
  * to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#forwarding_path GoogleDnsPolicy#forwarding_path}
  */
  readonly forwardingPath?: string;
  /**
  * IPv4 address to forward to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#ipv4_address GoogleDnsPolicy#ipv4_address}
  */
  readonly ipv4Address: string;
}

export function googleDnsPolicyAlternativeNameServerConfigTargetNameServersToTerraform(struct?: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_path: cdktf.stringToTerraform(struct!.forwardingPath),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}


export function googleDnsPolicyAlternativeNameServerConfigTargetNameServersToHclTerraform(struct?: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_path: {
      value: cdktf.stringToHclTerraform(struct!.forwardingPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingPath = this._forwardingPath;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardingPath = undefined;
      this._ipv4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardingPath = value.forwardingPath;
      this._ipv4Address = value.ipv4Address;
    }
  }

  // forwarding_path - computed: false, optional: true, required: false
  private _forwardingPath?: string; 
  public get forwardingPath() {
    return this.getStringAttribute('forwarding_path');
  }
  public set forwardingPath(value: string) {
    this._forwardingPath = value;
  }
  public resetForwardingPath() {
    this._forwardingPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingPathInput() {
    return this._forwardingPath;
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }
}

export class GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList extends cdktf.ComplexList {
  public internalValue? : GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers[] | cdktf.IResolvable

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
  public get(index: number): GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference {
    return new GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsPolicyAlternativeNameServerConfig {
  /**
  * target_name_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#target_name_servers GoogleDnsPolicy#target_name_servers}
  */
  readonly targetNameServers: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers[] | cdktf.IResolvable;
}

export function googleDnsPolicyAlternativeNameServerConfigToTerraform(struct?: GoogleDnsPolicyAlternativeNameServerConfigOutputReference | GoogleDnsPolicyAlternativeNameServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_name_servers: cdktf.listMapper(googleDnsPolicyAlternativeNameServerConfigTargetNameServersToTerraform, true)(struct!.targetNameServers),
  }
}


export function googleDnsPolicyAlternativeNameServerConfigToHclTerraform(struct?: GoogleDnsPolicyAlternativeNameServerConfigOutputReference | GoogleDnsPolicyAlternativeNameServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_name_servers: {
      value: cdktf.listMapperHcl(googleDnsPolicyAlternativeNameServerConfigTargetNameServersToHclTerraform, true)(struct!.targetNameServers),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsPolicyAlternativeNameServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsPolicyAlternativeNameServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetNameServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNameServers = this._targetNameServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsPolicyAlternativeNameServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetNameServers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetNameServers.internalValue = value.targetNameServers;
    }
  }

  // target_name_servers - computed: false, optional: false, required: true
  private _targetNameServers = new GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList(this, "target_name_servers", true);
  public get targetNameServers() {
    return this._targetNameServers;
  }
  public putTargetNameServers(value: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers[] | cdktf.IResolvable) {
    this._targetNameServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameServersInput() {
    return this._targetNameServers.internalValue;
  }
}
export interface GoogleDnsPolicyNetworks {
  /**
  * The id or fully qualified URL of the VPC network to forward queries to.
  * This should be formatted like 'projects/{project}/global/networks/{network}' or
  * 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#network_url GoogleDnsPolicy#network_url}
  */
  readonly networkUrl: string;
}

export function googleDnsPolicyNetworksToTerraform(struct?: GoogleDnsPolicyNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}


export function googleDnsPolicyNetworksToHclTerraform(struct?: GoogleDnsPolicyNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_url: {
      value: cdktf.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsPolicyNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDnsPolicyNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsPolicyNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkUrl = value.networkUrl;
    }
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }
}

export class GoogleDnsPolicyNetworksList extends cdktf.ComplexList {
  public internalValue? : GoogleDnsPolicyNetworks[] | cdktf.IResolvable

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
  public get(index: number): GoogleDnsPolicyNetworksOutputReference {
    return new GoogleDnsPolicyNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#create GoogleDnsPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#delete GoogleDnsPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#update GoogleDnsPolicy#update}
  */
  readonly update?: string;
}

export function googleDnsPolicyTimeoutsToTerraform(struct?: GoogleDnsPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleDnsPolicyTimeoutsToHclTerraform(struct?: GoogleDnsPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleDnsPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDnsPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDnsPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy google_dns_policy}
*/
export class GoogleDnsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDnsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDnsPolicy to import
  * @param importFromId The id of the existing GoogleDnsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDnsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dns_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dns_policy google_dns_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDnsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDnsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.26.0',
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
    this._enableInboundForwarding = config.enableInboundForwarding;
    this._enableLogging = config.enableLogging;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._alternativeNameServerConfig.internalValue = config.alternativeNameServerConfig;
    this._networks.internalValue = config.networks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_inbound_forwarding - computed: false, optional: true, required: false
  private _enableInboundForwarding?: boolean | cdktf.IResolvable; 
  public get enableInboundForwarding() {
    return this.getBooleanAttribute('enable_inbound_forwarding');
  }
  public set enableInboundForwarding(value: boolean | cdktf.IResolvable) {
    this._enableInboundForwarding = value;
  }
  public resetEnableInboundForwarding() {
    this._enableInboundForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInboundForwardingInput() {
    return this._enableInboundForwarding;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
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

  // alternative_name_server_config - computed: false, optional: true, required: false
  private _alternativeNameServerConfig = new GoogleDnsPolicyAlternativeNameServerConfigOutputReference(this, "alternative_name_server_config");
  public get alternativeNameServerConfig() {
    return this._alternativeNameServerConfig;
  }
  public putAlternativeNameServerConfig(value: GoogleDnsPolicyAlternativeNameServerConfig) {
    this._alternativeNameServerConfig.internalValue = value;
  }
  public resetAlternativeNameServerConfig() {
    this._alternativeNameServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeNameServerConfigInput() {
    return this._alternativeNameServerConfig.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new GoogleDnsPolicyNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: GoogleDnsPolicyNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDnsPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDnsPolicyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enable_inbound_forwarding: cdktf.booleanToTerraform(this._enableInboundForwarding),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      alternative_name_server_config: googleDnsPolicyAlternativeNameServerConfigToTerraform(this._alternativeNameServerConfig.internalValue),
      networks: cdktf.listMapper(googleDnsPolicyNetworksToTerraform, true)(this._networks.internalValue),
      timeouts: googleDnsPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      enable_inbound_forwarding: {
        value: cdktf.booleanToHclTerraform(this._enableInboundForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging: {
        value: cdktf.booleanToHclTerraform(this._enableLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      alternative_name_server_config: {
        value: googleDnsPolicyAlternativeNameServerConfigToHclTerraform(this._alternativeNameServerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsPolicyAlternativeNameServerConfigList",
      },
      networks: {
        value: cdktf.listMapperHcl(googleDnsPolicyNetworksToHclTerraform, true)(this._networks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleDnsPolicyNetworksList",
      },
      timeouts: {
        value: googleDnsPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDnsPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
