/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the webhook is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#disabled GoogleDialogflowCxWebhook#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The human-readable name of the webhook, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#display_name GoogleDialogflowCxWebhook#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if automatic spell correction is enabled in detect intent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#enable_spell_correction GoogleDialogflowCxWebhook#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether this agent should log conversation queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#enable_stackdriver_logging GoogleDialogflowCxWebhook#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#id GoogleDialogflowCxWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The agent to create a webhook for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#parent GoogleDialogflowCxWebhook#parent}
  */
  readonly parent?: string;
  /**
  * Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#security_settings GoogleDialogflowCxWebhook#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * Webhook execution timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#timeout GoogleDialogflowCxWebhook#timeout}
  */
  readonly timeout?: string;
  /**
  * generic_web_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#generic_web_service GoogleDialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService?: GoogleDialogflowCxWebhookGenericWebService;
  /**
  * service_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#service_directory GoogleDialogflowCxWebhook#service_directory}
  */
  readonly serviceDirectory?: GoogleDialogflowCxWebhookServiceDirectory;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#timeouts GoogleDialogflowCxWebhook#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxWebhookTimeouts;
}
export interface GoogleDialogflowCxWebhookGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#allowed_ca_certs GoogleDialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * The HTTP request headers to send together with webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#request_headers GoogleDialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Whether to use speech adaptation for speech recognition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#uri GoogleDialogflowCxWebhook#uri}
  */
  readonly uri: string;
}

export function googleDialogflowCxWebhookGenericWebServiceToTerraform(struct?: GoogleDialogflowCxWebhookGenericWebServiceOutputReference | GoogleDialogflowCxWebhookGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaCerts),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleDialogflowCxWebhookGenericWebServiceToHclTerraform(struct?: GoogleDialogflowCxWebhookGenericWebServiceOutputReference | GoogleDialogflowCxWebhookGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ca_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCaCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GoogleDialogflowCxWebhookGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxWebhookGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxWebhookGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._requestHeaders = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._requestHeaders = value.requestHeaders;
      this._uri = value.uri;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
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
export interface GoogleDialogflowCxWebhookServiceDirectoryGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#allowed_ca_certs GoogleDialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * The HTTP request headers to send together with webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#request_headers GoogleDialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Whether to use speech adaptation for speech recognition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#uri GoogleDialogflowCxWebhook#uri}
  */
  readonly uri: string;
}

