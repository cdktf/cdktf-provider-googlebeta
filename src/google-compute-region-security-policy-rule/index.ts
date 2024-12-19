// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#action GoogleComputeRegionSecurityPolicyRule#action}
  */
  readonly action: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#description GoogleComputeRegionSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to true, the specified action is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#preview GoogleComputeRegionSecurityPolicyRule#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list.
  * The priority must be a positive value between 0 and 2147483647.
  * Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#priority GoogleComputeRegionSecurityPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}
  */
  readonly project?: string;
  /**
  * The Region in which the created Region Security Policy rule should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#region GoogleComputeRegionSecurityPolicyRule#region}
  */
  readonly region: string;
  /**
  * The name of the security policy this rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#security_policy GoogleComputeRegionSecurityPolicyRule#security_policy}
  */
  readonly securityPolicy: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#match GoogleComputeRegionSecurityPolicyRule#match}
  */
  readonly match?: GoogleComputeRegionSecurityPolicyRuleMatch;
  /**
  * network_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#network_match GoogleComputeRegionSecurityPolicyRule#network_match}
  */
  readonly networkMatch?: GoogleComputeRegionSecurityPolicyRuleNetworkMatch;
  /**
  * preconfigured_waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#preconfigured_waf_config GoogleComputeRegionSecurityPolicyRule#preconfigured_waf_config}
  */
  readonly preconfiguredWafConfig?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig;
  /**
  * rate_limit_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#rate_limit_options GoogleComputeRegionSecurityPolicyRule#rate_limit_options}
  */
  readonly rateLimitOptions?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#timeouts GoogleComputeRegionSecurityPolicyRule#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionSecurityPolicyRuleTimeouts;
}
export interface GoogleComputeRegionSecurityPolicyRuleMatchConfig {
  /**
  * CIDR IP address range. Maximum number of srcIpRanges allowed is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}
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
export interface GoogleComputeRegionSecurityPolicyRuleMatchExpr {
  /**
  * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#expression GoogleComputeRegionSecurityPolicyRule#expression}
  */
  readonly expression: string;
}

export function googleComputeRegionSecurityPolicyRuleMatchExprToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference | GoogleComputeRegionSecurityPolicyRuleMatchExpr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function googleComputeRegionSecurityPolicyRuleMatchExprToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference | GoogleComputeRegionSecurityPolicyRuleMatchExpr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleMatchExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleMatchExpr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleMatch {
  /**
  * Preconfigured versioned expression. If this field is specified, config must also be specified.
  * Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#versioned_expr GoogleComputeRegionSecurityPolicyRule#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#config GoogleComputeRegionSecurityPolicyRule#config}
  */
  readonly config?: GoogleComputeRegionSecurityPolicyRuleMatchConfig;
  /**
  * expr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#expr GoogleComputeRegionSecurityPolicyRule#expr}
  */
  readonly expr?: GoogleComputeRegionSecurityPolicyRuleMatchExpr;
}

