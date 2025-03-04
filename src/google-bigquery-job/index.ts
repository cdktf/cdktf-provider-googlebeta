/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#id GoogleBigqueryJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#job_id GoogleBigqueryJob#job_id}
  */
  readonly jobId: string;
  /**
  * Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#job_timeout_ms GoogleBigqueryJob#job_timeout_ms}
  */
  readonly jobTimeoutMs?: string;
  /**
  * The labels associated with this job. You can use these to organize and group your jobs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#labels GoogleBigqueryJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The geographic location of the job. The default value is US.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#location GoogleBigqueryJob#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project GoogleBigqueryJob#project}
  */
  readonly project?: string;
  /**
  * copy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#copy GoogleBigqueryJob#copy}
  */
  readonly copy?: GoogleBigqueryJobCopy;
  /**
  * extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#extract GoogleBigqueryJob#extract}
  */
  readonly extract?: GoogleBigqueryJobExtract;
  /**
  * load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#load GoogleBigqueryJob#load}
  */
  readonly load?: GoogleBigqueryJobLoad;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}
  */
  readonly query?: GoogleBigqueryJobQuery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#timeouts GoogleBigqueryJob#timeouts}
  */
  readonly timeouts?: GoogleBigqueryJobTimeouts;
}
export interface GoogleBigqueryJobStatusErrorResult {
}

