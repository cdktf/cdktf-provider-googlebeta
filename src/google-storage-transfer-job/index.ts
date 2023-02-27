// https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleStorageTransferJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique description to identify the Transfer Job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#description GoogleStorageTransferJob#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#id GoogleStorageTransferJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#project GoogleStorageTransferJob#project}
  */
  readonly project?: string;
  /**
  * Status of the job. Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#status GoogleStorageTransferJob#status}
  */
  readonly status?: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#notification_config GoogleStorageTransferJob#notification_config}
  */
  readonly notificationConfig?: GoogleStorageTransferJobNotificationConfig;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#schedule GoogleStorageTransferJob#schedule}
  */
  readonly schedule?: GoogleStorageTransferJobSchedule;
  /**
  * transfer_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#transfer_spec GoogleStorageTransferJob#transfer_spec}
  */
  readonly transferSpec: GoogleStorageTransferJobTransferSpec;
}
export interface GoogleStorageTransferJobNotificationConfig {
  /**
  * Event types for which a notification is desired. If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#event_types GoogleStorageTransferJob#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * The desired format of the notification message payloads. One of "NONE" or "JSON".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#payload_format GoogleStorageTransferJob#payload_format}
  */
  readonly payloadFormat: string;
  /**
  * The Topic.name of the Pub/Sub topic to which to publish notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#pubsub_topic GoogleStorageTransferJob#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

export function googleStorageTransferJobNotificationConfigToTerraform(struct?: GoogleStorageTransferJobNotificationConfigOutputReference | GoogleStorageTransferJobNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventTypes),
    payload_format: cdktf.stringToTerraform(struct!.payloadFormat),
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export class GoogleStorageTransferJobNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypes = this._eventTypes;
    }
    if (this._payloadFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadFormat = this._payloadFormat;
    }
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventTypes = undefined;
      this._payloadFormat = undefined;
      this._pubsubTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventTypes = value.eventTypes;
      this._payloadFormat = value.payloadFormat;
      this._pubsubTopic = value.pubsubTopic;
    }
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // payload_format - computed: false, optional: false, required: true
  private _payloadFormat?: string; 
  public get payloadFormat() {
    return this.getStringAttribute('payload_format');
  }
  public set payloadFormat(value: string) {
    this._payloadFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatInput() {
    return this._payloadFormat;
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }
}
export interface GoogleStorageTransferJobScheduleScheduleEndDate {
  /**
  * Day of month. Must be from 1 to 31 and valid for the year and month.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#day GoogleStorageTransferJob#day}
  */
  readonly day: number;
  /**
  * Month of year. Must be from 1 to 12.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#month GoogleStorageTransferJob#month}
  */
  readonly month: number;
  /**
  * Year of date. Must be from 1 to 9999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#year GoogleStorageTransferJob#year}
  */
  readonly year: number;
}

export function googleStorageTransferJobScheduleScheduleEndDateToTerraform(struct?: GoogleStorageTransferJobScheduleScheduleEndDateOutputReference | GoogleStorageTransferJobScheduleScheduleEndDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}

export class GoogleStorageTransferJobScheduleScheduleEndDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobScheduleScheduleEndDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobScheduleScheduleEndDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleStorageTransferJobScheduleScheduleStartDate {
  /**
  * Day of month. Must be from 1 to 31 and valid for the year and month.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#day GoogleStorageTransferJob#day}
  */
  readonly day: number;
  /**
  * Month of year. Must be from 1 to 12.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#month GoogleStorageTransferJob#month}
  */
  readonly month: number;
  /**
  * Year of date. Must be from 1 to 9999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#year GoogleStorageTransferJob#year}
  */
  readonly year: number;
}

export function googleStorageTransferJobScheduleScheduleStartDateToTerraform(struct?: GoogleStorageTransferJobScheduleScheduleStartDateOutputReference | GoogleStorageTransferJobScheduleScheduleStartDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}

export class GoogleStorageTransferJobScheduleScheduleStartDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobScheduleScheduleStartDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobScheduleScheduleStartDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleStorageTransferJobScheduleStartTimeOfDay {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#hours GoogleStorageTransferJob#hours}
  */
  readonly hours: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#minutes GoogleStorageTransferJob#minutes}
  */
  readonly minutes: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#nanos GoogleStorageTransferJob#nanos}
  */
  readonly nanos: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#seconds GoogleStorageTransferJob#seconds}
  */
  readonly seconds: number;
}

