/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this security policy. Max size is 2048.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#description GoogleComputeSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#id GoogleComputeSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#name GoogleComputeSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * The project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#project GoogleComputeSecurityPolicy#project}
  */
  readonly project?: string;
  /**
  * The type indicates the intended use of the security policy. CLOUD_ARMOR - Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers. CLOUD_ARMOR_EDGE - Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#type GoogleComputeSecurityPolicy#type}
  */
  readonly type?: string;
  /**
  * adaptive_protection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#adaptive_protection_config GoogleComputeSecurityPolicy#adaptive_protection_config}
  */
  readonly adaptiveProtectionConfig?: GoogleComputeSecurityPolicyAdaptiveProtectionConfig;
  /**
  * advanced_options_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#advanced_options_config GoogleComputeSecurityPolicy#advanced_options_config}
  */
  readonly advancedOptionsConfig?: GoogleComputeSecurityPolicyAdvancedOptionsConfig;
  /**
  * recaptcha_options_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#recaptcha_options_config GoogleComputeSecurityPolicy#recaptcha_options_config}
  */
  readonly recaptchaOptionsConfig?: GoogleComputeSecurityPolicyRecaptchaOptionsConfig;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#rule GoogleComputeSecurityPolicy#rule}
  */
  readonly rule?: GoogleComputeSecurityPolicyRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#timeouts GoogleComputeSecurityPolicy#timeouts}
  */
  readonly timeouts?: GoogleComputeSecurityPolicyTimeouts;
}
export interface GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig {
  /**
  * Rules are only automatically deployed for alerts on potential attacks with confidence scores greater than this threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#confidence_threshold GoogleComputeSecurityPolicy#confidence_threshold}
  */
  readonly confidenceThreshold?: number;
  /**
  * Google Cloud Armor stops applying the action in the automatically deployed rule to an identified attacker after this duration. The rule continues to operate against new requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#expiration_sec GoogleComputeSecurityPolicy#expiration_sec}
  */
  readonly expirationSec?: number;
  /**
  * Rules are only automatically deployed when the estimated impact to baseline traffic from the suggested mitigation is below this threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#impacted_baseline_threshold GoogleComputeSecurityPolicy#impacted_baseline_threshold}
  */
  readonly impactedBaselineThreshold?: number;
  /**
  * Identifies new attackers only when the load to the backend service that is under attack exceeds this threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#load_threshold GoogleComputeSecurityPolicy#load_threshold}
  */
  readonly loadThreshold?: number;
}

export function googleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigToTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference | GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_threshold: cdktf.numberToTerraform(struct!.confidenceThreshold),
    expiration_sec: cdktf.numberToTerraform(struct!.expirationSec),
    impacted_baseline_threshold: cdktf.numberToTerraform(struct!.impactedBaselineThreshold),
    load_threshold: cdktf.numberToTerraform(struct!.loadThreshold),
  }
}


