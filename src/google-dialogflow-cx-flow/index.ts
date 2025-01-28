/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#description GoogleDialogflowCxFlow#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#display_name GoogleDialogflowCxFlow#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#id GoogleDialogflowCxFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically.
  * The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources.
  * 
  * ~> Avoid having multiple 'google_dialogflow_cx_flow' resources linked to the same agent with 'is_default_start_flow = true' because they will compete to control a single Default Start Flow resource in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#is_default_start_flow GoogleDialogflowCxFlow#is_default_start_flow}
  */
  readonly isDefaultStartFlow?: boolean | cdktf.IResolvable;
  /**
  * The language of the following fields in flow:
  * Flow.event_handlers.trigger_fulfillment.messages
  * Flow.event_handlers.trigger_fulfillment.conditional_cases
  * Flow.transition_routes.trigger_fulfillment.messages
  * Flow.transition_routes.trigger_fulfillment.conditional_cases
  * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#language_code GoogleDialogflowCxFlow#language_code}
  */
  readonly languageCode?: string;
  /**
  * The agent to create a flow for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#parent GoogleDialogflowCxFlow#parent}
  */
  readonly parent?: string;
  /**
  * A flow's transition route group serve two purposes:
  * They are responsible for matching the user's first utterances in the flow.
  * They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
  * Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#transition_route_groups GoogleDialogflowCxFlow#transition_route_groups}
  */
  readonly transitionRouteGroups?: string[];
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#advanced_settings GoogleDialogflowCxFlow#advanced_settings}
  */
  readonly advancedSettings?: GoogleDialogflowCxFlowAdvancedSettings;
  /**
  * event_handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#event_handlers GoogleDialogflowCxFlow#event_handlers}
  */
  readonly eventHandlers?: GoogleDialogflowCxFlowEventHandlers[] | cdktf.IResolvable;
  /**
  * nlu_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#nlu_settings GoogleDialogflowCxFlow#nlu_settings}
  */
  readonly nluSettings?: GoogleDialogflowCxFlowNluSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#timeouts GoogleDialogflowCxFlow#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxFlowTimeouts;
  /**
  * transition_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#transition_routes GoogleDialogflowCxFlow#transition_routes}
  */
  readonly transitionRoutes?: GoogleDialogflowCxFlowTransitionRoutes[] | cdktf.IResolvable;
}
export interface GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination {
  /**
  * The Google Cloud Storage URI for the exported objects. Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
  * Format: gs://bucket/object-name-or-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#uri GoogleDialogflowCxFlow#uri}
  */
  readonly uri?: string;
}

export function googleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference | GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference | GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#enabled GoogleDialogflowCxFlow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#finish_digit GoogleDialogflowCxFlow#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#max_digits GoogleDialogflowCxFlow#max_digits}
  */
  readonly maxDigits?: number;
}

export function googleDialogflowCxFlowAdvancedSettingsDtmfSettingsToTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    finish_digit: cdktf.stringToTerraform(struct!.finishDigit),
    max_digits: cdktf.numberToTerraform(struct!.maxDigits),
  }
}


