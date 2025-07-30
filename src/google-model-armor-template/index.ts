/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleModelArmorTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#id GoogleModelArmorTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#labels GoogleModelArmorTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#location GoogleModelArmorTemplate#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#project GoogleModelArmorTemplate#project}
  */
  readonly project?: string;
  /**
  * Id of the requesting object
  * If auto-generating Id server-side, remove this field and
  * template_id from the method_signature of Create RPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#template_id GoogleModelArmorTemplate#template_id}
  */
  readonly templateId: string;
  /**
  * filter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#filter_config GoogleModelArmorTemplate#filter_config}
  */
  readonly filterConfig: GoogleModelArmorTemplateFilterConfig;
  /**
  * template_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#template_metadata GoogleModelArmorTemplate#template_metadata}
  */
  readonly templateMetadata?: GoogleModelArmorTemplateTemplateMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#timeouts GoogleModelArmorTemplate#timeouts}
  */
  readonly timeouts?: GoogleModelArmorTemplateTimeouts;
}
export interface GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings {
  /**
  * Tells whether the Malicious URI filter is enabled or disabled.
  * Possible values:
  * ENABLED
  * DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}
  */
  readonly filterEnforcement?: string;
}

export function googleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsToTerraform(struct?: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference | GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_enforcement: cdktf.stringToTerraform(struct!.filterEnforcement),
  }
}


export function googleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference | GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.filterEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnforcement = this._filterEnforcement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterEnforcement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterEnforcement = value.filterEnforcement;
    }
  }

  // filter_enforcement - computed: false, optional: true, required: false
  private _filterEnforcement?: string; 
  public get filterEnforcement() {
    return this.getStringAttribute('filter_enforcement');
  }
  public set filterEnforcement(value: string) {
    this._filterEnforcement = value;
  }
  public resetFilterEnforcement() {
    this._filterEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnforcementInput() {
    return this._filterEnforcement;
  }
}
export interface GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings {
  /**
  * Possible values:
  * LOW_AND_ABOVE
  * MEDIUM_AND_ABOVE
  * HIGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#confidence_level GoogleModelArmorTemplate#confidence_level}
  */
  readonly confidenceLevel?: string;
  /**
  * Tells whether Prompt injection and Jailbreak filter is enabled or
  * disabled.
  * Possible values:
  * ENABLED
  * DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}
  */
  readonly filterEnforcement?: string;
}

export function googleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsToTerraform(struct?: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference | GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_level: cdktf.stringToTerraform(struct!.confidenceLevel),
    filter_enforcement: cdktf.stringToTerraform(struct!.filterEnforcement),
  }
}


export function googleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference | GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_level: {
      value: cdktf.stringToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.filterEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    if (this._filterEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnforcement = this._filterEnforcement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidenceLevel = undefined;
      this._filterEnforcement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidenceLevel = value.confidenceLevel;
      this._filterEnforcement = value.filterEnforcement;
    }
  }

  // confidence_level - computed: false, optional: true, required: false
  private _confidenceLevel?: string; 
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
  public set confidenceLevel(value: string) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }

  // filter_enforcement - computed: false, optional: true, required: false
  private _filterEnforcement?: string; 
  public get filterEnforcement() {
    return this.getStringAttribute('filter_enforcement');
  }
  public set filterEnforcement(value: string) {
    this._filterEnforcement = value;
  }
  public resetFilterEnforcement() {
    this._filterEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnforcementInput() {
    return this._filterEnforcement;
  }
}
export interface GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters {
  /**
  * Possible values:
  * LOW_AND_ABOVE
  * MEDIUM_AND_ABOVE
  * HIGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#confidence_level GoogleModelArmorTemplate#confidence_level}
  */
  readonly confidenceLevel?: string;
  /**
  * Possible values:
  * SEXUALLY_EXPLICIT
  * HATE_SPEECH
  * HARASSMENT
  * DANGEROUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#filter_type GoogleModelArmorTemplate#filter_type}
  */
  readonly filterType: string;
}

export function googleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersToTerraform(struct?: GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_level: cdktf.stringToTerraform(struct!.confidenceLevel),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
  }
}


