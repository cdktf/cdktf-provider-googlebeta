/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDiscoveryEngineRecommendationEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data stores associated with this engine. For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#data_store_ids GoogleDiscoveryEngineRecommendationEngine#data_store_ids}
  */
  readonly dataStoreIds: string[];
  /**
  * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#display_name GoogleDiscoveryEngineRecommendationEngine#display_name}
  */
  readonly displayName: string;
  /**
  * Unique ID to use for Recommendation Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#engine_id GoogleDiscoveryEngineRecommendationEngine#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#id GoogleDiscoveryEngineRecommendationEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#industry_vertical GoogleDiscoveryEngineRecommendationEngine#industry_vertical}
  */
  readonly industryVertical?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#location GoogleDiscoveryEngineRecommendationEngine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#project GoogleDiscoveryEngineRecommendationEngine#project}
  */
  readonly project?: string;
  /**
  * common_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#common_config GoogleDiscoveryEngineRecommendationEngine#common_config}
  */
  readonly commonConfig?: GoogleDiscoveryEngineRecommendationEngineCommonConfig;
  /**
  * media_recommendation_engine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#media_recommendation_engine_config GoogleDiscoveryEngineRecommendationEngine#media_recommendation_engine_config}
  */
  readonly mediaRecommendationEngineConfig?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#timeouts GoogleDiscoveryEngineRecommendationEngine#timeouts}
  */
  readonly timeouts?: GoogleDiscoveryEngineRecommendationEngineTimeouts;
}
export interface GoogleDiscoveryEngineRecommendationEngineCommonConfig {
  /**
  * The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.cd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#company_name GoogleDiscoveryEngineRecommendationEngine#company_name}
  */
  readonly companyName?: string;
}

export function googleDiscoveryEngineRecommendationEngineCommonConfigToTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_name: cdktf.stringToTerraform(struct!.companyName),
  }
}


export function googleDiscoveryEngineRecommendationEngineCommonConfigToHclTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company_name: {
      value: cdktf.stringToHclTerraform(struct!.companyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineRecommendationEngineCommonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineRecommendationEngineCommonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyName = value.companyName;
    }
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }
}
export interface GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig {
  /**
  * The time window of which the engine is queried at training and
  * prediction time. Positive integers only. The value translates to the
  * last X days of events. Currently required for the 'most-popular-items'
  * engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#time_window_days GoogleDiscoveryEngineRecommendationEngine#time_window_days}
  */
  readonly timeWindowDays?: number;
}

export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window_days: cdktf.numberToTerraform(struct!.timeWindowDays),
  }
}


export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToHclTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_window_days: {
      value: cdktf.numberToHclTerraform(struct!.timeWindowDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindowDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowDays = this._timeWindowDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeWindowDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeWindowDays = value.timeWindowDays;
    }
  }

  // time_window_days - computed: false, optional: true, required: false
  private _timeWindowDays?: number; 
  public get timeWindowDays() {
    return this.getNumberAttribute('time_window_days');
  }
  public set timeWindowDays(value: number) {
    this._timeWindowDays = value;
  }
  public resetTimeWindowDays() {
    this._timeWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowDaysInput() {
    return this._timeWindowDays;
  }
}
export interface GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig {
  /**
  * The type of event with which the engine is queried at prediction time.
  * If set to 'generic', only 'view-item', 'media-play',and
  * 'media-complete' will be used as 'context-event' in engine training. If
  * set to 'view-home-page', 'view-home-page' will also be used as
  * 'context-events' in addition to 'view-item', 'media-play', and
  * 'media-complete'. Currently supported for the 'recommended-for-you'
  * engine. Currently supported values: 'view-home-page', 'generic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#context_event_type GoogleDiscoveryEngineRecommendationEngine#context_event_type}
  */
  readonly contextEventType?: string;
}

export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_event_type: cdktf.stringToTerraform(struct!.contextEventType),
  }
}


