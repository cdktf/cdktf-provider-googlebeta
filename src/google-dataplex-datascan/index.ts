/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataplexDatascanConfig extends cdktf.TerraformMetaArguments {
  /**
  * DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#data_scan_id GoogleDataplexDatascan#data_scan_id}
  */
  readonly dataScanId: string;
  /**
  * Description of the scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}
  */
  readonly description?: string;
  /**
  * User friendly display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#display_name GoogleDataplexDatascan#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the scan. A list of key->value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#labels GoogleDataplexDatascan#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the data scan should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#location GoogleDataplexDatascan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}
  */
  readonly project?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#data GoogleDataplexDatascan#data}
  */
  readonly data: GoogleDataplexDatascanData;
  /**
  * data_profile_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#data_profile_spec GoogleDataplexDatascan#data_profile_spec}
  */
  readonly dataProfileSpec?: GoogleDataplexDatascanDataProfileSpec;
  /**
  * data_quality_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#data_quality_spec GoogleDataplexDatascan#data_quality_spec}
  */
  readonly dataQualitySpec?: GoogleDataplexDatascanDataQualitySpec;
  /**
  * execution_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#execution_spec GoogleDataplexDatascan#execution_spec}
  */
  readonly executionSpec: GoogleDataplexDatascanExecutionSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#timeouts GoogleDataplexDatascan#timeouts}
  */
  readonly timeouts?: GoogleDataplexDatascanTimeouts;
}
export interface GoogleDataplexDatascanExecutionStatus {
}

export function googleDataplexDatascanExecutionStatusToTerraform(struct?: GoogleDataplexDatascanExecutionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataplexDatascanExecutionStatusToHclTerraform(struct?: GoogleDataplexDatascanExecutionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataplexDatascanExecutionStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataplexDatascanExecutionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanExecutionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_job_end_time - computed: true, optional: false, required: false
  public get latestJobEndTime() {
    return this.getStringAttribute('latest_job_end_time');
  }

  // latest_job_start_time - computed: true, optional: false, required: false
  public get latestJobStartTime() {
    return this.getStringAttribute('latest_job_start_time');
  }
}

export class GoogleDataplexDatascanExecutionStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataplexDatascanExecutionStatusOutputReference {
    return new GoogleDataplexDatascanExecutionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataplexDatascanData {
  /**
  * The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#entity GoogleDataplexDatascan#entity}
  */
  readonly entity?: string;
  /**
  * The service-qualified full resource name of the cloud resource for a DataScan job to scan against. The field could be:
  * (Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#resource GoogleDataplexDatascan#resource}
  */
  readonly resource?: string;
}

export function googleDataplexDatascanDataToTerraform(struct?: GoogleDataplexDatascanDataOutputReference | GoogleDataplexDatascanData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity: cdktf.stringToTerraform(struct!.entity),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function googleDataplexDatascanDataToHclTerraform(struct?: GoogleDataplexDatascanDataOutputReference | GoogleDataplexDatascanData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity: {
      value: cdktf.stringToHclTerraform(struct!.entity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entity !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entity = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entity = value.entity;
      this._resource = value.resource;
    }
  }

  // entity - computed: false, optional: true, required: false
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  public resetEntity() {
    this._entity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface GoogleDataplexDatascanDataProfileSpecExcludeFields {
  /**
  * Expected input is a list of fully qualified names of fields as in the schema.
  * Only top-level field names for nested fields are supported.
  * For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}
  */
  readonly fieldNames?: string[];
}

export function googleDataplexDatascanDataProfileSpecExcludeFieldsToTerraform(struct?: GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference | GoogleDataplexDatascanDataProfileSpecExcludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldNames),
  }
}


export function googleDataplexDatascanDataProfileSpecExcludeFieldsToHclTerraform(struct?: GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference | GoogleDataplexDatascanDataProfileSpecExcludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataProfileSpecExcludeFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNames = this._fieldNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataProfileSpecExcludeFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldNames = value.fieldNames;
    }
  }

  // field_names - computed: false, optional: true, required: false
  private _fieldNames?: string[]; 
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }
  public set fieldNames(value: string[]) {
    this._fieldNames = value;
  }
  public resetFieldNames() {
    this._fieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNamesInput() {
    return this._fieldNames;
  }
}
export interface GoogleDataplexDatascanDataProfileSpecIncludeFields {
  /**
  * Expected input is a list of fully qualified names of fields as in the schema.
  * Only top-level field names for nested fields are supported.
  * For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}
  */
  readonly fieldNames?: string[];
}

export function googleDataplexDatascanDataProfileSpecIncludeFieldsToTerraform(struct?: GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference | GoogleDataplexDatascanDataProfileSpecIncludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldNames),
  }
}


export function googleDataplexDatascanDataProfileSpecIncludeFieldsToHclTerraform(struct?: GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference | GoogleDataplexDatascanDataProfileSpecIncludeFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataProfileSpecIncludeFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNames = this._fieldNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataProfileSpecIncludeFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldNames = value.fieldNames;
    }
  }

  // field_names - computed: false, optional: true, required: false
  private _fieldNames?: string[]; 
  public get fieldNames() {
    return this.getListAttribute('field_names');
  }
  public set fieldNames(value: string[]) {
    this._fieldNames = value;
  }
  public resetFieldNames() {
    this._fieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNamesInput() {
    return this._fieldNames;
  }
}
export interface GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport {
  /**
  * The BigQuery table to export DataProfileScan results to.
  * Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}
  */
  readonly resultsTable?: string;
}

