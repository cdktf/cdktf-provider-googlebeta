/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowConversationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. Human readable name for this profile. Max length 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#display_name GoogleDialogflowConversationProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#id GoogleDialogflowConversationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language code for the conversation profile. This should be a BCP-47 language tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#language_code GoogleDialogflowConversationProfile#language_code}
  */
  readonly languageCode?: string;
  /**
  * desc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#location GoogleDialogflowConversationProfile#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#project GoogleDialogflowConversationProfile#project}
  */
  readonly project?: string;
  /**
  * Name of the CX SecuritySettings reference for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#security_settings GoogleDialogflowConversationProfile#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * The time zone of this conversational profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#time_zone GoogleDialogflowConversationProfile#time_zone}
  */
  readonly timeZone?: string;
  /**
  * automated_agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#automated_agent_config GoogleDialogflowConversationProfile#automated_agent_config}
  */
  readonly automatedAgentConfig?: GoogleDialogflowConversationProfileAutomatedAgentConfig;
  /**
  * human_agent_assistant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#human_agent_assistant_config GoogleDialogflowConversationProfile#human_agent_assistant_config}
  */
  readonly humanAgentAssistantConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfig;
  /**
  * human_agent_handoff_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#human_agent_handoff_config GoogleDialogflowConversationProfile#human_agent_handoff_config}
  */
  readonly humanAgentHandoffConfig?: GoogleDialogflowConversationProfileHumanAgentHandoffConfig;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#logging_config GoogleDialogflowConversationProfile#logging_config}
  */
  readonly loggingConfig?: GoogleDialogflowConversationProfileLoggingConfig;
  /**
  * new_message_event_notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#new_message_event_notification_config GoogleDialogflowConversationProfile#new_message_event_notification_config}
  */
  readonly newMessageEventNotificationConfig?: GoogleDialogflowConversationProfileNewMessageEventNotificationConfig;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#notification_config GoogleDialogflowConversationProfile#notification_config}
  */
  readonly notificationConfig?: GoogleDialogflowConversationProfileNotificationConfig;
  /**
  * stt_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#stt_config GoogleDialogflowConversationProfile#stt_config}
  */
  readonly sttConfig?: GoogleDialogflowConversationProfileSttConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#timeouts GoogleDialogflowConversationProfile#timeouts}
  */
  readonly timeouts?: GoogleDialogflowConversationProfileTimeouts;
  /**
  * tts_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#tts_config GoogleDialogflowConversationProfile#tts_config}
  */
  readonly ttsConfig?: GoogleDialogflowConversationProfileTtsConfig;
}
export interface GoogleDialogflowConversationProfileAutomatedAgentConfig {
  /**
  * ID of the Dialogflow agent environment to use.
  * Expects the format "projects/<Project ID>/locations/<Location ID>/agent/environments/<EnvironmentID>"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#agent GoogleDialogflowConversationProfile#agent}
  */
  readonly agent: string;
  /**
  * Configure lifetime of the Dialogflow session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#session_ttl GoogleDialogflowConversationProfile#session_ttl}
  */
  readonly sessionTtl?: string;
}

export function googleDialogflowConversationProfileAutomatedAgentConfigToTerraform(struct?: GoogleDialogflowConversationProfileAutomatedAgentConfigOutputReference | GoogleDialogflowConversationProfileAutomatedAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    session_ttl: cdktf.stringToTerraform(struct!.sessionTtl),
  }
}