export function googleBigqueryJobStatusErrorResultToTerraform(struct?: GoogleBigqueryJobStatusErrorResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBigqueryJobStatusErrorResultToHclTerraform(struct?: GoogleBigqueryJobStatusErrorResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBigqueryJobStatusErrorResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryJobStatusErrorResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobStatusErrorResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class GoogleBigqueryJobStatusErrorResultList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBigqueryJobStatusErrorResultOutputReference {
    return new GoogleBigqueryJobStatusErrorResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryJobStatusErrors {
}

export function googleBigqueryJobStatusErrorsToTerraform(struct?: GoogleBigqueryJobStatusErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBigqueryJobStatusErrorsToHclTerraform(struct?: GoogleBigqueryJobStatusErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBigqueryJobStatusErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryJobStatusErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobStatusErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class GoogleBigqueryJobStatusErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBigqueryJobStatusErrorsOutputReference {
    return new GoogleBigqueryJobStatusErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryJobStatus {
}

export function googleBigqueryJobStatusToTerraform(struct?: GoogleBigqueryJobStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleBigqueryJobStatusToHclTerraform(struct?: GoogleBigqueryJobStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleBigqueryJobStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryJobStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_result - computed: true, optional: false, required: false
  private _errorResult = new GoogleBigqueryJobStatusErrorResultList(this, "error_result", false);
  public get errorResult() {
    return this._errorResult;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new GoogleBigqueryJobStatusErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleBigqueryJobStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleBigqueryJobStatusOutputReference {
    return new GoogleBigqueryJobStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryJobCopyDestinationEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
  * The BigQuery Service Account associated with your project requires access to this encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleBigqueryJobCopyDestinationEncryptionConfigurationToTerraform(struct?: GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference | GoogleBigqueryJobCopyDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleBigqueryJobCopyDestinationEncryptionConfigurationToHclTerraform(struct?: GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference | GoogleBigqueryJobCopyDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobCopyDestinationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobCopyDestinationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_version - computed: true, optional: false, required: false
  public get kmsKeyVersion() {
    return this.getStringAttribute('kms_key_version');
  }
}
export interface GoogleBigqueryJobCopyDestinationTable {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
  * or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryJobCopyDestinationTableToTerraform(struct?: GoogleBigqueryJobCopyDestinationTableOutputReference | GoogleBigqueryJobCopyDestinationTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleBigqueryJobCopyDestinationTableToHclTerraform(struct?: GoogleBigqueryJobCopyDestinationTableOutputReference | GoogleBigqueryJobCopyDestinationTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobCopyDestinationTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobCopyDestinationTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobCopyDestinationTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleBigqueryJobCopySourceTables {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
  * or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryJobCopySourceTablesToTerraform(struct?: GoogleBigqueryJobCopySourceTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleBigqueryJobCopySourceTablesToHclTerraform(struct?: GoogleBigqueryJobCopySourceTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobCopySourceTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryJobCopySourceTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobCopySourceTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}

export class GoogleBigqueryJobCopySourceTablesList extends cdktf.ComplexList {
  public internalValue? : GoogleBigqueryJobCopySourceTables[] | cdktf.IResolvable

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
  public get(index: number): GoogleBigqueryJobCopySourceTablesOutputReference {
    return new GoogleBigqueryJobCopySourceTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryJobCopy {
  /**
  * Specifies whether the job is allowed to create new tables. The following values are supported:
  * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
  * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
  * Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}
  */
  readonly createDisposition?: string;
  /**
  * Specifies the action that occurs if the destination table already exists. The following values are supported:
  * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
  * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
  * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
  * Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
  * Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}
  */
  readonly writeDisposition?: string;
  /**
  * destination_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}
  */
  readonly destinationEncryptionConfiguration?: GoogleBigqueryJobCopyDestinationEncryptionConfiguration;
  /**
  * destination_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}
  */
  readonly destinationTable?: GoogleBigqueryJobCopyDestinationTable;
  /**
  * source_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#source_tables GoogleBigqueryJob#source_tables}
  */
  readonly sourceTables: GoogleBigqueryJobCopySourceTables[] | cdktf.IResolvable;
}

export function googleBigqueryJobCopyToTerraform(struct?: GoogleBigqueryJobCopyOutputReference | GoogleBigqueryJobCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_disposition: cdktf.stringToTerraform(struct!.createDisposition),
    write_disposition: cdktf.stringToTerraform(struct!.writeDisposition),
    destination_encryption_configuration: googleBigqueryJobCopyDestinationEncryptionConfigurationToTerraform(struct!.destinationEncryptionConfiguration),
    destination_table: googleBigqueryJobCopyDestinationTableToTerraform(struct!.destinationTable),
    source_tables: cdktf.listMapper(googleBigqueryJobCopySourceTablesToTerraform, true)(struct!.sourceTables),
  }
}


export function googleBigqueryJobCopyToHclTerraform(struct?: GoogleBigqueryJobCopyOutputReference | GoogleBigqueryJobCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_disposition: {
      value: cdktf.stringToHclTerraform(struct!.createDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_disposition: {
      value: cdktf.stringToHclTerraform(struct!.writeDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_encryption_configuration: {
      value: googleBigqueryJobCopyDestinationEncryptionConfigurationToHclTerraform(struct!.destinationEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobCopyDestinationEncryptionConfigurationList",
    },
    destination_table: {
      value: googleBigqueryJobCopyDestinationTableToHclTerraform(struct!.destinationTable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobCopyDestinationTableList",
    },
    source_tables: {
      value: cdktf.listMapperHcl(googleBigqueryJobCopySourceTablesToHclTerraform, true)(struct!.sourceTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobCopySourceTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobCopyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDisposition = this._createDisposition;
    }
    if (this._writeDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeDisposition = this._writeDisposition;
    }
    if (this._destinationEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEncryptionConfiguration = this._destinationEncryptionConfiguration?.internalValue;
    }
    if (this._destinationTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable?.internalValue;
    }
    if (this._sourceTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTables = this._sourceTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createDisposition = undefined;
      this._writeDisposition = undefined;
      this._destinationEncryptionConfiguration.internalValue = undefined;
      this._destinationTable.internalValue = undefined;
      this._sourceTables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createDisposition = value.createDisposition;
      this._writeDisposition = value.writeDisposition;
      this._destinationEncryptionConfiguration.internalValue = value.destinationEncryptionConfiguration;
      this._destinationTable.internalValue = value.destinationTable;
      this._sourceTables.internalValue = value.sourceTables;
    }
  }

  // create_disposition - computed: false, optional: true, required: false
  private _createDisposition?: string; 
  public get createDisposition() {
    return this.getStringAttribute('create_disposition');
  }
  public set createDisposition(value: string) {
    this._createDisposition = value;
  }
  public resetCreateDisposition() {
    this._createDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDispositionInput() {
    return this._createDisposition;
  }

  // write_disposition - computed: false, optional: true, required: false
  private _writeDisposition?: string; 
  public get writeDisposition() {
    return this.getStringAttribute('write_disposition');
  }
  public set writeDisposition(value: string) {
    this._writeDisposition = value;
  }
  public resetWriteDisposition() {
    this._writeDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDispositionInput() {
    return this._writeDisposition;
  }

  // destination_encryption_configuration - computed: false, optional: true, required: false
  private _destinationEncryptionConfiguration = new GoogleBigqueryJobCopyDestinationEncryptionConfigurationOutputReference(this, "destination_encryption_configuration");
  public get destinationEncryptionConfiguration() {
    return this._destinationEncryptionConfiguration;
  }
  public putDestinationEncryptionConfiguration(value: GoogleBigqueryJobCopyDestinationEncryptionConfiguration) {
    this._destinationEncryptionConfiguration.internalValue = value;
  }
  public resetDestinationEncryptionConfiguration() {
    this._destinationEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionConfigurationInput() {
    return this._destinationEncryptionConfiguration.internalValue;
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable = new GoogleBigqueryJobCopyDestinationTableOutputReference(this, "destination_table");
  public get destinationTable() {
    return this._destinationTable;
  }
  public putDestinationTable(value: GoogleBigqueryJobCopyDestinationTable) {
    this._destinationTable.internalValue = value;
  }
  public resetDestinationTable() {
    this._destinationTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable.internalValue;
  }

  // source_tables - computed: false, optional: false, required: true
  private _sourceTables = new GoogleBigqueryJobCopySourceTablesList(this, "source_tables", false);
  public get sourceTables() {
    return this._sourceTables;
  }
  public putSourceTables(value: GoogleBigqueryJobCopySourceTables[] | cdktf.IResolvable) {
    this._sourceTables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTablesInput() {
    return this._sourceTables.internalValue;
  }
}
export interface GoogleBigqueryJobExtractSourceModel {
  /**
  * The ID of the dataset containing this model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#model_id GoogleBigqueryJob#model_id}
  */
  readonly modelId: string;
  /**
  * The ID of the project containing this model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}
  */
  readonly projectId: string;
}

export function googleBigqueryJobExtractSourceModelToTerraform(struct?: GoogleBigqueryJobExtractSourceModelOutputReference | GoogleBigqueryJobExtractSourceModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    model_id: cdktf.stringToTerraform(struct!.modelId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function googleBigqueryJobExtractSourceModelToHclTerraform(struct?: GoogleBigqueryJobExtractSourceModelOutputReference | GoogleBigqueryJobExtractSourceModel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktf.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobExtractSourceModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobExtractSourceModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobExtractSourceModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._modelId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._modelId = value.modelId;
      this._projectId = value.projectId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface GoogleBigqueryJobExtractSourceTable {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
  * or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryJobExtractSourceTableToTerraform(struct?: GoogleBigqueryJobExtractSourceTableOutputReference | GoogleBigqueryJobExtractSourceTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleBigqueryJobExtractSourceTableToHclTerraform(struct?: GoogleBigqueryJobExtractSourceTableOutputReference | GoogleBigqueryJobExtractSourceTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobExtractSourceTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobExtractSourceTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobExtractSourceTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleBigqueryJobExtract {
  /**
  * The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
  * The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#compression GoogleBigqueryJob#compression}
  */
  readonly compression?: string;
  /**
  * The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
  * The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
  * The default value for models is SAVED_MODEL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_format GoogleBigqueryJob#destination_format}
  */
  readonly destinationFormat?: string;
  /**
  * A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_uris GoogleBigqueryJob#destination_uris}
  */
  readonly destinationUris: string[];
  /**
  * When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.
  * Default is ','
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Whether to print out a header row in the results. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#print_header GoogleBigqueryJob#print_header}
  */
  readonly printHeader?: boolean | cdktf.IResolvable;
  /**
  * Whether to use logical types when extracting to AVRO format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#use_avro_logical_types GoogleBigqueryJob#use_avro_logical_types}
  */
  readonly useAvroLogicalTypes?: boolean | cdktf.IResolvable;
  /**
  * source_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#source_model GoogleBigqueryJob#source_model}
  */
  readonly sourceModel?: GoogleBigqueryJobExtractSourceModel;
  /**
  * source_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#source_table GoogleBigqueryJob#source_table}
  */
  readonly sourceTable?: GoogleBigqueryJobExtractSourceTable;
}

export function googleBigqueryJobExtractToTerraform(struct?: GoogleBigqueryJobExtractOutputReference | GoogleBigqueryJobExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    destination_format: cdktf.stringToTerraform(struct!.destinationFormat),
    destination_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationUris),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    print_header: cdktf.booleanToTerraform(struct!.printHeader),
    use_avro_logical_types: cdktf.booleanToTerraform(struct!.useAvroLogicalTypes),
    source_model: googleBigqueryJobExtractSourceModelToTerraform(struct!.sourceModel),
    source_table: googleBigqueryJobExtractSourceTableToTerraform(struct!.sourceTable),
  }
}


export function googleBigqueryJobExtractToHclTerraform(struct?: GoogleBigqueryJobExtractOutputReference | GoogleBigqueryJobExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_format: {
      value: cdktf.stringToHclTerraform(struct!.destinationFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    print_header: {
      value: cdktf.booleanToHclTerraform(struct!.printHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_avro_logical_types: {
      value: cdktf.booleanToHclTerraform(struct!.useAvroLogicalTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_model: {
      value: googleBigqueryJobExtractSourceModelToHclTerraform(struct!.sourceModel),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobExtractSourceModelList",
    },
    source_table: {
      value: googleBigqueryJobExtractSourceTableToHclTerraform(struct!.sourceTable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobExtractSourceTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._destinationFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFormat = this._destinationFormat;
    }
    if (this._destinationUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationUris = this._destinationUris;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._printHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.printHeader = this._printHeader;
    }
    if (this._useAvroLogicalTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAvroLogicalTypes = this._useAvroLogicalTypes;
    }
    if (this._sourceModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceModel = this._sourceModel?.internalValue;
    }
    if (this._sourceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTable = this._sourceTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._destinationFormat = undefined;
      this._destinationUris = undefined;
      this._fieldDelimiter = undefined;
      this._printHeader = undefined;
      this._useAvroLogicalTypes = undefined;
      this._sourceModel.internalValue = undefined;
      this._sourceTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._destinationFormat = value.destinationFormat;
      this._destinationUris = value.destinationUris;
      this._fieldDelimiter = value.fieldDelimiter;
      this._printHeader = value.printHeader;
      this._useAvroLogicalTypes = value.useAvroLogicalTypes;
      this._sourceModel.internalValue = value.sourceModel;
      this._sourceTable.internalValue = value.sourceTable;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // destination_format - computed: true, optional: true, required: false
  private _destinationFormat?: string; 
  public get destinationFormat() {
    return this.getStringAttribute('destination_format');
  }
  public set destinationFormat(value: string) {
    this._destinationFormat = value;
  }
  public resetDestinationFormat() {
    this._destinationFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFormatInput() {
    return this._destinationFormat;
  }

  // destination_uris - computed: false, optional: false, required: true
  private _destinationUris?: string[]; 
  public get destinationUris() {
    return this.getListAttribute('destination_uris');
  }
  public set destinationUris(value: string[]) {
    this._destinationUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationUrisInput() {
    return this._destinationUris;
  }

  // field_delimiter - computed: true, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // print_header - computed: false, optional: true, required: false
  private _printHeader?: boolean | cdktf.IResolvable; 
  public get printHeader() {
    return this.getBooleanAttribute('print_header');
  }
  public set printHeader(value: boolean | cdktf.IResolvable) {
    this._printHeader = value;
  }
  public resetPrintHeader() {
    this._printHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printHeaderInput() {
    return this._printHeader;
  }

  // use_avro_logical_types - computed: false, optional: true, required: false
  private _useAvroLogicalTypes?: boolean | cdktf.IResolvable; 
  public get useAvroLogicalTypes() {
    return this.getBooleanAttribute('use_avro_logical_types');
  }
  public set useAvroLogicalTypes(value: boolean | cdktf.IResolvable) {
    this._useAvroLogicalTypes = value;
  }
  public resetUseAvroLogicalTypes() {
    this._useAvroLogicalTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAvroLogicalTypesInput() {
    return this._useAvroLogicalTypes;
  }

  // source_model - computed: false, optional: true, required: false
  private _sourceModel = new GoogleBigqueryJobExtractSourceModelOutputReference(this, "source_model");
  public get sourceModel() {
    return this._sourceModel;
  }
  public putSourceModel(value: GoogleBigqueryJobExtractSourceModel) {
    this._sourceModel.internalValue = value;
  }
  public resetSourceModel() {
    this._sourceModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceModelInput() {
    return this._sourceModel.internalValue;
  }

  // source_table - computed: false, optional: true, required: false
  private _sourceTable = new GoogleBigqueryJobExtractSourceTableOutputReference(this, "source_table");
  public get sourceTable() {
    return this._sourceTable;
  }
  public putSourceTable(value: GoogleBigqueryJobExtractSourceTable) {
    this._sourceTable.internalValue = value;
  }
  public resetSourceTable() {
    this._sourceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable.internalValue;
  }
}
export interface GoogleBigqueryJobLoadDestinationEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
  * The BigQuery Service Account associated with your project requires access to this encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleBigqueryJobLoadDestinationEncryptionConfigurationToTerraform(struct?: GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference | GoogleBigqueryJobLoadDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleBigqueryJobLoadDestinationEncryptionConfigurationToHclTerraform(struct?: GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference | GoogleBigqueryJobLoadDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobLoadDestinationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobLoadDestinationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_version - computed: true, optional: false, required: false
  public get kmsKeyVersion() {
    return this.getStringAttribute('kms_key_version');
  }
}
export interface GoogleBigqueryJobLoadDestinationTable {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
  * or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryJobLoadDestinationTableToTerraform(struct?: GoogleBigqueryJobLoadDestinationTableOutputReference | GoogleBigqueryJobLoadDestinationTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleBigqueryJobLoadDestinationTableToHclTerraform(struct?: GoogleBigqueryJobLoadDestinationTableOutputReference | GoogleBigqueryJobLoadDestinationTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobLoadDestinationTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobLoadDestinationTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobLoadDestinationTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleBigqueryJobLoadParquetOptions {
  /**
  * If sourceFormat is set to PARQUET, indicates whether to use schema inference specifically for Parquet LIST logical type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#enable_list_inference GoogleBigqueryJob#enable_list_inference}
  */
  readonly enableListInference?: boolean | cdktf.IResolvable;
  /**
  * If sourceFormat is set to PARQUET, indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#enum_as_string GoogleBigqueryJob#enum_as_string}
  */
  readonly enumAsString?: boolean | cdktf.IResolvable;
}

export function googleBigqueryJobLoadParquetOptionsToTerraform(struct?: GoogleBigqueryJobLoadParquetOptionsOutputReference | GoogleBigqueryJobLoadParquetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_list_inference: cdktf.booleanToTerraform(struct!.enableListInference),
    enum_as_string: cdktf.booleanToTerraform(struct!.enumAsString),
  }
}


export function googleBigqueryJobLoadParquetOptionsToHclTerraform(struct?: GoogleBigqueryJobLoadParquetOptionsOutputReference | GoogleBigqueryJobLoadParquetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_list_inference: {
      value: cdktf.booleanToHclTerraform(struct!.enableListInference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enum_as_string: {
      value: cdktf.booleanToHclTerraform(struct!.enumAsString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobLoadParquetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobLoadParquetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableListInference !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableListInference = this._enableListInference;
    }
    if (this._enumAsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumAsString = this._enumAsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobLoadParquetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableListInference = undefined;
      this._enumAsString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableListInference = value.enableListInference;
      this._enumAsString = value.enumAsString;
    }
  }

  // enable_list_inference - computed: false, optional: true, required: false
  private _enableListInference?: boolean | cdktf.IResolvable; 
  public get enableListInference() {
    return this.getBooleanAttribute('enable_list_inference');
  }
  public set enableListInference(value: boolean | cdktf.IResolvable) {
    this._enableListInference = value;
  }
  public resetEnableListInference() {
    this._enableListInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableListInferenceInput() {
    return this._enableListInference;
  }

  // enum_as_string - computed: false, optional: true, required: false
  private _enumAsString?: boolean | cdktf.IResolvable; 
  public get enumAsString() {
    return this.getBooleanAttribute('enum_as_string');
  }
  public set enumAsString(value: boolean | cdktf.IResolvable) {
    this._enumAsString = value;
  }
  public resetEnumAsString() {
    this._enumAsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumAsStringInput() {
    return this._enumAsString;
  }
}
export interface GoogleBigqueryJobLoadTimePartitioning {
  /**
  * Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#expiration_ms GoogleBigqueryJob#expiration_ms}
  */
  readonly expirationMs?: string;
  /**
  * If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field.
  * The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
  * A wrapper is used here because an empty string is an invalid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#field GoogleBigqueryJob#field}
  */
  readonly field?: string;
  /**
  * The only type supported is DAY, which will generate one partition per day. Providing an empty string used to cause an error,
  * but in OnePlatform the field will be treated as unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#type GoogleBigqueryJob#type}
  */
  readonly type: string;
}

export function googleBigqueryJobLoadTimePartitioningToTerraform(struct?: GoogleBigqueryJobLoadTimePartitioningOutputReference | GoogleBigqueryJobLoadTimePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_ms: cdktf.stringToTerraform(struct!.expirationMs),
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBigqueryJobLoadTimePartitioningToHclTerraform(struct?: GoogleBigqueryJobLoadTimePartitioningOutputReference | GoogleBigqueryJobLoadTimePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_ms: {
      value: cdktf.stringToHclTerraform(struct!.expirationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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

export class GoogleBigqueryJobLoadTimePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobLoadTimePartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationMs = this._expirationMs;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobLoadTimePartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationMs = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationMs = value.expirationMs;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // expiration_ms - computed: false, optional: true, required: false
  private _expirationMs?: string; 
  public get expirationMs() {
    return this.getStringAttribute('expiration_ms');
  }
  public set expirationMs(value: string) {
    this._expirationMs = value;
  }
  public resetExpirationMs() {
    this._expirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationMsInput() {
    return this._expirationMs;
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
export interface GoogleBigqueryJobLoad {
  /**
  * Accept rows that are missing trailing optional columns. The missing values are treated as nulls.
  * If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
  * an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#allow_jagged_rows GoogleBigqueryJob#allow_jagged_rows}
  */
  readonly allowJaggedRows?: boolean | cdktf.IResolvable;
  /**
  * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.
  * The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#allow_quoted_newlines GoogleBigqueryJob#allow_quoted_newlines}
  */
  readonly allowQuotedNewlines?: boolean | cdktf.IResolvable;
  /**
  * Indicates if we should automatically infer the options and schema for CSV and JSON sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#autodetect GoogleBigqueryJob#autodetect}
  */
  readonly autodetect?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the job is allowed to create new tables. The following values are supported:
  * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
  * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
  * Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}
  */
  readonly createDisposition?: string;
  /**
  * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
  * The default value is UTF-8. BigQuery decodes the data after the raw, binary data
  * has been split using the values of the quote and fieldDelimiter properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#encoding GoogleBigqueryJob#encoding}
  */
  readonly encoding?: string;
  /**
  * The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character.
  * To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
  * the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
  * data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
  * The default value is a comma (',').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#field_delimiter GoogleBigqueryJob#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Indicates if BigQuery should allow extra values that are not represented in the table schema.
  * If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
  * and if there are too many bad records, an invalid error is returned in the job result.
  * The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
  * CSV: Trailing columns
  * JSON: Named values that don't match any column names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#ignore_unknown_values GoogleBigqueryJob#ignore_unknown_values}
  */
  readonly ignoreUnknownValues?: boolean | cdktf.IResolvable;
  /**
  * If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.
  * For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
  * GeoJSON: set to GEOJSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#json_extension GoogleBigqueryJob#json_extension}
  */
  readonly jsonExtension?: string;
  /**
  * The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value,
  * an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#max_bad_records GoogleBigqueryJob#max_bad_records}
  */
  readonly maxBadRecords?: number;
  /**
  * Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value
  * when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an
  * empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
  * an empty value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#null_marker GoogleBigqueryJob#null_marker}
  */
  readonly nullMarker?: string;
  /**
  * If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.
  * Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
  * If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#projection_fields GoogleBigqueryJob#projection_fields}
  */
  readonly projectionFields?: string[];
  /**
  * The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding,
  * and then uses the first byte of the encoded string to split the data in its raw, binary state.
  * The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
  * If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#quote GoogleBigqueryJob#quote}
  */
  readonly quote?: string;
  /**
  * Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or
  * supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
  * when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
  * For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
  * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
  * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}
  */
  readonly schemaUpdateOptions?: string[];
  /**
  * The number of rows at the top of a CSV file that BigQuery will skip when loading the data.
  * The default value is 0. This property is useful if you have header rows in the file that should be skipped.
  * When autodetect is on, the behavior is the following:
  * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
  * the row is read as data. Otherwise data is read starting from the second row.
  * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
  * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
  * row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#skip_leading_rows GoogleBigqueryJob#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
  /**
  * The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
  * For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
  * For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
  * The default value is CSV.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#source_format GoogleBigqueryJob#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * The fully-qualified URIs that point to your data in Google Cloud.
  * For Google Cloud Storage URIs: Each URI can contain one '\*' wildcard character
  * and it must come after the 'bucket' name. Size limits related to load jobs apply
  * to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
  * specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
  * For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '\*' wildcard character is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#source_uris GoogleBigqueryJob#source_uris}
  */
  readonly sourceUris: string[];
  /**
  * Specifies the action that occurs if the destination table already exists. The following values are supported:
  * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
  * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
  * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
  * Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
  * Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}
  */
  readonly writeDisposition?: string;
  /**
  * destination_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}
  */
  readonly destinationEncryptionConfiguration?: GoogleBigqueryJobLoadDestinationEncryptionConfiguration;
  /**
  * destination_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}
  */
  readonly destinationTable: GoogleBigqueryJobLoadDestinationTable;
  /**
  * parquet_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#parquet_options GoogleBigqueryJob#parquet_options}
  */
  readonly parquetOptions?: GoogleBigqueryJobLoadParquetOptions;
  /**
  * time_partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#time_partitioning GoogleBigqueryJob#time_partitioning}
  */
  readonly timePartitioning?: GoogleBigqueryJobLoadTimePartitioning;
}

export function googleBigqueryJobLoadToTerraform(struct?: GoogleBigqueryJobLoadOutputReference | GoogleBigqueryJobLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_jagged_rows: cdktf.booleanToTerraform(struct!.allowJaggedRows),
    allow_quoted_newlines: cdktf.booleanToTerraform(struct!.allowQuotedNewlines),
    autodetect: cdktf.booleanToTerraform(struct!.autodetect),
    create_disposition: cdktf.stringToTerraform(struct!.createDisposition),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    ignore_unknown_values: cdktf.booleanToTerraform(struct!.ignoreUnknownValues),
    json_extension: cdktf.stringToTerraform(struct!.jsonExtension),
    max_bad_records: cdktf.numberToTerraform(struct!.maxBadRecords),
    null_marker: cdktf.stringToTerraform(struct!.nullMarker),
    projection_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectionFields),
    quote: cdktf.stringToTerraform(struct!.quote),
    schema_update_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemaUpdateOptions),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    source_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUris),
    write_disposition: cdktf.stringToTerraform(struct!.writeDisposition),
    destination_encryption_configuration: googleBigqueryJobLoadDestinationEncryptionConfigurationToTerraform(struct!.destinationEncryptionConfiguration),
    destination_table: googleBigqueryJobLoadDestinationTableToTerraform(struct!.destinationTable),
    parquet_options: googleBigqueryJobLoadParquetOptionsToTerraform(struct!.parquetOptions),
    time_partitioning: googleBigqueryJobLoadTimePartitioningToTerraform(struct!.timePartitioning),
  }
}


export function googleBigqueryJobLoadToHclTerraform(struct?: GoogleBigqueryJobLoadOutputReference | GoogleBigqueryJobLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_jagged_rows: {
      value: cdktf.booleanToHclTerraform(struct!.allowJaggedRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_quoted_newlines: {
      value: cdktf.booleanToHclTerraform(struct!.allowQuotedNewlines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autodetect: {
      value: cdktf.booleanToHclTerraform(struct!.autodetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_disposition: {
      value: cdktf.stringToHclTerraform(struct!.createDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_unknown_values: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnknownValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_extension: {
      value: cdktf.stringToHclTerraform(struct!.jsonExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bad_records: {
      value: cdktf.numberToHclTerraform(struct!.maxBadRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    null_marker: {
      value: cdktf.stringToHclTerraform(struct!.nullMarker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    projection_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectionFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quote: {
      value: cdktf.stringToHclTerraform(struct!.quote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_update_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemaUpdateOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_leading_rows: {
      value: cdktf.numberToHclTerraform(struct!.skipLeadingRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_format: {
      value: cdktf.stringToHclTerraform(struct!.sourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    write_disposition: {
      value: cdktf.stringToHclTerraform(struct!.writeDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_encryption_configuration: {
      value: googleBigqueryJobLoadDestinationEncryptionConfigurationToHclTerraform(struct!.destinationEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobLoadDestinationEncryptionConfigurationList",
    },
    destination_table: {
      value: googleBigqueryJobLoadDestinationTableToHclTerraform(struct!.destinationTable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobLoadDestinationTableList",
    },
    parquet_options: {
      value: googleBigqueryJobLoadParquetOptionsToHclTerraform(struct!.parquetOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobLoadParquetOptionsList",
    },
    time_partitioning: {
      value: googleBigqueryJobLoadTimePartitioningToHclTerraform(struct!.timePartitioning),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobLoadTimePartitioningList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowJaggedRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowJaggedRows = this._allowJaggedRows;
    }
    if (this._allowQuotedNewlines !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQuotedNewlines = this._allowQuotedNewlines;
    }
    if (this._autodetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodetect = this._autodetect;
    }
    if (this._createDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDisposition = this._createDisposition;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._ignoreUnknownValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnknownValues = this._ignoreUnknownValues;
    }
    if (this._jsonExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonExtension = this._jsonExtension;
    }
    if (this._maxBadRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBadRecords = this._maxBadRecords;
    }
    if (this._nullMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullMarker = this._nullMarker;
    }
    if (this._projectionFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionFields = this._projectionFields;
    }
    if (this._quote !== undefined) {
      hasAnyValues = true;
      internalValueResult.quote = this._quote;
    }
    if (this._schemaUpdateOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaUpdateOptions = this._schemaUpdateOptions;
    }
    if (this._skipLeadingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLeadingRows = this._skipLeadingRows;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._sourceUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUris = this._sourceUris;
    }
    if (this._writeDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeDisposition = this._writeDisposition;
    }
    if (this._destinationEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEncryptionConfiguration = this._destinationEncryptionConfiguration?.internalValue;
    }
    if (this._destinationTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable?.internalValue;
    }
    if (this._parquetOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetOptions = this._parquetOptions?.internalValue;
    }
    if (this._timePartitioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePartitioning = this._timePartitioning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowJaggedRows = undefined;
      this._allowQuotedNewlines = undefined;
      this._autodetect = undefined;
      this._createDisposition = undefined;
      this._encoding = undefined;
      this._fieldDelimiter = undefined;
      this._ignoreUnknownValues = undefined;
      this._jsonExtension = undefined;
      this._maxBadRecords = undefined;
      this._nullMarker = undefined;
      this._projectionFields = undefined;
      this._quote = undefined;
      this._schemaUpdateOptions = undefined;
      this._skipLeadingRows = undefined;
      this._sourceFormat = undefined;
      this._sourceUris = undefined;
      this._writeDisposition = undefined;
      this._destinationEncryptionConfiguration.internalValue = undefined;
      this._destinationTable.internalValue = undefined;
      this._parquetOptions.internalValue = undefined;
      this._timePartitioning.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowJaggedRows = value.allowJaggedRows;
      this._allowQuotedNewlines = value.allowQuotedNewlines;
      this._autodetect = value.autodetect;
      this._createDisposition = value.createDisposition;
      this._encoding = value.encoding;
      this._fieldDelimiter = value.fieldDelimiter;
      this._ignoreUnknownValues = value.ignoreUnknownValues;
      this._jsonExtension = value.jsonExtension;
      this._maxBadRecords = value.maxBadRecords;
      this._nullMarker = value.nullMarker;
      this._projectionFields = value.projectionFields;
      this._quote = value.quote;
      this._schemaUpdateOptions = value.schemaUpdateOptions;
      this._skipLeadingRows = value.skipLeadingRows;
      this._sourceFormat = value.sourceFormat;
      this._sourceUris = value.sourceUris;
      this._writeDisposition = value.writeDisposition;
      this._destinationEncryptionConfiguration.internalValue = value.destinationEncryptionConfiguration;
      this._destinationTable.internalValue = value.destinationTable;
      this._parquetOptions.internalValue = value.parquetOptions;
      this._timePartitioning.internalValue = value.timePartitioning;
    }
  }

  // allow_jagged_rows - computed: false, optional: true, required: false
  private _allowJaggedRows?: boolean | cdktf.IResolvable; 
  public get allowJaggedRows() {
    return this.getBooleanAttribute('allow_jagged_rows');
  }
  public set allowJaggedRows(value: boolean | cdktf.IResolvable) {
    this._allowJaggedRows = value;
  }
  public resetAllowJaggedRows() {
    this._allowJaggedRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowJaggedRowsInput() {
    return this._allowJaggedRows;
  }

  // allow_quoted_newlines - computed: false, optional: true, required: false
  private _allowQuotedNewlines?: boolean | cdktf.IResolvable; 
  public get allowQuotedNewlines() {
    return this.getBooleanAttribute('allow_quoted_newlines');
  }
  public set allowQuotedNewlines(value: boolean | cdktf.IResolvable) {
    this._allowQuotedNewlines = value;
  }
  public resetAllowQuotedNewlines() {
    this._allowQuotedNewlines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQuotedNewlinesInput() {
    return this._allowQuotedNewlines;
  }

  // autodetect - computed: false, optional: true, required: false
  private _autodetect?: boolean | cdktf.IResolvable; 
  public get autodetect() {
    return this.getBooleanAttribute('autodetect');
  }
  public set autodetect(value: boolean | cdktf.IResolvable) {
    this._autodetect = value;
  }
  public resetAutodetect() {
    this._autodetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectInput() {
    return this._autodetect;
  }

  // create_disposition - computed: false, optional: true, required: false
  private _createDisposition?: string; 
  public get createDisposition() {
    return this.getStringAttribute('create_disposition');
  }
  public set createDisposition(value: string) {
    this._createDisposition = value;
  }
  public resetCreateDisposition() {
    this._createDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDispositionInput() {
    return this._createDisposition;
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

  // field_delimiter - computed: true, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // ignore_unknown_values - computed: false, optional: true, required: false
  private _ignoreUnknownValues?: boolean | cdktf.IResolvable; 
  public get ignoreUnknownValues() {
    return this.getBooleanAttribute('ignore_unknown_values');
  }
  public set ignoreUnknownValues(value: boolean | cdktf.IResolvable) {
    this._ignoreUnknownValues = value;
  }
  public resetIgnoreUnknownValues() {
    this._ignoreUnknownValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownValuesInput() {
    return this._ignoreUnknownValues;
  }

  // json_extension - computed: false, optional: true, required: false
  private _jsonExtension?: string; 
  public get jsonExtension() {
    return this.getStringAttribute('json_extension');
  }
  public set jsonExtension(value: string) {
    this._jsonExtension = value;
  }
  public resetJsonExtension() {
    this._jsonExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonExtensionInput() {
    return this._jsonExtension;
  }

  // max_bad_records - computed: false, optional: true, required: false
  private _maxBadRecords?: number; 
  public get maxBadRecords() {
    return this.getNumberAttribute('max_bad_records');
  }
  public set maxBadRecords(value: number) {
    this._maxBadRecords = value;
  }
  public resetMaxBadRecords() {
    this._maxBadRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRecordsInput() {
    return this._maxBadRecords;
  }

  // null_marker - computed: false, optional: true, required: false
  private _nullMarker?: string; 
  public get nullMarker() {
    return this.getStringAttribute('null_marker');
  }
  public set nullMarker(value: string) {
    this._nullMarker = value;
  }
  public resetNullMarker() {
    this._nullMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullMarkerInput() {
    return this._nullMarker;
  }

  // projection_fields - computed: false, optional: true, required: false
  private _projectionFields?: string[]; 
  public get projectionFields() {
    return this.getListAttribute('projection_fields');
  }
  public set projectionFields(value: string[]) {
    this._projectionFields = value;
  }
  public resetProjectionFields() {
    this._projectionFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionFieldsInput() {
    return this._projectionFields;
  }

  // quote - computed: true, optional: true, required: false
  private _quote?: string; 
  public get quote() {
    return this.getStringAttribute('quote');
  }
  public set quote(value: string) {
    this._quote = value;
  }
  public resetQuote() {
    this._quote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteInput() {
    return this._quote;
  }

  // schema_update_options - computed: false, optional: true, required: false
  private _schemaUpdateOptions?: string[]; 
  public get schemaUpdateOptions() {
    return this.getListAttribute('schema_update_options');
  }
  public set schemaUpdateOptions(value: string[]) {
    this._schemaUpdateOptions = value;
  }
  public resetSchemaUpdateOptions() {
    this._schemaUpdateOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaUpdateOptionsInput() {
    return this._schemaUpdateOptions;
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows;
  }

  // source_format - computed: false, optional: true, required: false
  private _sourceFormat?: string; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  public resetSourceFormat() {
    this._sourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // source_uris - computed: false, optional: false, required: true
  private _sourceUris?: string[]; 
  public get sourceUris() {
    return this.getListAttribute('source_uris');
  }
  public set sourceUris(value: string[]) {
    this._sourceUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrisInput() {
    return this._sourceUris;
  }

  // write_disposition - computed: false, optional: true, required: false
  private _writeDisposition?: string; 
  public get writeDisposition() {
    return this.getStringAttribute('write_disposition');
  }
  public set writeDisposition(value: string) {
    this._writeDisposition = value;
  }
  public resetWriteDisposition() {
    this._writeDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDispositionInput() {
    return this._writeDisposition;
  }

  // destination_encryption_configuration - computed: false, optional: true, required: false
  private _destinationEncryptionConfiguration = new GoogleBigqueryJobLoadDestinationEncryptionConfigurationOutputReference(this, "destination_encryption_configuration");
  public get destinationEncryptionConfiguration() {
    return this._destinationEncryptionConfiguration;
  }
  public putDestinationEncryptionConfiguration(value: GoogleBigqueryJobLoadDestinationEncryptionConfiguration) {
    this._destinationEncryptionConfiguration.internalValue = value;
  }
  public resetDestinationEncryptionConfiguration() {
    this._destinationEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionConfigurationInput() {
    return this._destinationEncryptionConfiguration.internalValue;
  }

  // destination_table - computed: false, optional: false, required: true
  private _destinationTable = new GoogleBigqueryJobLoadDestinationTableOutputReference(this, "destination_table");
  public get destinationTable() {
    return this._destinationTable;
  }
  public putDestinationTable(value: GoogleBigqueryJobLoadDestinationTable) {
    this._destinationTable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable.internalValue;
  }

  // parquet_options - computed: false, optional: true, required: false
  private _parquetOptions = new GoogleBigqueryJobLoadParquetOptionsOutputReference(this, "parquet_options");
  public get parquetOptions() {
    return this._parquetOptions;
  }
  public putParquetOptions(value: GoogleBigqueryJobLoadParquetOptions) {
    this._parquetOptions.internalValue = value;
  }
  public resetParquetOptions() {
    this._parquetOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetOptionsInput() {
    return this._parquetOptions.internalValue;
  }

  // time_partitioning - computed: false, optional: true, required: false
  private _timePartitioning = new GoogleBigqueryJobLoadTimePartitioningOutputReference(this, "time_partitioning");
  public get timePartitioning() {
    return this._timePartitioning;
  }
  public putTimePartitioning(value: GoogleBigqueryJobLoadTimePartitioning) {
    this._timePartitioning.internalValue = value;
  }
  public resetTimePartitioning() {
    this._timePartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartitioningInput() {
    return this._timePartitioning.internalValue;
  }
}
export interface GoogleBigqueryJobQueryDefaultDataset {
  /**
  * The dataset. Can be specified '{{dataset_id}}' if 'project_id' is also set,
  * or of the form 'projects/{{project}}/datasets/{{dataset_id}}' if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}
  */
  readonly projectId?: string;
}

export function googleBigqueryJobQueryDefaultDatasetToTerraform(struct?: GoogleBigqueryJobQueryDefaultDatasetOutputReference | GoogleBigqueryJobQueryDefaultDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function googleBigqueryJobQueryDefaultDatasetToHclTerraform(struct?: GoogleBigqueryJobQueryDefaultDatasetOutputReference | GoogleBigqueryJobQueryDefaultDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobQueryDefaultDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobQueryDefaultDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobQueryDefaultDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface GoogleBigqueryJobQueryDestinationEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
  * The BigQuery Service Account associated with your project requires access to this encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#kms_key_name GoogleBigqueryJob#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleBigqueryJobQueryDestinationEncryptionConfigurationToTerraform(struct?: GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference | GoogleBigqueryJobQueryDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleBigqueryJobQueryDestinationEncryptionConfigurationToHclTerraform(struct?: GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference | GoogleBigqueryJobQueryDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobQueryDestinationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobQueryDestinationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // kms_key_version - computed: true, optional: false, required: false
  public get kmsKeyVersion() {
    return this.getStringAttribute('kms_key_version');
  }
}
export interface GoogleBigqueryJobQueryDestinationTable {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#dataset_id GoogleBigqueryJob#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#project_id GoogleBigqueryJob#project_id}
  */
  readonly projectId?: string;
  /**
  * The table. Can be specified '{{table_id}}' if 'project_id' and 'dataset_id' are also set,
  * or of the form 'projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}' if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#table_id GoogleBigqueryJob#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryJobQueryDestinationTableToTerraform(struct?: GoogleBigqueryJobQueryDestinationTableOutputReference | GoogleBigqueryJobQueryDestinationTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleBigqueryJobQueryDestinationTableToHclTerraform(struct?: GoogleBigqueryJobQueryDestinationTableOutputReference | GoogleBigqueryJobQueryDestinationTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobQueryDestinationTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobQueryDestinationTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobQueryDestinationTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleBigqueryJobQueryScriptOptions {
  /**
  * Determines which statement in the script represents the "key result",
  * used to populate the schema and query results of the script job. Possible values: ["LAST", "FIRST_SELECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#key_result_statement GoogleBigqueryJob#key_result_statement}
  */
  readonly keyResultStatement?: string;
  /**
  * Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#statement_byte_budget GoogleBigqueryJob#statement_byte_budget}
  */
  readonly statementByteBudget?: string;
  /**
  * Timeout period for each statement in a script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#statement_timeout_ms GoogleBigqueryJob#statement_timeout_ms}
  */
  readonly statementTimeoutMs?: string;
}

export function googleBigqueryJobQueryScriptOptionsToTerraform(struct?: GoogleBigqueryJobQueryScriptOptionsOutputReference | GoogleBigqueryJobQueryScriptOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_result_statement: cdktf.stringToTerraform(struct!.keyResultStatement),
    statement_byte_budget: cdktf.stringToTerraform(struct!.statementByteBudget),
    statement_timeout_ms: cdktf.stringToTerraform(struct!.statementTimeoutMs),
  }
}


export function googleBigqueryJobQueryScriptOptionsToHclTerraform(struct?: GoogleBigqueryJobQueryScriptOptionsOutputReference | GoogleBigqueryJobQueryScriptOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_result_statement: {
      value: cdktf.stringToHclTerraform(struct!.keyResultStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement_byte_budget: {
      value: cdktf.stringToHclTerraform(struct!.statementByteBudget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement_timeout_ms: {
      value: cdktf.stringToHclTerraform(struct!.statementTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobQueryScriptOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobQueryScriptOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyResultStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyResultStatement = this._keyResultStatement;
    }
    if (this._statementByteBudget !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementByteBudget = this._statementByteBudget;
    }
    if (this._statementTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.statementTimeoutMs = this._statementTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobQueryScriptOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyResultStatement = undefined;
      this._statementByteBudget = undefined;
      this._statementTimeoutMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyResultStatement = value.keyResultStatement;
      this._statementByteBudget = value.statementByteBudget;
      this._statementTimeoutMs = value.statementTimeoutMs;
    }
  }

  // key_result_statement - computed: false, optional: true, required: false
  private _keyResultStatement?: string; 
  public get keyResultStatement() {
    return this.getStringAttribute('key_result_statement');
  }
  public set keyResultStatement(value: string) {
    this._keyResultStatement = value;
  }
  public resetKeyResultStatement() {
    this._keyResultStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyResultStatementInput() {
    return this._keyResultStatement;
  }

  // statement_byte_budget - computed: false, optional: true, required: false
  private _statementByteBudget?: string; 
  public get statementByteBudget() {
    return this.getStringAttribute('statement_byte_budget');
  }
  public set statementByteBudget(value: string) {
    this._statementByteBudget = value;
  }
  public resetStatementByteBudget() {
    this._statementByteBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementByteBudgetInput() {
    return this._statementByteBudget;
  }

  // statement_timeout_ms - computed: false, optional: true, required: false
  private _statementTimeoutMs?: string; 
  public get statementTimeoutMs() {
    return this.getStringAttribute('statement_timeout_ms');
  }
  public set statementTimeoutMs(value: string) {
    this._statementTimeoutMs = value;
  }
  public resetStatementTimeoutMs() {
    this._statementTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementTimeoutMsInput() {
    return this._statementTimeoutMs;
  }
}
export interface GoogleBigqueryJobQueryUserDefinedFunctionResources {
  /**
  * An inline resource that contains code for a user-defined function (UDF).
  * Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#inline_code GoogleBigqueryJob#inline_code}
  */
  readonly inlineCode?: string;
  /**
  * A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#resource_uri GoogleBigqueryJob#resource_uri}
  */
  readonly resourceUri?: string;
}

export function googleBigqueryJobQueryUserDefinedFunctionResourcesToTerraform(struct?: GoogleBigqueryJobQueryUserDefinedFunctionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_code: cdktf.stringToTerraform(struct!.inlineCode),
    resource_uri: cdktf.stringToTerraform(struct!.resourceUri),
  }
}


export function googleBigqueryJobQueryUserDefinedFunctionResourcesToHclTerraform(struct?: GoogleBigqueryJobQueryUserDefinedFunctionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_code: {
      value: cdktf.stringToHclTerraform(struct!.inlineCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_uri: {
      value: cdktf.stringToHclTerraform(struct!.resourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryJobQueryUserDefinedFunctionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlineCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineCode = this._inlineCode;
    }
    if (this._resourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUri = this._resourceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobQueryUserDefinedFunctionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inlineCode = undefined;
      this._resourceUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inlineCode = value.inlineCode;
      this._resourceUri = value.resourceUri;
    }
  }

  // inline_code - computed: false, optional: true, required: false
  private _inlineCode?: string; 
  public get inlineCode() {
    return this.getStringAttribute('inline_code');
  }
  public set inlineCode(value: string) {
    this._inlineCode = value;
  }
  public resetInlineCode() {
    this._inlineCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineCodeInput() {
    return this._inlineCode;
  }

  // resource_uri - computed: false, optional: true, required: false
  private _resourceUri?: string; 
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }
  public set resourceUri(value: string) {
    this._resourceUri = value;
  }
  public resetResourceUri() {
    this._resourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUriInput() {
    return this._resourceUri;
  }
}

export class GoogleBigqueryJobQueryUserDefinedFunctionResourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleBigqueryJobQueryUserDefinedFunctionResources[] | cdktf.IResolvable

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
  public get(index: number): GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference {
    return new GoogleBigqueryJobQueryUserDefinedFunctionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryJobQuery {
  /**
  * If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance.
  * Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed.
  * However, you must still set destinationTable when result size exceeds the allowed maximum response size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#allow_large_results GoogleBigqueryJob#allow_large_results}
  */
  readonly allowLargeResults?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the job is allowed to create new tables. The following values are supported:
  * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
  * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
  * Creation, truncation and append actions occur as one atomic update upon job completion Default value: "CREATE_IF_NEEDED" Possible values: ["CREATE_IF_NEEDED", "CREATE_NEVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#create_disposition GoogleBigqueryJob#create_disposition}
  */
  readonly createDisposition?: string;
  /**
  * If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results.
  * allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#flatten_results GoogleBigqueryJob#flatten_results}
  */
  readonly flattenResults?: boolean | cdktf.IResolvable;
  /**
  * Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge).
  * If unspecified, this will be set to your project default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#maximum_billing_tier GoogleBigqueryJob#maximum_billing_tier}
  */
  readonly maximumBillingTier?: number;
  /**
  * Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge).
  * If unspecified, this will be set to your project default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#maximum_bytes_billed GoogleBigqueryJob#maximum_bytes_billed}
  */
  readonly maximumBytesBilled?: string;
  /**
  * Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#parameter_mode GoogleBigqueryJob#parameter_mode}
  */
  readonly parameterMode?: string;
  /**
  * Specifies a priority for the query. Default value: "INTERACTIVE" Possible values: ["INTERACTIVE", "BATCH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#priority GoogleBigqueryJob#priority}
  */
  readonly priority?: string;
  /**
  * SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
  * *NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
  * ('DELETE', 'UPDATE', 'MERGE', 'INSERT') must specify 'create_disposition = ""' and 'write_disposition = ""'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#query GoogleBigqueryJob#query}
  */
  readonly query: string;
  /**
  * Allows the schema of the destination table to be updated as a side effect of the query job.
  * Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
  * when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table,
  * specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema.
  * One or more of the following values are specified:
  * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
  * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#schema_update_options GoogleBigqueryJob#schema_update_options}
  */
  readonly schemaUpdateOptions?: string[];
  /**
  * Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true.
  * If set to false, the query will use BigQuery's standard SQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#use_legacy_sql GoogleBigqueryJob#use_legacy_sql}
  */
  readonly useLegacySql?: boolean | cdktf.IResolvable;
  /**
  * Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever
  * tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified.
  * The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#use_query_cache GoogleBigqueryJob#use_query_cache}
  */
  readonly useQueryCache?: boolean | cdktf.IResolvable;
  /**
  * Specifies the action that occurs if the destination table already exists. The following values are supported:
  * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
  * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
  * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
  * Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
  * Creation, truncation and append actions occur as one atomic update upon job completion. Default value: "WRITE_EMPTY" Possible values: ["WRITE_TRUNCATE", "WRITE_APPEND", "WRITE_EMPTY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#write_disposition GoogleBigqueryJob#write_disposition}
  */
  readonly writeDisposition?: string;
  /**
  * default_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#default_dataset GoogleBigqueryJob#default_dataset}
  */
  readonly defaultDataset?: GoogleBigqueryJobQueryDefaultDataset;
  /**
  * destination_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_encryption_configuration GoogleBigqueryJob#destination_encryption_configuration}
  */
  readonly destinationEncryptionConfiguration?: GoogleBigqueryJobQueryDestinationEncryptionConfiguration;
  /**
  * destination_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#destination_table GoogleBigqueryJob#destination_table}
  */
  readonly destinationTable?: GoogleBigqueryJobQueryDestinationTable;
  /**
  * script_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#script_options GoogleBigqueryJob#script_options}
  */
  readonly scriptOptions?: GoogleBigqueryJobQueryScriptOptions;
  /**
  * user_defined_function_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#user_defined_function_resources GoogleBigqueryJob#user_defined_function_resources}
  */
  readonly userDefinedFunctionResources?: GoogleBigqueryJobQueryUserDefinedFunctionResources[] | cdktf.IResolvable;
}

export function googleBigqueryJobQueryToTerraform(struct?: GoogleBigqueryJobQueryOutputReference | GoogleBigqueryJobQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_large_results: cdktf.booleanToTerraform(struct!.allowLargeResults),
    create_disposition: cdktf.stringToTerraform(struct!.createDisposition),
    flatten_results: cdktf.booleanToTerraform(struct!.flattenResults),
    maximum_billing_tier: cdktf.numberToTerraform(struct!.maximumBillingTier),
    maximum_bytes_billed: cdktf.stringToTerraform(struct!.maximumBytesBilled),
    parameter_mode: cdktf.stringToTerraform(struct!.parameterMode),
    priority: cdktf.stringToTerraform(struct!.priority),
    query: cdktf.stringToTerraform(struct!.query),
    schema_update_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemaUpdateOptions),
    use_legacy_sql: cdktf.booleanToTerraform(struct!.useLegacySql),
    use_query_cache: cdktf.booleanToTerraform(struct!.useQueryCache),
    write_disposition: cdktf.stringToTerraform(struct!.writeDisposition),
    default_dataset: googleBigqueryJobQueryDefaultDatasetToTerraform(struct!.defaultDataset),
    destination_encryption_configuration: googleBigqueryJobQueryDestinationEncryptionConfigurationToTerraform(struct!.destinationEncryptionConfiguration),
    destination_table: googleBigqueryJobQueryDestinationTableToTerraform(struct!.destinationTable),
    script_options: googleBigqueryJobQueryScriptOptionsToTerraform(struct!.scriptOptions),
    user_defined_function_resources: cdktf.listMapper(googleBigqueryJobQueryUserDefinedFunctionResourcesToTerraform, true)(struct!.userDefinedFunctionResources),
  }
}


export function googleBigqueryJobQueryToHclTerraform(struct?: GoogleBigqueryJobQueryOutputReference | GoogleBigqueryJobQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_large_results: {
      value: cdktf.booleanToHclTerraform(struct!.allowLargeResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_disposition: {
      value: cdktf.stringToHclTerraform(struct!.createDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flatten_results: {
      value: cdktf.booleanToHclTerraform(struct!.flattenResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_billing_tier: {
      value: cdktf.numberToHclTerraform(struct!.maximumBillingTier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_bytes_billed: {
      value: cdktf.stringToHclTerraform(struct!.maximumBytesBilled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_mode: {
      value: cdktf.stringToHclTerraform(struct!.parameterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
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
    schema_update_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemaUpdateOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_legacy_sql: {
      value: cdktf.booleanToHclTerraform(struct!.useLegacySql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_query_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useQueryCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_disposition: {
      value: cdktf.stringToHclTerraform(struct!.writeDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_dataset: {
      value: googleBigqueryJobQueryDefaultDatasetToHclTerraform(struct!.defaultDataset),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobQueryDefaultDatasetList",
    },
    destination_encryption_configuration: {
      value: googleBigqueryJobQueryDestinationEncryptionConfigurationToHclTerraform(struct!.destinationEncryptionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobQueryDestinationEncryptionConfigurationList",
    },
    destination_table: {
      value: googleBigqueryJobQueryDestinationTableToHclTerraform(struct!.destinationTable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobQueryDestinationTableList",
    },
    script_options: {
      value: googleBigqueryJobQueryScriptOptionsToHclTerraform(struct!.scriptOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobQueryScriptOptionsList",
    },
    user_defined_function_resources: {
      value: cdktf.listMapperHcl(googleBigqueryJobQueryUserDefinedFunctionResourcesToHclTerraform, true)(struct!.userDefinedFunctionResources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryJobQueryUserDefinedFunctionResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryJobQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryJobQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowLargeResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLargeResults = this._allowLargeResults;
    }
    if (this._createDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDisposition = this._createDisposition;
    }
    if (this._flattenResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenResults = this._flattenResults;
    }
    if (this._maximumBillingTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBillingTier = this._maximumBillingTier;
    }
    if (this._maximumBytesBilled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBytesBilled = this._maximumBytesBilled;
    }
    if (this._parameterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterMode = this._parameterMode;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._schemaUpdateOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaUpdateOptions = this._schemaUpdateOptions;
    }
    if (this._useLegacySql !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLegacySql = this._useLegacySql;
    }
    if (this._useQueryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useQueryCache = this._useQueryCache;
    }
    if (this._writeDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeDisposition = this._writeDisposition;
    }
    if (this._defaultDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDataset = this._defaultDataset?.internalValue;
    }
    if (this._destinationEncryptionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEncryptionConfiguration = this._destinationEncryptionConfiguration?.internalValue;
    }
    if (this._destinationTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTable = this._destinationTable?.internalValue;
    }
    if (this._scriptOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptOptions = this._scriptOptions?.internalValue;
    }
    if (this._userDefinedFunctionResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedFunctionResources = this._userDefinedFunctionResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryJobQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowLargeResults = undefined;
      this._createDisposition = undefined;
      this._flattenResults = undefined;
      this._maximumBillingTier = undefined;
      this._maximumBytesBilled = undefined;
      this._parameterMode = undefined;
      this._priority = undefined;
      this._query = undefined;
      this._schemaUpdateOptions = undefined;
      this._useLegacySql = undefined;
      this._useQueryCache = undefined;
      this._writeDisposition = undefined;
      this._defaultDataset.internalValue = undefined;
      this._destinationEncryptionConfiguration.internalValue = undefined;
      this._destinationTable.internalValue = undefined;
      this._scriptOptions.internalValue = undefined;
      this._userDefinedFunctionResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowLargeResults = value.allowLargeResults;
      this._createDisposition = value.createDisposition;
      this._flattenResults = value.flattenResults;
      this._maximumBillingTier = value.maximumBillingTier;
      this._maximumBytesBilled = value.maximumBytesBilled;
      this._parameterMode = value.parameterMode;
      this._priority = value.priority;
      this._query = value.query;
      this._schemaUpdateOptions = value.schemaUpdateOptions;
      this._useLegacySql = value.useLegacySql;
      this._useQueryCache = value.useQueryCache;
      this._writeDisposition = value.writeDisposition;
      this._defaultDataset.internalValue = value.defaultDataset;
      this._destinationEncryptionConfiguration.internalValue = value.destinationEncryptionConfiguration;
      this._destinationTable.internalValue = value.destinationTable;
      this._scriptOptions.internalValue = value.scriptOptions;
      this._userDefinedFunctionResources.internalValue = value.userDefinedFunctionResources;
    }
  }

  // allow_large_results - computed: false, optional: true, required: false
  private _allowLargeResults?: boolean | cdktf.IResolvable; 
  public get allowLargeResults() {
    return this.getBooleanAttribute('allow_large_results');
  }
  public set allowLargeResults(value: boolean | cdktf.IResolvable) {
    this._allowLargeResults = value;
  }
  public resetAllowLargeResults() {
    this._allowLargeResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLargeResultsInput() {
    return this._allowLargeResults;
  }

  // create_disposition - computed: false, optional: true, required: false
  private _createDisposition?: string; 
  public get createDisposition() {
    return this.getStringAttribute('create_disposition');
  }
  public set createDisposition(value: string) {
    this._createDisposition = value;
  }
  public resetCreateDisposition() {
    this._createDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDispositionInput() {
    return this._createDisposition;
  }

  // flatten_results - computed: false, optional: true, required: false
  private _flattenResults?: boolean | cdktf.IResolvable; 
  public get flattenResults() {
    return this.getBooleanAttribute('flatten_results');
  }
  public set flattenResults(value: boolean | cdktf.IResolvable) {
    this._flattenResults = value;
  }
  public resetFlattenResults() {
    this._flattenResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenResultsInput() {
    return this._flattenResults;
  }

  // maximum_billing_tier - computed: false, optional: true, required: false
  private _maximumBillingTier?: number; 
  public get maximumBillingTier() {
    return this.getNumberAttribute('maximum_billing_tier');
  }
  public set maximumBillingTier(value: number) {
    this._maximumBillingTier = value;
  }
  public resetMaximumBillingTier() {
    this._maximumBillingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBillingTierInput() {
    return this._maximumBillingTier;
  }

  // maximum_bytes_billed - computed: false, optional: true, required: false
  private _maximumBytesBilled?: string; 
  public get maximumBytesBilled() {
    return this.getStringAttribute('maximum_bytes_billed');
  }
  public set maximumBytesBilled(value: string) {
    this._maximumBytesBilled = value;
  }
  public resetMaximumBytesBilled() {
    this._maximumBytesBilled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesBilledInput() {
    return this._maximumBytesBilled;
  }

  // parameter_mode - computed: false, optional: true, required: false
  private _parameterMode?: string; 
  public get parameterMode() {
    return this.getStringAttribute('parameter_mode');
  }
  public set parameterMode(value: string) {
    this._parameterMode = value;
  }
  public resetParameterMode() {
    this._parameterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterModeInput() {
    return this._parameterMode;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // schema_update_options - computed: false, optional: true, required: false
  private _schemaUpdateOptions?: string[]; 
  public get schemaUpdateOptions() {
    return this.getListAttribute('schema_update_options');
  }
  public set schemaUpdateOptions(value: string[]) {
    this._schemaUpdateOptions = value;
  }
  public resetSchemaUpdateOptions() {
    this._schemaUpdateOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaUpdateOptionsInput() {
    return this._schemaUpdateOptions;
  }

  // use_legacy_sql - computed: false, optional: true, required: false
  private _useLegacySql?: boolean | cdktf.IResolvable; 
  public get useLegacySql() {
    return this.getBooleanAttribute('use_legacy_sql');
  }
  public set useLegacySql(value: boolean | cdktf.IResolvable) {
    this._useLegacySql = value;
  }
  public resetUseLegacySql() {
    this._useLegacySql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacySqlInput() {
    return this._useLegacySql;
  }

  // use_query_cache - computed: false, optional: true, required: false
  private _useQueryCache?: boolean | cdktf.IResolvable; 
  public get useQueryCache() {
    return this.getBooleanAttribute('use_query_cache');
  }
  public set useQueryCache(value: boolean | cdktf.IResolvable) {
    this._useQueryCache = value;
  }
  public resetUseQueryCache() {
    this._useQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useQueryCacheInput() {
    return this._useQueryCache;
  }

  // write_disposition - computed: false, optional: true, required: false
  private _writeDisposition?: string; 
  public get writeDisposition() {
    return this.getStringAttribute('write_disposition');
  }
  public set writeDisposition(value: string) {
    this._writeDisposition = value;
  }
  public resetWriteDisposition() {
    this._writeDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDispositionInput() {
    return this._writeDisposition;
  }

  // default_dataset - computed: false, optional: true, required: false
  private _defaultDataset = new GoogleBigqueryJobQueryDefaultDatasetOutputReference(this, "default_dataset");
  public get defaultDataset() {
    return this._defaultDataset;
  }
  public putDefaultDataset(value: GoogleBigqueryJobQueryDefaultDataset) {
    this._defaultDataset.internalValue = value;
  }
  public resetDefaultDataset() {
    this._defaultDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatasetInput() {
    return this._defaultDataset.internalValue;
  }

  // destination_encryption_configuration - computed: false, optional: true, required: false
  private _destinationEncryptionConfiguration = new GoogleBigqueryJobQueryDestinationEncryptionConfigurationOutputReference(this, "destination_encryption_configuration");
  public get destinationEncryptionConfiguration() {
    return this._destinationEncryptionConfiguration;
  }
  public putDestinationEncryptionConfiguration(value: GoogleBigqueryJobQueryDestinationEncryptionConfiguration) {
    this._destinationEncryptionConfiguration.internalValue = value;
  }
  public resetDestinationEncryptionConfiguration() {
    this._destinationEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEncryptionConfigurationInput() {
    return this._destinationEncryptionConfiguration.internalValue;
  }

  // destination_table - computed: false, optional: true, required: false
  private _destinationTable = new GoogleBigqueryJobQueryDestinationTableOutputReference(this, "destination_table");
  public get destinationTable() {
    return this._destinationTable;
  }
  public putDestinationTable(value: GoogleBigqueryJobQueryDestinationTable) {
    this._destinationTable.internalValue = value;
  }
  public resetDestinationTable() {
    this._destinationTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable.internalValue;
  }

  // script_options - computed: false, optional: true, required: false
  private _scriptOptions = new GoogleBigqueryJobQueryScriptOptionsOutputReference(this, "script_options");
  public get scriptOptions() {
    return this._scriptOptions;
  }
  public putScriptOptions(value: GoogleBigqueryJobQueryScriptOptions) {
    this._scriptOptions.internalValue = value;
  }
  public resetScriptOptions() {
    this._scriptOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptOptionsInput() {
    return this._scriptOptions.internalValue;
  }

  // user_defined_function_resources - computed: false, optional: true, required: false
  private _userDefinedFunctionResources = new GoogleBigqueryJobQueryUserDefinedFunctionResourcesList(this, "user_defined_function_resources", false);
  public get userDefinedFunctionResources() {
    return this._userDefinedFunctionResources;
  }
  public putUserDefinedFunctionResources(value: GoogleBigqueryJobQueryUserDefinedFunctionResources[] | cdktf.IResolvable) {
    this._userDefinedFunctionResources.internalValue = value;
  }
  public resetUserDefinedFunctionResources() {
    this._userDefinedFunctionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedFunctionResourcesInput() {
    return this._userDefinedFunctionResources.internalValue;
  }
}
export interface GoogleBigqueryJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#create GoogleBigqueryJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#delete GoogleBigqueryJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#update GoogleBigqueryJob#update}
  */
  readonly update?: string;
}

export function googleBigqueryJobTimeoutsToTerraform(struct?: GoogleBigqueryJobTimeouts | cdktf.IResolvable): any {
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


export function googleBigqueryJobTimeoutsToHclTerraform(struct?: GoogleBigqueryJobTimeouts | cdktf.IResolvable): any {
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

export class GoogleBigqueryJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBigqueryJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBigqueryJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job google_bigquery_job}
*/
export class GoogleBigqueryJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBigqueryJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBigqueryJob to import
  * @param importFromId The id of the existing GoogleBigqueryJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBigqueryJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigquery_job google_bigquery_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
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
    this._id = config.id;
    this._jobId = config.jobId;
    this._jobTimeoutMs = config.jobTimeoutMs;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._copy.internalValue = config.copy;
    this._extract.internalValue = config.extract;
    this._load.internalValue = config.load;
    this._query.internalValue = config.query;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_timeout_ms - computed: false, optional: true, required: false
  private _jobTimeoutMs?: string; 
  public get jobTimeoutMs() {
    return this.getStringAttribute('job_timeout_ms');
  }
  public set jobTimeoutMs(value: string) {
    this._jobTimeoutMs = value;
  }
  public resetJobTimeoutMs() {
    this._jobTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutMsInput() {
    return this._jobTimeoutMs;
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
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

  // status - computed: true, optional: false, required: false
  private _status = new GoogleBigqueryJobStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // user_email - computed: true, optional: false, required: false
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }

  // copy - computed: false, optional: true, required: false
  private _copy = new GoogleBigqueryJobCopyOutputReference(this, "copy");
  public get copy() {
    return this._copy;
  }
  public putCopy(value: GoogleBigqueryJobCopy) {
    this._copy.internalValue = value;
  }
  public resetCopy() {
    this._copy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyInput() {
    return this._copy.internalValue;
  }

  // extract - computed: false, optional: true, required: false
  private _extract = new GoogleBigqueryJobExtractOutputReference(this, "extract");
  public get extract() {
    return this._extract;
  }
  public putExtract(value: GoogleBigqueryJobExtract) {
    this._extract.internalValue = value;
  }
  public resetExtract() {
    this._extract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract.internalValue;
  }

  // load - computed: false, optional: true, required: false
  private _load = new GoogleBigqueryJobLoadOutputReference(this, "load");
  public get load() {
    return this._load;
  }
  public putLoad(value: GoogleBigqueryJobLoad) {
    this._load.internalValue = value;
  }
  public resetLoad() {
    this._load.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new GoogleBigqueryJobQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: GoogleBigqueryJobQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryJobTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      job_timeout_ms: cdktf.stringToTerraform(this._jobTimeoutMs),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      copy: googleBigqueryJobCopyToTerraform(this._copy.internalValue),
      extract: googleBigqueryJobExtractToTerraform(this._extract.internalValue),
      load: googleBigqueryJobLoadToTerraform(this._load.internalValue),
      query: googleBigqueryJobQueryToTerraform(this._query.internalValue),
      timeouts: googleBigqueryJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_timeout_ms: {
        value: cdktf.stringToHclTerraform(this._jobTimeoutMs),
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
      copy: {
        value: googleBigqueryJobCopyToHclTerraform(this._copy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryJobCopyList",
      },
      extract: {
        value: googleBigqueryJobExtractToHclTerraform(this._extract.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryJobExtractList",
      },
      load: {
        value: googleBigqueryJobLoadToHclTerraform(this._load.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryJobLoadList",
      },
      query: {
        value: googleBigqueryJobQueryToHclTerraform(this._query.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryJobQueryList",
      },
      timeouts: {
        value: googleBigqueryJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBigqueryJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
