// https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDialogflowCxPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the page, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#display_name GoogleDialogflowCxPage#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#id GoogleDialogflowCxPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The language of the following fields in page:
  * 
  * Page.entry_fulfillment.messages
  * Page.entry_fulfillment.conditional_cases
  * Page.event_handlers.trigger_fulfillment.messages
  * Page.event_handlers.trigger_fulfillment.conditional_cases
  * Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
  * Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
  * Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
  * Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
  * Page.transition_routes.trigger_fulfillment.messages
  * Page.transition_routes.trigger_fulfillment.conditional_cases
  * If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#language_code GoogleDialogflowCxPage#language_code}
  */
  readonly languageCode?: string;
  /**
  * The flow to create a page for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#parent GoogleDialogflowCxPage#parent}
  */
  readonly parent?: string;
  /**
  * Ordered list of TransitionRouteGroups associated with the page. Transition route groups must be unique within a page.
  * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes.
  * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
  * Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#transition_route_groups GoogleDialogflowCxPage#transition_route_groups}
  */
  readonly transitionRouteGroups?: string[];
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#advanced_settings GoogleDialogflowCxPage#advanced_settings}
  */
  readonly advancedSettings?: GoogleDialogflowCxPageAdvancedSettings;
  /**
  * entry_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#entry_fulfillment GoogleDialogflowCxPage#entry_fulfillment}
  */
  readonly entryFulfillment?: GoogleDialogflowCxPageEntryFulfillment;
  /**
  * event_handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#event_handlers GoogleDialogflowCxPage#event_handlers}
  */
  readonly eventHandlers?: GoogleDialogflowCxPageEventHandlers[] | cdktf.IResolvable;
  /**
  * form block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#form GoogleDialogflowCxPage#form}
  */
  readonly form?: GoogleDialogflowCxPageForm;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#timeouts GoogleDialogflowCxPage#timeouts}
  */
  readonly timeouts?: GoogleDialogflowCxPageTimeouts;
  /**
  * transition_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#transition_routes GoogleDialogflowCxPage#transition_routes}
  */
  readonly transitionRoutes?: GoogleDialogflowCxPageTransitionRoutes[] | cdktf.IResolvable;
}
export interface GoogleDialogflowCxPageAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#enabled GoogleDialogflowCxPage#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#finish_digit GoogleDialogflowCxPage#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#max_digits GoogleDialogflowCxPage#max_digits}
  */
  readonly maxDigits?: number;
}

export function googleDialogflowCxPageAdvancedSettingsDtmfSettingsToTerraform(struct?: GoogleDialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxPageAdvancedSettingsDtmfSettings): any {
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


export function googleDialogflowCxPageAdvancedSettingsDtmfSettingsToHclTerraform(struct?: GoogleDialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxPageAdvancedSettingsDtmfSettings): any {
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

export class GoogleDialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageAdvancedSettingsDtmfSettings | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageAdvancedSettingsDtmfSettings | undefined) {
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
export interface GoogleDialogflowCxPageAdvancedSettings {
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#dtmf_settings GoogleDialogflowCxPage#dtmf_settings}
  */
  readonly dtmfSettings?: GoogleDialogflowCxPageAdvancedSettingsDtmfSettings;
}

export function googleDialogflowCxPageAdvancedSettingsToTerraform(struct?: GoogleDialogflowCxPageAdvancedSettingsOutputReference | GoogleDialogflowCxPageAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dtmf_settings: googleDialogflowCxPageAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
  }
}


export function googleDialogflowCxPageAdvancedSettingsToHclTerraform(struct?: GoogleDialogflowCxPageAdvancedSettingsOutputReference | GoogleDialogflowCxPageAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dtmf_settings: {
      value: googleDialogflowCxPageAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageAdvancedSettingsDtmfSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dtmfSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dtmfSettings.internalValue = value.dtmfSettings;
    }
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new GoogleDialogflowCxPageAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: GoogleDialogflowCxPageAdvancedSettingsDtmfSettings) {
    this._dtmfSettings.internalValue = value;
  }
  public resetDtmfSettings() {
    this._dtmfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSettingsInput() {
    return this._dtmfSettings.internalValue;
  }
}
export interface GoogleDialogflowCxPageEntryFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#cases GoogleDialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function googleDialogflowCxPageEntryFulfillmentConditionalCasesToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function googleDialogflowCxPageEntryFulfillmentConditionalCasesToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageEntryFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageEntryFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageEntryFulfillmentConditionalCasesOutputReference {
    return new GoogleDialogflowCxPageEntryFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccess): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccess | undefined) {
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
export interface GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#ssml GoogleDialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string;
}

