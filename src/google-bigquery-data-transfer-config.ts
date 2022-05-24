// https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryDataTransferConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of days to look back to automatically refresh the data.
For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#data_refresh_window_days GoogleBigqueryDataTransferConfig#data_refresh_window_days}
  */
  readonly dataRefreshWindowDays?: number;
  /**
  * The data source id. Cannot be changed once the transfer config is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#data_source_id GoogleBigqueryDataTransferConfig#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * The BigQuery target dataset id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#destination_dataset_id GoogleBigqueryDataTransferConfig#destination_dataset_id}
  */
  readonly destinationDatasetId?: string;
  /**
  * When set to true, no runs are scheduled for a given transfer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#disabled GoogleBigqueryDataTransferConfig#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The user specified display name for the transfer config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#display_name GoogleBigqueryDataTransferConfig#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#id GoogleBigqueryDataTransferConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#location GoogleBigqueryDataTransferConfig#location}
  */
  readonly location?: string;
  /**
  * Pub/Sub topic where notifications will be sent after transfer runs
associated with this transfer config finish.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#notification_pubsub_topic GoogleBigqueryDataTransferConfig#notification_pubsub_topic}
  */
  readonly notificationPubsubTopic?: string;
  /**
  * Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#params GoogleBigqueryDataTransferConfig#params}
  */
  readonly params: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#project GoogleBigqueryDataTransferConfig#project}
  */
  readonly project?: string;
  /**
  * Data transfer schedule. If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#schedule GoogleBigqueryDataTransferConfig#schedule}
  */
  readonly schedule?: string;
  /**
  * Service account email. If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#service_account_name GoogleBigqueryDataTransferConfig#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * email_preferences block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#email_preferences GoogleBigqueryDataTransferConfig#email_preferences}
  */
  readonly emailPreferences?: GoogleBigqueryDataTransferConfigEmailPreferences;
  /**
  * schedule_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#schedule_options GoogleBigqueryDataTransferConfig#schedule_options}
  */
  readonly scheduleOptions?: GoogleBigqueryDataTransferConfigScheduleOptions;
  /**
  * sensitive_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#sensitive_params GoogleBigqueryDataTransferConfig#sensitive_params}
  */
  readonly sensitiveParams?: GoogleBigqueryDataTransferConfigSensitiveParams;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#timeouts GoogleBigqueryDataTransferConfig#timeouts}
  */
  readonly timeouts?: GoogleBigqueryDataTransferConfigTimeouts;
}
export interface GoogleBigqueryDataTransferConfigEmailPreferences {
  /**
  * If true, email notifications will be sent on transfer run failures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#enable_failure_email GoogleBigqueryDataTransferConfig#enable_failure_email}
  */
  readonly enableFailureEmail: boolean | cdktf.IResolvable;
}

export function googleBigqueryDataTransferConfigEmailPreferencesToTerraform(struct?: GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference | GoogleBigqueryDataTransferConfigEmailPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_failure_email: cdktf.booleanToTerraform(struct!.enableFailureEmail),
  }
}

export class GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDataTransferConfigEmailPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFailureEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFailureEmail = this._enableFailureEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDataTransferConfigEmailPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableFailureEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableFailureEmail = value.enableFailureEmail;
    }
  }

  // enable_failure_email - computed: false, optional: false, required: true
  private _enableFailureEmail?: boolean | cdktf.IResolvable; 
  public get enableFailureEmail() {
    return this.getBooleanAttribute('enable_failure_email');
  }
  public set enableFailureEmail(value: boolean | cdktf.IResolvable) {
    this._enableFailureEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFailureEmailInput() {
    return this._enableFailureEmail;
  }
}
export interface GoogleBigqueryDataTransferConfigScheduleOptions {
  /**
  * If true, automatic scheduling of data transfer runs for this
configuration will be disabled. The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#disable_auto_scheduling GoogleBigqueryDataTransferConfig#disable_auto_scheduling}
  */
  readonly disableAutoScheduling?: boolean | cdktf.IResolvable;
  /**
  * Defines time to stop scheduling transfer runs. A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#end_time GoogleBigqueryDataTransferConfig#end_time}
  */
  readonly endTime?: string;
  /**
  * Specifies time to start scheduling transfer runs. The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#start_time GoogleBigqueryDataTransferConfig#start_time}
  */
  readonly startTime?: string;
}