export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToHclTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_event_type: {
      value: cdktf.stringToHclTerraform(struct!.contextEventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextEventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextEventType = this._contextEventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextEventType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextEventType = value.contextEventType;
    }
  }

  // context_event_type - computed: false, optional: true, required: false
  private _contextEventType?: string; 
  public get contextEventType() {
    return this.getStringAttribute('context_event_type');
  }
  public set contextEventType(value: string) {
    this._contextEventType = value;
  }
  public resetContextEventType() {
    this._contextEventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextEventTypeInput() {
    return this._contextEventType;
  }
}
export interface GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig {
  /**
  * most_popular_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#most_popular_config GoogleDiscoveryEngineRecommendationEngine#most_popular_config}
  */
  readonly mostPopularConfig?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig;
  /**
  * recommended_for_you_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#recommended_for_you_config GoogleDiscoveryEngineRecommendationEngine#recommended_for_you_config}
  */
  readonly recommendedForYouConfig?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig;
}

export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    most_popular_config: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToTerraform(struct!.mostPopularConfig),
    recommended_for_you_config: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToTerraform(struct!.recommendedForYouConfig),
  }
}


export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToHclTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    most_popular_config: {
      value: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToHclTerraform(struct!.mostPopularConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigList",
    },
    recommended_for_you_config: {
      value: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToHclTerraform(struct!.recommendedForYouConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mostPopularConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostPopularConfig = this._mostPopularConfig?.internalValue;
    }
    if (this._recommendedForYouConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendedForYouConfig = this._recommendedForYouConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mostPopularConfig.internalValue = undefined;
      this._recommendedForYouConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mostPopularConfig.internalValue = value.mostPopularConfig;
      this._recommendedForYouConfig.internalValue = value.recommendedForYouConfig;
    }
  }

  // most_popular_config - computed: false, optional: true, required: false
  private _mostPopularConfig = new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference(this, "most_popular_config");
  public get mostPopularConfig() {
    return this._mostPopularConfig;
  }
  public putMostPopularConfig(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig) {
    this._mostPopularConfig.internalValue = value;
  }
  public resetMostPopularConfig() {
    this._mostPopularConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostPopularConfigInput() {
    return this._mostPopularConfig.internalValue;
  }

  // recommended_for_you_config - computed: false, optional: true, required: false
  private _recommendedForYouConfig = new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference(this, "recommended_for_you_config");
  public get recommendedForYouConfig() {
    return this._recommendedForYouConfig;
  }
  public putRecommendedForYouConfig(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig) {
    this._recommendedForYouConfig.internalValue = value;
  }
  public resetRecommendedForYouConfig() {
    this._recommendedForYouConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedForYouConfigInput() {
    return this._recommendedForYouConfig.internalValue;
  }
}
export interface GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig {
  /**
  * The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#target_field GoogleDiscoveryEngineRecommendationEngine#target_field}
  */
  readonly targetField?: string;
  /**
  * The threshold to be applied to the target (e.g., 0.5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#target_field_value_float GoogleDiscoveryEngineRecommendationEngine#target_field_value_float}
  */
  readonly targetFieldValueFloat?: number;
}

export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_field: cdktf.stringToTerraform(struct!.targetField),
    target_field_value_float: cdktf.numberToTerraform(struct!.targetFieldValueFloat),
  }
}


