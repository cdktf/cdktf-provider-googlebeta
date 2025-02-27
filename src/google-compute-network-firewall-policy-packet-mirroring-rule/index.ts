// https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Action to perform when the client connection triggers the rule. Valid actions are "mirror", "do_not_mirror", "goto_next".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#action GoogleComputeNetworkFirewallPolicyPacketMirroringRule#action}
  */
  readonly action: string;
  /**
  * An optional description for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#description GoogleComputeNetworkFirewallPolicyPacketMirroringRule#description}
  */
  readonly description?: string;
  /**
  * The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#direction GoogleComputeNetworkFirewallPolicyPacketMirroringRule#direction}
  */
  readonly direction: string;
  /**
  * Denotes whether the firewall policy rule is disabled.
  * When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
  * If this is unspecified, the firewall policy rule will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#disabled GoogleComputeNetworkFirewallPolicyPacketMirroringRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The firewall policy of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#firewall_policy GoogleComputeNetworkFirewallPolicyPacketMirroringRule#firewall_policy}
  */
  readonly firewallPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#id GoogleComputeNetworkFirewallPolicyPacketMirroringRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An integer indicating the priority of a rule in the list.
  * The priority must be a positive value between 0 and 2147483647.
  * Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#priority GoogleComputeNetworkFirewallPolicyPacketMirroringRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#project GoogleComputeNetworkFirewallPolicyPacketMirroringRule#project}
  */
  readonly project?: string;
  /**
  * An optional name for the rule. This field is not a unique identifier and can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#rule_name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * A fully-qualified URL of a SecurityProfile resource instance.
  * Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
  * Must be specified if action = 'mirror' and cannot be specified for other actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#security_profile_group GoogleComputeNetworkFirewallPolicyPacketMirroringRule#security_profile_group}
  */
  readonly securityProfileGroup?: string;
  /**
  * Boolean flag indicating if the traffic should be TLS decrypted.
  * Can be set only if action = 'mirror' and cannot be set for other actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#tls_inspect GoogleComputeNetworkFirewallPolicyPacketMirroringRule#tls_inspect}
  */
  readonly tlsInspect?: boolean | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#match GoogleComputeNetworkFirewallPolicyPacketMirroringRule#match}
  */
  readonly match: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch;
  /**
  * target_secure_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#target_secure_tags GoogleComputeNetworkFirewallPolicyPacketMirroringRule#target_secure_tags}
  */
  readonly targetSecureTags?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#timeouts GoogleComputeNetworkFirewallPolicyPacketMirroringRule#timeouts}
  */
  readonly timeouts?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts;
}
export interface GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs {
  /**
  * The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule.
  * This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ip_protocol GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
  * Example inputs include: ["22"], ["80","443"], and ["12345-12349"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#ports GoogleComputeNetworkFirewallPolicyPacketMirroringRule#ports}
  */
  readonly ports?: string[];
}

export function googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsToTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsToHclTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipProtocol = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipProtocol = value.ipProtocol;
      this._ports = value.ports;
    }
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference {
    return new GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch {
  /**
  * CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#dest_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#src_ip_ranges GoogleComputeNetworkFirewallPolicyPacketMirroringRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * layer4_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#layer4_configs GoogleComputeNetworkFirewallPolicyPacketMirroringRule#layer4_configs}
  */
  readonly layer4Configs: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs[] | cdktf.IResolvable;
}

export function googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchToTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destIpRanges),
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
    layer4_configs: cdktf.listMapper(googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsToTerraform, true)(struct!.layer4Configs),
  }
}


