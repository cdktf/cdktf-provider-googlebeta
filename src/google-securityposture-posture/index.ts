/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSecurityposturePostureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the posture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#id GoogleSecurityposturePosture#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of the resource, eg: global.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}
  */
  readonly location: string;
  /**
  * The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#parent GoogleSecurityposturePosture#parent}
  */
  readonly parent: string;
  /**
  * Id of the posture. It is an immutable field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#posture_id GoogleSecurityposturePosture#posture_id}
  */
  readonly postureId: string;
  /**
  * State of the posture. Update to state field should not be triggered along with
  * with other field updates. Possible values: ["DEPRECATED", "DRAFT", "ACTIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#state GoogleSecurityposturePosture#state}
  */
  readonly state: string;
  /**
  * policy_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#policy_sets GoogleSecurityposturePosture#policy_sets}
  */
  readonly policySets: GoogleSecurityposturePosturePolicySets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#timeouts GoogleSecurityposturePosture#timeouts}
  */
  readonly timeouts?: GoogleSecurityposturePostureTimeouts;
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards {
  /**
  * Mapping of security controls for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#control GoogleSecurityposturePosture#control}
  */
  readonly control?: string;
  /**
  * Mapping of compliance standards for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#standard GoogleSecurityposturePosture#standard}
  */
  readonly standard?: string;
}

export function googleSecurityposturePosturePolicySetsPoliciesComplianceStandardsToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control: cdktf.stringToTerraform(struct!.control),
    standard: cdktf.stringToTerraform(struct!.standard),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesComplianceStandardsToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control: {
      value: cdktf.stringToHclTerraform(struct!.control),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard: {
      value: cdktf.stringToHclTerraform(struct!.standard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._control !== undefined) {
      hasAnyValues = true;
      internalValueResult.control = this._control;
    }
    if (this._standard !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._control = undefined;
      this._standard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._control = value.control;
      this._standard = value.standard;
    }
  }

  // control - computed: false, optional: true, required: false
  private _control?: string; 
  public get control() {
    return this.getStringAttribute('control');
  }
  public set control(value: string) {
    this._control = value;
  }
  public resetControl() {
    this._control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control;
  }

  // standard - computed: false, optional: true, required: false
  private _standard?: string; 
  public get standard() {
    return this.getStringAttribute('standard');
  }
  public set standard(value: string) {
    this._standard = value;
  }
  public resetStandard() {
    this._standard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard;
  }
}