export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToHclTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field_value_float: {
      value: cdktf.numberToHclTerraform(struct!.targetFieldValueFloat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    if (this._targetFieldValueFloat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFieldValueFloat = this._targetFieldValueFloat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetField = undefined;
      this._targetFieldValueFloat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetField = value.targetField;
      this._targetFieldValueFloat = value.targetFieldValueFloat;
    }
  }

  // target_field - computed: false, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }

  // target_field_value_float - computed: false, optional: true, required: false
  private _targetFieldValueFloat?: number; 
  public get targetFieldValueFloat() {
    return this.getNumberAttribute('target_field_value_float');
  }
  public set targetFieldValueFloat(value: number) {
    this._targetFieldValueFloat = value;
  }
  public resetTargetFieldValueFloat() {
    this._targetFieldValueFloat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldValueFloatInput() {
    return this._targetFieldValueFloat;
  }
}
export interface GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig {
  /**
  * The optimization objective. e.g., 'cvr'.
  * This field together with MediaRecommendationEngineConfig.type describes
  * engine metadata to use to control engine training and serving.
  * Currently supported values: 'ctr', 'cvr'.
  * If not specified, we choose default based on engine type. Default depends on type of recommendation:
  * 'recommended-for-you' => 'ctr'
  * 'others-you-may-like' => 'ctr'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective GoogleDiscoveryEngineRecommendationEngine#optimization_objective}
  */
  readonly optimizationObjective?: string;
  /**
  * The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED').
  * Since part of the cost of running the service
  * is frequency of training - this can be used to determine when to train
  * engine in order to control cost. If not specified: the default value for
  * 'CreateEngine' method is 'TRAINING'. The default value for
  * 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#training_state GoogleDiscoveryEngineRecommendationEngine#training_state}
  */
  readonly trainingState?: string;
  /**
  * The type of engine. e.g., 'recommended-for-you'.
  * This field together with MediaRecommendationEngineConfig.optimizationObjective describes
  * engine metadata to use to control engine training and serving.
  * Currently supported values: 'recommended-for-you', 'others-you-may-like',
  * 'more-like-this', 'most-popular-items'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#type GoogleDiscoveryEngineRecommendationEngine#type}
  */
  readonly type?: string;
  /**
  * engine_features_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#engine_features_config GoogleDiscoveryEngineRecommendationEngine#engine_features_config}
  */
  readonly engineFeaturesConfig?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig;
  /**
  * optimization_objective_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#optimization_objective_config GoogleDiscoveryEngineRecommendationEngine#optimization_objective_config}
  */
  readonly optimizationObjectiveConfig?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;
}

export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigToTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimization_objective: cdktf.stringToTerraform(struct!.optimizationObjective),
    training_state: cdktf.stringToTerraform(struct!.trainingState),
    type: cdktf.stringToTerraform(struct!.type),
    engine_features_config: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToTerraform(struct!.engineFeaturesConfig),
    optimization_objective_config: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToTerraform(struct!.optimizationObjectiveConfig),
  }
}


