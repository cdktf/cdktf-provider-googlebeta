/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionSecurityPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Action to perform when the rule is matched. The following are the valid actions:
  * 
  * * allow: allow access to target.
  * 
  * * deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
  * 
  * * rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
  * 
  * * redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
  * 
  * * throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#action GoogleComputeRegionSecurityPolicyRule#action}
  */
  readonly action: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#description GoogleComputeRegionSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to true, the specified action is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#preview GoogleComputeRegionSecurityPolicyRule#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list.
  * The priority must be a positive value between 0 and 2147483647.
  * Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#priority GoogleComputeRegionSecurityPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}
  */
  readonly project?: string;
  /**
  * The Region in which the created Region Security Policy rule should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#region GoogleComputeRegionSecurityPolicyRule#region}
  */
  readonly region: string;
  /**
  * The name of the security policy this rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#security_policy GoogleComputeRegionSecurityPolicyRule#security_policy}
  */
  readonly securityPolicy: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#match GoogleComputeRegionSecurityPolicyRule#match}
  */
  readonly match?: GoogleComputeRegionSecurityPolicyRuleMatch;
  /**
  * network_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#network_match GoogleComputeRegionSecurityPolicyRule#network_match}
  */
  readonly networkMatch?: GoogleComputeRegionSecurityPolicyRuleNetworkMatch;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#timeouts GoogleComputeRegionSecurityPolicyRule#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionSecurityPolicyRuleTimeouts;
}
export interface GoogleComputeRegionSecurityPolicyRuleMatchConfig {
  /**
  * CIDR IP address range. Maximum number of srcIpRanges allowed is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
}

export function googleComputeRegionSecurityPolicyRuleMatchConfigToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference | GoogleComputeRegionSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
  }
}


export function googleComputeRegionSecurityPolicyRuleMatchConfigToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference | GoogleComputeRegionSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleMatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleMatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcIpRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcIpRanges = value.srcIpRanges;
    }
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
}
export interface GoogleComputeRegionSecurityPolicyRuleMatch {
  /**
  * Preconfigured versioned expression. If this field is specified, config must also be specified.
  * Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#versioned_expr GoogleComputeRegionSecurityPolicyRule#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#config GoogleComputeRegionSecurityPolicyRule#config}
  */
  readonly config?: GoogleComputeRegionSecurityPolicyRuleMatchConfig;
}

export function googleComputeRegionSecurityPolicyRuleMatchToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleMatchOutputReference | GoogleComputeRegionSecurityPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: googleComputeRegionSecurityPolicyRuleMatchConfigToTerraform(struct!.config),
  }
}


export function googleComputeRegionSecurityPolicyRuleMatchToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleMatchOutputReference | GoogleComputeRegionSecurityPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    versioned_expr: {
      value: cdktf.stringToHclTerraform(struct!.versionedExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: googleComputeRegionSecurityPolicyRuleMatchConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRuleMatchConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versionedExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionedExpr = this._versionedExpr;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
    }
  }

  // versioned_expr - computed: false, optional: true, required: false
  private _versionedExpr?: string; 
  public get versionedExpr() {
    return this.getStringAttribute('versioned_expr');
  }
  public set versionedExpr(value: string) {
    this._versionedExpr = value;
  }
  public resetVersionedExpr() {
    this._versionedExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedExprInput() {
    return this._versionedExpr;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleComputeRegionSecurityPolicyRuleMatchConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields {
  /**
  * Name of the user-defined field, as given in the definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#name GoogleComputeRegionSecurityPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Matching values of the field. Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#values GoogleComputeRegionSecurityPolicyRule#values}
  */
  readonly values?: string[];
}

export function googleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference {
    return new GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleNetworkMatch {
  /**
  * Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#dest_ip_ranges GoogleComputeRegionSecurityPolicyRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#dest_ports GoogleComputeRegionSecurityPolicyRule#dest_ports}
  */
  readonly destPorts?: string[];
  /**
  * IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#ip_protocols GoogleComputeRegionSecurityPolicyRule#ip_protocols}
  */
  readonly ipProtocols?: string[];
  /**
  * BGP Autonomous System Number associated with the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#src_asns GoogleComputeRegionSecurityPolicyRule#src_asns}
  */
  readonly srcAsns?: number[];
  /**
  * Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#src_ports GoogleComputeRegionSecurityPolicyRule#src_ports}
  */
  readonly srcPorts?: string[];
  /**
  * Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#src_region_codes GoogleComputeRegionSecurityPolicyRule#src_region_codes}
  */
  readonly srcRegionCodes?: string[];
  /**
  * user_defined_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#user_defined_fields GoogleComputeRegionSecurityPolicyRule#user_defined_fields}
  */
  readonly userDefinedFields?: GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields[] | cdktf.IResolvable;
}

export function googleComputeRegionSecurityPolicyRuleNetworkMatchToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference | GoogleComputeRegionSecurityPolicyRuleNetworkMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destIpRanges),
    dest_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destPorts),
    ip_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipProtocols),
    src_asns: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.srcAsns),
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
    src_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcPorts),
    src_region_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcRegionCodes),
    user_defined_fields: cdktf.listMapper(googleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsToTerraform, true)(struct!.userDefinedFields),
  }
}