export function googleDialogflowCxFlowAdvancedSettingsDtmfSettingsToHclTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings): any {
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
    finish_digit: {
      value: cdktf.stringToHclTerraform(struct!.finishDigit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_digits: {
      value: cdktf.numberToHclTerraform(struct!.maxDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._finishDigit !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishDigit = this._finishDigit;
    }
    if (this._maxDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDigits = this._maxDigits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._finishDigit = undefined;
      this._maxDigits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._finishDigit = value.finishDigit;
      this._maxDigits = value.maxDigits;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // finish_digit - computed: false, optional: true, required: false
  private _finishDigit?: string; 
  public get finishDigit() {
    return this.getStringAttribute('finish_digit');
  }
  public set finishDigit(value: string) {
    this._finishDigit = value;
  }
  public resetFinishDigit() {
    this._finishDigit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishDigitInput() {
    return this._finishDigit;
  }

  // max_digits - computed: false, optional: true, required: false
  private _maxDigits?: number; 
  public get maxDigits() {
    return this.getNumberAttribute('max_digits');
  }
  public set maxDigits(value: number) {
    this._maxDigits = value;
  }
  public resetMaxDigits() {
    this._maxDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDigitsInput() {
    return this._maxDigits;
  }
}
export interface GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings {
  /**
  * Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#enable_consent_based_redaction GoogleDialogflowCxFlow#enable_consent_based_redaction}
  */
  readonly enableConsentBasedRedaction?: boolean | cdktf.IResolvable;
  /**
  * Enables DF Interaction logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#enable_interaction_logging GoogleDialogflowCxFlow#enable_interaction_logging}
  */
  readonly enableInteractionLogging?: boolean | cdktf.IResolvable;
  /**
  * Enables Google Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#enable_stackdriver_logging GoogleDialogflowCxFlow#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
}

export function googleDialogflowCxFlowAdvancedSettingsLoggingSettingsToTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_consent_based_redaction: cdktf.booleanToTerraform(struct!.enableConsentBasedRedaction),
    enable_interaction_logging: cdktf.booleanToTerraform(struct!.enableInteractionLogging),
    enable_stackdriver_logging: cdktf.booleanToTerraform(struct!.enableStackdriverLogging),
  }
}


export function googleDialogflowCxFlowAdvancedSettingsLoggingSettingsToHclTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_consent_based_redaction: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsentBasedRedaction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interaction_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableInteractionLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_stackdriver_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableStackdriverLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConsentBasedRedaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsentBasedRedaction = this._enableConsentBasedRedaction;
    }
    if (this._enableInteractionLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInteractionLogging = this._enableInteractionLogging;
    }
    if (this._enableStackdriverLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStackdriverLogging = this._enableStackdriverLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConsentBasedRedaction = undefined;
      this._enableInteractionLogging = undefined;
      this._enableStackdriverLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConsentBasedRedaction = value.enableConsentBasedRedaction;
      this._enableInteractionLogging = value.enableInteractionLogging;
      this._enableStackdriverLogging = value.enableStackdriverLogging;
    }
  }

  // enable_consent_based_redaction - computed: false, optional: true, required: false
  private _enableConsentBasedRedaction?: boolean | cdktf.IResolvable; 
  public get enableConsentBasedRedaction() {
    return this.getBooleanAttribute('enable_consent_based_redaction');
  }
  public set enableConsentBasedRedaction(value: boolean | cdktf.IResolvable) {
    this._enableConsentBasedRedaction = value;
  }
  public resetEnableConsentBasedRedaction() {
    this._enableConsentBasedRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsentBasedRedactionInput() {
    return this._enableConsentBasedRedaction;
  }

  // enable_interaction_logging - computed: false, optional: true, required: false
  private _enableInteractionLogging?: boolean | cdktf.IResolvable; 
  public get enableInteractionLogging() {
    return this.getBooleanAttribute('enable_interaction_logging');
  }
  public set enableInteractionLogging(value: boolean | cdktf.IResolvable) {
    this._enableInteractionLogging = value;
  }
  public resetEnableInteractionLogging() {
    this._enableInteractionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInteractionLoggingInput() {
    return this._enableInteractionLogging;
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
}
export interface GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings {
  /**
  * Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#endpointer_sensitivity GoogleDialogflowCxFlow#endpointer_sensitivity}
  */
  readonly endpointerSensitivity?: number;
  /**
  * Mapping from language to Speech-to-Text model. The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
  * An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#models GoogleDialogflowCxFlow#models}
  */
  readonly models?: { [key: string]: string };
  /**
  * Timeout before detecting no speech.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#no_speech_timeout GoogleDialogflowCxFlow#no_speech_timeout}
  */
  readonly noSpeechTimeout?: string;
  /**
  * Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#use_timeout_based_endpointing GoogleDialogflowCxFlow#use_timeout_based_endpointing}
  */
  readonly useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable;
}

export function googleDialogflowCxFlowAdvancedSettingsSpeechSettingsToTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpointer_sensitivity: cdktf.numberToTerraform(struct!.endpointerSensitivity),
    models: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.models),
    no_speech_timeout: cdktf.stringToTerraform(struct!.noSpeechTimeout),
    use_timeout_based_endpointing: cdktf.booleanToTerraform(struct!.useTimeoutBasedEndpointing),
  }
}


export function googleDialogflowCxFlowAdvancedSettingsSpeechSettingsToHclTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpointer_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.endpointerSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    models: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.models),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_speech_timeout: {
      value: cdktf.stringToHclTerraform(struct!.noSpeechTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_timeout_based_endpointing: {
      value: cdktf.booleanToHclTerraform(struct!.useTimeoutBasedEndpointing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointerSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointerSensitivity = this._endpointerSensitivity;
    }
    if (this._models !== undefined) {
      hasAnyValues = true;
      internalValueResult.models = this._models;
    }
    if (this._noSpeechTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSpeechTimeout = this._noSpeechTimeout;
    }
    if (this._useTimeoutBasedEndpointing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTimeoutBasedEndpointing = this._useTimeoutBasedEndpointing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointerSensitivity = undefined;
      this._models = undefined;
      this._noSpeechTimeout = undefined;
      this._useTimeoutBasedEndpointing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointerSensitivity = value.endpointerSensitivity;
      this._models = value.models;
      this._noSpeechTimeout = value.noSpeechTimeout;
      this._useTimeoutBasedEndpointing = value.useTimeoutBasedEndpointing;
    }
  }

  // endpointer_sensitivity - computed: false, optional: true, required: false
  private _endpointerSensitivity?: number; 
  public get endpointerSensitivity() {
    return this.getNumberAttribute('endpointer_sensitivity');
  }
  public set endpointerSensitivity(value: number) {
    this._endpointerSensitivity = value;
  }
  public resetEndpointerSensitivity() {
    this._endpointerSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointerSensitivityInput() {
    return this._endpointerSensitivity;
  }

  // models - computed: false, optional: true, required: false
  private _models?: { [key: string]: string }; 
  public get models() {
    return this.getStringMapAttribute('models');
  }
  public set models(value: { [key: string]: string }) {
    this._models = value;
  }
  public resetModels() {
    this._models = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelsInput() {
    return this._models;
  }

  // no_speech_timeout - computed: false, optional: true, required: false
  private _noSpeechTimeout?: string; 
  public get noSpeechTimeout() {
    return this.getStringAttribute('no_speech_timeout');
  }
  public set noSpeechTimeout(value: string) {
    this._noSpeechTimeout = value;
  }
  public resetNoSpeechTimeout() {
    this._noSpeechTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSpeechTimeoutInput() {
    return this._noSpeechTimeout;
  }

  // use_timeout_based_endpointing - computed: false, optional: true, required: false
  private _useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable; 
  public get useTimeoutBasedEndpointing() {
    return this.getBooleanAttribute('use_timeout_based_endpointing');
  }
  public set useTimeoutBasedEndpointing(value: boolean | cdktf.IResolvable) {
    this._useTimeoutBasedEndpointing = value;
  }
  public resetUseTimeoutBasedEndpointing() {
    this._useTimeoutBasedEndpointing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTimeoutBasedEndpointingInput() {
    return this._useTimeoutBasedEndpointing;
  }
}
export interface GoogleDialogflowCxFlowAdvancedSettings {
  /**
  * audio_export_gcs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#audio_export_gcs_destination GoogleDialogflowCxFlow#audio_export_gcs_destination}
  */
  readonly audioExportGcsDestination?: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination;
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#dtmf_settings GoogleDialogflowCxFlow#dtmf_settings}
  */
  readonly dtmfSettings?: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings;
  /**
  * logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#logging_settings GoogleDialogflowCxFlow#logging_settings}
  */
  readonly loggingSettings?: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings;
  /**
  * speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#speech_settings GoogleDialogflowCxFlow#speech_settings}
  */
  readonly speechSettings?: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings;
}

export function googleDialogflowCxFlowAdvancedSettingsToTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_export_gcs_destination: googleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToTerraform(struct!.audioExportGcsDestination),
    dtmf_settings: googleDialogflowCxFlowAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
    logging_settings: googleDialogflowCxFlowAdvancedSettingsLoggingSettingsToTerraform(struct!.loggingSettings),
    speech_settings: googleDialogflowCxFlowAdvancedSettingsSpeechSettingsToTerraform(struct!.speechSettings),
  }
}


export function googleDialogflowCxFlowAdvancedSettingsToHclTerraform(struct?: GoogleDialogflowCxFlowAdvancedSettingsOutputReference | GoogleDialogflowCxFlowAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_export_gcs_destination: {
      value: googleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct!.audioExportGcsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationList",
    },
    dtmf_settings: {
      value: googleDialogflowCxFlowAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsList",
    },
    logging_settings: {
      value: googleDialogflowCxFlowAdvancedSettingsLoggingSettingsToHclTerraform(struct!.loggingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsList",
    },
    speech_settings: {
      value: googleDialogflowCxFlowAdvancedSettingsSpeechSettingsToHclTerraform(struct!.speechSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExportGcsDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExportGcsDestination = this._audioExportGcsDestination?.internalValue;
    }
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    if (this._loggingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingSettings = this._loggingSettings?.internalValue;
    }
    if (this._speechSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speechSettings = this._speechSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioExportGcsDestination.internalValue = undefined;
      this._dtmfSettings.internalValue = undefined;
      this._loggingSettings.internalValue = undefined;
      this._speechSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioExportGcsDestination.internalValue = value.audioExportGcsDestination;
      this._dtmfSettings.internalValue = value.dtmfSettings;
      this._loggingSettings.internalValue = value.loggingSettings;
      this._speechSettings.internalValue = value.speechSettings;
    }
  }

  // audio_export_gcs_destination - computed: false, optional: true, required: false
  private _audioExportGcsDestination = new GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference(this, "audio_export_gcs_destination");
  public get audioExportGcsDestination() {
    return this._audioExportGcsDestination;
  }
  public putAudioExportGcsDestination(value: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination) {
    this._audioExportGcsDestination.internalValue = value;
  }
  public resetAudioExportGcsDestination() {
    this._audioExportGcsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExportGcsDestinationInput() {
    return this._audioExportGcsDestination.internalValue;
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings) {
    this._dtmfSettings.internalValue = value;
  }
  public resetDtmfSettings() {
    this._dtmfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSettingsInput() {
    return this._dtmfSettings.internalValue;
  }

  // logging_settings - computed: false, optional: true, required: false
  private _loggingSettings = new GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference(this, "logging_settings");
  public get loggingSettings() {
    return this._loggingSettings;
  }
  public putLoggingSettings(value: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings) {
    this._loggingSettings.internalValue = value;
  }
  public resetLoggingSettings() {
    this._loggingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSettingsInput() {
    return this._loggingSettings.internalValue;
  }

  // speech_settings - computed: false, optional: true, required: false
  private _speechSettings = new GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference(this, "speech_settings");
  public get speechSettings() {
    return this._speechSettings;
  }
  public putSpeechSettings(value: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings) {
    this._speechSettings.internalValue = value;
  }
  public resetSpeechSettings() {
    this._speechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechSettingsInput() {
    return this._speechSettings.internalValue;
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#cases GoogleDialogflowCxFlow#cases}
  */
  readonly cases?: string;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cases: {
      value: cdktf.stringToHclTerraform(struct!.cases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cases !== undefined) {
      hasAnyValues = true;
      internalValueResult.cases = this._cases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cases = value.cases;
    }
  }

  // cases - computed: false, optional: true, required: false
  private _cases?: string; 
  public get cases() {
    return this.getStringAttribute('cases');
  }
  public set cases(value: string) {
    this._cases = value;
  }
  public resetCases() {
    this._cases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesInput() {
    return this._cases;
  }
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference {
    return new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#ssml GoogleDialogflowCxFlow#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}
  */
  readonly text?: string;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssml: {
      value: cdktf.stringToHclTerraform(struct!.ssml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssml !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssml = this._ssml;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssml = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssml = value.ssml;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // ssml - computed: false, optional: true, required: false
  private _ssml?: string; 
  public get ssml() {
    return this.getStringAttribute('ssml');
  }
  public set ssml(value: string) {
    this._ssml = value;
  }
  public resetSsml() {
    this._ssml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlInput() {
    return this._ssml;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#audio_uri GoogleDialogflowCxFlow#audio_uri}
  */
  readonly audioUri: string;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_uri: {
      value: cdktf.stringToHclTerraform(struct!.audioUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioUri = value.audioUri;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // audio_uri - computed: false, optional: false, required: true
  private _audioUri?: string; 
  public get audioUri() {
    return this.getStringAttribute('audio_uri');
  }
  public set audioUri(value: string) {
    this._audioUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioUriInput() {
    return this._audioUri;
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#phone_number GoogleDialogflowCxFlow#phone_number}
  */
  readonly phoneNumber: string;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}
  */
  readonly text?: string[];
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.text),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[]; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[]) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#channel GoogleDialogflowCxFlow#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#payload GoogleDialogflowCxFlow#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#conversation_success GoogleDialogflowCxFlow#conversation_success}
  */
  readonly conversationSuccess?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#live_agent_handoff GoogleDialogflowCxFlow#live_agent_handoff}
  */
  readonly liveAgentHandoff?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#output_audio_text GoogleDialogflowCxFlow#output_audio_text}
  */
  readonly outputAudioText?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#play_audio GoogleDialogflowCxFlow#play_audio}
  */
  readonly playAudio?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#telephony_transfer_call GoogleDialogflowCxFlow#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}
  */
  readonly text?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_success: {
      value: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._conversationSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationSuccess = this._conversationSuccess?.internalValue;
    }
    if (this._liveAgentHandoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveAgentHandoff = this._liveAgentHandoff?.internalValue;
    }
    if (this._outputAudioText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAudioText = this._outputAudioText?.internalValue;
    }
    if (this._playAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playAudio = this._playAudio?.internalValue;
    }
    if (this._telephonyTransferCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephonyTransferCall = this._telephonyTransferCall?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._payload = undefined;
      this._conversationSuccess.internalValue = undefined;
      this._liveAgentHandoff.internalValue = undefined;
      this._outputAudioText.internalValue = undefined;
      this._playAudio.internalValue = undefined;
      this._telephonyTransferCall.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._payload = value.payload;
      this._conversationSuccess.internalValue = value.conversationSuccess;
      this._liveAgentHandoff.internalValue = value.liveAgentHandoff;
      this._outputAudioText.internalValue = value.outputAudioText;
      this._playAudio.internalValue = value.playAudio;
      this._telephonyTransferCall.internalValue = value.telephonyTransferCall;
      this._text.internalValue = value.text;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // conversation_success - computed: false, optional: true, required: false
  private _conversationSuccess = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess) {
    this._conversationSuccess.internalValue = value;
  }
  public resetConversationSuccess() {
    this._conversationSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSuccessInput() {
    return this._conversationSuccess.internalValue;
  }

  // live_agent_handoff - computed: false, optional: true, required: false
  private _liveAgentHandoff = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff) {
    this._liveAgentHandoff.internalValue = value;
  }
  public resetLiveAgentHandoff() {
    this._liveAgentHandoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveAgentHandoffInput() {
    return this._liveAgentHandoff.internalValue;
  }

  // output_audio_text - computed: false, optional: true, required: false
  private _outputAudioText = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText) {
    this._outputAudioText.internalValue = value;
  }
  public resetOutputAudioText() {
    this._outputAudioText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAudioTextInput() {
    return this._outputAudioText.internalValue;
  }

  // play_audio - computed: false, optional: true, required: false
  private _playAudio = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio) {
    this._playAudio.internalValue = value;
  }
  public resetPlayAudio() {
    this._playAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playAudioInput() {
    return this._playAudio.internalValue;
  }

  // telephony_transfer_call - computed: false, optional: true, required: false
  private _telephonyTransferCall = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall) {
    this._telephonyTransferCall.internalValue = value;
  }
  public resetTelephonyTransferCall() {
    this._telephonyTransferCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephonyTransferCallInput() {
    return this._telephonyTransferCall.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference {
    return new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#parameter GoogleDialogflowCxFlow#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#value GoogleDialogflowCxFlow#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameter = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameter = value.parameter;
      this._value = value.value;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference {
    return new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxFlowEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#return_partial_responses GoogleDialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#tag GoogleDialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#webhook GoogleDialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#conditional_cases GoogleDialogflowCxFlow#conditional_cases}
  */
  readonly conditionalCases?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#messages GoogleDialogflowCxFlow#messages}
  */
  readonly messages?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#set_parameter_actions GoogleDialogflowCxFlow#set_parameter_actions}
  */
  readonly setParameterActions?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentToTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(googleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(googleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function googleDialogflowCxFlowEventHandlersTriggerFulfillmentToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference | GoogleDialogflowCxFlowEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_partial_responses: {
      value: cdktf.booleanToHclTerraform(struct!.returnPartialResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_cases: {
      value: cdktf.listMapperHcl(googleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(googleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowEventHandlersTriggerFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnPartialResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnPartialResponses = this._returnPartialResponses;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    if (this._conditionalCases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCases = this._conditionalCases?.internalValue;
    }
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    if (this._setParameterActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameterActions = this._setParameterActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnPartialResponses = undefined;
      this._tag = undefined;
      this._webhook = undefined;
      this._conditionalCases.internalValue = undefined;
      this._messages.internalValue = undefined;
      this._setParameterActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnPartialResponses = value.returnPartialResponses;
      this._tag = value.tag;
      this._webhook = value.webhook;
      this._conditionalCases.internalValue = value.conditionalCases;
      this._messages.internalValue = value.messages;
      this._setParameterActions.internalValue = value.setParameterActions;
    }
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses');
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // conditional_cases - computed: false, optional: true, required: false
  private _conditionalCases = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
    this._conditionalCases.internalValue = value;
  }
  public resetConditionalCases() {
    this._conditionalCases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCasesInput() {
    return this._conditionalCases.internalValue;
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // set_parameter_actions - computed: false, optional: true, required: false
  private _setParameterActions = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
    this._setParameterActions.internalValue = value;
  }
  public resetSetParameterActions() {
    this._setParameterActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParameterActionsInput() {
    return this._setParameterActions.internalValue;
  }
}
export interface GoogleDialogflowCxFlowEventHandlers {
  /**
  * The name of the event to handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#event GoogleDialogflowCxFlow#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#target_flow GoogleDialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#target_page GoogleDialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#trigger_fulfillment GoogleDialogflowCxFlow#trigger_fulfillment}
  */
  readonly triggerFulfillment?: GoogleDialogflowCxFlowEventHandlersTriggerFulfillment;
}

export function googleDialogflowCxFlowEventHandlersToTerraform(struct?: GoogleDialogflowCxFlowEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: googleDialogflowCxFlowEventHandlersTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function googleDialogflowCxFlowEventHandlersToHclTerraform(struct?: GoogleDialogflowCxFlowEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_flow: {
      value: cdktf.stringToHclTerraform(struct!.targetFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_page: {
      value: cdktf.stringToHclTerraform(struct!.targetPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_fulfillment: {
      value: googleDialogflowCxFlowEventHandlersTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowEventHandlersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowEventHandlers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._targetFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFlow = this._targetFlow;
    }
    if (this._targetPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPage = this._targetPage;
    }
    if (this._triggerFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerFulfillment = this._triggerFulfillment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowEventHandlers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._targetFlow = undefined;
      this._targetPage = undefined;
      this._triggerFulfillment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._targetFlow = value.targetFlow;
      this._targetPage = value.targetPage;
      this._triggerFulfillment.internalValue = value.triggerFulfillment;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_flow - computed: false, optional: true, required: false
  private _targetFlow?: string; 
  public get targetFlow() {
    return this.getStringAttribute('target_flow');
  }
  public set targetFlow(value: string) {
    this._targetFlow = value;
  }
  public resetTargetFlow() {
    this._targetFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFlowInput() {
    return this._targetFlow;
  }

  // target_page - computed: false, optional: true, required: false
  private _targetPage?: string; 
  public get targetPage() {
    return this.getStringAttribute('target_page');
  }
  public set targetPage(value: string) {
    this._targetPage = value;
  }
  public resetTargetPage() {
    this._targetPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPageInput() {
    return this._targetPage;
  }

  // trigger_fulfillment - computed: false, optional: true, required: false
  private _triggerFulfillment = new GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillment) {
    this._triggerFulfillment.internalValue = value;
  }
  public resetTriggerFulfillment() {
    this._triggerFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerFulfillmentInput() {
    return this._triggerFulfillment.internalValue;
  }
}

export class GoogleDialogflowCxFlowEventHandlersList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowEventHandlers[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowEventHandlersOutputReference {
    return new GoogleDialogflowCxFlowEventHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxFlowNluSettings {
  /**
  * To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.
  * If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#classification_threshold GoogleDialogflowCxFlow#classification_threshold}
  */
  readonly classificationThreshold?: number;
  /**
  * Indicates NLU model training mode.
  * * MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
  * * MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#model_training_mode GoogleDialogflowCxFlow#model_training_mode}
  */
  readonly modelTrainingMode?: string;
  /**
  * Indicates the type of NLU model.
  * * MODEL_TYPE_STANDARD: Use standard NLU model.
  * * MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#model_type GoogleDialogflowCxFlow#model_type}
  */
  readonly modelType?: string;
}

export function googleDialogflowCxFlowNluSettingsToTerraform(struct?: GoogleDialogflowCxFlowNluSettingsOutputReference | GoogleDialogflowCxFlowNluSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification_threshold: cdktf.numberToTerraform(struct!.classificationThreshold),
    model_training_mode: cdktf.stringToTerraform(struct!.modelTrainingMode),
    model_type: cdktf.stringToTerraform(struct!.modelType),
  }
}


export function googleDialogflowCxFlowNluSettingsToHclTerraform(struct?: GoogleDialogflowCxFlowNluSettingsOutputReference | GoogleDialogflowCxFlowNluSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification_threshold: {
      value: cdktf.numberToHclTerraform(struct!.classificationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_training_mode: {
      value: cdktf.stringToHclTerraform(struct!.modelTrainingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowNluSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowNluSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationThreshold = this._classificationThreshold;
    }
    if (this._modelTrainingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelTrainingMode = this._modelTrainingMode;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowNluSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classificationThreshold = undefined;
      this._modelTrainingMode = undefined;
      this._modelType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classificationThreshold = value.classificationThreshold;
      this._modelTrainingMode = value.modelTrainingMode;
      this._modelType = value.modelType;
    }
  }

  // classification_threshold - computed: false, optional: true, required: false
  private _classificationThreshold?: number; 
  public get classificationThreshold() {
    return this.getNumberAttribute('classification_threshold');
  }
  public set classificationThreshold(value: number) {
    this._classificationThreshold = value;
  }
  public resetClassificationThreshold() {
    this._classificationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationThresholdInput() {
    return this._classificationThreshold;
  }

  // model_training_mode - computed: false, optional: true, required: false
  private _modelTrainingMode?: string; 
  public get modelTrainingMode() {
    return this.getStringAttribute('model_training_mode');
  }
  public set modelTrainingMode(value: string) {
    this._modelTrainingMode = value;
  }
  public resetModelTrainingMode() {
    this._modelTrainingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTrainingModeInput() {
    return this._modelTrainingMode;
  }

  // model_type - computed: false, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }
}
export interface GoogleDialogflowCxFlowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#create GoogleDialogflowCxFlow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#delete GoogleDialogflowCxFlow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#update GoogleDialogflowCxFlow#update}
  */
  readonly update?: string;
}

export function googleDialogflowCxFlowTimeoutsToTerraform(struct?: GoogleDialogflowCxFlowTimeouts | cdktf.IResolvable): any {
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


export function googleDialogflowCxFlowTimeoutsToHclTerraform(struct?: GoogleDialogflowCxFlowTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxFlowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowCxFlowTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxFlowTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#cases GoogleDialogflowCxFlow#cases}
  */
  readonly cases?: string;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cases: {
      value: cdktf.stringToHclTerraform(struct!.cases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cases !== undefined) {
      hasAnyValues = true;
      internalValueResult.cases = this._cases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cases = value.cases;
    }
  }

  // cases - computed: false, optional: true, required: false
  private _cases?: string; 
  public get cases() {
    return this.getStringAttribute('cases');
  }
  public set cases(value: string) {
    this._cases = value;
  }
  public resetCases() {
    this._cases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casesInput() {
    return this._cases;
  }
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference {
    return new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#ssml GoogleDialogflowCxFlow#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}
  */
  readonly text?: string;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssml: {
      value: cdktf.stringToHclTerraform(struct!.ssml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssml !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssml = this._ssml;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ssml = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ssml = value.ssml;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // ssml - computed: false, optional: true, required: false
  private _ssml?: string; 
  public get ssml() {
    return this.getStringAttribute('ssml');
  }
  public set ssml(value: string) {
    this._ssml = value;
  }
  public resetSsml() {
    this._ssml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlInput() {
    return this._ssml;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#audio_uri GoogleDialogflowCxFlow#audio_uri}
  */
  readonly audioUri: string;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_uri: {
      value: cdktf.stringToHclTerraform(struct!.audioUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioUri = value.audioUri;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // audio_uri - computed: false, optional: false, required: true
  private _audioUri?: string; 
  public get audioUri() {
    return this.getStringAttribute('audio_uri');
  }
  public set audioUri(value: string) {
    this._audioUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioUriInput() {
    return this._audioUri;
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#phone_number GoogleDialogflowCxFlow#phone_number}
  */
  readonly phoneNumber: string;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phoneNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}
  */
  readonly text?: string[];
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.text),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // allow_playback_interruption - computed: true, optional: false, required: false
  public get allowPlaybackInterruption() {
    return this.getBooleanAttribute('allow_playback_interruption');
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[]; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[]) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#channel GoogleDialogflowCxFlow#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#payload GoogleDialogflowCxFlow#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#conversation_success GoogleDialogflowCxFlow#conversation_success}
  */
  readonly conversationSuccess?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#live_agent_handoff GoogleDialogflowCxFlow#live_agent_handoff}
  */
  readonly liveAgentHandoff?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#output_audio_text GoogleDialogflowCxFlow#output_audio_text}
  */
  readonly outputAudioText?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#play_audio GoogleDialogflowCxFlow#play_audio}
  */
  readonly playAudio?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#telephony_transfer_call GoogleDialogflowCxFlow#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}
  */
  readonly text?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conversation_success: {
      value: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._conversationSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationSuccess = this._conversationSuccess?.internalValue;
    }
    if (this._liveAgentHandoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveAgentHandoff = this._liveAgentHandoff?.internalValue;
    }
    if (this._outputAudioText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAudioText = this._outputAudioText?.internalValue;
    }
    if (this._playAudio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playAudio = this._playAudio?.internalValue;
    }
    if (this._telephonyTransferCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telephonyTransferCall = this._telephonyTransferCall?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._payload = undefined;
      this._conversationSuccess.internalValue = undefined;
      this._liveAgentHandoff.internalValue = undefined;
      this._outputAudioText.internalValue = undefined;
      this._playAudio.internalValue = undefined;
      this._telephonyTransferCall.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._payload = value.payload;
      this._conversationSuccess.internalValue = value.conversationSuccess;
      this._liveAgentHandoff.internalValue = value.liveAgentHandoff;
      this._outputAudioText.internalValue = value.outputAudioText;
      this._playAudio.internalValue = value.playAudio;
      this._telephonyTransferCall.internalValue = value.telephonyTransferCall;
      this._text.internalValue = value.text;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // conversation_success - computed: false, optional: true, required: false
  private _conversationSuccess = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess) {
    this._conversationSuccess.internalValue = value;
  }
  public resetConversationSuccess() {
    this._conversationSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationSuccessInput() {
    return this._conversationSuccess.internalValue;
  }

  // live_agent_handoff - computed: false, optional: true, required: false
  private _liveAgentHandoff = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff) {
    this._liveAgentHandoff.internalValue = value;
  }
  public resetLiveAgentHandoff() {
    this._liveAgentHandoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveAgentHandoffInput() {
    return this._liveAgentHandoff.internalValue;
  }

  // output_audio_text - computed: false, optional: true, required: false
  private _outputAudioText = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText) {
    this._outputAudioText.internalValue = value;
  }
  public resetOutputAudioText() {
    this._outputAudioText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAudioTextInput() {
    return this._outputAudioText.internalValue;
  }

  // play_audio - computed: false, optional: true, required: false
  private _playAudio = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio) {
    this._playAudio.internalValue = value;
  }
  public resetPlayAudio() {
    this._playAudio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playAudioInput() {
    return this._playAudio.internalValue;
  }

  // telephony_transfer_call - computed: false, optional: true, required: false
  private _telephonyTransferCall = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall) {
    this._telephonyTransferCall.internalValue = value;
  }
  public resetTelephonyTransferCall() {
    this._telephonyTransferCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephonyTransferCallInput() {
    return this._telephonyTransferCall.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference {
    return new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#parameter GoogleDialogflowCxFlow#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#value GoogleDialogflowCxFlow#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: cdktf.stringToHclTerraform(struct!.parameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameter = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameter = value.parameter;
      this._value = value.value;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: string; 
  public get parameter() {
    return this.getStringAttribute('parameter');
  }
  public set parameter(value: string) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference {
    return new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#return_partial_responses GoogleDialogflowCxFlow#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#tag GoogleDialogflowCxFlow#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#webhook GoogleDialogflowCxFlow#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#conditional_cases GoogleDialogflowCxFlow#conditional_cases}
  */
  readonly conditionalCases?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#messages GoogleDialogflowCxFlow#messages}
  */
  readonly messages?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#set_parameter_actions GoogleDialogflowCxFlow#set_parameter_actions}
  */
  readonly setParameterActions?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference | GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_partial_responses: {
      value: cdktf.booleanToHclTerraform(struct!.returnPartialResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditional_cases: {
      value: cdktf.listMapperHcl(googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnPartialResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnPartialResponses = this._returnPartialResponses;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    if (this._conditionalCases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCases = this._conditionalCases?.internalValue;
    }
    if (this._messages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages?.internalValue;
    }
    if (this._setParameterActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameterActions = this._setParameterActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnPartialResponses = undefined;
      this._tag = undefined;
      this._webhook = undefined;
      this._conditionalCases.internalValue = undefined;
      this._messages.internalValue = undefined;
      this._setParameterActions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._returnPartialResponses = value.returnPartialResponses;
      this._tag = value.tag;
      this._webhook = value.webhook;
      this._conditionalCases.internalValue = value.conditionalCases;
      this._messages.internalValue = value.messages;
      this._setParameterActions.internalValue = value.setParameterActions;
    }
  }

  // return_partial_responses - computed: false, optional: true, required: false
  private _returnPartialResponses?: boolean | cdktf.IResolvable; 
  public get returnPartialResponses() {
    return this.getBooleanAttribute('return_partial_responses');
  }
  public set returnPartialResponses(value: boolean | cdktf.IResolvable) {
    this._returnPartialResponses = value;
  }
  public resetReturnPartialResponses() {
    this._returnPartialResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnPartialResponsesInput() {
    return this._returnPartialResponses;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // conditional_cases - computed: false, optional: true, required: false
  private _conditionalCases = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
    this._conditionalCases.internalValue = value;
  }
  public resetConditionalCases() {
    this._conditionalCases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCasesInput() {
    return this._conditionalCases.internalValue;
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // set_parameter_actions - computed: false, optional: true, required: false
  private _setParameterActions = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
    this._setParameterActions.internalValue = value;
  }
  public resetSetParameterActions() {
    this._setParameterActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParameterActionsInput() {
    return this._setParameterActions.internalValue;
  }
}
export interface GoogleDialogflowCxFlowTransitionRoutes {
  /**
  * The condition to evaluate against form parameters or session parameters.
  * At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#condition GoogleDialogflowCxFlow#condition}
  */
  readonly condition?: string;
  /**
  * The unique identifier of an Intent.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#intent GoogleDialogflowCxFlow#intent}
  */
  readonly intent?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#target_flow GoogleDialogflowCxFlow#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#target_page GoogleDialogflowCxFlow#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#trigger_fulfillment GoogleDialogflowCxFlow#trigger_fulfillment}
  */
  readonly triggerFulfillment?: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment;
}

export function googleDialogflowCxFlowTransitionRoutesToTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    intent: cdktf.stringToTerraform(struct!.intent),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function googleDialogflowCxFlowTransitionRoutesToHclTerraform(struct?: GoogleDialogflowCxFlowTransitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intent: {
      value: cdktf.stringToHclTerraform(struct!.intent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_flow: {
      value: cdktf.stringToHclTerraform(struct!.targetFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_page: {
      value: cdktf.stringToHclTerraform(struct!.targetPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_fulfillment: {
      value: googleDialogflowCxFlowTransitionRoutesTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxFlowTransitionRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxFlowTransitionRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._intent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent;
    }
    if (this._targetFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFlow = this._targetFlow;
    }
    if (this._targetPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPage = this._targetPage;
    }
    if (this._triggerFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerFulfillment = this._triggerFulfillment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxFlowTransitionRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._intent = undefined;
      this._targetFlow = undefined;
      this._targetPage = undefined;
      this._triggerFulfillment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._intent = value.intent;
      this._targetFlow = value.targetFlow;
      this._targetPage = value.targetPage;
      this._triggerFulfillment.internalValue = value.triggerFulfillment;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // intent - computed: false, optional: true, required: false
  private _intent?: string; 
  public get intent() {
    return this.getStringAttribute('intent');
  }
  public set intent(value: string) {
    this._intent = value;
  }
  public resetIntent() {
    this._intent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_flow - computed: false, optional: true, required: false
  private _targetFlow?: string; 
  public get targetFlow() {
    return this.getStringAttribute('target_flow');
  }
  public set targetFlow(value: string) {
    this._targetFlow = value;
  }
  public resetTargetFlow() {
    this._targetFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFlowInput() {
    return this._targetFlow;
  }

  // target_page - computed: false, optional: true, required: false
  private _targetPage?: string; 
  public get targetPage() {
    return this.getStringAttribute('target_page');
  }
  public set targetPage(value: string) {
    this._targetPage = value;
  }
  public resetTargetPage() {
    this._targetPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPageInput() {
    return this._targetPage;
  }

  // trigger_fulfillment - computed: false, optional: true, required: false
  private _triggerFulfillment = new GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment) {
    this._triggerFulfillment.internalValue = value;
  }
  public resetTriggerFulfillment() {
    this._triggerFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerFulfillmentInput() {
    return this._triggerFulfillment.internalValue;
  }
}

export class GoogleDialogflowCxFlowTransitionRoutesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxFlowTransitionRoutes[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxFlowTransitionRoutesOutputReference {
    return new GoogleDialogflowCxFlowTransitionRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow google_dialogflow_cx_flow}
*/
export class GoogleDialogflowCxFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDialogflowCxFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowCxFlow to import
  * @param importFromId The id of the existing GoogleDialogflowCxFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowCxFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_dialogflow_cx_flow google_dialogflow_cx_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxFlowConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_flow',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isDefaultStartFlow = config.isDefaultStartFlow;
    this._languageCode = config.languageCode;
    this._parent = config.parent;
    this._transitionRouteGroups = config.transitionRouteGroups;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._eventHandlers.internalValue = config.eventHandlers;
    this._nluSettings.internalValue = config.nluSettings;
    this._timeouts.internalValue = config.timeouts;
    this._transitionRoutes.internalValue = config.transitionRoutes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_default_start_flow - computed: false, optional: true, required: false
  private _isDefaultStartFlow?: boolean | cdktf.IResolvable; 
  public get isDefaultStartFlow() {
    return this.getBooleanAttribute('is_default_start_flow');
  }
  public set isDefaultStartFlow(value: boolean | cdktf.IResolvable) {
    this._isDefaultStartFlow = value;
  }
  public resetIsDefaultStartFlow() {
    this._isDefaultStartFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultStartFlowInput() {
    return this._isDefaultStartFlow;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
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

  // transition_route_groups - computed: false, optional: true, required: false
  private _transitionRouteGroups?: string[]; 
  public get transitionRouteGroups() {
    return this.getListAttribute('transition_route_groups');
  }
  public set transitionRouteGroups(value: string[]) {
    this._transitionRouteGroups = value;
  }
  public resetTransitionRouteGroups() {
    this._transitionRouteGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionRouteGroupsInput() {
    return this._transitionRouteGroups;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new GoogleDialogflowCxFlowAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: GoogleDialogflowCxFlowAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // event_handlers - computed: false, optional: true, required: false
  private _eventHandlers = new GoogleDialogflowCxFlowEventHandlersList(this, "event_handlers", false);
  public get eventHandlers() {
    return this._eventHandlers;
  }
  public putEventHandlers(value: GoogleDialogflowCxFlowEventHandlers[] | cdktf.IResolvable) {
    this._eventHandlers.internalValue = value;
  }
  public resetEventHandlers() {
    this._eventHandlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlersInput() {
    return this._eventHandlers.internalValue;
  }

  // nlu_settings - computed: false, optional: true, required: false
  private _nluSettings = new GoogleDialogflowCxFlowNluSettingsOutputReference(this, "nlu_settings");
  public get nluSettings() {
    return this._nluSettings;
  }
  public putNluSettings(value: GoogleDialogflowCxFlowNluSettings) {
    this._nluSettings.internalValue = value;
  }
  public resetNluSettings() {
    this._nluSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nluSettingsInput() {
    return this._nluSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxFlowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxFlowTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transition_routes - computed: false, optional: true, required: false
  private _transitionRoutes = new GoogleDialogflowCxFlowTransitionRoutesList(this, "transition_routes", false);
  public get transitionRoutes() {
    return this._transitionRoutes;
  }
  public putTransitionRoutes(value: GoogleDialogflowCxFlowTransitionRoutes[] | cdktf.IResolvable) {
    this._transitionRoutes.internalValue = value;
  }
  public resetTransitionRoutes() {
    this._transitionRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionRoutesInput() {
    return this._transitionRoutes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_default_start_flow: cdktf.booleanToTerraform(this._isDefaultStartFlow),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      transition_route_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitionRouteGroups),
      advanced_settings: googleDialogflowCxFlowAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      event_handlers: cdktf.listMapper(googleDialogflowCxFlowEventHandlersToTerraform, true)(this._eventHandlers.internalValue),
      nlu_settings: googleDialogflowCxFlowNluSettingsToTerraform(this._nluSettings.internalValue),
      timeouts: googleDialogflowCxFlowTimeoutsToTerraform(this._timeouts.internalValue),
      transition_routes: cdktf.listMapper(googleDialogflowCxFlowTransitionRoutesToTerraform, true)(this._transitionRoutes.internalValue),
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
      is_default_start_flow: {
        value: cdktf.booleanToHclTerraform(this._isDefaultStartFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
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
      transition_route_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitionRouteGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      advanced_settings: {
        value: googleDialogflowCxFlowAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxFlowAdvancedSettingsList",
      },
      event_handlers: {
        value: cdktf.listMapperHcl(googleDialogflowCxFlowEventHandlersToHclTerraform, true)(this._eventHandlers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxFlowEventHandlersList",
      },
      nlu_settings: {
        value: googleDialogflowCxFlowNluSettingsToHclTerraform(this._nluSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxFlowNluSettingsList",
      },
      timeouts: {
        value: googleDialogflowCxFlowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowCxFlowTimeouts",
      },
      transition_routes: {
        value: cdktf.listMapperHcl(googleDialogflowCxFlowTransitionRoutesToHclTerraform, true)(this._transitionRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxFlowTransitionRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