export function googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchToHclTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference | GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer4_configs: {
      value: cdktf.listMapperHcl(googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsToHclTerraform, true)(struct!.layer4Configs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpRanges = this._destIpRanges;
    }
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    if (this._layer4Configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4Configs = this._layer4Configs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destIpRanges = undefined;
      this._srcIpRanges = undefined;
      this._layer4Configs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destIpRanges = value.destIpRanges;
      this._srcIpRanges = value.srcIpRanges;
      this._layer4Configs.internalValue = value.layer4Configs;
    }
  }

  // dest_ip_ranges - computed: false, optional: true, required: false
  private _destIpRanges?: string[]; 
  public get destIpRanges() {
    return this.getListAttribute('dest_ip_ranges');
  }
  public set destIpRanges(value: string[]) {
    this._destIpRanges = value;
  }
  public resetDestIpRanges() {
    this._destIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpRangesInput() {
    return this._destIpRanges;
  }

  // src_ip_ranges - computed: false, optional: true, required: false
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  public resetSrcIpRanges() {
    this._srcIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }

  // layer4_configs - computed: false, optional: false, required: true
  private _layer4Configs = new GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4ConfigsList(this, "layer4_configs", false);
  public get layer4Configs() {
    return this._layer4Configs;
  }
  public putLayer4Configs(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchLayer4Configs[] | cdktf.IResolvable) {
    this._layer4Configs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4ConfigsInput() {
    return this._layer4Configs.internalValue;
  }
}
export interface GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags {
  /**
  * Name of the secure tag, created with TagManager's TagValue API.
  * diff_suppress_func: 'tpgresource.CompareSelfLinkOrResourceName'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#name GoogleComputeNetworkFirewallPolicyPacketMirroringRule#name}
  */
  readonly name?: string;
}

export function googleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsToTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsToHclTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference {
    return new GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#create GoogleComputeNetworkFirewallPolicyPacketMirroringRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#delete GoogleComputeNetworkFirewallPolicyPacketMirroringRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#update GoogleComputeNetworkFirewallPolicyPacketMirroringRule#update}
  */
  readonly update?: string;
}

export function googleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsToTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts | cdktf.IResolvable): any {
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


export function googleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsToHclTerraform(struct?: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule google_compute_network_firewall_policy_packet_mirroring_rule}
*/
export class GoogleComputeNetworkFirewallPolicyPacketMirroringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_network_firewall_policy_packet_mirroring_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeNetworkFirewallPolicyPacketMirroringRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import
  * @param importFromId The id of the existing GoogleComputeNetworkFirewallPolicyPacketMirroringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyPacketMirroringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_network_firewall_policy_packet_mirroring_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_network_firewall_policy_packet_mirroring_rule google_compute_network_firewall_policy_packet_mirroring_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_firewall_policy_packet_mirroring_rule',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.23.0',
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
    this._action = config.action;
    this._description = config.description;
    this._direction = config.direction;
    this._disabled = config.disabled;
    this._firewallPolicy = config.firewallPolicy;
    this._id = config.id;
    this._priority = config.priority;
    this._project = config.project;
    this._ruleName = config.ruleName;
    this._securityProfileGroup = config.securityProfileGroup;
    this._tlsInspect = config.tlsInspect;
    this._match.internalValue = config.match;
    this._targetSecureTags.internalValue = config.targetSecureTags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy?: string; 
  public get firewallPolicy() {
    return this.getStringAttribute('firewall_policy');
  }
  public set firewallPolicy(value: string) {
    this._firewallPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
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

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_tuple_count - computed: true, optional: false, required: false
  public get ruleTupleCount() {
    return this.getNumberAttribute('rule_tuple_count');
  }

  // security_profile_group - computed: false, optional: true, required: false
  private _securityProfileGroup?: string; 
  public get securityProfileGroup() {
    return this.getStringAttribute('security_profile_group');
  }
  public set securityProfileGroup(value: string) {
    this._securityProfileGroup = value;
  }
  public resetSecurityProfileGroup() {
    this._securityProfileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileGroupInput() {
    return this._securityProfileGroup;
  }

  // tls_inspect - computed: false, optional: true, required: false
  private _tlsInspect?: boolean | cdktf.IResolvable; 
  public get tlsInspect() {
    return this.getBooleanAttribute('tls_inspect');
  }
  public set tlsInspect(value: boolean | cdktf.IResolvable) {
    this._tlsInspect = value;
  }
  public resetTlsInspect() {
    this._tlsInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectInput() {
    return this._tlsInspect;
  }

  // match - computed: false, optional: false, required: true
  private _match = new GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // target_secure_tags - computed: false, optional: true, required: false
  private _targetSecureTags = new GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList(this, "target_secure_tags", false);
  public get targetSecureTags() {
    return this._targetSecureTags;
  }
  public putTargetSecureTags(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTags[] | cdktf.IResolvable) {
    this._targetSecureTags.internalValue = value;
  }
  public resetTargetSecureTags() {
    this._targetSecureTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecureTagsInput() {
    return this._targetSecureTags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      disabled: cdktf.booleanToTerraform(this._disabled),
      firewall_policy: cdktf.stringToTerraform(this._firewallPolicy),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      security_profile_group: cdktf.stringToTerraform(this._securityProfileGroup),
      tls_inspect: cdktf.booleanToTerraform(this._tlsInspect),
      match: googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchToTerraform(this._match.internalValue),
      target_secure_tags: cdktf.listMapper(googleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsToTerraform, true)(this._targetSecureTags.internalValue),
      timeouts: googleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_policy: {
        value: cdktf.stringToHclTerraform(this._firewallPolicy),
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile_group: {
        value: cdktf.stringToHclTerraform(this._securityProfileGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_inspect: {
        value: cdktf.booleanToHclTerraform(this._tlsInspect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match: {
        value: googleComputeNetworkFirewallPolicyPacketMirroringRuleMatchToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeNetworkFirewallPolicyPacketMirroringRuleMatchList",
      },
      target_secure_tags: {
        value: cdktf.listMapperHcl(googleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsToHclTerraform, true)(this._targetSecureTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTargetSecureTagsList",
      },
      timeouts: {
        value: googleComputeNetworkFirewallPolicyPacketMirroringRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeNetworkFirewallPolicyPacketMirroringRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
