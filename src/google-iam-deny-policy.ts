// https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIamDenyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#display_name GoogleIamDenyPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#id GoogleIamDenyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#name GoogleIamDenyPolicy#name}
  */
  readonly name: string;
  /**
  * The attachment point is identified by its URL-encoded full resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#parent GoogleIamDenyPolicy#parent}
  */
  readonly parent: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#rules GoogleIamDenyPolicy#rules}
  */
  readonly rules: GoogleIamDenyPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#timeouts GoogleIamDenyPolicy#timeouts}
  */
  readonly timeouts?: GoogleIamDenyPolicyTimeouts;
}
export interface GoogleIamDenyPolicyRulesDenyRuleDenialCondition {
  /**
  * Description of the expression. This is a longer text which describes the expression,
e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#description GoogleIamDenyPolicy#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#expression GoogleIamDenyPolicy#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting,
e.g. a file name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#location GoogleIamDenyPolicy#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#title GoogleIamDenyPolicy#title}
  */
  readonly title?: string;
}

export function googleIamDenyPolicyRulesDenyRuleDenialConditionToTerraform(struct?: GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference | GoogleIamDenyPolicyRulesDenyRuleDenialCondition): any {
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

export class GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIamDenyPolicyRulesDenyRuleDenialCondition | undefined {
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

  public set internalValue(value: GoogleIamDenyPolicyRulesDenyRuleDenialCondition | undefined) {
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
export interface GoogleIamDenyPolicyRulesDenyRule {
  /**
  * The permissions that are explicitly denied by this rule. Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#denied_permissions GoogleIamDenyPolicy#denied_permissions}
  */
  readonly deniedPermissions?: string[];
  /**
  * The identities that are prevented from using one or more permissions on Google Cloud resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#denied_principals GoogleIamDenyPolicy#denied_principals}
  */
  readonly deniedPrincipals?: string[];
  /**
  * Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.
If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#exception_permissions GoogleIamDenyPolicy#exception_permissions}
  */
  readonly exceptionPermissions?: string[];
  /**
  * The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.
For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#exception_principals GoogleIamDenyPolicy#exception_principals}
  */
  readonly exceptionPrincipals?: string[];
  /**
  * denial_condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#denial_condition GoogleIamDenyPolicy#denial_condition}
  */
  readonly denialCondition: GoogleIamDenyPolicyRulesDenyRuleDenialCondition;
}

export function googleIamDenyPolicyRulesDenyRuleToTerraform(struct?: GoogleIamDenyPolicyRulesDenyRuleOutputReference | GoogleIamDenyPolicyRulesDenyRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedPermissions),
    denied_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedPrincipals),
    exception_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionPermissions),
    exception_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionPrincipals),
    denial_condition: googleIamDenyPolicyRulesDenyRuleDenialConditionToTerraform(struct!.denialCondition),
  }
}