export function googleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioText): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioText | undefined) {
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
export interface GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#audio_uri GoogleDialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function googleDialogflowCxPageEntryFulfillmentMessagesPlayAudioToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function googleDialogflowCxPageEntryFulfillmentMessagesPlayAudioToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudio): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudio | undefined) {
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
export interface GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#phone_number GoogleDialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function googleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function googleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface GoogleDialogflowCxPageEntryFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function googleDialogflowCxPageEntryFulfillmentMessagesTextToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function googleDialogflowCxPageEntryFulfillmentMessagesTextToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageEntryFulfillmentMessagesText): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentMessagesText | undefined) {
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
export interface GoogleDialogflowCxPageEntryFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#channel GoogleDialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#payload GoogleDialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conversation_success GoogleDialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#live_agent_handoff GoogleDialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#output_audio_text GoogleDialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#play_audio GoogleDialogflowCxPage#play_audio}
  */
  readonly playAudio?: GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#telephony_transfer_call GoogleDialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: GoogleDialogflowCxPageEntryFulfillmentMessagesText;
}

export function googleDialogflowCxPageEntryFulfillmentMessagesToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: googleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: googleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: googleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: googleDialogflowCxPageEntryFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: googleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: googleDialogflowCxPageEntryFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageEntryFulfillmentMessagesToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: googleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: googleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: googleDialogflowCxPageEntryFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: googleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: googleDialogflowCxPageEntryFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: GoogleDialogflowCxPageEntryFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: GoogleDialogflowCxPageEntryFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: GoogleDialogflowCxPageEntryFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: GoogleDialogflowCxPageEntryFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: GoogleDialogflowCxPageEntryFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new GoogleDialogflowCxPageEntryFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: GoogleDialogflowCxPageEntryFulfillmentMessagesText) {
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

export class GoogleDialogflowCxPageEntryFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageEntryFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference {
    return new GoogleDialogflowCxPageEntryFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageEntryFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#parameter GoogleDialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#value GoogleDialogflowCxPage#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxPageEntryFulfillmentSetParameterActionsToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleDialogflowCxPageEntryFulfillmentSetParameterActionsToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageEntryFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageEntryFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageEntryFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageEntryFulfillmentSetParameterActionsOutputReference {
    return new GoogleDialogflowCxPageEntryFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageEntryFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conditional_cases GoogleDialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: GoogleDialogflowCxPageEntryFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}
  */
  readonly messages?: GoogleDialogflowCxPageEntryFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#set_parameter_actions GoogleDialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: GoogleDialogflowCxPageEntryFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function googleDialogflowCxPageEntryFulfillmentToTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentOutputReference | GoogleDialogflowCxPageEntryFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(googleDialogflowCxPageEntryFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(googleDialogflowCxPageEntryFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(googleDialogflowCxPageEntryFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function googleDialogflowCxPageEntryFulfillmentToHclTerraform(struct?: GoogleDialogflowCxPageEntryFulfillmentOutputReference | GoogleDialogflowCxPageEntryFulfillment): any {
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
      value: cdktf.listMapperHcl(googleDialogflowCxPageEntryFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageEntryFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageEntryFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEntryFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageEntryFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEntryFulfillment | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEntryFulfillment | undefined) {
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
  private _conditionalCases = new GoogleDialogflowCxPageEntryFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: GoogleDialogflowCxPageEntryFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new GoogleDialogflowCxPageEntryFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleDialogflowCxPageEntryFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new GoogleDialogflowCxPageEntryFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: GoogleDialogflowCxPageEntryFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#cases GoogleDialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesOutputReference {
    return new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined) {
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
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#ssml GoogleDialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined) {
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
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#audio_uri GoogleDialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined) {
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
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#phone_number GoogleDialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText | undefined) {
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
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#channel GoogleDialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#payload GoogleDialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conversation_success GoogleDialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#live_agent_handoff GoogleDialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#output_audio_text GoogleDialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#play_audio GoogleDialogflowCxPage#play_audio}
  */
  readonly playAudio?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#telephony_transfer_call GoogleDialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesText) {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference {
    return new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#parameter GoogleDialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#value GoogleDialogflowCxPage#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsOutputReference {
    return new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conditional_cases GoogleDialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}
  */
  readonly messages?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#set_parameter_actions GoogleDialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function googleDialogflowCxPageEventHandlersTriggerFulfillmentToTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(googleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(googleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function googleDialogflowCxPageEventHandlersTriggerFulfillmentToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference | GoogleDialogflowCxPageEventHandlersTriggerFulfillment): any {
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
      value: cdktf.listMapperHcl(googleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageEventHandlersTriggerFulfillment | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillment | undefined) {
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
  private _conditionalCases = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface GoogleDialogflowCxPageEventHandlers {
  /**
  * The name of the event to handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#event GoogleDialogflowCxPage#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#target_flow GoogleDialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#target_page GoogleDialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#trigger_fulfillment GoogleDialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: GoogleDialogflowCxPageEventHandlersTriggerFulfillment;
}

export function googleDialogflowCxPageEventHandlersToTerraform(struct?: GoogleDialogflowCxPageEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: googleDialogflowCxPageEventHandlersTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function googleDialogflowCxPageEventHandlersToHclTerraform(struct?: GoogleDialogflowCxPageEventHandlers | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageEventHandlersTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageEventHandlersTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageEventHandlersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageEventHandlers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageEventHandlers | cdktf.IResolvable | undefined) {
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
  private _triggerFulfillment = new GoogleDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: GoogleDialogflowCxPageEventHandlersTriggerFulfillment) {
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

export class GoogleDialogflowCxPageEventHandlersList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageEventHandlers[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageEventHandlersOutputReference {
    return new GoogleDialogflowCxPageEventHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#enabled GoogleDialogflowCxPage#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#finish_digit GoogleDialogflowCxPage#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#max_digits GoogleDialogflowCxPage#max_digits}
  */
  readonly maxDigits?: number;
}

export function googleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToTerraform(struct?: GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettings): any {
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


export function googleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference | GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettings): any {
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

export class GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettings | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettings | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersAdvancedSettings {
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#dtmf_settings GoogleDialogflowCxPage#dtmf_settings}
  */
  readonly dtmfSettings?: GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettings;
}

export function googleDialogflowCxPageFormParametersAdvancedSettingsToTerraform(struct?: GoogleDialogflowCxPageFormParametersAdvancedSettingsOutputReference | GoogleDialogflowCxPageFormParametersAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dtmf_settings: googleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
  }
}


export function googleDialogflowCxPageFormParametersAdvancedSettingsToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersAdvancedSettingsOutputReference | GoogleDialogflowCxPageFormParametersAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dtmf_settings: {
      value: googleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dtmfSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dtmfSettings.internalValue = value.dtmfSettings;
    }
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: GoogleDialogflowCxPageFormParametersAdvancedSettingsDtmfSettings) {
    this._dtmfSettings.internalValue = value;
  }
  public resetDtmfSettings() {
    this._dtmfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSettingsInput() {
    return this._dtmfSettings.internalValue;
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#cases GoogleDialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesOutputReference {
    return new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#ssml GoogleDialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#audio_uri GoogleDialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#phone_number GoogleDialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#channel GoogleDialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#payload GoogleDialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conversation_success GoogleDialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#live_agent_handoff GoogleDialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#output_audio_text GoogleDialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#play_audio GoogleDialogflowCxPage#play_audio}
  */
  readonly playAudio?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#telephony_transfer_call GoogleDialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText) {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference {
    return new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#parameter GoogleDialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#value GoogleDialogflowCxPage#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsOutputReference {
    return new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conditional_cases GoogleDialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}
  */
  readonly messages?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#set_parameter_actions GoogleDialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment): any {
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
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment | undefined) {
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
  private _conditionalCases = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#cases GoogleDialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesOutputReference {
    return new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#ssml GoogleDialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#audio_uri GoogleDialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#phone_number GoogleDialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText | undefined) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#channel GoogleDialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#payload GoogleDialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conversation_success GoogleDialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#live_agent_handoff GoogleDialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#output_audio_text GoogleDialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#play_audio GoogleDialogflowCxPage#play_audio}
  */
  readonly playAudio?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#telephony_transfer_call GoogleDialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesText) {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputReference {
    return new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#parameter GoogleDialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#value GoogleDialogflowCxPage#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsOutputReference {
    return new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conditional_cases GoogleDialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}
  */
  readonly messages?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#set_parameter_actions GoogleDialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference | GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment): any {
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
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment | undefined) {
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
  private _conditionalCases = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers {
  /**
  * The name of the event to handle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#event GoogleDialogflowCxPage#event}
  */
  readonly event?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#target_flow GoogleDialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#target_page GoogleDialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#trigger_fulfillment GoogleDialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment;
}

export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers | cdktf.IResolvable | undefined) {
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
  private _triggerFulfillment = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersTriggerFulfillment) {
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

export class GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersOutputReference {
    return new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageFormParametersFillBehavior {
  /**
  * initial_prompt_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#initial_prompt_fulfillment GoogleDialogflowCxPage#initial_prompt_fulfillment}
  */
  readonly initialPromptFulfillment?: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment;
  /**
  * reprompt_event_handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#reprompt_event_handlers GoogleDialogflowCxPage#reprompt_event_handlers}
  */
  readonly repromptEventHandlers?: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers[] | cdktf.IResolvable;
}

export function googleDialogflowCxPageFormParametersFillBehaviorToTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference | GoogleDialogflowCxPageFormParametersFillBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_prompt_fulfillment: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToTerraform(struct!.initialPromptFulfillment),
    reprompt_event_handlers: cdktf.listMapper(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToTerraform, true)(struct!.repromptEventHandlers),
  }
}