export function googleStorageTransferJobScheduleStartTimeOfDayToTerraform(struct?: GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference | GoogleStorageTransferJobScheduleStartTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobScheduleStartTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobScheduleStartTimeOfDay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: false, required: true
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleStorageTransferJobSchedule {
  /**
  * Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#repeat_interval GoogleStorageTransferJob#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * schedule_end_date block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#schedule_end_date GoogleStorageTransferJob#schedule_end_date}
  */
  readonly scheduleEndDate?: GoogleStorageTransferJobScheduleScheduleEndDate;
  /**
  * schedule_start_date block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#schedule_start_date GoogleStorageTransferJob#schedule_start_date}
  */
  readonly scheduleStartDate: GoogleStorageTransferJobScheduleScheduleStartDate;
  /**
  * start_time_of_day block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#start_time_of_day GoogleStorageTransferJob#start_time_of_day}
  */
  readonly startTimeOfDay?: GoogleStorageTransferJobScheduleStartTimeOfDay;
}

export function googleStorageTransferJobScheduleToTerraform(struct?: GoogleStorageTransferJobScheduleOutputReference | GoogleStorageTransferJobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    schedule_end_date: googleStorageTransferJobScheduleScheduleEndDateToTerraform(struct!.scheduleEndDate),
    schedule_start_date: googleStorageTransferJobScheduleScheduleStartDateToTerraform(struct!.scheduleStartDate),
    start_time_of_day: googleStorageTransferJobScheduleStartTimeOfDayToTerraform(struct!.startTimeOfDay),
  }
}

export class GoogleStorageTransferJobScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._scheduleEndDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleEndDate = this._scheduleEndDate?.internalValue;
    }
    if (this._scheduleStartDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleStartDate = this._scheduleStartDate?.internalValue;
    }
    if (this._startTimeOfDay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOfDay = this._startTimeOfDay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repeatInterval = undefined;
      this._scheduleEndDate.internalValue = undefined;
      this._scheduleStartDate.internalValue = undefined;
      this._startTimeOfDay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repeatInterval = value.repeatInterval;
      this._scheduleEndDate.internalValue = value.scheduleEndDate;
      this._scheduleStartDate.internalValue = value.scheduleStartDate;
      this._startTimeOfDay.internalValue = value.startTimeOfDay;
    }
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // schedule_end_date - computed: false, optional: true, required: false
  private _scheduleEndDate = new GoogleStorageTransferJobScheduleScheduleEndDateOutputReference(this, "schedule_end_date");
  public get scheduleEndDate() {
    return this._scheduleEndDate;
  }
  public putScheduleEndDate(value: GoogleStorageTransferJobScheduleScheduleEndDate) {
    this._scheduleEndDate.internalValue = value;
  }
  public resetScheduleEndDate() {
    this._scheduleEndDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEndDateInput() {
    return this._scheduleEndDate.internalValue;
  }

  // schedule_start_date - computed: false, optional: false, required: true
  private _scheduleStartDate = new GoogleStorageTransferJobScheduleScheduleStartDateOutputReference(this, "schedule_start_date");
  public get scheduleStartDate() {
    return this._scheduleStartDate;
  }
  public putScheduleStartDate(value: GoogleStorageTransferJobScheduleScheduleStartDate) {
    this._scheduleStartDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStartDateInput() {
    return this._scheduleStartDate.internalValue;
  }

  // start_time_of_day - computed: false, optional: true, required: false
  private _startTimeOfDay = new GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference(this, "start_time_of_day");
  public get startTimeOfDay() {
    return this._startTimeOfDay;
  }
  public putStartTimeOfDay(value: GoogleStorageTransferJobScheduleStartTimeOfDay) {
    this._startTimeOfDay.internalValue = value;
  }
  public resetStartTimeOfDay() {
    this._startTimeOfDay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOfDayInput() {
    return this._startTimeOfDay.internalValue;
  }
}
export interface GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
  /**
  * AWS Key ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#access_key_id GoogleStorageTransferJob#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * AWS Secret Access Key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#secret_access_key GoogleStorageTransferJob#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function googleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToTerraform(struct?: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference | GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}

export class GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
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
export interface GoogleStorageTransferJobTransferSpecAwsS3DataSource {
  /**
  * S3 Bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#role_arn GoogleStorageTransferJob#role_arn}
  */
  readonly roleArn?: string;
  /**
  * aws_access_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#aws_access_key GoogleStorageTransferJob#aws_access_key}
  */
  readonly awsAccessKey?: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey;
}

export function googleStorageTransferJobTransferSpecAwsS3DataSourceToTerraform(struct?: GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference | GoogleStorageTransferJobTransferSpecAwsS3DataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    aws_access_key: googleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToTerraform(struct!.awsAccessKey),
  }
}

