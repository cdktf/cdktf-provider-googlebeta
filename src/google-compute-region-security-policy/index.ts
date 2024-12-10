/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
  * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}
  */
  readonly project?: string;
  /**
  * The Region in which the created Region Security Policy should reside.
  * If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#region GoogleComputeRegionSecurityPolicy#region}
  */
  readonly region?: string;
  /**
  * The type indicates the intended use of the security policy.
  * - CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
  * - CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
  * - CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  * This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#type GoogleComputeRegionSecurityPolicy#type}
  */
  readonly type?: string;
  /**
  * ddos_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#ddos_protection_config GoogleComputeRegionSecurityPolicy#ddos_protection_config}
  */
  readonly ddosProtectionConfig?: GoogleComputeRegionSecurityPolicyDdosProtectionConfig;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#rules GoogleComputeRegionSecurityPolicy#rules}
  */
  readonly rules?: GoogleComputeRegionSecurityPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#timeouts GoogleComputeRegionSecurityPolicy#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionSecurityPolicyTimeouts;
  /**
  * user_defined_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}
  */
  readonly userDefinedFields?: GoogleComputeRegionSecurityPolicyUserDefinedFields[] | cdktf.IResolvable;
}
export interface GoogleComputeRegionSecurityPolicyDdosProtectionConfig {
  /**
  * Google Cloud Armor offers the following options to help protect systems against DDoS attacks:
  * - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.
  * - ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
  * - ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#ddos_protection GoogleComputeRegionSecurityPolicy#ddos_protection}
  */
  readonly ddosProtection: string;
}

export function googleComputeRegionSecurityPolicyDdosProtectionConfigToTerraform(struct?: GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference | GoogleComputeRegionSecurityPolicyDdosProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddos_protection: cdktf.stringToTerraform(struct!.ddosProtection),
  }
}


export function googleComputeRegionSecurityPolicyDdosProtectionConfigToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference | GoogleComputeRegionSecurityPolicyDdosProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddos_protection: {
      value: cdktf.stringToHclTerraform(struct!.ddosProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyDdosProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddosProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosProtection = this._ddosProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyDdosProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddosProtection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddosProtection = value.ddosProtection;
    }
  }

  // ddos_protection - computed: false, optional: false, required: true
  private _ddosProtection?: string; 
  public get ddosProtection() {
    return this.getStringAttribute('ddos_protection');
  }
  public set ddosProtection(value: string) {
    this._ddosProtection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionInput() {
    return this._ddosProtection;
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesMatchConfig {
  /**
  * CIDR IP address range. Maximum number of srcIpRanges allowed is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#src_ip_ranges GoogleComputeRegionSecurityPolicy#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
}

export function googleComputeRegionSecurityPolicyRulesMatchConfigToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference | GoogleComputeRegionSecurityPolicyRulesMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
  }
}


export function googleComputeRegionSecurityPolicyRulesMatchConfigToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference | GoogleComputeRegionSecurityPolicyRulesMatchConfig): any {
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

export class GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesMatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesMatchConfig | undefined) {
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
export interface GoogleComputeRegionSecurityPolicyRulesMatchExpr {
  /**
  * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#expression GoogleComputeRegionSecurityPolicy#expression}
  */
  readonly expression: string;
}

export function googleComputeRegionSecurityPolicyRulesMatchExprToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference | GoogleComputeRegionSecurityPolicyRulesMatchExpr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function googleComputeRegionSecurityPolicyRulesMatchExprToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference | GoogleComputeRegionSecurityPolicyRulesMatchExpr): any {
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

export class GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesMatchExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesMatchExpr | undefined) {
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
export interface GoogleComputeRegionSecurityPolicyRulesMatch {
  /**
  * Preconfigured versioned expression. If this field is specified, config must also be specified.
  * Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#versioned_expr GoogleComputeRegionSecurityPolicy#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#config GoogleComputeRegionSecurityPolicy#config}
  */
  readonly config?: GoogleComputeRegionSecurityPolicyRulesMatchConfig;
  /**
  * expr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#expr GoogleComputeRegionSecurityPolicy#expr}
  */
  readonly expr?: GoogleComputeRegionSecurityPolicyRulesMatchExpr;
}

export function googleComputeRegionSecurityPolicyRulesMatchToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesMatchOutputReference | GoogleComputeRegionSecurityPolicyRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: googleComputeRegionSecurityPolicyRulesMatchConfigToTerraform(struct!.config),
    expr: googleComputeRegionSecurityPolicyRulesMatchExprToTerraform(struct!.expr),
  }
}


