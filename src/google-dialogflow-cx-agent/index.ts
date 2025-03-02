/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#avatar_uri GoogleDialogflowCxAgent#avatar_uri}
  */
  readonly avatarUri?: string;
  /**
  * The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
  * for a list of the currently supported language codes. This field cannot be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#default_language_code GoogleDialogflowCxAgent#default_language_code}
  */
  readonly defaultLanguageCode: string;
  /**
  * The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#description GoogleDialogflowCxAgent#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the agent, unique within the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if automatic spell correction is enabled in detect intent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#enable_spell_correction GoogleDialogflowCxAgent#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether this agent should log conversation queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this agent is located in.
  * 
  * ~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
  *  This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
  *  Another options is to use global location so you don't need to manually configure location settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#location GoogleDialogflowCxAgent#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}
  */
  readonly project?: string;
  /**
  * Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#security_settings GoogleDialogflowCxAgent#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * The list of all languages supported by this agent (except for the default_language_code).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#supported_language_codes GoogleDialogflowCxAgent#supported_language_codes}
  */
  readonly supportedLanguageCodes?: string[];
  /**
  * The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
  * Europe/Paris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#time_zone GoogleDialogflowCxAgent#time_zone}
  */
  readonly timeZone: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#advanced_settings GoogleDialogflowCxAgent#advanced_settings}
  */
  readonly advancedSettings?: GoogleDialogflowCxAgentAdvancedSettings;
  /**
  * git_integration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#git_integration_settings GoogleDialogflowCxAgent#git_integration_settings}
  */
  readonly gitIntegrationSettings?: GoogleDialogflowCxAgentGitIntegrationSettings;
  /**
  * speech_to_text_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#speech_to_text_settings GoogleDialogflowCxAgent#speech_to_text_settings}
  */
  readonly speechToTextSettings?: GoogleDialogflowCxAgentSpeechToTextSettings;
  /**
  * text_to_speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#text_to_speech_settings GoogleDialogflowCxAgent#text_to_speech_settings}
  */
  readonly textToSpeechSettings?: GoogleDialogflowCxAgentTextToSpeechSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#timeouts GoogleDialogflowCxAgent#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxAgentTimeouts;
}
export interface GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination {
  /**
  * The Google Cloud Storage URI for the exported objects. Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
  * Format: gs://bucket/object-name-or-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#uri GoogleDialogflowCxAgent#uri}
  */
  readonly uri?: string;
}

export function googleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference | GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference | GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): any {
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

export class GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination | undefined) {
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
export interface GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#enabled GoogleDialogflowCxAgent#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#finish_digit GoogleDialogflowCxAgent#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#max_digits GoogleDialogflowCxAgent#max_digits}
  */
  readonly maxDigits?: number;
}