export function googleDialogflowConversationProfileAutomatedAgentConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileAutomatedAgentConfigOutputReference | GoogleDialogflowConversationProfileAutomatedAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_ttl: {
      value: cdktf.stringToHclTerraform(struct!.sessionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileAutomatedAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileAutomatedAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._sessionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTtl = this._sessionTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileAutomatedAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._sessionTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._sessionTtl = value.sessionTtl;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // session_ttl - computed: false, optional: true, required: false
  private _sessionTtl?: string; 
  public get sessionTtl() {
    return this.getStringAttribute('session_ttl');
  }
  public set sessionTtl(value: string) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig {
  /**
  * Version of current baseline model. It will be ignored if model is set. Valid versions are: Article Suggestion baseline model: - 0.9 - 1.0 (default) Summarization baseline model: - 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#baseline_model_version GoogleDialogflowConversationProfile#baseline_model_version}
  */
  readonly baselineModelVersion?: string;
  /**
  * Conversation model resource name. Format: projects/<Project ID>/conversationModels/<Model ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#model GoogleDialogflowConversationProfile#model}
  */
  readonly model?: string;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_model_version: cdktf.stringToTerraform(struct!.baselineModelVersion),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_model_version: {
      value: cdktf.stringToHclTerraform(struct!.baselineModelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineModelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineModelVersion = this._baselineModelVersion;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineModelVersion = undefined;
      this._model = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineModelVersion = value.baselineModelVersion;
      this._model = value.model;
    }
  }

  // baseline_model_version - computed: false, optional: true, required: false
  private _baselineModelVersion?: string; 
  public get baselineModelVersion() {
    return this.getStringAttribute('baseline_model_version');
  }
  public set baselineModelVersion(value: string) {
    this._baselineModelVersion = value;
  }
  public resetBaselineModelVersion() {
    this._baselineModelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineModelVersionInput() {
    return this._baselineModelVersion;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig {
  /**
  * Number of recent non-small-talk sentences to use as context for article and FAQ suggestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#recent_sentences_count GoogleDialogflowConversationProfile#recent_sentences_count}
  */
  readonly recentSentencesCount?: number;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recent_sentences_count: cdktf.numberToTerraform(struct!.recentSentencesCount),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recent_sentences_count: {
      value: cdktf.numberToHclTerraform(struct!.recentSentencesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recentSentencesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.recentSentencesCount = this._recentSentencesCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recentSentencesCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recentSentencesCount = value.recentSentencesCount;
    }
  }

  // recent_sentences_count - computed: false, optional: true, required: false
  private _recentSentencesCount?: number; 
  public get recentSentencesCount() {
    return this.getNumberAttribute('recent_sentences_count');
  }
  public set recentSentencesCount(value: number) {
    this._recentSentencesCount = value;
  }
  public resetRecentSentencesCount() {
    this._recentSentencesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentSentencesCountInput() {
    return this._recentSentencesCount;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings {
  /**
  * If set to true, the last message from virtual agent (hand off message) and the message before it (trigger message of hand off) are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#drop_handoff_messages GoogleDialogflowConversationProfile#drop_handoff_messages}
  */
  readonly dropHandoffMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from ivr stage are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#drop_ivr_messages GoogleDialogflowConversationProfile#drop_ivr_messages}
  */
  readonly dropIvrMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from virtual agent are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#drop_virtual_agent_messages GoogleDialogflowConversationProfile#drop_virtual_agent_messages}
  */
  readonly dropVirtualAgentMessages?: boolean | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_handoff_messages: cdktf.booleanToTerraform(struct!.dropHandoffMessages),
    drop_ivr_messages: cdktf.booleanToTerraform(struct!.dropIvrMessages),
    drop_virtual_agent_messages: cdktf.booleanToTerraform(struct!.dropVirtualAgentMessages),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_handoff_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropHandoffMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_ivr_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropIvrMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_virtual_agent_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropVirtualAgentMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropHandoffMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropHandoffMessages = this._dropHandoffMessages;
    }
    if (this._dropIvrMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropIvrMessages = this._dropIvrMessages;
    }
    if (this._dropVirtualAgentMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVirtualAgentMessages = this._dropVirtualAgentMessages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropHandoffMessages = undefined;
      this._dropIvrMessages = undefined;
      this._dropVirtualAgentMessages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropHandoffMessages = value.dropHandoffMessages;
      this._dropIvrMessages = value.dropIvrMessages;
      this._dropVirtualAgentMessages = value.dropVirtualAgentMessages;
    }
  }

  // drop_handoff_messages - computed: false, optional: true, required: false
  private _dropHandoffMessages?: boolean | cdktf.IResolvable; 
  public get dropHandoffMessages() {
    return this.getBooleanAttribute('drop_handoff_messages');
  }
  public set dropHandoffMessages(value: boolean | cdktf.IResolvable) {
    this._dropHandoffMessages = value;
  }
  public resetDropHandoffMessages() {
    this._dropHandoffMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropHandoffMessagesInput() {
    return this._dropHandoffMessages;
  }

  // drop_ivr_messages - computed: false, optional: true, required: false
  private _dropIvrMessages?: boolean | cdktf.IResolvable; 
  public get dropIvrMessages() {
    return this.getBooleanAttribute('drop_ivr_messages');
  }
  public set dropIvrMessages(value: boolean | cdktf.IResolvable) {
    this._dropIvrMessages = value;
  }
  public resetDropIvrMessages() {
    this._dropIvrMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIvrMessagesInput() {
    return this._dropIvrMessages;
  }

  // drop_virtual_agent_messages - computed: false, optional: true, required: false
  private _dropVirtualAgentMessages?: boolean | cdktf.IResolvable; 
  public get dropVirtualAgentMessages() {
    return this.getBooleanAttribute('drop_virtual_agent_messages');
  }
  public set dropVirtualAgentMessages(value: boolean | cdktf.IResolvable) {
    this._dropVirtualAgentMessages = value;
  }
  public resetDropVirtualAgentMessages() {
    this._dropVirtualAgentMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVirtualAgentMessagesInput() {
    return this._dropVirtualAgentMessages;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig {
  /**
  * The name of a dialogflow virtual agent used for intent detection and suggestion triggered by human agent. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#agent GoogleDialogflowConversationProfile#agent}
  */
  readonly agent?: string;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource {
  /**
  * he name of a Dialogflow virtual agent used for end user side intent detection and suggestion. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#agent GoogleDialogflowConversationProfile#agent}
  */
  readonly agent: string;
  /**
  * human_agent_side_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#human_agent_side_config GoogleDialogflowConversationProfile#human_agent_side_config}
  */
  readonly humanAgentSideConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    human_agent_side_config: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct!.humanAgentSideConfig),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    human_agent_side_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct!.humanAgentSideConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._humanAgentSideConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanAgentSideConfig = this._humanAgentSideConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._humanAgentSideConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._humanAgentSideConfig.internalValue = value.humanAgentSideConfig;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // human_agent_side_config - computed: false, optional: true, required: false
  private _humanAgentSideConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference(this, "human_agent_side_config");
  public get humanAgentSideConfig() {
    return this._humanAgentSideConfig;
  }
  public putHumanAgentSideConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig) {
    this._humanAgentSideConfig.internalValue = value;
  }
  public resetHumanAgentSideConfig() {
    this._humanAgentSideConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentSideConfigInput() {
    return this._humanAgentSideConfig.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource {
  /**
  * Knowledge documents to query from. Format: projects/<Project ID>/locations/<Location ID>/knowledgeBases/<KnowledgeBase ID>/documents/<Document ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#documents GoogleDialogflowConversationProfile#documents}
  */
  readonly documents: string[];
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    documents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.documents),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    documents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.documents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documents !== undefined) {
      hasAnyValues = true;
      internalValueResult.documents = this._documents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documents = value.documents;
    }
  }

  // documents - computed: false, optional: false, required: true
  private _documents?: string[]; 
  public get documents() {
    return this.getListAttribute('documents');
  }
  public set documents(value: string[]) {
    this._documents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentsInput() {
    return this._documents;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource {
  /**
  * Knowledge bases to query. Format: projects/<Project ID>/locations/<Location ID>/knowledgeBases/<Knowledge Base ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#knowledge_bases GoogleDialogflowConversationProfile#knowledge_bases}
  */
  readonly knowledgeBases: string[];
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    knowledge_bases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knowledgeBases),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    knowledge_bases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.knowledgeBases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeBases !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBases = this._knowledgeBases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._knowledgeBases = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._knowledgeBases = value.knowledgeBases;
    }
  }

  // knowledge_bases - computed: false, optional: false, required: true
  private _knowledgeBases?: string[]; 
  public get knowledgeBases() {
    return this.getListAttribute('knowledge_bases');
  }
  public set knowledgeBases(value: string[]) {
    this._knowledgeBases = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBasesInput() {
    return this._knowledgeBases;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections {
  /**
  * The selected sections chosen to return when requesting a summary of a conversation
  * If not provided the default selection will be "{SITUATION, ACTION, RESULT}". Possible values: ["SECTION_TYPE_UNSPECIFIED", "SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#section_types GoogleDialogflowConversationProfile#section_types}
  */
  readonly sectionTypes?: string[];
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sectionTypes),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    section_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sectionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionTypes = this._sectionTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sectionTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sectionTypes = value.sectionTypes;
    }
  }

  // section_types - computed: false, optional: true, required: false
  private _sectionTypes?: string[]; 
  public get sectionTypes() {
    return this.getListAttribute('section_types');
  }
  public set sectionTypes(value: string[]) {
    this._sectionTypes = value;
  }
  public resetSectionTypes() {
    this._sectionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionTypesInput() {
    return this._sectionTypes;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig {
  /**
  * Confidence threshold of query result.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, SMART_REPLY, SMART_COMPOSE, KNOWLEDGE_SEARCH, KNOWLEDGE_ASSIST, ENTITY_EXTRACTION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#confidence_threshold GoogleDialogflowConversationProfile#confidence_threshold}
  */
  readonly confidenceThreshold?: number;
  /**
  * Maximum number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#max_results GoogleDialogflowConversationProfile#max_results}
  */
  readonly maxResults?: number;
  /**
  * context_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#context_filter_settings GoogleDialogflowConversationProfile#context_filter_settings}
  */
  readonly contextFilterSettings?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings;
  /**
  * dialogflow_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#dialogflow_query_source GoogleDialogflowConversationProfile#dialogflow_query_source}
  */
  readonly dialogflowQuerySource?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource;
  /**
  * document_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#document_query_source GoogleDialogflowConversationProfile#document_query_source}
  */
  readonly documentQuerySource?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource;
  /**
  * knowledge_base_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#knowledge_base_query_source GoogleDialogflowConversationProfile#knowledge_base_query_source}
  */
  readonly knowledgeBaseQuerySource?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource;
  /**
  * sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#sections GoogleDialogflowConversationProfile#sections}
  */
  readonly sections?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_threshold: cdktf.numberToTerraform(struct!.confidenceThreshold),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    context_filter_settings: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct!.contextFilterSettings),
    dialogflow_query_source: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct!.dialogflowQuerySource),
    document_query_source: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToTerraform(struct!.documentQuerySource),
    knowledge_base_query_source: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToTerraform(struct!.knowledgeBaseQuerySource),
    sections: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct!.sections),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_threshold: {
      value: cdktf.numberToHclTerraform(struct!.confidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context_filter_settings: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct!.contextFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsList",
    },
    dialogflow_query_source: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct!.dialogflowQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceList",
    },
    document_query_source: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceToHclTerraform(struct!.documentQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceList",
    },
    knowledge_base_query_source: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceToHclTerraform(struct!.knowledgeBaseQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceList",
    },
    sections: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct!.sections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceThreshold = this._confidenceThreshold;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._contextFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextFilterSettings = this._contextFilterSettings?.internalValue;
    }
    if (this._dialogflowQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogflowQuerySource = this._dialogflowQuerySource?.internalValue;
    }
    if (this._documentQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentQuerySource = this._documentQuerySource?.internalValue;
    }
    if (this._knowledgeBaseQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeBaseQuerySource = this._knowledgeBaseQuerySource?.internalValue;
    }
    if (this._sections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sections = this._sections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidenceThreshold = undefined;
      this._maxResults = undefined;
      this._contextFilterSettings.internalValue = undefined;
      this._dialogflowQuerySource.internalValue = undefined;
      this._documentQuerySource.internalValue = undefined;
      this._knowledgeBaseQuerySource.internalValue = undefined;
      this._sections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidenceThreshold = value.confidenceThreshold;
      this._maxResults = value.maxResults;
      this._contextFilterSettings.internalValue = value.contextFilterSettings;
      this._dialogflowQuerySource.internalValue = value.dialogflowQuerySource;
      this._documentQuerySource.internalValue = value.documentQuerySource;
      this._knowledgeBaseQuerySource.internalValue = value.knowledgeBaseQuerySource;
      this._sections.internalValue = value.sections;
    }
  }

  // confidence_threshold - computed: false, optional: true, required: false
  private _confidenceThreshold?: number; 
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: number) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // context_filter_settings - computed: false, optional: true, required: false
  private _contextFilterSettings = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference(this, "context_filter_settings");
  public get contextFilterSettings() {
    return this._contextFilterSettings;
  }
  public putContextFilterSettings(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings) {
    this._contextFilterSettings.internalValue = value;
  }
  public resetContextFilterSettings() {
    this._contextFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextFilterSettingsInput() {
    return this._contextFilterSettings.internalValue;
  }

  // dialogflow_query_source - computed: false, optional: true, required: false
  private _dialogflowQuerySource = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference(this, "dialogflow_query_source");
  public get dialogflowQuerySource() {
    return this._dialogflowQuerySource;
  }
  public putDialogflowQuerySource(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource) {
    this._dialogflowQuerySource.internalValue = value;
  }
  public resetDialogflowQuerySource() {
    this._dialogflowQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowQuerySourceInput() {
    return this._dialogflowQuerySource.internalValue;
  }

  // document_query_source - computed: false, optional: true, required: false
  private _documentQuerySource = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySourceOutputReference(this, "document_query_source");
  public get documentQuerySource() {
    return this._documentQuerySource;
  }
  public putDocumentQuerySource(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigDocumentQuerySource) {
    this._documentQuerySource.internalValue = value;
  }
  public resetDocumentQuerySource() {
    this._documentQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentQuerySourceInput() {
    return this._documentQuerySource.internalValue;
  }

  // knowledge_base_query_source - computed: false, optional: true, required: false
  private _knowledgeBaseQuerySource = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySourceOutputReference(this, "knowledge_base_query_source");
  public get knowledgeBaseQuerySource() {
    return this._knowledgeBaseQuerySource;
  }
  public putKnowledgeBaseQuerySource(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigKnowledgeBaseQuerySource) {
    this._knowledgeBaseQuerySource.internalValue = value;
  }
  public resetKnowledgeBaseQuerySource() {
    this._knowledgeBaseQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseQuerySourceInput() {
    return this._knowledgeBaseQuerySource.internalValue;
  }

  // sections - computed: false, optional: true, required: false
  private _sections = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference(this, "sections");
  public get sections() {
    return this._sections;
  }
  public putSections(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigSections) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature {
  /**
  * Type of Human Agent Assistant API feature to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#type GoogleDialogflowConversationProfile#type}
  */
  readonly type?: string;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings {
  /**
  * Do not trigger if last utterance is small talk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#no_small_talk GoogleDialogflowConversationProfile#no_small_talk}
  */
  readonly noSmallTalk?: boolean | cdktf.IResolvable;
  /**
  * Only trigger suggestion if participant role of last utterance is END_USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#only_end_user GoogleDialogflowConversationProfile#only_end_user}
  */
  readonly onlyEndUser?: boolean | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_small_talk: cdktf.booleanToTerraform(struct!.noSmallTalk),
    only_end_user: cdktf.booleanToTerraform(struct!.onlyEndUser),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_small_talk: {
      value: cdktf.booleanToHclTerraform(struct!.noSmallTalk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_end_user: {
      value: cdktf.booleanToHclTerraform(struct!.onlyEndUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSmallTalk !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSmallTalk = this._noSmallTalk;
    }
    if (this._onlyEndUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyEndUser = this._onlyEndUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSmallTalk = undefined;
      this._onlyEndUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSmallTalk = value.noSmallTalk;
      this._onlyEndUser = value.onlyEndUser;
    }
  }

  // no_small_talk - computed: false, optional: true, required: false
  private _noSmallTalk?: boolean | cdktf.IResolvable; 
  public get noSmallTalk() {
    return this.getBooleanAttribute('no_small_talk');
  }
  public set noSmallTalk(value: boolean | cdktf.IResolvable) {
    this._noSmallTalk = value;
  }
  public resetNoSmallTalk() {
    this._noSmallTalk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSmallTalkInput() {
    return this._noSmallTalk;
  }

  // only_end_user - computed: false, optional: true, required: false
  private _onlyEndUser?: boolean | cdktf.IResolvable; 
  public get onlyEndUser() {
    return this.getBooleanAttribute('only_end_user');
  }
  public set onlyEndUser(value: boolean | cdktf.IResolvable) {
    this._onlyEndUser = value;
  }
  public resetOnlyEndUser() {
    this._onlyEndUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyEndUserInput() {
    return this._onlyEndUser;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs {
  /**
  * Disable the logging of search queries sent by human agents. It can prevent those queries from being stored at answer records.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#disable_agent_query_logging GoogleDialogflowConversationProfile#disable_agent_query_logging}
  */
  readonly disableAgentQueryLogging?: boolean | cdktf.IResolvable;
  /**
  * Enable including conversation context during query answer generation.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_conversation_augmented_query GoogleDialogflowConversationProfile#enable_conversation_augmented_query}
  */
  readonly enableConversationAugmentedQuery?: boolean | cdktf.IResolvable;
  /**
  * Automatically iterates all participants and tries to compile suggestions.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST, KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_event_based_suggestion GoogleDialogflowConversationProfile#enable_event_based_suggestion}
  */
  readonly enableEventBasedSuggestion?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion only.
  * This feature is only supported for types: KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_query_suggestion_only GoogleDialogflowConversationProfile#enable_query_suggestion_only}
  */
  readonly enableQuerySuggestionOnly?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion even if we can't find its answer. By default, queries are suggested only if we find its answer.
  * This feature is only supported for types: KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_query_suggestion_when_no_answer GoogleDialogflowConversationProfile#enable_query_suggestion_when_no_answer}
  */
  readonly enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable;
  /**
  * conversation_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#conversation_model_config GoogleDialogflowConversationProfile#conversation_model_config}
  */
  readonly conversationModelConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig;
  /**
  * conversation_process_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#conversation_process_config GoogleDialogflowConversationProfile#conversation_process_config}
  */
  readonly conversationProcessConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig;
  /**
  * query_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#query_config GoogleDialogflowConversationProfile#query_config}
  */
  readonly queryConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig;
  /**
  * suggestion_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#suggestion_feature GoogleDialogflowConversationProfile#suggestion_feature}
  */
  readonly suggestionFeature?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature;
  /**
  * suggestion_trigger_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#suggestion_trigger_settings GoogleDialogflowConversationProfile#suggestion_trigger_settings}
  */
  readonly suggestionTriggerSettings?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_agent_query_logging: cdktf.booleanToTerraform(struct!.disableAgentQueryLogging),
    enable_conversation_augmented_query: cdktf.booleanToTerraform(struct!.enableConversationAugmentedQuery),
    enable_event_based_suggestion: cdktf.booleanToTerraform(struct!.enableEventBasedSuggestion),
    enable_query_suggestion_only: cdktf.booleanToTerraform(struct!.enableQuerySuggestionOnly),
    enable_query_suggestion_when_no_answer: cdktf.booleanToTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
    conversation_model_config: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct!.conversationModelConfig),
    conversation_process_config: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct!.conversationProcessConfig),
    query_config: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct!.queryConfig),
    suggestion_feature: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct!.suggestionFeature),
    suggestion_trigger_settings: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct!.suggestionTriggerSettings),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_agent_query_logging: {
      value: cdktf.booleanToHclTerraform(struct!.disableAgentQueryLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_conversation_augmented_query: {
      value: cdktf.booleanToHclTerraform(struct!.enableConversationAugmentedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_event_based_suggestion: {
      value: cdktf.booleanToHclTerraform(struct!.enableEventBasedSuggestion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_only: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_when_no_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conversation_model_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct!.conversationModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigList",
    },
    conversation_process_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct!.conversationProcessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigList",
    },
    query_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct!.queryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigList",
    },
    suggestion_feature: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct!.suggestionFeature),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureList",
    },
    suggestion_trigger_settings: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct!.suggestionTriggerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAgentQueryLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAgentQueryLogging = this._disableAgentQueryLogging;
    }
    if (this._enableConversationAugmentedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConversationAugmentedQuery = this._enableConversationAugmentedQuery;
    }
    if (this._enableEventBasedSuggestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventBasedSuggestion = this._enableEventBasedSuggestion;
    }
    if (this._enableQuerySuggestionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionOnly = this._enableQuerySuggestionOnly;
    }
    if (this._enableQuerySuggestionWhenNoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionWhenNoAnswer = this._enableQuerySuggestionWhenNoAnswer;
    }
    if (this._conversationModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationModelConfig = this._conversationModelConfig?.internalValue;
    }
    if (this._conversationProcessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationProcessConfig = this._conversationProcessConfig?.internalValue;
    }
    if (this._queryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryConfig = this._queryConfig?.internalValue;
    }
    if (this._suggestionFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionFeature = this._suggestionFeature?.internalValue;
    }
    if (this._suggestionTriggerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionTriggerSettings = this._suggestionTriggerSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = undefined;
      this._enableConversationAugmentedQuery = undefined;
      this._enableEventBasedSuggestion = undefined;
      this._enableQuerySuggestionOnly = undefined;
      this._enableQuerySuggestionWhenNoAnswer = undefined;
      this._conversationModelConfig.internalValue = undefined;
      this._conversationProcessConfig.internalValue = undefined;
      this._queryConfig.internalValue = undefined;
      this._suggestionFeature.internalValue = undefined;
      this._suggestionTriggerSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = value.disableAgentQueryLogging;
      this._enableConversationAugmentedQuery = value.enableConversationAugmentedQuery;
      this._enableEventBasedSuggestion = value.enableEventBasedSuggestion;
      this._enableQuerySuggestionOnly = value.enableQuerySuggestionOnly;
      this._enableQuerySuggestionWhenNoAnswer = value.enableQuerySuggestionWhenNoAnswer;
      this._conversationModelConfig.internalValue = value.conversationModelConfig;
      this._conversationProcessConfig.internalValue = value.conversationProcessConfig;
      this._queryConfig.internalValue = value.queryConfig;
      this._suggestionFeature.internalValue = value.suggestionFeature;
      this._suggestionTriggerSettings.internalValue = value.suggestionTriggerSettings;
    }
  }

  // disable_agent_query_logging - computed: false, optional: true, required: false
  private _disableAgentQueryLogging?: boolean | cdktf.IResolvable; 
  public get disableAgentQueryLogging() {
    return this.getBooleanAttribute('disable_agent_query_logging');
  }
  public set disableAgentQueryLogging(value: boolean | cdktf.IResolvable) {
    this._disableAgentQueryLogging = value;
  }
  public resetDisableAgentQueryLogging() {
    this._disableAgentQueryLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAgentQueryLoggingInput() {
    return this._disableAgentQueryLogging;
  }

  // enable_conversation_augmented_query - computed: false, optional: true, required: false
  private _enableConversationAugmentedQuery?: boolean | cdktf.IResolvable; 
  public get enableConversationAugmentedQuery() {
    return this.getBooleanAttribute('enable_conversation_augmented_query');
  }
  public set enableConversationAugmentedQuery(value: boolean | cdktf.IResolvable) {
    this._enableConversationAugmentedQuery = value;
  }
  public resetEnableConversationAugmentedQuery() {
    this._enableConversationAugmentedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConversationAugmentedQueryInput() {
    return this._enableConversationAugmentedQuery;
  }

  // enable_event_based_suggestion - computed: false, optional: true, required: false
  private _enableEventBasedSuggestion?: boolean | cdktf.IResolvable; 
  public get enableEventBasedSuggestion() {
    return this.getBooleanAttribute('enable_event_based_suggestion');
  }
  public set enableEventBasedSuggestion(value: boolean | cdktf.IResolvable) {
    this._enableEventBasedSuggestion = value;
  }
  public resetEnableEventBasedSuggestion() {
    this._enableEventBasedSuggestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventBasedSuggestionInput() {
    return this._enableEventBasedSuggestion;
  }

  // enable_query_suggestion_only - computed: false, optional: true, required: false
  private _enableQuerySuggestionOnly?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionOnly() {
    return this.getBooleanAttribute('enable_query_suggestion_only');
  }
  public set enableQuerySuggestionOnly(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionOnly = value;
  }
  public resetEnableQuerySuggestionOnly() {
    this._enableQuerySuggestionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionOnlyInput() {
    return this._enableQuerySuggestionOnly;
  }

  // enable_query_suggestion_when_no_answer - computed: false, optional: true, required: false
  private _enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionWhenNoAnswer() {
    return this.getBooleanAttribute('enable_query_suggestion_when_no_answer');
  }
  public set enableQuerySuggestionWhenNoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionWhenNoAnswer = value;
  }
  public resetEnableQuerySuggestionWhenNoAnswer() {
    this._enableQuerySuggestionWhenNoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionWhenNoAnswerInput() {
    return this._enableQuerySuggestionWhenNoAnswer;
  }

  // conversation_model_config - computed: false, optional: true, required: false
  private _conversationModelConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfigOutputReference(this, "conversation_model_config");
  public get conversationModelConfig() {
    return this._conversationModelConfig;
  }
  public putConversationModelConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationModelConfig) {
    this._conversationModelConfig.internalValue = value;
  }
  public resetConversationModelConfig() {
    this._conversationModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationModelConfigInput() {
    return this._conversationModelConfig.internalValue;
  }

  // conversation_process_config - computed: false, optional: true, required: false
  private _conversationProcessConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference(this, "conversation_process_config");
  public get conversationProcessConfig() {
    return this._conversationProcessConfig;
  }
  public putConversationProcessConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsConversationProcessConfig) {
    this._conversationProcessConfig.internalValue = value;
  }
  public resetConversationProcessConfig() {
    this._conversationProcessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationProcessConfigInput() {
    return this._conversationProcessConfig.internalValue;
  }

  // query_config - computed: false, optional: true, required: false
  private _queryConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfigOutputReference(this, "query_config");
  public get queryConfig() {
    return this._queryConfig;
  }
  public putQueryConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsQueryConfig) {
    this._queryConfig.internalValue = value;
  }
  public resetQueryConfig() {
    this._queryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryConfigInput() {
    return this._queryConfig.internalValue;
  }

  // suggestion_feature - computed: false, optional: true, required: false
  private _suggestionFeature = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference(this, "suggestion_feature");
  public get suggestionFeature() {
    return this._suggestionFeature;
  }
  public putSuggestionFeature(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionFeature) {
    this._suggestionFeature.internalValue = value;
  }
  public resetSuggestionFeature() {
    this._suggestionFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionFeatureInput() {
    return this._suggestionFeature.internalValue;
  }

  // suggestion_trigger_settings - computed: false, optional: true, required: false
  private _suggestionTriggerSettings = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference(this, "suggestion_trigger_settings");
  public get suggestionTriggerSettings() {
    return this._suggestionTriggerSettings;
  }
  public putSuggestionTriggerSettings(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsSuggestionTriggerSettings) {
    this._suggestionTriggerSettings.internalValue = value;
  }
  public resetSuggestionTriggerSettings() {
    this._suggestionTriggerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionTriggerSettingsInput() {
    return this._suggestionTriggerSettings.internalValue;
  }
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsOutputReference {
    return new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig {
  /**
  * When disableHighLatencyFeaturesSyncDelivery is true and using the AnalyzeContent API, we will not deliver the responses from high latency features in the API response. The humanAgentAssistantConfig.notification_config must be configured and enableEventBasedSuggestion must be set to true to receive the responses from high latency features in Pub/Sub. High latency feature(s): KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#disable_high_latency_features_sync_delivery GoogleDialogflowConversationProfile#disable_high_latency_features_sync_delivery}
  */
  readonly disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable;
  /**
  * List of various generator resource names used in the conversation profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#generators GoogleDialogflowConversationProfile#generators}
  */
  readonly generators?: string[];
  /**
  * If groupSuggestionResponses is false, and there are multiple featureConfigs in event based suggestion or StreamingAnalyzeContent, we will try to deliver suggestions to customers as soon as we get new suggestion. Different type of suggestions based on the same context will be in separate Pub/Sub event or StreamingAnalyzeContentResponse.
  * 
  * If groupSuggestionResponses set to true. All the suggestions to the same participant based on the same context will be grouped into a single Pub/Sub event or StreamingAnalyzeContentResponse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#group_suggestion_responses GoogleDialogflowConversationProfile#group_suggestion_responses}
  */
  readonly groupSuggestionResponses?: boolean | cdktf.IResolvable;
  /**
  * feature_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#feature_configs GoogleDialogflowConversationProfile#feature_configs}
  */
  readonly featureConfigs?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs[] | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_high_latency_features_sync_delivery: cdktf.booleanToTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
    generators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.generators),
    group_suggestion_responses: cdktf.booleanToTerraform(struct!.groupSuggestionResponses),
    feature_configs: cdktf.listMapper(googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToTerraform, true)(struct!.featureConfigs),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_high_latency_features_sync_delivery: {
      value: cdktf.booleanToHclTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.generators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_suggestion_responses: {
      value: cdktf.booleanToHclTerraform(struct!.groupSuggestionResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_configs: {
      value: cdktf.listMapperHcl(googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsToHclTerraform, true)(struct!.featureConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHighLatencyFeaturesSyncDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHighLatencyFeaturesSyncDelivery = this._disableHighLatencyFeaturesSyncDelivery;
    }
    if (this._generators !== undefined) {
      hasAnyValues = true;
      internalValueResult.generators = this._generators;
    }
    if (this._groupSuggestionResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSuggestionResponses = this._groupSuggestionResponses;
    }
    if (this._featureConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureConfigs = this._featureConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableHighLatencyFeaturesSyncDelivery = undefined;
      this._generators = undefined;
      this._groupSuggestionResponses = undefined;
      this._featureConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableHighLatencyFeaturesSyncDelivery = value.disableHighLatencyFeaturesSyncDelivery;
      this._generators = value.generators;
      this._groupSuggestionResponses = value.groupSuggestionResponses;
      this._featureConfigs.internalValue = value.featureConfigs;
    }
  }

  // disable_high_latency_features_sync_delivery - computed: false, optional: true, required: false
  private _disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable; 
  public get disableHighLatencyFeaturesSyncDelivery() {
    return this.getBooleanAttribute('disable_high_latency_features_sync_delivery');
  }
  public set disableHighLatencyFeaturesSyncDelivery(value: boolean | cdktf.IResolvable) {
    this._disableHighLatencyFeaturesSyncDelivery = value;
  }
  public resetDisableHighLatencyFeaturesSyncDelivery() {
    this._disableHighLatencyFeaturesSyncDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHighLatencyFeaturesSyncDeliveryInput() {
    return this._disableHighLatencyFeaturesSyncDelivery;
  }

  // generators - computed: false, optional: true, required: false
  private _generators?: string[]; 
  public get generators() {
    return this.getListAttribute('generators');
  }
  public set generators(value: string[]) {
    this._generators = value;
  }
  public resetGenerators() {
    this._generators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators;
  }

  // group_suggestion_responses - computed: false, optional: true, required: false
  private _groupSuggestionResponses?: boolean | cdktf.IResolvable; 
  public get groupSuggestionResponses() {
    return this.getBooleanAttribute('group_suggestion_responses');
  }
  public set groupSuggestionResponses(value: boolean | cdktf.IResolvable) {
    this._groupSuggestionResponses = value;
  }
  public resetGroupSuggestionResponses() {
    this._groupSuggestionResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSuggestionResponsesInput() {
    return this._groupSuggestionResponses;
  }

  // feature_configs - computed: false, optional: true, required: false
  private _featureConfigs = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigsList(this, "feature_configs", false);
  public get featureConfigs() {
    return this._featureConfigs;
  }
  public putFeatureConfigs(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigFeatureConfigs[] | cdktf.IResolvable) {
    this._featureConfigs.internalValue = value;
  }
  public resetFeatureConfigs() {
    this._featureConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureConfigsInput() {
    return this._featureConfigs.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig {
  /**
  * Version of current baseline model. It will be ignored if model is set. Valid versions are: Article Suggestion baseline model: - 0.9 - 1.0 (default) Summarization baseline model: - 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#baseline_model_version GoogleDialogflowConversationProfile#baseline_model_version}
  */
  readonly baselineModelVersion?: string;
  /**
  * Conversation model resource name. Format: projects/<Project ID>/conversationModels/<Model ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#model GoogleDialogflowConversationProfile#model}
  */
  readonly model?: string;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_model_version: cdktf.stringToTerraform(struct!.baselineModelVersion),
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_model_version: {
      value: cdktf.stringToHclTerraform(struct!.baselineModelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineModelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineModelVersion = this._baselineModelVersion;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineModelVersion = undefined;
      this._model = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineModelVersion = value.baselineModelVersion;
      this._model = value.model;
    }
  }

  // baseline_model_version - computed: false, optional: true, required: false
  private _baselineModelVersion?: string; 
  public get baselineModelVersion() {
    return this.getStringAttribute('baseline_model_version');
  }
  public set baselineModelVersion(value: string) {
    this._baselineModelVersion = value;
  }
  public resetBaselineModelVersion() {
    this._baselineModelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineModelVersionInput() {
    return this._baselineModelVersion;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig {
  /**
  * Number of recent non-small-talk sentences to use as context for article and FAQ suggestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#recent_sentences_count GoogleDialogflowConversationProfile#recent_sentences_count}
  */
  readonly recentSentencesCount?: number;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recent_sentences_count: cdktf.numberToTerraform(struct!.recentSentencesCount),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recent_sentences_count: {
      value: cdktf.numberToHclTerraform(struct!.recentSentencesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recentSentencesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.recentSentencesCount = this._recentSentencesCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recentSentencesCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recentSentencesCount = value.recentSentencesCount;
    }
  }

  // recent_sentences_count - computed: false, optional: true, required: false
  private _recentSentencesCount?: number; 
  public get recentSentencesCount() {
    return this.getNumberAttribute('recent_sentences_count');
  }
  public set recentSentencesCount(value: number) {
    this._recentSentencesCount = value;
  }
  public resetRecentSentencesCount() {
    this._recentSentencesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentSentencesCountInput() {
    return this._recentSentencesCount;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings {
  /**
  * If set to true, the last message from virtual agent (hand off message) and the message before it (trigger message of hand off) are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#drop_handoff_messages GoogleDialogflowConversationProfile#drop_handoff_messages}
  */
  readonly dropHandoffMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from ivr stage are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#drop_ivr_messages GoogleDialogflowConversationProfile#drop_ivr_messages}
  */
  readonly dropIvrMessages?: boolean | cdktf.IResolvable;
  /**
  * If set to true, all messages from virtual agent are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#drop_virtual_agent_messages GoogleDialogflowConversationProfile#drop_virtual_agent_messages}
  */
  readonly dropVirtualAgentMessages?: boolean | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_handoff_messages: cdktf.booleanToTerraform(struct!.dropHandoffMessages),
    drop_ivr_messages: cdktf.booleanToTerraform(struct!.dropIvrMessages),
    drop_virtual_agent_messages: cdktf.booleanToTerraform(struct!.dropVirtualAgentMessages),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_handoff_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropHandoffMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_ivr_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropIvrMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_virtual_agent_messages: {
      value: cdktf.booleanToHclTerraform(struct!.dropVirtualAgentMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropHandoffMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropHandoffMessages = this._dropHandoffMessages;
    }
    if (this._dropIvrMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropIvrMessages = this._dropIvrMessages;
    }
    if (this._dropVirtualAgentMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropVirtualAgentMessages = this._dropVirtualAgentMessages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropHandoffMessages = undefined;
      this._dropIvrMessages = undefined;
      this._dropVirtualAgentMessages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropHandoffMessages = value.dropHandoffMessages;
      this._dropIvrMessages = value.dropIvrMessages;
      this._dropVirtualAgentMessages = value.dropVirtualAgentMessages;
    }
  }

  // drop_handoff_messages - computed: false, optional: true, required: false
  private _dropHandoffMessages?: boolean | cdktf.IResolvable; 
  public get dropHandoffMessages() {
    return this.getBooleanAttribute('drop_handoff_messages');
  }
  public set dropHandoffMessages(value: boolean | cdktf.IResolvable) {
    this._dropHandoffMessages = value;
  }
  public resetDropHandoffMessages() {
    this._dropHandoffMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropHandoffMessagesInput() {
    return this._dropHandoffMessages;
  }

  // drop_ivr_messages - computed: false, optional: true, required: false
  private _dropIvrMessages?: boolean | cdktf.IResolvable; 
  public get dropIvrMessages() {
    return this.getBooleanAttribute('drop_ivr_messages');
  }
  public set dropIvrMessages(value: boolean | cdktf.IResolvable) {
    this._dropIvrMessages = value;
  }
  public resetDropIvrMessages() {
    this._dropIvrMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropIvrMessagesInput() {
    return this._dropIvrMessages;
  }

  // drop_virtual_agent_messages - computed: false, optional: true, required: false
  private _dropVirtualAgentMessages?: boolean | cdktf.IResolvable; 
  public get dropVirtualAgentMessages() {
    return this.getBooleanAttribute('drop_virtual_agent_messages');
  }
  public set dropVirtualAgentMessages(value: boolean | cdktf.IResolvable) {
    this._dropVirtualAgentMessages = value;
  }
  public resetDropVirtualAgentMessages() {
    this._dropVirtualAgentMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropVirtualAgentMessagesInput() {
    return this._dropVirtualAgentMessages;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig {
  /**
  * The name of a dialogflow virtual agent used for intent detection and suggestion triggered by human agent. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#agent GoogleDialogflowConversationProfile#agent}
  */
  readonly agent?: string;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource {
  /**
  * he name of a Dialogflow virtual agent used for end user side intent detection and suggestion. Format: projects/<Project ID>/locations/<Location ID>/agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#agent GoogleDialogflowConversationProfile#agent}
  */
  readonly agent: string;
  /**
  * human_agent_side_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#human_agent_side_config GoogleDialogflowConversationProfile#human_agent_side_config}
  */
  readonly humanAgentSideConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    human_agent_side_config: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToTerraform(struct!.humanAgentSideConfig),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    human_agent_side_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigToHclTerraform(struct!.humanAgentSideConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._humanAgentSideConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanAgentSideConfig = this._humanAgentSideConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._humanAgentSideConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._humanAgentSideConfig.internalValue = value.humanAgentSideConfig;
    }
  }

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // human_agent_side_config - computed: false, optional: true, required: false
  private _humanAgentSideConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfigOutputReference(this, "human_agent_side_config");
  public get humanAgentSideConfig() {
    return this._humanAgentSideConfig;
  }
  public putHumanAgentSideConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceHumanAgentSideConfig) {
    this._humanAgentSideConfig.internalValue = value;
  }
  public resetHumanAgentSideConfig() {
    this._humanAgentSideConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentSideConfigInput() {
    return this._humanAgentSideConfig.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections {
  /**
  * The selected sections chosen to return when requesting a summary of a conversation
  * If not provided the default selection will be "{SITUATION, ACTION, RESULT}". Possible values: ["SECTION_TYPE_UNSPECIFIED", "SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#section_types GoogleDialogflowConversationProfile#section_types}
  */
  readonly sectionTypes?: string[];
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    section_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sectionTypes),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    section_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sectionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sectionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionTypes = this._sectionTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sectionTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sectionTypes = value.sectionTypes;
    }
  }

  // section_types - computed: false, optional: true, required: false
  private _sectionTypes?: string[]; 
  public get sectionTypes() {
    return this.getListAttribute('section_types');
  }
  public set sectionTypes(value: string[]) {
    this._sectionTypes = value;
  }
  public resetSectionTypes() {
    this._sectionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionTypesInput() {
    return this._sectionTypes;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig {
  /**
  * Confidence threshold of query result.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, SMART_REPLY, SMART_COMPOSE, KNOWLEDGE_SEARCH, KNOWLEDGE_ASSIST, ENTITY_EXTRACTION.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#confidence_threshold GoogleDialogflowConversationProfile#confidence_threshold}
  */
  readonly confidenceThreshold?: number;
  /**
  * Maximum number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#max_results GoogleDialogflowConversationProfile#max_results}
  */
  readonly maxResults?: number;
  /**
  * context_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#context_filter_settings GoogleDialogflowConversationProfile#context_filter_settings}
  */
  readonly contextFilterSettings?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings;
  /**
  * dialogflow_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#dialogflow_query_source GoogleDialogflowConversationProfile#dialogflow_query_source}
  */
  readonly dialogflowQuerySource?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource;
  /**
  * sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#sections GoogleDialogflowConversationProfile#sections}
  */
  readonly sections?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_threshold: cdktf.numberToTerraform(struct!.confidenceThreshold),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    context_filter_settings: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToTerraform(struct!.contextFilterSettings),
    dialogflow_query_source: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToTerraform(struct!.dialogflowQuerySource),
    sections: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToTerraform(struct!.sections),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_threshold: {
      value: cdktf.numberToHclTerraform(struct!.confidenceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context_filter_settings: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsToHclTerraform(struct!.contextFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsList",
    },
    dialogflow_query_source: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceToHclTerraform(struct!.dialogflowQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceList",
    },
    sections: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsToHclTerraform(struct!.sections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceThreshold = this._confidenceThreshold;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._contextFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextFilterSettings = this._contextFilterSettings?.internalValue;
    }
    if (this._dialogflowQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogflowQuerySource = this._dialogflowQuerySource?.internalValue;
    }
    if (this._sections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sections = this._sections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidenceThreshold = undefined;
      this._maxResults = undefined;
      this._contextFilterSettings.internalValue = undefined;
      this._dialogflowQuerySource.internalValue = undefined;
      this._sections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidenceThreshold = value.confidenceThreshold;
      this._maxResults = value.maxResults;
      this._contextFilterSettings.internalValue = value.contextFilterSettings;
      this._dialogflowQuerySource.internalValue = value.dialogflowQuerySource;
      this._sections.internalValue = value.sections;
    }
  }

  // confidence_threshold - computed: false, optional: true, required: false
  private _confidenceThreshold?: number; 
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: number) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // context_filter_settings - computed: false, optional: true, required: false
  private _contextFilterSettings = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettingsOutputReference(this, "context_filter_settings");
  public get contextFilterSettings() {
    return this._contextFilterSettings;
  }
  public putContextFilterSettings(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigContextFilterSettings) {
    this._contextFilterSettings.internalValue = value;
  }
  public resetContextFilterSettings() {
    this._contextFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextFilterSettingsInput() {
    return this._contextFilterSettings.internalValue;
  }

  // dialogflow_query_source - computed: false, optional: true, required: false
  private _dialogflowQuerySource = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySourceOutputReference(this, "dialogflow_query_source");
  public get dialogflowQuerySource() {
    return this._dialogflowQuerySource;
  }
  public putDialogflowQuerySource(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigDialogflowQuerySource) {
    this._dialogflowQuerySource.internalValue = value;
  }
  public resetDialogflowQuerySource() {
    this._dialogflowQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowQuerySourceInput() {
    return this._dialogflowQuerySource.internalValue;
  }

  // sections - computed: false, optional: true, required: false
  private _sections = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSectionsOutputReference(this, "sections");
  public get sections() {
    return this._sections;
  }
  public putSections(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigSections) {
    this._sections.internalValue = value;
  }
  public resetSections() {
    this._sections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionsInput() {
    return this._sections.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature {
  /**
  * Type of Human Agent Assistant API feature to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#type GoogleDialogflowConversationProfile#type}
  */
  readonly type?: string;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings {
  /**
  * Do not trigger if last utterance is small talk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#no_small_talk GoogleDialogflowConversationProfile#no_small_talk}
  */
  readonly noSmallTalk?: boolean | cdktf.IResolvable;
  /**
  * Only trigger suggestion if participant role of last utterance is END_USER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#only_end_user GoogleDialogflowConversationProfile#only_end_user}
  */
  readonly onlyEndUser?: boolean | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_small_talk: cdktf.booleanToTerraform(struct!.noSmallTalk),
    only_end_user: cdktf.booleanToTerraform(struct!.onlyEndUser),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_small_talk: {
      value: cdktf.booleanToHclTerraform(struct!.noSmallTalk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_end_user: {
      value: cdktf.booleanToHclTerraform(struct!.onlyEndUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSmallTalk !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSmallTalk = this._noSmallTalk;
    }
    if (this._onlyEndUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyEndUser = this._onlyEndUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSmallTalk = undefined;
      this._onlyEndUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSmallTalk = value.noSmallTalk;
      this._onlyEndUser = value.onlyEndUser;
    }
  }

  // no_small_talk - computed: false, optional: true, required: false
  private _noSmallTalk?: boolean | cdktf.IResolvable; 
  public get noSmallTalk() {
    return this.getBooleanAttribute('no_small_talk');
  }
  public set noSmallTalk(value: boolean | cdktf.IResolvable) {
    this._noSmallTalk = value;
  }
  public resetNoSmallTalk() {
    this._noSmallTalk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSmallTalkInput() {
    return this._noSmallTalk;
  }

  // only_end_user - computed: false, optional: true, required: false
  private _onlyEndUser?: boolean | cdktf.IResolvable; 
  public get onlyEndUser() {
    return this.getBooleanAttribute('only_end_user');
  }
  public set onlyEndUser(value: boolean | cdktf.IResolvable) {
    this._onlyEndUser = value;
  }
  public resetOnlyEndUser() {
    this._onlyEndUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyEndUserInput() {
    return this._onlyEndUser;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs {
  /**
  * Disable the logging of search queries sent by human agents. It can prevent those queries from being stored at answer records.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#disable_agent_query_logging GoogleDialogflowConversationProfile#disable_agent_query_logging}
  */
  readonly disableAgentQueryLogging?: boolean | cdktf.IResolvable;
  /**
  * Enable including conversation context during query answer generation.
  * This feature is only supported for types: KNOWLEDGE_SEARCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_conversation_augmented_query GoogleDialogflowConversationProfile#enable_conversation_augmented_query}
  */
  readonly enableConversationAugmentedQuery?: boolean | cdktf.IResolvable;
  /**
  * Automatically iterates all participants and tries to compile suggestions.
  * This feature is only supported for types: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST, KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_event_based_suggestion GoogleDialogflowConversationProfile#enable_event_based_suggestion}
  */
  readonly enableEventBasedSuggestion?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion only.
  * This feature is only supported for types: KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_query_suggestion_only GoogleDialogflowConversationProfile#enable_query_suggestion_only}
  */
  readonly enableQuerySuggestionOnly?: boolean | cdktf.IResolvable;
  /**
  * Enable query suggestion even if we can't find its answer. By default, queries are suggested only if we find its answer.
  * This feature is only supported for types: KNOWLEDGE_ASSIST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_query_suggestion_when_no_answer GoogleDialogflowConversationProfile#enable_query_suggestion_when_no_answer}
  */
  readonly enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable;
  /**
  * conversation_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#conversation_model_config GoogleDialogflowConversationProfile#conversation_model_config}
  */
  readonly conversationModelConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig;
  /**
  * conversation_process_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#conversation_process_config GoogleDialogflowConversationProfile#conversation_process_config}
  */
  readonly conversationProcessConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig;
  /**
  * query_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#query_config GoogleDialogflowConversationProfile#query_config}
  */
  readonly queryConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig;
  /**
  * suggestion_feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#suggestion_feature GoogleDialogflowConversationProfile#suggestion_feature}
  */
  readonly suggestionFeature?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature;
  /**
  * suggestion_trigger_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#suggestion_trigger_settings GoogleDialogflowConversationProfile#suggestion_trigger_settings}
  */
  readonly suggestionTriggerSettings?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_agent_query_logging: cdktf.booleanToTerraform(struct!.disableAgentQueryLogging),
    enable_conversation_augmented_query: cdktf.booleanToTerraform(struct!.enableConversationAugmentedQuery),
    enable_event_based_suggestion: cdktf.booleanToTerraform(struct!.enableEventBasedSuggestion),
    enable_query_suggestion_only: cdktf.booleanToTerraform(struct!.enableQuerySuggestionOnly),
    enable_query_suggestion_when_no_answer: cdktf.booleanToTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
    conversation_model_config: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToTerraform(struct!.conversationModelConfig),
    conversation_process_config: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToTerraform(struct!.conversationProcessConfig),
    query_config: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToTerraform(struct!.queryConfig),
    suggestion_feature: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToTerraform(struct!.suggestionFeature),
    suggestion_trigger_settings: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToTerraform(struct!.suggestionTriggerSettings),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_agent_query_logging: {
      value: cdktf.booleanToHclTerraform(struct!.disableAgentQueryLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_conversation_augmented_query: {
      value: cdktf.booleanToHclTerraform(struct!.enableConversationAugmentedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_event_based_suggestion: {
      value: cdktf.booleanToHclTerraform(struct!.enableEventBasedSuggestion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_only: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_query_suggestion_when_no_answer: {
      value: cdktf.booleanToHclTerraform(struct!.enableQuerySuggestionWhenNoAnswer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conversation_model_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigToHclTerraform(struct!.conversationModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigList",
    },
    conversation_process_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigToHclTerraform(struct!.conversationProcessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigList",
    },
    query_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigToHclTerraform(struct!.queryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigList",
    },
    suggestion_feature: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureToHclTerraform(struct!.suggestionFeature),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureList",
    },
    suggestion_trigger_settings: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsToHclTerraform(struct!.suggestionTriggerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAgentQueryLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAgentQueryLogging = this._disableAgentQueryLogging;
    }
    if (this._enableConversationAugmentedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConversationAugmentedQuery = this._enableConversationAugmentedQuery;
    }
    if (this._enableEventBasedSuggestion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEventBasedSuggestion = this._enableEventBasedSuggestion;
    }
    if (this._enableQuerySuggestionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionOnly = this._enableQuerySuggestionOnly;
    }
    if (this._enableQuerySuggestionWhenNoAnswer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQuerySuggestionWhenNoAnswer = this._enableQuerySuggestionWhenNoAnswer;
    }
    if (this._conversationModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationModelConfig = this._conversationModelConfig?.internalValue;
    }
    if (this._conversationProcessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationProcessConfig = this._conversationProcessConfig?.internalValue;
    }
    if (this._queryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryConfig = this._queryConfig?.internalValue;
    }
    if (this._suggestionFeature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionFeature = this._suggestionFeature?.internalValue;
    }
    if (this._suggestionTriggerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionTriggerSettings = this._suggestionTriggerSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = undefined;
      this._enableConversationAugmentedQuery = undefined;
      this._enableEventBasedSuggestion = undefined;
      this._enableQuerySuggestionOnly = undefined;
      this._enableQuerySuggestionWhenNoAnswer = undefined;
      this._conversationModelConfig.internalValue = undefined;
      this._conversationProcessConfig.internalValue = undefined;
      this._queryConfig.internalValue = undefined;
      this._suggestionFeature.internalValue = undefined;
      this._suggestionTriggerSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableAgentQueryLogging = value.disableAgentQueryLogging;
      this._enableConversationAugmentedQuery = value.enableConversationAugmentedQuery;
      this._enableEventBasedSuggestion = value.enableEventBasedSuggestion;
      this._enableQuerySuggestionOnly = value.enableQuerySuggestionOnly;
      this._enableQuerySuggestionWhenNoAnswer = value.enableQuerySuggestionWhenNoAnswer;
      this._conversationModelConfig.internalValue = value.conversationModelConfig;
      this._conversationProcessConfig.internalValue = value.conversationProcessConfig;
      this._queryConfig.internalValue = value.queryConfig;
      this._suggestionFeature.internalValue = value.suggestionFeature;
      this._suggestionTriggerSettings.internalValue = value.suggestionTriggerSettings;
    }
  }

  // disable_agent_query_logging - computed: false, optional: true, required: false
  private _disableAgentQueryLogging?: boolean | cdktf.IResolvable; 
  public get disableAgentQueryLogging() {
    return this.getBooleanAttribute('disable_agent_query_logging');
  }
  public set disableAgentQueryLogging(value: boolean | cdktf.IResolvable) {
    this._disableAgentQueryLogging = value;
  }
  public resetDisableAgentQueryLogging() {
    this._disableAgentQueryLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAgentQueryLoggingInput() {
    return this._disableAgentQueryLogging;
  }

  // enable_conversation_augmented_query - computed: false, optional: true, required: false
  private _enableConversationAugmentedQuery?: boolean | cdktf.IResolvable; 
  public get enableConversationAugmentedQuery() {
    return this.getBooleanAttribute('enable_conversation_augmented_query');
  }
  public set enableConversationAugmentedQuery(value: boolean | cdktf.IResolvable) {
    this._enableConversationAugmentedQuery = value;
  }
  public resetEnableConversationAugmentedQuery() {
    this._enableConversationAugmentedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConversationAugmentedQueryInput() {
    return this._enableConversationAugmentedQuery;
  }

  // enable_event_based_suggestion - computed: false, optional: true, required: false
  private _enableEventBasedSuggestion?: boolean | cdktf.IResolvable; 
  public get enableEventBasedSuggestion() {
    return this.getBooleanAttribute('enable_event_based_suggestion');
  }
  public set enableEventBasedSuggestion(value: boolean | cdktf.IResolvable) {
    this._enableEventBasedSuggestion = value;
  }
  public resetEnableEventBasedSuggestion() {
    this._enableEventBasedSuggestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventBasedSuggestionInput() {
    return this._enableEventBasedSuggestion;
  }

  // enable_query_suggestion_only - computed: false, optional: true, required: false
  private _enableQuerySuggestionOnly?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionOnly() {
    return this.getBooleanAttribute('enable_query_suggestion_only');
  }
  public set enableQuerySuggestionOnly(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionOnly = value;
  }
  public resetEnableQuerySuggestionOnly() {
    this._enableQuerySuggestionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionOnlyInput() {
    return this._enableQuerySuggestionOnly;
  }

  // enable_query_suggestion_when_no_answer - computed: false, optional: true, required: false
  private _enableQuerySuggestionWhenNoAnswer?: boolean | cdktf.IResolvable; 
  public get enableQuerySuggestionWhenNoAnswer() {
    return this.getBooleanAttribute('enable_query_suggestion_when_no_answer');
  }
  public set enableQuerySuggestionWhenNoAnswer(value: boolean | cdktf.IResolvable) {
    this._enableQuerySuggestionWhenNoAnswer = value;
  }
  public resetEnableQuerySuggestionWhenNoAnswer() {
    this._enableQuerySuggestionWhenNoAnswer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQuerySuggestionWhenNoAnswerInput() {
    return this._enableQuerySuggestionWhenNoAnswer;
  }

  // conversation_model_config - computed: false, optional: true, required: false
  private _conversationModelConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfigOutputReference(this, "conversation_model_config");
  public get conversationModelConfig() {
    return this._conversationModelConfig;
  }
  public putConversationModelConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationModelConfig) {
    this._conversationModelConfig.internalValue = value;
  }
  public resetConversationModelConfig() {
    this._conversationModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationModelConfigInput() {
    return this._conversationModelConfig.internalValue;
  }

  // conversation_process_config - computed: false, optional: true, required: false
  private _conversationProcessConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfigOutputReference(this, "conversation_process_config");
  public get conversationProcessConfig() {
    return this._conversationProcessConfig;
  }
  public putConversationProcessConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsConversationProcessConfig) {
    this._conversationProcessConfig.internalValue = value;
  }
  public resetConversationProcessConfig() {
    this._conversationProcessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationProcessConfigInput() {
    return this._conversationProcessConfig.internalValue;
  }

  // query_config - computed: false, optional: true, required: false
  private _queryConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfigOutputReference(this, "query_config");
  public get queryConfig() {
    return this._queryConfig;
  }
  public putQueryConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsQueryConfig) {
    this._queryConfig.internalValue = value;
  }
  public resetQueryConfig() {
    this._queryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryConfigInput() {
    return this._queryConfig.internalValue;
  }

  // suggestion_feature - computed: false, optional: true, required: false
  private _suggestionFeature = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeatureOutputReference(this, "suggestion_feature");
  public get suggestionFeature() {
    return this._suggestionFeature;
  }
  public putSuggestionFeature(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionFeature) {
    this._suggestionFeature.internalValue = value;
  }
  public resetSuggestionFeature() {
    this._suggestionFeature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionFeatureInput() {
    return this._suggestionFeature.internalValue;
  }

  // suggestion_trigger_settings - computed: false, optional: true, required: false
  private _suggestionTriggerSettings = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettingsOutputReference(this, "suggestion_trigger_settings");
  public get suggestionTriggerSettings() {
    return this._suggestionTriggerSettings;
  }
  public putSuggestionTriggerSettings(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsSuggestionTriggerSettings) {
    this._suggestionTriggerSettings.internalValue = value;
  }
  public resetSuggestionTriggerSettings() {
    this._suggestionTriggerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionTriggerSettingsInput() {
    return this._suggestionTriggerSettings.internalValue;
  }
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsOutputReference {
    return new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig {
  /**
  * When disableHighLatencyFeaturesSyncDelivery is true and using the AnalyzeContent API, we will not deliver the responses from high latency features in the API response. The humanAgentAssistantConfig.notification_config must be configured and enableEventBasedSuggestion must be set to true to receive the responses from high latency features in Pub/Sub. High latency feature(s): KNOWLEDGE_ASSIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#disable_high_latency_features_sync_delivery GoogleDialogflowConversationProfile#disable_high_latency_features_sync_delivery}
  */
  readonly disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable;
  /**
  * List of various generator resource names used in the conversation profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#generators GoogleDialogflowConversationProfile#generators}
  */
  readonly generators?: string[];
  /**
  * If groupSuggestionResponses is false, and there are multiple featureConfigs in event based suggestion or StreamingAnalyzeContent, we will try to deliver suggestions to customers as soon as we get new suggestion. Different type of suggestions based on the same context will be in separate Pub/Sub event or StreamingAnalyzeContentResponse.
  * 
  * If groupSuggestionResponses set to true. All the suggestions to the same participant based on the same context will be grouped into a single Pub/Sub event or StreamingAnalyzeContentResponse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#group_suggestion_responses GoogleDialogflowConversationProfile#group_suggestion_responses}
  */
  readonly groupSuggestionResponses?: boolean | cdktf.IResolvable;
  /**
  * feature_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#feature_configs GoogleDialogflowConversationProfile#feature_configs}
  */
  readonly featureConfigs?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs[] | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_high_latency_features_sync_delivery: cdktf.booleanToTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
    generators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.generators),
    group_suggestion_responses: cdktf.booleanToTerraform(struct!.groupSuggestionResponses),
    feature_configs: cdktf.listMapper(googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToTerraform, true)(struct!.featureConfigs),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_high_latency_features_sync_delivery: {
      value: cdktf.booleanToHclTerraform(struct!.disableHighLatencyFeaturesSyncDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.generators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_suggestion_responses: {
      value: cdktf.booleanToHclTerraform(struct!.groupSuggestionResponses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    feature_configs: {
      value: cdktf.listMapperHcl(googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsToHclTerraform, true)(struct!.featureConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHighLatencyFeaturesSyncDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHighLatencyFeaturesSyncDelivery = this._disableHighLatencyFeaturesSyncDelivery;
    }
    if (this._generators !== undefined) {
      hasAnyValues = true;
      internalValueResult.generators = this._generators;
    }
    if (this._groupSuggestionResponses !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSuggestionResponses = this._groupSuggestionResponses;
    }
    if (this._featureConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureConfigs = this._featureConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableHighLatencyFeaturesSyncDelivery = undefined;
      this._generators = undefined;
      this._groupSuggestionResponses = undefined;
      this._featureConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableHighLatencyFeaturesSyncDelivery = value.disableHighLatencyFeaturesSyncDelivery;
      this._generators = value.generators;
      this._groupSuggestionResponses = value.groupSuggestionResponses;
      this._featureConfigs.internalValue = value.featureConfigs;
    }
  }

  // disable_high_latency_features_sync_delivery - computed: false, optional: true, required: false
  private _disableHighLatencyFeaturesSyncDelivery?: boolean | cdktf.IResolvable; 
  public get disableHighLatencyFeaturesSyncDelivery() {
    return this.getBooleanAttribute('disable_high_latency_features_sync_delivery');
  }
  public set disableHighLatencyFeaturesSyncDelivery(value: boolean | cdktf.IResolvable) {
    this._disableHighLatencyFeaturesSyncDelivery = value;
  }
  public resetDisableHighLatencyFeaturesSyncDelivery() {
    this._disableHighLatencyFeaturesSyncDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHighLatencyFeaturesSyncDeliveryInput() {
    return this._disableHighLatencyFeaturesSyncDelivery;
  }

  // generators - computed: false, optional: true, required: false
  private _generators?: string[]; 
  public get generators() {
    return this.getListAttribute('generators');
  }
  public set generators(value: string[]) {
    this._generators = value;
  }
  public resetGenerators() {
    this._generators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators;
  }

  // group_suggestion_responses - computed: false, optional: true, required: false
  private _groupSuggestionResponses?: boolean | cdktf.IResolvable; 
  public get groupSuggestionResponses() {
    return this.getBooleanAttribute('group_suggestion_responses');
  }
  public set groupSuggestionResponses(value: boolean | cdktf.IResolvable) {
    this._groupSuggestionResponses = value;
  }
  public resetGroupSuggestionResponses() {
    this._groupSuggestionResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSuggestionResponsesInput() {
    return this._groupSuggestionResponses;
  }

  // feature_configs - computed: false, optional: true, required: false
  private _featureConfigs = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigsList(this, "feature_configs", false);
  public get featureConfigs() {
    return this._featureConfigs;
  }
  public putFeatureConfigs(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigFeatureConfigs[] | cdktf.IResolvable) {
    this._featureConfigs.internalValue = value;
  }
  public resetFeatureConfigs() {
    this._featureConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureConfigsInput() {
    return this._featureConfigs.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig {
  /**
  * Enable entity extraction in conversation messages on agent assist stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_entity_extraction GoogleDialogflowConversationProfile#enable_entity_extraction}
  */
  readonly enableEntityExtraction?: boolean | cdktf.IResolvable;
  /**
  * Enable sentiment analysis in conversation messages on agent assist stage. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_sentiment_analysis GoogleDialogflowConversationProfile#enable_sentiment_analysis}
  */
  readonly enableSentimentAnalysis?: boolean | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_entity_extraction: cdktf.booleanToTerraform(struct!.enableEntityExtraction),
    enable_sentiment_analysis: cdktf.booleanToTerraform(struct!.enableSentimentAnalysis),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_entity_extraction: {
      value: cdktf.booleanToHclTerraform(struct!.enableEntityExtraction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sentiment_analysis: {
      value: cdktf.booleanToHclTerraform(struct!.enableSentimentAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEntityExtraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEntityExtraction = this._enableEntityExtraction;
    }
    if (this._enableSentimentAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSentimentAnalysis = this._enableSentimentAnalysis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableEntityExtraction = undefined;
      this._enableSentimentAnalysis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableEntityExtraction = value.enableEntityExtraction;
      this._enableSentimentAnalysis = value.enableSentimentAnalysis;
    }
  }

  // enable_entity_extraction - computed: false, optional: true, required: false
  private _enableEntityExtraction?: boolean | cdktf.IResolvable; 
  public get enableEntityExtraction() {
    return this.getBooleanAttribute('enable_entity_extraction');
  }
  public set enableEntityExtraction(value: boolean | cdktf.IResolvable) {
    this._enableEntityExtraction = value;
  }
  public resetEnableEntityExtraction() {
    this._enableEntityExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEntityExtractionInput() {
    return this._enableEntityExtraction;
  }

  // enable_sentiment_analysis - computed: false, optional: true, required: false
  private _enableSentimentAnalysis?: boolean | cdktf.IResolvable; 
  public get enableSentimentAnalysis() {
    return this.getBooleanAttribute('enable_sentiment_analysis');
  }
  public set enableSentimentAnalysis(value: boolean | cdktf.IResolvable) {
    this._enableSentimentAnalysis = value;
  }
  public resetEnableSentimentAnalysis() {
    this._enableSentimentAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSentimentAnalysisInput() {
    return this._enableSentimentAnalysis;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig {
  /**
  * Format of the message Possible values: ["MESSAGE_FORMAT_UNSPECIFIED", "PROTO", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#message_format GoogleDialogflowConversationProfile#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Name of the Pub/Sub topic to publish conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#topic GoogleDialogflowConversationProfile#topic}
  */
  readonly topic?: string;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._topic = value.topic;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentAssistantConfig {
  /**
  * end_user_suggestion_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#end_user_suggestion_config GoogleDialogflowConversationProfile#end_user_suggestion_config}
  */
  readonly endUserSuggestionConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig;
  /**
  * human_agent_suggestion_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#human_agent_suggestion_config GoogleDialogflowConversationProfile#human_agent_suggestion_config}
  */
  readonly humanAgentSuggestionConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig;
  /**
  * message_analysis_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#message_analysis_config GoogleDialogflowConversationProfile#message_analysis_config}
  */
  readonly messageAnalysisConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#notification_config GoogleDialogflowConversationProfile#notification_config}
  */
  readonly notificationConfig?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig;
}

export function googleDialogflowConversationProfileHumanAgentAssistantConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_user_suggestion_config: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToTerraform(struct!.endUserSuggestionConfig),
    human_agent_suggestion_config: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToTerraform(struct!.humanAgentSuggestionConfig),
    message_analysis_config: googleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToTerraform(struct!.messageAnalysisConfig),
    notification_config: googleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToTerraform(struct!.notificationConfig),
  }
}


export function googleDialogflowConversationProfileHumanAgentAssistantConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentAssistantConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentAssistantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_user_suggestion_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigToHclTerraform(struct!.endUserSuggestionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigList",
    },
    human_agent_suggestion_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigToHclTerraform(struct!.humanAgentSuggestionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigList",
    },
    message_analysis_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigToHclTerraform(struct!.messageAnalysisConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigList",
    },
    notification_config: {
      value: googleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigToHclTerraform(struct!.notificationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentAssistantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentAssistantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endUserSuggestionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endUserSuggestionConfig = this._endUserSuggestionConfig?.internalValue;
    }
    if (this._humanAgentSuggestionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanAgentSuggestionConfig = this._humanAgentSuggestionConfig?.internalValue;
    }
    if (this._messageAnalysisConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageAnalysisConfig = this._messageAnalysisConfig?.internalValue;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endUserSuggestionConfig.internalValue = undefined;
      this._humanAgentSuggestionConfig.internalValue = undefined;
      this._messageAnalysisConfig.internalValue = undefined;
      this._notificationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endUserSuggestionConfig.internalValue = value.endUserSuggestionConfig;
      this._humanAgentSuggestionConfig.internalValue = value.humanAgentSuggestionConfig;
      this._messageAnalysisConfig.internalValue = value.messageAnalysisConfig;
      this._notificationConfig.internalValue = value.notificationConfig;
    }
  }

  // end_user_suggestion_config - computed: false, optional: true, required: false
  private _endUserSuggestionConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfigOutputReference(this, "end_user_suggestion_config");
  public get endUserSuggestionConfig() {
    return this._endUserSuggestionConfig;
  }
  public putEndUserSuggestionConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigEndUserSuggestionConfig) {
    this._endUserSuggestionConfig.internalValue = value;
  }
  public resetEndUserSuggestionConfig() {
    this._endUserSuggestionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserSuggestionConfigInput() {
    return this._endUserSuggestionConfig.internalValue;
  }

  // human_agent_suggestion_config - computed: false, optional: true, required: false
  private _humanAgentSuggestionConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfigOutputReference(this, "human_agent_suggestion_config");
  public get humanAgentSuggestionConfig() {
    return this._humanAgentSuggestionConfig;
  }
  public putHumanAgentSuggestionConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigHumanAgentSuggestionConfig) {
    this._humanAgentSuggestionConfig.internalValue = value;
  }
  public resetHumanAgentSuggestionConfig() {
    this._humanAgentSuggestionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentSuggestionConfigInput() {
    return this._humanAgentSuggestionConfig.internalValue;
  }

  // message_analysis_config - computed: false, optional: true, required: false
  private _messageAnalysisConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfigOutputReference(this, "message_analysis_config");
  public get messageAnalysisConfig() {
    return this._messageAnalysisConfig;
  }
  public putMessageAnalysisConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigMessageAnalysisConfig) {
    this._messageAnalysisConfig.internalValue = value;
  }
  public resetMessageAnalysisConfig() {
    this._messageAnalysisConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageAnalysisConfigInput() {
    return this._messageAnalysisConfig.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfigNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig {
  /**
  * Account number of the LivePerson account to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#account_number GoogleDialogflowConversationProfile#account_number}
  */
  readonly accountNumber: string;
}

export function googleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.stringToTerraform(struct!.accountNumber),
  }
}


export function googleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.stringToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountNumber = value.accountNumber;
    }
  }

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }
}
export interface GoogleDialogflowConversationProfileHumanAgentHandoffConfig {
  /**
  * live_person_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#live_person_config GoogleDialogflowConversationProfile#live_person_config}
  */
  readonly livePersonConfig?: GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig;
}

export function googleDialogflowConversationProfileHumanAgentHandoffConfigToTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentHandoffConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentHandoffConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    live_person_config: googleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToTerraform(struct!.livePersonConfig),
  }
}


export function googleDialogflowConversationProfileHumanAgentHandoffConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileHumanAgentHandoffConfigOutputReference | GoogleDialogflowConversationProfileHumanAgentHandoffConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    live_person_config: {
      value: googleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigToHclTerraform(struct!.livePersonConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileHumanAgentHandoffConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileHumanAgentHandoffConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._livePersonConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livePersonConfig = this._livePersonConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileHumanAgentHandoffConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._livePersonConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._livePersonConfig.internalValue = value.livePersonConfig;
    }
  }

  // live_person_config - computed: false, optional: true, required: false
  private _livePersonConfig = new GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfigOutputReference(this, "live_person_config");
  public get livePersonConfig() {
    return this._livePersonConfig;
  }
  public putLivePersonConfig(value: GoogleDialogflowConversationProfileHumanAgentHandoffConfigLivePersonConfig) {
    this._livePersonConfig.internalValue = value;
  }
  public resetLivePersonConfig() {
    this._livePersonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livePersonConfigInput() {
    return this._livePersonConfig.internalValue;
  }
}
export interface GoogleDialogflowConversationProfileLoggingConfig {
  /**
  * Whether to log conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_stackdriver_logging GoogleDialogflowConversationProfile#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileLoggingConfigToTerraform(struct?: GoogleDialogflowConversationProfileLoggingConfigOutputReference | GoogleDialogflowConversationProfileLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_stackdriver_logging: cdktf.booleanToTerraform(struct!.enableStackdriverLogging),
  }
}


export function googleDialogflowConversationProfileLoggingConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileLoggingConfigOutputReference | GoogleDialogflowConversationProfileLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleDialogflowConversationProfileLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableStackdriverLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStackdriverLogging = this._enableStackdriverLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableStackdriverLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableStackdriverLogging = value.enableStackdriverLogging;
    }
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
export interface GoogleDialogflowConversationProfileNewMessageEventNotificationConfig {
  /**
  * Format of the message Possible values: ["MESSAGE_FORMAT_UNSPECIFIED", "PROTO", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#message_format GoogleDialogflowConversationProfile#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Name of the Pub/Sub topic to publish conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#topic GoogleDialogflowConversationProfile#topic}
  */
  readonly topic?: string;
}

export function googleDialogflowConversationProfileNewMessageEventNotificationConfigToTerraform(struct?: GoogleDialogflowConversationProfileNewMessageEventNotificationConfigOutputReference | GoogleDialogflowConversationProfileNewMessageEventNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function googleDialogflowConversationProfileNewMessageEventNotificationConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileNewMessageEventNotificationConfigOutputReference | GoogleDialogflowConversationProfileNewMessageEventNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileNewMessageEventNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileNewMessageEventNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileNewMessageEventNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._topic = value.topic;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface GoogleDialogflowConversationProfileNotificationConfig {
  /**
  * Format of the message Possible values: ["MESSAGE_FORMAT_UNSPECIFIED", "PROTO", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#message_format GoogleDialogflowConversationProfile#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Name of the Pub/Sub topic to publish conversation events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#topic GoogleDialogflowConversationProfile#topic}
  */
  readonly topic?: string;
}

export function googleDialogflowConversationProfileNotificationConfigToTerraform(struct?: GoogleDialogflowConversationProfileNotificationConfigOutputReference | GoogleDialogflowConversationProfileNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function googleDialogflowConversationProfileNotificationConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileNotificationConfigOutputReference | GoogleDialogflowConversationProfileNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageFormat = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageFormat = value.messageFormat;
      this._topic = value.topic;
    }
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface GoogleDialogflowConversationProfileSttConfig {
  /**
  * Audio encoding of the audio content to process. Possible values: ["AUDIO_ENCODING_UNSPECIFIED", "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR", "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIOENCODING_SPEEX_WITH_HEADER_BYTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#audio_encoding GoogleDialogflowConversationProfile#audio_encoding}
  */
  readonly audioEncoding?: string;
  /**
  * If true, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#enable_word_info GoogleDialogflowConversationProfile#enable_word_info}
  */
  readonly enableWordInfo?: boolean | cdktf.IResolvable;
  /**
  * The language of the supplied audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#language_code GoogleDialogflowConversationProfile#language_code}
  */
  readonly languageCode?: string;
  /**
  * Which Speech model to select.
  * Leave this field unspecified to use Agent Speech settings for model selection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#model GoogleDialogflowConversationProfile#model}
  */
  readonly model?: string;
  /**
  * Sample rate (in Hertz) of the audio content sent in the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#sample_rate_hertz GoogleDialogflowConversationProfile#sample_rate_hertz}
  */
  readonly sampleRateHertz?: number;
  /**
  * The speech model used in speech to text. Possible values: ["SPEECH_MODEL_VARIANT_UNSPECIFIED", "USE_BEST_AVAILABLE", "USE_STANDARD", "USE_ENHANCED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#speech_model_variant GoogleDialogflowConversationProfile#speech_model_variant}
  */
  readonly speechModelVariant?: string;
  /**
  * Use timeout based endpointing, interpreting endpointer sensitivy as seconds of timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#use_timeout_based_endpointing GoogleDialogflowConversationProfile#use_timeout_based_endpointing}
  */
  readonly useTimeoutBasedEndpointing?: boolean | cdktf.IResolvable;
}

export function googleDialogflowConversationProfileSttConfigToTerraform(struct?: GoogleDialogflowConversationProfileSttConfigOutputReference | GoogleDialogflowConversationProfileSttConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_encoding: cdktf.stringToTerraform(struct!.audioEncoding),
    enable_word_info: cdktf.booleanToTerraform(struct!.enableWordInfo),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    model: cdktf.stringToTerraform(struct!.model),
    sample_rate_hertz: cdktf.numberToTerraform(struct!.sampleRateHertz),
    speech_model_variant: cdktf.stringToTerraform(struct!.speechModelVariant),
    use_timeout_based_endpointing: cdktf.booleanToTerraform(struct!.useTimeoutBasedEndpointing),
  }
}


export function googleDialogflowConversationProfileSttConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileSttConfigOutputReference | GoogleDialogflowConversationProfileSttConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_encoding: {
      value: cdktf.stringToHclTerraform(struct!.audioEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_word_info: {
      value: cdktf.booleanToHclTerraform(struct!.enableWordInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate_hertz: {
      value: cdktf.numberToHclTerraform(struct!.sampleRateHertz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speech_model_variant: {
      value: cdktf.stringToHclTerraform(struct!.speechModelVariant),
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

export class GoogleDialogflowConversationProfileSttConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileSttConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioEncoding = this._audioEncoding;
    }
    if (this._enableWordInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWordInfo = this._enableWordInfo;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._sampleRateHertz !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRateHertz = this._sampleRateHertz;
    }
    if (this._speechModelVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.speechModelVariant = this._speechModelVariant;
    }
    if (this._useTimeoutBasedEndpointing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTimeoutBasedEndpointing = this._useTimeoutBasedEndpointing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileSttConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioEncoding = undefined;
      this._enableWordInfo = undefined;
      this._languageCode = undefined;
      this._model = undefined;
      this._sampleRateHertz = undefined;
      this._speechModelVariant = undefined;
      this._useTimeoutBasedEndpointing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioEncoding = value.audioEncoding;
      this._enableWordInfo = value.enableWordInfo;
      this._languageCode = value.languageCode;
      this._model = value.model;
      this._sampleRateHertz = value.sampleRateHertz;
      this._speechModelVariant = value.speechModelVariant;
      this._useTimeoutBasedEndpointing = value.useTimeoutBasedEndpointing;
    }
  }

  // audio_encoding - computed: false, optional: true, required: false
  private _audioEncoding?: string; 
  public get audioEncoding() {
    return this.getStringAttribute('audio_encoding');
  }
  public set audioEncoding(value: string) {
    this._audioEncoding = value;
  }
  public resetAudioEncoding() {
    this._audioEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioEncodingInput() {
    return this._audioEncoding;
  }

  // enable_word_info - computed: false, optional: true, required: false
  private _enableWordInfo?: boolean | cdktf.IResolvable; 
  public get enableWordInfo() {
    return this.getBooleanAttribute('enable_word_info');
  }
  public set enableWordInfo(value: boolean | cdktf.IResolvable) {
    this._enableWordInfo = value;
  }
  public resetEnableWordInfo() {
    this._enableWordInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWordInfoInput() {
    return this._enableWordInfo;
  }

  // language_code - computed: true, optional: true, required: false
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

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // sample_rate_hertz - computed: false, optional: true, required: false
  private _sampleRateHertz?: number; 
  public get sampleRateHertz() {
    return this.getNumberAttribute('sample_rate_hertz');
  }
  public set sampleRateHertz(value: number) {
    this._sampleRateHertz = value;
  }
  public resetSampleRateHertz() {
    this._sampleRateHertz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateHertzInput() {
    return this._sampleRateHertz;
  }

  // speech_model_variant - computed: false, optional: true, required: false
  private _speechModelVariant?: string; 
  public get speechModelVariant() {
    return this.getStringAttribute('speech_model_variant');
  }
  public set speechModelVariant(value: string) {
    this._speechModelVariant = value;
  }
  public resetSpeechModelVariant() {
    this._speechModelVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechModelVariantInput() {
    return this._speechModelVariant;
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
export interface GoogleDialogflowConversationProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#create GoogleDialogflowConversationProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#delete GoogleDialogflowConversationProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#update GoogleDialogflowConversationProfile#update}
  */
  readonly update?: string;
}

export function googleDialogflowConversationProfileTimeoutsToTerraform(struct?: GoogleDialogflowConversationProfileTimeouts | cdktf.IResolvable): any {
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


export function googleDialogflowConversationProfileTimeoutsToHclTerraform(struct?: GoogleDialogflowConversationProfileTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowConversationProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowConversationProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowConversationProfileTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleDialogflowConversationProfileTtsConfigVoice {
  /**
  * The name of the voice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#name GoogleDialogflowConversationProfile#name}
  */
  readonly name?: string;
  /**
  * The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#ssml_gender GoogleDialogflowConversationProfile#ssml_gender}
  */
  readonly ssmlGender?: string;
}

export function googleDialogflowConversationProfileTtsConfigVoiceToTerraform(struct?: GoogleDialogflowConversationProfileTtsConfigVoiceOutputReference | GoogleDialogflowConversationProfileTtsConfigVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ssml_gender: cdktf.stringToTerraform(struct!.ssmlGender),
  }
}


export function googleDialogflowConversationProfileTtsConfigVoiceToHclTerraform(struct?: GoogleDialogflowConversationProfileTtsConfigVoiceOutputReference | GoogleDialogflowConversationProfileTtsConfigVoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssml_gender: {
      value: cdktf.stringToHclTerraform(struct!.ssmlGender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileTtsConfigVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileTtsConfigVoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ssmlGender !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlGender = this._ssmlGender;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileTtsConfigVoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._ssmlGender = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._ssmlGender = value.ssmlGender;
    }
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

  // ssml_gender - computed: false, optional: true, required: false
  private _ssmlGender?: string; 
  public get ssmlGender() {
    return this.getStringAttribute('ssml_gender');
  }
  public set ssmlGender(value: string) {
    this._ssmlGender = value;
  }
  public resetSsmlGender() {
    this._ssmlGender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlGenderInput() {
    return this._ssmlGender;
  }
}
export interface GoogleDialogflowConversationProfileTtsConfig {
  /**
  * An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#effects_profile_id GoogleDialogflowConversationProfile#effects_profile_id}
  */
  readonly effectsProfileId?: string[];
  /**
  * Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#pitch GoogleDialogflowConversationProfile#pitch}
  */
  readonly pitch?: number;
  /**
  * Speaking rate/speed, in the range [0.25, 4.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#speaking_rate GoogleDialogflowConversationProfile#speaking_rate}
  */
  readonly speakingRate?: number;
  /**
  * Volume gain (in dB) of the normal native volume supported by the specific voice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#volume_gain_db GoogleDialogflowConversationProfile#volume_gain_db}
  */
  readonly volumeGainDb?: number;
  /**
  * voice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#voice GoogleDialogflowConversationProfile#voice}
  */
  readonly voice?: GoogleDialogflowConversationProfileTtsConfigVoice;
}

export function googleDialogflowConversationProfileTtsConfigToTerraform(struct?: GoogleDialogflowConversationProfileTtsConfigOutputReference | GoogleDialogflowConversationProfileTtsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effects_profile_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.effectsProfileId),
    pitch: cdktf.numberToTerraform(struct!.pitch),
    speaking_rate: cdktf.numberToTerraform(struct!.speakingRate),
    volume_gain_db: cdktf.numberToTerraform(struct!.volumeGainDb),
    voice: googleDialogflowConversationProfileTtsConfigVoiceToTerraform(struct!.voice),
  }
}


export function googleDialogflowConversationProfileTtsConfigToHclTerraform(struct?: GoogleDialogflowConversationProfileTtsConfigOutputReference | GoogleDialogflowConversationProfileTtsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effects_profile_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.effectsProfileId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pitch: {
      value: cdktf.numberToHclTerraform(struct!.pitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speaking_rate: {
      value: cdktf.numberToHclTerraform(struct!.speakingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_gain_db: {
      value: cdktf.numberToHclTerraform(struct!.volumeGainDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    voice: {
      value: googleDialogflowConversationProfileTtsConfigVoiceToHclTerraform(struct!.voice),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowConversationProfileTtsConfigVoiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowConversationProfileTtsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowConversationProfileTtsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectsProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectsProfileId = this._effectsProfileId;
    }
    if (this._pitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pitch = this._pitch;
    }
    if (this._speakingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakingRate = this._speakingRate;
    }
    if (this._volumeGainDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGainDb = this._volumeGainDb;
    }
    if (this._voice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voice = this._voice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowConversationProfileTtsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._effectsProfileId = undefined;
      this._pitch = undefined;
      this._speakingRate = undefined;
      this._volumeGainDb = undefined;
      this._voice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._effectsProfileId = value.effectsProfileId;
      this._pitch = value.pitch;
      this._speakingRate = value.speakingRate;
      this._volumeGainDb = value.volumeGainDb;
      this._voice.internalValue = value.voice;
    }
  }

  // effects_profile_id - computed: false, optional: true, required: false
  private _effectsProfileId?: string[]; 
  public get effectsProfileId() {
    return this.getListAttribute('effects_profile_id');
  }
  public set effectsProfileId(value: string[]) {
    this._effectsProfileId = value;
  }
  public resetEffectsProfileId() {
    this._effectsProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectsProfileIdInput() {
    return this._effectsProfileId;
  }

  // pitch - computed: false, optional: true, required: false
  private _pitch?: number; 
  public get pitch() {
    return this.getNumberAttribute('pitch');
  }
  public set pitch(value: number) {
    this._pitch = value;
  }
  public resetPitch() {
    this._pitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitchInput() {
    return this._pitch;
  }

  // speaking_rate - computed: false, optional: true, required: false
  private _speakingRate?: number; 
  public get speakingRate() {
    return this.getNumberAttribute('speaking_rate');
  }
  public set speakingRate(value: number) {
    this._speakingRate = value;
  }
  public resetSpeakingRate() {
    this._speakingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakingRateInput() {
    return this._speakingRate;
  }

  // volume_gain_db - computed: false, optional: true, required: false
  private _volumeGainDb?: number; 
  public get volumeGainDb() {
    return this.getNumberAttribute('volume_gain_db');
  }
  public set volumeGainDb(value: number) {
    this._volumeGainDb = value;
  }
  public resetVolumeGainDb() {
    this._volumeGainDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGainDbInput() {
    return this._volumeGainDb;
  }

  // voice - computed: false, optional: true, required: false
  private _voice = new GoogleDialogflowConversationProfileTtsConfigVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: GoogleDialogflowConversationProfileTtsConfigVoice) {
    this._voice.internalValue = value;
  }
  public resetVoice() {
    this._voice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile google_dialogflow_conversation_profile}
*/
export class GoogleDialogflowConversationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_conversation_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDialogflowConversationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowConversationProfile to import
  * @param importFromId The id of the existing GoogleDialogflowConversationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowConversationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_conversation_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_conversation_profile google_dialogflow_conversation_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowConversationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowConversationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_conversation_profile',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.50.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._languageCode = config.languageCode;
    this._location = config.location;
    this._project = config.project;
    this._securitySettings = config.securitySettings;
    this._timeZone = config.timeZone;
    this._automatedAgentConfig.internalValue = config.automatedAgentConfig;
    this._humanAgentAssistantConfig.internalValue = config.humanAgentAssistantConfig;
    this._humanAgentHandoffConfig.internalValue = config.humanAgentHandoffConfig;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._newMessageEventNotificationConfig.internalValue = config.newMessageEventNotificationConfig;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._sttConfig.internalValue = config.sttConfig;
    this._timeouts.internalValue = config.timeouts;
    this._ttsConfig.internalValue = config.ttsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // language_code - computed: true, optional: true, required: false
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // automated_agent_config - computed: false, optional: true, required: false
  private _automatedAgentConfig = new GoogleDialogflowConversationProfileAutomatedAgentConfigOutputReference(this, "automated_agent_config");
  public get automatedAgentConfig() {
    return this._automatedAgentConfig;
  }
  public putAutomatedAgentConfig(value: GoogleDialogflowConversationProfileAutomatedAgentConfig) {
    this._automatedAgentConfig.internalValue = value;
  }
  public resetAutomatedAgentConfig() {
    this._automatedAgentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedAgentConfigInput() {
    return this._automatedAgentConfig.internalValue;
  }

  // human_agent_assistant_config - computed: false, optional: true, required: false
  private _humanAgentAssistantConfig = new GoogleDialogflowConversationProfileHumanAgentAssistantConfigOutputReference(this, "human_agent_assistant_config");
  public get humanAgentAssistantConfig() {
    return this._humanAgentAssistantConfig;
  }
  public putHumanAgentAssistantConfig(value: GoogleDialogflowConversationProfileHumanAgentAssistantConfig) {
    this._humanAgentAssistantConfig.internalValue = value;
  }
  public resetHumanAgentAssistantConfig() {
    this._humanAgentAssistantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentAssistantConfigInput() {
    return this._humanAgentAssistantConfig.internalValue;
  }

  // human_agent_handoff_config - computed: false, optional: true, required: false
  private _humanAgentHandoffConfig = new GoogleDialogflowConversationProfileHumanAgentHandoffConfigOutputReference(this, "human_agent_handoff_config");
  public get humanAgentHandoffConfig() {
    return this._humanAgentHandoffConfig;
  }
  public putHumanAgentHandoffConfig(value: GoogleDialogflowConversationProfileHumanAgentHandoffConfig) {
    this._humanAgentHandoffConfig.internalValue = value;
  }
  public resetHumanAgentHandoffConfig() {
    this._humanAgentHandoffConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanAgentHandoffConfigInput() {
    return this._humanAgentHandoffConfig.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new GoogleDialogflowConversationProfileLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: GoogleDialogflowConversationProfileLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // new_message_event_notification_config - computed: false, optional: true, required: false
  private _newMessageEventNotificationConfig = new GoogleDialogflowConversationProfileNewMessageEventNotificationConfigOutputReference(this, "new_message_event_notification_config");
  public get newMessageEventNotificationConfig() {
    return this._newMessageEventNotificationConfig;
  }
  public putNewMessageEventNotificationConfig(value: GoogleDialogflowConversationProfileNewMessageEventNotificationConfig) {
    this._newMessageEventNotificationConfig.internalValue = value;
  }
  public resetNewMessageEventNotificationConfig() {
    this._newMessageEventNotificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMessageEventNotificationConfigInput() {
    return this._newMessageEventNotificationConfig.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new GoogleDialogflowConversationProfileNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: GoogleDialogflowConversationProfileNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // stt_config - computed: false, optional: true, required: false
  private _sttConfig = new GoogleDialogflowConversationProfileSttConfigOutputReference(this, "stt_config");
  public get sttConfig() {
    return this._sttConfig;
  }
  public putSttConfig(value: GoogleDialogflowConversationProfileSttConfig) {
    this._sttConfig.internalValue = value;
  }
  public resetSttConfig() {
    this._sttConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sttConfigInput() {
    return this._sttConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowConversationProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowConversationProfileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tts_config - computed: false, optional: true, required: false
  private _ttsConfig = new GoogleDialogflowConversationProfileTtsConfigOutputReference(this, "tts_config");
  public get ttsConfig() {
    return this._ttsConfig;
  }
  public putTtsConfig(value: GoogleDialogflowConversationProfileTtsConfig) {
    this._ttsConfig.internalValue = value;
  }
  public resetTtsConfig() {
    this._ttsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsConfigInput() {
    return this._ttsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      automated_agent_config: googleDialogflowConversationProfileAutomatedAgentConfigToTerraform(this._automatedAgentConfig.internalValue),
      human_agent_assistant_config: googleDialogflowConversationProfileHumanAgentAssistantConfigToTerraform(this._humanAgentAssistantConfig.internalValue),
      human_agent_handoff_config: googleDialogflowConversationProfileHumanAgentHandoffConfigToTerraform(this._humanAgentHandoffConfig.internalValue),
      logging_config: googleDialogflowConversationProfileLoggingConfigToTerraform(this._loggingConfig.internalValue),
      new_message_event_notification_config: googleDialogflowConversationProfileNewMessageEventNotificationConfigToTerraform(this._newMessageEventNotificationConfig.internalValue),
      notification_config: googleDialogflowConversationProfileNotificationConfigToTerraform(this._notificationConfig.internalValue),
      stt_config: googleDialogflowConversationProfileSttConfigToTerraform(this._sttConfig.internalValue),
      timeouts: googleDialogflowConversationProfileTimeoutsToTerraform(this._timeouts.internalValue),
      tts_config: googleDialogflowConversationProfileTtsConfigToTerraform(this._ttsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
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
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automated_agent_config: {
        value: googleDialogflowConversationProfileAutomatedAgentConfigToHclTerraform(this._automatedAgentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileAutomatedAgentConfigList",
      },
      human_agent_assistant_config: {
        value: googleDialogflowConversationProfileHumanAgentAssistantConfigToHclTerraform(this._humanAgentAssistantConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileHumanAgentAssistantConfigList",
      },
      human_agent_handoff_config: {
        value: googleDialogflowConversationProfileHumanAgentHandoffConfigToHclTerraform(this._humanAgentHandoffConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileHumanAgentHandoffConfigList",
      },
      logging_config: {
        value: googleDialogflowConversationProfileLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileLoggingConfigList",
      },
      new_message_event_notification_config: {
        value: googleDialogflowConversationProfileNewMessageEventNotificationConfigToHclTerraform(this._newMessageEventNotificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileNewMessageEventNotificationConfigList",
      },
      notification_config: {
        value: googleDialogflowConversationProfileNotificationConfigToHclTerraform(this._notificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileNotificationConfigList",
      },
      stt_config: {
        value: googleDialogflowConversationProfileSttConfigToHclTerraform(this._sttConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileSttConfigList",
      },
      timeouts: {
        value: googleDialogflowConversationProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowConversationProfileTimeouts",
      },
      tts_config: {
        value: googleDialogflowConversationProfileTtsConfigToHclTerraform(this._ttsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowConversationProfileTtsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