export function googleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_level: {
      value: cdktf.stringToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceLevel = undefined;
      this._filterType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceLevel = value.confidenceLevel;
      this._filterType = value.filterType;
    }
  }

  // confidence_level - computed: false, optional: true, required: false
  private _confidenceLevel?: string; 
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
  public set confidenceLevel(value: string) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }
}

export class GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList extends cdktf.ComplexList {
  public internalValue? : GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] | cdktf.IResolvable

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
  public get(index: number): GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference {
    return new GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleModelArmorTemplateFilterConfigRaiSettings {
  /**
  * rai_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#rai_filters GoogleModelArmorTemplate#rai_filters}
  */
  readonly raiFilters: GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] | cdktf.IResolvable;
}

export function googleModelArmorTemplateFilterConfigRaiSettingsToTerraform(struct?: GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference | GoogleModelArmorTemplateFilterConfigRaiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rai_filters: cdktf.listMapper(googleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersToTerraform, true)(struct!.raiFilters),
  }
}


export function googleModelArmorTemplateFilterConfigRaiSettingsToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference | GoogleModelArmorTemplateFilterConfigRaiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rai_filters: {
      value: cdktf.listMapperHcl(googleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersToHclTerraform, true)(struct!.raiFilters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateFilterConfigRaiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raiFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raiFilters = this._raiFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfigRaiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raiFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raiFilters.internalValue = value.raiFilters;
    }
  }

  // rai_filters - computed: false, optional: false, required: true
  private _raiFilters = new GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList(this, "rai_filters", false);
  public get raiFilters() {
    return this._raiFilters;
  }
  public putRaiFilters(value: GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters[] | cdktf.IResolvable) {
    this._raiFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get raiFiltersInput() {
    return this._raiFilters.internalValue;
  }
}
export interface GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig {
  /**
  * Optional Sensitive Data Protection Deidentify template resource name.
  * If provided then DeidentifyContent action is performed during Sanitization
  * using this template and inspect template. The De-identified data will
  * be returned in SdpDeidentifyResult.
  * Note that all info-types present in the deidentify template must be present
  * in inspect template.
  * e.g.
  * 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#deidentify_template GoogleModelArmorTemplate#deidentify_template}
  */
  readonly deidentifyTemplate?: string;
  /**
  * Sensitive Data Protection inspect template resource name
  * If only inspect template is provided (de-identify template not provided),
  * then Sensitive Data Protection InspectContent action is performed during
  * Sanitization. All Sensitive Data Protection findings identified during
  * inspection will be returned as SdpFinding in SdpInsepctionResult.
  * e.g:-
  * 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#inspect_template GoogleModelArmorTemplate#inspect_template}
  */
  readonly inspectTemplate?: string;
}

export function googleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigToTerraform(struct?: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference | GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deidentify_template: cdktf.stringToTerraform(struct!.deidentifyTemplate),
    inspect_template: cdktf.stringToTerraform(struct!.inspectTemplate),
  }
}


