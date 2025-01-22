/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseExtensionsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#id GoogleFirebaseExtensionsInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID to use for the Extension Instance, which will become the final
  * component of the instance's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#instance_id GoogleFirebaseExtensionsInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#project GoogleFirebaseExtensionsInstance#project}
  */
  readonly project?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#config GoogleFirebaseExtensionsInstance#config}
  */
  readonly config: GoogleFirebaseExtensionsInstanceConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#timeouts GoogleFirebaseExtensionsInstance#timeouts}
  */
  readonly timeouts?: GoogleFirebaseExtensionsInstanceTimeouts;
}
export interface GoogleFirebaseExtensionsInstanceErrorStatus {
}

export function googleFirebaseExtensionsInstanceErrorStatusToTerraform(struct?: GoogleFirebaseExtensionsInstanceErrorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseExtensionsInstanceErrorStatusToHclTerraform(struct?: GoogleFirebaseExtensionsInstanceErrorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseExtensionsInstanceErrorStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseExtensionsInstanceErrorStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseExtensionsInstanceErrorStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleFirebaseExtensionsInstanceErrorStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseExtensionsInstanceErrorStatusOutputReference {
    return new GoogleFirebaseExtensionsInstanceErrorStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseExtensionsInstanceRuntimeDataFatalError {
}

export function googleFirebaseExtensionsInstanceRuntimeDataFatalErrorToTerraform(struct?: GoogleFirebaseExtensionsInstanceRuntimeDataFatalError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseExtensionsInstanceRuntimeDataFatalErrorToHclTerraform(struct?: GoogleFirebaseExtensionsInstanceRuntimeDataFatalError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseExtensionsInstanceRuntimeDataFatalError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseExtensionsInstanceRuntimeDataFatalError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference {
    return new GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState {
}

export function googleFirebaseExtensionsInstanceRuntimeDataProcessingStateToTerraform(struct?: GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseExtensionsInstanceRuntimeDataProcessingStateToHclTerraform(struct?: GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail_message - computed: true, optional: false, required: false
  public get detailMessage() {
    return this.getStringAttribute('detail_message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference {
    return new GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseExtensionsInstanceRuntimeData {
}

export function googleFirebaseExtensionsInstanceRuntimeDataToTerraform(struct?: GoogleFirebaseExtensionsInstanceRuntimeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseExtensionsInstanceRuntimeDataToHclTerraform(struct?: GoogleFirebaseExtensionsInstanceRuntimeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseExtensionsInstanceRuntimeData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseExtensionsInstanceRuntimeData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fatal_error - computed: true, optional: false, required: false
  private _fatalError = new GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList(this, "fatal_error", false);
  public get fatalError() {
    return this._fatalError;
  }

  // processing_state - computed: true, optional: false, required: false
  private _processingState = new GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList(this, "processing_state", false);
  public get processingState() {
    return this._processingState;
  }

  // state_update_time - computed: true, optional: false, required: false
  public get stateUpdateTime() {
    return this.getStringAttribute('state_update_time');
  }
}

export class GoogleFirebaseExtensionsInstanceRuntimeDataList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference {
    return new GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseExtensionsInstanceConfigA {
  /**
  * List of extension events selected by consumer that extension is allowed to
  * emit, identified by their types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#allowed_event_types GoogleFirebaseExtensionsInstance#allowed_event_types}
  */
  readonly allowedEventTypes?: string[];
  /**
  * Fully qualified Eventarc resource name that consumers should use for event triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#eventarc_channel GoogleFirebaseExtensionsInstance#eventarc_channel}
  */
  readonly eventarcChannel?: string;
  /**
  * The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#extension_ref GoogleFirebaseExtensionsInstance#extension_ref}
  */
  readonly extensionRef: string;
  /**
  * The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#extension_version GoogleFirebaseExtensionsInstance#extension_version}
  */
  readonly extensionVersion?: string;
  /**
  * Environment variables that may be configured for the Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#params GoogleFirebaseExtensionsInstance#params}
  */
  readonly params: { [key: string]: string };
  /**
  * Params whose values are only available at deployment time.
  * Unlike other params, these will not be set as environment variables on
  * functions. See a full list of system parameters at
  * https://firebase.google.com/docs/extensions/publishers/parameters#system_parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#system_params GoogleFirebaseExtensionsInstance#system_params}
  */
  readonly systemParams?: { [key: string]: string };
}

export function googleFirebaseExtensionsInstanceConfigAToTerraform(struct?: GoogleFirebaseExtensionsInstanceConfigAOutputReference | GoogleFirebaseExtensionsInstanceConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedEventTypes),
    eventarc_channel: cdktf.stringToTerraform(struct!.eventarcChannel),
    extension_ref: cdktf.stringToTerraform(struct!.extensionRef),
    extension_version: cdktf.stringToTerraform(struct!.extensionVersion),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    system_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemParams),
  }
}


export function googleFirebaseExtensionsInstanceConfigAToHclTerraform(struct?: GoogleFirebaseExtensionsInstanceConfigAOutputReference | GoogleFirebaseExtensionsInstanceConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_event_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedEventTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    eventarc_channel: {
      value: cdktf.stringToHclTerraform(struct!.eventarcChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_ref: {
      value: cdktf.stringToHclTerraform(struct!.extensionRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extension_version: {
      value: cdktf.stringToHclTerraform(struct!.extensionVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    system_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseExtensionsInstanceConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseExtensionsInstanceConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedEventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedEventTypes = this._allowedEventTypes;
    }
    if (this._eventarcChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventarcChannel = this._eventarcChannel;
    }
    if (this._extensionRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionRef = this._extensionRef;
    }
    if (this._extensionVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionVersion = this._extensionVersion;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._systemParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemParams = this._systemParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseExtensionsInstanceConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedEventTypes = undefined;
      this._eventarcChannel = undefined;
      this._extensionRef = undefined;
      this._extensionVersion = undefined;
      this._params = undefined;
      this._systemParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedEventTypes = value.allowedEventTypes;
      this._eventarcChannel = value.eventarcChannel;
      this._extensionRef = value.extensionRef;
      this._extensionVersion = value.extensionVersion;
      this._params = value.params;
      this._systemParams = value.systemParams;
    }
  }

  // allowed_event_types - computed: false, optional: true, required: false
  private _allowedEventTypes?: string[]; 
  public get allowedEventTypes() {
    return this.getListAttribute('allowed_event_types');
  }
  public set allowedEventTypes(value: string[]) {
    this._allowedEventTypes = value;
  }
  public resetAllowedEventTypes() {
    this._allowedEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEventTypesInput() {
    return this._allowedEventTypes;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eventarc_channel - computed: true, optional: true, required: false
  private _eventarcChannel?: string; 
  public get eventarcChannel() {
    return this.getStringAttribute('eventarc_channel');
  }
  public set eventarcChannel(value: string) {
    this._eventarcChannel = value;
  }
  public resetEventarcChannel() {
    this._eventarcChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventarcChannelInput() {
    return this._eventarcChannel;
  }

  // extension_ref - computed: false, optional: false, required: true
  private _extensionRef?: string; 
  public get extensionRef() {
    return this.getStringAttribute('extension_ref');
  }
  public set extensionRef(value: string) {
    this._extensionRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionRefInput() {
    return this._extensionRef;
  }

  // extension_version - computed: true, optional: true, required: false
  private _extensionVersion?: string; 
  public get extensionVersion() {
    return this.getStringAttribute('extension_version');
  }
  public set extensionVersion(value: string) {
    this._extensionVersion = value;
  }
  public resetExtensionVersion() {
    this._extensionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionVersionInput() {
    return this._extensionVersion;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // populated_postinstall_content - computed: true, optional: false, required: false
  public get populatedPostinstallContent() {
    return this.getStringAttribute('populated_postinstall_content');
  }

  // system_params - computed: true, optional: true, required: false
  private _systemParams?: { [key: string]: string }; 
  public get systemParams() {
    return this.getStringMapAttribute('system_params');
  }
  public set systemParams(value: { [key: string]: string }) {
    this._systemParams = value;
  }
  public resetSystemParams() {
    this._systemParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemParamsInput() {
    return this._systemParams;
  }
}
export interface GoogleFirebaseExtensionsInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#create GoogleFirebaseExtensionsInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#delete GoogleFirebaseExtensionsInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#update GoogleFirebaseExtensionsInstance#update}
  */
  readonly update?: string;
}

export function googleFirebaseExtensionsInstanceTimeoutsToTerraform(struct?: GoogleFirebaseExtensionsInstanceTimeouts | cdktf.IResolvable): any {
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


export function googleFirebaseExtensionsInstanceTimeoutsToHclTerraform(struct?: GoogleFirebaseExtensionsInstanceTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirebaseExtensionsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseExtensionsInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirebaseExtensionsInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance google_firebase_extensions_instance}
*/
export class GoogleFirebaseExtensionsInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_extensions_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseExtensionsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseExtensionsInstance to import
  * @param importFromId The id of the existing GoogleFirebaseExtensionsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseExtensionsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_extensions_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_firebase_extensions_instance google_firebase_extensions_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseExtensionsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseExtensionsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_extensions_instance',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._project = config.project;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // error_status - computed: true, optional: false, required: false
  private _errorStatus = new GoogleFirebaseExtensionsInstanceErrorStatusList(this, "error_status", false);
  public get errorStatus() {
    return this._errorStatus;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // last_operation_name - computed: true, optional: false, required: false
  public get lastOperationName() {
    return this.getStringAttribute('last_operation_name');
  }

  // last_operation_type - computed: true, optional: false, required: false
  public get lastOperationType() {
    return this.getStringAttribute('last_operation_type');
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

  // runtime_data - computed: true, optional: false, required: false
  private _runtimeData = new GoogleFirebaseExtensionsInstanceRuntimeDataList(this, "runtime_data", false);
  public get runtimeData() {
    return this._runtimeData;
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleFirebaseExtensionsInstanceConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleFirebaseExtensionsInstanceConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseExtensionsInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseExtensionsInstanceTimeouts) {
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
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project: cdktf.stringToTerraform(this._project),
      config: googleFirebaseExtensionsInstanceConfigAToTerraform(this._config.internalValue),
      timeouts: googleFirebaseExtensionsInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      config: {
        value: googleFirebaseExtensionsInstanceConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseExtensionsInstanceConfigAList",
      },
      timeouts: {
        value: googleFirebaseExtensionsInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseExtensionsInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
