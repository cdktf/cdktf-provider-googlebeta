/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleMonitoringAlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to combine the results of multiple conditions to
  * determine if an incident should be opened. Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#combiner GoogleMonitoringAlertPolicy#combiner}
  */
  readonly combiner: string;
  /**
  * A short name or phrase used to identify the policy in
  * dashboards, notifications, and incidents. To avoid confusion, don't use
  * the same display name for multiple policies in the same project. The
  * name is limited to 512 Unicode characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Whether or not the policy is enabled. The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#enabled GoogleMonitoringAlertPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifies the notification channels to which notifications should be
  * sent when incidents are opened or closed or when new violations occur
  * on an already opened incident. Each element of this array corresponds
  * to the name field in each of the NotificationChannel objects that are
  * returned from the notificationChannels.list method. The syntax of the
  * entries in this field is
  * 'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#notification_channels GoogleMonitoringAlertPolicy#notification_channels}
  */
  readonly notificationChannels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}
  */
  readonly project?: string;
  /**
  * The severity of an alert policy indicates how important incidents generated
  * by that policy are. The severity level will be displayed on the Incident
  * detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#severity GoogleMonitoringAlertPolicy#severity}
  */
  readonly severity?: string;
  /**
  * This field is intended to be used for organizing and identifying the AlertPolicy
  * objects.The field can contain up to 64 entries. Each key and value is limited
  * to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
  * can contain only lowercase letters, numerals, underscores, and dashes. Keys
  * must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#user_labels GoogleMonitoringAlertPolicy#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * alert_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#alert_strategy GoogleMonitoringAlertPolicy#alert_strategy}
  */
  readonly alertStrategy?: GoogleMonitoringAlertPolicyAlertStrategy;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#conditions GoogleMonitoringAlertPolicy#conditions}
  */
  readonly conditions: GoogleMonitoringAlertPolicyConditions[] | cdktf.IResolvable;
  /**
  * documentation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#documentation GoogleMonitoringAlertPolicy#documentation}
  */
  readonly documentation?: GoogleMonitoringAlertPolicyDocumentation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#timeouts GoogleMonitoringAlertPolicy#timeouts}
  */
  readonly timeouts?: GoogleMonitoringAlertPolicyTimeouts;
}
export interface GoogleMonitoringAlertPolicyCreationRecord {
}

export function googleMonitoringAlertPolicyCreationRecordToTerraform(struct?: GoogleMonitoringAlertPolicyCreationRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMonitoringAlertPolicyCreationRecordToHclTerraform(struct?: GoogleMonitoringAlertPolicyCreationRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMonitoringAlertPolicyCreationRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMonitoringAlertPolicyCreationRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyCreationRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mutate_time - computed: true, optional: false, required: false
  public get mutateTime() {
    return this.getStringAttribute('mutate_time');
  }

  // mutated_by - computed: true, optional: false, required: false
  public get mutatedBy() {
    return this.getStringAttribute('mutated_by');
  }
}

export class GoogleMonitoringAlertPolicyCreationRecordList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMonitoringAlertPolicyCreationRecordOutputReference {
    return new GoogleMonitoringAlertPolicyCreationRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy {
  /**
  * The notification channels that these settings apply to. Each of these
  * correspond to the name field in one of the NotificationChannel objects
  * referenced in the notification_channels field of this AlertPolicy. The format is
  * 'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#notification_channel_names GoogleMonitoringAlertPolicy#notification_channel_names}
  */
  readonly notificationChannelNames?: string[];
  /**
  * The frequency at which to send reminder notifications for open incidents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#renotify_interval GoogleMonitoringAlertPolicy#renotify_interval}
  */
  readonly renotifyInterval?: string;
}

export function googleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyToTerraform(struct?: GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_channel_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationChannelNames),
    renotify_interval: cdktf.stringToTerraform(struct!.renotifyInterval),
  }
}