export function googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigToHclTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference | GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optimization_objective: {
      value: cdktf.stringToHclTerraform(struct!.optimizationObjective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_state: {
      value: cdktf.stringToHclTerraform(struct!.trainingState),
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
    engine_features_config: {
      value: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToHclTerraform(struct!.engineFeaturesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigList",
    },
    optimization_objective_config: {
      value: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToHclTerraform(struct!.optimizationObjectiveConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizationObjective !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationObjective = this._optimizationObjective;
    }
    if (this._trainingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingState = this._trainingState;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._engineFeaturesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineFeaturesConfig = this._engineFeaturesConfig?.internalValue;
    }
    if (this._optimizationObjectiveConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationObjectiveConfig = this._optimizationObjectiveConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizationObjective = undefined;
      this._trainingState = undefined;
      this._type = undefined;
      this._engineFeaturesConfig.internalValue = undefined;
      this._optimizationObjectiveConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizationObjective = value.optimizationObjective;
      this._trainingState = value.trainingState;
      this._type = value.type;
      this._engineFeaturesConfig.internalValue = value.engineFeaturesConfig;
      this._optimizationObjectiveConfig.internalValue = value.optimizationObjectiveConfig;
    }
  }

  // optimization_objective - computed: false, optional: true, required: false
  private _optimizationObjective?: string; 
  public get optimizationObjective() {
    return this.getStringAttribute('optimization_objective');
  }
  public set optimizationObjective(value: string) {
    this._optimizationObjective = value;
  }
  public resetOptimizationObjective() {
    this._optimizationObjective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationObjectiveInput() {
    return this._optimizationObjective;
  }

  // training_state - computed: false, optional: true, required: false
  private _trainingState?: string; 
  public get trainingState() {
    return this.getStringAttribute('training_state');
  }
  public set trainingState(value: string) {
    this._trainingState = value;
  }
  public resetTrainingState() {
    this._trainingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingStateInput() {
    return this._trainingState;
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

  // engine_features_config - computed: false, optional: true, required: false
  private _engineFeaturesConfig = new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference(this, "engine_features_config");
  public get engineFeaturesConfig() {
    return this._engineFeaturesConfig;
  }
  public putEngineFeaturesConfig(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig) {
    this._engineFeaturesConfig.internalValue = value;
  }
  public resetEngineFeaturesConfig() {
    this._engineFeaturesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineFeaturesConfigInput() {
    return this._engineFeaturesConfig.internalValue;
  }

  // optimization_objective_config - computed: false, optional: true, required: false
  private _optimizationObjectiveConfig = new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference(this, "optimization_objective_config");
  public get optimizationObjectiveConfig() {
    return this._optimizationObjectiveConfig;
  }
  public putOptimizationObjectiveConfig(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig) {
    this._optimizationObjectiveConfig.internalValue = value;
  }
  public resetOptimizationObjectiveConfig() {
    this._optimizationObjectiveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationObjectiveConfigInput() {
    return this._optimizationObjectiveConfig.internalValue;
  }
}
export interface GoogleDiscoveryEngineRecommendationEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#create GoogleDiscoveryEngineRecommendationEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#delete GoogleDiscoveryEngineRecommendationEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#update GoogleDiscoveryEngineRecommendationEngine#update}
  */
  readonly update?: string;
}

export function googleDiscoveryEngineRecommendationEngineTimeoutsToTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable): any {
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


export function googleDiscoveryEngineRecommendationEngineTimeoutsToHclTerraform(struct?: GoogleDiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable): any {
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

export class GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine}
*/
export class GoogleDiscoveryEngineRecommendationEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_recommendation_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDiscoveryEngineRecommendationEngine to import
  * @param importFromId The id of the existing GoogleDiscoveryEngineRecommendationEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDiscoveryEngineRecommendationEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_recommendation_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDiscoveryEngineRecommendationEngineConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDiscoveryEngineRecommendationEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_recommendation_engine',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.49.1',
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
    this._dataStoreIds = config.dataStoreIds;
    this._displayName = config.displayName;
    this._engineId = config.engineId;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._location = config.location;
    this._project = config.project;
    this._commonConfig.internalValue = config.commonConfig;
    this._mediaRecommendationEngineConfig.internalValue = config.mediaRecommendationEngineConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_ids - computed: false, optional: false, required: true
  private _dataStoreIds?: string[]; 
  public get dataStoreIds() {
    return this.getListAttribute('data_store_ids');
  }
  public set dataStoreIds(value: string[]) {
    this._dataStoreIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdsInput() {
    return this._dataStoreIds;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
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

  // industry_vertical - computed: false, optional: true, required: false
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
  }
  public resetIndustryVertical() {
    this._industryVertical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryVerticalInput() {
    return this._industryVertical;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // common_config - computed: false, optional: true, required: false
  private _commonConfig = new GoogleDiscoveryEngineRecommendationEngineCommonConfigOutputReference(this, "common_config");
  public get commonConfig() {
    return this._commonConfig;
  }
  public putCommonConfig(value: GoogleDiscoveryEngineRecommendationEngineCommonConfig) {
    this._commonConfig.internalValue = value;
  }
  public resetCommonConfig() {
    this._commonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonConfigInput() {
    return this._commonConfig.internalValue;
  }

  // media_recommendation_engine_config - computed: false, optional: true, required: false
  private _mediaRecommendationEngineConfig = new GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference(this, "media_recommendation_engine_config");
  public get mediaRecommendationEngineConfig() {
    return this._mediaRecommendationEngineConfig;
  }
  public putMediaRecommendationEngineConfig(value: GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig) {
    this._mediaRecommendationEngineConfig.internalValue = value;
  }
  public resetMediaRecommendationEngineConfig() {
    this._mediaRecommendationEngineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaRecommendationEngineConfigInput() {
    return this._mediaRecommendationEngineConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDiscoveryEngineRecommendationEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDiscoveryEngineRecommendationEngineTimeouts) {
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
      data_store_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataStoreIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      industry_vertical: cdktf.stringToTerraform(this._industryVertical),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      common_config: googleDiscoveryEngineRecommendationEngineCommonConfigToTerraform(this._commonConfig.internalValue),
      media_recommendation_engine_config: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigToTerraform(this._mediaRecommendationEngineConfig.internalValue),
      timeouts: googleDiscoveryEngineRecommendationEngineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_store_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataStoreIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
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
      industry_vertical: {
        value: cdktf.stringToHclTerraform(this._industryVertical),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_config: {
        value: googleDiscoveryEngineRecommendationEngineCommonConfigToHclTerraform(this._commonConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineRecommendationEngineCommonConfigList",
      },
      media_recommendation_engine_config: {
        value: googleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigToHclTerraform(this._mediaRecommendationEngineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigList",
      },
      timeouts: {
        value: googleDiscoveryEngineRecommendationEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDiscoveryEngineRecommendationEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