export class GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecAwsS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._awsAccessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKey = this._awsAccessKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecAwsS3DataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._roleArn = undefined;
      this._awsAccessKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._roleArn = value.roleArn;
      this._awsAccessKey.internalValue = value.awsAccessKey;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey = new GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(this, "aws_access_key");
  public get awsAccessKey() {
    return this._awsAccessKey;
  }
  public putAwsAccessKey(value: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey) {
    this._awsAccessKey.internalValue = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey.internalValue;
  }
}
export interface GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
  /**
  * Azure shared access signature.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#sas_token GoogleStorageTransferJob#sas_token}
  */
  readonly sasToken: string;
}

export function googleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToTerraform(struct?: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference | GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}

export class GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sasToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sasToken = value.sasToken;
    }
  }

  // sas_token - computed: false, optional: false, required: true
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }
}
export interface GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource {
  /**
  * The container to transfer from the Azure Storage account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#container GoogleStorageTransferJob#container}
  */
  readonly container: string;
  /**
  * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#path GoogleStorageTransferJob#path}
  */
  readonly path?: string;
  /**
  * The name of the Azure Storage account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#storage_account GoogleStorageTransferJob#storage_account}
  */
  readonly storageAccount: string;
  /**
  * azure_credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#azure_credentials GoogleStorageTransferJob#azure_credentials}
  */
  readonly azureCredentials: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;
}

export function googleStorageTransferJobTransferSpecAzureBlobStorageDataSourceToTerraform(struct?: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference | GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    azure_credentials: googleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToTerraform(struct!.azureCredentials),
  }
}

export class GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._azureCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCredentials = this._azureCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._path = undefined;
      this._storageAccount = undefined;
      this._azureCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._path = value.path;
      this._storageAccount = value.storageAccount;
      this._azureCredentials.internalValue = value.azureCredentials;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // azure_credentials - computed: false, optional: false, required: true
  private _azureCredentials = new GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(this, "azure_credentials");
  public get azureCredentials() {
    return this._azureCredentials;
  }
  public putAzureCredentials(value: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials) {
    this._azureCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCredentialsInput() {
    return this._azureCredentials.internalValue;
  }
}
export interface GoogleStorageTransferJobTransferSpecGcsDataSink {
  /**
  * Google Cloud Storage bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#path GoogleStorageTransferJob#path}
  */
  readonly path?: string;
}

export function googleStorageTransferJobTransferSpecGcsDataSinkToTerraform(struct?: GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference | GoogleStorageTransferJobTransferSpecGcsDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecGcsDataSink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecGcsDataSink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._path = value.path;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleStorageTransferJobTransferSpecGcsDataSource {
  /**
  * Google Cloud Storage bucket name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#path GoogleStorageTransferJob#path}
  */
  readonly path?: string;
}

export function googleStorageTransferJobTransferSpecGcsDataSourceToTerraform(struct?: GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference | GoogleStorageTransferJobTransferSpecGcsDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecGcsDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecGcsDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._path = value.path;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface GoogleStorageTransferJobTransferSpecHttpDataSource {
  /**
  * The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#list_url GoogleStorageTransferJob#list_url}
  */
  readonly listUrl: string;
}

export function googleStorageTransferJobTransferSpecHttpDataSourceToTerraform(struct?: GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference | GoogleStorageTransferJobTransferSpecHttpDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list_url: cdktf.stringToTerraform(struct!.listUrl),
  }
}

export class GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecHttpDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.listUrl = this._listUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecHttpDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listUrl = value.listUrl;
    }
  }

  // list_url - computed: false, optional: false, required: true
  private _listUrl?: string; 
  public get listUrl() {
    return this.getStringAttribute('list_url');
  }
  public set listUrl(value: string) {
    this._listUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listUrlInput() {
    return this._listUrl;
  }
}
export interface GoogleStorageTransferJobTransferSpecObjectConditions {
  /**
  * exclude_prefixes must follow the requirements described for include_prefixes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}
  */
  readonly excludePrefixes?: string[];
  /**
  * If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}
  */
  readonly includePrefixes?: string[];
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}
  */
  readonly maxTimeElapsedSinceLastModification?: string;
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}
  */
  readonly minTimeElapsedSinceLastModification?: string;
}

