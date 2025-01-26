/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDiscoveryEngineDataStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#content_config GoogleDiscoveryEngineDataStore#content_config}
  */
  readonly contentConfig: string;
  /**
  * If true, an advanced data store for site search will be created. If the
  * data store is not configured as site search (GENERIC vertical and
  * PUBLIC_WEBSITE contentConfig), this flag will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#create_advanced_site_search GoogleDiscoveryEngineDataStore#create_advanced_site_search}
  */
  readonly createAdvancedSiteSearch?: boolean | cdktf.IResolvable;
  /**
  * The unique id of the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#data_store_id GoogleDiscoveryEngineDataStore#data_store_id}
  */
  readonly dataStoreId: string;
  /**
  * The display name of the data store. This field must be a UTF-8 encoded
  * string with a length limit of 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#display_name GoogleDiscoveryEngineDataStore#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA", "HEALTHCARE_FHIR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#industry_vertical GoogleDiscoveryEngineDataStore#industry_vertical}
  */
  readonly industryVertical: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#location GoogleDiscoveryEngineDataStore#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}
  */
  readonly project?: string;
  /**
  * A boolean flag indicating whether to skip the default schema creation for
  * the data store. Only enable this flag if you are certain that the default
  * schema is incompatible with your use case.
  * If set to true, you must manually create a schema for the data store
  * before any documents can be ingested.
  * This flag cannot be specified if 'data_store.starting_schema' is
  * specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#skip_default_schema_creation GoogleDiscoveryEngineDataStore#skip_default_schema_creation}
  */
  readonly skipDefaultSchemaCreation?: boolean | cdktf.IResolvable;
  /**
  * The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#solution_types GoogleDiscoveryEngineDataStore#solution_types}
  */
  readonly solutionTypes?: string[];
  /**
  * advanced_site_search_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#advanced_site_search_config GoogleDiscoveryEngineDataStore#advanced_site_search_config}
  */
  readonly advancedSiteSearchConfig?: GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig;
  /**
  * document_processing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#document_processing_config GoogleDiscoveryEngineDataStore#document_processing_config}
  */
  readonly documentProcessingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#timeouts GoogleDiscoveryEngineDataStore#timeouts}
  */
  readonly timeouts?: GoogleDiscoveryEngineDataStoreTimeouts;
}
export interface GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig {
  /**
  * If set true, automatic refresh is disabled for the DataStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#disable_automatic_refresh GoogleDiscoveryEngineDataStore#disable_automatic_refresh}
  */
  readonly disableAutomaticRefresh?: boolean | cdktf.IResolvable;
  /**
  * If set true, initial indexing is disabled for the DataStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#disable_initial_index GoogleDiscoveryEngineDataStore#disable_initial_index}
  */
  readonly disableInitialIndex?: boolean | cdktf.IResolvable;
}

export function googleDiscoveryEngineDataStoreAdvancedSiteSearchConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference | GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_automatic_refresh: cdktf.booleanToTerraform(struct!.disableAutomaticRefresh),
    disable_initial_index: cdktf.booleanToTerraform(struct!.disableInitialIndex),
  }
}


