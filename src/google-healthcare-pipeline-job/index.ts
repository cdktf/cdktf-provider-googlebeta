/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleHealthcarePipelineJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Healthcare Dataset under which the Pipeline Job is to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#dataset GoogleHealthcarePipelineJob#dataset}
  */
  readonly dataset: string;
  /**
  * If true, disables writing lineage for the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#disable_lineage GoogleHealthcarePipelineJob#disable_lineage}
  */
  readonly disableLineage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#id GoogleHealthcarePipelineJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-supplied key-value pairs used to organize Pipeline Jobs.
  * Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of
  * maximum 128 bytes, and must conform to the following PCRE regular expression:
  * [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
  * Label values are optional, must be between 1 and 63 characters long, have a
  * UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE
  * regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
  * No more than 64 labels can be associated with a given pipeline.
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#labels GoogleHealthcarePipelineJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location where the Pipeline Job is to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#location GoogleHealthcarePipelineJob#location}
  */
  readonly location: string;
  /**
  * Specifies the name of the pipeline job. This field is user-assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#name GoogleHealthcarePipelineJob#name}
  */
  readonly name: string;
  /**
  * backfill_pipeline_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#backfill_pipeline_job GoogleHealthcarePipelineJob#backfill_pipeline_job}
  */
  readonly backfillPipelineJob?: GoogleHealthcarePipelineJobBackfillPipelineJob;
  /**
  * mapping_pipeline_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}
  */
  readonly mappingPipelineJob?: GoogleHealthcarePipelineJobMappingPipelineJob;
  /**
  * reconciliation_pipeline_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#reconciliation_pipeline_job GoogleHealthcarePipelineJob#reconciliation_pipeline_job}
  */
  readonly reconciliationPipelineJob?: GoogleHealthcarePipelineJobReconciliationPipelineJob;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#timeouts GoogleHealthcarePipelineJob#timeouts}
  */
  readonly timeouts?: GoogleHealthcarePipelineJobTimeouts;
}
export interface GoogleHealthcarePipelineJobBackfillPipelineJob {
  /**
  * Specifies the mapping pipeline job to backfill, the name format
  * should follow: projects/{projectId}/locations/{locationId}/datasets/{datasetId}/pipelineJobs/{pipelineJobId}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#mapping_pipeline_job GoogleHealthcarePipelineJob#mapping_pipeline_job}
  */
  readonly mappingPipelineJob?: string;
}

export function googleHealthcarePipelineJobBackfillPipelineJobToTerraform(struct?: GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference | GoogleHealthcarePipelineJobBackfillPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_pipeline_job: cdktf.stringToTerraform(struct!.mappingPipelineJob),
  }
}


export function googleHealthcarePipelineJobBackfillPipelineJobToHclTerraform(struct?: GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference | GoogleHealthcarePipelineJobBackfillPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping_pipeline_job: {
      value: cdktf.stringToHclTerraform(struct!.mappingPipelineJob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobBackfillPipelineJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingPipelineJob !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingPipelineJob = this._mappingPipelineJob;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobBackfillPipelineJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingPipelineJob = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingPipelineJob = value.mappingPipelineJob;
    }
  }

  // mapping_pipeline_job - computed: false, optional: true, required: false
  private _mappingPipelineJob?: string; 
  public get mappingPipelineJob() {
    return this.getStringAttribute('mapping_pipeline_job');
  }
  public set mappingPipelineJob(value: string) {
    this._mappingPipelineJob = value;
  }
  public resetMappingPipelineJob() {
    this._mappingPipelineJob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingPipelineJobInput() {
    return this._mappingPipelineJob;
  }
}
export interface GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource {
  /**
  * Describes the streaming FHIR data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}
  */
  readonly description?: string;
  /**
  * The path to the FHIR store in the format projects/{projectId}/locations/{locationId}/datasets/{datasetId}/fhirStores/{fhirStoreId}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#fhir_store GoogleHealthcarePipelineJob#fhir_store}
  */
  readonly fhirStore: string;
}

export function googleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceToTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference | GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fhir_store: cdktf.stringToTerraform(struct!.fhirStore),
  }
}