export function googleComputeRegionSecurityPolicyRulesMatchToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesMatchOutputReference | GoogleComputeRegionSecurityPolicyRulesMatch): any {
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
      value: googleComputeRegionSecurityPolicyRulesMatchConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesMatchConfigList",
    },
    expr: {
      value: googleComputeRegionSecurityPolicyRulesMatchExprToHclTerraform(struct!.expr),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesMatchExprList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesMatch | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesMatch | undefined) {
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
  private _config = new GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleComputeRegionSecurityPolicyRulesMatchConfig) {
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
  private _expr = new GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: GoogleComputeRegionSecurityPolicyRulesMatchExpr) {
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
export interface GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields {
  /**
  * Name of the user-defined field, as given in the definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * Matching values of the field. Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#values GoogleComputeRegionSecurityPolicy#values}
  */
  readonly values?: string[];
}

export function googleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields | cdktf.IResolvable | undefined) {
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

export class GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesNetworkMatch {
  /**
  * Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#dest_ip_ranges GoogleComputeRegionSecurityPolicy#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#dest_ports GoogleComputeRegionSecurityPolicy#dest_ports}
  */
  readonly destPorts?: string[];
  /**
  * IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#ip_protocols GoogleComputeRegionSecurityPolicy#ip_protocols}
  */
  readonly ipProtocols?: string[];
  /**
  * BGP Autonomous System Number associated with the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#src_asns GoogleComputeRegionSecurityPolicy#src_asns}
  */
  readonly srcAsns?: number[];
  /**
  * Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#src_ip_ranges GoogleComputeRegionSecurityPolicy#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#src_ports GoogleComputeRegionSecurityPolicy#src_ports}
  */
  readonly srcPorts?: string[];
  /**
  * Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#src_region_codes GoogleComputeRegionSecurityPolicy#src_region_codes}
  */
  readonly srcRegionCodes?: string[];
  /**
  * user_defined_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}
  */
  readonly userDefinedFields?: GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields[] | cdktf.IResolvable;
}

export function googleComputeRegionSecurityPolicyRulesNetworkMatchToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference | GoogleComputeRegionSecurityPolicyRulesNetworkMatch): any {
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
    user_defined_fields: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsToTerraform, true)(struct!.userDefinedFields),
  }
}


export function googleComputeRegionSecurityPolicyRulesNetworkMatchToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference | GoogleComputeRegionSecurityPolicyRulesNetworkMatch): any {
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
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsToHclTerraform, true)(struct!.userDefinedFields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesNetworkMatch | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesNetworkMatch | undefined) {
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
  private _userDefinedFields = new GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(this, "user_defined_fields", false);
  public get userDefinedFields() {
    return this._userDefinedFields;
  }
  public putUserDefinedFields(value: GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields[] | cdktf.IResolvable) {
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
export interface GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined) {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined) {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined) {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined) {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion {
  /**
  * A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.
  * If omitted, it refers to all the rule IDs under the WAF rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#target_rule_ids GoogleComputeRegionSecurityPolicy#target_rule_ids}
  */
  readonly targetRuleIds?: string[];
  /**
  * Target WAF rule set to apply the preconfigured WAF exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#target_rule_set GoogleComputeRegionSecurityPolicy#target_rule_set}
  */
  readonly targetRuleSet: string;
  /**
  * request_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#request_cookie GoogleComputeRegionSecurityPolicy#request_cookie}
  */
  readonly requestCookie?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#request_header GoogleComputeRegionSecurityPolicy#request_header}
  */
  readonly requestHeader?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable;
  /**
  * request_query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#request_query_param GoogleComputeRegionSecurityPolicy#request_query_param}
  */
  readonly requestQueryParam?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#request_uri GoogleComputeRegionSecurityPolicy#request_uri}
  */
  readonly requestUri?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable;
}

export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetRuleIds),
    target_rule_set: cdktf.stringToTerraform(struct!.targetRuleSet),
    request_cookie: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieToTerraform, true)(struct!.requestCookie),
    request_header: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_query_param: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamToTerraform, true)(struct!.requestQueryParam),
    request_uri: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriToTerraform, true)(struct!.requestUri),
  }
}


