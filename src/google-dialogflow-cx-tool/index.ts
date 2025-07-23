/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxToolConfig extends cdktf.TerraformMetaArguments {
  /**
  * High level description of the Tool and its usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#description GoogleDialogflowCxTool#description}
  */
  readonly description: string;
  /**
  * The human-readable name of the tool, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The agent to create a Tool for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#parent GoogleDialogflowCxTool#parent}
  */
  readonly parent?: string;
  /**
  * data_store_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#data_store_spec GoogleDialogflowCxTool#data_store_spec}
  */
  readonly dataStoreSpec?: GoogleDialogflowCxToolDataStoreSpec;
  /**
  * function_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#function_spec GoogleDialogflowCxTool#function_spec}
  */
  readonly functionSpec?: GoogleDialogflowCxToolFunctionSpec;
  /**
  * open_api_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#open_api_spec GoogleDialogflowCxTool#open_api_spec}
  */
  readonly openApiSpec?: GoogleDialogflowCxToolOpenApiSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#timeouts GoogleDialogflowCxTool#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxToolTimeouts;
}
export interface GoogleDialogflowCxToolDataStoreSpecDataStoreConnections {
  /**
  * The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#data_store GoogleDialogflowCxTool#data_store}
  */
  readonly dataStore?: string;
  /**
  * The type of the connected data store.
  * See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#data_store_type GoogleDialogflowCxTool#data_store_type}
  */
  readonly dataStoreType?: string;
  /**
  * The document processing mode for the data store connection. Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
  * See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#document_processing_mode GoogleDialogflowCxTool#document_processing_mode}
  */
  readonly documentProcessingMode?: string;
}

export function googleDialogflowCxToolDataStoreSpecDataStoreConnectionsToTerraform(struct?: GoogleDialogflowCxToolDataStoreSpecDataStoreConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store: cdktf.stringToTerraform(struct!.dataStore),
    data_store_type: cdktf.stringToTerraform(struct!.dataStoreType),
    document_processing_mode: cdktf.stringToTerraform(struct!.documentProcessingMode),
  }
}