export function googleComputeRegionSecurityPolicyRuleMatchToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleMatchOutputReference | GoogleComputeRegionSecurityPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: googleComputeRegionSecurityPolicyRuleMatchConfigToTerraform(struct!.config),
    expr: googleComputeRegionSecurityPolicyRuleMatchExprToTerraform(struct!.expr),
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
    expr: {
      value: googleComputeRegionSecurityPolicyRuleMatchExprToHclTerraform(struct!.expr),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRuleMatchExprList",
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
    if (this._expr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
      this._expr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
      this._expr.internalValue = value.expr;
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

  // expr - computed: false, optional: true, required: false
  private _expr = new GoogleComputeRegionSecurityPolicyRuleMatchExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: GoogleComputeRegionSecurityPolicyRuleMatchExpr) {
    this._expr.internalValue = value;
  }
  public resetExpr() {
    this._expr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields {
  /**
  * Name of the user-defined field, as given in the definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#name GoogleComputeRegionSecurityPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Matching values of the field. Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#values GoogleComputeRegionSecurityPolicyRule#values}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#dest_ip_ranges GoogleComputeRegionSecurityPolicyRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#dest_ports GoogleComputeRegionSecurityPolicyRule#dest_ports}
  */
  readonly destPorts?: string[];
  /**
  * IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#ip_protocols GoogleComputeRegionSecurityPolicyRule#ip_protocols}
  */
  readonly ipProtocols?: string[];
  /**
  * BGP Autonomous System Number associated with the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#src_asns GoogleComputeRegionSecurityPolicyRule#src_asns}
  */
  readonly srcAsns?: number[];
  /**
  * Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#src_ports GoogleComputeRegionSecurityPolicyRule#src_ports}
  */
  readonly srcPorts?: string[];
  /**
  * Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#src_region_codes GoogleComputeRegionSecurityPolicyRule#src_region_codes}
  */
  readonly srcRegionCodes?: string[];
  /**
  * user_defined_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#user_defined_fields GoogleComputeRegionSecurityPolicyRule#user_defined_fields}
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
export interface GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#operator GoogleComputeRegionSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#value GoogleComputeRegionSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion {
  /**
  * A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.
  * If omitted, it refers to all the rule IDs under the WAF rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#target_rule_ids GoogleComputeRegionSecurityPolicyRule#target_rule_ids}
  */
  readonly targetRuleIds?: string[];
  /**
  * Target WAF rule set to apply the preconfigured WAF exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#target_rule_set GoogleComputeRegionSecurityPolicyRule#target_rule_set}
  */
  readonly targetRuleSet: string;
  /**
  * request_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#request_cookie GoogleComputeRegionSecurityPolicyRule#request_cookie}
  */
  readonly requestCookie?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#request_header GoogleComputeRegionSecurityPolicyRule#request_header}
  */
  readonly requestHeader?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable;
  /**
  * request_query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#request_query_param GoogleComputeRegionSecurityPolicyRule#request_query_param}
  */
  readonly requestQueryParam?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#request_uri GoogleComputeRegionSecurityPolicyRule#request_uri}
  */
  readonly requestUri?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable;
}

export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetRuleIds),
    target_rule_set: cdktf.stringToTerraform(struct!.targetRuleSet),
    request_cookie: cdktf.listMapper(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform, true)(struct!.requestCookie),
    request_header: cdktf.listMapper(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_query_param: cdktf.listMapper(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform, true)(struct!.requestQueryParam),
    request_uri: cdktf.listMapper(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform, true)(struct!.requestUri),
  }
}