export function googleDialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct?: GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference | GoogleDialogflowCxWebhookServiceDirectoryGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaCerts),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleDialogflowCxWebhookServiceDirectoryGenericWebServiceToHclTerraform(struct?: GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference | GoogleDialogflowCxWebhookServiceDirectoryGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ca_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCaCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxWebhookServiceDirectoryGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxWebhookServiceDirectoryGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._requestHeaders = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._requestHeaders = value.requestHeaders;
      this._uri = value.uri;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
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
export interface GoogleDialogflowCxWebhookServiceDirectory {
  /**
  * The name of Service Directory service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#service GoogleDialogflowCxWebhook#service}
  */
  readonly service: string;
  /**
  * generic_web_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#generic_web_service GoogleDialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService: GoogleDialogflowCxWebhookServiceDirectoryGenericWebService;
}

export function googleDialogflowCxWebhookServiceDirectoryToTerraform(struct?: GoogleDialogflowCxWebhookServiceDirectoryOutputReference | GoogleDialogflowCxWebhookServiceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    generic_web_service: googleDialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct!.genericWebService),
  }
}


export function googleDialogflowCxWebhookServiceDirectoryToHclTerraform(struct?: GoogleDialogflowCxWebhookServiceDirectoryOutputReference | GoogleDialogflowCxWebhookServiceDirectory): any {
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
    generic_web_service: {
      value: googleDialogflowCxWebhookServiceDirectoryGenericWebServiceToHclTerraform(struct!.genericWebService),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxWebhookServiceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxWebhookServiceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._genericWebService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericWebService = this._genericWebService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxWebhookServiceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
      this._genericWebService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
      this._genericWebService.internalValue = value.genericWebService;
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

  // generic_web_service - computed: false, optional: false, required: true
  private _genericWebService = new GoogleDialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: GoogleDialogflowCxWebhookServiceDirectoryGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }
}
export interface GoogleDialogflowCxWebhookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#create GoogleDialogflowCxWebhook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#delete GoogleDialogflowCxWebhook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#update GoogleDialogflowCxWebhook#update}
  */
  readonly update?: string;
}

export function googleDialogflowCxWebhookTimeoutsToTerraform(struct?: GoogleDialogflowCxWebhookTimeouts | cdktf.IResolvable): any {
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


export function googleDialogflowCxWebhookTimeoutsToHclTerraform(struct?: GoogleDialogflowCxWebhookTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxWebhookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowCxWebhookTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxWebhookTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook google_dialogflow_cx_webhook}
*/
export class GoogleDialogflowCxWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDialogflowCxWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowCxWebhook to import
  * @param importFromId The id of the existing GoogleDialogflowCxWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowCxWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_dialogflow_cx_webhook google_dialogflow_cx_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_webhook',
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
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._id = config.id;
    this._parent = config.parent;
    this._securitySettings = config.securitySettings;
    this._timeout = config.timeout;
    this._genericWebService.internalValue = config.genericWebService;
    this._serviceDirectory.internalValue = config.serviceDirectory;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_spell_correction - computed: false, optional: true, required: false
  private _enableSpellCorrection?: boolean | cdktf.IResolvable; 
  public get enableSpellCorrection() {
    return this.getBooleanAttribute('enable_spell_correction');
  }
  public set enableSpellCorrection(value: boolean | cdktf.IResolvable) {
    this._enableSpellCorrection = value;
  }
  public resetEnableSpellCorrection() {
    this._enableSpellCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpellCorrectionInput() {
    return this._enableSpellCorrection;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktf.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktf.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
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

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings?: string; 
  public get securitySettings() {
    return this.getStringAttribute('security_settings');
  }
  public set securitySettings(value: string) {
    this._securitySettings = value;
  }
  public resetSecuritySettings() {
    this._securitySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings;
  }

  // start_flow - computed: true, optional: false, required: false
  public get startFlow() {
    return this.getStringAttribute('start_flow');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new GoogleDialogflowCxWebhookGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: GoogleDialogflowCxWebhookGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }

  // service_directory - computed: false, optional: true, required: false
  private _serviceDirectory = new GoogleDialogflowCxWebhookServiceDirectoryOutputReference(this, "service_directory");
  public get serviceDirectory() {
    return this._serviceDirectory;
  }
  public putServiceDirectory(value: GoogleDialogflowCxWebhookServiceDirectory) {
    this._serviceDirectory.internalValue = value;
  }
  public resetServiceDirectory() {
    this._serviceDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryInput() {
    return this._serviceDirectory.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxWebhookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxWebhookTimeouts) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_spell_correction: cdktf.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      timeout: cdktf.stringToTerraform(this._timeout),
      generic_web_service: googleDialogflowCxWebhookGenericWebServiceToTerraform(this._genericWebService.internalValue),
      service_directory: googleDialogflowCxWebhookServiceDirectoryToTerraform(this._serviceDirectory.internalValue),
      timeouts: googleDialogflowCxWebhookTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_spell_correction: {
        value: cdktf.booleanToHclTerraform(this._enableSpellCorrection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_logging: {
        value: cdktf.booleanToHclTerraform(this._enableStackdriverLogging),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_settings: {
        value: cdktf.stringToHclTerraform(this._securitySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_web_service: {
        value: googleDialogflowCxWebhookGenericWebServiceToHclTerraform(this._genericWebService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxWebhookGenericWebServiceList",
      },
      service_directory: {
        value: googleDialogflowCxWebhookServiceDirectoryToHclTerraform(this._serviceDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxWebhookServiceDirectoryList",
      },
      timeouts: {
        value: googleDialogflowCxWebhookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowCxWebhookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