export function googleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToTerraform(struct?: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference | GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    results_table: cdktf.stringToTerraform(struct!.resultsTable),
  }
}


export function googleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToHclTerraform(struct?: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference | GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    results_table: {
      value: cdktf.stringToHclTerraform(struct!.resultsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resultsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultsTable = this._resultsTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resultsTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resultsTable = value.resultsTable;
    }
  }

  // results_table - computed: false, optional: true, required: false
  private _resultsTable?: string; 
  public get resultsTable() {
    return this.getStringAttribute('results_table');
  }
  public set resultsTable(value: string) {
    this._resultsTable = value;
  }
  public resetResultsTable() {
    this._resultsTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsTableInput() {
    return this._resultsTable;
  }
}
export interface GoogleDataplexDatascanDataProfileSpecPostScanActions {
  /**
  * bigquery_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}
  */
  readonly bigqueryExport?: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport;
}

export function googleDataplexDatascanDataProfileSpecPostScanActionsToTerraform(struct?: GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference | GoogleDataplexDatascanDataProfileSpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_export: googleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToTerraform(struct!.bigqueryExport),
  }
}


export function googleDataplexDatascanDataProfileSpecPostScanActionsToHclTerraform(struct?: GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference | GoogleDataplexDatascanDataProfileSpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_export: {
      value: googleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportToHclTerraform(struct!.bigqueryExport),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataProfileSpecPostScanActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryExport = this._bigqueryExport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataProfileSpecPostScanActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryExport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryExport.internalValue = value.bigqueryExport;
    }
  }

  // bigquery_export - computed: false, optional: true, required: false
  private _bigqueryExport = new GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference(this, "bigquery_export");
  public get bigqueryExport() {
    return this._bigqueryExport;
  }
  public putBigqueryExport(value: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport) {
    this._bigqueryExport.internalValue = value;
  }
  public resetBigqueryExport() {
    this._bigqueryExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryExportInput() {
    return this._bigqueryExport.internalValue;
  }
}
export interface GoogleDataplexDatascanDataProfileSpec {
  /**
  * A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * The percentage of the records to be selected from the dataset for DataScan.
  * Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
  * Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}
  */
  readonly samplingPercent?: number;
  /**
  * exclude_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#exclude_fields GoogleDataplexDatascan#exclude_fields}
  */
  readonly excludeFields?: GoogleDataplexDatascanDataProfileSpecExcludeFields;
  /**
  * include_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#include_fields GoogleDataplexDatascan#include_fields}
  */
  readonly includeFields?: GoogleDataplexDatascanDataProfileSpecIncludeFields;
  /**
  * post_scan_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}
  */
  readonly postScanActions?: GoogleDataplexDatascanDataProfileSpecPostScanActions;
}

export function googleDataplexDatascanDataProfileSpecToTerraform(struct?: GoogleDataplexDatascanDataProfileSpecOutputReference | GoogleDataplexDatascanDataProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_filter: cdktf.stringToTerraform(struct!.rowFilter),
    sampling_percent: cdktf.numberToTerraform(struct!.samplingPercent),
    exclude_fields: googleDataplexDatascanDataProfileSpecExcludeFieldsToTerraform(struct!.excludeFields),
    include_fields: googleDataplexDatascanDataProfileSpecIncludeFieldsToTerraform(struct!.includeFields),
    post_scan_actions: googleDataplexDatascanDataProfileSpecPostScanActionsToTerraform(struct!.postScanActions),
  }
}


