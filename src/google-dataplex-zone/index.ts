/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataplexZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Description of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#description GoogleDataplexZone#description}
  */
  readonly description?: string;
  /**
  * Optional. User friendly display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#display_name GoogleDataplexZone#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. User defined labels for the zone.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#labels GoogleDataplexZone#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The lake for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#lake GoogleDataplexZone#lake}
  */
  readonly lake: string;
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#location GoogleDataplexZone#location}
  */
  readonly location: string;
  /**
  * The name of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#name GoogleDataplexZone#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#project GoogleDataplexZone#project}
  */
  readonly project?: string;
  /**
  * Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#type GoogleDataplexZone#type}
  */
  readonly type: string;
  /**
  * discovery_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#discovery_spec GoogleDataplexZone#discovery_spec}
  */
  readonly discoverySpec: GoogleDataplexZoneDiscoverySpec;
  /**
  * resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#resource_spec GoogleDataplexZone#resource_spec}
  */
  readonly resourceSpec: GoogleDataplexZoneResourceSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#timeouts GoogleDataplexZone#timeouts}
  */
  readonly timeouts?: GoogleDataplexZoneTimeouts;
}
export interface GoogleDataplexZoneAssetStatus {
}

export function googleDataplexZoneAssetStatusToTerraform(struct?: GoogleDataplexZoneAssetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataplexZoneAssetStatusToHclTerraform(struct?: GoogleDataplexZoneAssetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataplexZoneAssetStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataplexZoneAssetStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexZoneAssetStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_assets - computed: true, optional: false, required: false
  public get activeAssets() {
    return this.getNumberAttribute('active_assets');
  }

  // security_policy_applying_assets - computed: true, optional: false, required: false
  public get securityPolicyApplyingAssets() {
    return this.getNumberAttribute('security_policy_applying_assets');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleDataplexZoneAssetStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataplexZoneAssetStatusOutputReference {
    return new GoogleDataplexZoneAssetStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataplexZoneDiscoverySpecCsvOptions {
  /**
  * Optional. The delimiter being used to separate values. This defaults to ','.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#delimiter GoogleDataplexZone#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}
  */
  readonly disableTypeInference?: boolean | cdktf.IResolvable;
  /**
  * Optional. The character encoding of the data. The default is UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}
  */
  readonly encoding?: string;
  /**
  * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#header_rows GoogleDataplexZone#header_rows}
  */
  readonly headerRows?: number;
}

export function googleDataplexZoneDiscoverySpecCsvOptionsToTerraform(struct?: GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference | GoogleDataplexZoneDiscoverySpecCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    disable_type_inference: cdktf.booleanToTerraform(struct!.disableTypeInference),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    header_rows: cdktf.numberToTerraform(struct!.headerRows),
  }
}


export function googleDataplexZoneDiscoverySpecCsvOptionsToHclTerraform(struct?: GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference | GoogleDataplexZoneDiscoverySpecCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_type_inference: {
      value: cdktf.booleanToHclTerraform(struct!.disableTypeInference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_rows: {
      value: cdktf.numberToHclTerraform(struct!.headerRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexZoneDiscoverySpecCsvOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._disableTypeInference !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTypeInference = this._disableTypeInference;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._headerRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRows = this._headerRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexZoneDiscoverySpecCsvOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._disableTypeInference = undefined;
      this._encoding = undefined;
      this._headerRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._disableTypeInference = value.disableTypeInference;
      this._encoding = value.encoding;
      this._headerRows = value.headerRows;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // disable_type_inference - computed: false, optional: true, required: false
  private _disableTypeInference?: boolean | cdktf.IResolvable; 
  public get disableTypeInference() {
    return this.getBooleanAttribute('disable_type_inference');
  }
  public set disableTypeInference(value: boolean | cdktf.IResolvable) {
    this._disableTypeInference = value;
  }
  public resetDisableTypeInference() {
    this._disableTypeInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTypeInferenceInput() {
    return this._disableTypeInference;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // header_rows - computed: false, optional: true, required: false
  private _headerRows?: number; 
  public get headerRows() {
    return this.getNumberAttribute('header_rows');
  }
  public set headerRows(value: number) {
    this._headerRows = value;
  }
  public resetHeaderRows() {
    this._headerRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRowsInput() {
    return this._headerRows;
  }
}
export interface GoogleDataplexZoneDiscoverySpecJsonOptions {
  /**
  * Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}
  */
  readonly disableTypeInference?: boolean | cdktf.IResolvable;
  /**
  * Optional. The character encoding of the data. The default is UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}
  */
  readonly encoding?: string;
}

export function googleDataplexZoneDiscoverySpecJsonOptionsToTerraform(struct?: GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference | GoogleDataplexZoneDiscoverySpecJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_type_inference: cdktf.booleanToTerraform(struct!.disableTypeInference),
    encoding: cdktf.stringToTerraform(struct!.encoding),
  }
}


export function googleDataplexZoneDiscoverySpecJsonOptionsToHclTerraform(struct?: GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference | GoogleDataplexZoneDiscoverySpecJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_type_inference: {
      value: cdktf.booleanToHclTerraform(struct!.disableTypeInference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexZoneDiscoverySpecJsonOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableTypeInference !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTypeInference = this._disableTypeInference;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexZoneDiscoverySpecJsonOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableTypeInference = undefined;
      this._encoding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableTypeInference = value.disableTypeInference;
      this._encoding = value.encoding;
    }
  }

  // disable_type_inference - computed: false, optional: true, required: false
  private _disableTypeInference?: boolean | cdktf.IResolvable; 
  public get disableTypeInference() {
    return this.getBooleanAttribute('disable_type_inference');
  }
  public set disableTypeInference(value: boolean | cdktf.IResolvable) {
    this._disableTypeInference = value;
  }
  public resetDisableTypeInference() {
    this._disableTypeInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTypeInferenceInput() {
    return this._disableTypeInference;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }
}
export interface GoogleDataplexZoneDiscoverySpec {
  /**
  * Required. Whether discovery is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#enabled GoogleDataplexZone#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#exclude_patterns GoogleDataplexZone#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#include_patterns GoogleDataplexZone#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#schedule GoogleDataplexZone#schedule}
  */
  readonly schedule?: string;
  /**
  * csv_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#csv_options GoogleDataplexZone#csv_options}
  */
  readonly csvOptions?: GoogleDataplexZoneDiscoverySpecCsvOptions;
  /**
  * json_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#json_options GoogleDataplexZone#json_options}
  */
  readonly jsonOptions?: GoogleDataplexZoneDiscoverySpecJsonOptions;
}

export function googleDataplexZoneDiscoverySpecToTerraform(struct?: GoogleDataplexZoneDiscoverySpecOutputReference | GoogleDataplexZoneDiscoverySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    csv_options: googleDataplexZoneDiscoverySpecCsvOptionsToTerraform(struct!.csvOptions),
    json_options: googleDataplexZoneDiscoverySpecJsonOptionsToTerraform(struct!.jsonOptions),
  }
}


export function googleDataplexZoneDiscoverySpecToHclTerraform(struct?: GoogleDataplexZoneDiscoverySpecOutputReference | GoogleDataplexZoneDiscoverySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csv_options: {
      value: googleDataplexZoneDiscoverySpecCsvOptionsToHclTerraform(struct!.csvOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexZoneDiscoverySpecCsvOptionsList",
    },
    json_options: {
      value: googleDataplexZoneDiscoverySpecJsonOptionsToHclTerraform(struct!.jsonOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexZoneDiscoverySpecJsonOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexZoneDiscoverySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexZoneDiscoverySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._csvOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvOptions = this._csvOptions?.internalValue;
    }
    if (this._jsonOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonOptions = this._jsonOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexZoneDiscoverySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._schedule = undefined;
      this._csvOptions.internalValue = undefined;
      this._jsonOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._schedule = value.schedule;
      this._csvOptions.internalValue = value.csvOptions;
      this._jsonOptions.internalValue = value.jsonOptions;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return this.getListAttribute('exclude_patterns');
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return this.getListAttribute('include_patterns');
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // schedule - computed: true, optional: true, required: false
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

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions = new GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: GoogleDataplexZoneDiscoverySpecCsvOptions) {
    this._csvOptions.internalValue = value;
  }
  public resetCsvOptions() {
    this._csvOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvOptionsInput() {
    return this._csvOptions.internalValue;
  }

  // json_options - computed: false, optional: true, required: false
  private _jsonOptions = new GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference(this, "json_options");
  public get jsonOptions() {
    return this._jsonOptions;
  }
  public putJsonOptions(value: GoogleDataplexZoneDiscoverySpecJsonOptions) {
    this._jsonOptions.internalValue = value;
  }
  public resetJsonOptions() {
    this._jsonOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonOptionsInput() {
    return this._jsonOptions.internalValue;
  }
}
export interface GoogleDataplexZoneResourceSpec {
  /**
  * Required. Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#location_type GoogleDataplexZone#location_type}
  */
  readonly locationType: string;
}

export function googleDataplexZoneResourceSpecToTerraform(struct?: GoogleDataplexZoneResourceSpecOutputReference | GoogleDataplexZoneResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_type: cdktf.stringToTerraform(struct!.locationType),
  }
}


export function googleDataplexZoneResourceSpecToHclTerraform(struct?: GoogleDataplexZoneResourceSpecOutputReference | GoogleDataplexZoneResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_type: {
      value: cdktf.stringToHclTerraform(struct!.locationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexZoneResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexZoneResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationType = this._locationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexZoneResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationType = value.locationType;
    }
  }

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }
}
export interface GoogleDataplexZoneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}
  */
  readonly update?: string;
}

export function googleDataplexZoneTimeoutsToTerraform(struct?: GoogleDataplexZoneTimeouts | cdktf.IResolvable): any {
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


export function googleDataplexZoneTimeoutsToHclTerraform(struct?: GoogleDataplexZoneTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataplexZoneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataplexZoneTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataplexZoneTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone google_dataplex_zone}
*/
export class GoogleDataplexZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataplexZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataplexZone to import
  * @param importFromId The id of the existing GoogleDataplexZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataplexZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dataplex_zone google_dataplex_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataplexZoneConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataplexZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_zone',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.40.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._lake = config.lake;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
    this._discoverySpec.internalValue = config.discoverySpec;
    this._resourceSpec.internalValue = config.resourceSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_status - computed: true, optional: false, required: false
  private _assetStatus = new GoogleDataplexZoneAssetStatusList(this, "asset_status", false);
  public get assetStatus() {
    return this._assetStatus;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // lake - computed: false, optional: false, required: true
  private _lake?: string; 
  public get lake() {
    return this.getStringAttribute('lake');
  }
  public set lake(value: string) {
    this._lake = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeInput() {
    return this._lake;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // discovery_spec - computed: false, optional: false, required: true
  private _discoverySpec = new GoogleDataplexZoneDiscoverySpecOutputReference(this, "discovery_spec");
  public get discoverySpec() {
    return this._discoverySpec;
  }
  public putDiscoverySpec(value: GoogleDataplexZoneDiscoverySpec) {
    this._discoverySpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverySpecInput() {
    return this._discoverySpec.internalValue;
  }

  // resource_spec - computed: false, optional: false, required: true
  private _resourceSpec = new GoogleDataplexZoneResourceSpecOutputReference(this, "resource_spec");
  public get resourceSpec() {
    return this._resourceSpec;
  }
  public putResourceSpec(value: GoogleDataplexZoneResourceSpec) {
    this._resourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecInput() {
    return this._resourceSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataplexZoneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataplexZoneTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lake: cdktf.stringToTerraform(this._lake),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      discovery_spec: googleDataplexZoneDiscoverySpecToTerraform(this._discoverySpec.internalValue),
      resource_spec: googleDataplexZoneResourceSpecToTerraform(this._resourceSpec.internalValue),
      timeouts: googleDataplexZoneTimeoutsToTerraform(this._timeouts.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      lake: {
        value: cdktf.stringToHclTerraform(this._lake),
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
      discovery_spec: {
        value: googleDataplexZoneDiscoverySpecToHclTerraform(this._discoverySpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexZoneDiscoverySpecList",
      },
      resource_spec: {
        value: googleDataplexZoneResourceSpecToHclTerraform(this._resourceSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexZoneResourceSpecList",
      },
      timeouts: {
        value: googleDataplexZoneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataplexZoneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