export class GoogleIamDenyPolicyRulesDenyRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIamDenyPolicyRulesDenyRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deniedPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedPermissions = this._deniedPermissions;
    }
    if (this._deniedPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedPrincipals = this._deniedPrincipals;
    }
    if (this._exceptionPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPermissions = this._exceptionPermissions;
    }
    if (this._exceptionPrincipals !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPrincipals = this._exceptionPrincipals;
    }
    if (this._denialCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denialCondition = this._denialCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamDenyPolicyRulesDenyRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deniedPermissions = undefined;
      this._deniedPrincipals = undefined;
      this._exceptionPermissions = undefined;
      this._exceptionPrincipals = undefined;
      this._denialCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deniedPermissions = value.deniedPermissions;
      this._deniedPrincipals = value.deniedPrincipals;
      this._exceptionPermissions = value.exceptionPermissions;
      this._exceptionPrincipals = value.exceptionPrincipals;
      this._denialCondition.internalValue = value.denialCondition;
    }
  }

  // denied_permissions - computed: false, optional: true, required: false
  private _deniedPermissions?: string[]; 
  public get deniedPermissions() {
    return this.getListAttribute('denied_permissions');
  }
  public set deniedPermissions(value: string[]) {
    this._deniedPermissions = value;
  }
  public resetDeniedPermissions() {
    this._deniedPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedPermissionsInput() {
    return this._deniedPermissions;
  }

  // denied_principals - computed: false, optional: true, required: false
  private _deniedPrincipals?: string[]; 
  public get deniedPrincipals() {
    return this.getListAttribute('denied_principals');
  }
  public set deniedPrincipals(value: string[]) {
    this._deniedPrincipals = value;
  }
  public resetDeniedPrincipals() {
    this._deniedPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedPrincipalsInput() {
    return this._deniedPrincipals;
  }

  // exception_permissions - computed: false, optional: true, required: false
  private _exceptionPermissions?: string[]; 
  public get exceptionPermissions() {
    return this.getListAttribute('exception_permissions');
  }
  public set exceptionPermissions(value: string[]) {
    this._exceptionPermissions = value;
  }
  public resetExceptionPermissions() {
    this._exceptionPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPermissionsInput() {
    return this._exceptionPermissions;
  }

  // exception_principals - computed: false, optional: true, required: false
  private _exceptionPrincipals?: string[]; 
  public get exceptionPrincipals() {
    return this.getListAttribute('exception_principals');
  }
  public set exceptionPrincipals(value: string[]) {
    this._exceptionPrincipals = value;
  }
  public resetExceptionPrincipals() {
    this._exceptionPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPrincipalsInput() {
    return this._exceptionPrincipals;
  }

  // denial_condition - computed: false, optional: false, required: true
  private _denialCondition = new GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference(this, "denial_condition");
  public get denialCondition() {
    return this._denialCondition;
  }
  public putDenialCondition(value: GoogleIamDenyPolicyRulesDenyRuleDenialCondition) {
    this._denialCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denialConditionInput() {
    return this._denialCondition.internalValue;
  }
}
export interface GoogleIamDenyPolicyRules {
  /**
  * The description of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#description GoogleIamDenyPolicy#description}
  */
  readonly description?: string;
  /**
  * deny_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#deny_rule GoogleIamDenyPolicy#deny_rule}
  */
  readonly denyRule?: GoogleIamDenyPolicyRulesDenyRule;
}

export function googleIamDenyPolicyRulesToTerraform(struct?: GoogleIamDenyPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    deny_rule: googleIamDenyPolicyRulesDenyRuleToTerraform(struct!.denyRule),
  }
}

export class GoogleIamDenyPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIamDenyPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._denyRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRule = this._denyRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamDenyPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._denyRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._denyRule.internalValue = value.denyRule;
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

  // deny_rule - computed: false, optional: true, required: false
  private _denyRule = new GoogleIamDenyPolicyRulesDenyRuleOutputReference(this, "deny_rule");
  public get denyRule() {
    return this._denyRule;
  }
  public putDenyRule(value: GoogleIamDenyPolicyRulesDenyRule) {
    this._denyRule.internalValue = value;
  }
  public resetDenyRule() {
    this._denyRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRuleInput() {
    return this._denyRule.internalValue;
  }
}

export class GoogleIamDenyPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleIamDenyPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleIamDenyPolicyRulesOutputReference {
    return new GoogleIamDenyPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIamDenyPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#create GoogleIamDenyPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy#update GoogleIamDenyPolicy#update}
  */
  readonly update?: string;
}

export function googleIamDenyPolicyTimeoutsToTerraform(struct?: GoogleIamDenyPolicyTimeoutsOutputReference | GoogleIamDenyPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleIamDenyPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIamDenyPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIamDenyPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy google_iam_deny_policy}
*/
export class GoogleIamDenyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_deny_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_iam_deny_policy google_iam_deny_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIamDenyPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIamDenyPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_deny_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.33.0',
        providerVersionConstraint: '~> 4.17'
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
    this._name = config.name;
    this._parent = config.parent;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rules - computed: false, optional: false, required: true
  private _rules = new GoogleIamDenyPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: GoogleIamDenyPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIamDenyPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIamDenyPolicyTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      rules: cdktf.listMapper(googleIamDenyPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: googleIamDenyPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
