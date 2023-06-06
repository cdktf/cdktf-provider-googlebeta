// https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBinaryAuthorizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#description GoogleBinaryAuthorizationPolicy#description}
  */
  readonly description?: string;
  /**
  * Controls the evaluation of a Google-maintained global admission policy
for common system-level images. Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#global_policy_evaluation_mode GoogleBinaryAuthorizationPolicy#global_policy_evaluation_mode}
  */
  readonly globalPolicyEvaluationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#id GoogleBinaryAuthorizationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#project GoogleBinaryAuthorizationPolicy#project}
  */
  readonly project?: string;
  /**
  * admission_whitelist_patterns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#admission_whitelist_patterns GoogleBinaryAuthorizationPolicy#admission_whitelist_patterns}
  */
  readonly admissionWhitelistPatterns?: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[] | cdktf.IResolvable;
  /**
  * cluster_admission_rules block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#cluster_admission_rules GoogleBinaryAuthorizationPolicy#cluster_admission_rules}
  */
  readonly clusterAdmissionRules?: GoogleBinaryAuthorizationPolicyClusterAdmissionRules[] | cdktf.IResolvable;
  /**
  * default_admission_rule block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#default_admission_rule GoogleBinaryAuthorizationPolicy#default_admission_rule}
  */
  readonly defaultAdmissionRule: GoogleBinaryAuthorizationPolicyDefaultAdmissionRule;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#timeouts GoogleBinaryAuthorizationPolicy#timeouts}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#name_pattern GoogleBinaryAuthorizationPolicy#name_pattern}
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

export class GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePattern = this._namePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namePattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namePattern = value.namePattern;
    }
  }

  // name_pattern - computed: false, optional: false, required: true
  private _namePattern?: string; 
  public get namePattern() {
    return this.getStringAttribute('name_pattern');
  }
  public set namePattern(value: string) {
    this._namePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePatternInput() {
    return this._namePattern;
  }
}

export class GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList extends cdktf.ComplexList {
  public internalValue? : GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[] | cdktf.IResolvable

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
  public get(index: number): GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference {
    return new GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBinaryAuthorizationPolicyClusterAdmissionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#cluster GoogleBinaryAuthorizationPolicy#cluster}
  */
  readonly cluster: string;
  /**
  * The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}
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
    require_attestations_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requireAttestationsBy),
  }
}

export class GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBinaryAuthorizationPolicyClusterAdmissionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
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

  public set internalValue(value: GoogleBinaryAuthorizationPolicyClusterAdmissionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._enforcementMode = undefined;
      this._evaluationMode = undefined;
      this._requireAttestationsBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._enforcementMode = value.enforcementMode;
      this._evaluationMode = value.evaluationMode;
      this._requireAttestationsBy = value.requireAttestationsBy;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

export class GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleBinaryAuthorizationPolicyClusterAdmissionRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference {
    return new GoogleBinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBinaryAuthorizationPolicyDefaultAdmissionRule {
  /**
  * The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#enforcement_mode GoogleBinaryAuthorizationPolicy#enforcement_mode}
  */
  readonly enforcementMode: string;
  /**
  * How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#evaluation_mode GoogleBinaryAuthorizationPolicy#evaluation_mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#require_attestations_by GoogleBinaryAuthorizationPolicy#require_attestations_by}
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
    require_attestations_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requireAttestationsBy),
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#create GoogleBinaryAuthorizationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#delete GoogleBinaryAuthorizationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy#update GoogleBinaryAuthorizationPolicy#update}
  */
  readonly update?: string;
}

export function googleBinaryAuthorizationPolicyTimeoutsToTerraform(struct?: GoogleBinaryAuthorizationPolicyTimeouts | cdktf.IResolvable): any {
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBinaryAuthorizationPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBinaryAuthorizationPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy google_binary_authorization_policy}
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
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_binary_authorization_policy google_binary_authorization_policy} Resource
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
        providerVersion: '4.68.0',
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
    this._description = config.description;
    this._globalPolicyEvaluationMode = config.globalPolicyEvaluationMode;
    this._id = config.id;
    this._project = config.project;
    this._admissionWhitelistPatterns.internalValue = config.admissionWhitelistPatterns;
    this._clusterAdmissionRules.internalValue = config.clusterAdmissionRules;
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
  private _admissionWhitelistPatterns = new GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatternsList(this, "admission_whitelist_patterns", false);
  public get admissionWhitelistPatterns() {
    return this._admissionWhitelistPatterns;
  }
  public putAdmissionWhitelistPatterns(value: GoogleBinaryAuthorizationPolicyAdmissionWhitelistPatterns[] | cdktf.IResolvable) {
    this._admissionWhitelistPatterns.internalValue = value;
  }
  public resetAdmissionWhitelistPatterns() {
    this._admissionWhitelistPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionWhitelistPatternsInput() {
    return this._admissionWhitelistPatterns.internalValue;
  }

  // cluster_admission_rules - computed: false, optional: true, required: false
  private _clusterAdmissionRules = new GoogleBinaryAuthorizationPolicyClusterAdmissionRulesList(this, "cluster_admission_rules", true);
  public get clusterAdmissionRules() {
    return this._clusterAdmissionRules;
  }
  public putClusterAdmissionRules(value: GoogleBinaryAuthorizationPolicyClusterAdmissionRules[] | cdktf.IResolvable) {
    this._clusterAdmissionRules.internalValue = value;
  }
  public resetClusterAdmissionRules() {
    this._clusterAdmissionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdmissionRulesInput() {
    return this._clusterAdmissionRules.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      admission_whitelist_patterns: cdktf.listMapper(googleBinaryAuthorizationPolicyAdmissionWhitelistPatternsToTerraform, true)(this._admissionWhitelistPatterns.internalValue),
      cluster_admission_rules: cdktf.listMapper(googleBinaryAuthorizationPolicyClusterAdmissionRulesToTerraform, true)(this._clusterAdmissionRules.internalValue),
      default_admission_rule: googleBinaryAuthorizationPolicyDefaultAdmissionRuleToTerraform(this._defaultAdmissionRule.internalValue),
      timeouts: googleBinaryAuthorizationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