export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieToHclTerraform, true)(struct!.requestCookie),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList",
    },
    request_header: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList",
    },
    request_query_param: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform, true)(struct!.requestQueryParam),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList",
    },
    request_uri: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriToHclTerraform, true)(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined) {
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
  private _requestCookie = new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(this, "request_cookie", false);
  public get requestCookie() {
    return this._requestCookie;
  }
  public putRequestCookie(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable) {
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
  private _requestHeader = new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable) {
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
  private _requestQueryParam = new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(this, "request_query_param", false);
  public get requestQueryParam() {
    return this._requestQueryParam;
  }
  public putRequestQueryParam(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable) {
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
  private _requestUri = new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable) {
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

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#exclusion GoogleComputeRegionSecurityPolicy#exclusion}
  */
  readonly exclusion?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion[] | cdktf.IResolvable;
}

export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference | GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference | GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig | undefined) {
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
  private _exclusion = new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion[] | cdktf.IResolvable) {
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
export interface GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#count GoogleComputeRegionSecurityPolicy#count}
  */
  readonly count?: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#interval_sec GoogleComputeRegionSecurityPolicy#interval_sec}
  */
  readonly intervalSec?: number;
}

export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference | GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference | GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold): any {
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

export class GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold | undefined) {
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
export interface GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs {
  /**
  * Rate limit key name applicable only for the following key types:
  * HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.
  * HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#enforce_on_key_name GoogleComputeRegionSecurityPolicy#enforce_on_key_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#enforce_on_key_type GoogleComputeRegionSecurityPolicy#enforce_on_key_type}
  */
  readonly enforceOnKeyType?: string;
}

export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_on_key_name: cdktf.stringToTerraform(struct!.enforceOnKeyName),
    enforce_on_key_type: cdktf.stringToTerraform(struct!.enforceOnKeyType),
  }
}


export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined) {
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

export class GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#count GoogleComputeRegionSecurityPolicy#count}
  */
  readonly count?: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#interval_sec GoogleComputeRegionSecurityPolicy#interval_sec}
  */
  readonly intervalSec?: number;
}

export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference | GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference | GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold): any {
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

export class GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold | undefined) {
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
export interface GoogleComputeRegionSecurityPolicyRulesRateLimitOptions {
  /**
  * Can only be specified if the action for the rule is "rate_based_ban".
  * If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#ban_duration_sec GoogleComputeRegionSecurityPolicy#ban_duration_sec}
  */
  readonly banDurationSec?: number;
  /**
  * Action to take for requests that are under the configured rate limit threshold.
  * Valid option is "allow" only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#conform_action GoogleComputeRegionSecurityPolicy#conform_action}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#enforce_on_key GoogleComputeRegionSecurityPolicy#enforce_on_key}
  */
  readonly enforceOnKey?: string;
  /**
  * Rate limit key name applicable only for the following key types:
  * HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.
  * HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#enforce_on_key_name GoogleComputeRegionSecurityPolicy#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.
  * Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#exceed_action GoogleComputeRegionSecurityPolicy#exceed_action}
  */
  readonly exceedAction?: string;
  /**
  * ban_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#ban_threshold GoogleComputeRegionSecurityPolicy#ban_threshold}
  */
  readonly banThreshold?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold;
  /**
  * enforce_on_key_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#enforce_on_key_configs GoogleComputeRegionSecurityPolicy#enforce_on_key_configs}
  */
  readonly enforceOnKeyConfigs?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable;
  /**
  * rate_limit_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#rate_limit_threshold GoogleComputeRegionSecurityPolicy#rate_limit_threshold}
  */
  readonly rateLimitThreshold?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold;
}

export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsToTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference | GoogleComputeRegionSecurityPolicyRulesRateLimitOptions): any {
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
    ban_threshold: googleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdToTerraform(struct!.banThreshold),
    enforce_on_key_configs: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsToTerraform, true)(struct!.enforceOnKeyConfigs),
    rate_limit_threshold: googleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdToTerraform(struct!.rateLimitThreshold),
  }
}


