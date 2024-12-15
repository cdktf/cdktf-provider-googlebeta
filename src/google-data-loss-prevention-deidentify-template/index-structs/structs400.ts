import * as cdktf from 'cdktf';
import { GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsToTerraform,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsToHclTerraform,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsList,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionToTerraform,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionToHclTerraform,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionOutputReference,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsToTerraform,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsToHclTerraform,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsList,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsToTerraform,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsToHclTerraform,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsOutputReference,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToTerraform,
googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToHclTerraform,
GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsOutputReference } from './structs0'
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformations {
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#transformations GoogleDataLossPreventionDeidentifyTemplate#transformations}
  */
  readonly transformations: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformations: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsToTerraform, true)(struct!.transformations),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformations: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsToHclTerraform, true)(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformations.internalValue = value.transformations;
    }
  }

  // transformations - computed: false, optional: false, required: true
  private _transformations = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations[] | cdktf.IResolvable) {
    this._transformations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue | undefined) {
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

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue | undefined) {
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

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMax {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue | undefined) {
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

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue | undefined) {
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

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMin {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue | undefined) {
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

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue | undefined) {
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

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#max GoogleDataLossPreventionDeidentifyTemplate#max}
  */
  readonly max?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMax;
  /**
  * min block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#min GoogleDataLossPreventionDeidentifyTemplate#min}
  */
  readonly min?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMin;
  /**
  * replacement_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#replacement_value GoogleDataLossPreventionDeidentifyTemplate#replacement_value}
  */
  readonly replacementValue: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToTerraform(struct!.max),
    min: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinToTerraform(struct!.min),
    replacement_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToTerraform(struct!.replacementValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxList",
    },
    min: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinList",
    },
    replacement_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToHclTerraform(struct!.replacementValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._replacementValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementValue = this._replacementValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._replacementValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._replacementValue.internalValue = value.replacementValue;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: false, optional: true, required: false
  private _min = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // replacement_value - computed: false, optional: false, required: true
  private _replacementValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference(this, "replacement_value");
  public get replacementValue() {
    return this._replacementValue;
  }
  public putReplacementValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue) {
    this._replacementValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementValueInput() {
    return this._replacementValue.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfig {
  /**
  * buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#buckets GoogleDataLossPreventionDeidentifyTemplate#buckets}
  */
  readonly buckets?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsToTerraform, true)(struct!.buckets),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsToHclTerraform, true)(struct!.buckets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets.internalValue = value.buckets;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore {
  /**
  * Characters to not transform when masking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#characters_to_skip GoogleDataLossPreventionDeidentifyTemplate#characters_to_skip}
  */
  readonly charactersToSkip?: string;
  /**
  * Common characters to not transform when masking. Useful to avoid removing punctuation. Possible values: ["NUMERIC", "ALPHA_UPPER_CASE", "ALPHA_LOWER_CASE", "PUNCTUATION", "WHITESPACE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#common_characters_to_ignore GoogleDataLossPreventionDeidentifyTemplate#common_characters_to_ignore}
  */
  readonly commonCharactersToIgnore?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characters_to_skip: cdktf.stringToTerraform(struct!.charactersToSkip),
    common_characters_to_ignore: cdktf.stringToTerraform(struct!.commonCharactersToIgnore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    characters_to_skip: {
      value: cdktf.stringToHclTerraform(struct!.charactersToSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_characters_to_ignore: {
      value: cdktf.stringToHclTerraform(struct!.commonCharactersToIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._charactersToSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.charactersToSkip = this._charactersToSkip;
    }
    if (this._commonCharactersToIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonCharactersToIgnore = this._commonCharactersToIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._charactersToSkip = undefined;
      this._commonCharactersToIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._charactersToSkip = value.charactersToSkip;
      this._commonCharactersToIgnore = value.commonCharactersToIgnore;
    }
  }

  // characters_to_skip - computed: false, optional: true, required: false
  private _charactersToSkip?: string; 
  public get charactersToSkip() {
    return this.getStringAttribute('characters_to_skip');
  }
  public set charactersToSkip(value: string) {
    this._charactersToSkip = value;
  }
  public resetCharactersToSkip() {
    this._charactersToSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersToSkipInput() {
    return this._charactersToSkip;
  }

  // common_characters_to_ignore - computed: false, optional: true, required: false
  private _commonCharactersToIgnore?: string; 
  public get commonCharactersToIgnore() {
    return this.getStringAttribute('common_characters_to_ignore');
  }
  public set commonCharactersToIgnore(value: string) {
    this._commonCharactersToIgnore = value;
  }
  public resetCommonCharactersToIgnore() {
    this._commonCharactersToIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonCharactersToIgnoreInput() {
    return this._commonCharactersToIgnore;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfig {
  /**
  * Character to use to mask the sensitive values—for example, * for an alphabetic string such as a name, or 0 for a numeric string
  * such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to * for
  * strings, and 0 for digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#masking_character GoogleDataLossPreventionDeidentifyTemplate#masking_character}
  */
  readonly maskingCharacter?: string;
  /**
  * Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
  * If number_to_mask is negative, this denotes inverse masking. Cloud DLP masks all but a number of characters. For example, suppose you have the following values:
  * - 'masking_character' is *
  * - 'number_to_mask' is -4
  * - 'reverse_order' is false
  * - 'characters_to_ignore' includes -
  * - Input string is 1234-5678-9012-3456
  * 
  * The resulting de-identified string is ****-****-****-3456. Cloud DLP masks all but the last four characters. If reverseOrder is true, all but the first four characters are masked as 1234-****-****-****.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#number_to_mask GoogleDataLossPreventionDeidentifyTemplate#number_to_mask}
  */
  readonly numberToMask?: number;
  /**
  * Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is 'false', then the
  * input string '1234-5678-9012-3456' is masked as '00000000000000-3456'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#reverse_order GoogleDataLossPreventionDeidentifyTemplate#reverse_order}
  */
  readonly reverseOrder?: boolean | cdktf.IResolvable;
  /**
  * characters_to_ignore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#characters_to_ignore GoogleDataLossPreventionDeidentifyTemplate#characters_to_ignore}
  */
  readonly charactersToIgnore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masking_character: cdktf.stringToTerraform(struct!.maskingCharacter),
    number_to_mask: cdktf.numberToTerraform(struct!.numberToMask),
    reverse_order: cdktf.booleanToTerraform(struct!.reverseOrder),
    characters_to_ignore: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform, true)(struct!.charactersToIgnore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masking_character: {
      value: cdktf.stringToHclTerraform(struct!.maskingCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_to_mask: {
      value: cdktf.numberToHclTerraform(struct!.numberToMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reverse_order: {
      value: cdktf.booleanToHclTerraform(struct!.reverseOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    characters_to_ignore: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToHclTerraform, true)(struct!.charactersToIgnore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskingCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingCharacter = this._maskingCharacter;
    }
    if (this._numberToMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberToMask = this._numberToMask;
    }
    if (this._reverseOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseOrder = this._reverseOrder;
    }
    if (this._charactersToIgnore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.charactersToIgnore = this._charactersToIgnore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maskingCharacter = undefined;
      this._numberToMask = undefined;
      this._reverseOrder = undefined;
      this._charactersToIgnore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maskingCharacter = value.maskingCharacter;
      this._numberToMask = value.numberToMask;
      this._reverseOrder = value.reverseOrder;
      this._charactersToIgnore.internalValue = value.charactersToIgnore;
    }
  }

  // masking_character - computed: false, optional: true, required: false
  private _maskingCharacter?: string; 
  public get maskingCharacter() {
    return this.getStringAttribute('masking_character');
  }
  public set maskingCharacter(value: string) {
    this._maskingCharacter = value;
  }
  public resetMaskingCharacter() {
    this._maskingCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingCharacterInput() {
    return this._maskingCharacter;
  }

  // number_to_mask - computed: false, optional: true, required: false
  private _numberToMask?: number; 
  public get numberToMask() {
    return this.getNumberAttribute('number_to_mask');
  }
  public set numberToMask(value: number) {
    this._numberToMask = value;
  }
  public resetNumberToMask() {
    this._numberToMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberToMaskInput() {
    return this._numberToMask;
  }

  // reverse_order - computed: false, optional: true, required: false
  private _reverseOrder?: boolean | cdktf.IResolvable; 
  public get reverseOrder() {
    return this.getBooleanAttribute('reverse_order');
  }
  public set reverseOrder(value: boolean | cdktf.IResolvable) {
    this._reverseOrder = value;
  }
  public resetReverseOrder() {
    this._reverseOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseOrderInput() {
    return this._reverseOrder;
  }

  // characters_to_ignore - computed: false, optional: true, required: false
  private _charactersToIgnore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList(this, "characters_to_ignore", false);
  public get charactersToIgnore() {
    return this._charactersToIgnore;
  }
  public putCharactersToIgnore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable) {
    this._charactersToIgnore.internalValue = value;
  }
  public resetCharactersToIgnore() {
    this._charactersToIgnore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersToIgnoreInput() {
    return this._charactersToIgnore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContext): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at [https://cloud.google.com/dlp/docs/infotypes-reference](https://cloud.google.com/dlp/docs/infotypes-reference) when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern '[A-Za-z0-9$-_]{1,64}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
  /**
  * Optional version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfig {
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey;
  /**
  * surrogate_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#surrogate_info_type GoogleDataLossPreventionDeidentifyTemplate#surrogate_info_type}
  */
  readonly surrogateInfoType?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToTerraform(struct!.cryptoKey),
    surrogate_info_type: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToTerraform(struct!.surrogateInfoType),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyList",
    },
    surrogate_info_type: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToHclTerraform(struct!.surrogateInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    if (this._surrogateInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateInfoType = this._surrogateInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
      this._surrogateInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
      this._surrogateInfoType.internalValue = value.surrogateInfoType;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }

  // surrogate_info_type - computed: false, optional: true, required: false
  private _surrogateInfoType = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference(this, "surrogate_info_type");
  public get surrogateInfoType() {
    return this._surrogateInfoType;
  }
  public putSurrogateInfoType(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType) {
    this._surrogateInfoType.internalValue = value;
  }
  public resetSurrogateInfoType() {
    this._surrogateInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateInfoTypeInput() {
    return this._surrogateInfoType.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfig {
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToTerraform(struct!.cryptoKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKey.internalValue = value.cryptoKey;
    }
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at [https://cloud.google.com/dlp/docs/infotypes-reference](https://cloud.google.com/dlp/docs/infotypes-reference) when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern '[A-Za-z0-9$-_]{1,64}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
  /**
  * Optional version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig {
  /**
  * Common alphabets. Possible values: ["FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED", "NUMERIC", "HEXADECIMAL", "UPPER_CASE_ALPHA_NUMERIC", "ALPHA_NUMERIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#common_alphabet GoogleDataLossPreventionDeidentifyTemplate#common_alphabet}
  */
  readonly commonAlphabet?: string;
  /**
  * This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range \[2, 95\]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is:
  * 
  * ''0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~'!@#$%^&*()_-+={[}]|:;"'<,>.?/''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#custom_alphabet GoogleDataLossPreventionDeidentifyTemplate#custom_alphabet}
  */
  readonly customAlphabet?: string;
  /**
  * The native way to select the alphabet. Must be in the range \[2, 95\].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#radix GoogleDataLossPreventionDeidentifyTemplate#radix}
  */
  readonly radix?: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey;
  /**
  * surrogate_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#surrogate_info_type GoogleDataLossPreventionDeidentifyTemplate#surrogate_info_type}
  */
  readonly surrogateInfoType?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_alphabet: cdktf.stringToTerraform(struct!.commonAlphabet),
    custom_alphabet: cdktf.stringToTerraform(struct!.customAlphabet),
    radix: cdktf.numberToTerraform(struct!.radix),
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToTerraform(struct!.cryptoKey),
    surrogate_info_type: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToTerraform(struct!.surrogateInfoType),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_alphabet: {
      value: cdktf.stringToHclTerraform(struct!.commonAlphabet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_alphabet: {
      value: cdktf.stringToHclTerraform(struct!.customAlphabet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radix: {
      value: cdktf.numberToHclTerraform(struct!.radix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyList",
    },
    surrogate_info_type: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToHclTerraform(struct!.surrogateInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAlphabet !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAlphabet = this._commonAlphabet;
    }
    if (this._customAlphabet !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAlphabet = this._customAlphabet;
    }
    if (this._radix !== undefined) {
      hasAnyValues = true;
      internalValueResult.radix = this._radix;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    if (this._surrogateInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateInfoType = this._surrogateInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAlphabet = undefined;
      this._customAlphabet = undefined;
      this._radix = undefined;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
      this._surrogateInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAlphabet = value.commonAlphabet;
      this._customAlphabet = value.customAlphabet;
      this._radix = value.radix;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
      this._surrogateInfoType.internalValue = value.surrogateInfoType;
    }
  }

  // common_alphabet - computed: false, optional: true, required: false
  private _commonAlphabet?: string; 
  public get commonAlphabet() {
    return this.getStringAttribute('common_alphabet');
  }
  public set commonAlphabet(value: string) {
    this._commonAlphabet = value;
  }
  public resetCommonAlphabet() {
    this._commonAlphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAlphabetInput() {
    return this._commonAlphabet;
  }

  // custom_alphabet - computed: false, optional: true, required: false
  private _customAlphabet?: string; 
  public get customAlphabet() {
    return this.getStringAttribute('custom_alphabet');
  }
  public set customAlphabet(value: string) {
    this._customAlphabet = value;
  }
  public resetCustomAlphabet() {
    this._customAlphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAlphabetInput() {
    return this._customAlphabet;
  }

  // radix - computed: false, optional: true, required: false
  private _radix?: number; 
  public get radix() {
    return this.getNumberAttribute('radix');
  }
  public set radix(value: number) {
    this._radix = value;
  }
  public resetRadix() {
    this._radix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radixInput() {
    return this._radix;
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }

  // surrogate_info_type - computed: false, optional: true, required: false
  private _surrogateInfoType = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference(this, "surrogate_info_type");
  public get surrogateInfoType() {
    return this._surrogateInfoType;
  }
  public putSurrogateInfoType(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType) {
    this._surrogateInfoType.internalValue = value;
  }
  public resetSurrogateInfoType() {
    this._surrogateInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateInfoTypeInput() {
    return this._surrogateInfoType.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContext): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfig {
  /**
  * For example, -5 means shift date to at most 5 days back in the past.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#lower_bound_days GoogleDataLossPreventionDeidentifyTemplate#lower_bound_days}
  */
  readonly lowerBoundDays: number;
  /**
  * Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction.
  * 
  * For example, 3 means shift date to at most 3 days into the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#upper_bound_days GoogleDataLossPreventionDeidentifyTemplate#upper_bound_days}
  */
  readonly upperBoundDays: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKey;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower_bound_days: cdktf.numberToTerraform(struct!.lowerBoundDays),
    upper_bound_days: cdktf.numberToTerraform(struct!.upperBoundDays),
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToTerraform(struct!.cryptoKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower_bound_days: {
      value: cdktf.numberToHclTerraform(struct!.lowerBoundDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_bound_days: {
      value: cdktf.numberToHclTerraform(struct!.upperBoundDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerBoundDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBoundDays = this._lowerBoundDays;
    }
    if (this._upperBoundDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBoundDays = this._upperBoundDays;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowerBoundDays = undefined;
      this._upperBoundDays = undefined;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lowerBoundDays = value.lowerBoundDays;
      this._upperBoundDays = value.upperBoundDays;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
    }
  }

  // lower_bound_days - computed: false, optional: false, required: true
  private _lowerBoundDays?: number; 
  public get lowerBoundDays() {
    return this.getNumberAttribute('lower_bound_days');
  }
  public set lowerBoundDays(value: number) {
    this._lowerBoundDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundDaysInput() {
    return this._lowerBoundDays;
  }

  // upper_bound_days - computed: false, optional: false, required: true
  private _upperBoundDays?: number; 
  public get upperBoundDays() {
    return this.getNumberAttribute('upper_bound_days');
  }
  public set upperBoundDays(value: number) {
    this._upperBoundDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundDaysInput() {
    return this._upperBoundDays;
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValue | undefined) {
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

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValue | undefined) {
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

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValue | undefined) {
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

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValue | undefined) {
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

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfig {
  /**
  * Size of each bucket (except for minimum and maximum buckets).
  * So if lower_bound = 10, upper_bound = 89, and bucketSize = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+.
  * Precision up to 2 decimals works.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#bucket_size GoogleDataLossPreventionDeidentifyTemplate#bucket_size}
  */
  readonly bucketSize: number;
  /**
  * lower_bound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#lower_bound GoogleDataLossPreventionDeidentifyTemplate#lower_bound}
  */
  readonly lowerBound: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound;
  /**
  * upper_bound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#upper_bound GoogleDataLossPreventionDeidentifyTemplate#upper_bound}
  */
  readonly upperBound: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_size: cdktf.numberToTerraform(struct!.bucketSize),
    lower_bound: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToTerraform(struct!.lowerBound),
    upper_bound: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToTerraform(struct!.upperBound),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.bucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lower_bound: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToHclTerraform(struct!.lowerBound),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundList",
    },
    upper_bound: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToHclTerraform(struct!.upperBound),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSize = this._bucketSize;
    }
    if (this._lowerBound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound?.internalValue;
    }
    if (this._upperBound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketSize = undefined;
      this._lowerBound.internalValue = undefined;
      this._upperBound.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketSize = value.bucketSize;
      this._lowerBound.internalValue = value.lowerBound;
      this._upperBound.internalValue = value.upperBound;
    }
  }

  // bucket_size - computed: false, optional: false, required: true
  private _bucketSize?: number; 
  public get bucketSize() {
    return this.getNumberAttribute('bucket_size');
  }
  public set bucketSize(value: number) {
    this._bucketSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSizeInput() {
    return this._bucketSize;
  }

  // lower_bound - computed: false, optional: false, required: true
  private _lowerBound = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference(this, "lower_bound");
  public get lowerBound() {
    return this._lowerBound;
  }
  public putLowerBound(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound) {
    this._lowerBound.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound.internalValue;
  }

  // upper_bound - computed: false, optional: false, required: true
  private _upperBound = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference(this, "upper_bound");
  public get upperBound() {
    return this._upperBound;
  }
  public putUpperBound(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound) {
    this._upperBound.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfig {
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue | undefined) {
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

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue | undefined) {
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

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValue {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfig {
  /**
  * new_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#new_value GoogleDataLossPreventionDeidentifyTemplate#new_value}
  */
  readonly newValue: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform(struct!.newValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueToHclTerraform(struct!.newValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValue = this._newValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newValue.internalValue = value.newValue;
    }
  }

  // new_value - computed: false, optional: false, required: true
  private _newValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference(this, "new_value");
  public get newValue() {
    return this._newValue;
  }
  public putNewValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigNewValue) {
    this._newValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueInput() {
    return this._newValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#words GoogleDataLossPreventionDeidentifyTemplate#words}
  */
  readonly words: string[];
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfig {
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#word_list GoogleDataLossPreventionDeidentifyTemplate#word_list}
  */
  readonly wordList?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    word_list: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToTerraform(struct!.wordList),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    word_list: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wordList.internalValue = value.wordList;
    }
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfig {
  /**
  * The part of the time to keep. Possible values: ["YEAR", "MONTH", "DAY_OF_MONTH", "DAY_OF_WEEK", "WEEK_OF_YEAR", "HOUR_OF_DAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#part_to_extract GoogleDataLossPreventionDeidentifyTemplate#part_to_extract}
  */
  readonly partToExtract?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    part_to_extract: cdktf.stringToTerraform(struct!.partToExtract),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    part_to_extract: {
      value: cdktf.stringToHclTerraform(struct!.partToExtract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partToExtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.partToExtract = this._partToExtract;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partToExtract = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partToExtract = value.partToExtract;
    }
  }

  // part_to_extract - computed: false, optional: true, required: false
  private _partToExtract?: string; 
  public get partToExtract() {
    return this.getStringAttribute('part_to_extract');
  }
  public set partToExtract(value: string) {
    this._partToExtract = value;
  }
  public resetPartToExtract() {
    this._partToExtract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partToExtractInput() {
    return this._partToExtract;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformation {
  /**
  * bucketing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#bucketing_config GoogleDataLossPreventionDeidentifyTemplate#bucketing_config}
  */
  readonly bucketingConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfig;
  /**
  * character_mask_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#character_mask_config GoogleDataLossPreventionDeidentifyTemplate#character_mask_config}
  */
  readonly characterMaskConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfig;
  /**
  * crypto_deterministic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_deterministic_config GoogleDataLossPreventionDeidentifyTemplate#crypto_deterministic_config}
  */
  readonly cryptoDeterministicConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfig;
  /**
  * crypto_hash_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_hash_config GoogleDataLossPreventionDeidentifyTemplate#crypto_hash_config}
  */
  readonly cryptoHashConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfig;
  /**
  * crypto_replace_ffx_fpe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_replace_ffx_fpe_config GoogleDataLossPreventionDeidentifyTemplate#crypto_replace_ffx_fpe_config}
  */
  readonly cryptoReplaceFfxFpeConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig;
  /**
  * date_shift_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_shift_config GoogleDataLossPreventionDeidentifyTemplate#date_shift_config}
  */
  readonly dateShiftConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfig;
  /**
  * fixed_size_bucketing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#fixed_size_bucketing_config GoogleDataLossPreventionDeidentifyTemplate#fixed_size_bucketing_config}
  */
  readonly fixedSizeBucketingConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfig;
  /**
  * redact_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#redact_config GoogleDataLossPreventionDeidentifyTemplate#redact_config}
  */
  readonly redactConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfig;
  /**
  * replace_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_config GoogleDataLossPreventionDeidentifyTemplate#replace_config}
  */
  readonly replaceConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfig;
  /**
  * replace_dictionary_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_dictionary_config GoogleDataLossPreventionDeidentifyTemplate#replace_dictionary_config}
  */
  readonly replaceDictionaryConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfig;
  /**
  * time_part_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_part_config GoogleDataLossPreventionDeidentifyTemplate#time_part_config}
  */
  readonly timePartConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfig;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucketing_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigToTerraform(struct!.bucketingConfig),
    character_mask_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform(struct!.characterMaskConfig),
    crypto_deterministic_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigToTerraform(struct!.cryptoDeterministicConfig),
    crypto_hash_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigToTerraform(struct!.cryptoHashConfig),
    crypto_replace_ffx_fpe_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToTerraform(struct!.cryptoReplaceFfxFpeConfig),
    date_shift_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigToTerraform(struct!.dateShiftConfig),
    fixed_size_bucketing_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigToTerraform(struct!.fixedSizeBucketingConfig),
    redact_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigToTerraform(struct!.redactConfig),
    replace_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigToTerraform(struct!.replaceConfig),
    replace_dictionary_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigToTerraform(struct!.replaceDictionaryConfig),
    time_part_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigToTerraform(struct!.timePartConfig),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucketing_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigToHclTerraform(struct!.bucketingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigList",
    },
    character_mask_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigToHclTerraform(struct!.characterMaskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigList",
    },
    crypto_deterministic_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigToHclTerraform(struct!.cryptoDeterministicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigList",
    },
    crypto_hash_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigToHclTerraform(struct!.cryptoHashConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigList",
    },
    crypto_replace_ffx_fpe_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToHclTerraform(struct!.cryptoReplaceFfxFpeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigList",
    },
    date_shift_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigToHclTerraform(struct!.dateShiftConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigList",
    },
    fixed_size_bucketing_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigToHclTerraform(struct!.fixedSizeBucketingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigList",
    },
    redact_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigToHclTerraform(struct!.redactConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigList",
    },
    replace_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigToHclTerraform(struct!.replaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigList",
    },
    replace_dictionary_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigToHclTerraform(struct!.replaceDictionaryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigList",
    },
    time_part_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigToHclTerraform(struct!.timePartConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketingConfig = this._bucketingConfig?.internalValue;
    }
    if (this._characterMaskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterMaskConfig = this._characterMaskConfig?.internalValue;
    }
    if (this._cryptoDeterministicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoDeterministicConfig = this._cryptoDeterministicConfig?.internalValue;
    }
    if (this._cryptoHashConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHashConfig = this._cryptoHashConfig?.internalValue;
    }
    if (this._cryptoReplaceFfxFpeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoReplaceFfxFpeConfig = this._cryptoReplaceFfxFpeConfig?.internalValue;
    }
    if (this._dateShiftConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateShiftConfig = this._dateShiftConfig?.internalValue;
    }
    if (this._fixedSizeBucketingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedSizeBucketingConfig = this._fixedSizeBucketingConfig?.internalValue;
    }
    if (this._redactConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactConfig = this._redactConfig?.internalValue;
    }
    if (this._replaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceConfig = this._replaceConfig?.internalValue;
    }
    if (this._replaceDictionaryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceDictionaryConfig = this._replaceDictionaryConfig?.internalValue;
    }
    if (this._timePartConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePartConfig = this._timePartConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketingConfig.internalValue = undefined;
      this._characterMaskConfig.internalValue = undefined;
      this._cryptoDeterministicConfig.internalValue = undefined;
      this._cryptoHashConfig.internalValue = undefined;
      this._cryptoReplaceFfxFpeConfig.internalValue = undefined;
      this._dateShiftConfig.internalValue = undefined;
      this._fixedSizeBucketingConfig.internalValue = undefined;
      this._redactConfig.internalValue = undefined;
      this._replaceConfig.internalValue = undefined;
      this._replaceDictionaryConfig.internalValue = undefined;
      this._timePartConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketingConfig.internalValue = value.bucketingConfig;
      this._characterMaskConfig.internalValue = value.characterMaskConfig;
      this._cryptoDeterministicConfig.internalValue = value.cryptoDeterministicConfig;
      this._cryptoHashConfig.internalValue = value.cryptoHashConfig;
      this._cryptoReplaceFfxFpeConfig.internalValue = value.cryptoReplaceFfxFpeConfig;
      this._dateShiftConfig.internalValue = value.dateShiftConfig;
      this._fixedSizeBucketingConfig.internalValue = value.fixedSizeBucketingConfig;
      this._redactConfig.internalValue = value.redactConfig;
      this._replaceConfig.internalValue = value.replaceConfig;
      this._replaceDictionaryConfig.internalValue = value.replaceDictionaryConfig;
      this._timePartConfig.internalValue = value.timePartConfig;
    }
  }

  // bucketing_config - computed: false, optional: true, required: false
  private _bucketingConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfigOutputReference(this, "bucketing_config");
  public get bucketingConfig() {
    return this._bucketingConfig;
  }
  public putBucketingConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationBucketingConfig) {
    this._bucketingConfig.internalValue = value;
  }
  public resetBucketingConfig() {
    this._bucketingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketingConfigInput() {
    return this._bucketingConfig.internalValue;
  }

  // character_mask_config - computed: false, optional: true, required: false
  private _characterMaskConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference(this, "character_mask_config");
  public get characterMaskConfig() {
    return this._characterMaskConfig;
  }
  public putCharacterMaskConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCharacterMaskConfig) {
    this._characterMaskConfig.internalValue = value;
  }
  public resetCharacterMaskConfig() {
    this._characterMaskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterMaskConfigInput() {
    return this._characterMaskConfig.internalValue;
  }

  // crypto_deterministic_config - computed: false, optional: true, required: false
  private _cryptoDeterministicConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference(this, "crypto_deterministic_config");
  public get cryptoDeterministicConfig() {
    return this._cryptoDeterministicConfig;
  }
  public putCryptoDeterministicConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoDeterministicConfig) {
    this._cryptoDeterministicConfig.internalValue = value;
  }
  public resetCryptoDeterministicConfig() {
    this._cryptoDeterministicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoDeterministicConfigInput() {
    return this._cryptoDeterministicConfig.internalValue;
  }

  // crypto_hash_config - computed: false, optional: true, required: false
  private _cryptoHashConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfigOutputReference(this, "crypto_hash_config");
  public get cryptoHashConfig() {
    return this._cryptoHashConfig;
  }
  public putCryptoHashConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoHashConfig) {
    this._cryptoHashConfig.internalValue = value;
  }
  public resetCryptoHashConfig() {
    this._cryptoHashConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHashConfigInput() {
    return this._cryptoHashConfig.internalValue;
  }

  // crypto_replace_ffx_fpe_config - computed: false, optional: true, required: false
  private _cryptoReplaceFfxFpeConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference(this, "crypto_replace_ffx_fpe_config");
  public get cryptoReplaceFfxFpeConfig() {
    return this._cryptoReplaceFfxFpeConfig;
  }
  public putCryptoReplaceFfxFpeConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig) {
    this._cryptoReplaceFfxFpeConfig.internalValue = value;
  }
  public resetCryptoReplaceFfxFpeConfig() {
    this._cryptoReplaceFfxFpeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoReplaceFfxFpeConfigInput() {
    return this._cryptoReplaceFfxFpeConfig.internalValue;
  }

  // date_shift_config - computed: false, optional: true, required: false
  private _dateShiftConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfigOutputReference(this, "date_shift_config");
  public get dateShiftConfig() {
    return this._dateShiftConfig;
  }
  public putDateShiftConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationDateShiftConfig) {
    this._dateShiftConfig.internalValue = value;
  }
  public resetDateShiftConfig() {
    this._dateShiftConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateShiftConfigInput() {
    return this._dateShiftConfig.internalValue;
  }

  // fixed_size_bucketing_config - computed: false, optional: true, required: false
  private _fixedSizeBucketingConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference(this, "fixed_size_bucketing_config");
  public get fixedSizeBucketingConfig() {
    return this._fixedSizeBucketingConfig;
  }
  public putFixedSizeBucketingConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationFixedSizeBucketingConfig) {
    this._fixedSizeBucketingConfig.internalValue = value;
  }
  public resetFixedSizeBucketingConfig() {
    this._fixedSizeBucketingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSizeBucketingConfigInput() {
    return this._fixedSizeBucketingConfig.internalValue;
  }

  // redact_config - computed: false, optional: true, required: false
  private _redactConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfigOutputReference(this, "redact_config");
  public get redactConfig() {
    return this._redactConfig;
  }
  public putRedactConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationRedactConfig) {
    this._redactConfig.internalValue = value;
  }
  public resetRedactConfig() {
    this._redactConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactConfigInput() {
    return this._redactConfig.internalValue;
  }

  // replace_config - computed: false, optional: true, required: false
  private _replaceConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfigOutputReference(this, "replace_config");
  public get replaceConfig() {
    return this._replaceConfig;
  }
  public putReplaceConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceConfig) {
    this._replaceConfig.internalValue = value;
  }
  public resetReplaceConfig() {
    this._replaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceConfigInput() {
    return this._replaceConfig.internalValue;
  }

  // replace_dictionary_config - computed: false, optional: true, required: false
  private _replaceDictionaryConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference(this, "replace_dictionary_config");
  public get replaceDictionaryConfig() {
    return this._replaceDictionaryConfig;
  }
  public putReplaceDictionaryConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationReplaceDictionaryConfig) {
    this._replaceDictionaryConfig.internalValue = value;
  }
  public resetReplaceDictionaryConfig() {
    this._replaceDictionaryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceDictionaryConfigInput() {
    return this._replaceDictionaryConfig.internalValue;
  }

  // time_part_config - computed: false, optional: true, required: false
  private _timePartConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfigOutputReference(this, "time_part_config");
  public get timePartConfig() {
    return this._timePartConfig;
  }
  public putTimePartConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationTimePartConfig) {
    this._timePartConfig.internalValue = value;
  }
  public resetTimePartConfig() {
    this._timePartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartConfigInput() {
    return this._timePartConfig.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#condition GoogleDataLossPreventionDeidentifyTemplate#condition}
  */
  readonly condition?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#fields GoogleDataLossPreventionDeidentifyTemplate#fields}
  */
  readonly fields: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields[] | cdktf.IResolvable;
  /**
  * info_type_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#info_type_transformations GoogleDataLossPreventionDeidentifyTemplate#info_type_transformations}
  */
  readonly infoTypeTransformations?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformations;
  /**
  * primitive_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#primitive_transformation GoogleDataLossPreventionDeidentifyTemplate#primitive_transformation}
  */
  readonly primitiveTransformation?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformation;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionToTerraform(struct!.condition),
    fields: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsToTerraform, true)(struct!.fields),
    info_type_transformations: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsToTerraform(struct!.infoTypeTransformations),
    primitive_transformation: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationToTerraform(struct!.primitiveTransformation),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionList",
    },
    fields: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsList",
    },
    info_type_transformations: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsToHclTerraform(struct!.infoTypeTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsList",
    },
    primitive_transformation: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationToHclTerraform(struct!.primitiveTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._infoTypeTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeTransformations = this._infoTypeTransformations?.internalValue;
    }
    if (this._primitiveTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primitiveTransformation = this._primitiveTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._fields.internalValue = undefined;
      this._infoTypeTransformations.internalValue = undefined;
      this._primitiveTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._fields.internalValue = value.fields;
      this._infoTypeTransformations.internalValue = value.infoTypeTransformations;
      this._primitiveTransformation.internalValue = value.primitiveTransformation;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // info_type_transformations - computed: false, optional: true, required: false
  private _infoTypeTransformations = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsOutputReference(this, "info_type_transformations");
  public get infoTypeTransformations() {
    return this._infoTypeTransformations;
  }
  public putInfoTypeTransformations(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformations) {
    this._infoTypeTransformations.internalValue = value;
  }
  public resetInfoTypeTransformations() {
    this._infoTypeTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeTransformationsInput() {
    return this._infoTypeTransformations.internalValue;
  }

  // primitive_transformation - computed: false, optional: true, required: false
  private _primitiveTransformation = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformationOutputReference(this, "primitive_transformation");
  public get primitiveTransformation() {
    return this._primitiveTransformation;
  }
  public putPrimitiveTransformation(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsPrimitiveTransformation) {
    this._primitiveTransformation.internalValue = value;
  }
  public resetPrimitiveTransformation() {
    this._primitiveTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primitiveTransformationInput() {
    return this._primitiveTransformation.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsField {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsField): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValue | undefined) {
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

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValue): any {
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


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValue | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValue | undefined) {
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

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValue {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions {
  /**
  * Operator used to compare the field or infoType to the value. Possible values: ["EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN", "LESS_THAN", "GREATER_THAN_OR_EQUALS", "LESS_THAN_OR_EQUALS", "EXISTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#operator GoogleDataLossPreventionDeidentifyTemplate#operator}
  */
  readonly operator: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#field GoogleDataLossPreventionDeidentifyTemplate#field}
  */
  readonly field: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsField;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#value GoogleDataLossPreventionDeidentifyTemplate#value}
  */
  readonly value?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    field: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldToTerraform(struct!.field),
    value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueToTerraform(struct!.value),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions | cdktf.IResolvable): any {
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
    field: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldList",
    },
    value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._field.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._field.internalValue = value.field;
      this._value.internalValue = value.value;
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

  // field - computed: false, optional: false, required: true
  private _field = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsField) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditions {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#conditions GoogleDataLossPreventionDeidentifyTemplate#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressions {
  /**
  * The operator to apply to the result of conditions. Default and currently only supported value is AND. Default value: "AND" Possible values: ["AND"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#logical_operator GoogleDataLossPreventionDeidentifyTemplate#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#conditions GoogleDataLossPreventionDeidentifyTemplate#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditions;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
    conditions: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsToTerraform(struct!.conditions),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_operator: {
      value: cdktf.stringToHclTerraform(struct!.logicalOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalOperator = this._logicalOperator;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logicalOperator = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logicalOperator = value.logicalOperator;
      this._conditions.internalValue = value.conditions;
    }
  }

  // logical_operator - computed: false, optional: true, required: false
  private _logicalOperator?: string; 
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
  public set logicalOperator(value: string) {
    this._logicalOperator = value;
  }
  public resetLogicalOperator() {
    this._logicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOperatorInput() {
    return this._logicalOperator;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsCondition {
  /**
  * expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#expressions GoogleDataLossPreventionDeidentifyTemplate#expressions}
  */
  readonly expressions?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressions;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsToTerraform(struct!.expressions),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsToHclTerraform(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressionsOutputReference(this, "expressions");
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionExpressions) {
    this._expressions.internalValue = value;
  }
  public resetExpressions() {
    this._expressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#condition GoogleDataLossPreventionDeidentifyTemplate#condition}
  */
  readonly condition?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsCondition;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionToTerraform(struct!.condition),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformations {
  /**
  * field_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#field_transformations GoogleDataLossPreventionDeidentifyTemplate#field_transformations}
  */
  readonly fieldTransformations?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations[] | cdktf.IResolvable;
  /**
  * record_suppressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#record_suppressions GoogleDataLossPreventionDeidentifyTemplate#record_suppressions}
  */
  readonly recordSuppressions?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_transformations: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsToTerraform, true)(struct!.fieldTransformations),
    record_suppressions: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsToTerraform, true)(struct!.recordSuppressions),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_transformations: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsToHclTerraform, true)(struct!.fieldTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsList",
    },
    record_suppressions: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsToHclTerraform, true)(struct!.recordSuppressions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTransformations = this._fieldTransformations?.internalValue;
    }
    if (this._recordSuppressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSuppressions = this._recordSuppressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldTransformations.internalValue = undefined;
      this._recordSuppressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldTransformations.internalValue = value.fieldTransformations;
      this._recordSuppressions.internalValue = value.recordSuppressions;
    }
  }

  // field_transformations - computed: false, optional: true, required: false
  private _fieldTransformations = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsList(this, "field_transformations", false);
  public get fieldTransformations() {
    return this._fieldTransformations;
  }
  public putFieldTransformations(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformations[] | cdktf.IResolvable) {
    this._fieldTransformations.internalValue = value;
  }
  public resetFieldTransformations() {
    this._fieldTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTransformationsInput() {
    return this._fieldTransformations.internalValue;
  }

  // record_suppressions - computed: false, optional: true, required: false
  private _recordSuppressions = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionsList(this, "record_suppressions", false);
  public get recordSuppressions() {
    return this._recordSuppressions;
  }
  public putRecordSuppressions(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressions[] | cdktf.IResolvable) {
    this._recordSuppressions.internalValue = value;
  }
  public resetRecordSuppressions() {
    this._recordSuppressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSuppressionsInput() {
    return this._recordSuppressions.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfig {
  /**
  * image_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#image_transformations GoogleDataLossPreventionDeidentifyTemplate#image_transformations}
  */
  readonly imageTransformations?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations;
  /**
  * info_type_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#info_type_transformations GoogleDataLossPreventionDeidentifyTemplate#info_type_transformations}
  */
  readonly infoTypeTransformations?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations;
  /**
  * record_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#record_transformations GoogleDataLossPreventionDeidentifyTemplate#record_transformations}
  */
  readonly recordTransformations?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformations;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_transformations: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsToTerraform(struct!.imageTransformations),
    info_type_transformations: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToTerraform(struct!.infoTypeTransformations),
    record_transformations: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsToTerraform(struct!.recordTransformations),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_transformations: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsToHclTerraform(struct!.imageTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsList",
    },
    info_type_transformations: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToHclTerraform(struct!.infoTypeTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsList",
    },
    record_transformations: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsToHclTerraform(struct!.recordTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTransformations = this._imageTransformations?.internalValue;
    }
    if (this._infoTypeTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeTransformations = this._infoTypeTransformations?.internalValue;
    }
    if (this._recordTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTransformations = this._recordTransformations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageTransformations.internalValue = undefined;
      this._infoTypeTransformations.internalValue = undefined;
      this._recordTransformations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageTransformations.internalValue = value.imageTransformations;
      this._infoTypeTransformations.internalValue = value.infoTypeTransformations;
      this._recordTransformations.internalValue = value.recordTransformations;
    }
  }

  // image_transformations - computed: false, optional: true, required: false
  private _imageTransformations = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsOutputReference(this, "image_transformations");
  public get imageTransformations() {
    return this._imageTransformations;
  }
  public putImageTransformations(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations) {
    this._imageTransformations.internalValue = value;
  }
  public resetImageTransformations() {
    this._imageTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTransformationsInput() {
    return this._imageTransformations.internalValue;
  }

  // info_type_transformations - computed: false, optional: true, required: false
  private _infoTypeTransformations = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsOutputReference(this, "info_type_transformations");
  public get infoTypeTransformations() {
    return this._infoTypeTransformations;
  }
  public putInfoTypeTransformations(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations) {
    this._infoTypeTransformations.internalValue = value;
  }
  public resetInfoTypeTransformations() {
    this._infoTypeTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeTransformationsInput() {
    return this._infoTypeTransformations.internalValue;
  }

  // record_transformations - computed: false, optional: true, required: false
  private _recordTransformations = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsOutputReference(this, "record_transformations");
  public get recordTransformations() {
    return this._recordTransformations;
  }
  public putRecordTransformations(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformations) {
    this._recordTransformations.internalValue = value;
  }
  public resetRecordTransformations() {
    this._recordTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTransformationsInput() {
    return this._recordTransformations.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#create GoogleDataLossPreventionDeidentifyTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#delete GoogleDataLossPreventionDeidentifyTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_data_loss_prevention_deidentify_template#update GoogleDataLossPreventionDeidentifyTemplate#update}
  */
  readonly update?: string;
}

export function googleDataLossPreventionDeidentifyTemplateTimeoutsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateTimeouts | cdktf.IResolvable): any {
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


export function googleDataLossPreventionDeidentifyTemplateTimeoutsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataLossPreventionDeidentifyTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateTimeouts | cdktf.IResolvable | undefined) {
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