export function googleDataplexDatascanDataProfileSpecToHclTerraform(struct?: GoogleDataplexDatascanDataProfileSpecOutputReference | GoogleDataplexDatascanDataProfileSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    row_filter: {
      value: cdktf.stringToHclTerraform(struct!.rowFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_percent: {
      value: cdktf.numberToHclTerraform(struct!.samplingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_fields: {
      value: googleDataplexDatascanDataProfileSpecExcludeFieldsToHclTerraform(struct!.excludeFields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataProfileSpecExcludeFieldsList",
    },
    include_fields: {
      value: googleDataplexDatascanDataProfileSpecIncludeFieldsToHclTerraform(struct!.includeFields),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataProfileSpecIncludeFieldsList",
    },
    post_scan_actions: {
      value: googleDataplexDatascanDataProfileSpecPostScanActionsToHclTerraform(struct!.postScanActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataProfileSpecPostScanActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataProfileSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataProfileSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    if (this._excludeFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeFields = this._excludeFields?.internalValue;
    }
    if (this._includeFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFields = this._includeFields?.internalValue;
    }
    if (this._postScanActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScanActions = this._postScanActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataProfileSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowFilter = undefined;
      this._samplingPercent = undefined;
      this._excludeFields.internalValue = undefined;
      this._includeFields.internalValue = undefined;
      this._postScanActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowFilter = value.rowFilter;
      this._samplingPercent = value.samplingPercent;
      this._excludeFields.internalValue = value.excludeFields;
      this._includeFields.internalValue = value.includeFields;
      this._postScanActions.internalValue = value.postScanActions;
    }
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: number; 
  public get samplingPercent() {
    return this.getNumberAttribute('sampling_percent');
  }
  public set samplingPercent(value: number) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }

  // exclude_fields - computed: false, optional: true, required: false
  private _excludeFields = new GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference(this, "exclude_fields");
  public get excludeFields() {
    return this._excludeFields;
  }
  public putExcludeFields(value: GoogleDataplexDatascanDataProfileSpecExcludeFields) {
    this._excludeFields.internalValue = value;
  }
  public resetExcludeFields() {
    this._excludeFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFieldsInput() {
    return this._excludeFields.internalValue;
  }

  // include_fields - computed: false, optional: true, required: false
  private _includeFields = new GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference(this, "include_fields");
  public get includeFields() {
    return this._includeFields;
  }
  public putIncludeFields(value: GoogleDataplexDatascanDataProfileSpecIncludeFields) {
    this._includeFields.internalValue = value;
  }
  public resetIncludeFields() {
    this._includeFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFieldsInput() {
    return this._includeFields.internalValue;
  }

  // post_scan_actions - computed: false, optional: true, required: false
  private _postScanActions = new GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference(this, "post_scan_actions");
  public get postScanActions() {
    return this._postScanActions;
  }
  public putPostScanActions(value: GoogleDataplexDatascanDataProfileSpecPostScanActions) {
    this._postScanActions.internalValue = value;
  }
  public resetPostScanActions() {
    this._postScanActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScanActionsInput() {
    return this._postScanActions.internalValue;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport {
  /**
  * The BigQuery table to export DataQualityScan results to.
  * Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}
  */
  readonly resultsTable?: string;
}

export function googleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference | GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    results_table: cdktf.stringToTerraform(struct!.resultsTable),
  }
}


export function googleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference | GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    results_table: {
      value: cdktf.stringToHclTerraform(struct!.resultsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resultsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultsTable = this._resultsTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resultsTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resultsTable = value.resultsTable;
    }
  }

  // results_table - computed: false, optional: true, required: false
  private _resultsTable?: string; 
  public get resultsTable() {
    return this.getStringAttribute('results_table');
  }
  public set resultsTable(value: string) {
    this._resultsTable = value;
  }
  public resetResultsTable() {
    this._resultsTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultsTableInput() {
    return this._resultsTable;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecPostScanActions {
  /**
  * bigquery_export block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}
  */
  readonly bigqueryExport?: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport;
}

export function googleDataplexDatascanDataQualitySpecPostScanActionsToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference | GoogleDataplexDatascanDataQualitySpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bigquery_export: googleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToTerraform(struct!.bigqueryExport),
  }
}


export function googleDataplexDatascanDataQualitySpecPostScanActionsToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference | GoogleDataplexDatascanDataQualitySpecPostScanActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bigquery_export: {
      value: googleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportToHclTerraform(struct!.bigqueryExport),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecPostScanActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigqueryExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryExport = this._bigqueryExport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecPostScanActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigqueryExport.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigqueryExport.internalValue = value.bigqueryExport;
    }
  }

  // bigquery_export - computed: false, optional: true, required: false
  private _bigqueryExport = new GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference(this, "bigquery_export");
  public get bigqueryExport() {
    return this._bigqueryExport;
  }
  public putBigqueryExport(value: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport) {
    this._bigqueryExport.internalValue = value;
  }
  public resetBigqueryExport() {
    this._bigqueryExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryExportInput() {
    return this._bigqueryExport.internalValue;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation {
}

export function googleDataplexDatascanDataQualitySpecRulesNonNullExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataplexDatascanDataQualitySpecRulesNonNullExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation {
  /**
  * The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}
  */
  readonly maxValue?: string;
  /**
  * The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}
  */
  readonly minValue?: string;
  /**
  * Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
  * Only relevant if a maxValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}
  */
  readonly strictMaxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.
  * Only relevant if a minValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}
  */
  readonly strictMinEnabled?: boolean | cdktf.IResolvable;
}

export function googleDataplexDatascanDataQualitySpecRulesRangeExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    strict_max_enabled: cdktf.booleanToTerraform(struct!.strictMaxEnabled),
    strict_min_enabled: cdktf.booleanToTerraform(struct!.strictMinEnabled),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesRangeExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_max_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMaxEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_min_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMinEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._strictMaxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMaxEnabled = this._strictMaxEnabled;
    }
    if (this._strictMinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMinEnabled = this._strictMinEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._strictMaxEnabled = undefined;
      this._strictMinEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._strictMaxEnabled = value.strictMaxEnabled;
      this._strictMinEnabled = value.strictMinEnabled;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // strict_max_enabled - computed: false, optional: true, required: false
  private _strictMaxEnabled?: boolean | cdktf.IResolvable; 
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }
  public set strictMaxEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMaxEnabled = value;
  }
  public resetStrictMaxEnabled() {
    this._strictMaxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMaxEnabledInput() {
    return this._strictMaxEnabled;
  }

  // strict_min_enabled - computed: false, optional: true, required: false
  private _strictMinEnabled?: boolean | cdktf.IResolvable; 
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
  public set strictMinEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMinEnabled = value;
  }
  public resetStrictMinEnabled() {
    this._strictMinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMinEnabledInput() {
    return this._strictMinEnabled;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation {
  /**
  * A regular expression the column value is expected to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#regex GoogleDataplexDatascan#regex}
  */
  readonly regex: string;
}

export function googleDataplexDatascanDataQualitySpecRulesRegexExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesRegexExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regex = value.regex;
    }
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation {
  /**
  * The SQL expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}
  */
  readonly sqlExpression: string;
}

export function googleDataplexDatascanDataQualitySpecRulesRowConditionExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesRowConditionExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlExpression = value.sqlExpression;
    }
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesSetExpectation {
  /**
  * Expected values for the column value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#values GoogleDataplexDatascan#values}
  */
  readonly values: string[];
}

export function googleDataplexDatascanDataQualitySpecRulesSetExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesSetExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesSetExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesSetExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesSetExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion {
  /**
  * The SQL statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#sql_statement GoogleDataplexDatascan#sql_statement}
  */
  readonly sqlStatement: string;
}

export function googleDataplexDatascanDataQualitySpecRulesSqlAssertionToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference | GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_statement: cdktf.stringToTerraform(struct!.sqlStatement),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesSqlAssertionToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference | GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sql_statement: {
      value: cdktf.stringToHclTerraform(struct!.sqlStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlStatement = this._sqlStatement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlStatement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlStatement = value.sqlStatement;
    }
  }

  // sql_statement - computed: false, optional: false, required: true
  private _sqlStatement?: string; 
  public get sqlStatement() {
    return this.getStringAttribute('sql_statement');
  }
  public set sqlStatement(value: string) {
    this._sqlStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlStatementInput() {
    return this._sqlStatement;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation {
  /**
  * The maximum column statistic value allowed for a row to pass this validation.
  * At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}
  */
  readonly maxValue?: string;
  /**
  * The minimum column statistic value allowed for a row to pass this validation.
  * At least one of minValue and maxValue need to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}
  */
  readonly minValue?: string;
  /**
  * column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#statistic GoogleDataplexDatascan#statistic}
  */
  readonly statistic: string;
  /**
  * Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
  * Only relevant if a maxValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}
  */
  readonly strictMaxEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.
  * Only relevant if a minValue has been defined. Default = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}
  */
  readonly strictMinEnabled?: boolean | cdktf.IResolvable;
}

export function googleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    strict_max_enabled: cdktf.booleanToTerraform(struct!.strictMaxEnabled),
    strict_min_enabled: cdktf.booleanToTerraform(struct!.strictMinEnabled),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_max_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMaxEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_min_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.strictMinEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._strictMaxEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMaxEnabled = this._strictMaxEnabled;
    }
    if (this._strictMinEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictMinEnabled = this._strictMinEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._statistic = undefined;
      this._strictMaxEnabled = undefined;
      this._strictMinEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._statistic = value.statistic;
      this._strictMaxEnabled = value.strictMaxEnabled;
      this._strictMinEnabled = value.strictMinEnabled;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // strict_max_enabled - computed: false, optional: true, required: false
  private _strictMaxEnabled?: boolean | cdktf.IResolvable; 
  public get strictMaxEnabled() {
    return this.getBooleanAttribute('strict_max_enabled');
  }
  public set strictMaxEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMaxEnabled = value;
  }
  public resetStrictMaxEnabled() {
    this._strictMaxEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMaxEnabledInput() {
    return this._strictMaxEnabled;
  }

  // strict_min_enabled - computed: false, optional: true, required: false
  private _strictMinEnabled?: boolean | cdktf.IResolvable; 
  public get strictMinEnabled() {
    return this.getBooleanAttribute('strict_min_enabled');
  }
  public set strictMinEnabled(value: boolean | cdktf.IResolvable) {
    this._strictMinEnabled = value;
  }
  public resetStrictMinEnabled() {
    this._strictMinEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMinEnabledInput() {
    return this._strictMinEnabled;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation {
  /**
  * The SQL expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}
  */
  readonly sqlExpression: string;
}

export function googleDataplexDatascanDataQualitySpecRulesTableConditionExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesTableConditionExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlExpression = value.sqlExpression;
    }
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation {
}

export function googleDataplexDatascanDataQualitySpecRulesUniquenessExpectationToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataplexDatascanDataQualitySpecRulesUniquenessExpectationToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference | GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataplexDatascanDataQualitySpecRules {
  /**
  * The unnested column which this rule is evaluated against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#column GoogleDataplexDatascan#column}
  */
  readonly column?: string;
  /**
  * Description of the rule.
  * The maximum length is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}
  */
  readonly description?: string;
  /**
  * The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#dimension GoogleDataplexDatascan#dimension}
  */
  readonly dimension: string;
  /**
  * Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#ignore_null GoogleDataplexDatascan#ignore_null}
  */
  readonly ignoreNull?: boolean | cdktf.IResolvable;
  /**
  * A mutable name for the rule.
  * The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
  * The maximum length is 63 characters.
  * Must start with a letter.
  * Must end with a number or a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#name GoogleDataplexDatascan#name}
  */
  readonly name?: string;
  /**
  * The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#threshold GoogleDataplexDatascan#threshold}
  */
  readonly threshold?: number;
  /**
  * non_null_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#non_null_expectation GoogleDataplexDatascan#non_null_expectation}
  */
  readonly nonNullExpectation?: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation;
  /**
  * range_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#range_expectation GoogleDataplexDatascan#range_expectation}
  */
  readonly rangeExpectation?: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation;
  /**
  * regex_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#regex_expectation GoogleDataplexDatascan#regex_expectation}
  */
  readonly regexExpectation?: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation;
  /**
  * row_condition_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#row_condition_expectation GoogleDataplexDatascan#row_condition_expectation}
  */
  readonly rowConditionExpectation?: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation;
  /**
  * set_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#set_expectation GoogleDataplexDatascan#set_expectation}
  */
  readonly setExpectation?: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation;
  /**
  * sql_assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#sql_assertion GoogleDataplexDatascan#sql_assertion}
  */
  readonly sqlAssertion?: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion;
  /**
  * statistic_range_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#statistic_range_expectation GoogleDataplexDatascan#statistic_range_expectation}
  */
  readonly statisticRangeExpectation?: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation;
  /**
  * table_condition_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#table_condition_expectation GoogleDataplexDatascan#table_condition_expectation}
  */
  readonly tableConditionExpectation?: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation;
  /**
  * uniqueness_expectation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#uniqueness_expectation GoogleDataplexDatascan#uniqueness_expectation}
  */
  readonly uniquenessExpectation?: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation;
}

export function googleDataplexDatascanDataQualitySpecRulesToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    description: cdktf.stringToTerraform(struct!.description),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    ignore_null: cdktf.booleanToTerraform(struct!.ignoreNull),
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    non_null_expectation: googleDataplexDatascanDataQualitySpecRulesNonNullExpectationToTerraform(struct!.nonNullExpectation),
    range_expectation: googleDataplexDatascanDataQualitySpecRulesRangeExpectationToTerraform(struct!.rangeExpectation),
    regex_expectation: googleDataplexDatascanDataQualitySpecRulesRegexExpectationToTerraform(struct!.regexExpectation),
    row_condition_expectation: googleDataplexDatascanDataQualitySpecRulesRowConditionExpectationToTerraform(struct!.rowConditionExpectation),
    set_expectation: googleDataplexDatascanDataQualitySpecRulesSetExpectationToTerraform(struct!.setExpectation),
    sql_assertion: googleDataplexDatascanDataQualitySpecRulesSqlAssertionToTerraform(struct!.sqlAssertion),
    statistic_range_expectation: googleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToTerraform(struct!.statisticRangeExpectation),
    table_condition_expectation: googleDataplexDatascanDataQualitySpecRulesTableConditionExpectationToTerraform(struct!.tableConditionExpectation),
    uniqueness_expectation: googleDataplexDatascanDataQualitySpecRulesUniquenessExpectationToTerraform(struct!.uniquenessExpectation),
  }
}


export function googleDataplexDatascanDataQualitySpecRulesToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
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
    dimension: {
      value: cdktf.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_null: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_null_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesNonNullExpectationToHclTerraform(struct!.nonNullExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationList",
    },
    range_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesRangeExpectationToHclTerraform(struct!.rangeExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationList",
    },
    regex_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesRegexExpectationToHclTerraform(struct!.regexExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationList",
    },
    row_condition_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesRowConditionExpectationToHclTerraform(struct!.rowConditionExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationList",
    },
    set_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesSetExpectationToHclTerraform(struct!.setExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesSetExpectationList",
    },
    sql_assertion: {
      value: googleDataplexDatascanDataQualitySpecRulesSqlAssertionToHclTerraform(struct!.sqlAssertion),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionList",
    },
    statistic_range_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationToHclTerraform(struct!.statisticRangeExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationList",
    },
    table_condition_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesTableConditionExpectationToHclTerraform(struct!.tableConditionExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationList",
    },
    uniqueness_expectation: {
      value: googleDataplexDatascanDataQualitySpecRulesUniquenessExpectationToHclTerraform(struct!.uniquenessExpectation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataplexDatascanDataQualitySpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._ignoreNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNull = this._ignoreNull;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._nonNullExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonNullExpectation = this._nonNullExpectation?.internalValue;
    }
    if (this._rangeExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeExpectation = this._rangeExpectation?.internalValue;
    }
    if (this._regexExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexExpectation = this._regexExpectation?.internalValue;
    }
    if (this._rowConditionExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowConditionExpectation = this._rowConditionExpectation?.internalValue;
    }
    if (this._setExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExpectation = this._setExpectation?.internalValue;
    }
    if (this._sqlAssertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlAssertion = this._sqlAssertion?.internalValue;
    }
    if (this._statisticRangeExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticRangeExpectation = this._statisticRangeExpectation?.internalValue;
    }
    if (this._tableConditionExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableConditionExpectation = this._tableConditionExpectation?.internalValue;
    }
    if (this._uniquenessExpectation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniquenessExpectation = this._uniquenessExpectation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._description = undefined;
      this._dimension = undefined;
      this._ignoreNull = undefined;
      this._name = undefined;
      this._threshold = undefined;
      this._nonNullExpectation.internalValue = undefined;
      this._rangeExpectation.internalValue = undefined;
      this._regexExpectation.internalValue = undefined;
      this._rowConditionExpectation.internalValue = undefined;
      this._setExpectation.internalValue = undefined;
      this._sqlAssertion.internalValue = undefined;
      this._statisticRangeExpectation.internalValue = undefined;
      this._tableConditionExpectation.internalValue = undefined;
      this._uniquenessExpectation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._description = value.description;
      this._dimension = value.dimension;
      this._ignoreNull = value.ignoreNull;
      this._name = value.name;
      this._threshold = value.threshold;
      this._nonNullExpectation.internalValue = value.nonNullExpectation;
      this._rangeExpectation.internalValue = value.rangeExpectation;
      this._regexExpectation.internalValue = value.regexExpectation;
      this._rowConditionExpectation.internalValue = value.rowConditionExpectation;
      this._setExpectation.internalValue = value.setExpectation;
      this._sqlAssertion.internalValue = value.sqlAssertion;
      this._statisticRangeExpectation.internalValue = value.statisticRangeExpectation;
      this._tableConditionExpectation.internalValue = value.tableConditionExpectation;
      this._uniquenessExpectation.internalValue = value.uniquenessExpectation;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // ignore_null - computed: false, optional: true, required: false
  private _ignoreNull?: boolean | cdktf.IResolvable; 
  public get ignoreNull() {
    return this.getBooleanAttribute('ignore_null');
  }
  public set ignoreNull(value: boolean | cdktf.IResolvable) {
    this._ignoreNull = value;
  }
  public resetIgnoreNull() {
    this._ignoreNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNullInput() {
    return this._ignoreNull;
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

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // non_null_expectation - computed: false, optional: true, required: false
  private _nonNullExpectation = new GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(this, "non_null_expectation");
  public get nonNullExpectation() {
    return this._nonNullExpectation;
  }
  public putNonNullExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation) {
    this._nonNullExpectation.internalValue = value;
  }
  public resetNonNullExpectation() {
    this._nonNullExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonNullExpectationInput() {
    return this._nonNullExpectation.internalValue;
  }

  // range_expectation - computed: false, optional: true, required: false
  private _rangeExpectation = new GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(this, "range_expectation");
  public get rangeExpectation() {
    return this._rangeExpectation;
  }
  public putRangeExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation) {
    this._rangeExpectation.internalValue = value;
  }
  public resetRangeExpectation() {
    this._rangeExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeExpectationInput() {
    return this._rangeExpectation.internalValue;
  }

  // regex_expectation - computed: false, optional: true, required: false
  private _regexExpectation = new GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(this, "regex_expectation");
  public get regexExpectation() {
    return this._regexExpectation;
  }
  public putRegexExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation) {
    this._regexExpectation.internalValue = value;
  }
  public resetRegexExpectation() {
    this._regexExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexExpectationInput() {
    return this._regexExpectation.internalValue;
  }

  // row_condition_expectation - computed: false, optional: true, required: false
  private _rowConditionExpectation = new GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(this, "row_condition_expectation");
  public get rowConditionExpectation() {
    return this._rowConditionExpectation;
  }
  public putRowConditionExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation) {
    this._rowConditionExpectation.internalValue = value;
  }
  public resetRowConditionExpectation() {
    this._rowConditionExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowConditionExpectationInput() {
    return this._rowConditionExpectation.internalValue;
  }

  // set_expectation - computed: false, optional: true, required: false
  private _setExpectation = new GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(this, "set_expectation");
  public get setExpectation() {
    return this._setExpectation;
  }
  public putSetExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation) {
    this._setExpectation.internalValue = value;
  }
  public resetSetExpectation() {
    this._setExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExpectationInput() {
    return this._setExpectation.internalValue;
  }

  // sql_assertion - computed: false, optional: true, required: false
  private _sqlAssertion = new GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference(this, "sql_assertion");
  public get sqlAssertion() {
    return this._sqlAssertion;
  }
  public putSqlAssertion(value: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion) {
    this._sqlAssertion.internalValue = value;
  }
  public resetSqlAssertion() {
    this._sqlAssertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAssertionInput() {
    return this._sqlAssertion.internalValue;
  }

  // statistic_range_expectation - computed: false, optional: true, required: false
  private _statisticRangeExpectation = new GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(this, "statistic_range_expectation");
  public get statisticRangeExpectation() {
    return this._statisticRangeExpectation;
  }
  public putStatisticRangeExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation) {
    this._statisticRangeExpectation.internalValue = value;
  }
  public resetStatisticRangeExpectation() {
    this._statisticRangeExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticRangeExpectationInput() {
    return this._statisticRangeExpectation.internalValue;
  }

  // table_condition_expectation - computed: false, optional: true, required: false
  private _tableConditionExpectation = new GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(this, "table_condition_expectation");
  public get tableConditionExpectation() {
    return this._tableConditionExpectation;
  }
  public putTableConditionExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation) {
    this._tableConditionExpectation.internalValue = value;
  }
  public resetTableConditionExpectation() {
    this._tableConditionExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConditionExpectationInput() {
    return this._tableConditionExpectation.internalValue;
  }

  // uniqueness_expectation - computed: false, optional: true, required: false
  private _uniquenessExpectation = new GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(this, "uniqueness_expectation");
  public get uniquenessExpectation() {
    return this._uniquenessExpectation;
  }
  public putUniquenessExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation) {
    this._uniquenessExpectation.internalValue = value;
  }
  public resetUniquenessExpectation() {
    this._uniquenessExpectation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessExpectationInput() {
    return this._uniquenessExpectation.internalValue;
  }
}

export class GoogleDataplexDatascanDataQualitySpecRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataplexDatascanDataQualitySpecRulesOutputReference {
    return new GoogleDataplexDatascanDataQualitySpecRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataplexDatascanDataQualitySpec {
  /**
  * A filter applied to all rows in a single DataScan job. The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}
  */
  readonly rowFilter?: string;
  /**
  * The percentage of the records to be selected from the dataset for DataScan.
  * Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
  * Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}
  */
  readonly samplingPercent?: number;
  /**
  * post_scan_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}
  */
  readonly postScanActions?: GoogleDataplexDatascanDataQualitySpecPostScanActions;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#rules GoogleDataplexDatascan#rules}
  */
  readonly rules?: GoogleDataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable;
}

export function googleDataplexDatascanDataQualitySpecToTerraform(struct?: GoogleDataplexDatascanDataQualitySpecOutputReference | GoogleDataplexDatascanDataQualitySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    row_filter: cdktf.stringToTerraform(struct!.rowFilter),
    sampling_percent: cdktf.numberToTerraform(struct!.samplingPercent),
    post_scan_actions: googleDataplexDatascanDataQualitySpecPostScanActionsToTerraform(struct!.postScanActions),
    rules: cdktf.listMapper(googleDataplexDatascanDataQualitySpecRulesToTerraform, true)(struct!.rules),
  }
}


export function googleDataplexDatascanDataQualitySpecToHclTerraform(struct?: GoogleDataplexDatascanDataQualitySpecOutputReference | GoogleDataplexDatascanDataQualitySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    row_filter: {
      value: cdktf.stringToHclTerraform(struct!.rowFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_percent: {
      value: cdktf.numberToHclTerraform(struct!.samplingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_scan_actions: {
      value: googleDataplexDatascanDataQualitySpecPostScanActionsToHclTerraform(struct!.postScanActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecPostScanActionsList",
    },
    rules: {
      value: cdktf.listMapperHcl(googleDataplexDatascanDataQualitySpecRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanDataQualitySpecRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanDataQualitySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanDataQualitySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowFilter = this._rowFilter;
    }
    if (this._samplingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPercent = this._samplingPercent;
    }
    if (this._postScanActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postScanActions = this._postScanActions?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanDataQualitySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowFilter = undefined;
      this._samplingPercent = undefined;
      this._postScanActions.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowFilter = value.rowFilter;
      this._samplingPercent = value.samplingPercent;
      this._postScanActions.internalValue = value.postScanActions;
      this._rules.internalValue = value.rules;
    }
  }

  // row_filter - computed: false, optional: true, required: false
  private _rowFilter?: string; 
  public get rowFilter() {
    return this.getStringAttribute('row_filter');
  }
  public set rowFilter(value: string) {
    this._rowFilter = value;
  }
  public resetRowFilter() {
    this._rowFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowFilterInput() {
    return this._rowFilter;
  }

  // sampling_percent - computed: false, optional: true, required: false
  private _samplingPercent?: number; 
  public get samplingPercent() {
    return this.getNumberAttribute('sampling_percent');
  }
  public set samplingPercent(value: number) {
    this._samplingPercent = value;
  }
  public resetSamplingPercent() {
    this._samplingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPercentInput() {
    return this._samplingPercent;
  }

  // post_scan_actions - computed: false, optional: true, required: false
  private _postScanActions = new GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference(this, "post_scan_actions");
  public get postScanActions() {
    return this._postScanActions;
  }
  public putPostScanActions(value: GoogleDataplexDatascanDataQualitySpecPostScanActions) {
    this._postScanActions.internalValue = value;
  }
  public resetPostScanActions() {
    this._postScanActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postScanActionsInput() {
    return this._postScanActions.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new GoogleDataplexDatascanDataQualitySpecRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleDataplexDatascanDataQualitySpecRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface GoogleDataplexDatascanExecutionSpecTriggerOnDemand {
}

export function googleDataplexDatascanExecutionSpecTriggerOnDemandToTerraform(struct?: GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference | GoogleDataplexDatascanExecutionSpecTriggerOnDemand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataplexDatascanExecutionSpecTriggerOnDemandToHclTerraform(struct?: GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference | GoogleDataplexDatascanExecutionSpecTriggerOnDemand): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanExecutionSpecTriggerOnDemand | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanExecutionSpecTriggerOnDemand | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataplexDatascanExecutionSpecTriggerSchedule {
  /**
  * Cron schedule for running scans periodically. This field is required for Schedule scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#cron GoogleDataplexDatascan#cron}
  */
  readonly cron: string;
}

export function googleDataplexDatascanExecutionSpecTriggerScheduleToTerraform(struct?: GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference | GoogleDataplexDatascanExecutionSpecTriggerSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
  }
}


export function googleDataplexDatascanExecutionSpecTriggerScheduleToHclTerraform(struct?: GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference | GoogleDataplexDatascanExecutionSpecTriggerSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanExecutionSpecTriggerSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanExecutionSpecTriggerSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron = value.cron;
    }
  }

  // cron - computed: false, optional: false, required: true
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }
}
export interface GoogleDataplexDatascanExecutionSpecTrigger {
  /**
  * on_demand block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#on_demand GoogleDataplexDatascan#on_demand}
  */
  readonly onDemand?: GoogleDataplexDatascanExecutionSpecTriggerOnDemand;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#schedule GoogleDataplexDatascan#schedule}
  */
  readonly schedule?: GoogleDataplexDatascanExecutionSpecTriggerSchedule;
}

export function googleDataplexDatascanExecutionSpecTriggerToTerraform(struct?: GoogleDataplexDatascanExecutionSpecTriggerOutputReference | GoogleDataplexDatascanExecutionSpecTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_demand: googleDataplexDatascanExecutionSpecTriggerOnDemandToTerraform(struct!.onDemand),
    schedule: googleDataplexDatascanExecutionSpecTriggerScheduleToTerraform(struct!.schedule),
  }
}


export function googleDataplexDatascanExecutionSpecTriggerToHclTerraform(struct?: GoogleDataplexDatascanExecutionSpecTriggerOutputReference | GoogleDataplexDatascanExecutionSpecTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_demand: {
      value: googleDataplexDatascanExecutionSpecTriggerOnDemandToHclTerraform(struct!.onDemand),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanExecutionSpecTriggerOnDemandList",
    },
    schedule: {
      value: googleDataplexDatascanExecutionSpecTriggerScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanExecutionSpecTriggerScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanExecutionSpecTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanExecutionSpecTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemand?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanExecutionSpecTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemand.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemand.internalValue = value.onDemand;
      this._schedule.internalValue = value.schedule;
    }
  }

  // on_demand - computed: false, optional: true, required: false
  private _onDemand = new GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference(this, "on_demand");
  public get onDemand() {
    return this._onDemand;
  }
  public putOnDemand(value: GoogleDataplexDatascanExecutionSpecTriggerOnDemand) {
    this._onDemand.internalValue = value;
  }
  public resetOnDemand() {
    this._onDemand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: GoogleDataplexDatascanExecutionSpecTriggerSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface GoogleDataplexDatascanExecutionSpec {
  /**
  * The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#field GoogleDataplexDatascan#field}
  */
  readonly field?: string;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#trigger GoogleDataplexDatascan#trigger}
  */
  readonly trigger: GoogleDataplexDatascanExecutionSpecTrigger;
}

export function googleDataplexDatascanExecutionSpecToTerraform(struct?: GoogleDataplexDatascanExecutionSpecOutputReference | GoogleDataplexDatascanExecutionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    trigger: googleDataplexDatascanExecutionSpecTriggerToTerraform(struct!.trigger),
  }
}


export function googleDataplexDatascanExecutionSpecToHclTerraform(struct?: GoogleDataplexDatascanExecutionSpecOutputReference | GoogleDataplexDatascanExecutionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger: {
      value: googleDataplexDatascanExecutionSpecTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexDatascanExecutionSpecTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexDatascanExecutionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexDatascanExecutionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexDatascanExecutionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._trigger.internalValue = value.trigger;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new GoogleDataplexDatascanExecutionSpecTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: GoogleDataplexDatascanExecutionSpecTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface GoogleDataplexDatascanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}
  */
  readonly update?: string;
}

export function googleDataplexDatascanTimeoutsToTerraform(struct?: GoogleDataplexDatascanTimeouts | cdktf.IResolvable): any {
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


export function googleDataplexDatascanTimeoutsToHclTerraform(struct?: GoogleDataplexDatascanTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataplexDatascanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataplexDatascanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataplexDatascanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan google_dataplex_datascan}
*/
export class GoogleDataplexDatascan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_datascan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataplexDatascan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataplexDatascan to import
  * @param importFromId The id of the existing GoogleDataplexDatascan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataplexDatascan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_datascan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataplex_datascan google_dataplex_datascan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataplexDatascanConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataplexDatascanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_datascan',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.23.0',
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
    this._dataScanId = config.dataScanId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._data.internalValue = config.data;
    this._dataProfileSpec.internalValue = config.dataProfileSpec;
    this._dataQualitySpec.internalValue = config.dataQualitySpec;
    this._executionSpec.internalValue = config.executionSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_scan_id - computed: false, optional: false, required: true
  private _dataScanId?: string; 
  public get dataScanId() {
    return this.getStringAttribute('data_scan_id');
  }
  public set dataScanId(value: string) {
    this._dataScanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataScanIdInput() {
    return this._dataScanId;
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

  // execution_status - computed: true, optional: false, required: false
  private _executionStatus = new GoogleDataplexDatascanExecutionStatusList(this, "execution_status", false);
  public get executionStatus() {
    return this._executionStatus;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // data - computed: false, optional: false, required: true
  private _data = new GoogleDataplexDatascanDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: GoogleDataplexDatascanData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // data_profile_spec - computed: false, optional: true, required: false
  private _dataProfileSpec = new GoogleDataplexDatascanDataProfileSpecOutputReference(this, "data_profile_spec");
  public get dataProfileSpec() {
    return this._dataProfileSpec;
  }
  public putDataProfileSpec(value: GoogleDataplexDatascanDataProfileSpec) {
    this._dataProfileSpec.internalValue = value;
  }
  public resetDataProfileSpec() {
    this._dataProfileSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProfileSpecInput() {
    return this._dataProfileSpec.internalValue;
  }

  // data_quality_spec - computed: false, optional: true, required: false
  private _dataQualitySpec = new GoogleDataplexDatascanDataQualitySpecOutputReference(this, "data_quality_spec");
  public get dataQualitySpec() {
    return this._dataQualitySpec;
  }
  public putDataQualitySpec(value: GoogleDataplexDatascanDataQualitySpec) {
    this._dataQualitySpec.internalValue = value;
  }
  public resetDataQualitySpec() {
    this._dataQualitySpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualitySpecInput() {
    return this._dataQualitySpec.internalValue;
  }

  // execution_spec - computed: false, optional: false, required: true
  private _executionSpec = new GoogleDataplexDatascanExecutionSpecOutputReference(this, "execution_spec");
  public get executionSpec() {
    return this._executionSpec;
  }
  public putExecutionSpec(value: GoogleDataplexDatascanExecutionSpec) {
    this._executionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSpecInput() {
    return this._executionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataplexDatascanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataplexDatascanTimeouts) {
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
      data_scan_id: cdktf.stringToTerraform(this._dataScanId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      data: googleDataplexDatascanDataToTerraform(this._data.internalValue),
      data_profile_spec: googleDataplexDatascanDataProfileSpecToTerraform(this._dataProfileSpec.internalValue),
      data_quality_spec: googleDataplexDatascanDataQualitySpecToTerraform(this._dataQualitySpec.internalValue),
      execution_spec: googleDataplexDatascanExecutionSpecToTerraform(this._executionSpec.internalValue),
      timeouts: googleDataplexDatascanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_scan_id: {
        value: cdktf.stringToHclTerraform(this._dataScanId),
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
      data: {
        value: googleDataplexDatascanDataToHclTerraform(this._data.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexDatascanDataList",
      },
      data_profile_spec: {
        value: googleDataplexDatascanDataProfileSpecToHclTerraform(this._dataProfileSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexDatascanDataProfileSpecList",
      },
      data_quality_spec: {
        value: googleDataplexDatascanDataQualitySpecToHclTerraform(this._dataQualitySpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexDatascanDataQualitySpecList",
      },
      execution_spec: {
        value: googleDataplexDatascanExecutionSpecToHclTerraform(this._executionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexDatascanExecutionSpecList",
      },
      timeouts: {
        value: googleDataplexDatascanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataplexDatascanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