export function googleDialogflowCxToolDataStoreSpecDataStoreConnectionsToHclTerraform(struct?: GoogleDialogflowCxToolDataStoreSpecDataStoreConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store: {
      value: cdktf.stringToHclTerraform(struct!.dataStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_type: {
      value: cdktf.stringToHclTerraform(struct!.dataStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_processing_mode: {
      value: cdktf.stringToHclTerraform(struct!.documentProcessingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxToolDataStoreSpecDataStoreConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStore = this._dataStore;
    }
    if (this._dataStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreType = this._dataStoreType;
    }
    if (this._documentProcessingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentProcessingMode = this._documentProcessingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolDataStoreSpecDataStoreConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStore = undefined;
      this._dataStoreType = undefined;
      this._documentProcessingMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStore = value.dataStore;
      this._dataStoreType = value.dataStoreType;
      this._documentProcessingMode = value.documentProcessingMode;
    }
  }

  // data_store - computed: false, optional: true, required: false
  private _dataStore?: string; 
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }
  public set dataStore(value: string) {
    this._dataStore = value;
  }
  public resetDataStore() {
    this._dataStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreInput() {
    return this._dataStore;
  }

  // data_store_type - computed: false, optional: true, required: false
  private _dataStoreType?: string; 
  public get dataStoreType() {
    return this.getStringAttribute('data_store_type');
  }
  public set dataStoreType(value: string) {
    this._dataStoreType = value;
  }
  public resetDataStoreType() {
    this._dataStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreTypeInput() {
    return this._dataStoreType;
  }

  // document_processing_mode - computed: false, optional: true, required: false
  private _documentProcessingMode?: string; 
  public get documentProcessingMode() {
    return this.getStringAttribute('document_processing_mode');
  }
  public set documentProcessingMode(value: string) {
    this._documentProcessingMode = value;
  }
  public resetDocumentProcessingMode() {
    this._documentProcessingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentProcessingModeInput() {
    return this._documentProcessingMode;
  }
}

export class GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxToolDataStoreSpecDataStoreConnections[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference {
    return new GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxToolDataStoreSpecFallbackPrompt {
}

export function googleDialogflowCxToolDataStoreSpecFallbackPromptToTerraform(struct?: GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference | GoogleDialogflowCxToolDataStoreSpecFallbackPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDialogflowCxToolDataStoreSpecFallbackPromptToHclTerraform(struct?: GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference | GoogleDialogflowCxToolDataStoreSpecFallbackPrompt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolDataStoreSpecFallbackPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDialogflowCxToolDataStoreSpec {
  /**
  * data_store_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#data_store_connections GoogleDialogflowCxTool#data_store_connections}
  */
  readonly dataStoreConnections: GoogleDialogflowCxToolDataStoreSpecDataStoreConnections[] | cdktf.IResolvable;
  /**
  * fallback_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#fallback_prompt GoogleDialogflowCxTool#fallback_prompt}
  */
  readonly fallbackPrompt: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt;
}

export function googleDialogflowCxToolDataStoreSpecToTerraform(struct?: GoogleDialogflowCxToolDataStoreSpecOutputReference | GoogleDialogflowCxToolDataStoreSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_store_connections: cdktf.listMapper(googleDialogflowCxToolDataStoreSpecDataStoreConnectionsToTerraform, true)(struct!.dataStoreConnections),
    fallback_prompt: googleDialogflowCxToolDataStoreSpecFallbackPromptToTerraform(struct!.fallbackPrompt),
  }
}


export function googleDialogflowCxToolDataStoreSpecToHclTerraform(struct?: GoogleDialogflowCxToolDataStoreSpecOutputReference | GoogleDialogflowCxToolDataStoreSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_store_connections: {
      value: cdktf.listMapperHcl(googleDialogflowCxToolDataStoreSpecDataStoreConnectionsToHclTerraform, true)(struct!.dataStoreConnections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList",
    },
    fallback_prompt: {
      value: googleDialogflowCxToolDataStoreSpecFallbackPromptToHclTerraform(struct!.fallbackPrompt),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolDataStoreSpecFallbackPromptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolDataStoreSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolDataStoreSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStoreConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreConnections = this._dataStoreConnections?.internalValue;
    }
    if (this._fallbackPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackPrompt = this._fallbackPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolDataStoreSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataStoreConnections.internalValue = undefined;
      this._fallbackPrompt.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataStoreConnections.internalValue = value.dataStoreConnections;
      this._fallbackPrompt.internalValue = value.fallbackPrompt;
    }
  }

  // data_store_connections - computed: false, optional: false, required: true
  private _dataStoreConnections = new GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList(this, "data_store_connections", false);
  public get dataStoreConnections() {
    return this._dataStoreConnections;
  }
  public putDataStoreConnections(value: GoogleDialogflowCxToolDataStoreSpecDataStoreConnections[] | cdktf.IResolvable) {
    this._dataStoreConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreConnectionsInput() {
    return this._dataStoreConnections.internalValue;
  }

  // fallback_prompt - computed: false, optional: false, required: true
  private _fallbackPrompt = new GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference(this, "fallback_prompt");
  public get fallbackPrompt() {
    return this._fallbackPrompt;
  }
  public putFallbackPrompt(value: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt) {
    this._fallbackPrompt.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPromptInput() {
    return this._fallbackPrompt.internalValue;
  }
}
export interface GoogleDialogflowCxToolFunctionSpec {
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
  * This input is a JSON object that contains the function's parameters as properties of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#input_schema GoogleDialogflowCxTool#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Optional. The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
  * This output is a JSON object that contains the function's parameters as properties of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#output_schema GoogleDialogflowCxTool#output_schema}
  */
  readonly outputSchema?: string;
}

export function googleDialogflowCxToolFunctionSpecToTerraform(struct?: GoogleDialogflowCxToolFunctionSpecOutputReference | GoogleDialogflowCxToolFunctionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_schema: cdktf.stringToTerraform(struct!.inputSchema),
    output_schema: cdktf.stringToTerraform(struct!.outputSchema),
  }
}


export function googleDialogflowCxToolFunctionSpecToHclTerraform(struct?: GoogleDialogflowCxToolFunctionSpecOutputReference | GoogleDialogflowCxToolFunctionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_schema: {
      value: cdktf.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema: {
      value: cdktf.stringToHclTerraform(struct!.outputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolFunctionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolFunctionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    if (this._outputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchema = this._outputSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolFunctionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputSchema = undefined;
      this._outputSchema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputSchema = value.inputSchema;
      this._outputSchema = value.outputSchema;
    }
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
  }

  // output_schema - computed: false, optional: true, required: false
  private _outputSchema?: string; 
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig {
  /**
  * Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#api_key GoogleDialogflowCxTool#api_key}
  */
  readonly apiKey?: string;
  /**
  * The parameter name or the header name of the API key.
  * E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#key_name GoogleDialogflowCxTool#key_name}
  */
  readonly keyName: string;
  /**
  * Key location in the request.
  * See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#request_location GoogleDialogflowCxTool#request_location}
  */
  readonly requestLocation: string;
  /**
  * Optional. The name of the SecretManager secret version resource storing the API key.
  * If this field is set, the apiKey field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_api_key GoogleDialogflowCxTool#secret_version_for_api_key}
  */
  readonly secretVersionForApiKey?: string;
}

export function googleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    request_location: cdktf.stringToTerraform(struct!.requestLocation),
    secret_version_for_api_key: cdktf.stringToTerraform(struct!.secretVersionForApiKey),
  }
}


export function googleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_location: {
      value: cdktf.stringToHclTerraform(struct!.requestLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version_for_api_key: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._requestLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLocation = this._requestLocation;
    }
    if (this._secretVersionForApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForApiKey = this._secretVersionForApiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._keyName = undefined;
      this._requestLocation = undefined;
      this._secretVersionForApiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._keyName = value.keyName;
      this._requestLocation = value.requestLocation;
      this._secretVersionForApiKey = value.secretVersionForApiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // request_location - computed: false, optional: false, required: true
  private _requestLocation?: string; 
  public get requestLocation() {
    return this.getStringAttribute('request_location');
  }
  public set requestLocation(value: string) {
    this._requestLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLocationInput() {
    return this._requestLocation;
  }

  // secret_version_for_api_key - computed: false, optional: true, required: false
  private _secretVersionForApiKey?: string; 
  public get secretVersionForApiKey() {
    return this.getStringAttribute('secret_version_for_api_key');
  }
  public set secretVersionForApiKey(value: string) {
    this._secretVersionForApiKey = value;
  }
  public resetSecretVersionForApiKey() {
    this._secretVersionForApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForApiKeyInput() {
    return this._secretVersionForApiKey;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig {
  /**
  * Optional. The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_token GoogleDialogflowCxTool#secret_version_for_token}
  */
  readonly secretVersionForToken?: string;
  /**
  * Optional. The text token appended to the text Bearer to the request Authorization header.
  * [Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#token GoogleDialogflowCxTool#token}
  */
  readonly token?: string;
}

export function googleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version_for_token: cdktf.stringToTerraform(struct!.secretVersionForToken),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function googleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version_for_token: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersionForToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForToken = this._secretVersionForToken;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersionForToken = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersionForToken = value.secretVersionForToken;
      this._token = value.token;
    }
  }

  // secret_version_for_token - computed: false, optional: true, required: false
  private _secretVersionForToken?: string; 
  public get secretVersionForToken() {
    return this.getStringAttribute('secret_version_for_token');
  }
  public set secretVersionForToken(value: string) {
    this._secretVersionForToken = value;
  }
  public resetSecretVersionForToken() {
    this._secretVersionForToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForTokenInput() {
    return this._secretVersionForToken;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig {
  /**
  * The client ID from the OAuth provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#client_id GoogleDialogflowCxTool#client_id}
  */
  readonly clientId: string;
  /**
  * Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#client_secret GoogleDialogflowCxTool#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth grant types.
  * See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#oauth_grant_type GoogleDialogflowCxTool#oauth_grant_type}
  */
  readonly oauthGrantType: string;
  /**
  * Optional. The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#scopes GoogleDialogflowCxTool#scopes}
  */
  readonly scopes?: string[];
  /**
  * Optional. The name of the SecretManager secret version resource storing the client secret.
  * If this field is set, the clientSecret field will be ignored.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_client_secret GoogleDialogflowCxTool#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint in the OAuth provider to exchange for an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#token_endpoint GoogleDialogflowCxTool#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function googleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    oauth_grant_type: cdktf.stringToTerraform(struct!.oauthGrantType),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktf.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function googleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_grant_type: {
      value: cdktf.stringToHclTerraform(struct!.oauthGrantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._oauthGrantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthGrantType = this._oauthGrantType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._oauthGrantType = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._oauthGrantType = value.oauthGrantType;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // oauth_grant_type - computed: false, optional: false, required: true
  private _oauthGrantType?: string; 
  public get oauthGrantType() {
    return this.getStringAttribute('oauth_grant_type');
  }
  public set oauthGrantType(value: string) {
    this._oauthGrantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthGrantTypeInput() {
    return this._oauthGrantType;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
  /**
  * Optional. Indicate the auth token type generated from the Diglogflow service agent.
  * The generated token is sent in the Authorization header.
  * See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth GoogleDialogflowCxTool#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
}

export function googleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_agent_auth: cdktf.stringToTerraform(struct!.serviceAgentAuth),
  }
}


export function googleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_agent_auth: {
      value: cdktf.stringToHclTerraform(struct!.serviceAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAgentAuth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAgentAuth = value.serviceAgentAuth;
    }
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecAuthentication {
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#api_key_config GoogleDialogflowCxTool#api_key_config}
  */
  readonly apiKeyConfig?: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig;
  /**
  * bearer_token_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#bearer_token_config GoogleDialogflowCxTool#bearer_token_config}
  */
  readonly bearerTokenConfig?: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#oauth_config GoogleDialogflowCxTool#oauth_config}
  */
  readonly oauthConfig?: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig;
  /**
  * service_agent_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth_config GoogleDialogflowCxTool#service_agent_auth_config}
  */
  readonly serviceAgentAuthConfig?: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig;
}

export function googleDialogflowCxToolOpenApiSpecAuthenticationToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_config: googleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigToTerraform(struct!.apiKeyConfig),
    bearer_token_config: googleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigToTerraform(struct!.bearerTokenConfig),
    oauth_config: googleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigToTerraform(struct!.oauthConfig),
    service_agent_auth_config: googleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigToTerraform(struct!.serviceAgentAuthConfig),
  }
}


export function googleDialogflowCxToolOpenApiSpecAuthenticationToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference | GoogleDialogflowCxToolOpenApiSpecAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_config: {
      value: googleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigList",
    },
    bearer_token_config: {
      value: googleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigToHclTerraform(struct!.bearerTokenConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigList",
    },
    oauth_config: {
      value: googleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigList",
    },
    service_agent_auth_config: {
      value: googleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigToHclTerraform(struct!.serviceAgentAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._bearerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenConfig = this._bearerTokenConfig?.internalValue;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._serviceAgentAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuthConfig = this._serviceAgentAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKeyConfig.internalValue = undefined;
      this._bearerTokenConfig.internalValue = undefined;
      this._oauthConfig.internalValue = undefined;
      this._serviceAgentAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._bearerTokenConfig.internalValue = value.bearerTokenConfig;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._serviceAgentAuthConfig.internalValue = value.serviceAgentAuthConfig;
    }
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // bearer_token_config - computed: false, optional: true, required: false
  private _bearerTokenConfig = new GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(this, "bearer_token_config");
  public get bearerTokenConfig() {
    return this._bearerTokenConfig;
  }
  public putBearerTokenConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig) {
    this._bearerTokenConfig.internalValue = value;
  }
  public resetBearerTokenConfig() {
    this._bearerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenConfigInput() {
    return this._bearerTokenConfig.internalValue;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // service_agent_auth_config - computed: false, optional: true, required: false
  private _serviceAgentAuthConfig = new GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(this, "service_agent_auth_config");
  public get serviceAgentAuthConfig() {
    return this._serviceAgentAuthConfig;
  }
  public putServiceAgentAuthConfig(value: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig) {
    this._serviceAgentAuthConfig.internalValue = value;
  }
  public resetServiceAgentAuthConfig() {
    this._serviceAgentAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthConfigInput() {
    return this._serviceAgentAuthConfig.internalValue;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig {
  /**
  * The name of [Service Directory](https://cloud.google.com/service-directory/docs) service.
  * Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#service GoogleDialogflowCxTool#service}
  */
  readonly service: string;
}

export function googleDialogflowCxToolOpenApiSpecServiceDirectoryConfigToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleDialogflowCxToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts {
  /**
  * The allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store.
  * If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
  * For instance a certificate can be self-signed using the following command:
  * ```
  *   openssl x509 -req -days 200 -in example.com.csr \
  *     -signkey example.com.key \
  *     -out example.com.crt \
  *     -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  * ```
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#cert GoogleDialogflowCxTool#cert}
  */
  readonly cert: string;
  /**
  * The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}
  */
  readonly displayName: string;
}

export function googleDialogflowCxToolOpenApiSpecTlsConfigCaCertsToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function googleDialogflowCxToolOpenApiSpecTlsConfigCaCertsToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._displayName = value.displayName;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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
}

export class GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference {
    return new GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxToolOpenApiSpecTlsConfig {
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#ca_certs GoogleDialogflowCxTool#ca_certs}
  */
  readonly caCerts: GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts[] | cdktf.IResolvable;
}

export function googleDialogflowCxToolOpenApiSpecTlsConfigToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.listMapper(googleDialogflowCxToolOpenApiSpecTlsConfigCaCertsToTerraform, true)(struct!.caCerts),
  }
}


export function googleDialogflowCxToolOpenApiSpecTlsConfigToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference | GoogleDialogflowCxToolOpenApiSpecTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.listMapperHcl(googleDialogflowCxToolOpenApiSpecTlsConfigCaCertsToHclTerraform, true)(struct!.caCerts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpecTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpecTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts.internalValue = value.caCerts;
    }
  }

  // ca_certs - computed: false, optional: false, required: true
  private _caCerts = new GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }
}
export interface GoogleDialogflowCxToolOpenApiSpec {
  /**
  * The OpenAPI schema specified as a text.
  * This field is part of a union field 'schema': only one of 'textSchema' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#text_schema GoogleDialogflowCxTool#text_schema}
  */
  readonly textSchema: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#authentication GoogleDialogflowCxTool#authentication}
  */
  readonly authentication?: GoogleDialogflowCxToolOpenApiSpecAuthentication;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#service_directory_config GoogleDialogflowCxTool#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#tls_config GoogleDialogflowCxTool#tls_config}
  */
  readonly tlsConfig?: GoogleDialogflowCxToolOpenApiSpecTlsConfig;
}

export function googleDialogflowCxToolOpenApiSpecToTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecOutputReference | GoogleDialogflowCxToolOpenApiSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_schema: cdktf.stringToTerraform(struct!.textSchema),
    authentication: googleDialogflowCxToolOpenApiSpecAuthenticationToTerraform(struct!.authentication),
    service_directory_config: googleDialogflowCxToolOpenApiSpecServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
    tls_config: googleDialogflowCxToolOpenApiSpecTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function googleDialogflowCxToolOpenApiSpecToHclTerraform(struct?: GoogleDialogflowCxToolOpenApiSpecOutputReference | GoogleDialogflowCxToolOpenApiSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_schema: {
      value: cdktf.stringToHclTerraform(struct!.textSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: googleDialogflowCxToolOpenApiSpecAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecAuthenticationList",
    },
    service_directory_config: {
      value: googleDialogflowCxToolOpenApiSpecServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigList",
    },
    tls_config: {
      value: googleDialogflowCxToolOpenApiSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxToolOpenApiSpecTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxToolOpenApiSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxToolOpenApiSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSchema = this._textSchema;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxToolOpenApiSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._textSchema = undefined;
      this._authentication.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._textSchema = value.textSchema;
      this._authentication.internalValue = value.authentication;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // text_schema - computed: false, optional: false, required: true
  private _textSchema?: string; 
  public get textSchema() {
    return this.getStringAttribute('text_schema');
  }
  public set textSchema(value: string) {
    this._textSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textSchemaInput() {
    return this._textSchema;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleDialogflowCxToolOpenApiSpecAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: GoogleDialogflowCxToolOpenApiSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface GoogleDialogflowCxToolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}
  */
  readonly update?: string;
}

export function googleDialogflowCxToolTimeoutsToTerraform(struct?: GoogleDialogflowCxToolTimeouts | cdktf.IResolvable): any {
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


export function googleDialogflowCxToolTimeoutsToHclTerraform(struct?: GoogleDialogflowCxToolTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxToolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowCxToolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxToolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool google_dialogflow_cx_tool}
*/
export class GoogleDialogflowCxTool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDialogflowCxTool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowCxTool to import
  * @param importFromId The id of the existing GoogleDialogflowCxTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowCxTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dialogflow_cx_tool google_dialogflow_cx_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxToolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxToolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_tool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.45.0',
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
    this._parent = config.parent;
    this._dataStoreSpec.internalValue = config.dataStoreSpec;
    this._functionSpec.internalValue = config.functionSpec;
    this._openApiSpec.internalValue = config.openApiSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // tool_type - computed: true, optional: false, required: false
  public get toolType() {
    return this.getStringAttribute('tool_type');
  }

  // data_store_spec - computed: false, optional: true, required: false
  private _dataStoreSpec = new GoogleDialogflowCxToolDataStoreSpecOutputReference(this, "data_store_spec");
  public get dataStoreSpec() {
    return this._dataStoreSpec;
  }
  public putDataStoreSpec(value: GoogleDialogflowCxToolDataStoreSpec) {
    this._dataStoreSpec.internalValue = value;
  }
  public resetDataStoreSpec() {
    this._dataStoreSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreSpecInput() {
    return this._dataStoreSpec.internalValue;
  }

  // function_spec - computed: false, optional: true, required: false
  private _functionSpec = new GoogleDialogflowCxToolFunctionSpecOutputReference(this, "function_spec");
  public get functionSpec() {
    return this._functionSpec;
  }
  public putFunctionSpec(value: GoogleDialogflowCxToolFunctionSpec) {
    this._functionSpec.internalValue = value;
  }
  public resetFunctionSpec() {
    this._functionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionSpecInput() {
    return this._functionSpec.internalValue;
  }

  // open_api_spec - computed: false, optional: true, required: false
  private _openApiSpec = new GoogleDialogflowCxToolOpenApiSpecOutputReference(this, "open_api_spec");
  public get openApiSpec() {
    return this._openApiSpec;
  }
  public putOpenApiSpec(value: GoogleDialogflowCxToolOpenApiSpec) {
    this._openApiSpec.internalValue = value;
  }
  public resetOpenApiSpec() {
    this._openApiSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiSpecInput() {
    return this._openApiSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxToolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxToolTimeouts) {
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
      parent: cdktf.stringToTerraform(this._parent),
      data_store_spec: googleDialogflowCxToolDataStoreSpecToTerraform(this._dataStoreSpec.internalValue),
      function_spec: googleDialogflowCxToolFunctionSpecToTerraform(this._functionSpec.internalValue),
      open_api_spec: googleDialogflowCxToolOpenApiSpecToTerraform(this._openApiSpec.internalValue),
      timeouts: googleDialogflowCxToolTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_store_spec: {
        value: googleDialogflowCxToolDataStoreSpecToHclTerraform(this._dataStoreSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxToolDataStoreSpecList",
      },
      function_spec: {
        value: googleDialogflowCxToolFunctionSpecToHclTerraform(this._functionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxToolFunctionSpecList",
      },
      open_api_spec: {
        value: googleDialogflowCxToolOpenApiSpecToHclTerraform(this._openApiSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxToolOpenApiSpecList",
      },
      timeouts: {
        value: googleDialogflowCxToolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowCxToolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