export function googleStorageTransferJobTransferSpecObjectConditionsToTerraform(struct?: GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference | GoogleStorageTransferJobTransferSpecObjectConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePrefixes),
    include_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePrefixes),
    max_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.maxTimeElapsedSinceLastModification),
    min_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.minTimeElapsedSinceLastModification),
  }
}

export class GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecObjectConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrefixes = this._excludePrefixes;
    }
    if (this._includePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePrefixes = this._includePrefixes;
    }
    if (this._maxTimeElapsedSinceLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeElapsedSinceLastModification = this._maxTimeElapsedSinceLastModification;
    }
    if (this._minTimeElapsedSinceLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeElapsedSinceLastModification = this._minTimeElapsedSinceLastModification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecObjectConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePrefixes = undefined;
      this._includePrefixes = undefined;
      this._maxTimeElapsedSinceLastModification = undefined;
      this._minTimeElapsedSinceLastModification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePrefixes = value.excludePrefixes;
      this._includePrefixes = value.includePrefixes;
      this._maxTimeElapsedSinceLastModification = value.maxTimeElapsedSinceLastModification;
      this._minTimeElapsedSinceLastModification = value.minTimeElapsedSinceLastModification;
    }
  }

  // exclude_prefixes - computed: false, optional: true, required: false
  private _excludePrefixes?: string[]; 
  public get excludePrefixes() {
    return this.getListAttribute('exclude_prefixes');
  }
  public set excludePrefixes(value: string[]) {
    this._excludePrefixes = value;
  }
  public resetExcludePrefixes() {
    this._excludePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrefixesInput() {
    return this._excludePrefixes;
  }

  // include_prefixes - computed: false, optional: true, required: false
  private _includePrefixes?: string[]; 
  public get includePrefixes() {
    return this.getListAttribute('include_prefixes');
  }
  public set includePrefixes(value: string[]) {
    this._includePrefixes = value;
  }
  public resetIncludePrefixes() {
    this._includePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrefixesInput() {
    return this._includePrefixes;
  }

  // max_time_elapsed_since_last_modification - computed: false, optional: true, required: false
  private _maxTimeElapsedSinceLastModification?: string; 
  public get maxTimeElapsedSinceLastModification() {
    return this.getStringAttribute('max_time_elapsed_since_last_modification');
  }
  public set maxTimeElapsedSinceLastModification(value: string) {
    this._maxTimeElapsedSinceLastModification = value;
  }
  public resetMaxTimeElapsedSinceLastModification() {
    this._maxTimeElapsedSinceLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeElapsedSinceLastModificationInput() {
    return this._maxTimeElapsedSinceLastModification;
  }

  // min_time_elapsed_since_last_modification - computed: false, optional: true, required: false
  private _minTimeElapsedSinceLastModification?: string; 
  public get minTimeElapsedSinceLastModification() {
    return this.getStringAttribute('min_time_elapsed_since_last_modification');
  }
  public set minTimeElapsedSinceLastModification(value: string) {
    this._minTimeElapsedSinceLastModification = value;
  }
  public resetMinTimeElapsedSinceLastModification() {
    this._minTimeElapsedSinceLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeElapsedSinceLastModificationInput() {
    return this._minTimeElapsedSinceLastModification;
  }
}
export interface GoogleStorageTransferJobTransferSpecPosixDataSink {
  /**
  * Root directory path to the filesystem.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}
  */
  readonly rootDirectory: string;
}

export function googleStorageTransferJobTransferSpecPosixDataSinkToTerraform(struct?: GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference | GoogleStorageTransferJobTransferSpecPosixDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
  }
}

export class GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecPosixDataSink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecPosixDataSink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rootDirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rootDirectory = value.rootDirectory;
    }
  }

  // root_directory - computed: false, optional: false, required: true
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }
}
export interface GoogleStorageTransferJobTransferSpecPosixDataSource {
  /**
  * Root directory path to the filesystem.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}
  */
  readonly rootDirectory: string;
}