export function googleDialogflowCxAgentAdvancedSettingsDtmfSettingsToTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings): any {
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


export function googleDialogflowCxAgentAdvancedSettingsDtmfSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings): any {
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

export class GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings | undefined {
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

  public set internalValue(value: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings | undefined) {
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
export interface GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings {
  /**
  * Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#enable_consent_based_redaction GoogleDialogflowCxAgent#enable_consent_based_redaction}
  */
  readonly enableConsentBasedRedaction?: boolean | cdktf.IResolvable;
  /**
  * Enables DF Interaction logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#enable_interaction_logging GoogleDialogflowCxAgent#enable_interaction_logging}
  */
  readonly enableInteractionLogging?: boolean | cdktf.IResolvable;
  /**
  * Enables Google Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
}

export function googleDialogflowCxAgentAdvancedSettingsLoggingSettingsToTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings): any {
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


export function googleDialogflowCxAgentAdvancedSettingsLoggingSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings): any {
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

export class GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings | undefined {
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

  public set internalValue(value: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings | undefined) {
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
export interface GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings {
  /**
  * Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#endpointer_sensitivity GoogleDialogflowCxAgent#endpointer_sensitivity}
  */
  readonly endpointerSensitivity?: number;
  /**
  * Mapping from language to Speech-to-Text model. The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
  * An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#models GoogleDialogflowCxAgent#models}
  */
  readonly models?: { [key: string]: string };
  /**
  * Timeout before detecting no speech.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#no_speech_timeout GoogleDialogflowCxAgent#no_speech_timeout}
  */
  readonly noSpeechTimeout?: string;
  /**
  * Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#use_timeout_based_endpointing GoogleDialogflowCxAgent#use_timeout_based_endpointing}
  */
  readonly useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable;
}

export function googleDialogflowCxAgentAdvancedSettingsSpeechSettingsToTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings): any {
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


export function googleDialogflowCxAgentAdvancedSettingsSpeechSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings): any {
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

export class GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings | undefined {
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

  public set internalValue(value: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings | undefined) {
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
export interface GoogleDialogflowCxAgentAdvancedSettings {
  /**
  * audio_export_gcs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#audio_export_gcs_destination GoogleDialogflowCxAgent#audio_export_gcs_destination}
  */
  readonly audioExportGcsDestination?: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#dtmf_settings GoogleDialogflowCxAgent#dtmf_settings}
  */
  readonly dtmfSettings?: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings;
  /**
  * logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#logging_settings GoogleDialogflowCxAgent#logging_settings}
  */
  readonly loggingSettings?: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings;
  /**
  * speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#speech_settings GoogleDialogflowCxAgent#speech_settings}
  */
  readonly speechSettings?: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings;
}

export function googleDialogflowCxAgentAdvancedSettingsToTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_export_gcs_destination: googleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToTerraform(struct!.audioExportGcsDestination),
    dtmf_settings: googleDialogflowCxAgentAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
    logging_settings: googleDialogflowCxAgentAdvancedSettingsLoggingSettingsToTerraform(struct!.loggingSettings),
    speech_settings: googleDialogflowCxAgentAdvancedSettingsSpeechSettingsToTerraform(struct!.speechSettings),
  }
}


export function googleDialogflowCxAgentAdvancedSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentAdvancedSettingsOutputReference | GoogleDialogflowCxAgentAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_export_gcs_destination: {
      value: googleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct!.audioExportGcsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationList",
    },
    dtmf_settings: {
      value: googleDialogflowCxAgentAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsList",
    },
    logging_settings: {
      value: googleDialogflowCxAgentAdvancedSettingsLoggingSettingsToHclTerraform(struct!.loggingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsList",
    },
    speech_settings: {
      value: googleDialogflowCxAgentAdvancedSettingsSpeechSettingsToHclTerraform(struct!.speechSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxAgentAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentAdvancedSettings | undefined {
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

  public set internalValue(value: GoogleDialogflowCxAgentAdvancedSettings | undefined) {
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
  private _audioExportGcsDestination = new GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(this, "audio_export_gcs_destination");
  public get audioExportGcsDestination() {
    return this._audioExportGcsDestination;
  }
  public putAudioExportGcsDestination(value: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination) {
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
  private _dtmfSettings = new GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings) {
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
  private _loggingSettings = new GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference(this, "logging_settings");
  public get loggingSettings() {
    return this._loggingSettings;
  }
  public putLoggingSettings(value: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings) {
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
  private _speechSettings = new GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference(this, "speech_settings");
  public get speechSettings() {
    return this._speechSettings;
  }
  public putSpeechSettings(value: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings) {
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
export interface GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings {
  /**
  * The access token used to authenticate the access to the GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#access_token GoogleDialogflowCxAgent#access_token}
  */
  readonly accessToken?: string;
  /**
  * A list of branches configured to be used from Dialogflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#branches GoogleDialogflowCxAgent#branches}
  */
  readonly branches?: string[];
  /**
  * The unique repository display name for the GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * The GitHub repository URI related to the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#repository_uri GoogleDialogflowCxAgent#repository_uri}
  */
  readonly repositoryUri?: string;
  /**
  * The branch of the GitHub repository tracked for this agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#tracking_branch GoogleDialogflowCxAgent#tracking_branch}
  */
  readonly trackingBranch?: string;
}

export function googleDialogflowCxAgentGitIntegrationSettingsGithubSettingsToTerraform(struct?: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference | GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.branches),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    repository_uri: cdktf.stringToTerraform(struct!.repositoryUri),
    tracking_branch: cdktf.stringToTerraform(struct!.trackingBranch),
  }
}


export function googleDialogflowCxAgentGitIntegrationSettingsGithubSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference | GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.branches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_uri: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking_branch: {
      value: cdktf.stringToHclTerraform(struct!.trackingBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._branches !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._repositoryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUri = this._repositoryUri;
    }
    if (this._trackingBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingBranch = this._trackingBranch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._branches = undefined;
      this._displayName = undefined;
      this._repositoryUri = undefined;
      this._trackingBranch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._branches = value.branches;
      this._displayName = value.displayName;
      this._repositoryUri = value.repositoryUri;
      this._trackingBranch = value.trackingBranch;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return this.getListAttribute('branches');
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
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

  // repository_uri - computed: false, optional: true, required: false
  private _repositoryUri?: string; 
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }
  public set repositoryUri(value: string) {
    this._repositoryUri = value;
  }
  public resetRepositoryUri() {
    this._repositoryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUriInput() {
    return this._repositoryUri;
  }

  // tracking_branch - computed: false, optional: true, required: false
  private _trackingBranch?: string; 
  public get trackingBranch() {
    return this.getStringAttribute('tracking_branch');
  }
  public set trackingBranch(value: string) {
    this._trackingBranch = value;
  }
  public resetTrackingBranch() {
    this._trackingBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingBranchInput() {
    return this._trackingBranch;
  }
}
export interface GoogleDialogflowCxAgentGitIntegrationSettings {
  /**
  * github_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#github_settings GoogleDialogflowCxAgent#github_settings}
  */
  readonly githubSettings?: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings;
}

export function googleDialogflowCxAgentGitIntegrationSettingsToTerraform(struct?: GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference | GoogleDialogflowCxAgentGitIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github_settings: googleDialogflowCxAgentGitIntegrationSettingsGithubSettingsToTerraform(struct!.githubSettings),
  }
}


export function googleDialogflowCxAgentGitIntegrationSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference | GoogleDialogflowCxAgentGitIntegrationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    github_settings: {
      value: googleDialogflowCxAgentGitIntegrationSettingsGithubSettingsToHclTerraform(struct!.githubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentGitIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._githubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubSettings = this._githubSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxAgentGitIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._githubSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._githubSettings.internalValue = value.githubSettings;
    }
  }

  // github_settings - computed: false, optional: true, required: false
  private _githubSettings = new GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(this, "github_settings");
  public get githubSettings() {
    return this._githubSettings;
  }
  public putGithubSettings(value: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings) {
    this._githubSettings.internalValue = value;
  }
  public resetGithubSettings() {
    this._githubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubSettingsInput() {
    return this._githubSettings.internalValue;
  }
}
export interface GoogleDialogflowCxAgentSpeechToTextSettings {
  /**
  * Whether to use speech adaptation for speech recognition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#enable_speech_adaptation GoogleDialogflowCxAgent#enable_speech_adaptation}
  */
  readonly enableSpeechAdaptation?: boolean | cdktf.IResolvable;
}

export function googleDialogflowCxAgentSpeechToTextSettingsToTerraform(struct?: GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference | GoogleDialogflowCxAgentSpeechToTextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_speech_adaptation: cdktf.booleanToTerraform(struct!.enableSpeechAdaptation),
  }
}


export function googleDialogflowCxAgentSpeechToTextSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference | GoogleDialogflowCxAgentSpeechToTextSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_speech_adaptation: {
      value: cdktf.booleanToHclTerraform(struct!.enableSpeechAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentSpeechToTextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSpeechAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpeechAdaptation = this._enableSpeechAdaptation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxAgentSpeechToTextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSpeechAdaptation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSpeechAdaptation = value.enableSpeechAdaptation;
    }
  }

  // enable_speech_adaptation - computed: false, optional: true, required: false
  private _enableSpeechAdaptation?: boolean | cdktf.IResolvable; 
  public get enableSpeechAdaptation() {
    return this.getBooleanAttribute('enable_speech_adaptation');
  }
  public set enableSpeechAdaptation(value: boolean | cdktf.IResolvable) {
    this._enableSpeechAdaptation = value;
  }
  public resetEnableSpeechAdaptation() {
    this._enableSpeechAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpeechAdaptationInput() {
    return this._enableSpeechAdaptation;
  }
}
export interface GoogleDialogflowCxAgentTextToSpeechSettings {
  /**
  * Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig).
  * These settings affect:
  * * The phone gateway synthesize configuration set via Agent.text_to_speech_settings.
  * * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#synthesize_speech_configs GoogleDialogflowCxAgent#synthesize_speech_configs}
  */
  readonly synthesizeSpeechConfigs?: string;
}

export function googleDialogflowCxAgentTextToSpeechSettingsToTerraform(struct?: GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference | GoogleDialogflowCxAgentTextToSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    synthesize_speech_configs: cdktf.stringToTerraform(struct!.synthesizeSpeechConfigs),
  }
}


export function googleDialogflowCxAgentTextToSpeechSettingsToHclTerraform(struct?: GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference | GoogleDialogflowCxAgentTextToSpeechSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    synthesize_speech_configs: {
      value: cdktf.stringToHclTerraform(struct!.synthesizeSpeechConfigs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxAgentTextToSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synthesizeSpeechConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeSpeechConfigs = this._synthesizeSpeechConfigs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxAgentTextToSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synthesizeSpeechConfigs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synthesizeSpeechConfigs = value.synthesizeSpeechConfigs;
    }
  }

  // synthesize_speech_configs - computed: false, optional: true, required: false
  private _synthesizeSpeechConfigs?: string; 
  public get synthesizeSpeechConfigs() {
    return this.getStringAttribute('synthesize_speech_configs');
  }
  public set synthesizeSpeechConfigs(value: string) {
    this._synthesizeSpeechConfigs = value;
  }
  public resetSynthesizeSpeechConfigs() {
    this._synthesizeSpeechConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeSpeechConfigsInput() {
    return this._synthesizeSpeechConfigs;
  }
}
export interface GoogleDialogflowCxAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}
  */
  readonly update?: string;
}

export function googleDialogflowCxAgentTimeoutsToTerraform(struct?: GoogleDialogflowCxAgentTimeouts | cdktf.IResolvable): any {
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


export function googleDialogflowCxAgentTimeoutsToHclTerraform(struct?: GoogleDialogflowCxAgentTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxAgentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowCxAgentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxAgentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent google_dialogflow_cx_agent}
*/
export class GoogleDialogflowCxAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDialogflowCxAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowCxAgent to import
  * @param importFromId The id of the existing GoogleDialogflowCxAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowCxAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dialogflow_cx_agent google_dialogflow_cx_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxAgentConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_agent',
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
    this._avatarUri = config.avatarUri;
    this._defaultLanguageCode = config.defaultLanguageCode;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._securitySettings = config.securitySettings;
    this._supportedLanguageCodes = config.supportedLanguageCodes;
    this._timeZone = config.timeZone;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._gitIntegrationSettings.internalValue = config.gitIntegrationSettings;
    this._speechToTextSettings.internalValue = config.speechToTextSettings;
    this._textToSpeechSettings.internalValue = config.textToSpeechSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_uri - computed: false, optional: true, required: false
  private _avatarUri?: string; 
  public get avatarUri() {
    return this.getStringAttribute('avatar_uri');
  }
  public set avatarUri(value: string) {
    this._avatarUri = value;
  }
  public resetAvatarUri() {
    this._avatarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUriInput() {
    return this._avatarUri;
  }

  // default_language_code - computed: false, optional: false, required: true
  private _defaultLanguageCode?: string; 
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }
  public set defaultLanguageCode(value: string) {
    this._defaultLanguageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageCodeInput() {
    return this._defaultLanguageCode;
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

  // supported_language_codes - computed: false, optional: true, required: false
  private _supportedLanguageCodes?: string[]; 
  public get supportedLanguageCodes() {
    return this.getListAttribute('supported_language_codes');
  }
  public set supportedLanguageCodes(value: string[]) {
    this._supportedLanguageCodes = value;
  }
  public resetSupportedLanguageCodes() {
    this._supportedLanguageCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLanguageCodesInput() {
    return this._supportedLanguageCodes;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new GoogleDialogflowCxAgentAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: GoogleDialogflowCxAgentAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // git_integration_settings - computed: false, optional: true, required: false
  private _gitIntegrationSettings = new GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference(this, "git_integration_settings");
  public get gitIntegrationSettings() {
    return this._gitIntegrationSettings;
  }
  public putGitIntegrationSettings(value: GoogleDialogflowCxAgentGitIntegrationSettings) {
    this._gitIntegrationSettings.internalValue = value;
  }
  public resetGitIntegrationSettings() {
    this._gitIntegrationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitIntegrationSettingsInput() {
    return this._gitIntegrationSettings.internalValue;
  }

  // speech_to_text_settings - computed: false, optional: true, required: false
  private _speechToTextSettings = new GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference(this, "speech_to_text_settings");
  public get speechToTextSettings() {
    return this._speechToTextSettings;
  }
  public putSpeechToTextSettings(value: GoogleDialogflowCxAgentSpeechToTextSettings) {
    this._speechToTextSettings.internalValue = value;
  }
  public resetSpeechToTextSettings() {
    this._speechToTextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechToTextSettingsInput() {
    return this._speechToTextSettings.internalValue;
  }

  // text_to_speech_settings - computed: false, optional: true, required: false
  private _textToSpeechSettings = new GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference(this, "text_to_speech_settings");
  public get textToSpeechSettings() {
    return this._textToSpeechSettings;
  }
  public putTextToSpeechSettings(value: GoogleDialogflowCxAgentTextToSpeechSettings) {
    this._textToSpeechSettings.internalValue = value;
  }
  public resetTextToSpeechSettings() {
    this._textToSpeechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textToSpeechSettingsInput() {
    return this._textToSpeechSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxAgentTimeouts) {
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
      avatar_uri: cdktf.stringToTerraform(this._avatarUri),
      default_language_code: cdktf.stringToTerraform(this._defaultLanguageCode),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_spell_correction: cdktf.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      supported_language_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedLanguageCodes),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      advanced_settings: googleDialogflowCxAgentAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      git_integration_settings: googleDialogflowCxAgentGitIntegrationSettingsToTerraform(this._gitIntegrationSettings.internalValue),
      speech_to_text_settings: googleDialogflowCxAgentSpeechToTextSettingsToTerraform(this._speechToTextSettings.internalValue),
      text_to_speech_settings: googleDialogflowCxAgentTextToSpeechSettingsToTerraform(this._textToSpeechSettings.internalValue),
      timeouts: googleDialogflowCxAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatar_uri: {
        value: cdktf.stringToHclTerraform(this._avatarUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_language_code: {
        value: cdktf.stringToHclTerraform(this._defaultLanguageCode),
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
      security_settings: {
        value: cdktf.stringToHclTerraform(this._securitySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_language_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedLanguageCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_settings: {
        value: googleDialogflowCxAgentAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxAgentAdvancedSettingsList",
      },
      git_integration_settings: {
        value: googleDialogflowCxAgentGitIntegrationSettingsToHclTerraform(this._gitIntegrationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxAgentGitIntegrationSettingsList",
      },
      speech_to_text_settings: {
        value: googleDialogflowCxAgentSpeechToTextSettingsToHclTerraform(this._speechToTextSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxAgentSpeechToTextSettingsList",
      },
      text_to_speech_settings: {
        value: googleDialogflowCxAgentTextToSpeechSettingsToHclTerraform(this._textToSpeechSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxAgentTextToSpeechSettingsList",
      },
      timeouts: {
        value: googleDialogflowCxAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowCxAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