export class GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList extends cdktf.ComplexList {
  public internalValue? : GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards[] | cdktf.IResolvable

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
  public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference {
    return new GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition {
  /**
  * Description of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}
  */
  readonly title?: string;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition): any {
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues {
  /**
  * List of values allowed at this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#allowed_values GoogleSecurityposturePosture#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * List of values denied at this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#denied_values GoogleSecurityposturePosture#denied_values}
  */
  readonly deniedValues?: string[];
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedValues),
    denied_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedValues),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._deniedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedValues = this._deniedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedValues = undefined;
      this._deniedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedValues = value.allowedValues;
      this._deniedValues = value.deniedValues;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // denied_values - computed: false, optional: true, required: false
  private _deniedValues?: string[]; 
  public get deniedValues() {
    return this.getListAttribute('denied_values');
  }
  public set deniedValues(value: string[]) {
    this._deniedValues = value;
  }
  public resetDeniedValues() {
    this._deniedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedValuesInput() {
    return this._deniedValues;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules {
  /**
  * Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#allow_all GoogleSecurityposturePosture#allow_all}
  */
  readonly allowAll?: boolean | cdktf.IResolvable;
  /**
  * Setting this to true means that all values are denied. This field can be set only in policies for list constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#deny_all GoogleSecurityposturePosture#deny_all}
  */
  readonly denyAll?: boolean | cdktf.IResolvable;
  /**
  * If 'true', then the policy is enforced. If 'false', then any configuration is acceptable.
  * This field can be set only in policies for boolean constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#enforce GoogleSecurityposturePosture#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#condition GoogleSecurityposturePosture#condition}
  */
  readonly condition?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#values GoogleSecurityposturePosture#values}
  */
  readonly values?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all: cdktf.booleanToTerraform(struct!.allowAll),
    deny_all: cdktf.booleanToTerraform(struct!.denyAll),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    condition: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionToTerraform(struct!.condition),
    values: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesToTerraform(struct!.values),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.allowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_all: {
      value: cdktf.booleanToHclTerraform(struct!.denyAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionList",
    },
    values: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesToHclTerraform(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAll = this._allowAll;
    }
    if (this._denyAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAll = this._denyAll;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAll = undefined;
      this._denyAll = undefined;
      this._enforce = undefined;
      this._condition.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAll = value.allowAll;
      this._denyAll = value.denyAll;
      this._enforce = value.enforce;
      this._condition.internalValue = value.condition;
      this._values.internalValue = value.values;
    }
  }

  // allow_all - computed: false, optional: true, required: false
  private _allowAll?: boolean | cdktf.IResolvable; 
  public get allowAll() {
    return this.getBooleanAttribute('allow_all');
  }
  public set allowAll(value: boolean | cdktf.IResolvable) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
  }

  // deny_all - computed: false, optional: true, required: false
  private _denyAll?: boolean | cdktf.IResolvable; 
  public get denyAll() {
    return this.getBooleanAttribute('deny_all');
  }
  public set denyAll(value: boolean | cdktf.IResolvable) {
    this._denyAll = value;
  }
  public resetDenyAll() {
    this._denyAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllInput() {
    return this._denyAll;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference {
    return new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint {
  /**
  * Organization policy canned constraint Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#canned_constraint_id GoogleSecurityposturePosture#canned_constraint_id}
  */
  readonly cannedConstraintId: string;
  /**
  * policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#policy_rules GoogleSecurityposturePosture#policy_rules}
  */
  readonly policyRules: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[] | cdktf.IResolvable;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_constraint_id: cdktf.stringToTerraform(struct!.cannedConstraintId),
    policy_rules: cdktf.listMapper(googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesToTerraform, true)(struct!.policyRules),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_constraint_id: {
      value: cdktf.stringToHclTerraform(struct!.cannedConstraintId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_rules: {
      value: cdktf.listMapperHcl(googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesToHclTerraform, true)(struct!.policyRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedConstraintId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedConstraintId = this._cannedConstraintId;
    }
    if (this._policyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRules = this._policyRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedConstraintId = undefined;
      this._policyRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedConstraintId = value.cannedConstraintId;
      this._policyRules.internalValue = value.policyRules;
    }
  }

  // canned_constraint_id - computed: false, optional: false, required: true
  private _cannedConstraintId?: string; 
  public get cannedConstraintId() {
    return this.getStringAttribute('canned_constraint_id');
  }
  public set cannedConstraintId(value: string) {
    this._cannedConstraintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedConstraintIdInput() {
    return this._cannedConstraintId;
  }

  // policy_rules - computed: false, optional: false, required: true
  private _policyRules = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList(this, "policy_rules", false);
  public get policyRules() {
    return this._policyRules;
  }
  public putPolicyRules(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules[] | cdktf.IResolvable) {
    this._policyRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRulesInput() {
    return this._policyRules.internalValue;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint {
  /**
  * The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#action_type GoogleSecurityposturePosture#action_type}
  */
  readonly actionType: string;
  /**
  * A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#condition GoogleSecurityposturePosture#condition}
  */
  readonly condition: string;
  /**
  * A human-friendly description of the constraint to display as an error message when the policy is violated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * A human-friendly name for the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#display_name GoogleSecurityposturePosture#display_name}
  */
  readonly displayName?: string;
  /**
  * A list of RESTful methods for which to enforce the constraint. Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#method_types GoogleSecurityposturePosture#method_types}
  */
  readonly methodTypes: string[];
  /**
  * Immutable. The name of the custom constraint. This is unique within the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#name GoogleSecurityposturePosture#name}
  */
  readonly name: string;
  /**
  * Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#resource_types GoogleSecurityposturePosture#resource_types}
  */
  readonly resourceTypes: string[];
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    condition: cdktf.stringToTerraform(struct!.condition),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    method_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methodTypes),
    name: cdktf.stringToTerraform(struct!.name),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    method_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methodTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._methodTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodTypes = this._methodTypes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._condition = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._methodTypes = undefined;
      this._name = undefined;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._condition = value.condition;
      this._description = value.description;
      this._displayName = value.displayName;
      this._methodTypes = value.methodTypes;
      this._name = value.name;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // method_types - computed: false, optional: false, required: true
  private _methodTypes?: string[]; 
  public get methodTypes() {
    return this.getListAttribute('method_types');
  }
  public set methodTypes(value: string[]) {
    this._methodTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypesInput() {
    return this._methodTypes;
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

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition {
  /**
  * Description of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}
  */
  readonly title?: string;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition): any {
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues {
  /**
  * List of values allowed at this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#allowed_values GoogleSecurityposturePosture#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * List of values denied at this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#denied_values GoogleSecurityposturePosture#denied_values}
  */
  readonly deniedValues?: string[];
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedValues),
    denied_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedValues),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._deniedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedValues = this._deniedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedValues = undefined;
      this._deniedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedValues = value.allowedValues;
      this._deniedValues = value.deniedValues;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // denied_values - computed: false, optional: true, required: false
  private _deniedValues?: string[]; 
  public get deniedValues() {
    return this.getListAttribute('denied_values');
  }
  public set deniedValues(value: string[]) {
    this._deniedValues = value;
  }
  public resetDeniedValues() {
    this._deniedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedValuesInput() {
    return this._deniedValues;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules {
  /**
  * Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#allow_all GoogleSecurityposturePosture#allow_all}
  */
  readonly allowAll?: boolean | cdktf.IResolvable;
  /**
  * Setting this to true means that all values are denied. This field can be set only in policies for list constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#deny_all GoogleSecurityposturePosture#deny_all}
  */
  readonly denyAll?: boolean | cdktf.IResolvable;
  /**
  * If 'true', then the policy is enforced. If 'false', then any configuration is acceptable.
  * This field can be set only in policies for boolean constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#enforce GoogleSecurityposturePosture#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#condition GoogleSecurityposturePosture#condition}
  */
  readonly condition?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#values GoogleSecurityposturePosture#values}
  */
  readonly values?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all: cdktf.booleanToTerraform(struct!.allowAll),
    deny_all: cdktf.booleanToTerraform(struct!.denyAll),
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    condition: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionToTerraform(struct!.condition),
    values: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesToTerraform(struct!.values),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.allowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_all: {
      value: cdktf.booleanToHclTerraform(struct!.denyAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionList",
    },
    values: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesToHclTerraform(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAll = this._allowAll;
    }
    if (this._denyAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAll = this._denyAll;
    }
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAll = undefined;
      this._denyAll = undefined;
      this._enforce = undefined;
      this._condition.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAll = value.allowAll;
      this._denyAll = value.denyAll;
      this._enforce = value.enforce;
      this._condition.internalValue = value.condition;
      this._values.internalValue = value.values;
    }
  }

  // allow_all - computed: false, optional: true, required: false
  private _allowAll?: boolean | cdktf.IResolvable; 
  public get allowAll() {
    return this.getBooleanAttribute('allow_all');
  }
  public set allowAll(value: boolean | cdktf.IResolvable) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
  }

  // deny_all - computed: false, optional: true, required: false
  private _denyAll?: boolean | cdktf.IResolvable; 
  public get denyAll() {
    return this.getBooleanAttribute('deny_all');
  }
  public set denyAll(value: boolean | cdktf.IResolvable) {
    this._denyAll = value;
  }
  public resetDenyAll() {
    this._denyAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllInput() {
    return this._denyAll;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference {
    return new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom {
  /**
  * custom_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#custom_constraint GoogleSecurityposturePosture#custom_constraint}
  */
  readonly customConstraint?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint;
  /**
  * policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#policy_rules GoogleSecurityposturePosture#policy_rules}
  */
  readonly policyRules: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[] | cdktf.IResolvable;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_constraint: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintToTerraform(struct!.customConstraint),
    policy_rules: cdktf.listMapper(googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesToTerraform, true)(struct!.policyRules),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_constraint: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintToHclTerraform(struct!.customConstraint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintList",
    },
    policy_rules: {
      value: cdktf.listMapperHcl(googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesToHclTerraform, true)(struct!.policyRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConstraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConstraint = this._customConstraint?.internalValue;
    }
    if (this._policyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRules = this._policyRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customConstraint.internalValue = undefined;
      this._policyRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customConstraint.internalValue = value.customConstraint;
      this._policyRules.internalValue = value.policyRules;
    }
  }

  // custom_constraint - computed: false, optional: true, required: false
  private _customConstraint = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference(this, "custom_constraint");
  public get customConstraint() {
    return this._customConstraint;
  }
  public putCustomConstraint(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint) {
    this._customConstraint.internalValue = value;
  }
  public resetCustomConstraint() {
    this._customConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConstraintInput() {
    return this._customConstraint.internalValue;
  }

  // policy_rules - computed: false, optional: false, required: true
  private _policyRules = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList(this, "policy_rules", false);
  public get policyRules() {
    return this._policyRules;
  }
  public putPolicyRules(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules[] | cdktf.IResolvable) {
    this._policyRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRulesInput() {
    return this._policyRules.internalValue;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression {
  /**
  * Description of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}
  */
  readonly title?: string;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression): any {
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties {
  /**
  * Name of the property for the custom output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#name GoogleSecurityposturePosture#name}
  */
  readonly name: string;
  /**
  * value_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#value_expression GoogleSecurityposturePosture#value_expression}
  */
  readonly valueExpression?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_expression: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionToTerraform(struct!.valueExpression),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties | cdktf.IResolvable): any {
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
    value_expression: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionToHclTerraform(struct!.valueExpression),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueExpression = this._valueExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueExpression.internalValue = value.valueExpression;
    }
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

  // value_expression - computed: false, optional: true, required: false
  private _valueExpression = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference(this, "value_expression");
  public get valueExpression() {
    return this._valueExpression;
  }
  public putValueExpression(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression) {
    this._valueExpression.internalValue = value;
  }
  public resetValueExpression() {
    this._valueExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExpressionInput() {
    return this._valueExpression.internalValue;
  }
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList extends cdktf.ComplexList {
  public internalValue? : GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[] | cdktf.IResolvable

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
  public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference {
    return new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#properties GoogleSecurityposturePosture#properties}
  */
  readonly properties?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[] | cdktf.IResolvable;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesToTerraform, true)(struct!.properties),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.listMapperHcl(googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties.internalValue = value.properties;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate {
  /**
  * Description of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#expression GoogleSecurityposturePosture#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#location GoogleSecurityposturePosture#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#title GoogleSecurityposturePosture#title}
  */
  readonly title?: string;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate): any {
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector {
  /**
  * The resource types to run the detector on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#resource_types GoogleSecurityposturePosture#resource_types}
  */
  readonly resourceTypes: string[];
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig {
  /**
  * Text that describes the vulnerability or misconfiguration that the custom
  * module detects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * An explanation of the recommended steps that security teams can take to
  * resolve the detected issue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#recommendation GoogleSecurityposturePosture#recommendation}
  */
  readonly recommendation?: string;
  /**
  * The severity to assign to findings generated by the module. Possible values: ["SEVERITY_UNSPECIFIED", "CRITICAL", "HIGH", "MEDIUM", "LOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#severity GoogleSecurityposturePosture#severity}
  */
  readonly severity: string;
  /**
  * custom_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#custom_output GoogleSecurityposturePosture#custom_output}
  */
  readonly customOutput?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput;
  /**
  * predicate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#predicate GoogleSecurityposturePosture#predicate}
  */
  readonly predicate: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate;
  /**
  * resource_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#resource_selector GoogleSecurityposturePosture#resource_selector}
  */
  readonly resourceSelector: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    recommendation: cdktf.stringToTerraform(struct!.recommendation),
    severity: cdktf.stringToTerraform(struct!.severity),
    custom_output: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputToTerraform(struct!.customOutput),
    predicate: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateToTerraform(struct!.predicate),
    resource_selector: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorToTerraform(struct!.resourceSelector),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig): any {
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
    recommendation: {
      value: cdktf.stringToHclTerraform(struct!.recommendation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_output: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputToHclTerraform(struct!.customOutput),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputList",
    },
    predicate: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateToHclTerraform(struct!.predicate),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateList",
    },
    resource_selector: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorToHclTerraform(struct!.resourceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._recommendation !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendation = this._recommendation;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._customOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customOutput = this._customOutput?.internalValue;
    }
    if (this._predicate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicate = this._predicate?.internalValue;
    }
    if (this._resourceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelector = this._resourceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._recommendation = undefined;
      this._severity = undefined;
      this._customOutput.internalValue = undefined;
      this._predicate.internalValue = undefined;
      this._resourceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._recommendation = value.recommendation;
      this._severity = value.severity;
      this._customOutput.internalValue = value.customOutput;
      this._predicate.internalValue = value.predicate;
      this._resourceSelector.internalValue = value.resourceSelector;
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

  // recommendation - computed: false, optional: true, required: false
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  public resetRecommendation() {
    this._recommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // custom_output - computed: false, optional: true, required: false
  private _customOutput = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference(this, "custom_output");
  public get customOutput() {
    return this._customOutput;
  }
  public putCustomOutput(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput) {
    this._customOutput.internalValue = value;
  }
  public resetCustomOutput() {
    this._customOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOutputInput() {
    return this._customOutput.internalValue;
  }

  // predicate - computed: false, optional: false, required: true
  private _predicate = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference(this, "predicate");
  public get predicate() {
    return this._predicate;
  }
  public putPredicate(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate) {
    this._predicate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate.internalValue;
  }

  // resource_selector - computed: false, optional: false, required: true
  private _resourceSelector = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference(this, "resource_selector");
  public get resourceSelector() {
    return this._resourceSelector;
  }
  public putResourceSelector(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector) {
    this._resourceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorInput() {
    return this._resourceSelector.internalValue;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule {
  /**
  * The display name of the Security Health Analytics custom module. This
  * display name becomes the finding category for all findings that are
  * returned by this custom module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#display_name GoogleSecurityposturePosture#display_name}
  */
  readonly displayName?: string;
  /**
  * The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#module_enablement_state GoogleSecurityposturePosture#module_enablement_state}
  */
  readonly moduleEnablementState?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#config GoogleSecurityposturePosture#config}
  */
  readonly config: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    module_enablement_state: cdktf.stringToTerraform(struct!.moduleEnablementState),
    config: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigToTerraform(struct!.config),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_enablement_state: {
      value: cdktf.stringToHclTerraform(struct!.moduleEnablementState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._moduleEnablementState !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleEnablementState = this._moduleEnablementState;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._moduleEnablementState = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._moduleEnablementState = value.moduleEnablementState;
      this._config.internalValue = value.config;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module_enablement_state - computed: false, optional: true, required: false
  private _moduleEnablementState?: string; 
  public get moduleEnablementState() {
    return this.getStringAttribute('module_enablement_state');
  }
  public set moduleEnablementState(value: string) {
    this._moduleEnablementState = value;
  }
  public resetModuleEnablementState() {
    this._moduleEnablementState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleEnablementStateInput() {
    return this._moduleEnablementState;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule {
  /**
  * The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#module_enablement_state GoogleSecurityposturePosture#module_enablement_state}
  */
  readonly moduleEnablementState?: string;
  /**
  * The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#module_name GoogleSecurityposturePosture#module_name}
  */
  readonly moduleName: string;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    module_enablement_state: cdktf.stringToTerraform(struct!.moduleEnablementState),
    module_name: cdktf.stringToTerraform(struct!.moduleName),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    module_enablement_state: {
      value: cdktf.stringToHclTerraform(struct!.moduleEnablementState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_name: {
      value: cdktf.stringToHclTerraform(struct!.moduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._moduleEnablementState !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleEnablementState = this._moduleEnablementState;
    }
    if (this._moduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleName = this._moduleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._moduleEnablementState = undefined;
      this._moduleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._moduleEnablementState = value.moduleEnablementState;
      this._moduleName = value.moduleName;
    }
  }

  // module_enablement_state - computed: false, optional: true, required: false
  private _moduleEnablementState?: string; 
  public get moduleEnablementState() {
    return this.getStringAttribute('module_enablement_state');
  }
  public set moduleEnablementState(value: string) {
    this._moduleEnablementState = value;
  }
  public resetModuleEnablementState() {
    this._moduleEnablementState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleEnablementStateInput() {
    return this._moduleEnablementState;
  }

  // module_name - computed: false, optional: false, required: true
  private _moduleName?: string; 
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPoliciesConstraint {
  /**
  * org_policy_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#org_policy_constraint GoogleSecurityposturePosture#org_policy_constraint}
  */
  readonly orgPolicyConstraint?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint;
  /**
  * org_policy_constraint_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#org_policy_constraint_custom GoogleSecurityposturePosture#org_policy_constraint_custom}
  */
  readonly orgPolicyConstraintCustom?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom;
  /**
  * security_health_analytics_custom_module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#security_health_analytics_custom_module GoogleSecurityposturePosture#security_health_analytics_custom_module}
  */
  readonly securityHealthAnalyticsCustomModule?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule;
  /**
  * security_health_analytics_module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#security_health_analytics_module GoogleSecurityposturePosture#security_health_analytics_module}
  */
  readonly securityHealthAnalyticsModule?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule;
}

export function googleSecurityposturePosturePolicySetsPoliciesConstraintToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_policy_constraint: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintToTerraform(struct!.orgPolicyConstraint),
    org_policy_constraint_custom: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomToTerraform(struct!.orgPolicyConstraintCustom),
    security_health_analytics_custom_module: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleToTerraform(struct!.securityHealthAnalyticsCustomModule),
    security_health_analytics_module: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleToTerraform(struct!.securityHealthAnalyticsModule),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesConstraintToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference | GoogleSecurityposturePosturePolicySetsPoliciesConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_policy_constraint: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintToHclTerraform(struct!.orgPolicyConstraint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintList",
    },
    org_policy_constraint_custom: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomToHclTerraform(struct!.orgPolicyConstraintCustom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomList",
    },
    security_health_analytics_custom_module: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleToHclTerraform(struct!.securityHealthAnalyticsCustomModule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleList",
    },
    security_health_analytics_module: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleToHclTerraform(struct!.securityHealthAnalyticsModule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPoliciesConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgPolicyConstraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgPolicyConstraint = this._orgPolicyConstraint?.internalValue;
    }
    if (this._orgPolicyConstraintCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgPolicyConstraintCustom = this._orgPolicyConstraintCustom?.internalValue;
    }
    if (this._securityHealthAnalyticsCustomModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityHealthAnalyticsCustomModule = this._securityHealthAnalyticsCustomModule?.internalValue;
    }
    if (this._securityHealthAnalyticsModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityHealthAnalyticsModule = this._securityHealthAnalyticsModule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._orgPolicyConstraint.internalValue = undefined;
      this._orgPolicyConstraintCustom.internalValue = undefined;
      this._securityHealthAnalyticsCustomModule.internalValue = undefined;
      this._securityHealthAnalyticsModule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._orgPolicyConstraint.internalValue = value.orgPolicyConstraint;
      this._orgPolicyConstraintCustom.internalValue = value.orgPolicyConstraintCustom;
      this._securityHealthAnalyticsCustomModule.internalValue = value.securityHealthAnalyticsCustomModule;
      this._securityHealthAnalyticsModule.internalValue = value.securityHealthAnalyticsModule;
    }
  }

  // org_policy_constraint - computed: false, optional: true, required: false
  private _orgPolicyConstraint = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference(this, "org_policy_constraint");
  public get orgPolicyConstraint() {
    return this._orgPolicyConstraint;
  }
  public putOrgPolicyConstraint(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint) {
    this._orgPolicyConstraint.internalValue = value;
  }
  public resetOrgPolicyConstraint() {
    this._orgPolicyConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgPolicyConstraintInput() {
    return this._orgPolicyConstraint.internalValue;
  }

  // org_policy_constraint_custom - computed: false, optional: true, required: false
  private _orgPolicyConstraintCustom = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference(this, "org_policy_constraint_custom");
  public get orgPolicyConstraintCustom() {
    return this._orgPolicyConstraintCustom;
  }
  public putOrgPolicyConstraintCustom(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom) {
    this._orgPolicyConstraintCustom.internalValue = value;
  }
  public resetOrgPolicyConstraintCustom() {
    this._orgPolicyConstraintCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgPolicyConstraintCustomInput() {
    return this._orgPolicyConstraintCustom.internalValue;
  }

  // security_health_analytics_custom_module - computed: false, optional: true, required: false
  private _securityHealthAnalyticsCustomModule = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference(this, "security_health_analytics_custom_module");
  public get securityHealthAnalyticsCustomModule() {
    return this._securityHealthAnalyticsCustomModule;
  }
  public putSecurityHealthAnalyticsCustomModule(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule) {
    this._securityHealthAnalyticsCustomModule.internalValue = value;
  }
  public resetSecurityHealthAnalyticsCustomModule() {
    this._securityHealthAnalyticsCustomModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHealthAnalyticsCustomModuleInput() {
    return this._securityHealthAnalyticsCustomModule.internalValue;
  }

  // security_health_analytics_module - computed: false, optional: true, required: false
  private _securityHealthAnalyticsModule = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference(this, "security_health_analytics_module");
  public get securityHealthAnalyticsModule() {
    return this._securityHealthAnalyticsModule;
  }
  public putSecurityHealthAnalyticsModule(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule) {
    this._securityHealthAnalyticsModule.internalValue = value;
  }
  public resetSecurityHealthAnalyticsModule() {
    this._securityHealthAnalyticsModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHealthAnalyticsModuleInput() {
    return this._securityHealthAnalyticsModule.internalValue;
  }
}
export interface GoogleSecurityposturePosturePolicySetsPolicies {
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * ID of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#policy_id GoogleSecurityposturePosture#policy_id}
  */
  readonly policyId: string;
  /**
  * compliance_standards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#compliance_standards GoogleSecurityposturePosture#compliance_standards}
  */
  readonly complianceStandards?: GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards[] | cdktf.IResolvable;
  /**
  * constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#constraint GoogleSecurityposturePosture#constraint}
  */
  readonly constraint: GoogleSecurityposturePosturePolicySetsPoliciesConstraint;
}

export function googleSecurityposturePosturePolicySetsPoliciesToTerraform(struct?: GoogleSecurityposturePosturePolicySetsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    compliance_standards: cdktf.listMapper(googleSecurityposturePosturePolicySetsPoliciesComplianceStandardsToTerraform, true)(struct!.complianceStandards),
    constraint: googleSecurityposturePosturePolicySetsPoliciesConstraintToTerraform(struct!.constraint),
  }
}


export function googleSecurityposturePosturePolicySetsPoliciesToHclTerraform(struct?: GoogleSecurityposturePosturePolicySetsPolicies | cdktf.IResolvable): any {
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
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compliance_standards: {
      value: cdktf.listMapperHcl(googleSecurityposturePosturePolicySetsPoliciesComplianceStandardsToHclTerraform, true)(struct!.complianceStandards),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList",
    },
    constraint: {
      value: googleSecurityposturePosturePolicySetsPoliciesConstraintToHclTerraform(struct!.constraint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesConstraintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSecurityposturePosturePolicySetsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._complianceStandards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStandards = this._complianceStandards?.internalValue;
    }
    if (this._constraint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySetsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._policyId = undefined;
      this._complianceStandards.internalValue = undefined;
      this._constraint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._policyId = value.policyId;
      this._complianceStandards.internalValue = value.complianceStandards;
      this._constraint.internalValue = value.constraint;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // compliance_standards - computed: false, optional: true, required: false
  private _complianceStandards = new GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandardsList(this, "compliance_standards", false);
  public get complianceStandards() {
    return this._complianceStandards;
  }
  public putComplianceStandards(value: GoogleSecurityposturePosturePolicySetsPoliciesComplianceStandards[] | cdktf.IResolvable) {
    this._complianceStandards.internalValue = value;
  }
  public resetComplianceStandards() {
    this._complianceStandards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStandardsInput() {
    return this._complianceStandards.internalValue;
  }

  // constraint - computed: false, optional: false, required: true
  private _constraint = new GoogleSecurityposturePosturePolicySetsPoliciesConstraintOutputReference(this, "constraint");
  public get constraint() {
    return this._constraint;
  }
  public putConstraint(value: GoogleSecurityposturePosturePolicySetsPoliciesConstraint) {
    this._constraint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint.internalValue;
  }
}

export class GoogleSecurityposturePosturePolicySetsPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleSecurityposturePosturePolicySetsPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleSecurityposturePosturePolicySetsPoliciesOutputReference {
    return new GoogleSecurityposturePosturePolicySetsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecurityposturePosturePolicySets {
  /**
  * Description of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#description GoogleSecurityposturePosture#description}
  */
  readonly description?: string;
  /**
  * ID of the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#policy_set_id GoogleSecurityposturePosture#policy_set_id}
  */
  readonly policySetId: string;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#policies GoogleSecurityposturePosture#policies}
  */
  readonly policies: GoogleSecurityposturePosturePolicySetsPolicies[] | cdktf.IResolvable;
}

export function googleSecurityposturePosturePolicySetsToTerraform(struct?: GoogleSecurityposturePosturePolicySets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    policy_set_id: cdktf.stringToTerraform(struct!.policySetId),
    policies: cdktf.listMapper(googleSecurityposturePosturePolicySetsPoliciesToTerraform, true)(struct!.policies),
  }
}


export function googleSecurityposturePosturePolicySetsToHclTerraform(struct?: GoogleSecurityposturePosturePolicySets | cdktf.IResolvable): any {
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
    policy_set_id: {
      value: cdktf.stringToHclTerraform(struct!.policySetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(googleSecurityposturePosturePolicySetsPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSecurityposturePosturePolicySetsPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecurityposturePosturePolicySetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSecurityposturePosturePolicySets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policySetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policySetId = this._policySetId;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityposturePosturePolicySets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._policySetId = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._policySetId = value.policySetId;
      this._policies.internalValue = value.policies;
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

  // policy_set_id - computed: false, optional: false, required: true
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new GoogleSecurityposturePosturePolicySetsPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: GoogleSecurityposturePosturePolicySetsPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}

export class GoogleSecurityposturePosturePolicySetsList extends cdktf.ComplexList {
  public internalValue? : GoogleSecurityposturePosturePolicySets[] | cdktf.IResolvable

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
  public get(index: number): GoogleSecurityposturePosturePolicySetsOutputReference {
    return new GoogleSecurityposturePosturePolicySetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecurityposturePostureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#create GoogleSecurityposturePosture#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#delete GoogleSecurityposturePosture#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#update GoogleSecurityposturePosture#update}
  */
  readonly update?: string;
}

export function googleSecurityposturePostureTimeoutsToTerraform(struct?: GoogleSecurityposturePostureTimeouts | cdktf.IResolvable): any {
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


export function googleSecurityposturePostureTimeoutsToHclTerraform(struct?: GoogleSecurityposturePostureTimeouts | cdktf.IResolvable): any {
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

export class GoogleSecurityposturePostureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleSecurityposturePostureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleSecurityposturePostureTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture google_securityposture_posture}
*/
export class GoogleSecurityposturePosture extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_securityposture_posture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleSecurityposturePosture resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleSecurityposturePosture to import
  * @param importFromId The id of the existing GoogleSecurityposturePosture that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleSecurityposturePosture to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_securityposture_posture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_securityposture_posture google_securityposture_posture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSecurityposturePostureConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSecurityposturePostureConfig) {
    super(scope, id, {
      terraformResourceType: 'google_securityposture_posture',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.14.1',
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
    this._id = config.id;
    this._location = config.location;
    this._parent = config.parent;
    this._postureId = config.postureId;
    this._state = config.state;
    this._policySets.internalValue = config.policySets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // posture_id - computed: false, optional: false, required: true
  private _postureId?: string; 
  public get postureId() {
    return this.getStringAttribute('posture_id');
  }
  public set postureId(value: string) {
    this._postureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureIdInput() {
    return this._postureId;
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // policy_sets - computed: false, optional: false, required: true
  private _policySets = new GoogleSecurityposturePosturePolicySetsList(this, "policy_sets", false);
  public get policySets() {
    return this._policySets;
  }
  public putPolicySets(value: GoogleSecurityposturePosturePolicySets[] | cdktf.IResolvable) {
    this._policySets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetsInput() {
    return this._policySets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSecurityposturePostureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSecurityposturePostureTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      posture_id: cdktf.stringToTerraform(this._postureId),
      state: cdktf.stringToTerraform(this._state),
      policy_sets: cdktf.listMapper(googleSecurityposturePosturePolicySetsToTerraform, true)(this._policySets.internalValue),
      timeouts: googleSecurityposturePostureTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posture_id: {
        value: cdktf.stringToHclTerraform(this._postureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_sets: {
        value: cdktf.listMapperHcl(googleSecurityposturePosturePolicySetsToHclTerraform, true)(this._policySets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSecurityposturePosturePolicySetsList",
      },
      timeouts: {
        value: googleSecurityposturePostureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleSecurityposturePostureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