export function googleStorageTransferJobTransferSpecPosixDataSourceToTerraform(struct?: GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference | GoogleStorageTransferJobTransferSpecPosixDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
  }
}

export class GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecPosixDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecPosixDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rootDirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rootDirectory = value.rootDirectory;
    }
  }

  // root_directory - computed: false, optional: false, required: true
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }
}
export interface GoogleStorageTransferJobTransferSpecTransferOptions {
  /**
  * Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}
  */
  readonly deleteObjectsFromSourceAfterTransfer?: boolean | cdktf.IResolvable;
  /**
  * Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}
  */
  readonly deleteObjectsUniqueInSink?: boolean | cdktf.IResolvable;
  /**
  * Whether overwriting objects that already exist in the sink is allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}
  */
  readonly overwriteObjectsAlreadyExistingInSink?: boolean | cdktf.IResolvable;
  /**
  * When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}
  */
  readonly overwriteWhen?: string;
}

export function googleStorageTransferJobTransferSpecTransferOptionsToTerraform(struct?: GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference | GoogleStorageTransferJobTransferSpecTransferOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_objects_from_source_after_transfer: cdktf.booleanToTerraform(struct!.deleteObjectsFromSourceAfterTransfer),
    delete_objects_unique_in_sink: cdktf.booleanToTerraform(struct!.deleteObjectsUniqueInSink),
    overwrite_objects_already_existing_in_sink: cdktf.booleanToTerraform(struct!.overwriteObjectsAlreadyExistingInSink),
    overwrite_when: cdktf.stringToTerraform(struct!.overwriteWhen),
  }
}

