// https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDnsResponsePolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#dns_name GoogleDnsResponsePolicyRule#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#project GoogleDnsResponsePolicyRule#project}
  */
  readonly project?: string;
  /**
  * Identifies the response policy addressed by this request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#response_policy GoogleDnsResponsePolicyRule#response_policy}
  */
  readonly responsePolicy: string;
  /**
  * An identifier for this rule. Must be unique with the ResponsePolicy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#rule_name GoogleDnsResponsePolicyRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * local_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#local_data GoogleDnsResponsePolicyRule#local_data}
  */
  readonly localData?: GoogleDnsResponsePolicyRuleLocalData;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#timeouts GoogleDnsResponsePolicyRule#timeouts}
  */
  readonly timeouts?: GoogleDnsResponsePolicyRuleTimeouts;
}
export interface GoogleDnsResponsePolicyRuleLocalDataLocalDatas {
  /**
  * For example, www.example.com.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#name GoogleDnsResponsePolicyRule#name}
  */
  readonly name: string;
  /**
  * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#rrdatas GoogleDnsResponsePolicyRule#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * Number of seconds that this ResourceRecordSet can be cached by
resolvers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#ttl GoogleDnsResponsePolicyRule#ttl}
  */
  readonly ttl?: number;
  /**
  * One of valid DNS resource types. Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#type GoogleDnsResponsePolicyRule#type}
  */
  readonly type: string;
}

export function googleDnsResponsePolicyRuleLocalDataLocalDatasToTerraform(struct?: GoogleDnsResponsePolicyRuleLocalDataLocalDatas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform)(struct!.rrdatas),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface GoogleDnsResponsePolicyRuleLocalData {
  /**
  * local_datas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#local_datas GoogleDnsResponsePolicyRule#local_datas}
  */
  readonly localDatas: GoogleDnsResponsePolicyRuleLocalDataLocalDatas[] | cdktf.IResolvable;
}

export function googleDnsResponsePolicyRuleLocalDataToTerraform(struct?: GoogleDnsResponsePolicyRuleLocalDataOutputReference | GoogleDnsResponsePolicyRuleLocalData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_datas: cdktf.listMapper(googleDnsResponsePolicyRuleLocalDataLocalDatasToTerraform)(struct!.localDatas),
  }
}

export class GoogleDnsResponsePolicyRuleLocalDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsResponsePolicyRuleLocalData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDatas = this._localDatas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsResponsePolicyRuleLocalData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDatas = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDatas = value.localDatas;
    }
  }

  // local_datas - computed: false, optional: false, required: true
  private _localDatas?: GoogleDnsResponsePolicyRuleLocalDataLocalDatas[] | cdktf.IResolvable; 
  public get localDatas() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('local_datas');
  }
  public set localDatas(value: GoogleDnsResponsePolicyRuleLocalDataLocalDatas[] | cdktf.IResolvable) {
    this._localDatas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatasInput() {
    return this._localDatas;
  }
}
export interface GoogleDnsResponsePolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#create GoogleDnsResponsePolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#delete GoogleDnsResponsePolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule#update GoogleDnsResponsePolicyRule#update}
  */
  readonly update?: string;
}

export function googleDnsResponsePolicyRuleTimeoutsToTerraform(struct?: GoogleDnsResponsePolicyRuleTimeoutsOutputReference | GoogleDnsResponsePolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class GoogleDnsResponsePolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsResponsePolicyRuleTimeouts | undefined {
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

  public set internalValue(value: GoogleDnsResponsePolicyRuleTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule google_dns_response_policy_rule}
*/
export class GoogleDnsResponsePolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_response_policy_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_response_policy_rule google_dns_response_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDnsResponsePolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDnsResponsePolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_response_policy_rule',
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
    this._dnsName = config.dnsName;
    this._project = config.project;
    this._responsePolicy = config.responsePolicy;
    this._ruleName = config.ruleName;
    this._localData.internalValue = config.localData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // response_policy - computed: false, optional: false, required: true
  private _responsePolicy?: string; 
  public get responsePolicy() {
    return this.getStringAttribute('response_policy');
  }
  public set responsePolicy(value: string) {
    this._responsePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePolicyInput() {
    return this._responsePolicy;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // local_data - computed: false, optional: true, required: false
  private _localData = new GoogleDnsResponsePolicyRuleLocalDataOutputReference(this, "local_data");
  public get localData() {
    return this._localData;
  }
  public putLocalData(value: GoogleDnsResponsePolicyRuleLocalData) {
    this._localData.internalValue = value;
  }
  public resetLocalData() {
    this._localData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDataInput() {
    return this._localData.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDnsResponsePolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDnsResponsePolicyRuleTimeouts) {
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
      dns_name: cdktf.stringToTerraform(this._dnsName),
      project: cdktf.stringToTerraform(this._project),
      response_policy: cdktf.stringToTerraform(this._responsePolicy),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      local_data: googleDnsResponsePolicyRuleLocalDataToTerraform(this._localData.internalValue),
      timeouts: googleDnsResponsePolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