export function googleComputeRegionSecurityPolicyRulesRateLimitOptionsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference | GoogleComputeRegionSecurityPolicyRulesRateLimitOptions): any {
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
      value: googleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdToHclTerraform(struct!.banThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList",
    },
    enforce_on_key_configs: {
      value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsToHclTerraform, true)(struct!.enforceOnKeyConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList",
    },
    rate_limit_threshold: {
      value: googleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdToHclTerraform(struct!.rateLimitThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyRulesRateLimitOptions | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptions | undefined) {
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
  private _banThreshold = new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(this, "ban_threshold");
  public get banThreshold() {
    return this._banThreshold;
  }
  public putBanThreshold(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold) {
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
  private _enforceOnKeyConfigs = new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(this, "enforce_on_key_configs", false);
  public get enforceOnKeyConfigs() {
    return this._enforceOnKeyConfigs;
  }
  public putEnforceOnKeyConfigs(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable) {
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
  private _rateLimitThreshold = new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(this, "rate_limit_threshold");
  public get rateLimitThreshold() {
    return this._rateLimitThreshold;
  }
  public putRateLimitThreshold(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold) {
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
export interface GoogleComputeRegionSecurityPolicyRules {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#action GoogleComputeRegionSecurityPolicy#action}
  */
  readonly action: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * If set to true, the specified action is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#preview GoogleComputeRegionSecurityPolicy#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list.
  * The priority must be a positive value between 0 and 2147483647.
  * Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#priority GoogleComputeRegionSecurityPolicy#priority}
  */
  readonly priority: number;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#match GoogleComputeRegionSecurityPolicy#match}
  */
  readonly match?: GoogleComputeRegionSecurityPolicyRulesMatch;
  /**
  * network_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#network_match GoogleComputeRegionSecurityPolicy#network_match}
  */
  readonly networkMatch?: GoogleComputeRegionSecurityPolicyRulesNetworkMatch;
  /**
  * preconfigured_waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#preconfigured_waf_config GoogleComputeRegionSecurityPolicy#preconfigured_waf_config}
  */
  readonly preconfiguredWafConfig?: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig;
  /**
  * rate_limit_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#rate_limit_options GoogleComputeRegionSecurityPolicy#rate_limit_options}
  */
  readonly rateLimitOptions?: GoogleComputeRegionSecurityPolicyRulesRateLimitOptions;
}

export function googleComputeRegionSecurityPolicyRulesToTerraform(struct?: GoogleComputeRegionSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    preview: cdktf.booleanToTerraform(struct!.preview),
    priority: cdktf.numberToTerraform(struct!.priority),
    match: googleComputeRegionSecurityPolicyRulesMatchToTerraform(struct!.match),
    network_match: googleComputeRegionSecurityPolicyRulesNetworkMatchToTerraform(struct!.networkMatch),
    preconfigured_waf_config: googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigToTerraform(struct!.preconfiguredWafConfig),
    rate_limit_options: googleComputeRegionSecurityPolicyRulesRateLimitOptionsToTerraform(struct!.rateLimitOptions),
  }
}


export function googleComputeRegionSecurityPolicyRulesToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preview: {
      value: cdktf.booleanToHclTerraform(struct!.preview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: googleComputeRegionSecurityPolicyRulesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesMatchList",
    },
    network_match: {
      value: googleComputeRegionSecurityPolicyRulesNetworkMatchToHclTerraform(struct!.networkMatch),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesNetworkMatchList",
    },
    preconfigured_waf_config: {
      value: googleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigToHclTerraform(struct!.preconfiguredWafConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList",
    },
    rate_limit_options: {
      value: googleComputeRegionSecurityPolicyRulesRateLimitOptionsToHclTerraform(struct!.rateLimitOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._preview !== undefined) {
      hasAnyValues = true;
      internalValueResult.preview = this._preview;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._networkMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMatch = this._networkMatch?.internalValue;
    }
    if (this._preconfiguredWafConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconfiguredWafConfig = this._preconfiguredWafConfig?.internalValue;
    }
    if (this._rateLimitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitOptions = this._rateLimitOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._preview = undefined;
      this._priority = undefined;
      this._match.internalValue = undefined;
      this._networkMatch.internalValue = undefined;
      this._preconfiguredWafConfig.internalValue = undefined;
      this._rateLimitOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._preview = value.preview;
      this._priority = value.priority;
      this._match.internalValue = value.match;
      this._networkMatch.internalValue = value.networkMatch;
      this._preconfiguredWafConfig.internalValue = value.preconfiguredWafConfig;
      this._rateLimitOptions.internalValue = value.rateLimitOptions;
    }
  }

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

  // match - computed: false, optional: true, required: false
  private _match = new GoogleComputeRegionSecurityPolicyRulesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: GoogleComputeRegionSecurityPolicyRulesMatch) {
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
  private _networkMatch = new GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(this, "network_match");
  public get networkMatch() {
    return this._networkMatch;
  }
  public putNetworkMatch(value: GoogleComputeRegionSecurityPolicyRulesNetworkMatch) {
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
  private _preconfiguredWafConfig = new GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(this, "preconfigured_waf_config");
  public get preconfiguredWafConfig() {
    return this._preconfiguredWafConfig;
  }
  public putPreconfiguredWafConfig(value: GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig) {
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
  private _rateLimitOptions = new GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(this, "rate_limit_options");
  public get rateLimitOptions() {
    return this._rateLimitOptions;
  }
  public putRateLimitOptions(value: GoogleComputeRegionSecurityPolicyRulesRateLimitOptions) {
    this._rateLimitOptions.internalValue = value;
  }
  public resetRateLimitOptions() {
    this._rateLimitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitOptionsInput() {
    return this._rateLimitOptions.internalValue;
  }
}

export class GoogleComputeRegionSecurityPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyRulesOutputReference {
    return new GoogleComputeRegionSecurityPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionSecurityPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}
  */
  readonly update?: string;
}

export function googleComputeRegionSecurityPolicyTimeoutsToTerraform(struct?: GoogleComputeRegionSecurityPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleComputeRegionSecurityPolicyTimeoutsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionSecurityPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeRegionSecurityPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionSecurityPolicyTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleComputeRegionSecurityPolicyUserDefinedFields {
  /**
  * The base relative to which 'offset' is measured. Possible values are:
  * - IPV4: Points to the beginning of the IPv4 header.
  * - IPV6: Points to the beginning of the IPv6 header.
  * - TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
  * - UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments. Possible values: ["IPV4", "IPV6", "TCP", "UDP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#base GoogleComputeRegionSecurityPolicy#base}
  */
  readonly base: string;
  /**
  * If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.
  * Encoded as a hexadecimal number (starting with "0x").
  * The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#mask GoogleComputeRegionSecurityPolicy#mask}
  */
  readonly mask?: string;
  /**
  * The name of this field. Must be unique within the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * Offset of the first byte of the field (in network byte order) relative to 'base'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#offset GoogleComputeRegionSecurityPolicy#offset}
  */
  readonly offset?: number;
  /**
  * Size of the field in bytes. Valid values: 1-4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#size GoogleComputeRegionSecurityPolicy#size}
  */
  readonly size?: number;
}

export function googleComputeRegionSecurityPolicyUserDefinedFieldsToTerraform(struct?: GoogleComputeRegionSecurityPolicyUserDefinedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.stringToTerraform(struct!.base),
    mask: cdktf.stringToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
    offset: cdktf.numberToTerraform(struct!.offset),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function googleComputeRegionSecurityPolicyUserDefinedFieldsToHclTerraform(struct?: GoogleComputeRegionSecurityPolicyUserDefinedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.stringToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionSecurityPolicyUserDefinedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionSecurityPolicyUserDefinedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._mask = undefined;
      this._name = undefined;
      this._offset = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._mask = value.mask;
      this._name = value.name;
      this._offset = value.offset;
      this._size = value.size;
    }
  }

  // base - computed: false, optional: false, required: true
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class GoogleComputeRegionSecurityPolicyUserDefinedFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionSecurityPolicyUserDefinedFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference {
    return new GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy google_compute_region_security_policy}
*/
export class GoogleComputeRegionSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeRegionSecurityPolicy to import
  * @param importFromId The id of the existing GoogleComputeRegionSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeRegionSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_region_security_policy google_compute_region_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.13.0',
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
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._type = config.type;
    this._ddosProtectionConfig.internalValue = config.ddosProtectionConfig;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
    this._userDefinedFields.internalValue = config.userDefinedFields;
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

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
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

  // self_link_with_policy_id - computed: true, optional: false, required: false
  public get selfLinkWithPolicyId() {
    return this.getStringAttribute('self_link_with_policy_id');
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

  // ddos_protection_config - computed: false, optional: true, required: false
  private _ddosProtectionConfig = new GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(this, "ddos_protection_config");
  public get ddosProtectionConfig() {
    return this._ddosProtectionConfig;
  }
  public putDdosProtectionConfig(value: GoogleComputeRegionSecurityPolicyDdosProtectionConfig) {
    this._ddosProtectionConfig.internalValue = value;
  }
  public resetDdosProtectionConfig() {
    this._ddosProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionConfigInput() {
    return this._ddosProtectionConfig.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new GoogleComputeRegionSecurityPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleComputeRegionSecurityPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionSecurityPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionSecurityPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_defined_fields - computed: false, optional: true, required: false
  private _userDefinedFields = new GoogleComputeRegionSecurityPolicyUserDefinedFieldsList(this, "user_defined_fields", false);
  public get userDefinedFields() {
    return this._userDefinedFields;
  }
  public putUserDefinedFields(value: GoogleComputeRegionSecurityPolicyUserDefinedFields[] | cdktf.IResolvable) {
    this._userDefinedFields.internalValue = value;
  }
  public resetUserDefinedFields() {
    this._userDefinedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFieldsInput() {
    return this._userDefinedFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      ddos_protection_config: googleComputeRegionSecurityPolicyDdosProtectionConfigToTerraform(this._ddosProtectionConfig.internalValue),
      rules: cdktf.listMapper(googleComputeRegionSecurityPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: googleComputeRegionSecurityPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      user_defined_fields: cdktf.listMapper(googleComputeRegionSecurityPolicyUserDefinedFieldsToTerraform, true)(this._userDefinedFields.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_protection_config: {
        value: googleComputeRegionSecurityPolicyDdosProtectionConfigToHclTerraform(this._ddosProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionSecurityPolicyDdosProtectionConfigList",
      },
      rules: {
        value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionSecurityPolicyRulesList",
      },
      timeouts: {
        value: googleComputeRegionSecurityPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeRegionSecurityPolicyTimeouts",
      },
      user_defined_fields: {
        value: cdktf.listMapperHcl(googleComputeRegionSecurityPolicyUserDefinedFieldsToHclTerraform, true)(this._userDefinedFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionSecurityPolicyUserDefinedFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