export function googleDialogflowCxPageFormParametersFillBehaviorToHclTerraform(struct?: GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference | GoogleDialogflowCxPageFormParametersFillBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_prompt_fulfillment: {
      value: googleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentToHclTerraform(struct!.initialPromptFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentList",
    },
    reprompt_event_handlers: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersToHclTerraform, true)(struct!.repromptEventHandlers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageFormParametersFillBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialPromptFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialPromptFulfillment = this._initialPromptFulfillment?.internalValue;
    }
    if (this._repromptEventHandlers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repromptEventHandlers = this._repromptEventHandlers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParametersFillBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initialPromptFulfillment.internalValue = undefined;
      this._repromptEventHandlers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initialPromptFulfillment.internalValue = value.initialPromptFulfillment;
      this._repromptEventHandlers.internalValue = value.repromptEventHandlers;
    }
  }

  // initial_prompt_fulfillment - computed: false, optional: true, required: false
  private _initialPromptFulfillment = new GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference(this, "initial_prompt_fulfillment");
  public get initialPromptFulfillment() {
    return this._initialPromptFulfillment;
  }
  public putInitialPromptFulfillment(value: GoogleDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment) {
    this._initialPromptFulfillment.internalValue = value;
  }
  public resetInitialPromptFulfillment() {
    this._initialPromptFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPromptFulfillmentInput() {
    return this._initialPromptFulfillment.internalValue;
  }

  // reprompt_event_handlers - computed: false, optional: true, required: false
  private _repromptEventHandlers = new GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlersList(this, "reprompt_event_handlers", false);
  public get repromptEventHandlers() {
    return this._repromptEventHandlers;
  }
  public putRepromptEventHandlers(value: GoogleDialogflowCxPageFormParametersFillBehaviorRepromptEventHandlers[] | cdktf.IResolvable) {
    this._repromptEventHandlers.internalValue = value;
  }
  public resetRepromptEventHandlers() {
    this._repromptEventHandlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repromptEventHandlersInput() {
    return this._repromptEventHandlers.internalValue;
  }
}
export interface GoogleDialogflowCxPageFormParameters {
  /**
  * The default value of an optional parameter. If the parameter is required, the default value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#default_value GoogleDialogflowCxPage#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The human-readable name of the parameter, unique within the form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#display_name GoogleDialogflowCxPage#display_name}
  */
  readonly displayName?: string;
  /**
  * The entity type of the parameter.
  * Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#entity_type GoogleDialogflowCxPage#entity_type}
  */
  readonly entityType?: string;
  /**
  * Indicates whether the parameter represents a list of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#is_list GoogleDialogflowCxPage#is_list}
  */
  readonly isList?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter content should be redacted in log.
  * If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#redact GoogleDialogflowCxPage#redact}
  */
  readonly redact?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
  * Required parameters must be filled before form filling concludes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#required GoogleDialogflowCxPage#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#advanced_settings GoogleDialogflowCxPage#advanced_settings}
  */
  readonly advancedSettings?: GoogleDialogflowCxPageFormParametersAdvancedSettings;
  /**
  * fill_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#fill_behavior GoogleDialogflowCxPage#fill_behavior}
  */
  readonly fillBehavior?: GoogleDialogflowCxPageFormParametersFillBehavior;
}

export function googleDialogflowCxPageFormParametersToTerraform(struct?: GoogleDialogflowCxPageFormParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    is_list: cdktf.booleanToTerraform(struct!.isList),
    redact: cdktf.booleanToTerraform(struct!.redact),
    required: cdktf.booleanToTerraform(struct!.required),
    advanced_settings: googleDialogflowCxPageFormParametersAdvancedSettingsToTerraform(struct!.advancedSettings),
    fill_behavior: googleDialogflowCxPageFormParametersFillBehaviorToTerraform(struct!.fillBehavior),
  }
}