export function googleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference | GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_threshold: {
      value: cdktf.numberToHclTerraform(struct!.confidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiration_sec: {
      value: cdktf.numberToHclTerraform(struct!.expirationSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    impacted_baseline_threshold: {
      value: cdktf.numberToHclTerraform(struct!.impactedBaselineThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_threshold: {
      value: cdktf.numberToHclTerraform(struct!.loadThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceThreshold = this._confidenceThreshold;
    }
    if (this._expirationSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSec = this._expirationSec;
    }
    if (this._impactedBaselineThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactedBaselineThreshold = this._impactedBaselineThreshold;
    }
    if (this._loadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadThreshold = this._loadThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidenceThreshold = undefined;
      this._expirationSec = undefined;
      this._impactedBaselineThreshold = undefined;
      this._loadThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidenceThreshold = value.confidenceThreshold;
      this._expirationSec = value.expirationSec;
      this._impactedBaselineThreshold = value.impactedBaselineThreshold;
      this._loadThreshold = value.loadThreshold;
    }
  }

  // confidence_threshold - computed: false, optional: true, required: false
  private _confidenceThreshold?: number; 
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: number) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // expiration_sec - computed: false, optional: true, required: false
  private _expirationSec?: number; 
  public get expirationSec() {
    return this.getNumberAttribute('expiration_sec');
  }
  public set expirationSec(value: number) {
    this._expirationSec = value;
  }
  public resetExpirationSec() {
    this._expirationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecInput() {
    return this._expirationSec;
  }

  // impacted_baseline_threshold - computed: false, optional: true, required: false
  private _impactedBaselineThreshold?: number; 
  public get impactedBaselineThreshold() {
    return this.getNumberAttribute('impacted_baseline_threshold');
  }
  public set impactedBaselineThreshold(value: number) {
    this._impactedBaselineThreshold = value;
  }
  public resetImpactedBaselineThreshold() {
    this._impactedBaselineThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactedBaselineThresholdInput() {
    return this._impactedBaselineThreshold;
  }

  // load_threshold - computed: false, optional: true, required: false
  private _loadThreshold?: number; 
  public get loadThreshold() {
    return this.getNumberAttribute('load_threshold');
  }
  public set loadThreshold(value: number) {
    this._loadThreshold = value;
  }
  public resetLoadThreshold() {
    this._loadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadThresholdInput() {
    return this._loadThreshold;
  }
}
export interface GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs {
  /**
  * If enabled, traffic matching each unique value for the specified type constitutes a separate traffic unit. It can only be set to true if value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#enable_each_unique_value GoogleComputeSecurityPolicy#enable_each_unique_value}
  */
  readonly enableEachUniqueValue?: boolean | cdktf.IResolvable;
  /**
  * Type of this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#type GoogleComputeSecurityPolicy#type}
  */
  readonly type: string;
  /**
  * Requests that match this value constitute a granular traffic unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#value GoogleComputeSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsToTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_each_unique_value: cdktf.booleanToTerraform(struct!.enableEachUniqueValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsToHclTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_each_unique_value: {
      value: cdktf.booleanToHclTerraform(struct!.enableEachUniqueValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEachUniqueValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEachUniqueValue = this._enableEachUniqueValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableEachUniqueValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableEachUniqueValue = value.enableEachUniqueValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // enable_each_unique_value - computed: false, optional: true, required: false
  private _enableEachUniqueValue?: boolean | cdktf.IResolvable; 
  public get enableEachUniqueValue() {
    return this.getBooleanAttribute('enable_each_unique_value');
  }
  public set enableEachUniqueValue(value: boolean | cdktf.IResolvable) {
    this._enableEachUniqueValue = value;
  }
  public resetEnableEachUniqueValue() {
    this._enableEachUniqueValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEachUniqueValueInput() {
    return this._enableEachUniqueValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference {
    return new GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#auto_deploy_confidence_threshold GoogleComputeSecurityPolicy#auto_deploy_confidence_threshold}
  */
  readonly autoDeployConfidenceThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#auto_deploy_expiration_sec GoogleComputeSecurityPolicy#auto_deploy_expiration_sec}
  */
  readonly autoDeployExpirationSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#auto_deploy_impacted_baseline_threshold GoogleComputeSecurityPolicy#auto_deploy_impacted_baseline_threshold}
  */
  readonly autoDeployImpactedBaselineThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#auto_deploy_load_threshold GoogleComputeSecurityPolicy#auto_deploy_load_threshold}
  */
  readonly autoDeployLoadThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#detection_absolute_qps GoogleComputeSecurityPolicy#detection_absolute_qps}
  */
  readonly detectionAbsoluteQps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#detection_load_threshold GoogleComputeSecurityPolicy#detection_load_threshold}
  */
  readonly detectionLoadThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#detection_relative_to_baseline_qps GoogleComputeSecurityPolicy#detection_relative_to_baseline_qps}
  */
  readonly detectionRelativeToBaselineQps?: number;
  /**
  * The name must be 1-63 characters long, and comply with RFC1035. The name must be unique within the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#name GoogleComputeSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * traffic_granularity_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#traffic_granularity_configs GoogleComputeSecurityPolicy#traffic_granularity_configs}
  */
  readonly trafficGranularityConfigs?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs[] | cdktf.IResolvable;
}

export function googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsToTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy_confidence_threshold: cdktf.numberToTerraform(struct!.autoDeployConfidenceThreshold),
    auto_deploy_expiration_sec: cdktf.numberToTerraform(struct!.autoDeployExpirationSec),
    auto_deploy_impacted_baseline_threshold: cdktf.numberToTerraform(struct!.autoDeployImpactedBaselineThreshold),
    auto_deploy_load_threshold: cdktf.numberToTerraform(struct!.autoDeployLoadThreshold),
    detection_absolute_qps: cdktf.numberToTerraform(struct!.detectionAbsoluteQps),
    detection_load_threshold: cdktf.numberToTerraform(struct!.detectionLoadThreshold),
    detection_relative_to_baseline_qps: cdktf.numberToTerraform(struct!.detectionRelativeToBaselineQps),
    name: cdktf.stringToTerraform(struct!.name),
    traffic_granularity_configs: cdktf.listMapper(googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsToTerraform, true)(struct!.trafficGranularityConfigs),
  }
}


export function googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsToHclTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_deploy_confidence_threshold: {
      value: cdktf.numberToHclTerraform(struct!.autoDeployConfidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_deploy_expiration_sec: {
      value: cdktf.numberToHclTerraform(struct!.autoDeployExpirationSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_deploy_impacted_baseline_threshold: {
      value: cdktf.numberToHclTerraform(struct!.autoDeployImpactedBaselineThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_deploy_load_threshold: {
      value: cdktf.numberToHclTerraform(struct!.autoDeployLoadThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_absolute_qps: {
      value: cdktf.numberToHclTerraform(struct!.detectionAbsoluteQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_load_threshold: {
      value: cdktf.numberToHclTerraform(struct!.detectionLoadThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_relative_to_baseline_qps: {
      value: cdktf.numberToHclTerraform(struct!.detectionRelativeToBaselineQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_granularity_configs: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsToHclTerraform, true)(struct!.trafficGranularityConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeployConfidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployConfidenceThreshold = this._autoDeployConfidenceThreshold;
    }
    if (this._autoDeployExpirationSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployExpirationSec = this._autoDeployExpirationSec;
    }
    if (this._autoDeployImpactedBaselineThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployImpactedBaselineThreshold = this._autoDeployImpactedBaselineThreshold;
    }
    if (this._autoDeployLoadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployLoadThreshold = this._autoDeployLoadThreshold;
    }
    if (this._detectionAbsoluteQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionAbsoluteQps = this._detectionAbsoluteQps;
    }
    if (this._detectionLoadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionLoadThreshold = this._detectionLoadThreshold;
    }
    if (this._detectionRelativeToBaselineQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionRelativeToBaselineQps = this._detectionRelativeToBaselineQps;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trafficGranularityConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficGranularityConfigs = this._trafficGranularityConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDeployConfidenceThreshold = undefined;
      this._autoDeployExpirationSec = undefined;
      this._autoDeployImpactedBaselineThreshold = undefined;
      this._autoDeployLoadThreshold = undefined;
      this._detectionAbsoluteQps = undefined;
      this._detectionLoadThreshold = undefined;
      this._detectionRelativeToBaselineQps = undefined;
      this._name = undefined;
      this._trafficGranularityConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDeployConfidenceThreshold = value.autoDeployConfidenceThreshold;
      this._autoDeployExpirationSec = value.autoDeployExpirationSec;
      this._autoDeployImpactedBaselineThreshold = value.autoDeployImpactedBaselineThreshold;
      this._autoDeployLoadThreshold = value.autoDeployLoadThreshold;
      this._detectionAbsoluteQps = value.detectionAbsoluteQps;
      this._detectionLoadThreshold = value.detectionLoadThreshold;
      this._detectionRelativeToBaselineQps = value.detectionRelativeToBaselineQps;
      this._name = value.name;
      this._trafficGranularityConfigs.internalValue = value.trafficGranularityConfigs;
    }
  }

  // auto_deploy_confidence_threshold - computed: false, optional: true, required: false
  private _autoDeployConfidenceThreshold?: number; 
  public get autoDeployConfidenceThreshold() {
    return this.getNumberAttribute('auto_deploy_confidence_threshold');
  }
  public set autoDeployConfidenceThreshold(value: number) {
    this._autoDeployConfidenceThreshold = value;
  }
  public resetAutoDeployConfidenceThreshold() {
    this._autoDeployConfidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployConfidenceThresholdInput() {
    return this._autoDeployConfidenceThreshold;
  }

  // auto_deploy_expiration_sec - computed: false, optional: true, required: false
  private _autoDeployExpirationSec?: number; 
  public get autoDeployExpirationSec() {
    return this.getNumberAttribute('auto_deploy_expiration_sec');
  }
  public set autoDeployExpirationSec(value: number) {
    this._autoDeployExpirationSec = value;
  }
  public resetAutoDeployExpirationSec() {
    this._autoDeployExpirationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployExpirationSecInput() {
    return this._autoDeployExpirationSec;
  }

  // auto_deploy_impacted_baseline_threshold - computed: false, optional: true, required: false
  private _autoDeployImpactedBaselineThreshold?: number; 
  public get autoDeployImpactedBaselineThreshold() {
    return this.getNumberAttribute('auto_deploy_impacted_baseline_threshold');
  }
  public set autoDeployImpactedBaselineThreshold(value: number) {
    this._autoDeployImpactedBaselineThreshold = value;
  }
  public resetAutoDeployImpactedBaselineThreshold() {
    this._autoDeployImpactedBaselineThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployImpactedBaselineThresholdInput() {
    return this._autoDeployImpactedBaselineThreshold;
  }

  // auto_deploy_load_threshold - computed: false, optional: true, required: false
  private _autoDeployLoadThreshold?: number; 
  public get autoDeployLoadThreshold() {
    return this.getNumberAttribute('auto_deploy_load_threshold');
  }
  public set autoDeployLoadThreshold(value: number) {
    this._autoDeployLoadThreshold = value;
  }
  public resetAutoDeployLoadThreshold() {
    this._autoDeployLoadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployLoadThresholdInput() {
    return this._autoDeployLoadThreshold;
  }

  // detection_absolute_qps - computed: false, optional: true, required: false
  private _detectionAbsoluteQps?: number; 
  public get detectionAbsoluteQps() {
    return this.getNumberAttribute('detection_absolute_qps');
  }
  public set detectionAbsoluteQps(value: number) {
    this._detectionAbsoluteQps = value;
  }
  public resetDetectionAbsoluteQps() {
    this._detectionAbsoluteQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionAbsoluteQpsInput() {
    return this._detectionAbsoluteQps;
  }

  // detection_load_threshold - computed: false, optional: true, required: false
  private _detectionLoadThreshold?: number; 
  public get detectionLoadThreshold() {
    return this.getNumberAttribute('detection_load_threshold');
  }
  public set detectionLoadThreshold(value: number) {
    this._detectionLoadThreshold = value;
  }
  public resetDetectionLoadThreshold() {
    this._detectionLoadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionLoadThresholdInput() {
    return this._detectionLoadThreshold;
  }

  // detection_relative_to_baseline_qps - computed: false, optional: true, required: false
  private _detectionRelativeToBaselineQps?: number; 
  public get detectionRelativeToBaselineQps() {
    return this.getNumberAttribute('detection_relative_to_baseline_qps');
  }
  public set detectionRelativeToBaselineQps(value: number) {
    this._detectionRelativeToBaselineQps = value;
  }
  public resetDetectionRelativeToBaselineQps() {
    this._detectionRelativeToBaselineQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionRelativeToBaselineQpsInput() {
    return this._detectionRelativeToBaselineQps;
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

  // traffic_granularity_configs - computed: false, optional: true, required: false
  private _trafficGranularityConfigs = new GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList(this, "traffic_granularity_configs", false);
  public get trafficGranularityConfigs() {
    return this._trafficGranularityConfigs;
  }
  public putTrafficGranularityConfigs(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs[] | cdktf.IResolvable) {
    this._trafficGranularityConfigs.internalValue = value;
  }
  public resetTrafficGranularityConfigs() {
    this._trafficGranularityConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficGranularityConfigsInput() {
    return this._trafficGranularityConfigs.internalValue;
  }
}

export class GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference {
    return new GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {
  /**
  * If set to true, enables CAAP for L7 DDoS detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#enable GoogleComputeSecurityPolicy#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Rule visibility. Supported values include: "STANDARD", "PREMIUM".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#rule_visibility GoogleComputeSecurityPolicy#rule_visibility}
  */
  readonly ruleVisibility?: string;
  /**
  * threshold_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#threshold_configs GoogleComputeSecurityPolicy#threshold_configs}
  */
  readonly thresholdConfigs?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs[] | cdktf.IResolvable;
}

export function googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigToTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference | GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rule_visibility: cdktf.stringToTerraform(struct!.ruleVisibility),
    threshold_configs: cdktf.listMapper(googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsToTerraform, true)(struct!.thresholdConfigs),
  }
}


export function googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference | GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_visibility: {
      value: cdktf.stringToHclTerraform(struct!.ruleVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_configs: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsToHclTerraform, true)(struct!.thresholdConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._ruleVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVisibility = this._ruleVisibility;
    }
    if (this._thresholdConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdConfigs = this._thresholdConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._ruleVisibility = undefined;
      this._thresholdConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._ruleVisibility = value.ruleVisibility;
      this._thresholdConfigs.internalValue = value.thresholdConfigs;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rule_visibility - computed: true, optional: true, required: false
  private _ruleVisibility?: string; 
  public get ruleVisibility() {
    return this.getStringAttribute('rule_visibility');
  }
  public set ruleVisibility(value: string) {
    this._ruleVisibility = value;
  }
  public resetRuleVisibility() {
    this._ruleVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVisibilityInput() {
    return this._ruleVisibility;
  }

  // threshold_configs - computed: false, optional: true, required: false
  private _thresholdConfigs = new GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList(this, "threshold_configs", false);
  public get thresholdConfigs() {
    return this._thresholdConfigs;
  }
  public putThresholdConfigs(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs[] | cdktf.IResolvable) {
    this._thresholdConfigs.internalValue = value;
  }
  public resetThresholdConfigs() {
    this._thresholdConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdConfigsInput() {
    return this._thresholdConfigs.internalValue;
  }
}
export interface GoogleComputeSecurityPolicyAdaptiveProtectionConfig {
  /**
  * auto_deploy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#auto_deploy_config GoogleComputeSecurityPolicy#auto_deploy_config}
  */
  readonly autoDeployConfig?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
  /**
  * layer_7_ddos_defense_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#layer_7_ddos_defense_config GoogleComputeSecurityPolicy#layer_7_ddos_defense_config}
  */
  readonly layer7DdosDefenseConfig?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}

export function googleComputeSecurityPolicyAdaptiveProtectionConfigToTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference | GoogleComputeSecurityPolicyAdaptiveProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deploy_config: googleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigToTerraform(struct!.autoDeployConfig),
    layer_7_ddos_defense_config: googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigToTerraform(struct!.layer7DdosDefenseConfig),
  }
}


export function googleComputeSecurityPolicyAdaptiveProtectionConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference | GoogleComputeSecurityPolicyAdaptiveProtectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_deploy_config: {
      value: googleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigToHclTerraform(struct!.autoDeployConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList",
    },
    layer_7_ddos_defense_config: {
      value: googleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigToHclTerraform(struct!.layer7DdosDefenseConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyAdaptiveProtectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeployConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeployConfig = this._autoDeployConfig?.internalValue;
    }
    if (this._layer7DdosDefenseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer7DdosDefenseConfig = this._layer7DdosDefenseConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDeployConfig.internalValue = undefined;
      this._layer7DdosDefenseConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDeployConfig.internalValue = value.autoDeployConfig;
      this._layer7DdosDefenseConfig.internalValue = value.layer7DdosDefenseConfig;
    }
  }

  // auto_deploy_config - computed: false, optional: true, required: false
  private _autoDeployConfig = new GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference(this, "auto_deploy_config");
  public get autoDeployConfig() {
    return this._autoDeployConfig;
  }
  public putAutoDeployConfig(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig) {
    this._autoDeployConfig.internalValue = value;
  }
  public resetAutoDeployConfig() {
    this._autoDeployConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeployConfigInput() {
    return this._autoDeployConfig.internalValue;
  }

  // layer_7_ddos_defense_config - computed: false, optional: true, required: false
  private _layer7DdosDefenseConfig = new GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(this, "layer_7_ddos_defense_config");
  public get layer7DdosDefenseConfig() {
    return this._layer7DdosDefenseConfig;
  }
  public putLayer7DdosDefenseConfig(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig) {
    this._layer7DdosDefenseConfig.internalValue = value;
  }
  public resetLayer7DdosDefenseConfig() {
    this._layer7DdosDefenseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer7DdosDefenseConfigInput() {
    return this._layer7DdosDefenseConfig.internalValue;
  }
}
export interface GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
  /**
  * A list of custom Content-Type header values to apply the JSON parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#content_types GoogleComputeSecurityPolicy#content_types}
  */
  readonly contentTypes: string[];
}

export function googleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToTerraform(struct?: GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference | GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentTypes),
  }
}


export function googleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference | GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentTypes = value.contentTypes;
    }
  }

  // content_types - computed: false, optional: false, required: true
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('content_types'));
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }
}
export interface GoogleComputeSecurityPolicyAdvancedOptionsConfig {
  /**
  * JSON body parsing. Supported values include: "DISABLED", "STANDARD".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#json_parsing GoogleComputeSecurityPolicy#json_parsing}
  */
  readonly jsonParsing?: string;
  /**
  * Logging level. Supported values include: "NORMAL", "VERBOSE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#log_level GoogleComputeSecurityPolicy#log_level}
  */
  readonly logLevel?: string;
  /**
  * An optional list of case-insensitive request header names to use for resolving the callers client IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#user_ip_request_headers GoogleComputeSecurityPolicy#user_ip_request_headers}
  */
  readonly userIpRequestHeaders?: string[];
  /**
  * json_custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#json_custom_config GoogleComputeSecurityPolicy#json_custom_config}
  */
  readonly jsonCustomConfig?: GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
}

export function googleComputeSecurityPolicyAdvancedOptionsConfigToTerraform(struct?: GoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference | GoogleComputeSecurityPolicyAdvancedOptionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_parsing: cdktf.stringToTerraform(struct!.jsonParsing),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    user_ip_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userIpRequestHeaders),
    json_custom_config: googleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToTerraform(struct!.jsonCustomConfig),
  }
}


export function googleComputeSecurityPolicyAdvancedOptionsConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference | GoogleComputeSecurityPolicyAdvancedOptionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_parsing: {
      value: cdktf.stringToHclTerraform(struct!.jsonParsing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_ip_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userIpRequestHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_custom_config: {
      value: googleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToHclTerraform(struct!.jsonCustomConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyAdvancedOptionsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonParsing !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonParsing = this._jsonParsing;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._userIpRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIpRequestHeaders = this._userIpRequestHeaders;
    }
    if (this._jsonCustomConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonCustomConfig = this._jsonCustomConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyAdvancedOptionsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonParsing = undefined;
      this._logLevel = undefined;
      this._userIpRequestHeaders = undefined;
      this._jsonCustomConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonParsing = value.jsonParsing;
      this._logLevel = value.logLevel;
      this._userIpRequestHeaders = value.userIpRequestHeaders;
      this._jsonCustomConfig.internalValue = value.jsonCustomConfig;
    }
  }

  // json_parsing - computed: true, optional: true, required: false
  private _jsonParsing?: string; 
  public get jsonParsing() {
    return this.getStringAttribute('json_parsing');
  }
  public set jsonParsing(value: string) {
    this._jsonParsing = value;
  }
  public resetJsonParsing() {
    this._jsonParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParsingInput() {
    return this._jsonParsing;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // user_ip_request_headers - computed: false, optional: true, required: false
  private _userIpRequestHeaders?: string[]; 
  public get userIpRequestHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ip_request_headers'));
  }
  public set userIpRequestHeaders(value: string[]) {
    this._userIpRequestHeaders = value;
  }
  public resetUserIpRequestHeaders() {
    this._userIpRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIpRequestHeadersInput() {
    return this._userIpRequestHeaders;
  }

  // json_custom_config - computed: false, optional: true, required: false
  private _jsonCustomConfig = new GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(this, "json_custom_config");
  public get jsonCustomConfig() {
    return this._jsonCustomConfig;
  }
  public putJsonCustomConfig(value: GoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig) {
    this._jsonCustomConfig.internalValue = value;
  }
  public resetJsonCustomConfig() {
    this._jsonCustomConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonCustomConfigInput() {
    return this._jsonCustomConfig.internalValue;
  }
}
export interface GoogleComputeSecurityPolicyRecaptchaOptionsConfig {
  /**
  * A field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy. The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#redirect_site_key GoogleComputeSecurityPolicy#redirect_site_key}
  */
  readonly redirectSiteKey: string;
}

export function googleComputeSecurityPolicyRecaptchaOptionsConfigToTerraform(struct?: GoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference | GoogleComputeSecurityPolicyRecaptchaOptionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_site_key: cdktf.stringToTerraform(struct!.redirectSiteKey),
  }
}


export function googleComputeSecurityPolicyRecaptchaOptionsConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference | GoogleComputeSecurityPolicyRecaptchaOptionsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_site_key: {
      value: cdktf.stringToHclTerraform(struct!.redirectSiteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRecaptchaOptionsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectSiteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectSiteKey = this._redirectSiteKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRecaptchaOptionsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectSiteKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectSiteKey = value.redirectSiteKey;
    }
  }

  // redirect_site_key - computed: false, optional: false, required: true
  private _redirectSiteKey?: string; 
  public get redirectSiteKey() {
    return this.getStringAttribute('redirect_site_key');
  }
  public set redirectSiteKey(value: string) {
    this._redirectSiteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectSiteKeyInput() {
    return this._redirectSiteKey;
  }
}
export interface GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds {
  /**
  * The name of the header to set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#header_name GoogleComputeSecurityPolicy#header_name}
  */
  readonly headerName: string;
  /**
  * The value to set the named header to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#header_value GoogleComputeSecurityPolicy#header_value}
  */
  readonly headerValue?: string;
}

export function googleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsToTerraform(struct?: GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function googleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference {
    return new GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyRuleHeaderAction {
  /**
  * request_headers_to_adds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#request_headers_to_adds GoogleComputeSecurityPolicy#request_headers_to_adds}
  */
  readonly requestHeadersToAdds: GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktf.IResolvable;
}

export function googleComputeSecurityPolicyRuleHeaderActionToTerraform(struct?: GoogleComputeSecurityPolicyRuleHeaderActionOutputReference | GoogleComputeSecurityPolicyRuleHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_adds: cdktf.listMapper(googleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsToTerraform, true)(struct!.requestHeadersToAdds),
  }
}


export function googleComputeSecurityPolicyRuleHeaderActionToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleHeaderActionOutputReference | GoogleComputeSecurityPolicyRuleHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_adds: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsToHclTerraform, true)(struct!.requestHeadersToAdds),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToAdds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdds = this._requestHeadersToAdds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToAdds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToAdds.internalValue = value.requestHeadersToAdds;
    }
  }

  // request_headers_to_adds - computed: false, optional: false, required: true
  private _requestHeadersToAdds = new GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(this, "request_headers_to_adds", false);
  public get requestHeadersToAdds() {
    return this._requestHeadersToAdds;
  }
  public putRequestHeadersToAdds(value: GoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktf.IResolvable) {
    this._requestHeadersToAdds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddsInput() {
    return this._requestHeadersToAdds.internalValue;
  }
}
export interface GoogleComputeSecurityPolicyRuleMatchConfig {
  /**
  * Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation to match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of '*' matches all IPs (can be used to override the default behavior).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#src_ip_ranges GoogleComputeSecurityPolicy#src_ip_ranges}
  */
  readonly srcIpRanges: string[];
}

export function googleComputeSecurityPolicyRuleMatchConfigToTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchConfigOutputReference | GoogleComputeSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
  }
}


export function googleComputeSecurityPolicyRuleMatchConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchConfigOutputReference | GoogleComputeSecurityPolicyRuleMatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleMatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleMatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleMatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcIpRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcIpRanges = value.srcIpRanges;
    }
  }

  // src_ip_ranges - computed: false, optional: false, required: true
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('src_ip_ranges'));
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }
}
export interface GoogleComputeSecurityPolicyRuleMatchExpr {
  /**
  * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#expression GoogleComputeSecurityPolicy#expression}
  */
  readonly expression: string;
}

export function googleComputeSecurityPolicyRuleMatchExprToTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchExprOutputReference | GoogleComputeSecurityPolicyRuleMatchExpr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function googleComputeSecurityPolicyRuleMatchExprToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchExprOutputReference | GoogleComputeSecurityPolicyRuleMatchExpr): any {
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

export class GoogleComputeSecurityPolicyRuleMatchExprOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleMatchExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleMatchExpr | undefined) {
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
export interface GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions {
  /**
  * A list of site keys to be used during the validation of reCAPTCHA action-tokens. The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#action_token_site_keys GoogleComputeSecurityPolicy#action_token_site_keys}
  */
  readonly actionTokenSiteKeys?: string[];
  /**
  * A list of site keys to be used during the validation of reCAPTCHA session-tokens. The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#session_token_site_keys GoogleComputeSecurityPolicy#session_token_site_keys}
  */
  readonly sessionTokenSiteKeys?: string[];
}

export function googleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsToTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference | GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_token_site_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionTokenSiteKeys),
    session_token_site_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionTokenSiteKeys),
  }
}


export function googleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference | GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_token_site_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionTokenSiteKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_token_site_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sessionTokenSiteKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTokenSiteKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTokenSiteKeys = this._actionTokenSiteKeys;
    }
    if (this._sessionTokenSiteKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTokenSiteKeys = this._sessionTokenSiteKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionTokenSiteKeys = undefined;
      this._sessionTokenSiteKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionTokenSiteKeys = value.actionTokenSiteKeys;
      this._sessionTokenSiteKeys = value.sessionTokenSiteKeys;
    }
  }

  // action_token_site_keys - computed: false, optional: true, required: false
  private _actionTokenSiteKeys?: string[]; 
  public get actionTokenSiteKeys() {
    return this.getListAttribute('action_token_site_keys');
  }
  public set actionTokenSiteKeys(value: string[]) {
    this._actionTokenSiteKeys = value;
  }
  public resetActionTokenSiteKeys() {
    this._actionTokenSiteKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTokenSiteKeysInput() {
    return this._actionTokenSiteKeys;
  }

  // session_token_site_keys - computed: false, optional: true, required: false
  private _sessionTokenSiteKeys?: string[]; 
  public get sessionTokenSiteKeys() {
    return this.getListAttribute('session_token_site_keys');
  }
  public set sessionTokenSiteKeys(value: string[]) {
    this._sessionTokenSiteKeys = value;
  }
  public resetSessionTokenSiteKeys() {
    this._sessionTokenSiteKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenSiteKeysInput() {
    return this._sessionTokenSiteKeys;
  }
}
export interface GoogleComputeSecurityPolicyRuleMatchExprOptions {
  /**
  * recaptcha_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#recaptcha_options GoogleComputeSecurityPolicy#recaptcha_options}
  */
  readonly recaptchaOptions: GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions;
}

export function googleComputeSecurityPolicyRuleMatchExprOptionsToTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference | GoogleComputeSecurityPolicyRuleMatchExprOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recaptcha_options: googleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsToTerraform(struct!.recaptchaOptions),
  }
}


export function googleComputeSecurityPolicyRuleMatchExprOptionsToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference | GoogleComputeSecurityPolicyRuleMatchExprOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recaptcha_options: {
      value: googleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsToHclTerraform(struct!.recaptchaOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleMatchExprOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recaptchaOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaOptions = this._recaptchaOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleMatchExprOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recaptchaOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recaptchaOptions.internalValue = value.recaptchaOptions;
    }
  }

  // recaptcha_options - computed: false, optional: false, required: true
  private _recaptchaOptions = new GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference(this, "recaptcha_options");
  public get recaptchaOptions() {
    return this._recaptchaOptions;
  }
  public putRecaptchaOptions(value: GoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions) {
    this._recaptchaOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaOptionsInput() {
    return this._recaptchaOptions.internalValue;
  }
}
export interface GoogleComputeSecurityPolicyRuleMatch {
  /**
  * Predefined rule expression. If this field is specified, config must also be specified. Available options:   SRC_IPS_V1: Must specify the corresponding src_ip_ranges field in config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#versioned_expr GoogleComputeSecurityPolicy#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#config GoogleComputeSecurityPolicy#config}
  */
  readonly config?: GoogleComputeSecurityPolicyRuleMatchConfig;
  /**
  * expr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#expr GoogleComputeSecurityPolicy#expr}
  */
  readonly expr?: GoogleComputeSecurityPolicyRuleMatchExpr;
  /**
  * expr_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#expr_options GoogleComputeSecurityPolicy#expr_options}
  */
  readonly exprOptions?: GoogleComputeSecurityPolicyRuleMatchExprOptions;
}

export function googleComputeSecurityPolicyRuleMatchToTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchOutputReference | GoogleComputeSecurityPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    versioned_expr: cdktf.stringToTerraform(struct!.versionedExpr),
    config: googleComputeSecurityPolicyRuleMatchConfigToTerraform(struct!.config),
    expr: googleComputeSecurityPolicyRuleMatchExprToTerraform(struct!.expr),
    expr_options: googleComputeSecurityPolicyRuleMatchExprOptionsToTerraform(struct!.exprOptions),
  }
}


export function googleComputeSecurityPolicyRuleMatchToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleMatchOutputReference | GoogleComputeSecurityPolicyRuleMatch): any {
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
      value: googleComputeSecurityPolicyRuleMatchConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleMatchConfigList",
    },
    expr: {
      value: googleComputeSecurityPolicyRuleMatchExprToHclTerraform(struct!.expr),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleMatchExprList",
    },
    expr_options: {
      value: googleComputeSecurityPolicyRuleMatchExprOptionsToHclTerraform(struct!.exprOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleMatchExprOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleMatch | undefined {
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
    if (this._exprOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exprOptions = this._exprOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
      this._expr.internalValue = undefined;
      this._exprOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
      this._expr.internalValue = value.expr;
      this._exprOptions.internalValue = value.exprOptions;
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
  private _config = new GoogleComputeSecurityPolicyRuleMatchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleComputeSecurityPolicyRuleMatchConfig) {
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
  private _expr = new GoogleComputeSecurityPolicyRuleMatchExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: GoogleComputeSecurityPolicyRuleMatchExpr) {
    this._expr.internalValue = value;
  }
  public resetExpr() {
    this._expr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }

  // expr_options - computed: false, optional: true, required: false
  private _exprOptions = new GoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference(this, "expr_options");
  public get exprOptions() {
    return this._exprOptions;
  }
  public putExprOptions(value: GoogleComputeSecurityPolicyRuleMatchExprOptions) {
    this._exprOptions.internalValue = value;
  }
  public resetExprOptions() {
    this._exprOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprOptionsInput() {
    return this._exprOptions.internalValue;
  }
}
export interface GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#operator GoogleComputeSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#value GoogleComputeSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable): any {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktf.IResolvable | undefined) {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference {
    return new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#operator GoogleComputeSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#value GoogleComputeSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable): any {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktf.IResolvable | undefined) {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference {
    return new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#operator GoogleComputeSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#value GoogleComputeSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable): any {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktf.IResolvable | undefined) {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference {
    return new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value. Available options: EQUALS: The operator matches if the field value equals the specified value. STARTS_WITH: The operator matches if the field value starts with the specified value. ENDS_WITH: The operator matches if the field value ends with the specified value. CONTAINS: The operator matches if the field value contains the specified value. EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#operator GoogleComputeSecurityPolicy#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#value GoogleComputeSecurityPolicy#value}
  */
  readonly value?: string;
}

export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable): any {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktf.IResolvable | undefined) {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference {
    return new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion {
  /**
  * A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#target_rule_ids GoogleComputeSecurityPolicy#target_rule_ids}
  */
  readonly targetRuleIds?: string[];
  /**
  * Target WAF rule set to apply the preconfigured WAF exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#target_rule_set GoogleComputeSecurityPolicy#target_rule_set}
  */
  readonly targetRuleSet: string;
  /**
  * request_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#request_cookie GoogleComputeSecurityPolicy#request_cookie}
  */
  readonly requestCookie?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#request_header GoogleComputeSecurityPolicy#request_header}
  */
  readonly requestHeader?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable;
  /**
  * request_query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#request_query_param GoogleComputeSecurityPolicy#request_query_param}
  */
  readonly requestQueryParam?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#request_uri GoogleComputeSecurityPolicy#request_uri}
  */
  readonly requestUri?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable;
}

export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetRuleIds),
    target_rule_set: cdktf.stringToTerraform(struct!.targetRuleSet),
    request_cookie: cdktf.listMapper(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform, true)(struct!.requestCookie),
    request_header: cdktf.listMapper(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_query_param: cdktf.listMapper(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform, true)(struct!.requestQueryParam),
    request_uri: cdktf.listMapper(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform, true)(struct!.requestUri),
  }
}


export function googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_rule_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetRuleIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target_rule_set: {
      value: cdktf.stringToHclTerraform(struct!.targetRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cookie: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform, true)(struct!.requestCookie),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList",
    },
    request_header: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList",
    },
    request_query_param: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform, true)(struct!.requestQueryParam),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList",
    },
    request_uri: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform, true)(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('target_rule_ids'));
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
  private _requestCookie = new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(this, "request_cookie", false);
  public get requestCookie() {
    return this._requestCookie;
  }
  public putRequestCookie(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktf.IResolvable) {
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
  private _requestHeader = new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktf.IResolvable) {
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
  private _requestQueryParam = new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(this, "request_query_param", false);
  public get requestQueryParam() {
    return this._requestQueryParam;
  }
  public putRequestQueryParam(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktf.IResolvable) {
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
  private _requestUri = new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktf.IResolvable) {
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

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference {
    return new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyRulePreconfiguredWafConfig {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#exclusion GoogleComputeSecurityPolicy#exclusion}
  */
  readonly exclusion?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable;
}

export function googleComputeSecurityPolicyRulePreconfiguredWafConfigToTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference | GoogleComputeSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.listMapper(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function googleComputeSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(struct?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference | GoogleComputeSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRulePreconfiguredWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfig | undefined) {
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
  private _exclusion = new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktf.IResolvable) {
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
export interface GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#count GoogleComputeSecurityPolicy#count}
  */
  readonly count: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#interval_sec GoogleComputeSecurityPolicy#interval_sec}
  */
  readonly intervalSec: number;
}

export function googleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdToTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function googleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold): any {
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

export class GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold | undefined) {
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

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: false, required: true
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs {
  /**
  * Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#enforce_on_key_name GoogleComputeSecurityPolicy#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Determines the key to enforce the rate_limit_threshold on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#enforce_on_key_type GoogleComputeSecurityPolicy#enforce_on_key_type}
  */
  readonly enforceOnKeyType?: string;
}

export function googleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_on_key_name: cdktf.stringToTerraform(struct!.enforceOnKeyName),
    enforce_on_key_type: cdktf.stringToTerraform(struct!.enforceOnKeyType),
  }
}


export function googleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable): any {
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

export class GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs | cdktf.IResolvable | undefined) {
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

export class GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference {
    return new GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions {
  /**
  * Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#target GoogleComputeSecurityPolicy#target}
  */
  readonly target?: string;
  /**
  * Type of the redirect action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#type GoogleComputeSecurityPolicy#type}
  */
  readonly type: string;
}

export function googleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsToTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
  /**
  * Number of HTTP(S) requests for calculating the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#count GoogleComputeSecurityPolicy#count}
  */
  readonly count: number;
  /**
  * Interval over which the threshold is computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#interval_sec GoogleComputeSecurityPolicy#interval_sec}
  */
  readonly intervalSec: number;
}

export function googleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval_sec: cdktf.numberToTerraform(struct!.intervalSec),
  }
}