export function googleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyToHclTerraform(struct?: GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_channel_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationChannelNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    renotify_interval: {
      value: cdktf.stringToHclTerraform(struct!.renotifyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationChannelNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationChannelNames = this._notificationChannelNames;
    }
    if (this._renotifyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyInterval = this._renotifyInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationChannelNames = undefined;
      this._renotifyInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationChannelNames = value.notificationChannelNames;
      this._renotifyInterval = value.renotifyInterval;
    }
  }

  // notification_channel_names - computed: false, optional: true, required: false
  private _notificationChannelNames?: string[]; 
  public get notificationChannelNames() {
    return this.getListAttribute('notification_channel_names');
  }
  public set notificationChannelNames(value: string[]) {
    this._notificationChannelNames = value;
  }
  public resetNotificationChannelNames() {
    this._notificationChannelNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelNamesInput() {
    return this._notificationChannelNames;
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: string; 
  public get renotifyInterval() {
    return this.getStringAttribute('renotify_interval');
  }
  public set renotifyInterval(value: string) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval;
  }
}

export class GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList extends cdktf.ComplexList {
  public internalValue? : GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[] | cdktf.IResolvable

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
  public get(index: number): GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference {
    return new GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit {
  /**
  * Not more than one notification per period.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#period GoogleMonitoringAlertPolicy#period}
  */
  readonly period?: string;
}

export function googleMonitoringAlertPolicyAlertStrategyNotificationRateLimitToTerraform(struct?: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference | GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function googleMonitoringAlertPolicyAlertStrategyNotificationRateLimitToHclTerraform(struct?: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference | GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
    }
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}
export interface GoogleMonitoringAlertPolicyAlertStrategy {
  /**
  * If an alert policy that was active has no data for this long, any open incidents will close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#auto_close GoogleMonitoringAlertPolicy#auto_close}
  */
  readonly autoClose?: string;
  /**
  * notification_channel_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#notification_channel_strategy GoogleMonitoringAlertPolicy#notification_channel_strategy}
  */
  readonly notificationChannelStrategy?: GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[] | cdktf.IResolvable;
  /**
  * notification_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#notification_rate_limit GoogleMonitoringAlertPolicy#notification_rate_limit}
  */
  readonly notificationRateLimit?: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit;
}

export function googleMonitoringAlertPolicyAlertStrategyToTerraform(struct?: GoogleMonitoringAlertPolicyAlertStrategyOutputReference | GoogleMonitoringAlertPolicyAlertStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_close: cdktf.stringToTerraform(struct!.autoClose),
    notification_channel_strategy: cdktf.listMapper(googleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyToTerraform, true)(struct!.notificationChannelStrategy),
    notification_rate_limit: googleMonitoringAlertPolicyAlertStrategyNotificationRateLimitToTerraform(struct!.notificationRateLimit),
  }
}


export function googleMonitoringAlertPolicyAlertStrategyToHclTerraform(struct?: GoogleMonitoringAlertPolicyAlertStrategyOutputReference | GoogleMonitoringAlertPolicyAlertStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_close: {
      value: cdktf.stringToHclTerraform(struct!.autoClose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_channel_strategy: {
      value: cdktf.listMapperHcl(googleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyToHclTerraform, true)(struct!.notificationChannelStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList",
    },
    notification_rate_limit: {
      value: googleMonitoringAlertPolicyAlertStrategyNotificationRateLimitToHclTerraform(struct!.notificationRateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyAlertStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyAlertStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoClose = this._autoClose;
    }
    if (this._notificationChannelStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationChannelStrategy = this._notificationChannelStrategy?.internalValue;
    }
    if (this._notificationRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationRateLimit = this._notificationRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyAlertStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoClose = undefined;
      this._notificationChannelStrategy.internalValue = undefined;
      this._notificationRateLimit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoClose = value.autoClose;
      this._notificationChannelStrategy.internalValue = value.notificationChannelStrategy;
      this._notificationRateLimit.internalValue = value.notificationRateLimit;
    }
  }

  // auto_close - computed: false, optional: true, required: false
  private _autoClose?: string; 
  public get autoClose() {
    return this.getStringAttribute('auto_close');
  }
  public set autoClose(value: string) {
    this._autoClose = value;
  }
  public resetAutoClose() {
    this._autoClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloseInput() {
    return this._autoClose;
  }

  // notification_channel_strategy - computed: false, optional: true, required: false
  private _notificationChannelStrategy = new GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList(this, "notification_channel_strategy", false);
  public get notificationChannelStrategy() {
    return this._notificationChannelStrategy;
  }
  public putNotificationChannelStrategy(value: GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy[] | cdktf.IResolvable) {
    this._notificationChannelStrategy.internalValue = value;
  }
  public resetNotificationChannelStrategy() {
    this._notificationChannelStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelStrategyInput() {
    return this._notificationChannelStrategy.internalValue;
  }

  // notification_rate_limit - computed: false, optional: true, required: false
  private _notificationRateLimit = new GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference(this, "notification_rate_limit");
  public get notificationRateLimit() {
    return this._notificationRateLimit;
  }
  public putNotificationRateLimit(value: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit) {
    this._notificationRateLimit.internalValue = value;
  }
  public resetNotificationRateLimit() {
    this._notificationRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationRateLimitInput() {
    return this._notificationRateLimit.internalValue;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations {
  /**
  * The alignment period for per-time
  * series alignment. If present,
  * alignmentPeriod must be at least
  * 60 seconds. After per-time series
  * alignment, each time series will
  * contain data points only on the
  * period boundaries. If
  * perSeriesAligner is not specified
  * or equals ALIGN_NONE, then this
  * field is ignored. If
  * perSeriesAligner is specified and
  * does not equal ALIGN_NONE, then
  * this field must be defined;
  * otherwise an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
  * time series. Not all reducer
  * functions may be applied to all
  * time series, depending on the
  * metric type and the value type of
  * the original time series.
  * Reduction may change the metric
  * type of value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
  * crossSeriesReducer is specified.
  * The groupByFields determine how
  * the time series are partitioned
  * into subsets prior to applying the
  * aggregation function. Each subset
  * contains time series that have the
  * same value for each of the
  * grouping fields. Each individual
  * time series is a member of exactly
  * one subset. The crossSeriesReducer
  * is applied to each subset of time
  * series. It is not possible to
  * reduce across different resource
  * types, so this field implicitly
  * contains resource.type. Fields not
  * specified in groupByFields are
  * aggregated away. If groupByFields
  * is not specified and all the time
  * series have the same resource
  * type, then the time series are
  * aggregated into a single output
  * time series. If crossSeriesReducer
  * is not defined, this field is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
  * individual time series. Not all
  * alignment functions may be applied
  * to all time series, depending on
  * the metric type and value type of
  * the original time series.
  * Alignment may change the metric
  * type or the value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function googleMonitoringAlertPolicyConditionsConditionAbsentAggregationsToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionAbsentAggregationsToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment_period: {
      value: cdktf.stringToHclTerraform(struct!.alignmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_series_reducer: {
      value: cdktf.stringToHclTerraform(struct!.crossSeriesReducer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_series_aligner: {
      value: cdktf.stringToHclTerraform(struct!.perSeriesAligner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignmentPeriod = this._alignmentPeriod;
    }
    if (this._crossSeriesReducer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSeriesReducer = this._crossSeriesReducer;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._perSeriesAligner !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSeriesAligner = this._perSeriesAligner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignmentPeriod = undefined;
      this._crossSeriesReducer = undefined;
      this._groupByFields = undefined;
      this._perSeriesAligner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignmentPeriod = value.alignmentPeriod;
      this._crossSeriesReducer = value.crossSeriesReducer;
      this._groupByFields = value.groupByFields;
      this._perSeriesAligner = value.perSeriesAligner;
    }
  }

  // alignment_period - computed: false, optional: true, required: false
  private _alignmentPeriod?: string; 
  public get alignmentPeriod() {
    return this.getStringAttribute('alignment_period');
  }
  public set alignmentPeriod(value: string) {
    this._alignmentPeriod = value;
  }
  public resetAlignmentPeriod() {
    this._alignmentPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentPeriodInput() {
    return this._alignmentPeriod;
  }

  // cross_series_reducer - computed: false, optional: true, required: false
  private _crossSeriesReducer?: string; 
  public get crossSeriesReducer() {
    return this.getStringAttribute('cross_series_reducer');
  }
  public set crossSeriesReducer(value: string) {
    this._crossSeriesReducer = value;
  }
  public resetCrossSeriesReducer() {
    this._crossSeriesReducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSeriesReducerInput() {
    return this._crossSeriesReducer;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // per_series_aligner - computed: false, optional: true, required: false
  private _perSeriesAligner?: string; 
  public get perSeriesAligner() {
    return this.getStringAttribute('per_series_aligner');
  }
  public set perSeriesAligner(value: string) {
    this._perSeriesAligner = value;
  }
  public resetPerSeriesAligner() {
    this._perSeriesAligner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSeriesAlignerInput() {
    return this._perSeriesAligner;
  }
}

export class GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList extends cdktf.ComplexList {
  public internalValue? : GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations[] | cdktf.IResolvable

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
  public get(index: number): GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference {
    return new GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger {
  /**
  * The absolute number of time series
  * that must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
  * must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function googleMonitoringAlertPolicyConditionsConditionAbsentTriggerToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference | GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionAbsentTriggerToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference | GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger): any {
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
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._percent = value.percent;
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

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionAbsent {
  /**
  * The amount of time that a time series must
  * fail to report new data to be considered
  * failing. Currently, only values that are a
  * multiple of a minute--e.g. 60s, 120s, or 300s
  * --are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A filter that identifies which time series
  * should be compared with the threshold.The
  * filter is similar to the one that is
  * specified in the
  * MetricService.ListTimeSeries request (that
  * call is useful to verify the time series
  * that will be retrieved / processed) and must
  * specify the metric type and optionally may
  * contain restrictions on resource type,
  * resource labels, and metric labels. This
  * field may not exceed 2048 Unicode characters
  * in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}
  */
  readonly filter?: string;
  /**
  * aggregations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}
  */
  readonly aggregations?: GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}
  */
  readonly trigger?: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger;
}

export function googleMonitoringAlertPolicyConditionsConditionAbsentToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference | GoogleMonitoringAlertPolicyConditionsConditionAbsent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    filter: cdktf.stringToTerraform(struct!.filter),
    aggregations: cdktf.listMapper(googleMonitoringAlertPolicyConditionsConditionAbsentAggregationsToTerraform, true)(struct!.aggregations),
    trigger: googleMonitoringAlertPolicyConditionsConditionAbsentTriggerToTerraform(struct!.trigger),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionAbsentToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference | GoogleMonitoringAlertPolicyConditionsConditionAbsent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregations: {
      value: cdktf.listMapperHcl(googleMonitoringAlertPolicyConditionsConditionAbsentAggregationsToHclTerraform, true)(struct!.aggregations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList",
    },
    trigger: {
      value: googleMonitoringAlertPolicyConditionsConditionAbsentTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionAbsent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._aggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionAbsent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._filter = undefined;
      this._aggregations.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._filter = value.filter;
      this._aggregations.internalValue = value.aggregations;
      this._trigger.internalValue = value.trigger;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations = new GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations[] | cdktf.IResolvable) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionMatchedLog {
  /**
  * A logs-based filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}
  */
  readonly filter: string;
  /**
  * A map from a label key to an extractor expression, which is used to
  * extract the value for this label key. Each entry in this map is
  * a specification for how data should be extracted from log entries that
  * match filter. Each combination of extracted values is treated as
  * a separate rule for the purposes of triggering notifications.
  * Label keys and corresponding values can be used in notifications
  * generated by this condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#label_extractors GoogleMonitoringAlertPolicy#label_extractors}
  */
  readonly labelExtractors?: { [key: string]: string };
}

export function googleMonitoringAlertPolicyConditionsConditionMatchedLogToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference | GoogleMonitoringAlertPolicyConditionsConditionMatchedLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    label_extractors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelExtractors),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionMatchedLogToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference | GoogleMonitoringAlertPolicyConditionsConditionMatchedLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_extractors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelExtractors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionMatchedLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._labelExtractors !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelExtractors = this._labelExtractors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._labelExtractors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._labelExtractors = value.labelExtractors;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // label_extractors - computed: false, optional: true, required: false
  private _labelExtractors?: { [key: string]: string }; 
  public get labelExtractors() {
    return this.getStringMapAttribute('label_extractors');
  }
  public set labelExtractors(value: { [key: string]: string }) {
    this._labelExtractors = value;
  }
  public resetLabelExtractors() {
    this._labelExtractors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelExtractorsInput() {
    return this._labelExtractors;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger {
  /**
  * The absolute number of time series
  * that must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
  * must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference | GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference | GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger): any {
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
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._percent = value.percent;
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

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage {
  /**
  * The amount of time that a time series must
  * violate the threshold to be considered
  * failing. Currently, only values that are a
  * multiple of a minute--e.g., 0, 60, 120, or
  * 300 seconds--are supported. If an invalid
  * value is given, an error will be returned.
  * When choosing a duration, it is useful to
  * keep in mind the frequency of the underlying
  * time series data (which may also be affected
  * by any alignments specified in the
  * aggregations field); a good duration is long
  * enough so that a single outlier does not
  * generate spurious alerts, but short enough
  * that unhealthy states are detected and
  * alerted on quickly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A condition control that determines how
  * metric-threshold conditions are evaluated when
  * data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}
  */
  readonly evaluationMissingData?: string;
  /**
  * Monitoring Query Language query that outputs a boolean stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}
  */
  readonly query: string;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}
  */
  readonly trigger?: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger;
}

export function googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference | GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    evaluation_missing_data: cdktf.stringToTerraform(struct!.evaluationMissingData),
    query: cdktf.stringToTerraform(struct!.query),
    trigger: googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToTerraform(struct!.trigger),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference | GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_missing_data: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger: {
      value: googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._evaluationMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMissingData = this._evaluationMissingData;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._evaluationMissingData = undefined;
      this._query = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._evaluationMissingData = value.evaluationMissingData;
      this._query = value.query;
      this._trigger.internalValue = value.trigger;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // evaluation_missing_data - computed: false, optional: true, required: false
  private _evaluationMissingData?: string; 
  public get evaluationMissingData() {
    return this.getStringAttribute('evaluation_missing_data');
  }
  public set evaluationMissingData(value: string) {
    this._evaluationMissingData = value;
  }
  public resetEvaluationMissingData() {
    this._evaluationMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMissingDataInput() {
    return this._evaluationMissingData;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage {
  /**
  * The alerting rule name of this alert in the corresponding Prometheus
  * configuration file.
  * 
  * Some external tools may require this field to be populated correctly
  * in order to refer to the original Prometheus configuration file.
  * The rule group name and the alert name are necessary to update the
  * relevant AlertPolicies in case the definition of the rule group changes
  * in the future.
  * 
  * This field is optional. If this field is not empty, then it must be a
  * valid Prometheus label name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#alert_rule GoogleMonitoringAlertPolicy#alert_rule}
  */
  readonly alertRule?: string;
  /**
  * Alerts are considered firing once their PromQL expression evaluated
  * to be "true" for this long. Alerts whose PromQL expression was not
  * evaluated to be "true" for long enough are considered pending. The
  * default value is zero. Must be zero or positive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}
  */
  readonly duration?: string;
  /**
  * How often this rule should be evaluated. Must be a positive multiple
  * of 30 seconds or missing. The default value is 30 seconds. If this
  * PrometheusQueryLanguageCondition was generated from a Prometheus
  * alerting rule, then this value should be taken from the enclosing
  * rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#evaluation_interval GoogleMonitoringAlertPolicy#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * Labels to add to or overwrite in the PromQL query result. Label names
  * must be valid.
  * 
  * Label values can be templatized by using variables. The only available
  * variable names are the names of the labels in the PromQL result, including
  * "__name__" and "value". "labels" may be empty. This field is intended to be
  * used for organizing and identifying the AlertPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#labels GoogleMonitoringAlertPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The PromQL expression to evaluate. Every evaluation cycle this
  * expression is evaluated at the current time, and all resultant time
  * series become pending/firing alerts. This field must not be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}
  */
  readonly query: string;
  /**
  * The rule group name of this alert in the corresponding Prometheus
  * configuration file.
  * 
  * Some external tools may require this field to be populated correctly
  * in order to refer to the original Prometheus configuration file.
  * The rule group name and the alert name are necessary to update the
  * relevant AlertPolicies in case the definition of the rule group changes
  * in the future. This field is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#rule_group GoogleMonitoringAlertPolicy#rule_group}
  */
  readonly ruleGroup?: string;
}

export function googleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference | GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_rule: cdktf.stringToTerraform(struct!.alertRule),
    duration: cdktf.stringToTerraform(struct!.duration),
    evaluation_interval: cdktf.stringToTerraform(struct!.evaluationInterval),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    query: cdktf.stringToTerraform(struct!.query),
    rule_group: cdktf.stringToTerraform(struct!.ruleGroup),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference | GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_rule: {
      value: cdktf.stringToHclTerraform(struct!.alertRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_interval: {
      value: cdktf.stringToHclTerraform(struct!.evaluationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_group: {
      value: cdktf.stringToHclTerraform(struct!.ruleGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRule = this._alertRule;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._evaluationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationInterval = this._evaluationInterval;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._ruleGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroup = this._ruleGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertRule = undefined;
      this._duration = undefined;
      this._evaluationInterval = undefined;
      this._labels = undefined;
      this._query = undefined;
      this._ruleGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertRule = value.alertRule;
      this._duration = value.duration;
      this._evaluationInterval = value.evaluationInterval;
      this._labels = value.labels;
      this._query = value.query;
      this._ruleGroup = value.ruleGroup;
    }
  }

  // alert_rule - computed: false, optional: true, required: false
  private _alertRule?: string; 
  public get alertRule() {
    return this.getStringAttribute('alert_rule');
  }
  public set alertRule(value: string) {
    this._alertRule = value;
  }
  public resetAlertRule() {
    this._alertRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // evaluation_interval - computed: false, optional: true, required: false
  private _evaluationInterval?: string; 
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: string) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rule_group - computed: false, optional: true, required: false
  private _ruleGroup?: string; 
  public get ruleGroup() {
    return this.getStringAttribute('rule_group');
  }
  public set ruleGroup(value: string) {
    this._ruleGroup = value;
  }
  public resetRuleGroup() {
    this._ruleGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupInput() {
    return this._ruleGroup;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations {
  /**
  * The alignment period for per-time
  * series alignment. If present,
  * alignmentPeriod must be at least
  * 60 seconds. After per-time series
  * alignment, each time series will
  * contain data points only on the
  * period boundaries. If
  * perSeriesAligner is not specified
  * or equals ALIGN_NONE, then this
  * field is ignored. If
  * perSeriesAligner is specified and
  * does not equal ALIGN_NONE, then
  * this field must be defined;
  * otherwise an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
  * time series. Not all reducer
  * functions may be applied to all
  * time series, depending on the
  * metric type and the value type of
  * the original time series.
  * Reduction may change the metric
  * type of value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
  * crossSeriesReducer is specified.
  * The groupByFields determine how
  * the time series are partitioned
  * into subsets prior to applying the
  * aggregation function. Each subset
  * contains time series that have the
  * same value for each of the
  * grouping fields. Each individual
  * time series is a member of exactly
  * one subset. The crossSeriesReducer
  * is applied to each subset of time
  * series. It is not possible to
  * reduce across different resource
  * types, so this field implicitly
  * contains resource.type. Fields not
  * specified in groupByFields are
  * aggregated away. If groupByFields
  * is not specified and all the time
  * series have the same resource
  * type, then the time series are
  * aggregated into a single output
  * time series. If crossSeriesReducer
  * is not defined, this field is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
  * individual time series. Not all
  * alignment functions may be applied
  * to all time series, depending on
  * the metric type and value type of
  * the original time series.
  * Alignment may change the metric
  * type or the value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function googleMonitoringAlertPolicyConditionsConditionThresholdAggregationsToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionThresholdAggregationsToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment_period: {
      value: cdktf.stringToHclTerraform(struct!.alignmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_series_reducer: {
      value: cdktf.stringToHclTerraform(struct!.crossSeriesReducer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_series_aligner: {
      value: cdktf.stringToHclTerraform(struct!.perSeriesAligner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignmentPeriod = this._alignmentPeriod;
    }
    if (this._crossSeriesReducer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSeriesReducer = this._crossSeriesReducer;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._perSeriesAligner !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSeriesAligner = this._perSeriesAligner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignmentPeriod = undefined;
      this._crossSeriesReducer = undefined;
      this._groupByFields = undefined;
      this._perSeriesAligner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignmentPeriod = value.alignmentPeriod;
      this._crossSeriesReducer = value.crossSeriesReducer;
      this._groupByFields = value.groupByFields;
      this._perSeriesAligner = value.perSeriesAligner;
    }
  }

  // alignment_period - computed: false, optional: true, required: false
  private _alignmentPeriod?: string; 
  public get alignmentPeriod() {
    return this.getStringAttribute('alignment_period');
  }
  public set alignmentPeriod(value: string) {
    this._alignmentPeriod = value;
  }
  public resetAlignmentPeriod() {
    this._alignmentPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentPeriodInput() {
    return this._alignmentPeriod;
  }

  // cross_series_reducer - computed: false, optional: true, required: false
  private _crossSeriesReducer?: string; 
  public get crossSeriesReducer() {
    return this.getStringAttribute('cross_series_reducer');
  }
  public set crossSeriesReducer(value: string) {
    this._crossSeriesReducer = value;
  }
  public resetCrossSeriesReducer() {
    this._crossSeriesReducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSeriesReducerInput() {
    return this._crossSeriesReducer;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // per_series_aligner - computed: false, optional: true, required: false
  private _perSeriesAligner?: string; 
  public get perSeriesAligner() {
    return this.getStringAttribute('per_series_aligner');
  }
  public set perSeriesAligner(value: string) {
    this._perSeriesAligner = value;
  }
  public resetPerSeriesAligner() {
    this._perSeriesAligner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSeriesAlignerInput() {
    return this._perSeriesAligner;
  }
}

export class GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList extends cdktf.ComplexList {
  public internalValue? : GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations[] | cdktf.IResolvable

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
  public get(index: number): GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference {
    return new GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations {
  /**
  * The alignment period for per-time
  * series alignment. If present,
  * alignmentPeriod must be at least
  * 60 seconds. After per-time series
  * alignment, each time series will
  * contain data points only on the
  * period boundaries. If
  * perSeriesAligner is not specified
  * or equals ALIGN_NONE, then this
  * field is ignored. If
  * perSeriesAligner is specified and
  * does not equal ALIGN_NONE, then
  * this field must be defined;
  * otherwise an error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}
  */
  readonly alignmentPeriod?: string;
  /**
  * The approach to be used to combine
  * time series. Not all reducer
  * functions may be applied to all
  * time series, depending on the
  * metric type and the value type of
  * the original time series.
  * Reduction may change the metric
  * type of value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}
  */
  readonly crossSeriesReducer?: string;
  /**
  * The set of fields to preserve when
  * crossSeriesReducer is specified.
  * The groupByFields determine how
  * the time series are partitioned
  * into subsets prior to applying the
  * aggregation function. Each subset
  * contains time series that have the
  * same value for each of the
  * grouping fields. Each individual
  * time series is a member of exactly
  * one subset. The crossSeriesReducer
  * is applied to each subset of time
  * series. It is not possible to
  * reduce across different resource
  * types, so this field implicitly
  * contains resource.type. Fields not
  * specified in groupByFields are
  * aggregated away. If groupByFields
  * is not specified and all the time
  * series have the same resource
  * type, then the time series are
  * aggregated into a single output
  * time series. If crossSeriesReducer
  * is not defined, this field is
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The approach to be used to align
  * individual time series. Not all
  * alignment functions may be applied
  * to all time series, depending on
  * the metric type and value type of
  * the original time series.
  * Alignment may change the metric
  * type or the value type of the time
  * series.Time series data must be
  * aligned in order to perform cross-
  * time series reduction. If
  * crossSeriesReducer is specified,
  * then perSeriesAligner must be
  * specified and not equal ALIGN_NONE
  * and alignmentPeriod must be
  * specified; otherwise, an error is
  * returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}
  */
  readonly perSeriesAligner?: string;
}

export function googleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alignment_period: cdktf.stringToTerraform(struct!.alignmentPeriod),
    cross_series_reducer: cdktf.stringToTerraform(struct!.crossSeriesReducer),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByFields),
    per_series_aligner: cdktf.stringToTerraform(struct!.perSeriesAligner),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alignment_period: {
      value: cdktf.stringToHclTerraform(struct!.alignmentPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_series_reducer: {
      value: cdktf.stringToHclTerraform(struct!.crossSeriesReducer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_series_aligner: {
      value: cdktf.stringToHclTerraform(struct!.perSeriesAligner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignmentPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignmentPeriod = this._alignmentPeriod;
    }
    if (this._crossSeriesReducer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossSeriesReducer = this._crossSeriesReducer;
    }
    if (this._groupByFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByFields = this._groupByFields;
    }
    if (this._perSeriesAligner !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSeriesAligner = this._perSeriesAligner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignmentPeriod = undefined;
      this._crossSeriesReducer = undefined;
      this._groupByFields = undefined;
      this._perSeriesAligner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignmentPeriod = value.alignmentPeriod;
      this._crossSeriesReducer = value.crossSeriesReducer;
      this._groupByFields = value.groupByFields;
      this._perSeriesAligner = value.perSeriesAligner;
    }
  }

  // alignment_period - computed: false, optional: true, required: false
  private _alignmentPeriod?: string; 
  public get alignmentPeriod() {
    return this.getStringAttribute('alignment_period');
  }
  public set alignmentPeriod(value: string) {
    this._alignmentPeriod = value;
  }
  public resetAlignmentPeriod() {
    this._alignmentPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentPeriodInput() {
    return this._alignmentPeriod;
  }

  // cross_series_reducer - computed: false, optional: true, required: false
  private _crossSeriesReducer?: string; 
  public get crossSeriesReducer() {
    return this.getStringAttribute('cross_series_reducer');
  }
  public set crossSeriesReducer(value: string) {
    this._crossSeriesReducer = value;
  }
  public resetCrossSeriesReducer() {
    this._crossSeriesReducer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossSeriesReducerInput() {
    return this._crossSeriesReducer;
  }

  // group_by_fields - computed: false, optional: true, required: false
  private _groupByFields?: string[]; 
  public get groupByFields() {
    return this.getListAttribute('group_by_fields');
  }
  public set groupByFields(value: string[]) {
    this._groupByFields = value;
  }
  public resetGroupByFields() {
    this._groupByFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByFieldsInput() {
    return this._groupByFields;
  }

  // per_series_aligner - computed: false, optional: true, required: false
  private _perSeriesAligner?: string; 
  public get perSeriesAligner() {
    return this.getStringAttribute('per_series_aligner');
  }
  public set perSeriesAligner(value: string) {
    this._perSeriesAligner = value;
  }
  public resetPerSeriesAligner() {
    this._perSeriesAligner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSeriesAlignerInput() {
    return this._perSeriesAligner;
  }
}

export class GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList extends cdktf.ComplexList {
  public internalValue? : GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[] | cdktf.IResolvable

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
  public get(index: number): GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference {
    return new GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions {
  /**
  * The length of time into the future to forecast
  * whether a timeseries will violate the threshold.
  * If the predicted value is found to violate the
  * threshold, and the violation is observed in all
  * forecasts made for the Configured 'duration',
  * then the timeseries is considered to be failing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#forecast_horizon GoogleMonitoringAlertPolicy#forecast_horizon}
  */
  readonly forecastHorizon: string;
}

export function googleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference | GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forecast_horizon: cdktf.stringToTerraform(struct!.forecastHorizon),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference | GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forecast_horizon: {
      value: cdktf.stringToHclTerraform(struct!.forecastHorizon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forecastHorizon !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastHorizon = this._forecastHorizon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forecastHorizon = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forecastHorizon = value.forecastHorizon;
    }
  }

  // forecast_horizon - computed: false, optional: false, required: true
  private _forecastHorizon?: string; 
  public get forecastHorizon() {
    return this.getStringAttribute('forecast_horizon');
  }
  public set forecastHorizon(value: string) {
    this._forecastHorizon = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastHorizonInput() {
    return this._forecastHorizon;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger {
  /**
  * The absolute number of time series
  * that must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}
  */
  readonly count?: number;
  /**
  * The percentage of time series that
  * must fail the predicate for the
  * condition to be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}
  */
  readonly percent?: number;
}

export function googleMonitoringAlertPolicyConditionsConditionThresholdTriggerToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference | GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionThresholdTriggerToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference | GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger): any {
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
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._percent = value.percent;
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

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface GoogleMonitoringAlertPolicyConditionsConditionThreshold {
  /**
  * The comparison to apply between the time
  * series (indicated by filter and aggregation)
  * and the threshold (indicated by
  * threshold_value). The comparison is applied
  * on each time series, with the time series on
  * the left-hand side and the threshold on the
  * right-hand side. Only COMPARISON_LT and
  * COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}
  */
  readonly comparison: string;
  /**
  * A filter that identifies a time series that
  * should be used as the denominator of a ratio
  * that will be compared with the threshold. If
  * a denominator_filter is specified, the time
  * series specified by the filter field will be
  * used as the numerator.The filter is similar
  * to the one that is specified in the
  * MetricService.ListTimeSeries request (that
  * call is useful to verify the time series
  * that will be retrieved / processed) and must
  * specify the metric type and optionally may
  * contain restrictions on resource type,
  * resource labels, and metric labels. This
  * field may not exceed 2048 Unicode characters
  * in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#denominator_filter GoogleMonitoringAlertPolicy#denominator_filter}
  */
  readonly denominatorFilter?: string;
  /**
  * The amount of time that a time series must
  * violate the threshold to be considered
  * failing. Currently, only values that are a
  * multiple of a minute--e.g., 0, 60, 120, or
  * 300 seconds--are supported. If an invalid
  * value is given, an error will be returned.
  * When choosing a duration, it is useful to
  * keep in mind the frequency of the underlying
  * time series data (which may also be affected
  * by any alignments specified in the
  * aggregations field); a good duration is long
  * enough so that a single outlier does not
  * generate spurious alerts, but short enough
  * that unhealthy states are detected and
  * alerted on quickly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}
  */
  readonly duration: string;
  /**
  * A condition control that determines how
  * metric-threshold conditions are evaluated when
  * data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}
  */
  readonly evaluationMissingData?: string;
  /**
  * A filter that identifies which time series
  * should be compared with the threshold.The
  * filter is similar to the one that is
  * specified in the
  * MetricService.ListTimeSeries request (that
  * call is useful to verify the time series
  * that will be retrieved / processed) and must
  * specify the metric type and optionally may
  * contain restrictions on resource type,
  * resource labels, and metric labels. This
  * field may not exceed 2048 Unicode characters
  * in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}
  */
  readonly filter?: string;
  /**
  * A value against which to compare the time
  * series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#threshold_value GoogleMonitoringAlertPolicy#threshold_value}
  */
  readonly thresholdValue?: number;
  /**
  * aggregations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}
  */
  readonly aggregations?: GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations[] | cdktf.IResolvable;
  /**
  * denominator_aggregations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#denominator_aggregations GoogleMonitoringAlertPolicy#denominator_aggregations}
  */
  readonly denominatorAggregations?: GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[] | cdktf.IResolvable;
  /**
  * forecast_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#forecast_options GoogleMonitoringAlertPolicy#forecast_options}
  */
  readonly forecastOptions?: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}
  */
  readonly trigger?: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger;
}

export function googleMonitoringAlertPolicyConditionsConditionThresholdToTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference | GoogleMonitoringAlertPolicyConditionsConditionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    denominator_filter: cdktf.stringToTerraform(struct!.denominatorFilter),
    duration: cdktf.stringToTerraform(struct!.duration),
    evaluation_missing_data: cdktf.stringToTerraform(struct!.evaluationMissingData),
    filter: cdktf.stringToTerraform(struct!.filter),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
    aggregations: cdktf.listMapper(googleMonitoringAlertPolicyConditionsConditionThresholdAggregationsToTerraform, true)(struct!.aggregations),
    denominator_aggregations: cdktf.listMapper(googleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToTerraform, true)(struct!.denominatorAggregations),
    forecast_options: googleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsToTerraform(struct!.forecastOptions),
    trigger: googleMonitoringAlertPolicyConditionsConditionThresholdTriggerToTerraform(struct!.trigger),
  }
}


export function googleMonitoringAlertPolicyConditionsConditionThresholdToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference | GoogleMonitoringAlertPolicyConditionsConditionThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    denominator_filter: {
      value: cdktf.stringToHclTerraform(struct!.denominatorFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_missing_data: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aggregations: {
      value: cdktf.listMapperHcl(googleMonitoringAlertPolicyConditionsConditionThresholdAggregationsToHclTerraform, true)(struct!.aggregations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList",
    },
    denominator_aggregations: {
      value: cdktf.listMapperHcl(googleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsToHclTerraform, true)(struct!.denominatorAggregations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList",
    },
    forecast_options: {
      value: googleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsToHclTerraform(struct!.forecastOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsList",
    },
    trigger: {
      value: googleMonitoringAlertPolicyConditionsConditionThresholdTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyConditionsConditionThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._denominatorFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominatorFilter = this._denominatorFilter;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._evaluationMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMissingData = this._evaluationMissingData;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    if (this._aggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations?.internalValue;
    }
    if (this._denominatorAggregations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominatorAggregations = this._denominatorAggregations?.internalValue;
    }
    if (this._forecastOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forecastOptions = this._forecastOptions?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditionsConditionThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparison = undefined;
      this._denominatorFilter = undefined;
      this._duration = undefined;
      this._evaluationMissingData = undefined;
      this._filter = undefined;
      this._thresholdValue = undefined;
      this._aggregations.internalValue = undefined;
      this._denominatorAggregations.internalValue = undefined;
      this._forecastOptions.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparison = value.comparison;
      this._denominatorFilter = value.denominatorFilter;
      this._duration = value.duration;
      this._evaluationMissingData = value.evaluationMissingData;
      this._filter = value.filter;
      this._thresholdValue = value.thresholdValue;
      this._aggregations.internalValue = value.aggregations;
      this._denominatorAggregations.internalValue = value.denominatorAggregations;
      this._forecastOptions.internalValue = value.forecastOptions;
      this._trigger.internalValue = value.trigger;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // denominator_filter - computed: false, optional: true, required: false
  private _denominatorFilter?: string; 
  public get denominatorFilter() {
    return this.getStringAttribute('denominator_filter');
  }
  public set denominatorFilter(value: string) {
    this._denominatorFilter = value;
  }
  public resetDenominatorFilter() {
    this._denominatorFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorFilterInput() {
    return this._denominatorFilter;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // evaluation_missing_data - computed: false, optional: true, required: false
  private _evaluationMissingData?: string; 
  public get evaluationMissingData() {
    return this.getStringAttribute('evaluation_missing_data');
  }
  public set evaluationMissingData(value: string) {
    this._evaluationMissingData = value;
  }
  public resetEvaluationMissingData() {
    this._evaluationMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMissingDataInput() {
    return this._evaluationMissingData;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations = new GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList(this, "aggregations", false);
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations[] | cdktf.IResolvable) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }

  // denominator_aggregations - computed: false, optional: true, required: false
  private _denominatorAggregations = new GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList(this, "denominator_aggregations", false);
  public get denominatorAggregations() {
    return this._denominatorAggregations;
  }
  public putDenominatorAggregations(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations[] | cdktf.IResolvable) {
    this._denominatorAggregations.internalValue = value;
  }
  public resetDenominatorAggregations() {
    this._denominatorAggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorAggregationsInput() {
    return this._denominatorAggregations.internalValue;
  }

  // forecast_options - computed: false, optional: true, required: false
  private _forecastOptions = new GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference(this, "forecast_options");
  public get forecastOptions() {
    return this._forecastOptions;
  }
  public putForecastOptions(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions) {
    this._forecastOptions.internalValue = value;
  }
  public resetForecastOptions() {
    this._forecastOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forecastOptionsInput() {
    return this._forecastOptions.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface GoogleMonitoringAlertPolicyConditions {
  /**
  * A short name or phrase used to identify the
  * condition in dashboards, notifications, and
  * incidents. To avoid confusion, don't use the same
  * display name for multiple conditions in the same
  * policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * condition_absent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#condition_absent GoogleMonitoringAlertPolicy#condition_absent}
  */
  readonly conditionAbsent?: GoogleMonitoringAlertPolicyConditionsConditionAbsent;
  /**
  * condition_matched_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#condition_matched_log GoogleMonitoringAlertPolicy#condition_matched_log}
  */
  readonly conditionMatchedLog?: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog;
  /**
  * condition_monitoring_query_language block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#condition_monitoring_query_language GoogleMonitoringAlertPolicy#condition_monitoring_query_language}
  */
  readonly conditionMonitoringQueryLanguage?: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage;
  /**
  * condition_prometheus_query_language block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#condition_prometheus_query_language GoogleMonitoringAlertPolicy#condition_prometheus_query_language}
  */
  readonly conditionPrometheusQueryLanguage?: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage;
  /**
  * condition_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#condition_threshold GoogleMonitoringAlertPolicy#condition_threshold}
  */
  readonly conditionThreshold?: GoogleMonitoringAlertPolicyConditionsConditionThreshold;
}

export function googleMonitoringAlertPolicyConditionsToTerraform(struct?: GoogleMonitoringAlertPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    condition_absent: googleMonitoringAlertPolicyConditionsConditionAbsentToTerraform(struct!.conditionAbsent),
    condition_matched_log: googleMonitoringAlertPolicyConditionsConditionMatchedLogToTerraform(struct!.conditionMatchedLog),
    condition_monitoring_query_language: googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToTerraform(struct!.conditionMonitoringQueryLanguage),
    condition_prometheus_query_language: googleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToTerraform(struct!.conditionPrometheusQueryLanguage),
    condition_threshold: googleMonitoringAlertPolicyConditionsConditionThresholdToTerraform(struct!.conditionThreshold),
  }
}


export function googleMonitoringAlertPolicyConditionsToHclTerraform(struct?: GoogleMonitoringAlertPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_absent: {
      value: googleMonitoringAlertPolicyConditionsConditionAbsentToHclTerraform(struct!.conditionAbsent),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionAbsentList",
    },
    condition_matched_log: {
      value: googleMonitoringAlertPolicyConditionsConditionMatchedLogToHclTerraform(struct!.conditionMatchedLog),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionMatchedLogList",
    },
    condition_monitoring_query_language: {
      value: googleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageToHclTerraform(struct!.conditionMonitoringQueryLanguage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageList",
    },
    condition_prometheus_query_language: {
      value: googleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageToHclTerraform(struct!.conditionPrometheusQueryLanguage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageList",
    },
    condition_threshold: {
      value: googleMonitoringAlertPolicyConditionsConditionThresholdToHclTerraform(struct!.conditionThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyConditionsConditionThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMonitoringAlertPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._conditionAbsent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionAbsent = this._conditionAbsent?.internalValue;
    }
    if (this._conditionMatchedLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionMatchedLog = this._conditionMatchedLog?.internalValue;
    }
    if (this._conditionMonitoringQueryLanguage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionMonitoringQueryLanguage = this._conditionMonitoringQueryLanguage?.internalValue;
    }
    if (this._conditionPrometheusQueryLanguage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionPrometheusQueryLanguage = this._conditionPrometheusQueryLanguage?.internalValue;
    }
    if (this._conditionThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionThreshold = this._conditionThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._conditionAbsent.internalValue = undefined;
      this._conditionMatchedLog.internalValue = undefined;
      this._conditionMonitoringQueryLanguage.internalValue = undefined;
      this._conditionPrometheusQueryLanguage.internalValue = undefined;
      this._conditionThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._conditionAbsent.internalValue = value.conditionAbsent;
      this._conditionMatchedLog.internalValue = value.conditionMatchedLog;
      this._conditionMonitoringQueryLanguage.internalValue = value.conditionMonitoringQueryLanguage;
      this._conditionPrometheusQueryLanguage.internalValue = value.conditionPrometheusQueryLanguage;
      this._conditionThreshold.internalValue = value.conditionThreshold;
    }
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // condition_absent - computed: false, optional: true, required: false
  private _conditionAbsent = new GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference(this, "condition_absent");
  public get conditionAbsent() {
    return this._conditionAbsent;
  }
  public putConditionAbsent(value: GoogleMonitoringAlertPolicyConditionsConditionAbsent) {
    this._conditionAbsent.internalValue = value;
  }
  public resetConditionAbsent() {
    this._conditionAbsent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionAbsentInput() {
    return this._conditionAbsent.internalValue;
  }

  // condition_matched_log - computed: false, optional: true, required: false
  private _conditionMatchedLog = new GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference(this, "condition_matched_log");
  public get conditionMatchedLog() {
    return this._conditionMatchedLog;
  }
  public putConditionMatchedLog(value: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog) {
    this._conditionMatchedLog.internalValue = value;
  }
  public resetConditionMatchedLog() {
    this._conditionMatchedLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionMatchedLogInput() {
    return this._conditionMatchedLog.internalValue;
  }

  // condition_monitoring_query_language - computed: false, optional: true, required: false
  private _conditionMonitoringQueryLanguage = new GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference(this, "condition_monitoring_query_language");
  public get conditionMonitoringQueryLanguage() {
    return this._conditionMonitoringQueryLanguage;
  }
  public putConditionMonitoringQueryLanguage(value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage) {
    this._conditionMonitoringQueryLanguage.internalValue = value;
  }
  public resetConditionMonitoringQueryLanguage() {
    this._conditionMonitoringQueryLanguage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionMonitoringQueryLanguageInput() {
    return this._conditionMonitoringQueryLanguage.internalValue;
  }

  // condition_prometheus_query_language - computed: false, optional: true, required: false
  private _conditionPrometheusQueryLanguage = new GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference(this, "condition_prometheus_query_language");
  public get conditionPrometheusQueryLanguage() {
    return this._conditionPrometheusQueryLanguage;
  }
  public putConditionPrometheusQueryLanguage(value: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage) {
    this._conditionPrometheusQueryLanguage.internalValue = value;
  }
  public resetConditionPrometheusQueryLanguage() {
    this._conditionPrometheusQueryLanguage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionPrometheusQueryLanguageInput() {
    return this._conditionPrometheusQueryLanguage.internalValue;
  }

  // condition_threshold - computed: false, optional: true, required: false
  private _conditionThreshold = new GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference(this, "condition_threshold");
  public get conditionThreshold() {
    return this._conditionThreshold;
  }
  public putConditionThreshold(value: GoogleMonitoringAlertPolicyConditionsConditionThreshold) {
    this._conditionThreshold.internalValue = value;
  }
  public resetConditionThreshold() {
    this._conditionThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionThresholdInput() {
    return this._conditionThreshold.internalValue;
  }
}

export class GoogleMonitoringAlertPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : GoogleMonitoringAlertPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): GoogleMonitoringAlertPolicyConditionsOutputReference {
    return new GoogleMonitoringAlertPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMonitoringAlertPolicyDocumentationLinks {
  /**
  * A short display name for the link. The display name must not be empty or exceed 63 characters. Example: "playbook".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * The url of a webpage. A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#url GoogleMonitoringAlertPolicy#url}
  */
  readonly url?: string;
}

export function googleMonitoringAlertPolicyDocumentationLinksToTerraform(struct?: GoogleMonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function googleMonitoringAlertPolicyDocumentationLinksToHclTerraform(struct?: GoogleMonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyDocumentationLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyDocumentationLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._url = value.url;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class GoogleMonitoringAlertPolicyDocumentationLinksList extends cdktf.ComplexList {
  public internalValue? : GoogleMonitoringAlertPolicyDocumentationLinks[] | cdktf.IResolvable

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
  public get(index: number): GoogleMonitoringAlertPolicyDocumentationLinksOutputReference {
    return new GoogleMonitoringAlertPolicyDocumentationLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMonitoringAlertPolicyDocumentation {
  /**
  * The text of the documentation, interpreted according to mimeType.
  * The content may not exceed 8,192 Unicode characters and may not
  * exceed more than 10,240 bytes when encoded in UTF-8 format,
  * whichever is smaller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#content GoogleMonitoringAlertPolicy#content}
  */
  readonly content?: string;
  /**
  * The format of the content field. Presently, only the value
  * "text/markdown" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#mime_type GoogleMonitoringAlertPolicy#mime_type}
  */
  readonly mimeType?: string;
  /**
  * The subject line of the notification. The subject line may not
  * exceed 10,240 bytes. In notifications generated by this policy the contents
  * of the subject line after variable expansion will be truncated to 255 bytes
  * or shorter at the latest UTF-8 character boundary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#subject GoogleMonitoringAlertPolicy#subject}
  */
  readonly subject?: string;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#links GoogleMonitoringAlertPolicy#links}
  */
  readonly links?: GoogleMonitoringAlertPolicyDocumentationLinks[] | cdktf.IResolvable;
}

export function googleMonitoringAlertPolicyDocumentationToTerraform(struct?: GoogleMonitoringAlertPolicyDocumentationOutputReference | GoogleMonitoringAlertPolicyDocumentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
    subject: cdktf.stringToTerraform(struct!.subject),
    links: cdktf.listMapper(googleMonitoringAlertPolicyDocumentationLinksToTerraform, true)(struct!.links),
  }
}


export function googleMonitoringAlertPolicyDocumentationToHclTerraform(struct?: GoogleMonitoringAlertPolicyDocumentationOutputReference | GoogleMonitoringAlertPolicyDocumentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    links: {
      value: cdktf.listMapperHcl(googleMonitoringAlertPolicyDocumentationLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMonitoringAlertPolicyDocumentationLinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMonitoringAlertPolicyDocumentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyDocumentation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMonitoringAlertPolicyDocumentation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._mimeType = undefined;
      this._subject = undefined;
      this._links.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._mimeType = value.mimeType;
      this._subject = value.subject;
      this._links.internalValue = value.links;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // mime_type - computed: false, optional: true, required: false
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  public resetMimeType() {
    this._mimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // links - computed: false, optional: true, required: false
  private _links = new GoogleMonitoringAlertPolicyDocumentationLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: GoogleMonitoringAlertPolicyDocumentationLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }
}
export interface GoogleMonitoringAlertPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}
  */
  readonly update?: string;
}

export function googleMonitoringAlertPolicyTimeoutsToTerraform(struct?: GoogleMonitoringAlertPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleMonitoringAlertPolicyTimeoutsToHclTerraform(struct?: GoogleMonitoringAlertPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleMonitoringAlertPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleMonitoringAlertPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleMonitoringAlertPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy google_monitoring_alert_policy}
*/
export class GoogleMonitoringAlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_alert_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleMonitoringAlertPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleMonitoringAlertPolicy to import
  * @param importFromId The id of the existing GoogleMonitoringAlertPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleMonitoringAlertPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_monitoring_alert_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_monitoring_alert_policy google_monitoring_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleMonitoringAlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleMonitoringAlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_alert_policy',
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
    this._combiner = config.combiner;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._notificationChannels = config.notificationChannels;
    this._project = config.project;
    this._severity = config.severity;
    this._userLabels = config.userLabels;
    this._alertStrategy.internalValue = config.alertStrategy;
    this._conditions.internalValue = config.conditions;
    this._documentation.internalValue = config.documentation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // combiner - computed: false, optional: false, required: true
  private _combiner?: string; 
  public get combiner() {
    return this.getStringAttribute('combiner');
  }
  public set combiner(value: string) {
    this._combiner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combinerInput() {
    return this._combiner;
  }

  // creation_record - computed: true, optional: false, required: false
  private _creationRecord = new GoogleMonitoringAlertPolicyCreationRecordList(this, "creation_record", false);
  public get creationRecord() {
    return this._creationRecord;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_channels - computed: false, optional: true, required: false
  private _notificationChannels?: string[]; 
  public get notificationChannels() {
    return this.getListAttribute('notification_channels');
  }
  public set notificationChannels(value: string[]) {
    this._notificationChannels = value;
  }
  public resetNotificationChannels() {
    this._notificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelsInput() {
    return this._notificationChannels;
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

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // user_labels - computed: false, optional: true, required: false
  private _userLabels?: { [key: string]: string }; 
  public get userLabels() {
    return this.getStringMapAttribute('user_labels');
  }
  public set userLabels(value: { [key: string]: string }) {
    this._userLabels = value;
  }
  public resetUserLabels() {
    this._userLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelsInput() {
    return this._userLabels;
  }

  // alert_strategy - computed: false, optional: true, required: false
  private _alertStrategy = new GoogleMonitoringAlertPolicyAlertStrategyOutputReference(this, "alert_strategy");
  public get alertStrategy() {
    return this._alertStrategy;
  }
  public putAlertStrategy(value: GoogleMonitoringAlertPolicyAlertStrategy) {
    this._alertStrategy.internalValue = value;
  }
  public resetAlertStrategy() {
    this._alertStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertStrategyInput() {
    return this._alertStrategy.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new GoogleMonitoringAlertPolicyConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleMonitoringAlertPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation = new GoogleMonitoringAlertPolicyDocumentationOutputReference(this, "documentation");
  public get documentation() {
    return this._documentation;
  }
  public putDocumentation(value: GoogleMonitoringAlertPolicyDocumentation) {
    this._documentation.internalValue = value;
  }
  public resetDocumentation() {
    this._documentation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleMonitoringAlertPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleMonitoringAlertPolicyTimeouts) {
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
      combiner: cdktf.stringToTerraform(this._combiner),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      notification_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationChannels),
      project: cdktf.stringToTerraform(this._project),
      severity: cdktf.stringToTerraform(this._severity),
      user_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._userLabels),
      alert_strategy: googleMonitoringAlertPolicyAlertStrategyToTerraform(this._alertStrategy.internalValue),
      conditions: cdktf.listMapper(googleMonitoringAlertPolicyConditionsToTerraform, true)(this._conditions.internalValue),
      documentation: googleMonitoringAlertPolicyDocumentationToTerraform(this._documentation.internalValue),
      timeouts: googleMonitoringAlertPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      combiner: {
        value: cdktf.stringToHclTerraform(this._combiner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      notification_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      alert_strategy: {
        value: googleMonitoringAlertPolicyAlertStrategyToHclTerraform(this._alertStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMonitoringAlertPolicyAlertStrategyList",
      },
      conditions: {
        value: cdktf.listMapperHcl(googleMonitoringAlertPolicyConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMonitoringAlertPolicyConditionsList",
      },
      documentation: {
        value: googleMonitoringAlertPolicyDocumentationToHclTerraform(this._documentation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMonitoringAlertPolicyDocumentationList",
      },
      timeouts: {
        value: googleMonitoringAlertPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleMonitoringAlertPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