export function googleDialogflowCxPageFormParametersToHclTerraform(struct?: GoogleDialogflowCxPageFormParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_list: {
      value: cdktf.booleanToHclTerraform(struct!.isList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redact: {
      value: cdktf.booleanToHclTerraform(struct!.redact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced_settings: {
      value: googleDialogflowCxPageFormParametersAdvancedSettingsToHclTerraform(struct!.advancedSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersAdvancedSettingsList",
    },
    fill_behavior: {
      value: googleDialogflowCxPageFormParametersFillBehaviorToHclTerraform(struct!.fillBehavior),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersFillBehaviorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageFormParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._isList !== undefined) {
      hasAnyValues = true;
      internalValueResult.isList = this._isList;
    }
    if (this._redact !== undefined) {
      hasAnyValues = true;
      internalValueResult.redact = this._redact;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._advancedSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSettings = this._advancedSettings?.internalValue;
    }
    if (this._fillBehavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillBehavior = this._fillBehavior?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageFormParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._displayName = undefined;
      this._entityType = undefined;
      this._isList = undefined;
      this._redact = undefined;
      this._required = undefined;
      this._advancedSettings.internalValue = undefined;
      this._fillBehavior.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._displayName = value.displayName;
      this._entityType = value.entityType;
      this._isList = value.isList;
      this._redact = value.redact;
      this._required = value.required;
      this._advancedSettings.internalValue = value.advancedSettings;
      this._fillBehavior.internalValue = value.fillBehavior;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // is_list - computed: false, optional: true, required: false
  private _isList?: boolean | cdktf.IResolvable; 
  public get isList() {
    return this.getBooleanAttribute('is_list');
  }
  public set isList(value: boolean | cdktf.IResolvable) {
    this._isList = value;
  }
  public resetIsList() {
    this._isList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isListInput() {
    return this._isList;
  }

  // redact - computed: false, optional: true, required: false
  private _redact?: boolean | cdktf.IResolvable; 
  public get redact() {
    return this.getBooleanAttribute('redact');
  }
  public set redact(value: boolean | cdktf.IResolvable) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new GoogleDialogflowCxPageFormParametersAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: GoogleDialogflowCxPageFormParametersAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // fill_behavior - computed: false, optional: true, required: false
  private _fillBehavior = new GoogleDialogflowCxPageFormParametersFillBehaviorOutputReference(this, "fill_behavior");
  public get fillBehavior() {
    return this._fillBehavior;
  }
  public putFillBehavior(value: GoogleDialogflowCxPageFormParametersFillBehavior) {
    this._fillBehavior.internalValue = value;
  }
  public resetFillBehavior() {
    this._fillBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillBehaviorInput() {
    return this._fillBehavior.internalValue;
  }
}

export class GoogleDialogflowCxPageFormParametersList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageFormParameters[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageFormParametersOutputReference {
    return new GoogleDialogflowCxPageFormParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageForm {
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#parameters GoogleDialogflowCxPage#parameters}
  */
  readonly parameters?: GoogleDialogflowCxPageFormParameters[] | cdktf.IResolvable;
}

export function googleDialogflowCxPageFormToTerraform(struct?: GoogleDialogflowCxPageFormOutputReference | GoogleDialogflowCxPageForm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(googleDialogflowCxPageFormParametersToTerraform, true)(struct!.parameters),
  }
}


export function googleDialogflowCxPageFormToHclTerraform(struct?: GoogleDialogflowCxPageFormOutputReference | GoogleDialogflowCxPageForm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageFormParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageFormParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageFormOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageForm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageForm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters.internalValue = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoogleDialogflowCxPageFormParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoogleDialogflowCxPageFormParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface GoogleDialogflowCxPageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#create GoogleDialogflowCxPage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#delete GoogleDialogflowCxPage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#update GoogleDialogflowCxPage#update}
  */
  readonly update?: string;
}

export function googleDialogflowCxPageTimeoutsToTerraform(struct?: GoogleDialogflowCxPageTimeouts | cdktf.IResolvable): any {
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


export function googleDialogflowCxPageTimeoutsToHclTerraform(struct?: GoogleDialogflowCxPageTimeouts | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDialogflowCxPageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases {
  /**
  * A JSON encoded list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#cases GoogleDialogflowCxPage#cases}
  */
  readonly cases?: string;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cases: cdktf.stringToTerraform(struct!.cases),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference {
    return new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess | undefined) {
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
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff {
  /**
  * Custom metadata. Dialogflow doesn't impose any structure on this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#metadata GoogleDialogflowCxPage#metadata}
  */
  readonly metadata?: string;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.stringToTerraform(struct!.metadata),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff | undefined) {
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
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText {
  /**
  * The SSML text to be synthesized. For more information, see SSML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#ssml GoogleDialogflowCxPage#ssml}
  */
  readonly ssml?: string;
  /**
  * The raw text to be synthesized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssml: cdktf.stringToTerraform(struct!.ssml),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText | undefined) {
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
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio {
  /**
  * URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#audio_uri GoogleDialogflowCxPage#audio_uri}
  */
  readonly audioUri: string;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_uri: cdktf.stringToTerraform(struct!.audioUri),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioUri = this._audioUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio | undefined) {
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
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall {
  /**
  * Transfer the call to a phone number in E.164 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#phone_number GoogleDialogflowCxPage#phone_number}
  */
  readonly phoneNumber: string;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall | undefined) {
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
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: string[];
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText | undefined) {
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
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages {
  /**
  * The channel which the response is associated with. Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#channel GoogleDialogflowCxPage#channel}
  */
  readonly channel?: string;
  /**
  * A custom, platform-specific payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#payload GoogleDialogflowCxPage#payload}
  */
  readonly payload?: string;
  /**
  * conversation_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conversation_success GoogleDialogflowCxPage#conversation_success}
  */
  readonly conversationSuccess?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
  /**
  * live_agent_handoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#live_agent_handoff GoogleDialogflowCxPage#live_agent_handoff}
  */
  readonly liveAgentHandoff?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
  /**
  * output_audio_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#output_audio_text GoogleDialogflowCxPage#output_audio_text}
  */
  readonly outputAudioText?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
  /**
  * play_audio block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#play_audio GoogleDialogflowCxPage#play_audio}
  */
  readonly playAudio?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
  /**
  * telephony_transfer_call block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#telephony_transfer_call GoogleDialogflowCxPage#telephony_transfer_call}
  */
  readonly telephonyTransferCall?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#text GoogleDialogflowCxPage#text}
  */
  readonly text?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    payload: cdktf.stringToTerraform(struct!.payload),
    conversation_success: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToTerraform(struct!.conversationSuccess),
    live_agent_handoff: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToTerraform(struct!.liveAgentHandoff),
    output_audio_text: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToTerraform(struct!.outputAudioText),
    play_audio: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToTerraform(struct!.playAudio),
    telephony_transfer_call: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToTerraform(struct!.telephonyTransferCall),
    text: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToTerraform(struct!.text),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessToHclTerraform(struct!.conversationSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessList",
    },
    live_agent_handoff: {
      value: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffToHclTerraform(struct!.liveAgentHandoff),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffList",
    },
    output_audio_text: {
      value: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextToHclTerraform(struct!.outputAudioText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextList",
    },
    play_audio: {
      value: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioToHclTerraform(struct!.playAudio),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioList",
    },
    telephony_transfer_call: {
      value: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallToHclTerraform(struct!.telephonyTransferCall),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallList",
    },
    text: {
      value: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | cdktf.IResolvable | undefined) {
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
  private _conversationSuccess = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference(this, "conversation_success");
  public get conversationSuccess() {
    return this._conversationSuccess;
  }
  public putConversationSuccess(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesConversationSuccess) {
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
  private _liveAgentHandoff = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(this, "live_agent_handoff");
  public get liveAgentHandoff() {
    return this._liveAgentHandoff;
  }
  public putLiveAgentHandoff(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff) {
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
  private _outputAudioText = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference(this, "output_audio_text");
  public get outputAudioText() {
    return this._outputAudioText;
  }
  public putOutputAudioText(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputAudioText) {
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
  private _playAudio = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference(this, "play_audio");
  public get playAudio() {
    return this._playAudio;
  }
  public putPlayAudio(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesPlayAudio) {
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
  private _telephonyTransferCall = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(this, "telephony_transfer_call");
  public get telephonyTransferCall() {
    return this._telephonyTransferCall;
  }
  public putTelephonyTransferCall(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall) {
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
  private _text = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText) {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference {
    return new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions {
  /**
  * Display name of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#parameter GoogleDialogflowCxPage#parameter}
  */
  readonly parameter?: string;
  /**
  * The new JSON-encoded value of the parameter. A null value clears the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#value GoogleDialogflowCxPage#value}
  */
  readonly value?: string;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: cdktf.stringToTerraform(struct!.parameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable): any {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions | cdktf.IResolvable | undefined) {
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

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference {
    return new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment {
  /**
  * Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#return_partial_responses GoogleDialogflowCxPage#return_partial_responses}
  */
  readonly returnPartialResponses?: boolean | cdktf.IResolvable;
  /**
  * The tag used by the webhook to identify which fulfillment is being called. This field is required if webhook is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#tag GoogleDialogflowCxPage#tag}
  */
  readonly tag?: string;
  /**
  * The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#webhook GoogleDialogflowCxPage#webhook}
  */
  readonly webhook?: string;
  /**
  * conditional_cases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#conditional_cases GoogleDialogflowCxPage#conditional_cases}
  */
  readonly conditionalCases?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#messages GoogleDialogflowCxPage#messages}
  */
  readonly messages?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable;
  /**
  * set_parameter_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#set_parameter_actions GoogleDialogflowCxPage#set_parameter_actions}
  */
  readonly setParameterActions?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable;
}

export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_partial_responses: cdktf.booleanToTerraform(struct!.returnPartialResponses),
    tag: cdktf.stringToTerraform(struct!.tag),
    webhook: cdktf.stringToTerraform(struct!.webhook),
    conditional_cases: cdktf.listMapper(googleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToTerraform, true)(struct!.conditionalCases),
    messages: cdktf.listMapper(googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToTerraform, true)(struct!.messages),
    set_parameter_actions: cdktf.listMapper(googleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToTerraform, true)(struct!.setParameterActions),
  }
}


export function googleDialogflowCxPageTransitionRoutesTriggerFulfillmentToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference | GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment): any {
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
      value: cdktf.listMapperHcl(googleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesToHclTerraform, true)(struct!.conditionalCases),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesList",
    },
    messages: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesToHclTerraform, true)(struct!.messages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList",
    },
    set_parameter_actions: {
      value: cdktf.listMapperHcl(googleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsToHclTerraform, true)(struct!.setParameterActions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment | undefined) {
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
  private _conditionalCases = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCasesList(this, "conditional_cases", false);
  public get conditionalCases() {
    return this._conditionalCases;
  }
  public putConditionalCases(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentConditionalCases[] | cdktf.IResolvable) {
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
  private _messages = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[] | cdktf.IResolvable) {
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
  private _setParameterActions = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActionsList(this, "set_parameter_actions", false);
  public get setParameterActions() {
    return this._setParameterActions;
  }
  public putSetParameterActions(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentSetParameterActions[] | cdktf.IResolvable) {
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
export interface GoogleDialogflowCxPageTransitionRoutes {
  /**
  * The condition to evaluate against form parameters or session parameters.
  * At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#condition GoogleDialogflowCxPage#condition}
  */
  readonly condition?: string;
  /**
  * The unique identifier of an Intent.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#intent GoogleDialogflowCxPage#intent}
  */
  readonly intent?: string;
  /**
  * The target flow to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#target_flow GoogleDialogflowCxPage#target_flow}
  */
  readonly targetFlow?: string;
  /**
  * The target page to transition to.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#target_page GoogleDialogflowCxPage#target_page}
  */
  readonly targetPage?: string;
  /**
  * trigger_fulfillment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#trigger_fulfillment GoogleDialogflowCxPage#trigger_fulfillment}
  */
  readonly triggerFulfillment?: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment;
}

export function googleDialogflowCxPageTransitionRoutesToTerraform(struct?: GoogleDialogflowCxPageTransitionRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    intent: cdktf.stringToTerraform(struct!.intent),
    target_flow: cdktf.stringToTerraform(struct!.targetFlow),
    target_page: cdktf.stringToTerraform(struct!.targetPage),
    trigger_fulfillment: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentToTerraform(struct!.triggerFulfillment),
  }
}


export function googleDialogflowCxPageTransitionRoutesToHclTerraform(struct?: GoogleDialogflowCxPageTransitionRoutes | cdktf.IResolvable): any {
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
      value: googleDialogflowCxPageTransitionRoutesTriggerFulfillmentToHclTerraform(struct!.triggerFulfillment),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDialogflowCxPageTransitionRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDialogflowCxPageTransitionRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDialogflowCxPageTransitionRoutes | cdktf.IResolvable | undefined) {
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
  private _triggerFulfillment = new GoogleDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference(this, "trigger_fulfillment");
  public get triggerFulfillment() {
    return this._triggerFulfillment;
  }
  public putTriggerFulfillment(value: GoogleDialogflowCxPageTransitionRoutesTriggerFulfillment) {
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

export class GoogleDialogflowCxPageTransitionRoutesList extends cdktf.ComplexList {
  public internalValue? : GoogleDialogflowCxPageTransitionRoutes[] | cdktf.IResolvable

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
  public get(index: number): GoogleDialogflowCxPageTransitionRoutesOutputReference {
    return new GoogleDialogflowCxPageTransitionRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page google_dialogflow_cx_page}
*/
export class GoogleDialogflowCxPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDialogflowCxPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDialogflowCxPage to import
  * @param importFromId The id of the existing GoogleDialogflowCxPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDialogflowCxPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dialogflow_cx_page google_dialogflow_cx_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDialogflowCxPageConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDialogflowCxPageConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_page',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.16.0',
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
    this._parent = config.parent;
    this._transitionRouteGroups = config.transitionRouteGroups;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._entryFulfillment.internalValue = config.entryFulfillment;
    this._eventHandlers.internalValue = config.eventHandlers;
    this._form.internalValue = config.form;
    this._timeouts.internalValue = config.timeouts;
    this._transitionRoutes.internalValue = config.transitionRoutes;
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
  private _advancedSettings = new GoogleDialogflowCxPageAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: GoogleDialogflowCxPageAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // entry_fulfillment - computed: false, optional: true, required: false
  private _entryFulfillment = new GoogleDialogflowCxPageEntryFulfillmentOutputReference(this, "entry_fulfillment");
  public get entryFulfillment() {
    return this._entryFulfillment;
  }
  public putEntryFulfillment(value: GoogleDialogflowCxPageEntryFulfillment) {
    this._entryFulfillment.internalValue = value;
  }
  public resetEntryFulfillment() {
    this._entryFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFulfillmentInput() {
    return this._entryFulfillment.internalValue;
  }

  // event_handlers - computed: false, optional: true, required: false
  private _eventHandlers = new GoogleDialogflowCxPageEventHandlersList(this, "event_handlers", false);
  public get eventHandlers() {
    return this._eventHandlers;
  }
  public putEventHandlers(value: GoogleDialogflowCxPageEventHandlers[] | cdktf.IResolvable) {
    this._eventHandlers.internalValue = value;
  }
  public resetEventHandlers() {
    this._eventHandlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlersInput() {
    return this._eventHandlers.internalValue;
  }

  // form - computed: false, optional: true, required: false
  private _form = new GoogleDialogflowCxPageFormOutputReference(this, "form");
  public get form() {
    return this._form;
  }
  public putForm(value: GoogleDialogflowCxPageForm) {
    this._form.internalValue = value;
  }
  public resetForm() {
    this._form.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formInput() {
    return this._form.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDialogflowCxPageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDialogflowCxPageTimeouts) {
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
  private _transitionRoutes = new GoogleDialogflowCxPageTransitionRoutesList(this, "transition_routes", false);
  public get transitionRoutes() {
    return this._transitionRoutes;
  }
  public putTransitionRoutes(value: GoogleDialogflowCxPageTransitionRoutes[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      parent: cdktf.stringToTerraform(this._parent),
      transition_route_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitionRouteGroups),
      advanced_settings: googleDialogflowCxPageAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      entry_fulfillment: googleDialogflowCxPageEntryFulfillmentToTerraform(this._entryFulfillment.internalValue),
      event_handlers: cdktf.listMapper(googleDialogflowCxPageEventHandlersToTerraform, true)(this._eventHandlers.internalValue),
      form: googleDialogflowCxPageFormToTerraform(this._form.internalValue),
      timeouts: googleDialogflowCxPageTimeoutsToTerraform(this._timeouts.internalValue),
      transition_routes: cdktf.listMapper(googleDialogflowCxPageTransitionRoutesToTerraform, true)(this._transitionRoutes.internalValue),
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
        value: googleDialogflowCxPageAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxPageAdvancedSettingsList",
      },
      entry_fulfillment: {
        value: googleDialogflowCxPageEntryFulfillmentToHclTerraform(this._entryFulfillment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxPageEntryFulfillmentList",
      },
      event_handlers: {
        value: cdktf.listMapperHcl(googleDialogflowCxPageEventHandlersToHclTerraform, true)(this._eventHandlers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxPageEventHandlersList",
      },
      form: {
        value: googleDialogflowCxPageFormToHclTerraform(this._form.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxPageFormList",
      },
      timeouts: {
        value: googleDialogflowCxPageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDialogflowCxPageTimeouts",
      },
      transition_routes: {
        value: cdktf.listMapperHcl(googleDialogflowCxPageTransitionRoutesToHclTerraform, true)(this._transitionRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDialogflowCxPageTransitionRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