export function googleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold): any {
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

export class GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold | undefined) {
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

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval_sec - computed: false, optional: false, required: true
  private _intervalSec?: number; 
  public get intervalSec() {
    return this.getNumberAttribute('interval_sec');
  }
  public set intervalSec(value: number) {
    this._intervalSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecInput() {
    return this._intervalSec;
  }
}
export interface GoogleComputeSecurityPolicyRuleRateLimitOptions {
  /**
  * Can only be specified if the action for the rule is "rate_based_ban". If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#ban_duration_sec GoogleComputeSecurityPolicy#ban_duration_sec}
  */
  readonly banDurationSec?: number;
  /**
  * Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#conform_action GoogleComputeSecurityPolicy#conform_action}
  */
  readonly conformAction: string;
  /**
  * Determines the key to enforce the rateLimitThreshold on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#enforce_on_key GoogleComputeSecurityPolicy#enforce_on_key}
  */
  readonly enforceOnKey?: string;
  /**
  * Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#enforce_on_key_name GoogleComputeSecurityPolicy#enforce_on_key_name}
  */
  readonly enforceOnKeyName?: string;
  /**
  * Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. Valid options are "deny()" where valid values for status are 403, 404, 429, and 502, and "redirect" where the redirect parameters come from exceedRedirectOptions below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#exceed_action GoogleComputeSecurityPolicy#exceed_action}
  */
  readonly exceedAction: string;
  /**
  * ban_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#ban_threshold GoogleComputeSecurityPolicy#ban_threshold}
  */
  readonly banThreshold?: GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold;
  /**
  * enforce_on_key_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#enforce_on_key_configs GoogleComputeSecurityPolicy#enforce_on_key_configs}
  */
  readonly enforceOnKeyConfigs?: GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable;
  /**
  * exceed_redirect_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#exceed_redirect_options GoogleComputeSecurityPolicy#exceed_redirect_options}
  */
  readonly exceedRedirectOptions?: GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions;
  /**
  * rate_limit_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#rate_limit_threshold GoogleComputeSecurityPolicy#rate_limit_threshold}
  */
  readonly rateLimitThreshold: GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold;
}

export function googleComputeSecurityPolicyRuleRateLimitOptionsToTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptions): any {
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
    ban_threshold: googleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdToTerraform(struct!.banThreshold),
    enforce_on_key_configs: cdktf.listMapper(googleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToTerraform, true)(struct!.enforceOnKeyConfigs),
    exceed_redirect_options: googleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsToTerraform(struct!.exceedRedirectOptions),
    rate_limit_threshold: googleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToTerraform(struct!.rateLimitThreshold),
  }
}