export function googleBigqueryDataTransferConfigScheduleOptionsToTerraform(struct?: GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference | GoogleBigqueryDataTransferConfigScheduleOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_auto_scheduling: cdktf.booleanToTerraform(struct!.disableAutoScheduling),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDataTransferConfigScheduleOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAutoScheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoScheduling = this._disableAutoScheduling;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDataTransferConfigScheduleOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAutoScheduling = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAutoScheduling = value.disableAutoScheduling;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // disable_auto_scheduling - computed: false, optional: true, required: false
  private _disableAutoScheduling?: boolean | cdktf.IResolvable; 
  public get disableAutoScheduling() {
    return this.getBooleanAttribute('disable_auto_scheduling');
  }
  public set disableAutoScheduling(value: boolean | cdktf.IResolvable) {
    this._disableAutoScheduling = value;
  }
  public resetDisableAutoScheduling() {
    this._disableAutoScheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoSchedulingInput() {
    return this._disableAutoScheduling;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface GoogleBigqueryDataTransferConfigSensitiveParams {
  /**
  * The Secret Access Key of the AWS account transferring data from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#secret_access_key GoogleBigqueryDataTransferConfig#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function googleBigqueryDataTransferConfigSensitiveParamsToTerraform(struct?: GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference | GoogleBigqueryDataTransferConfigSensitiveParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}

export class GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDataTransferConfigSensitiveParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDataTransferConfigSensitiveParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface GoogleBigqueryDataTransferConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#create GoogleBigqueryDataTransferConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#delete GoogleBigqueryDataTransferConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config#update GoogleBigqueryDataTransferConfig#update}
  */
  readonly update?: string;
}

export function googleBigqueryDataTransferConfigTimeoutsToTerraform(struct?: GoogleBigqueryDataTransferConfigTimeoutsOutputReference | GoogleBigqueryDataTransferConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleBigqueryDataTransferConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDataTransferConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBigqueryDataTransferConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config google_bigquery_data_transfer_config}
*/
export class GoogleBigqueryDataTransferConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_data_transfer_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_data_transfer_config google_bigquery_data_transfer_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryDataTransferConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryDataTransferConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_data_transfer_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataRefreshWindowDays = config.dataRefreshWindowDays;
    this._dataSourceId = config.dataSourceId;
    this._destinationDatasetId = config.destinationDatasetId;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._notificationPubsubTopic = config.notificationPubsubTopic;
    this._params = config.params;
    this._project = config.project;
    this._schedule = config.schedule;
    this._serviceAccountName = config.serviceAccountName;
    this._emailPreferences.internalValue = config.emailPreferences;
    this._scheduleOptions.internalValue = config.scheduleOptions;
    this._sensitiveParams.internalValue = config.sensitiveParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_refresh_window_days - computed: false, optional: true, required: false
  private _dataRefreshWindowDays?: number; 
  public get dataRefreshWindowDays() {
    return this.getNumberAttribute('data_refresh_window_days');
  }
  public set dataRefreshWindowDays(value: number) {
    this._dataRefreshWindowDays = value;
  }
  public resetDataRefreshWindowDays() {
    this._dataRefreshWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRefreshWindowDaysInput() {
    return this._dataRefreshWindowDays;
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // destination_dataset_id - computed: false, optional: true, required: false
  private _destinationDatasetId?: string; 
  public get destinationDatasetId() {
    return this.getStringAttribute('destination_dataset_id');
  }
  public set destinationDatasetId(value: string) {
    this._destinationDatasetId = value;
  }
  public resetDestinationDatasetId() {
    this._destinationDatasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDatasetIdInput() {
    return this._destinationDatasetId;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_pubsub_topic - computed: false, optional: true, required: false
  private _notificationPubsubTopic?: string; 
  public get notificationPubsubTopic() {
    return this.getStringAttribute('notification_pubsub_topic');
  }
  public set notificationPubsubTopic(value: string) {
    this._notificationPubsubTopic = value;
  }
  public resetNotificationPubsubTopic() {
    this._notificationPubsubTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPubsubTopicInput() {
    return this._notificationPubsubTopic;
  }

  // params - computed: false, optional: false, required: true
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // email_preferences - computed: false, optional: true, required: false
  private _emailPreferences = new GoogleBigqueryDataTransferConfigEmailPreferencesOutputReference(this, "email_preferences");
  public get emailPreferences() {
    return this._emailPreferences;
  }
  public putEmailPreferences(value: GoogleBigqueryDataTransferConfigEmailPreferences) {
    this._emailPreferences.internalValue = value;
  }
  public resetEmailPreferences() {
    this._emailPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPreferencesInput() {
    return this._emailPreferences.internalValue;
  }

  // schedule_options - computed: false, optional: true, required: false
  private _scheduleOptions = new GoogleBigqueryDataTransferConfigScheduleOptionsOutputReference(this, "schedule_options");
  public get scheduleOptions() {
    return this._scheduleOptions;
  }
  public putScheduleOptions(value: GoogleBigqueryDataTransferConfigScheduleOptions) {
    this._scheduleOptions.internalValue = value;
  }
  public resetScheduleOptions() {
    this._scheduleOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOptionsInput() {
    return this._scheduleOptions.internalValue;
  }

  // sensitive_params - computed: false, optional: true, required: false
  private _sensitiveParams = new GoogleBigqueryDataTransferConfigSensitiveParamsOutputReference(this, "sensitive_params");
  public get sensitiveParams() {
    return this._sensitiveParams;
  }
  public putSensitiveParams(value: GoogleBigqueryDataTransferConfigSensitiveParams) {
    this._sensitiveParams.internalValue = value;
  }
  public resetSensitiveParams() {
    this._sensitiveParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveParamsInput() {
    return this._sensitiveParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryDataTransferConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryDataTransferConfigTimeouts) {
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
      data_refresh_window_days: cdktf.numberToTerraform(this._dataRefreshWindowDays),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      destination_dataset_id: cdktf.stringToTerraform(this._destinationDatasetId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      notification_pubsub_topic: cdktf.stringToTerraform(this._notificationPubsubTopic),
      params: cdktf.hashMapper(cdktf.stringToTerraform)(this._params),
      project: cdktf.stringToTerraform(this._project),
      schedule: cdktf.stringToTerraform(this._schedule),
      service_account_name: cdktf.stringToTerraform(this._serviceAccountName),
      email_preferences: googleBigqueryDataTransferConfigEmailPreferencesToTerraform(this._emailPreferences.internalValue),
      schedule_options: googleBigqueryDataTransferConfigScheduleOptionsToTerraform(this._scheduleOptions.internalValue),
      sensitive_params: googleBigqueryDataTransferConfigSensitiveParamsToTerraform(this._sensitiveParams.internalValue),
      timeouts: googleBigqueryDataTransferConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