export function googleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceToHclTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference | GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fhir_store: {
      value: cdktf.stringToHclTerraform(struct!.fhirStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fhirStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.fhirStore = this._fhirStore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._fhirStore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._fhirStore = value.fhirStore;
    }
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

  // fhir_store - computed: false, optional: false, required: true
  private _fhirStore?: string; 
  public get fhirStore() {
    return this.getStringAttribute('fhir_store');
  }
  public set fhirStore(value: string) {
    this._fhirStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fhirStoreInput() {
    return this._fhirStore;
  }
}
export interface GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource {
  /**
  * Directory path where all the Whistle files are located.
  * Example: gs://{bucket-id}/{path/to/import-root/dir}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}
  */
  readonly importUriPrefix: string;
  /**
  * Main configuration file which has the entrypoint or the root function.
  * Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}
  */
  readonly uri: string;
}

export function googleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceToTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference | GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    import_uri_prefix: cdktf.stringToTerraform(struct!.importUriPrefix),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceToHclTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference | GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    import_uri_prefix: {
      value: cdktf.stringToHclTerraform(struct!.importUriPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.importUriPrefix = this._importUriPrefix;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._importUriPrefix = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._importUriPrefix = value.importUriPrefix;
      this._uri = value.uri;
    }
  }

  // import_uri_prefix - computed: false, optional: false, required: true
  private _importUriPrefix?: string; 
  public get importUriPrefix() {
    return this.getStringAttribute('import_uri_prefix');
  }
  public set importUriPrefix(value: string) {
    this._importUriPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importUriPrefixInput() {
    return this._importUriPrefix;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig {
  /**
  * Describes the mapping configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}
  */
  readonly description?: string;
  /**
  * whistle_config_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}
  */
  readonly whistleConfigSource?: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource;
}

export function googleHealthcarePipelineJobMappingPipelineJobMappingConfigToTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference | GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    whistle_config_source: googleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceToTerraform(struct!.whistleConfigSource),
  }
}


export function googleHealthcarePipelineJobMappingPipelineJobMappingConfigToHclTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference | GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whistle_config_source: {
      value: googleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceToHclTerraform(struct!.whistleConfigSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._whistleConfigSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whistleConfigSource = this._whistleConfigSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._whistleConfigSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._whistleConfigSource.internalValue = value.whistleConfigSource;
    }
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

  // whistle_config_source - computed: false, optional: true, required: false
  private _whistleConfigSource = new GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSourceOutputReference(this, "whistle_config_source");
  public get whistleConfigSource() {
    return this._whistleConfigSource;
  }
  public putWhistleConfigSource(value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigWhistleConfigSource) {
    this._whistleConfigSource.internalValue = value;
  }
  public resetWhistleConfigSource() {
    this._whistleConfigSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whistleConfigSourceInput() {
    return this._whistleConfigSource.internalValue;
  }
}
export interface GoogleHealthcarePipelineJobMappingPipelineJob {
  /**
  * If set, the mapping pipeline will write snapshots to this
  * FHIR store without assigning stable IDs. You must
  * grant your pipeline project's Cloud Healthcare Service
  * Agent serviceaccount healthcare.fhirResources.executeBundle
  * and healthcare.fhirResources.create permissions on the
  * destination store. The destination store must set
  * [disableReferentialIntegrity][FhirStore.disable_referential_integrity]
  * to true. The destination store must use FHIR version R4.
  * Format: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{fhirStoreID}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}
  */
  readonly fhirStoreDestination?: string;
  /**
  * If set to true, a mapping pipeline will send output snapshots
  * to the reconciliation pipeline in its dataset. A reconciliation
  * pipeline must exist in this dataset before a mapping pipeline
  * with a reconciliation destination can be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#reconciliation_destination GoogleHealthcarePipelineJob#reconciliation_destination}
  */
  readonly reconciliationDestination?: boolean | cdktf.IResolvable;
  /**
  * fhir_streaming_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#fhir_streaming_source GoogleHealthcarePipelineJob#fhir_streaming_source}
  */
  readonly fhirStreamingSource?: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource;
  /**
  * mapping_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#mapping_config GoogleHealthcarePipelineJob#mapping_config}
  */
  readonly mappingConfig: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig;
}

export function googleHealthcarePipelineJobMappingPipelineJobToTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobOutputReference | GoogleHealthcarePipelineJobMappingPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fhir_store_destination: cdktf.stringToTerraform(struct!.fhirStoreDestination),
    reconciliation_destination: cdktf.booleanToTerraform(struct!.reconciliationDestination),
    fhir_streaming_source: googleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceToTerraform(struct!.fhirStreamingSource),
    mapping_config: googleHealthcarePipelineJobMappingPipelineJobMappingConfigToTerraform(struct!.mappingConfig),
  }
}