export function googleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference | GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deidentify_template: {
      value: cdktf.stringToHclTerraform(struct!.deidentifyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_template: {
      value: cdktf.stringToHclTerraform(struct!.inspectTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deidentifyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deidentifyTemplate = this._deidentifyTemplate;
    }
    if (this._inspectTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplate = this._inspectTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deidentifyTemplate = undefined;
      this._inspectTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deidentifyTemplate = value.deidentifyTemplate;
      this._inspectTemplate = value.inspectTemplate;
    }
  }

  // deidentify_template - computed: false, optional: true, required: false
  private _deidentifyTemplate?: string; 
  public get deidentifyTemplate() {
    return this.getStringAttribute('deidentify_template');
  }
  public set deidentifyTemplate(value: string) {
    this._deidentifyTemplate = value;
  }
  public resetDeidentifyTemplate() {
    this._deidentifyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyTemplateInput() {
    return this._deidentifyTemplate;
  }

  // inspect_template - computed: false, optional: true, required: false
  private _inspectTemplate?: string; 
  public get inspectTemplate() {
    return this.getStringAttribute('inspect_template');
  }
  public set inspectTemplate(value: string) {
    this._inspectTemplate = value;
  }
  public resetInspectTemplate() {
    this._inspectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateInput() {
    return this._inspectTemplate;
  }
}
export interface GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig {
  /**
  * Tells whether the Sensitive Data Protection basic config is enabled or
  * disabled.
  * Possible values:
  * ENABLED
  * DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}
  */
  readonly filterEnforcement?: string;
}

export function googleModelArmorTemplateFilterConfigSdpSettingsBasicConfigToTerraform(struct?: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference | GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_enforcement: cdktf.stringToTerraform(struct!.filterEnforcement),
  }
}


export function googleModelArmorTemplateFilterConfigSdpSettingsBasicConfigToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference | GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.filterEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnforcement = this._filterEnforcement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterEnforcement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterEnforcement = value.filterEnforcement;
    }
  }

  // filter_enforcement - computed: false, optional: true, required: false
  private _filterEnforcement?: string; 
  public get filterEnforcement() {
    return this.getStringAttribute('filter_enforcement');
  }
  public set filterEnforcement(value: string) {
    this._filterEnforcement = value;
  }
  public resetFilterEnforcement() {
    this._filterEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnforcementInput() {
    return this._filterEnforcement;
  }
}
export interface GoogleModelArmorTemplateFilterConfigSdpSettings {
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#advanced_config GoogleModelArmorTemplate#advanced_config}
  */
  readonly advancedConfig?: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig;
  /**
  * basic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#basic_config GoogleModelArmorTemplate#basic_config}
  */
  readonly basicConfig?: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig;
}

export function googleModelArmorTemplateFilterConfigSdpSettingsToTerraform(struct?: GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference | GoogleModelArmorTemplateFilterConfigSdpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_config: googleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigToTerraform(struct!.advancedConfig),
    basic_config: googleModelArmorTemplateFilterConfigSdpSettingsBasicConfigToTerraform(struct!.basicConfig),
  }
}