export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetRuleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.targetRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cookie: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform, true)(struct!.requestCookie),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList",
    },
    request_header: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList",
    },
    request_query_param: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform, true)(struct!.requestQueryParam),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList",
    },
    request_uri: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform, true)(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRuleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleIds = this._targetRuleIds;
    }
    if (this._targetRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleSet = this._targetRuleSet;
    }
    if (this._requestCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookie = this._requestCookie?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestQueryParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestQueryParam = this._requestQueryParam?.internalValue;
    }
    if (this._requestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRuleIds = undefined;
      this._targetRuleSet = undefined;
      this._requestCookie.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestQueryParam.internalValue = undefined;
      this._requestUri.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRuleIds = value.targetRuleIds;
      this._targetRuleSet = value.targetRuleSet;
      this._requestCookie.internalValue = value.requestCookie;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestQueryParam.internalValue = value.requestQueryParam;
      this._requestUri.internalValue = value.requestUri;
    }
  }

  // target_rule_ids - computed: false, optional: true, required: false
  private _targetRuleIds?: string[]; 
  public get targetRuleIds() {
    return this.getListAttribute('target_rule_ids');
  }
  public set targetRuleIds(value: string[]) {
    this._targetRuleIds = value;
  }
  public resetTargetRuleIds() {
    this._targetRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleIdsInput() {
    return this._targetRuleIds;
  }

  // target_rule_set - computed: false, optional: false, required: true
  private _targetRuleSet?: string; 
  public get targetRuleSet() {
    return this.getStringAttribute('target_rule_set');
  }
  public set targetRuleSet(value: string) {
    this._targetRuleSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleSetInput() {
    return this._targetRuleSet;
  }

  // request_cookie - computed: false, optional: true, required: false
  private _requestCookie = new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(this, "request_cookie", false);
  public get requestCookie() {
    return this._requestCookie;
  }
  public putRequestCookie(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable) {
    this._requestCookie.internalValue = value;
  }
  public resetRequestCookie() {
    this._requestCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookieInput() {
    return this._requestCookie.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_query_param - computed: false, optional: true, required: false
  private _requestQueryParam = new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(this, "request_query_param", false);
  public get requestQueryParam() {
    return this._requestQueryParam;
  }
  public putRequestQueryParam(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable) {
    this._requestQueryParam.internalValue = value;
  }
  public resetRequestQueryParam() {
    this._requestQueryParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryParamInput() {
    return this._requestQueryParam.internalValue;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri = new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable) {
    this._requestUri.internalValue = value;
  }
  public resetRequestUri() {
    this._requestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri.internalValue;
  }
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#exclusion GoogleComputeRegionSecurityPolicyRule#exclusion}
  */
  readonly exclusion?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable;
}

export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference | GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference | GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#count GoogleComputeRegionSecurityPolicyRule#count}
  */
  readonly count?: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#interval_sec GoogleComputeRegionSecurityPolicyRule#interval_sec}
  */
  readonly intervalSec?: number;
}

export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference | GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference | GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold): any {
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
    interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._intervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSec = this._intervalSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._intervalSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._intervalSec = value.intervalSec;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs {
  /**
  * Rate limit key name applicable only for the following key types:
  * HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.
  * HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_name GoogleComputeRegionSecurityPolicyRule#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Determines the key to enforce the rateLimitThreshold on. Possible values are:
  * * ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
  * * IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
  * * HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
  * * XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
  * * HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
  * * HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
  * * SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
  * * REGION_CODE: The country/region from which the request originates.
  * * TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
  * * USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_type GoogleComputeRegionSecurityPolicyRule#enforce_on_key_type}
  */
  readonly enforceOnKeyType?: string;
}

export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_on_key_name: cdktf.stringToTerraform(struct!.enforceOnKeyName),
    enforce_on_key_type: cdktf.stringToTerraform(struct!.enforceOnKeyType),
  }
}


export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_on_key_name: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_on_key_type: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceOnKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyName = this._enforceOnKeyName;
    }
    if (this._enforceOnKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyType = this._enforceOnKeyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforceOnKeyName = undefined;
      this._enforceOnKeyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforceOnKeyName = value.enforceOnKeyName;
      this._enforceOnKeyType = value.enforceOnKeyType;
    }
  }

  // enforce_on_key_name - computed: false, optional: true, required: false
  private _enforceOnKeyName?: string; 
  public get enforceOnKeyName() {
    return this.getStringAttribute('enforce_on_key_name');
  }
  public set enforceOnKeyName(value: string) {
    this._enforceOnKeyName = value;
  }
  public resetEnforceOnKeyName() {
    this._enforceOnKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyNameInput() {
    return this._enforceOnKeyName;
  }

  // enforce_on_key_type - computed: false, optional: true, required: false
  private _enforceOnKeyType?: string; 
  public get enforceOnKeyType() {
    return this.getStringAttribute('enforce_on_key_type');
  }
  public set enforceOnKeyType(value: string) {
    this._enforceOnKeyType = value;
  }
  public resetEnforceOnKeyType() {
    this._enforceOnKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyTypeInput() {
    return this._enforceOnKeyType;
  }
}

export class GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference {
    return new GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#count GoogleComputeRegionSecurityPolicyRule#count}
  */
  readonly count?: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#interval_sec GoogleComputeRegionSecurityPolicyRule#interval_sec}
  */
  readonly intervalSec?: number;
}

export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference | GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference | GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold): any {
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
    interval_sec: {
      value: cdktf.numberToHclTerraform(struct!.intervalSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._intervalSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSec = this._intervalSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._intervalSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._intervalSec = value.intervalSec;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: true, required: false
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  public resetIntervalSec() {
    this._intervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleRateLimitOptions {
  /**
  * Can only be specified if the action for the rule is "rate_based_ban".
  * If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#ban_duration_sec GoogleComputeRegionSecurityPolicyRule#ban_duration_sec}
  */
  readonly banDurationSec?: number;
  /**
  * Action to take for requests that are under the configured rate limit threshold.
  * Valid option is "allow" only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#conform_action GoogleComputeRegionSecurityPolicyRule#conform_action}
  */
  readonly conformAction?: string;
  /**
  * Determines the key to enforce the rateLimitThreshold on. Possible values are:
  * * ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
  * * IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
  * * HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
  * * XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
  * * HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
  * * HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
  * * SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
  * * REGION_CODE: The country/region from which the request originates.
  * * TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
  * * USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#enforce_on_key GoogleComputeRegionSecurityPolicyRule#enforce_on_key}
  */
  readonly enforceOnKey?: string;
  /**
  * Rate limit key name applicable only for the following key types:
  * HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.
  * HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_name GoogleComputeRegionSecurityPolicyRule#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.
  * Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#exceed_action GoogleComputeRegionSecurityPolicyRule#exceed_action}
  */
  readonly exceedAction?: string;
  /**
  * ban_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#ban_threshold GoogleComputeRegionSecurityPolicyRule#ban_threshold}
  */
  readonly banThreshold?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold;
  /**
  * enforce_on_key_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#enforce_on_key_configs GoogleComputeRegionSecurityPolicyRule#enforce_on_key_configs}
  */
  readonly enforceOnKeyConfigs?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable;
  /**
  * rate_limit_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#rate_limit_threshold GoogleComputeRegionSecurityPolicyRule#rate_limit_threshold}
  */
  readonly rateLimitThreshold?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold;
}

export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsToTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference | GoogleComputeRegionSecurityPolicyRuleRateLimitOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ban_duration_sec: cdktf.numberToTerraform(struct!.banDurationSec),
    conform_action: cdktf.stringToTerraform(struct!.conformAction),
    enforce_on_key: cdktf.stringToTerraform(struct!.enforceOnKey),
    enforce_on_key_name: cdktf.stringToTerraform(struct!.enforceOnKeyName),
    exceed_action: cdktf.stringToTerraform(struct!.exceedAction),
    ban_threshold: googleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdToTerraform(struct!.banThreshold),
    enforce_on_key_configs: cdktf.listMapper(googleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToTerraform, true)(struct!.enforceOnKeyConfigs),
    rate_limit_threshold: googleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToTerraform(struct!.rateLimitThreshold),
  }
}


export function googleComputeRegionSecurityPolicyRuleRateLimitOptionsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference | GoogleComputeRegionSecurityPolicyRuleRateLimitOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ban_duration_sec: {
      value: cdktf.numberToHclTerraform(struct!.banDurationSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conform_action: {
      value: cdktf.stringToHclTerraform(struct!.conformAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_on_key: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_on_key_name: {
      value: cdktf.stringToHclTerraform(struct!.enforceOnKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exceed_action: {
      value: cdktf.stringToHclTerraform(struct!.exceedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ban_threshold: {
      value: googleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdToHclTerraform(struct!.banThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdList",
    },
    enforce_on_key_configs: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToHclTerraform, true)(struct!.enforceOnKeyConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList",
    },
    rate_limit_threshold: {
      value: googleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToHclTerraform(struct!.rateLimitThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRuleRateLimitOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._banDurationSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.banDurationSec = this._banDurationSec;
    }
    if (this._conformAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.conformAction = this._conformAction;
    }
    if (this._enforceOnKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKey = this._enforceOnKey;
    }
    if (this._enforceOnKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyName = this._enforceOnKeyName;
    }
    if (this._exceedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedAction = this._exceedAction;
    }
    if (this._banThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.banThreshold = this._banThreshold?.internalValue;
    }
    if (this._enforceOnKeyConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceOnKeyConfigs = this._enforceOnKeyConfigs?.internalValue;
    }
    if (this._rateLimitThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitThreshold = this._rateLimitThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._banDurationSec = undefined;
      this._conformAction = undefined;
      this._enforceOnKey = undefined;
      this._enforceOnKeyName = undefined;
      this._exceedAction = undefined;
      this._banThreshold.internalValue = undefined;
      this._enforceOnKeyConfigs.internalValue = undefined;
      this._rateLimitThreshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._banDurationSec = value.banDurationSec;
      this._conformAction = value.conformAction;
      this._enforceOnKey = value.enforceOnKey;
      this._enforceOnKeyName = value.enforceOnKeyName;
      this._exceedAction = value.exceedAction;
      this._banThreshold.internalValue = value.banThreshold;
      this._enforceOnKeyConfigs.internalValue = value.enforceOnKeyConfigs;
      this._rateLimitThreshold.internalValue = value.rateLimitThreshold;
    }
  }

  // ban_duration_sec - computed: false, optional: true, required: false
  private _banDurationSec?: number; 
  public get banDurationSec() {
    return this.getNumberAttribute('ban_duration_sec');
  }
  public set banDurationSec(value: number) {
    this._banDurationSec = value;
  }
  public resetBanDurationSec() {
    this._banDurationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banDurationSecInput() {
    return this._banDurationSec;
  }

  // conform_action - computed: false, optional: true, required: false
  private _conformAction?: string; 
  public get conformAction() {
    return this.getStringAttribute('conform_action');
  }
  public set conformAction(value: string) {
    this._conformAction = value;
  }
  public resetConformAction() {
    this._conformAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformActionInput() {
    return this._conformAction;
  }

  // enforce_on_key - computed: false, optional: true, required: false
  private _enforceOnKey?: string; 
  public get enforceOnKey() {
    return this.getStringAttribute('enforce_on_key');
  }
  public set enforceOnKey(value: string) {
    this._enforceOnKey = value;
  }
  public resetEnforceOnKey() {
    this._enforceOnKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyInput() {
    return this._enforceOnKey;
  }

  // enforce_on_key_name - computed: false, optional: true, required: false
  private _enforceOnKeyName?: string; 
  public get enforceOnKeyName() {
    return this.getStringAttribute('enforce_on_key_name');
  }
  public set enforceOnKeyName(value: string) {
    this._enforceOnKeyName = value;
  }
  public resetEnforceOnKeyName() {
    this._enforceOnKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyNameInput() {
    return this._enforceOnKeyName;
  }

  // exceed_action - computed: false, optional: true, required: false
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  public resetExceedAction() {
    this._exceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // ban_threshold - computed: false, optional: true, required: false
  private _banThreshold = new GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(this, "ban_threshold");
  public get banThreshold() {
    return this._banThreshold;
  }
  public putBanThreshold(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold) {
    this._banThreshold.internalValue = value;
  }
  public resetBanThreshold() {
    this._banThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get banThresholdInput() {
    return this._banThreshold.internalValue;
  }

  // enforce_on_key_configs - computed: false, optional: true, required: false
  private _enforceOnKeyConfigs = new GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(this, "enforce_on_key_configs", false);
  public get enforceOnKeyConfigs() {
    return this._enforceOnKeyConfigs;
  }
  public putEnforceOnKeyConfigs(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable) {
    this._enforceOnKeyConfigs.internalValue = value;
  }
  public resetEnforceOnKeyConfigs() {
    this._enforceOnKeyConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyConfigsInput() {
    return this._enforceOnKeyConfigs.internalValue;
  }

  // rate_limit_threshold - computed: false, optional: true, required: false
  private _rateLimitThreshold = new GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(this, "rate_limit_threshold");
  public get rateLimitThreshold() {
    return this._rateLimitThreshold;
  }
  public putRateLimitThreshold(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold) {
    this._rateLimitThreshold.internalValue = value;
  }
  public resetRateLimitThreshold() {
    this._rateLimitThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitThresholdInput() {
    return this._rateLimitThreshold.internalValue;
  }
}
export interface GoogleComputeRegionSecurityPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#create GoogleComputeRegionSecurityPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#delete GoogleComputeRegionSecurityPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#update GoogleComputeRegionSecurityPolicyRule#update}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule google_compute_region_security_policy_rule}
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
  * @param importFromId The id of the existing GoogleComputeRegionSecurityPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeRegionSecurityPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_security_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_security_policy_rule google_compute_region_security_policy_rule} Resource
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
        providerVersion: '6.14.1',
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
    this._id = config.id;
    this._preview = config.preview;
    this._priority = config.priority;
    this._project = config.project;
    this._region = config.region;
    this._securityPolicy = config.securityPolicy;
    this._match.internalValue = config.match;
    this._networkMatch.internalValue = config.networkMatch;
    this._preconfiguredWafConfig.internalValue = config.preconfiguredWafConfig;
    this._rateLimitOptions.internalValue = config.rateLimitOptions;
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

  // preconfigured_waf_config - computed: false, optional: true, required: false
  private _preconfiguredWafConfig = new GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference(this, "preconfigured_waf_config");
  public get preconfiguredWafConfig() {
    return this._preconfiguredWafConfig;
  }
  public putPreconfiguredWafConfig(value: GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfig) {
    this._preconfiguredWafConfig.internalValue = value;
  }
  public resetPreconfiguredWafConfig() {
    this._preconfiguredWafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfiguredWafConfigInput() {
    return this._preconfiguredWafConfig.internalValue;
  }

  // rate_limit_options - computed: false, optional: true, required: false
  private _rateLimitOptions = new GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference(this, "rate_limit_options");
  public get rateLimitOptions() {
    return this._rateLimitOptions;
  }
  public putRateLimitOptions(value: GoogleComputeRegionSecurityPolicyRuleRateLimitOptions) {
    this._rateLimitOptions.internalValue = value;
  }
  public resetRateLimitOptions() {
    this._rateLimitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitOptionsInput() {
    return this._rateLimitOptions.internalValue;
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
      preconfigured_waf_config: googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigToTerraform(this._preconfiguredWafConfig.internalValue),
      rate_limit_options: googleComputeRegionSecurityPolicyRuleRateLimitOptionsToTerraform(this._rateLimitOptions.internalValue),
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
      preconfigured_waf_config: {
        value: googleComputeRegionSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(this._preconfiguredWafConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionSecurityPolicyRulePreconfiguredWafConfigList",
      },
      rate_limit_options: {
        value: googleComputeRegionSecurityPolicyRuleRateLimitOptionsToHclTerraform(this._rateLimitOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionSecurityPolicyRuleRateLimitOptionsList",
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