export function googleComputeSecurityPolicyRuleRateLimitOptionsToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference | GoogleComputeSecurityPolicyRuleRateLimitOptions): any {
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
      value: googleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdToHclTerraform(struct!.banThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList",
    },
    enforce_on_key_configs: {
      value: cdktf.listMapperHcl(googleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsToHclTerraform, true)(struct!.enforceOnKeyConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList",
    },
    exceed_redirect_options: {
      value: googleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsToHclTerraform(struct!.exceedRedirectOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList",
    },
    rate_limit_threshold: {
      value: googleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdToHclTerraform(struct!.rateLimitThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleRateLimitOptions | undefined {
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
    if (this._exceedRedirectOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedRedirectOptions = this._exceedRedirectOptions?.internalValue;
    }
    if (this._rateLimitThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitThreshold = this._rateLimitThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleRateLimitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._banDurationSec = undefined;
      this._conformAction = undefined;
      this._enforceOnKey = undefined;
      this._enforceOnKeyName = undefined;
      this._exceedAction = undefined;
      this._banThreshold.internalValue = undefined;
      this._enforceOnKeyConfigs.internalValue = undefined;
      this._exceedRedirectOptions.internalValue = undefined;
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
      this._exceedRedirectOptions.internalValue = value.exceedRedirectOptions;
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

  // conform_action - computed: false, optional: false, required: true
  private _conformAction?: string; 
  public get conformAction() {
    return this.getStringAttribute('conform_action');
  }
  public set conformAction(value: string) {
    this._conformAction = value;
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

  // exceed_action - computed: false, optional: false, required: true
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // ban_threshold - computed: false, optional: true, required: false
  private _banThreshold = new GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(this, "ban_threshold");
  public get banThreshold() {
    return this._banThreshold;
  }
  public putBanThreshold(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold) {
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
  private _enforceOnKeyConfigs = new GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(this, "enforce_on_key_configs", false);
  public get enforceOnKeyConfigs() {
    return this._enforceOnKeyConfigs;
  }
  public putEnforceOnKeyConfigs(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs[] | cdktf.IResolvable) {
    this._enforceOnKeyConfigs.internalValue = value;
  }
  public resetEnforceOnKeyConfigs() {
    this._enforceOnKeyConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceOnKeyConfigsInput() {
    return this._enforceOnKeyConfigs.internalValue;
  }

  // exceed_redirect_options - computed: false, optional: true, required: false
  private _exceedRedirectOptions = new GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(this, "exceed_redirect_options");
  public get exceedRedirectOptions() {
    return this._exceedRedirectOptions;
  }
  public putExceedRedirectOptions(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions) {
    this._exceedRedirectOptions.internalValue = value;
  }
  public resetExceedRedirectOptions() {
    this._exceedRedirectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedRedirectOptionsInput() {
    return this._exceedRedirectOptions.internalValue;
  }

  // rate_limit_threshold - computed: false, optional: false, required: true
  private _rateLimitThreshold = new GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(this, "rate_limit_threshold");
  public get rateLimitThreshold() {
    return this._rateLimitThreshold;
  }
  public putRateLimitThreshold(value: GoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold) {
    this._rateLimitThreshold.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitThresholdInput() {
    return this._rateLimitThreshold.internalValue;
  }
}
export interface GoogleComputeSecurityPolicyRuleRedirectOptions {
  /**
  * Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#target GoogleComputeSecurityPolicy#target}
  */
  readonly target?: string;
  /**
  * Type of the redirect action. Available options: EXTERNAL_302: Must specify the corresponding target field in config. GOOGLE_RECAPTCHA: Cannot specify target field in config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#type GoogleComputeSecurityPolicy#type}
  */
  readonly type: string;
}

export function googleComputeSecurityPolicyRuleRedirectOptionsToTerraform(struct?: GoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference | GoogleComputeSecurityPolicyRuleRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleComputeSecurityPolicyRuleRedirectOptionsToHclTerraform(struct?: GoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference | GoogleComputeSecurityPolicyRuleRedirectOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeSecurityPolicyRuleRedirectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRuleRedirectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleComputeSecurityPolicyRule {
  /**
  * Action to take when match matches the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#action GoogleComputeSecurityPolicy#action}
  */
  readonly action: string;
  /**
  * An optional description of this rule. Max size is 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#description GoogleComputeSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * When set to true, the action specified above is not enforced. Stackdriver logs for requests that trigger a preview action are annotated as such.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#preview GoogleComputeSecurityPolicy#preview}
  */
  readonly preview?: boolean | cdktf.IResolvable;
  /**
  * An unique positive integer indicating the priority of evaluation for a rule. Rules are evaluated from highest priority (lowest numerically) to lowest priority (highest numerically) in order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#priority GoogleComputeSecurityPolicy#priority}
  */
  readonly priority: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#header_action GoogleComputeSecurityPolicy#header_action}
  */
  readonly headerAction?: GoogleComputeSecurityPolicyRuleHeaderAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#match GoogleComputeSecurityPolicy#match}
  */
  readonly match: GoogleComputeSecurityPolicyRuleMatch;
  /**
  * preconfigured_waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#preconfigured_waf_config GoogleComputeSecurityPolicy#preconfigured_waf_config}
  */
  readonly preconfiguredWafConfig?: GoogleComputeSecurityPolicyRulePreconfiguredWafConfig;
  /**
  * rate_limit_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#rate_limit_options GoogleComputeSecurityPolicy#rate_limit_options}
  */
  readonly rateLimitOptions?: GoogleComputeSecurityPolicyRuleRateLimitOptions;
  /**
  * redirect_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#redirect_options GoogleComputeSecurityPolicy#redirect_options}
  */
  readonly redirectOptions?: GoogleComputeSecurityPolicyRuleRedirectOptions;
}

export function googleComputeSecurityPolicyRuleToTerraform(struct?: GoogleComputeSecurityPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    preview: cdktf.booleanToTerraform(struct!.preview),
    priority: cdktf.numberToTerraform(struct!.priority),
    header_action: googleComputeSecurityPolicyRuleHeaderActionToTerraform(struct!.headerAction),
    match: googleComputeSecurityPolicyRuleMatchToTerraform(struct!.match),
    preconfigured_waf_config: googleComputeSecurityPolicyRulePreconfiguredWafConfigToTerraform(struct!.preconfiguredWafConfig),
    rate_limit_options: googleComputeSecurityPolicyRuleRateLimitOptionsToTerraform(struct!.rateLimitOptions),
    redirect_options: googleComputeSecurityPolicyRuleRedirectOptionsToTerraform(struct!.redirectOptions),
  }
}


export function googleComputeSecurityPolicyRuleToHclTerraform(struct?: GoogleComputeSecurityPolicyRule | cdktf.IResolvable): any {
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
    header_action: {
      value: googleComputeSecurityPolicyRuleHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleHeaderActionList",
    },
    match: {
      value: googleComputeSecurityPolicyRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleMatchList",
    },
    preconfigured_waf_config: {
      value: googleComputeSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(struct!.preconfiguredWafConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRulePreconfiguredWafConfigList",
    },
    rate_limit_options: {
      value: googleComputeSecurityPolicyRuleRateLimitOptionsToHclTerraform(struct!.rateLimitOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleRateLimitOptionsList",
    },
    redirect_options: {
      value: googleComputeSecurityPolicyRuleRedirectOptionsToHclTerraform(struct!.redirectOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeSecurityPolicyRuleRedirectOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeSecurityPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeSecurityPolicyRule | cdktf.IResolvable | undefined {
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
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._preconfiguredWafConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconfiguredWafConfig = this._preconfiguredWafConfig?.internalValue;
    }
    if (this._rateLimitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitOptions = this._rateLimitOptions?.internalValue;
    }
    if (this._redirectOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectOptions = this._redirectOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeSecurityPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._preview = undefined;
      this._priority = undefined;
      this._headerAction.internalValue = undefined;
      this._match.internalValue = undefined;
      this._preconfiguredWafConfig.internalValue = undefined;
      this._rateLimitOptions.internalValue = undefined;
      this._redirectOptions.internalValue = undefined;
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
      this._headerAction.internalValue = value.headerAction;
      this._match.internalValue = value.match;
      this._preconfiguredWafConfig.internalValue = value.preconfiguredWafConfig;
      this._rateLimitOptions.internalValue = value.rateLimitOptions;
      this._redirectOptions.internalValue = value.redirectOptions;
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

  // preview - computed: true, optional: true, required: false
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

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeSecurityPolicyRuleHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeSecurityPolicyRuleHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new GoogleComputeSecurityPolicyRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: GoogleComputeSecurityPolicyRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // preconfigured_waf_config - computed: false, optional: true, required: false
  private _preconfiguredWafConfig = new GoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference(this, "preconfigured_waf_config");
  public get preconfiguredWafConfig() {
    return this._preconfiguredWafConfig;
  }
  public putPreconfiguredWafConfig(value: GoogleComputeSecurityPolicyRulePreconfiguredWafConfig) {
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
  private _rateLimitOptions = new GoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference(this, "rate_limit_options");
  public get rateLimitOptions() {
    return this._rateLimitOptions;
  }
  public putRateLimitOptions(value: GoogleComputeSecurityPolicyRuleRateLimitOptions) {
    this._rateLimitOptions.internalValue = value;
  }
  public resetRateLimitOptions() {
    this._rateLimitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitOptionsInput() {
    return this._rateLimitOptions.internalValue;
  }

  // redirect_options - computed: false, optional: true, required: false
  private _redirectOptions = new GoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference(this, "redirect_options");
  public get redirectOptions() {
    return this._redirectOptions;
  }
  public putRedirectOptions(value: GoogleComputeSecurityPolicyRuleRedirectOptions) {
    this._redirectOptions.internalValue = value;
  }
  public resetRedirectOptions() {
    this._redirectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectOptionsInput() {
    return this._redirectOptions.internalValue;
  }
}

export class GoogleComputeSecurityPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeSecurityPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeSecurityPolicyRuleOutputReference {
    return new GoogleComputeSecurityPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeSecurityPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#create GoogleComputeSecurityPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#delete GoogleComputeSecurityPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#update GoogleComputeSecurityPolicy#update}
  */
  readonly update?: string;
}

export function googleComputeSecurityPolicyTimeoutsToTerraform(struct?: GoogleComputeSecurityPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleComputeSecurityPolicyTimeoutsToHclTerraform(struct?: GoogleComputeSecurityPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeSecurityPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeSecurityPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeSecurityPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy google_compute_security_policy}
*/
export class GoogleComputeSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeSecurityPolicy to import
  * @param importFromId The id of the existing GoogleComputeSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_security_policy google_compute_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.22.0',
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
    this._type = config.type;
    this._adaptiveProtectionConfig.internalValue = config.adaptiveProtectionConfig;
    this._advancedOptionsConfig.internalValue = config.advancedOptionsConfig;
    this._recaptchaOptionsConfig.internalValue = config.recaptchaOptionsConfig;
    this._rule.internalValue = config.rule;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // type - computed: true, optional: true, required: false
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

  // adaptive_protection_config - computed: false, optional: true, required: false
  private _adaptiveProtectionConfig = new GoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(this, "adaptive_protection_config");
  public get adaptiveProtectionConfig() {
    return this._adaptiveProtectionConfig;
  }
  public putAdaptiveProtectionConfig(value: GoogleComputeSecurityPolicyAdaptiveProtectionConfig) {
    this._adaptiveProtectionConfig.internalValue = value;
  }
  public resetAdaptiveProtectionConfig() {
    this._adaptiveProtectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveProtectionConfigInput() {
    return this._adaptiveProtectionConfig.internalValue;
  }

  // advanced_options_config - computed: false, optional: true, required: false
  private _advancedOptionsConfig = new GoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference(this, "advanced_options_config");
  public get advancedOptionsConfig() {
    return this._advancedOptionsConfig;
  }
  public putAdvancedOptionsConfig(value: GoogleComputeSecurityPolicyAdvancedOptionsConfig) {
    this._advancedOptionsConfig.internalValue = value;
  }
  public resetAdvancedOptionsConfig() {
    this._advancedOptionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsConfigInput() {
    return this._advancedOptionsConfig.internalValue;
  }

  // recaptcha_options_config - computed: false, optional: true, required: false
  private _recaptchaOptionsConfig = new GoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference(this, "recaptcha_options_config");
  public get recaptchaOptionsConfig() {
    return this._recaptchaOptionsConfig;
  }
  public putRecaptchaOptionsConfig(value: GoogleComputeSecurityPolicyRecaptchaOptionsConfig) {
    this._recaptchaOptionsConfig.internalValue = value;
  }
  public resetRecaptchaOptionsConfig() {
    this._recaptchaOptionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaOptionsConfigInput() {
    return this._recaptchaOptionsConfig.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new GoogleComputeSecurityPolicyRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: GoogleComputeSecurityPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeSecurityPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeSecurityPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      adaptive_protection_config: googleComputeSecurityPolicyAdaptiveProtectionConfigToTerraform(this._adaptiveProtectionConfig.internalValue),
      advanced_options_config: googleComputeSecurityPolicyAdvancedOptionsConfigToTerraform(this._advancedOptionsConfig.internalValue),
      recaptcha_options_config: googleComputeSecurityPolicyRecaptchaOptionsConfigToTerraform(this._recaptchaOptionsConfig.internalValue),
      rule: cdktf.listMapper(googleComputeSecurityPolicyRuleToTerraform, true)(this._rule.internalValue),
      timeouts: googleComputeSecurityPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adaptive_protection_config: {
        value: googleComputeSecurityPolicyAdaptiveProtectionConfigToHclTerraform(this._adaptiveProtectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeSecurityPolicyAdaptiveProtectionConfigList",
      },
      advanced_options_config: {
        value: googleComputeSecurityPolicyAdvancedOptionsConfigToHclTerraform(this._advancedOptionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeSecurityPolicyAdvancedOptionsConfigList",
      },
      recaptcha_options_config: {
        value: googleComputeSecurityPolicyRecaptchaOptionsConfigToHclTerraform(this._recaptchaOptionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeSecurityPolicyRecaptchaOptionsConfigList",
      },
      rule: {
        value: cdktf.listMapperHcl(googleComputeSecurityPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeSecurityPolicyRuleList",
      },
      timeouts: {
        value: googleComputeSecurityPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeSecurityPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