export function googleDiscoveryEngineDataStoreAdvancedSiteSearchConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference | GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_automatic_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutomaticRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_initial_index: {
      value: cdktf.booleanToHclTerraform(struct!.disableInitialIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAutomaticRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutomaticRefresh = this._disableAutomaticRefresh;
    }
    if (this._disableInitialIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInitialIndex = this._disableInitialIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAutomaticRefresh = undefined;
      this._disableInitialIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAutomaticRefresh = value.disableAutomaticRefresh;
      this._disableInitialIndex = value.disableInitialIndex;
    }
  }

  // disable_automatic_refresh - computed: false, optional: true, required: false
  private _disableAutomaticRefresh?: boolean | cdktf.IResolvable; 
  public get disableAutomaticRefresh() {
    return this.getBooleanAttribute('disable_automatic_refresh');
  }
  public set disableAutomaticRefresh(value: boolean | cdktf.IResolvable) {
    this._disableAutomaticRefresh = value;
  }
  public resetDisableAutomaticRefresh() {
    this._disableAutomaticRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomaticRefreshInput() {
    return this._disableAutomaticRefresh;
  }

  // disable_initial_index - computed: false, optional: true, required: false
  private _disableInitialIndex?: boolean | cdktf.IResolvable; 
  public get disableInitialIndex() {
    return this.getBooleanAttribute('disable_initial_index');
  }
  public set disableInitialIndex(value: boolean | cdktf.IResolvable) {
    this._disableInitialIndex = value;
  }
  public resetDisableInitialIndex() {
    this._disableInitialIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInitialIndexInput() {
    return this._disableInitialIndex;
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig {
  /**
  * The token size limit for each chunk.
  * Supported values: 100-500 (inclusive). Default value: 500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#chunk_size GoogleDiscoveryEngineDataStore#chunk_size}
  */
  readonly chunkSize?: number;
  /**
  * Whether to include appending different levels of headings to chunks from the middle of the document to prevent context loss.
  * Default value: False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#include_ancestor_headings GoogleDiscoveryEngineDataStore#include_ancestor_headings}
  */
  readonly includeAncestorHeadings?: boolean | cdktf.IResolvable;
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    include_ancestor_headings: cdktf.booleanToTerraform(struct!.includeAncestorHeadings),
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_size: {
      value: cdktf.numberToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_ancestor_headings: {
      value: cdktf.booleanToHclTerraform(struct!.includeAncestorHeadings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._includeAncestorHeadings !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAncestorHeadings = this._includeAncestorHeadings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkSize = undefined;
      this._includeAncestorHeadings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkSize = value.chunkSize;
      this._includeAncestorHeadings = value.includeAncestorHeadings;
    }
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // include_ancestor_headings - computed: false, optional: true, required: false
  private _includeAncestorHeadings?: boolean | cdktf.IResolvable; 
  public get includeAncestorHeadings() {
    return this.getBooleanAttribute('include_ancestor_headings');
  }
  public set includeAncestorHeadings(value: boolean | cdktf.IResolvable) {
    this._includeAncestorHeadings = value;
  }
  public resetIncludeAncestorHeadings() {
    this._includeAncestorHeadings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAncestorHeadingsInput() {
    return this._includeAncestorHeadings;
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig {
  /**
  * layout_based_chunking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#layout_based_chunking_config GoogleDiscoveryEngineDataStore#layout_based_chunking_config}
  */
  readonly layoutBasedChunkingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    layout_based_chunking_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToTerraform(struct!.layoutBasedChunkingConfig),
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    layout_based_chunking_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigToHclTerraform(struct!.layoutBasedChunkingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._layoutBasedChunkingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutBasedChunkingConfig = this._layoutBasedChunkingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._layoutBasedChunkingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._layoutBasedChunkingConfig.internalValue = value.layoutBasedChunkingConfig;
    }
  }

  // layout_based_chunking_config - computed: false, optional: true, required: false
  private _layoutBasedChunkingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(this, "layout_based_chunking_config");
  public get layoutBasedChunkingConfig() {
    return this._layoutBasedChunkingConfig;
  }
  public putLayoutBasedChunkingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig) {
    this._layoutBasedChunkingConfig.internalValue = value;
  }
  public resetLayoutBasedChunkingConfig() {
    this._layoutBasedChunkingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutBasedChunkingConfigInput() {
    return this._layoutBasedChunkingConfig.internalValue;
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig {
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig {
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig {
  /**
  * If true, will use native text instead of OCR text on pages containing native text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#use_native_text GoogleDiscoveryEngineDataStore#use_native_text}
  */
  readonly useNativeText?: boolean | cdktf.IResolvable;
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_native_text: cdktf.booleanToTerraform(struct!.useNativeText),
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_native_text: {
      value: cdktf.booleanToHclTerraform(struct!.useNativeText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useNativeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNativeText = this._useNativeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useNativeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useNativeText = value.useNativeText;
    }
  }

  // use_native_text - computed: false, optional: true, required: false
  private _useNativeText?: boolean | cdktf.IResolvable; 
  public get useNativeText() {
    return this.getBooleanAttribute('use_native_text');
  }
  public set useNativeText(value: boolean | cdktf.IResolvable) {
    this._useNativeText = value;
  }
  public resetUseNativeText() {
    this._useNativeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNativeTextInput() {
    return this._useNativeText;
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig {
  /**
  * digital_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#digital_parsing_config GoogleDiscoveryEngineDataStore#digital_parsing_config}
  */
  readonly digitalParsingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;
  /**
  * layout_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#layout_parsing_config GoogleDiscoveryEngineDataStore#layout_parsing_config}
  */
  readonly layoutParsingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;
  /**
  * ocr_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#ocr_parsing_config GoogleDiscoveryEngineDataStore#ocr_parsing_config}
  */
  readonly ocrParsingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digital_parsing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToTerraform(struct!.digitalParsingConfig),
    layout_parsing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToTerraform(struct!.layoutParsingConfig),
    ocr_parsing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToTerraform(struct!.ocrParsingConfig),
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digital_parsing_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigToHclTerraform(struct!.digitalParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList",
    },
    layout_parsing_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigToHclTerraform(struct!.layoutParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList",
    },
    ocr_parsing_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigToHclTerraform(struct!.ocrParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digitalParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalParsingConfig = this._digitalParsingConfig?.internalValue;
    }
    if (this._layoutParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutParsingConfig = this._layoutParsingConfig?.internalValue;
    }
    if (this._ocrParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrParsingConfig = this._ocrParsingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digitalParsingConfig.internalValue = undefined;
      this._layoutParsingConfig.internalValue = undefined;
      this._ocrParsingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digitalParsingConfig.internalValue = value.digitalParsingConfig;
      this._layoutParsingConfig.internalValue = value.layoutParsingConfig;
      this._ocrParsingConfig.internalValue = value.ocrParsingConfig;
    }
  }

  // digital_parsing_config - computed: false, optional: true, required: false
  private _digitalParsingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(this, "digital_parsing_config");
  public get digitalParsingConfig() {
    return this._digitalParsingConfig;
  }
  public putDigitalParsingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig) {
    this._digitalParsingConfig.internalValue = value;
  }
  public resetDigitalParsingConfig() {
    this._digitalParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalParsingConfigInput() {
    return this._digitalParsingConfig.internalValue;
  }

  // layout_parsing_config - computed: false, optional: true, required: false
  private _layoutParsingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(this, "layout_parsing_config");
  public get layoutParsingConfig() {
    return this._layoutParsingConfig;
  }
  public putLayoutParsingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig) {
    this._layoutParsingConfig.internalValue = value;
  }
  public resetLayoutParsingConfig() {
    this._layoutParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutParsingConfigInput() {
    return this._layoutParsingConfig.internalValue;
  }

  // ocr_parsing_config - computed: false, optional: true, required: false
  private _ocrParsingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(this, "ocr_parsing_config");
  public get ocrParsingConfig() {
    return this._ocrParsingConfig;
  }
  public putOcrParsingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig) {
    this._ocrParsingConfig.internalValue = value;
  }
  public resetOcrParsingConfig() {
    this._ocrParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrParsingConfigInput() {
    return this._ocrParsingConfig.internalValue;
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig {
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig {
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig {
  /**
  * If true, will use native text instead of OCR text on pages containing native text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#use_native_text GoogleDiscoveryEngineDataStore#use_native_text}
  */
  readonly useNativeText?: boolean | cdktf.IResolvable;
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_native_text: cdktf.booleanToTerraform(struct!.useNativeText),
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_native_text: {
      value: cdktf.booleanToHclTerraform(struct!.useNativeText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useNativeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNativeText = this._useNativeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useNativeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useNativeText = value.useNativeText;
    }
  }

  // use_native_text - computed: false, optional: true, required: false
  private _useNativeText?: boolean | cdktf.IResolvable; 
  public get useNativeText() {
    return this.getBooleanAttribute('use_native_text');
  }
  public set useNativeText(value: boolean | cdktf.IResolvable) {
    this._useNativeText = value;
  }
  public resetUseNativeText() {
    this._useNativeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNativeTextInput() {
    return this._useNativeText;
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#file_type GoogleDiscoveryEngineDataStore#file_type}
  */
  readonly fileType: string;
  /**
  * digital_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#digital_parsing_config GoogleDiscoveryEngineDataStore#digital_parsing_config}
  */
  readonly digitalParsingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;
  /**
  * layout_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#layout_parsing_config GoogleDiscoveryEngineDataStore#layout_parsing_config}
  */
  readonly layoutParsingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;
  /**
  * ocr_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#ocr_parsing_config GoogleDiscoveryEngineDataStore#ocr_parsing_config}
  */
  readonly ocrParsingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_type: cdktf.stringToTerraform(struct!.fileType),
    digital_parsing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToTerraform(struct!.digitalParsingConfig),
    layout_parsing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToTerraform(struct!.layoutParsingConfig),
    ocr_parsing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToTerraform(struct!.ocrParsingConfig),
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digital_parsing_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigToHclTerraform(struct!.digitalParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList",
    },
    layout_parsing_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigToHclTerraform(struct!.layoutParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList",
    },
    ocr_parsing_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigToHclTerraform(struct!.ocrParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._digitalParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalParsingConfig = this._digitalParsingConfig?.internalValue;
    }
    if (this._layoutParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutParsingConfig = this._layoutParsingConfig?.internalValue;
    }
    if (this._ocrParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrParsingConfig = this._ocrParsingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileType = undefined;
      this._digitalParsingConfig.internalValue = undefined;
      this._layoutParsingConfig.internalValue = undefined;
      this._ocrParsingConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileType = value.fileType;
      this._digitalParsingConfig.internalValue = value.digitalParsingConfig;
      this._layoutParsingConfig.internalValue = value.layoutParsingConfig;
      this._ocrParsingConfig.internalValue = value.ocrParsingConfig;
    }
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // digital_parsing_config - computed: false, optional: true, required: false
  private _digitalParsingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(this, "digital_parsing_config");
  public get digitalParsingConfig() {
    return this._digitalParsingConfig;
  }
  public putDigitalParsingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig) {
    this._digitalParsingConfig.internalValue = value;
  }
  public resetDigitalParsingConfig() {
    this._digitalParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalParsingConfigInput() {
    return this._digitalParsingConfig.internalValue;
  }

  // layout_parsing_config - computed: false, optional: true, required: false
  private _layoutParsingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(this, "layout_parsing_config");
  public get layoutParsingConfig() {
    return this._layoutParsingConfig;
  }
  public putLayoutParsingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig) {
    this._layoutParsingConfig.internalValue = value;
  }
  public resetLayoutParsingConfig() {
    this._layoutParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutParsingConfigInput() {
    return this._layoutParsingConfig.internalValue;
  }

  // ocr_parsing_config - computed: false, optional: true, required: false
  private _ocrParsingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(this, "ocr_parsing_config");
  public get ocrParsingConfig() {
    return this._ocrParsingConfig;
  }
  public putOcrParsingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig) {
    this._ocrParsingConfig.internalValue = value;
  }
  public resetOcrParsingConfig() {
    this._ocrParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrParsingConfigInput() {
    return this._ocrParsingConfig.internalValue;
  }
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference {
    return new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDiscoveryEngineDataStoreDocumentProcessingConfig {
  /**
  * chunking_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#chunking_config GoogleDiscoveryEngineDataStore#chunking_config}
  */
  readonly chunkingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig;
  /**
  * default_parsing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#default_parsing_config GoogleDiscoveryEngineDataStore#default_parsing_config}
  */
  readonly defaultParsingConfig?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig;
  /**
  * parsing_config_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#parsing_config_overrides GoogleDiscoveryEngineDataStore#parsing_config_overrides}
  */
  readonly parsingConfigOverrides?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[] | cdktf.IResolvable;
}

export function googleDiscoveryEngineDataStoreDocumentProcessingConfigToTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunking_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToTerraform(struct!.chunkingConfig),
    default_parsing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToTerraform(struct!.defaultParsingConfig),
    parsing_config_overrides: cdktf.listMapper(googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToTerraform, true)(struct!.parsingConfigOverrides),
  }
}


export function googleDiscoveryEngineDataStoreDocumentProcessingConfigToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference | GoogleDiscoveryEngineDataStoreDocumentProcessingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunking_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigToHclTerraform(struct!.chunkingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList",
    },
    default_parsing_config: {
      value: googleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigToHclTerraform(struct!.defaultParsingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList",
    },
    parsing_config_overrides: {
      value: cdktf.listMapperHcl(googleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesToHclTerraform, true)(struct!.parsingConfigOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreDocumentProcessingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingConfig = this._chunkingConfig?.internalValue;
    }
    if (this._defaultParsingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultParsingConfig = this._defaultParsingConfig?.internalValue;
    }
    if (this._parsingConfigOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingConfigOverrides = this._parsingConfigOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chunkingConfig.internalValue = undefined;
      this._defaultParsingConfig.internalValue = undefined;
      this._parsingConfigOverrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chunkingConfig.internalValue = value.chunkingConfig;
      this._defaultParsingConfig.internalValue = value.defaultParsingConfig;
      this._parsingConfigOverrides.internalValue = value.parsingConfigOverrides;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // chunking_config - computed: false, optional: true, required: false
  private _chunkingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(this, "chunking_config");
  public get chunkingConfig() {
    return this._chunkingConfig;
  }
  public putChunkingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig) {
    this._chunkingConfig.internalValue = value;
  }
  public resetChunkingConfig() {
    this._chunkingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingConfigInput() {
    return this._chunkingConfig.internalValue;
  }

  // default_parsing_config - computed: false, optional: true, required: false
  private _defaultParsingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(this, "default_parsing_config");
  public get defaultParsingConfig() {
    return this._defaultParsingConfig;
  }
  public putDefaultParsingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig) {
    this._defaultParsingConfig.internalValue = value;
  }
  public resetDefaultParsingConfig() {
    this._defaultParsingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultParsingConfigInput() {
    return this._defaultParsingConfig.internalValue;
  }

  // parsing_config_overrides - computed: false, optional: true, required: false
  private _parsingConfigOverrides = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(this, "parsing_config_overrides", true);
  public get parsingConfigOverrides() {
    return this._parsingConfigOverrides;
  }
  public putParsingConfigOverrides(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides[] | cdktf.IResolvable) {
    this._parsingConfigOverrides.internalValue = value;
  }
  public resetParsingConfigOverrides() {
    this._parsingConfigOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingConfigOverridesInput() {
    return this._parsingConfigOverrides.internalValue;
  }
}
export interface GoogleDiscoveryEngineDataStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#create GoogleDiscoveryEngineDataStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#delete GoogleDiscoveryEngineDataStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#update GoogleDiscoveryEngineDataStore#update}
  */
  readonly update?: string;
}

export function googleDiscoveryEngineDataStoreTimeoutsToTerraform(struct?: GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable): any {
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


export function googleDiscoveryEngineDataStoreTimeoutsToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable): any {
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

export class GoogleDiscoveryEngineDataStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store google_discovery_engine_data_store}
*/
export class GoogleDiscoveryEngineDataStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_data_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDiscoveryEngineDataStore to import
  * @param importFromId The id of the existing GoogleDiscoveryEngineDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDiscoveryEngineDataStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_data_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_discovery_engine_data_store google_discovery_engine_data_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDiscoveryEngineDataStoreConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDiscoveryEngineDataStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_data_store',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.17.0',
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
    this._contentConfig = config.contentConfig;
    this._createAdvancedSiteSearch = config.createAdvancedSiteSearch;
    this._dataStoreId = config.dataStoreId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._location = config.location;
    this._project = config.project;
    this._skipDefaultSchemaCreation = config.skipDefaultSchemaCreation;
    this._solutionTypes = config.solutionTypes;
    this._advancedSiteSearchConfig.internalValue = config.advancedSiteSearchConfig;
    this._documentProcessingConfig.internalValue = config.documentProcessingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_config - computed: false, optional: false, required: true
  private _contentConfig?: string; 
  public get contentConfig() {
    return this.getStringAttribute('content_config');
  }
  public set contentConfig(value: string) {
    this._contentConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigInput() {
    return this._contentConfig;
  }

  // create_advanced_site_search - computed: false, optional: true, required: false
  private _createAdvancedSiteSearch?: boolean | cdktf.IResolvable; 
  public get createAdvancedSiteSearch() {
    return this.getBooleanAttribute('create_advanced_site_search');
  }
  public set createAdvancedSiteSearch(value: boolean | cdktf.IResolvable) {
    this._createAdvancedSiteSearch = value;
  }
  public resetCreateAdvancedSiteSearch() {
    this._createAdvancedSiteSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAdvancedSiteSearchInput() {
    return this._createAdvancedSiteSearch;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_id - computed: false, optional: false, required: true
  private _dataStoreId?: string; 
  public get dataStoreId() {
    return this.getStringAttribute('data_store_id');
  }
  public set dataStoreId(value: string) {
    this._dataStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdInput() {
    return this._dataStoreId;
  }

  // default_schema_id - computed: true, optional: false, required: false
  public get defaultSchemaId() {
    return this.getStringAttribute('default_schema_id');
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

  // industry_vertical - computed: false, optional: false, required: true
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
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

  // skip_default_schema_creation - computed: false, optional: true, required: false
  private _skipDefaultSchemaCreation?: boolean | cdktf.IResolvable; 
  public get skipDefaultSchemaCreation() {
    return this.getBooleanAttribute('skip_default_schema_creation');
  }
  public set skipDefaultSchemaCreation(value: boolean | cdktf.IResolvable) {
    this._skipDefaultSchemaCreation = value;
  }
  public resetSkipDefaultSchemaCreation() {
    this._skipDefaultSchemaCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDefaultSchemaCreationInput() {
    return this._skipDefaultSchemaCreation;
  }

  // solution_types - computed: false, optional: true, required: false
  private _solutionTypes?: string[]; 
  public get solutionTypes() {
    return this.getListAttribute('solution_types');
  }
  public set solutionTypes(value: string[]) {
    this._solutionTypes = value;
  }
  public resetSolutionTypes() {
    this._solutionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionTypesInput() {
    return this._solutionTypes;
  }

  // advanced_site_search_config - computed: false, optional: true, required: false
  private _advancedSiteSearchConfig = new GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference(this, "advanced_site_search_config");
  public get advancedSiteSearchConfig() {
    return this._advancedSiteSearchConfig;
  }
  public putAdvancedSiteSearchConfig(value: GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig) {
    this._advancedSiteSearchConfig.internalValue = value;
  }
  public resetAdvancedSiteSearchConfig() {
    this._advancedSiteSearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSiteSearchConfigInput() {
    return this._advancedSiteSearchConfig.internalValue;
  }

  // document_processing_config - computed: false, optional: true, required: false
  private _documentProcessingConfig = new GoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(this, "document_processing_config");
  public get documentProcessingConfig() {
    return this._documentProcessingConfig;
  }
  public putDocumentProcessingConfig(value: GoogleDiscoveryEngineDataStoreDocumentProcessingConfig) {
    this._documentProcessingConfig.internalValue = value;
  }
  public resetDocumentProcessingConfig() {
    this._documentProcessingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentProcessingConfigInput() {
    return this._documentProcessingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDiscoveryEngineDataStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDiscoveryEngineDataStoreTimeouts) {
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
      content_config: cdktf.stringToTerraform(this._contentConfig),
      create_advanced_site_search: cdktf.booleanToTerraform(this._createAdvancedSiteSearch),
      data_store_id: cdktf.stringToTerraform(this._dataStoreId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      industry_vertical: cdktf.stringToTerraform(this._industryVertical),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      skip_default_schema_creation: cdktf.booleanToTerraform(this._skipDefaultSchemaCreation),
      solution_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._solutionTypes),
      advanced_site_search_config: googleDiscoveryEngineDataStoreAdvancedSiteSearchConfigToTerraform(this._advancedSiteSearchConfig.internalValue),
      document_processing_config: googleDiscoveryEngineDataStoreDocumentProcessingConfigToTerraform(this._documentProcessingConfig.internalValue),
      timeouts: googleDiscoveryEngineDataStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_config: {
        value: cdktf.stringToHclTerraform(this._contentConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_advanced_site_search: {
        value: cdktf.booleanToHclTerraform(this._createAdvancedSiteSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_store_id: {
        value: cdktf.stringToHclTerraform(this._dataStoreId),
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
      skip_default_schema_creation: {
        value: cdktf.booleanToHclTerraform(this._skipDefaultSchemaCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      solution_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._solutionTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      advanced_site_search_config: {
        value: googleDiscoveryEngineDataStoreAdvancedSiteSearchConfigToHclTerraform(this._advancedSiteSearchConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList",
      },
      document_processing_config: {
        value: googleDiscoveryEngineDataStoreDocumentProcessingConfigToHclTerraform(this._documentProcessingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDiscoveryEngineDataStoreDocumentProcessingConfigList",
      },
      timeouts: {
        value: googleDiscoveryEngineDataStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDiscoveryEngineDataStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