export function googleModelArmorTemplateFilterConfigSdpSettingsToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference | GoogleModelArmorTemplateFilterConfigSdpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_config: {
      value: googleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigToHclTerraform(struct!.advancedConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigList",
    },
    basic_config: {
      value: googleModelArmorTemplateFilterConfigSdpSettingsBasicConfigToHclTerraform(struct!.basicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateFilterConfigSdpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfig = this._advancedConfig?.internalValue;
    }
    if (this._basicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicConfig = this._basicConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfigSdpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedConfig.internalValue = undefined;
      this._basicConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedConfig.internalValue = value.advancedConfig;
      this._basicConfig.internalValue = value.basicConfig;
    }
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // basic_config - computed: false, optional: true, required: false
  private _basicConfig = new GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference(this, "basic_config");
  public get basicConfig() {
    return this._basicConfig;
  }
  public putBasicConfig(value: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig) {
    this._basicConfig.internalValue = value;
  }
  public resetBasicConfig() {
    this._basicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicConfigInput() {
    return this._basicConfig.internalValue;
  }
}
export interface GoogleModelArmorTemplateFilterConfig {
  /**
  * malicious_uri_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#malicious_uri_filter_settings GoogleModelArmorTemplate#malicious_uri_filter_settings}
  */
  readonly maliciousUriFilterSettings?: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings;
  /**
  * pi_and_jailbreak_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#pi_and_jailbreak_filter_settings GoogleModelArmorTemplate#pi_and_jailbreak_filter_settings}
  */
  readonly piAndJailbreakFilterSettings?: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings;
  /**
  * rai_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#rai_settings GoogleModelArmorTemplate#rai_settings}
  */
  readonly raiSettings?: GoogleModelArmorTemplateFilterConfigRaiSettings;
  /**
  * sdp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#sdp_settings GoogleModelArmorTemplate#sdp_settings}
  */
  readonly sdpSettings?: GoogleModelArmorTemplateFilterConfigSdpSettings;
}

export function googleModelArmorTemplateFilterConfigToTerraform(struct?: GoogleModelArmorTemplateFilterConfigOutputReference | GoogleModelArmorTemplateFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malicious_uri_filter_settings: googleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsToTerraform(struct!.maliciousUriFilterSettings),
    pi_and_jailbreak_filter_settings: googleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsToTerraform(struct!.piAndJailbreakFilterSettings),
    rai_settings: googleModelArmorTemplateFilterConfigRaiSettingsToTerraform(struct!.raiSettings),
    sdp_settings: googleModelArmorTemplateFilterConfigSdpSettingsToTerraform(struct!.sdpSettings),
  }
}


export function googleModelArmorTemplateFilterConfigToHclTerraform(struct?: GoogleModelArmorTemplateFilterConfigOutputReference | GoogleModelArmorTemplateFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malicious_uri_filter_settings: {
      value: googleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsToHclTerraform(struct!.maliciousUriFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsList",
    },
    pi_and_jailbreak_filter_settings: {
      value: googleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsToHclTerraform(struct!.piAndJailbreakFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsList",
    },
    rai_settings: {
      value: googleModelArmorTemplateFilterConfigRaiSettingsToHclTerraform(struct!.raiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateFilterConfigRaiSettingsList",
    },
    sdp_settings: {
      value: googleModelArmorTemplateFilterConfigSdpSettingsToHclTerraform(struct!.sdpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateFilterConfigSdpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateFilterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateFilterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maliciousUriFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousUriFilterSettings = this._maliciousUriFilterSettings?.internalValue;
    }
    if (this._piAndJailbreakFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piAndJailbreakFilterSettings = this._piAndJailbreakFilterSettings?.internalValue;
    }
    if (this._raiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raiSettings = this._raiSettings?.internalValue;
    }
    if (this._sdpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdpSettings = this._sdpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateFilterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maliciousUriFilterSettings.internalValue = undefined;
      this._piAndJailbreakFilterSettings.internalValue = undefined;
      this._raiSettings.internalValue = undefined;
      this._sdpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maliciousUriFilterSettings.internalValue = value.maliciousUriFilterSettings;
      this._piAndJailbreakFilterSettings.internalValue = value.piAndJailbreakFilterSettings;
      this._raiSettings.internalValue = value.raiSettings;
      this._sdpSettings.internalValue = value.sdpSettings;
    }
  }

  // malicious_uri_filter_settings - computed: false, optional: true, required: false
  private _maliciousUriFilterSettings = new GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference(this, "malicious_uri_filter_settings");
  public get maliciousUriFilterSettings() {
    return this._maliciousUriFilterSettings;
  }
  public putMaliciousUriFilterSettings(value: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings) {
    this._maliciousUriFilterSettings.internalValue = value;
  }
  public resetMaliciousUriFilterSettings() {
    this._maliciousUriFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUriFilterSettingsInput() {
    return this._maliciousUriFilterSettings.internalValue;
  }

  // pi_and_jailbreak_filter_settings - computed: false, optional: true, required: false
  private _piAndJailbreakFilterSettings = new GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference(this, "pi_and_jailbreak_filter_settings");
  public get piAndJailbreakFilterSettings() {
    return this._piAndJailbreakFilterSettings;
  }
  public putPiAndJailbreakFilterSettings(value: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings) {
    this._piAndJailbreakFilterSettings.internalValue = value;
  }
  public resetPiAndJailbreakFilterSettings() {
    this._piAndJailbreakFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piAndJailbreakFilterSettingsInput() {
    return this._piAndJailbreakFilterSettings.internalValue;
  }

  // rai_settings - computed: false, optional: true, required: false
  private _raiSettings = new GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference(this, "rai_settings");
  public get raiSettings() {
    return this._raiSettings;
  }
  public putRaiSettings(value: GoogleModelArmorTemplateFilterConfigRaiSettings) {
    this._raiSettings.internalValue = value;
  }
  public resetRaiSettings() {
    this._raiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raiSettingsInput() {
    return this._raiSettings.internalValue;
  }

  // sdp_settings - computed: false, optional: true, required: false
  private _sdpSettings = new GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference(this, "sdp_settings");
  public get sdpSettings() {
    return this._sdpSettings;
  }
  public putSdpSettings(value: GoogleModelArmorTemplateFilterConfigSdpSettings) {
    this._sdpSettings.internalValue = value;
  }
  public resetSdpSettings() {
    this._sdpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdpSettingsInput() {
    return this._sdpSettings.internalValue;
  }
}
export interface GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection {
  /**
  * If true, multi language detection will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#enable_multi_language_detection GoogleModelArmorTemplate#enable_multi_language_detection}
  */
  readonly enableMultiLanguageDetection: boolean | cdktf.IResolvable;
}

export function googleModelArmorTemplateTemplateMetadataMultiLanguageDetectionToTerraform(struct?: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference | GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_multi_language_detection: cdktf.booleanToTerraform(struct!.enableMultiLanguageDetection),
  }
}


export function googleModelArmorTemplateTemplateMetadataMultiLanguageDetectionToHclTerraform(struct?: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference | GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_multi_language_detection: {
      value: cdktf.booleanToHclTerraform(struct!.enableMultiLanguageDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultiLanguageDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultiLanguageDetection = this._enableMultiLanguageDetection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableMultiLanguageDetection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableMultiLanguageDetection = value.enableMultiLanguageDetection;
    }
  }

  // enable_multi_language_detection - computed: false, optional: false, required: true
  private _enableMultiLanguageDetection?: boolean | cdktf.IResolvable; 
  public get enableMultiLanguageDetection() {
    return this.getBooleanAttribute('enable_multi_language_detection');
  }
  public set enableMultiLanguageDetection(value: boolean | cdktf.IResolvable) {
    this._enableMultiLanguageDetection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiLanguageDetectionInput() {
    return this._enableMultiLanguageDetection;
  }
}
export interface GoogleModelArmorTemplateTemplateMetadata {
  /**
  * Indicates the custom error code set by the user to be returned to the end
  * user if the LLM response trips Model Armor filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#custom_llm_response_safety_error_code GoogleModelArmorTemplate#custom_llm_response_safety_error_code}
  */
  readonly customLlmResponseSafetyErrorCode?: number;
  /**
  * Indicates the custom error message set by the user to be returned to the
  * end user if the LLM response trips Model Armor filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#custom_llm_response_safety_error_message GoogleModelArmorTemplate#custom_llm_response_safety_error_message}
  */
  readonly customLlmResponseSafetyErrorMessage?: string;
  /**
  * Indicates the custom error code set by the user to be returned to the end
  * user by the service extension if the prompt trips Model Armor filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#custom_prompt_safety_error_code GoogleModelArmorTemplate#custom_prompt_safety_error_code}
  */
  readonly customPromptSafetyErrorCode?: number;
  /**
  * Indicates the custom error message set by the user to be returned to the
  * end user if the prompt trips Model Armor filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#custom_prompt_safety_error_message GoogleModelArmorTemplate#custom_prompt_safety_error_message}
  */
  readonly customPromptSafetyErrorMessage?: string;
  /**
  * Possible values:
  * INSPECT_ONLY
  * INSPECT_AND_BLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#enforcement_type GoogleModelArmorTemplate#enforcement_type}
  */
  readonly enforcementType?: string;
  /**
  * If true, partial detector failures should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#ignore_partial_invocation_failures GoogleModelArmorTemplate#ignore_partial_invocation_failures}
  */
  readonly ignorePartialInvocationFailures?: boolean | cdktf.IResolvable;
  /**
  * If true, log sanitize operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#log_sanitize_operations GoogleModelArmorTemplate#log_sanitize_operations}
  */
  readonly logSanitizeOperations?: boolean | cdktf.IResolvable;
  /**
  * If true, log template crud operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#log_template_operations GoogleModelArmorTemplate#log_template_operations}
  */
  readonly logTemplateOperations?: boolean | cdktf.IResolvable;
  /**
  * multi_language_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#multi_language_detection GoogleModelArmorTemplate#multi_language_detection}
  */
  readonly multiLanguageDetection?: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection;
}

export function googleModelArmorTemplateTemplateMetadataToTerraform(struct?: GoogleModelArmorTemplateTemplateMetadataOutputReference | GoogleModelArmorTemplateTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_llm_response_safety_error_code: cdktf.numberToTerraform(struct!.customLlmResponseSafetyErrorCode),
    custom_llm_response_safety_error_message: cdktf.stringToTerraform(struct!.customLlmResponseSafetyErrorMessage),
    custom_prompt_safety_error_code: cdktf.numberToTerraform(struct!.customPromptSafetyErrorCode),
    custom_prompt_safety_error_message: cdktf.stringToTerraform(struct!.customPromptSafetyErrorMessage),
    enforcement_type: cdktf.stringToTerraform(struct!.enforcementType),
    ignore_partial_invocation_failures: cdktf.booleanToTerraform(struct!.ignorePartialInvocationFailures),
    log_sanitize_operations: cdktf.booleanToTerraform(struct!.logSanitizeOperations),
    log_template_operations: cdktf.booleanToTerraform(struct!.logTemplateOperations),
    multi_language_detection: googleModelArmorTemplateTemplateMetadataMultiLanguageDetectionToTerraform(struct!.multiLanguageDetection),
  }
}


export function googleModelArmorTemplateTemplateMetadataToHclTerraform(struct?: GoogleModelArmorTemplateTemplateMetadataOutputReference | GoogleModelArmorTemplateTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_llm_response_safety_error_code: {
      value: cdktf.numberToHclTerraform(struct!.customLlmResponseSafetyErrorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_llm_response_safety_error_message: {
      value: cdktf.stringToHclTerraform(struct!.customLlmResponseSafetyErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_prompt_safety_error_code: {
      value: cdktf.numberToHclTerraform(struct!.customPromptSafetyErrorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_prompt_safety_error_message: {
      value: cdktf.stringToHclTerraform(struct!.customPromptSafetyErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforcement_type: {
      value: cdktf.stringToHclTerraform(struct!.enforcementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_partial_invocation_failures: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePartialInvocationFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_sanitize_operations: {
      value: cdktf.booleanToHclTerraform(struct!.logSanitizeOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_template_operations: {
      value: cdktf.booleanToHclTerraform(struct!.logTemplateOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multi_language_detection: {
      value: googleModelArmorTemplateTemplateMetadataMultiLanguageDetectionToHclTerraform(struct!.multiLanguageDetection),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleModelArmorTemplateTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleModelArmorTemplateTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customLlmResponseSafetyErrorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLlmResponseSafetyErrorCode = this._customLlmResponseSafetyErrorCode;
    }
    if (this._customLlmResponseSafetyErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLlmResponseSafetyErrorMessage = this._customLlmResponseSafetyErrorMessage;
    }
    if (this._customPromptSafetyErrorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPromptSafetyErrorCode = this._customPromptSafetyErrorCode;
    }
    if (this._customPromptSafetyErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPromptSafetyErrorMessage = this._customPromptSafetyErrorMessage;
    }
    if (this._enforcementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementType = this._enforcementType;
    }
    if (this._ignorePartialInvocationFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePartialInvocationFailures = this._ignorePartialInvocationFailures;
    }
    if (this._logSanitizeOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSanitizeOperations = this._logSanitizeOperations;
    }
    if (this._logTemplateOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTemplateOperations = this._logTemplateOperations;
    }
    if (this._multiLanguageDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLanguageDetection = this._multiLanguageDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleModelArmorTemplateTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customLlmResponseSafetyErrorCode = undefined;
      this._customLlmResponseSafetyErrorMessage = undefined;
      this._customPromptSafetyErrorCode = undefined;
      this._customPromptSafetyErrorMessage = undefined;
      this._enforcementType = undefined;
      this._ignorePartialInvocationFailures = undefined;
      this._logSanitizeOperations = undefined;
      this._logTemplateOperations = undefined;
      this._multiLanguageDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customLlmResponseSafetyErrorCode = value.customLlmResponseSafetyErrorCode;
      this._customLlmResponseSafetyErrorMessage = value.customLlmResponseSafetyErrorMessage;
      this._customPromptSafetyErrorCode = value.customPromptSafetyErrorCode;
      this._customPromptSafetyErrorMessage = value.customPromptSafetyErrorMessage;
      this._enforcementType = value.enforcementType;
      this._ignorePartialInvocationFailures = value.ignorePartialInvocationFailures;
      this._logSanitizeOperations = value.logSanitizeOperations;
      this._logTemplateOperations = value.logTemplateOperations;
      this._multiLanguageDetection.internalValue = value.multiLanguageDetection;
    }
  }

  // custom_llm_response_safety_error_code - computed: false, optional: true, required: false
  private _customLlmResponseSafetyErrorCode?: number; 
  public get customLlmResponseSafetyErrorCode() {
    return this.getNumberAttribute('custom_llm_response_safety_error_code');
  }
  public set customLlmResponseSafetyErrorCode(value: number) {
    this._customLlmResponseSafetyErrorCode = value;
  }
  public resetCustomLlmResponseSafetyErrorCode() {
    this._customLlmResponseSafetyErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLlmResponseSafetyErrorCodeInput() {
    return this._customLlmResponseSafetyErrorCode;
  }

  // custom_llm_response_safety_error_message - computed: false, optional: true, required: false
  private _customLlmResponseSafetyErrorMessage?: string; 
  public get customLlmResponseSafetyErrorMessage() {
    return this.getStringAttribute('custom_llm_response_safety_error_message');
  }
  public set customLlmResponseSafetyErrorMessage(value: string) {
    this._customLlmResponseSafetyErrorMessage = value;
  }
  public resetCustomLlmResponseSafetyErrorMessage() {
    this._customLlmResponseSafetyErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLlmResponseSafetyErrorMessageInput() {
    return this._customLlmResponseSafetyErrorMessage;
  }

  // custom_prompt_safety_error_code - computed: false, optional: true, required: false
  private _customPromptSafetyErrorCode?: number; 
  public get customPromptSafetyErrorCode() {
    return this.getNumberAttribute('custom_prompt_safety_error_code');
  }
  public set customPromptSafetyErrorCode(value: number) {
    this._customPromptSafetyErrorCode = value;
  }
  public resetCustomPromptSafetyErrorCode() {
    this._customPromptSafetyErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPromptSafetyErrorCodeInput() {
    return this._customPromptSafetyErrorCode;
  }

  // custom_prompt_safety_error_message - computed: false, optional: true, required: false
  private _customPromptSafetyErrorMessage?: string; 
  public get customPromptSafetyErrorMessage() {
    return this.getStringAttribute('custom_prompt_safety_error_message');
  }
  public set customPromptSafetyErrorMessage(value: string) {
    this._customPromptSafetyErrorMessage = value;
  }
  public resetCustomPromptSafetyErrorMessage() {
    this._customPromptSafetyErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPromptSafetyErrorMessageInput() {
    return this._customPromptSafetyErrorMessage;
  }

  // enforcement_type - computed: false, optional: true, required: false
  private _enforcementType?: string; 
  public get enforcementType() {
    return this.getStringAttribute('enforcement_type');
  }
  public set enforcementType(value: string) {
    this._enforcementType = value;
  }
  public resetEnforcementType() {
    this._enforcementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementTypeInput() {
    return this._enforcementType;
  }

  // ignore_partial_invocation_failures - computed: false, optional: true, required: false
  private _ignorePartialInvocationFailures?: boolean | cdktf.IResolvable; 
  public get ignorePartialInvocationFailures() {
    return this.getBooleanAttribute('ignore_partial_invocation_failures');
  }
  public set ignorePartialInvocationFailures(value: boolean | cdktf.IResolvable) {
    this._ignorePartialInvocationFailures = value;
  }
  public resetIgnorePartialInvocationFailures() {
    this._ignorePartialInvocationFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePartialInvocationFailuresInput() {
    return this._ignorePartialInvocationFailures;
  }

  // log_sanitize_operations - computed: false, optional: true, required: false
  private _logSanitizeOperations?: boolean | cdktf.IResolvable; 
  public get logSanitizeOperations() {
    return this.getBooleanAttribute('log_sanitize_operations');
  }
  public set logSanitizeOperations(value: boolean | cdktf.IResolvable) {
    this._logSanitizeOperations = value;
  }
  public resetLogSanitizeOperations() {
    this._logSanitizeOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSanitizeOperationsInput() {
    return this._logSanitizeOperations;
  }

  // log_template_operations - computed: false, optional: true, required: false
  private _logTemplateOperations?: boolean | cdktf.IResolvable; 
  public get logTemplateOperations() {
    return this.getBooleanAttribute('log_template_operations');
  }
  public set logTemplateOperations(value: boolean | cdktf.IResolvable) {
    this._logTemplateOperations = value;
  }
  public resetLogTemplateOperations() {
    this._logTemplateOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTemplateOperationsInput() {
    return this._logTemplateOperations;
  }

  // multi_language_detection - computed: false, optional: true, required: false
  private _multiLanguageDetection = new GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference(this, "multi_language_detection");
  public get multiLanguageDetection() {
    return this._multiLanguageDetection;
  }
  public putMultiLanguageDetection(value: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection) {
    this._multiLanguageDetection.internalValue = value;
  }
  public resetMultiLanguageDetection() {
    this._multiLanguageDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLanguageDetectionInput() {
    return this._multiLanguageDetection.internalValue;
  }
}
export interface GoogleModelArmorTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#create GoogleModelArmorTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#delete GoogleModelArmorTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#update GoogleModelArmorTemplate#update}
  */
  readonly update?: string;
}

export function googleModelArmorTemplateTimeoutsToTerraform(struct?: GoogleModelArmorTemplateTimeouts | cdktf.IResolvable): any {
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


export function googleModelArmorTemplateTimeoutsToHclTerraform(struct?: GoogleModelArmorTemplateTimeouts | cdktf.IResolvable): any {
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

export class GoogleModelArmorTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleModelArmorTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleModelArmorTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template google_model_armor_template}
*/
export class GoogleModelArmorTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_model_armor_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleModelArmorTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleModelArmorTemplate to import
  * @param importFromId The id of the existing GoogleModelArmorTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleModelArmorTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_model_armor_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_model_armor_template google_model_armor_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleModelArmorTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleModelArmorTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_model_armor_template',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.46.0',
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
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._templateId = config.templateId;
    this._filterConfig.internalValue = config.filterConfig;
    this._templateMetadata.internalValue = config.templateMetadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // filter_config - computed: false, optional: false, required: true
  private _filterConfig = new GoogleModelArmorTemplateFilterConfigOutputReference(this, "filter_config");
  public get filterConfig() {
    return this._filterConfig;
  }
  public putFilterConfig(value: GoogleModelArmorTemplateFilterConfig) {
    this._filterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigInput() {
    return this._filterConfig.internalValue;
  }

  // template_metadata - computed: false, optional: true, required: false
  private _templateMetadata = new GoogleModelArmorTemplateTemplateMetadataOutputReference(this, "template_metadata");
  public get templateMetadata() {
    return this._templateMetadata;
  }
  public putTemplateMetadata(value: GoogleModelArmorTemplateTemplateMetadata) {
    this._templateMetadata.internalValue = value;
  }
  public resetTemplateMetadata() {
    this._templateMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateMetadataInput() {
    return this._templateMetadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleModelArmorTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleModelArmorTemplateTimeouts) {
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
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      template_id: cdktf.stringToTerraform(this._templateId),
      filter_config: googleModelArmorTemplateFilterConfigToTerraform(this._filterConfig.internalValue),
      template_metadata: googleModelArmorTemplateTemplateMetadataToTerraform(this._templateMetadata.internalValue),
      timeouts: googleModelArmorTemplateTimeoutsToTerraform(this._timeouts.internalValue),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_config: {
        value: googleModelArmorTemplateFilterConfigToHclTerraform(this._filterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleModelArmorTemplateFilterConfigList",
      },
      template_metadata: {
        value: googleModelArmorTemplateTemplateMetadataToHclTerraform(this._templateMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleModelArmorTemplateTemplateMetadataList",
      },
      timeouts: {
        value: googleModelArmorTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleModelArmorTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
