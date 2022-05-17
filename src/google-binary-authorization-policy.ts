// https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBinaryAuthorizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#description GoogleBinaryAuthorizationPolicy#description}
  */
  readonly description?: string;
  /**
  * Controls the evaluation of a Google-maintained global admission policy
for common system-level images. Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#global_policy_evaluation_mode GoogleBinaryAuthorizationPolicy#global_policy_evaluation_mode}
  */
  readonly globalPolicyEvaluationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}
  */
  readonly project?: string;
  /**
  * admission_whitelist_patterns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#admission_whitelist_patterns GoogleBinaryAuthorizationPolicy#admission_whitelist_patterns}
  */
  readonly admissionWhitelistPatterns?: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[] | cdktf.IResolvable;
  /**
  * cluster_admission_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#cluster_admission_rules GoogleBinaryAuthorizationPolicy#cluster_admission_rules}
  */
  readonly clusterAdmissionRules?: GoogleBinaryAuthorizationPolicyClusterAdmissionRules[] | cdktf.IResolvable;
  /**
  * default_admission_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#default_admission_rule GoogleBinaryAuthorizationPolicy#default_admission_rule}
  */
  readonly defaultAdmissionRule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#timeouts GoogleBinaryAuthorizationPolicy#timeouts}
  */
  readonly timeouts?: GoogleBinaryAuthorizationPolicyTimeouts;
}
export interface GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns {
  /**
  * An image name pattern to whitelist, in the form
'registry/path/to/image'. This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#name_pattern GoogleBinaryAuthorizationPolicy#name_pattern}
  */
  readonly namePattern: string;
}

export function googleBinaryAuthorizationPolicyAdmissionWhitelistPatternsToTerraform(struct?: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_pattern: cdktf.stringToTerraform(struct!.namePattern),
  }
}

export interface GoogleBinaryAuthorizationPolicyClusterAdmissionRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}
  */
  readonly cluster: string;
  /**
  * The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}
  */
  readonly evaluationMode: string;
  /**
  * The resource names of the attestors that must attest to a
container image. If the attestor is in a different project from the
policy, it should be specified in the format 'projects/*\/attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}
  */
  readonly requireAttestationsBy?: string[];
}

export function googleBinaryAuthorizationPolicyClusterAdmissionRulesToTerraform(struct?: GoogleBinaryAuthorizationPolicyClusterAdmissionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    enforcement_mode: cdktf.stringToTerraform(struct!.enforcementMode),
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
    require_attestations_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requireAttestationsBy),
  }
}

export interface GoogleBinaryAuthorizationPolicyDefaultAdmissionRule {
  /**
  * The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}
  */
  readonly evaluationMode: string;
  /**
  * The resource names of the attestors that must attest to a
container image. If the attestor is in a different project from the
policy, it should be specified in the format 'projects/*\/attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}
  */
  readonly requireAttestationsBy?: string[];
}

export function googleBinaryAuthorizationPolicyDefaultAdmissionRuleToTerraform(struct?: GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference | GoogleBinaryAuthorizationPolicyDefaultAdmissionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_mode: cdktf.stringToTerraform(struct!.enforcementMode),
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
    require_attestations_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requireAttestationsBy),
  }
}

export class GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBinaryAuthorizationPolicyDefaultAdmissionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    if (this._requireAttestationsBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAttestationsBy = this._requireAttestationsBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementMode = undefined;
      this._evaluationMode = undefined;
      this._requireAttestationsBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementMode = value.enforcementMode;
      this._evaluationMode = value.evaluationMode;
      this._requireAttestationsBy = value.requireAttestationsBy;
    }
  }

  // enforcement_mode - computed: false, optional: false, required: true
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // evaluation_mode - computed: false, optional: false, required: true
  private _evaluationMode?: string; 
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
  public set evaluationMode(value: string) {
    this._evaluationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode;
  }

  // require_attestations_by - computed: false, optional: true, required: false
  private _requireAttestationsBy?: string[]; 
  public get requireAttestationsBy() {
    return cdktf.Fn.tolist(this.getListAttribute('require_attestations_by'));
  }
  public set requireAttestationsBy(value: string[]) {
    this._requireAttestationsBy = value;
  }
  public resetRequireAttestationsBy() {
    this._requireAttestationsBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAttestationsByInput() {
    return this._requireAttestationsBy;
  }
}
export interface GoogleBinaryAuthorizationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}
  */
  readonly update?: string;
}