export class GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpecTransferOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteObjectsFromSourceAfterTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteObjectsFromSourceAfterTransfer = this._deleteObjectsFromSourceAfterTransfer;
    }
    if (this._deleteObjectsUniqueInSink !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteObjectsUniqueInSink = this._deleteObjectsUniqueInSink;
    }
    if (this._overwriteObjectsAlreadyExistingInSink !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteObjectsAlreadyExistingInSink = this._overwriteObjectsAlreadyExistingInSink;
    }
    if (this._overwriteWhen !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteWhen = this._overwriteWhen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpecTransferOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteObjectsFromSourceAfterTransfer = undefined;
      this._deleteObjectsUniqueInSink = undefined;
      this._overwriteObjectsAlreadyExistingInSink = undefined;
      this._overwriteWhen = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteObjectsFromSourceAfterTransfer = value.deleteObjectsFromSourceAfterTransfer;
      this._deleteObjectsUniqueInSink = value.deleteObjectsUniqueInSink;
      this._overwriteObjectsAlreadyExistingInSink = value.overwriteObjectsAlreadyExistingInSink;
      this._overwriteWhen = value.overwriteWhen;
    }
  }

  // delete_objects_from_source_after_transfer - computed: false, optional: true, required: false
  private _deleteObjectsFromSourceAfterTransfer?: boolean | cdktf.IResolvable; 
  public get deleteObjectsFromSourceAfterTransfer() {
    return this.getBooleanAttribute('delete_objects_from_source_after_transfer');
  }
  public set deleteObjectsFromSourceAfterTransfer(value: boolean | cdktf.IResolvable) {
    this._deleteObjectsFromSourceAfterTransfer = value;
  }
  public resetDeleteObjectsFromSourceAfterTransfer() {
    this._deleteObjectsFromSourceAfterTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectsFromSourceAfterTransferInput() {
    return this._deleteObjectsFromSourceAfterTransfer;
  }

  // delete_objects_unique_in_sink - computed: false, optional: true, required: false
  private _deleteObjectsUniqueInSink?: boolean | cdktf.IResolvable; 
  public get deleteObjectsUniqueInSink() {
    return this.getBooleanAttribute('delete_objects_unique_in_sink');
  }
  public set deleteObjectsUniqueInSink(value: boolean | cdktf.IResolvable) {
    this._deleteObjectsUniqueInSink = value;
  }
  public resetDeleteObjectsUniqueInSink() {
    this._deleteObjectsUniqueInSink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectsUniqueInSinkInput() {
    return this._deleteObjectsUniqueInSink;
  }

  // overwrite_objects_already_existing_in_sink - computed: false, optional: true, required: false
  private _overwriteObjectsAlreadyExistingInSink?: boolean | cdktf.IResolvable; 
  public get overwriteObjectsAlreadyExistingInSink() {
    return this.getBooleanAttribute('overwrite_objects_already_existing_in_sink');
  }
  public set overwriteObjectsAlreadyExistingInSink(value: boolean | cdktf.IResolvable) {
    this._overwriteObjectsAlreadyExistingInSink = value;
  }
  public resetOverwriteObjectsAlreadyExistingInSink() {
    this._overwriteObjectsAlreadyExistingInSink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteObjectsAlreadyExistingInSinkInput() {
    return this._overwriteObjectsAlreadyExistingInSink;
  }

  // overwrite_when - computed: false, optional: true, required: false
  private _overwriteWhen?: string; 
  public get overwriteWhen() {
    return this.getStringAttribute('overwrite_when');
  }
  public set overwriteWhen(value: string) {
    this._overwriteWhen = value;
  }
  public resetOverwriteWhen() {
    this._overwriteWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteWhenInput() {
    return this._overwriteWhen;
  }
}
export interface GoogleStorageTransferJobTransferSpec {
  /**
  * aws_s3_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#aws_s3_data_source GoogleStorageTransferJob#aws_s3_data_source}
  */
  readonly awsS3DataSource?: GoogleStorageTransferJobTransferSpecAwsS3DataSource;
  /**
  * azure_blob_storage_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#azure_blob_storage_data_source GoogleStorageTransferJob#azure_blob_storage_data_source}
  */
  readonly azureBlobStorageDataSource?: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource;
  /**
  * gcs_data_sink block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}
  */
  readonly gcsDataSink?: GoogleStorageTransferJobTransferSpecGcsDataSink;
  /**
  * gcs_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}
  */
  readonly gcsDataSource?: GoogleStorageTransferJobTransferSpecGcsDataSource;
  /**
  * http_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#http_data_source GoogleStorageTransferJob#http_data_source}
  */
  readonly httpDataSource?: GoogleStorageTransferJobTransferSpecHttpDataSource;
  /**
  * object_conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}
  */
  readonly objectConditions?: GoogleStorageTransferJobTransferSpecObjectConditions;
  /**
  * posix_data_sink block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#posix_data_sink GoogleStorageTransferJob#posix_data_sink}
  */
  readonly posixDataSink?: GoogleStorageTransferJobTransferSpecPosixDataSink;
  /**
  * posix_data_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#posix_data_source GoogleStorageTransferJob#posix_data_source}
  */
  readonly posixDataSource?: GoogleStorageTransferJobTransferSpecPosixDataSource;
  /**
  * transfer_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}
  */
  readonly transferOptions?: GoogleStorageTransferJobTransferSpecTransferOptions;
}

export function googleStorageTransferJobTransferSpecToTerraform(struct?: GoogleStorageTransferJobTransferSpecOutputReference | GoogleStorageTransferJobTransferSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_s3_data_source: googleStorageTransferJobTransferSpecAwsS3DataSourceToTerraform(struct!.awsS3DataSource),
    azure_blob_storage_data_source: googleStorageTransferJobTransferSpecAzureBlobStorageDataSourceToTerraform(struct!.azureBlobStorageDataSource),
    gcs_data_sink: googleStorageTransferJobTransferSpecGcsDataSinkToTerraform(struct!.gcsDataSink),
    gcs_data_source: googleStorageTransferJobTransferSpecGcsDataSourceToTerraform(struct!.gcsDataSource),
    http_data_source: googleStorageTransferJobTransferSpecHttpDataSourceToTerraform(struct!.httpDataSource),
    object_conditions: googleStorageTransferJobTransferSpecObjectConditionsToTerraform(struct!.objectConditions),
    posix_data_sink: googleStorageTransferJobTransferSpecPosixDataSinkToTerraform(struct!.posixDataSink),
    posix_data_source: googleStorageTransferJobTransferSpecPosixDataSourceToTerraform(struct!.posixDataSource),
    transfer_options: googleStorageTransferJobTransferSpecTransferOptionsToTerraform(struct!.transferOptions),
  }
}

export class GoogleStorageTransferJobTransferSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleStorageTransferJobTransferSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsS3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsS3DataSource = this._awsS3DataSource?.internalValue;
    }
    if (this._azureBlobStorageDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageDataSource = this._azureBlobStorageDataSource?.internalValue;
    }
    if (this._gcsDataSink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDataSink = this._gcsDataSink?.internalValue;
    }
    if (this._gcsDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDataSource = this._gcsDataSource?.internalValue;
    }
    if (this._httpDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDataSource = this._httpDataSource?.internalValue;
    }
    if (this._objectConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectConditions = this._objectConditions?.internalValue;
    }
    if (this._posixDataSink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixDataSink = this._posixDataSink?.internalValue;
    }
    if (this._posixDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixDataSource = this._posixDataSource?.internalValue;
    }
    if (this._transferOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferOptions = this._transferOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleStorageTransferJobTransferSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsS3DataSource.internalValue = undefined;
      this._azureBlobStorageDataSource.internalValue = undefined;
      this._gcsDataSink.internalValue = undefined;
      this._gcsDataSource.internalValue = undefined;
      this._httpDataSource.internalValue = undefined;
      this._objectConditions.internalValue = undefined;
      this._posixDataSink.internalValue = undefined;
      this._posixDataSource.internalValue = undefined;
      this._transferOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsS3DataSource.internalValue = value.awsS3DataSource;
      this._azureBlobStorageDataSource.internalValue = value.azureBlobStorageDataSource;
      this._gcsDataSink.internalValue = value.gcsDataSink;
      this._gcsDataSource.internalValue = value.gcsDataSource;
      this._httpDataSource.internalValue = value.httpDataSource;
      this._objectConditions.internalValue = value.objectConditions;
      this._posixDataSink.internalValue = value.posixDataSink;
      this._posixDataSource.internalValue = value.posixDataSource;
      this._transferOptions.internalValue = value.transferOptions;
    }
  }

  // aws_s3_data_source - computed: false, optional: true, required: false
  private _awsS3DataSource = new GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference(this, "aws_s3_data_source");
  public get awsS3DataSource() {
    return this._awsS3DataSource;
  }
  public putAwsS3DataSource(value: GoogleStorageTransferJobTransferSpecAwsS3DataSource) {
    this._awsS3DataSource.internalValue = value;
  }
  public resetAwsS3DataSource() {
    this._awsS3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3DataSourceInput() {
    return this._awsS3DataSource.internalValue;
  }

  // azure_blob_storage_data_source - computed: false, optional: true, required: false
  private _azureBlobStorageDataSource = new GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(this, "azure_blob_storage_data_source");
  public get azureBlobStorageDataSource() {
    return this._azureBlobStorageDataSource;
  }
  public putAzureBlobStorageDataSource(value: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource) {
    this._azureBlobStorageDataSource.internalValue = value;
  }
  public resetAzureBlobStorageDataSource() {
    this._azureBlobStorageDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageDataSourceInput() {
    return this._azureBlobStorageDataSource.internalValue;
  }

  // gcs_data_sink - computed: false, optional: true, required: false
  private _gcsDataSink = new GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference(this, "gcs_data_sink");
  public get gcsDataSink() {
    return this._gcsDataSink;
  }
  public putGcsDataSink(value: GoogleStorageTransferJobTransferSpecGcsDataSink) {
    this._gcsDataSink.internalValue = value;
  }
  public resetGcsDataSink() {
    this._gcsDataSink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDataSinkInput() {
    return this._gcsDataSink.internalValue;
  }

  // gcs_data_source - computed: false, optional: true, required: false
  private _gcsDataSource = new GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference(this, "gcs_data_source");
  public get gcsDataSource() {
    return this._gcsDataSource;
  }
  public putGcsDataSource(value: GoogleStorageTransferJobTransferSpecGcsDataSource) {
    this._gcsDataSource.internalValue = value;
  }
  public resetGcsDataSource() {
    this._gcsDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDataSourceInput() {
    return this._gcsDataSource.internalValue;
  }

  // http_data_source - computed: false, optional: true, required: false
  private _httpDataSource = new GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference(this, "http_data_source");
  public get httpDataSource() {
    return this._httpDataSource;
  }
  public putHttpDataSource(value: GoogleStorageTransferJobTransferSpecHttpDataSource) {
    this._httpDataSource.internalValue = value;
  }
  public resetHttpDataSource() {
    this._httpDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDataSourceInput() {
    return this._httpDataSource.internalValue;
  }

  // object_conditions - computed: false, optional: true, required: false
  private _objectConditions = new GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference(this, "object_conditions");
  public get objectConditions() {
    return this._objectConditions;
  }
  public putObjectConditions(value: GoogleStorageTransferJobTransferSpecObjectConditions) {
    this._objectConditions.internalValue = value;
  }
  public resetObjectConditions() {
    this._objectConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectConditionsInput() {
    return this._objectConditions.internalValue;
  }

  // posix_data_sink - computed: false, optional: true, required: false
  private _posixDataSink = new GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference(this, "posix_data_sink");
  public get posixDataSink() {
    return this._posixDataSink;
  }
  public putPosixDataSink(value: GoogleStorageTransferJobTransferSpecPosixDataSink) {
    this._posixDataSink.internalValue = value;
  }
  public resetPosixDataSink() {
    this._posixDataSink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixDataSinkInput() {
    return this._posixDataSink.internalValue;
  }

  // posix_data_source - computed: false, optional: true, required: false
  private _posixDataSource = new GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference(this, "posix_data_source");
  public get posixDataSource() {
    return this._posixDataSource;
  }
  public putPosixDataSource(value: GoogleStorageTransferJobTransferSpecPosixDataSource) {
    this._posixDataSource.internalValue = value;
  }
  public resetPosixDataSource() {
    this._posixDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixDataSourceInput() {
    return this._posixDataSource.internalValue;
  }

  // transfer_options - computed: false, optional: true, required: false
  private _transferOptions = new GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference(this, "transfer_options");
  public get transferOptions() {
    return this._transferOptions;
  }
  public putTransferOptions(value: GoogleStorageTransferJobTransferSpecTransferOptions) {
    this._transferOptions.internalValue = value;
  }
  public resetTransferOptions() {
    this._transferOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferOptionsInput() {
    return this._transferOptions.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job google_storage_transfer_job}
*/
export class GoogleStorageTransferJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_transfer_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_storage_transfer_job google_storage_transfer_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleStorageTransferJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleStorageTransferJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_transfer_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.54.0',
        providerVersionConstraint: '~> 4.17'
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
    this._project = config.project;
    this._status = config.status;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._schedule.internalValue = config.schedule;
    this._transferSpec.internalValue = config.transferSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deletion_time - computed: true, optional: false, required: false
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // last_modification_time - computed: true, optional: false, required: false
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new GoogleStorageTransferJobNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: GoogleStorageTransferJobNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new GoogleStorageTransferJobScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: GoogleStorageTransferJobSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // transfer_spec - computed: false, optional: false, required: true
  private _transferSpec = new GoogleStorageTransferJobTransferSpecOutputReference(this, "transfer_spec");
  public get transferSpec() {
    return this._transferSpec;
  }
  public putTransferSpec(value: GoogleStorageTransferJobTransferSpec) {
    this._transferSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transferSpecInput() {
    return this._transferSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      status: cdktf.stringToTerraform(this._status),
      notification_config: googleStorageTransferJobNotificationConfigToTerraform(this._notificationConfig.internalValue),
      schedule: googleStorageTransferJobScheduleToTerraform(this._schedule.internalValue),
      transfer_spec: googleStorageTransferJobTransferSpecToTerraform(this._transferSpec.internalValue),
    };
  }
}