export function googleHealthcarePipelineJobMappingPipelineJobToHclTerraform(struct?: GoogleHealthcarePipelineJobMappingPipelineJobOutputReference | GoogleHealthcarePipelineJobMappingPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fhir_store_destination: {
      value: cdktf.stringToHclTerraform(struct!.fhirStoreDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reconciliation_destination: {
      value: cdktf.booleanToHclTerraform(struct!.reconciliationDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fhir_streaming_source: {
      value: googleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceToHclTerraform(struct!.fhirStreamingSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceList",
    },
    mapping_config: {
      value: googleHealthcarePipelineJobMappingPipelineJobMappingConfigToHclTerraform(struct!.mappingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobMappingPipelineJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobMappingPipelineJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fhirStoreDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.fhirStoreDestination = this._fhirStoreDestination;
    }
    if (this._reconciliationDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconciliationDestination = this._reconciliationDestination;
    }
    if (this._fhirStreamingSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fhirStreamingSource = this._fhirStreamingSource?.internalValue;
    }
    if (this._mappingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingConfig = this._mappingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobMappingPipelineJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fhirStoreDestination = undefined;
      this._reconciliationDestination = undefined;
      this._fhirStreamingSource.internalValue = undefined;
      this._mappingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fhirStoreDestination = value.fhirStoreDestination;
      this._reconciliationDestination = value.reconciliationDestination;
      this._fhirStreamingSource.internalValue = value.fhirStreamingSource;
      this._mappingConfig.internalValue = value.mappingConfig;
    }
  }

  // fhir_store_destination - computed: false, optional: true, required: false
  private _fhirStoreDestination?: string; 
  public get fhirStoreDestination() {
    return this.getStringAttribute('fhir_store_destination');
  }
  public set fhirStoreDestination(value: string) {
    this._fhirStoreDestination = value;
  }
  public resetFhirStoreDestination() {
    this._fhirStoreDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fhirStoreDestinationInput() {
    return this._fhirStoreDestination;
  }

  // reconciliation_destination - computed: false, optional: true, required: false
  private _reconciliationDestination?: boolean | cdktf.IResolvable; 
  public get reconciliationDestination() {
    return this.getBooleanAttribute('reconciliation_destination');
  }
  public set reconciliationDestination(value: boolean | cdktf.IResolvable) {
    this._reconciliationDestination = value;
  }
  public resetReconciliationDestination() {
    this._reconciliationDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationDestinationInput() {
    return this._reconciliationDestination;
  }

  // fhir_streaming_source - computed: false, optional: true, required: false
  private _fhirStreamingSource = new GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSourceOutputReference(this, "fhir_streaming_source");
  public get fhirStreamingSource() {
    return this._fhirStreamingSource;
  }
  public putFhirStreamingSource(value: GoogleHealthcarePipelineJobMappingPipelineJobFhirStreamingSource) {
    this._fhirStreamingSource.internalValue = value;
  }
  public resetFhirStreamingSource() {
    this._fhirStreamingSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fhirStreamingSourceInput() {
    return this._fhirStreamingSource.internalValue;
  }

  // mapping_config - computed: false, optional: false, required: true
  private _mappingConfig = new GoogleHealthcarePipelineJobMappingPipelineJobMappingConfigOutputReference(this, "mapping_config");
  public get mappingConfig() {
    return this._mappingConfig;
  }
  public putMappingConfig(value: GoogleHealthcarePipelineJobMappingPipelineJobMappingConfig) {
    this._mappingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingConfigInput() {
    return this._mappingConfig.internalValue;
  }
}
export interface GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource {
  /**
  * Directory path where all the Whistle files are located.
  * Example: gs://{bucket-id}/{path/to/import-root/dir}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#import_uri_prefix GoogleHealthcarePipelineJob#import_uri_prefix}
  */
  readonly importUriPrefix: string;
  /**
  * Main configuration file which has the entrypoint or the root function.
  * Example: gs://{bucket-id}/{path/to/import-root/dir}/entrypoint-file-name.wstl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#uri GoogleHealthcarePipelineJob#uri}
  */
  readonly uri: string;
}

export function googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceToTerraform(struct?: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference | GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    import_uri_prefix: cdktf.stringToTerraform(struct!.importUriPrefix),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceToHclTerraform(struct?: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference | GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    import_uri_prefix: {
      value: cdktf.stringToHclTerraform(struct!.importUriPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._importUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.importUriPrefix = this._importUriPrefix;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._importUriPrefix = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._importUriPrefix = value.importUriPrefix;
      this._uri = value.uri;
    }
  }

  // import_uri_prefix - computed: false, optional: false, required: true
  private _importUriPrefix?: string; 
  public get importUriPrefix() {
    return this.getStringAttribute('import_uri_prefix');
  }
  public set importUriPrefix(value: string) {
    this._importUriPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importUriPrefixInput() {
    return this._importUriPrefix;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig {
  /**
  * Describes the mapping configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#description GoogleHealthcarePipelineJob#description}
  */
  readonly description?: string;
  /**
  * whistle_config_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#whistle_config_source GoogleHealthcarePipelineJob#whistle_config_source}
  */
  readonly whistleConfigSource: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource;
}

export function googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigToTerraform(struct?: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference | GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    whistle_config_source: googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceToTerraform(struct!.whistleConfigSource),
  }
}


export function googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigToHclTerraform(struct?: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference | GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whistle_config_source: {
      value: googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceToHclTerraform(struct!.whistleConfigSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._whistleConfigSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whistleConfigSource = this._whistleConfigSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._whistleConfigSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._whistleConfigSource.internalValue = value.whistleConfigSource;
    }
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

  // whistle_config_source - computed: false, optional: false, required: true
  private _whistleConfigSource = new GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSourceOutputReference(this, "whistle_config_source");
  public get whistleConfigSource() {
    return this._whistleConfigSource;
  }
  public putWhistleConfigSource(value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigWhistleConfigSource) {
    this._whistleConfigSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whistleConfigSourceInput() {
    return this._whistleConfigSource.internalValue;
  }
}
export interface GoogleHealthcarePipelineJobReconciliationPipelineJob {
  /**
  * The harmonized FHIR store to write harmonized FHIR resources to,
  * in the format of: project/{projectID}/locations/{locationID}/datasets/{datasetName}/fhirStores/{id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#fhir_store_destination GoogleHealthcarePipelineJob#fhir_store_destination}
  */
  readonly fhirStoreDestination?: string;
  /**
  * Specifies the top level directory of the matching configs used
  * in all mapping pipelines, which extract properties for resources
  * to be matched on.
  * Example: gs://{bucket-id}/{path/to/matching/configs}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#matching_uri_prefix GoogleHealthcarePipelineJob#matching_uri_prefix}
  */
  readonly matchingUriPrefix: string;
  /**
  * merge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#merge_config GoogleHealthcarePipelineJob#merge_config}
  */
  readonly mergeConfig: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig;
}

export function googleHealthcarePipelineJobReconciliationPipelineJobToTerraform(struct?: GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference | GoogleHealthcarePipelineJobReconciliationPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fhir_store_destination: cdktf.stringToTerraform(struct!.fhirStoreDestination),
    matching_uri_prefix: cdktf.stringToTerraform(struct!.matchingUriPrefix),
    merge_config: googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigToTerraform(struct!.mergeConfig),
  }
}


export function googleHealthcarePipelineJobReconciliationPipelineJobToHclTerraform(struct?: GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference | GoogleHealthcarePipelineJobReconciliationPipelineJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fhir_store_destination: {
      value: cdktf.stringToHclTerraform(struct!.fhirStoreDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_uri_prefix: {
      value: cdktf.stringToHclTerraform(struct!.matchingUriPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_config: {
      value: googleHealthcarePipelineJobReconciliationPipelineJobMergeConfigToHclTerraform(struct!.mergeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcarePipelineJobReconciliationPipelineJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fhirStoreDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.fhirStoreDestination = this._fhirStoreDestination;
    }
    if (this._matchingUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingUriPrefix = this._matchingUriPrefix;
    }
    if (this._mergeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeConfig = this._mergeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcarePipelineJobReconciliationPipelineJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fhirStoreDestination = undefined;
      this._matchingUriPrefix = undefined;
      this._mergeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fhirStoreDestination = value.fhirStoreDestination;
      this._matchingUriPrefix = value.matchingUriPrefix;
      this._mergeConfig.internalValue = value.mergeConfig;
    }
  }

  // fhir_store_destination - computed: false, optional: true, required: false
  private _fhirStoreDestination?: string; 
  public get fhirStoreDestination() {
    return this.getStringAttribute('fhir_store_destination');
  }
  public set fhirStoreDestination(value: string) {
    this._fhirStoreDestination = value;
  }
  public resetFhirStoreDestination() {
    this._fhirStoreDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fhirStoreDestinationInput() {
    return this._fhirStoreDestination;
  }

  // matching_uri_prefix - computed: false, optional: false, required: true
  private _matchingUriPrefix?: string; 
  public get matchingUriPrefix() {
    return this.getStringAttribute('matching_uri_prefix');
  }
  public set matchingUriPrefix(value: string) {
    this._matchingUriPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingUriPrefixInput() {
    return this._matchingUriPrefix;
  }

  // merge_config - computed: false, optional: false, required: true
  private _mergeConfig = new GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfigOutputReference(this, "merge_config");
  public get mergeConfig() {
    return this._mergeConfig;
  }
  public putMergeConfig(value: GoogleHealthcarePipelineJobReconciliationPipelineJobMergeConfig) {
    this._mergeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeConfigInput() {
    return this._mergeConfig.internalValue;
  }
}
export interface GoogleHealthcarePipelineJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#create GoogleHealthcarePipelineJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#delete GoogleHealthcarePipelineJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#update GoogleHealthcarePipelineJob#update}
  */
  readonly update?: string;
}

export function googleHealthcarePipelineJobTimeoutsToTerraform(struct?: GoogleHealthcarePipelineJobTimeouts | cdktf.IResolvable): any {
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


export function googleHealthcarePipelineJobTimeoutsToHclTerraform(struct?: GoogleHealthcarePipelineJobTimeouts | cdktf.IResolvable): any {
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

export class GoogleHealthcarePipelineJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleHealthcarePipelineJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleHealthcarePipelineJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job google_healthcare_pipeline_job}
*/
export class GoogleHealthcarePipelineJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_pipeline_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleHealthcarePipelineJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleHealthcarePipelineJob to import
  * @param importFromId The id of the existing GoogleHealthcarePipelineJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleHealthcarePipelineJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_healthcare_pipeline_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_healthcare_pipeline_job google_healthcare_pipeline_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleHealthcarePipelineJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleHealthcarePipelineJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_pipeline_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.18.0',
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
    this._dataset = config.dataset;
    this._disableLineage = config.disableLineage;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._backfillPipelineJob.internalValue = config.backfillPipelineJob;
    this._mappingPipelineJob.internalValue = config.mappingPipelineJob;
    this._reconciliationPipelineJob.internalValue = config.reconciliationPipelineJob;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // disable_lineage - computed: false, optional: true, required: false
  private _disableLineage?: boolean | cdktf.IResolvable; 
  public get disableLineage() {
    return this.getBooleanAttribute('disable_lineage');
  }
  public set disableLineage(value: boolean | cdktf.IResolvable) {
    this._disableLineage = value;
  }
  public resetDisableLineage() {
    this._disableLineage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLineageInput() {
    return this._disableLineage;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // backfill_pipeline_job - computed: false, optional: true, required: false
  private _backfillPipelineJob = new GoogleHealthcarePipelineJobBackfillPipelineJobOutputReference(this, "backfill_pipeline_job");
  public get backfillPipelineJob() {
    return this._backfillPipelineJob;
  }
  public putBackfillPipelineJob(value: GoogleHealthcarePipelineJobBackfillPipelineJob) {
    this._backfillPipelineJob.internalValue = value;
  }
  public resetBackfillPipelineJob() {
    this._backfillPipelineJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillPipelineJobInput() {
    return this._backfillPipelineJob.internalValue;
  }

  // mapping_pipeline_job - computed: false, optional: true, required: false
  private _mappingPipelineJob = new GoogleHealthcarePipelineJobMappingPipelineJobOutputReference(this, "mapping_pipeline_job");
  public get mappingPipelineJob() {
    return this._mappingPipelineJob;
  }
  public putMappingPipelineJob(value: GoogleHealthcarePipelineJobMappingPipelineJob) {
    this._mappingPipelineJob.internalValue = value;
  }
  public resetMappingPipelineJob() {
    this._mappingPipelineJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingPipelineJobInput() {
    return this._mappingPipelineJob.internalValue;
  }

  // reconciliation_pipeline_job - computed: false, optional: true, required: false
  private _reconciliationPipelineJob = new GoogleHealthcarePipelineJobReconciliationPipelineJobOutputReference(this, "reconciliation_pipeline_job");
  public get reconciliationPipelineJob() {
    return this._reconciliationPipelineJob;
  }
  public putReconciliationPipelineJob(value: GoogleHealthcarePipelineJobReconciliationPipelineJob) {
    this._reconciliationPipelineJob.internalValue = value;
  }
  public resetReconciliationPipelineJob() {
    this._reconciliationPipelineJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconciliationPipelineJobInput() {
    return this._reconciliationPipelineJob.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleHealthcarePipelineJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleHealthcarePipelineJobTimeouts) {
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
      dataset: cdktf.stringToTerraform(this._dataset),
      disable_lineage: cdktf.booleanToTerraform(this._disableLineage),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      backfill_pipeline_job: googleHealthcarePipelineJobBackfillPipelineJobToTerraform(this._backfillPipelineJob.internalValue),
      mapping_pipeline_job: googleHealthcarePipelineJobMappingPipelineJobToTerraform(this._mappingPipelineJob.internalValue),
      reconciliation_pipeline_job: googleHealthcarePipelineJobReconciliationPipelineJobToTerraform(this._reconciliationPipelineJob.internalValue),
      timeouts: googleHealthcarePipelineJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_lineage: {
        value: cdktf.booleanToHclTerraform(this._disableLineage),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backfill_pipeline_job: {
        value: googleHealthcarePipelineJobBackfillPipelineJobToHclTerraform(this._backfillPipelineJob.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleHealthcarePipelineJobBackfillPipelineJobList",
      },
      mapping_pipeline_job: {
        value: googleHealthcarePipelineJobMappingPipelineJobToHclTerraform(this._mappingPipelineJob.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleHealthcarePipelineJobMappingPipelineJobList",
      },
      reconciliation_pipeline_job: {
        value: googleHealthcarePipelineJobReconciliationPipelineJobToHclTerraform(this._reconciliationPipelineJob.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleHealthcarePipelineJobReconciliationPipelineJobList",
      },
      timeouts: {
        value: googleHealthcarePipelineJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleHealthcarePipelineJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