export function googleComputeRegionSecurityPolicyRuleNetworkMatchToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference | GoogleComputeRegionSecurityPolicyRuleNetworkMatch): any {
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
    dest_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_asns: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.srcAsns),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    src_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_region_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcRegionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_defined_fields: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsToHclTerraform, true)(struct!.userDefinedFields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleNetworkMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpRanges = this._destIpRanges;
    }
    if (this._destPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPorts = this._destPorts;
    }
    if (this._ipProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocols = this._ipProtocols;
    }
    if (this._srcAsns !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAsns = this._srcAsns;
    }
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    if (this._srcPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPorts = this._srcPorts;
    }
    if (this._srcRegionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRegionCodes = this._srcRegionCodes;
    }
    if (this._userDefinedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFields = this._userDefinedFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleNetworkMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destIpRanges = undefined;
      this._destPorts = undefined;
      this._ipProtocols = undefined;
      this._srcAsns = undefined;
      this._srcIpRanges = undefined;
      this._srcPorts = undefined;
      this._srcRegionCodes = undefined;
      this._userDefinedFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destIpRanges = value.destIpRanges;
      this._destPorts = value.destPorts;
      this._ipProtocols = value.ipProtocols;
      this._srcAsns = value.srcAsns;
      this._srcIpRanges = value.srcIpRanges;
      this._srcPorts = value.srcPorts;
      this._srcRegionCodes = value.srcRegionCodes;
      this._userDefinedFields.internalValue = value.userDefinedFields;
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

  // dest_ports - computed: false, optional: true, required: false
  private _destPorts?: string[]; 
  public get destPorts() {
    return this.getListAttribute('dest_ports');
  }
  public set destPorts(value: string[]) {
    this._destPorts = value;
  }
  public resetDestPorts() {
    this._destPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortsInput() {
    return this._destPorts;
  }

  // ip_protocols - computed: false, optional: true, required: false
  private _ipProtocols?: string[]; 
  public get ipProtocols() {
    return this.getListAttribute('ip_protocols');
  }
  public set ipProtocols(value: string[]) {
    this._ipProtocols = value;
  }
  public resetIpProtocols() {
    this._ipProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolsInput() {
    return this._ipProtocols;
  }

  // src_asns - computed: false, optional: true, required: false
  private _srcAsns?: number[]; 
  public get srcAsns() {
    return this.getNumberListAttribute('src_asns');
  }
  public set srcAsns(value: number[]) {
    this._srcAsns = value;
  }
  public resetSrcAsns() {
    this._srcAsns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAsnsInput() {
    return this._srcAsns;
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

  // src_ports - computed: false, optional: true, required: false
  private _srcPorts?: string[]; 
  public get srcPorts() {
    return this.getListAttribute('src_ports');
  }
  public set srcPorts(value: string[]) {
    this._srcPorts = value;
  }
  public resetSrcPorts() {
    this._srcPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortsInput() {
    return this._srcPorts;
  }

  // src_region_codes - computed: false, optional: true, required: false
  private _srcRegionCodes?: string[]; 
  public get srcRegionCodes() {
    return this.getListAttribute('src_region_codes');
  }
  public set srcRegionCodes(value: string[]) {
    this._srcRegionCodes = value;
  }
  public resetSrcRegionCodes() {
    this._srcRegionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRegionCodesInput() {
    return this._srcRegionCodes;
  }

  // user_defined_fields - computed: false, optional: true, required: false
  private _userDefinedFields = new GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList(this, "user_defined_fields", false);
  public get userDefinedFields() {
    return this._userDefinedFields;
  }
  public putUserDefinedFields(value: GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields[] | cdktf.IResolvable) {
    this._userDefinedFields.internalValue = value;
  }
  public resetUserDefinedFields() {
    this._userDefinedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFieldsInput() {
    return this._userDefinedFields.internalValue;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#create GoogleComputeRegionSecurityPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#delete GoogleComputeRegionSecurityPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#update GoogleComputeRegionSecurityPolicyRule#update}
  */
  readonly update?: string;
}

export function googleComputeRegionSecurityPolicyRuleTimeoutsToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
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


export function googleComputeRegionSecurityPolicyRuleTimeoutsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule google_compute_region_security_policy_rule}
*/
export class GoogleComputeRegionSecurityPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_security_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeRegionSecurityPolicyRule to import
  * @param importFromId The id of the existing GoogleComputeRegionSecurityPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeRegionSecurityPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_security_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.20.0/docs/resources/google_compute_region_security_policy_rule google_compute_region_security_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionSecurityPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionSecurityPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_security_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '5.20.0',
        providerVersionConstraint: '~> 5.0'
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
    this._id = config.id;
    this._preview = config.preview;
    this._priority = config.priority;
    this._project = config.project;
    this._region = config.region;
    this._securityPolicy = config.securityPolicy;
    this._match.internalValue = config.match;
    this._networkMatch.internalValue = config.networkMatch;
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

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean | cdktf.IResolvable; 
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean | cdktf.IResolvable) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
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

  // security_policy - computed: false, optional: false, required: true
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // match - computed: false, optional: true, required: false
  private _match = new GoogleComputeRegionSecurityPolicyRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: GoogleComputeRegionSecurityPolicyRuleMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // network_match - computed: false, optional: true, required: false
  private _networkMatch = new GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference(this, "network_match");
  public get networkMatch() {
    return this._networkMatch;
  }
  public putNetworkMatch(value: GoogleComputeRegionSecurityPolicyRuleNetworkMatch) {
    this._networkMatch.internalValue = value;
  }
  public resetNetworkMatch() {
    this._networkMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMatchInput() {
    return this._networkMatch.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionSecurityPolicyRuleTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      preview: cdktf.booleanToTerraform(this._preview),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      match: googleComputeRegionSecurityPolicyRuleMatchToTerraform(this._match.internalValue),
      network_match: googleComputeRegionSecurityPolicyRuleNetworkMatchToTerraform(this._networkMatch.internalValue),
      timeouts: googleComputeRegionSecurityPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview: {
        value: cdktf.booleanToHclTerraform(this._preview),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: googleComputeRegionSecurityPolicyRuleMatchToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionSecurityPolicyRuleMatchList",
      },
      network_match: {
        value: googleComputeRegionSecurityPolicyRuleNetworkMatchToHclTerraform(this._networkMatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionSecurityPolicyRuleNetworkMatchList",
      },
      timeouts: {
        value: googleComputeRegionSecurityPolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeRegionSecurityPolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