export function googleBinaryAuthorizationPolicyTimeoutsToTerraform(struct?: GoogleBinaryAuthorizationPolicyTimeoutsOutputReference | GoogleBinaryAuthorizationPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleBinaryAuthorizationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBinaryAuthorizationPolicyTimeouts | undefined {
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

  public set internalValue(value: GoogleBinaryAuthorizationPolicyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy google_binary_authorization_policy}
*/
export class GoogleBinaryAuthorizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_binary_authorization_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_binary_authorization_policy google_binary_authorization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBinaryAuthorizationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBinaryAuthorizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_binary_authorization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._globalPolicyEvaluationMode = config.globalPolicyEvaluationMode;
    this._project = config.project;
    this._admissionWhitelistPatterns = config.admissionWhitelistPatterns;
    this._clusterAdmissionRules = config.clusterAdmissionRules;
    this._defaultAdmissionRule.internalValue = config.defaultAdmissionRule;
    this._timeouts.internalValue = config.timeouts;
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

  // global_policy_evaluation_mode - computed: true, optional: true, required: false
  private _globalPolicyEvaluationMode?: string; 
  public get globalPolicyEvaluationMode() {
    return this.getStringAttribute('global_policy_evaluation_mode');
  }
  public set globalPolicyEvaluationMode(value: string) {
    this._globalPolicyEvaluationMode = value;
  }
  public resetGlobalPolicyEvaluationMode() {
    this._globalPolicyEvaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPolicyEvaluationModeInput() {
    return this._globalPolicyEvaluationMode;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // admission_whitelist_patterns - computed: false, optional: true, required: false
  private _admissionWhitelistPatterns?: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[] | cdktf.IResolvable; 
  public get admissionWhitelistPatterns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('admission_whitelist_patterns');
  }
  public set admissionWhitelistPatterns(value: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[] | cdktf.IResolvable) {
    this._admissionWhitelistPatterns = value;
  }
  public resetAdmissionWhitelistPatterns() {
    this._admissionWhitelistPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWhitelistPatternsInput() {
    return this._admissionWhitelistPatterns;
  }

  // cluster_admission_rules - computed: false, optional: true, required: false
  private _clusterAdmissionRules?: GoogleBinaryAuthorizationPolicyClusterAdmissionRules[] | cdktf.IResolvable; 
  public get clusterAdmissionRules() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('cluster_admission_rules')));
  }
  public set clusterAdmissionRules(value: GoogleBinaryAuthorizationPolicyClusterAdmissionRules[] | cdktf.IResolvable) {
    this._clusterAdmissionRules = value;
  }
  public resetClusterAdmissionRules() {
    this._clusterAdmissionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdmissionRulesInput() {
    return this._clusterAdmissionRules;
  }

  // default_admission_rule - computed: false, optional: false, required: true
  private _defaultAdmissionRule = new GoogleBinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(this, "default_admission_rule");
  public get defaultAdmissionRule() {
    return this._defaultAdmissionRule;
  }
  public putDefaultAdmissionRule(value: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule) {
    this._defaultAdmissionRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAdmissionRuleInput() {
    return this._defaultAdmissionRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBinaryAuthorizationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBinaryAuthorizationPolicyTimeouts) {
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
      global_policy_evaluation_mode: cdktf.stringToTerraform(this._globalPolicyEvaluationMode),
      project: cdktf.stringToTerraform(this._project),
      admission_whitelist_patterns: cdktf.listMapper(googleBinaryAuthorizationPolicyAdmissionWhitelistPatternsToTerraform)(this._admissionWhitelistPatterns),
      cluster_admission_rules: cdktf.listMapper(googleBinaryAuthorizationPolicyClusterAdmissionRulesToTerraform)(this._clusterAdmissionRules),
      default_admission_rule: googleBinaryAuthorizationPolicyDefaultAdmissionRuleToTerraform(this._defaultAdmissionRule.internalValue),
      timeouts: googleBinaryAuthorizationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
