/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDnsResponsePolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#behavior GoogleDnsResponsePolicyRule#behavior}
  */
  readonly behavior?: string;
  /**
  * The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#dns_name GoogleDnsResponsePolicyRule#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#id GoogleDnsResponsePolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#project GoogleDnsResponsePolicyRule#project}
  */
  readonly project?: string;
  /**
  * Identifies the response policy addressed by this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#response_policy GoogleDnsResponsePolicyRule#response_policy}
  */
  readonly responsePolicy: string;
  /**
  * An identifier for this rule. Must be unique with the ResponsePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#rule_name GoogleDnsResponsePolicyRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * local_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#local_data GoogleDnsResponsePolicyRule#local_data}
  */
  readonly localData?: GoogleDnsResponsePolicyRuleLocalData;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#timeouts GoogleDnsResponsePolicyRule#timeouts}
  */
  readonly timeouts?: GoogleDnsResponsePolicyRuleTimeouts;
}
export interface GoogleDnsResponsePolicyRuleLocalDataLocalDatas {
  /**
  * For example, www.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#name GoogleDnsResponsePolicyRule#name}
  */
  readonly name: string;
  /**
  * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#rrdatas GoogleDnsResponsePolicyRule#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * Number of seconds that this ResourceRecordSet can be cached by
  * resolvers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#ttl GoogleDnsResponsePolicyRule#ttl}
  */
  readonly ttl?: number;
  /**
  * One of valid DNS resource types. Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#type GoogleDnsResponsePolicyRule#type}
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
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrdatas),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleDnsResponsePolicyRuleLocalDataLocalDatasToHclTerraform(struct?: GoogleDnsResponsePolicyRuleLocalDataLocalDatas | cdktf.IResolvable): any {
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
    rrdatas: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rrdatas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDnsResponsePolicyRuleLocalDataLocalDatas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsResponsePolicyRuleLocalDataLocalDatas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rrdatas = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rrdatas = value.rrdatas;
      this._ttl = value.ttl;
      this._type = value.type;
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoogleDnsResponsePolicyRuleLocalDataLocalDatasList extends cdktf.ComplexList {
  public internalValue? : GoogleDnsResponsePolicyRuleLocalDataLocalDatas[] | cdktf.IResolvable

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
  public get(index: number): GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference {
    return new GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsResponsePolicyRuleLocalData {
  /**
  * local_datas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#local_datas GoogleDnsResponsePolicyRule#local_datas}
  */
  readonly localDatas: GoogleDnsResponsePolicyRuleLocalDataLocalDatas[] | cdktf.IResolvable;
}

export function googleDnsResponsePolicyRuleLocalDataToTerraform(struct?: GoogleDnsResponsePolicyRuleLocalDataOutputReference | GoogleDnsResponsePolicyRuleLocalData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_datas: cdktf.listMapper(googleDnsResponsePolicyRuleLocalDataLocalDatasToTerraform, true)(struct!.localDatas),
  }
}


export function googleDnsResponsePolicyRuleLocalDataToHclTerraform(struct?: GoogleDnsResponsePolicyRuleLocalDataOutputReference | GoogleDnsResponsePolicyRuleLocalData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_datas: {
      value: cdktf.listMapperHcl(googleDnsResponsePolicyRuleLocalDataLocalDatasToHclTerraform, true)(struct!.localDatas),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsResponsePolicyRuleLocalDataLocalDatasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._localDatas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDatas = this._localDatas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsResponsePolicyRuleLocalData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDatas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDatas.internalValue = value.localDatas;
    }
  }

  // local_datas - computed: false, optional: false, required: true
  private _localDatas = new GoogleDnsResponsePolicyRuleLocalDataLocalDatasList(this, "local_datas", false);
  public get localDatas() {
    return this._localDatas;
  }
  public putLocalDatas(value: GoogleDnsResponsePolicyRuleLocalDataLocalDatas[] | cdktf.IResolvable) {
    this._localDatas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatasInput() {
    return this._localDatas.internalValue;
  }
}
export interface GoogleDnsResponsePolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#create GoogleDnsResponsePolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#delete GoogleDnsResponsePolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#update GoogleDnsResponsePolicyRule#update}
  */
  readonly update?: string;
}

export function googleDnsResponsePolicyRuleTimeoutsToTerraform(struct?: GoogleDnsResponsePolicyRuleTimeouts | cdktf.IResolvable): any {
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


export function googleDnsResponsePolicyRuleTimeoutsToHclTerraform(struct?: GoogleDnsResponsePolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class GoogleDnsResponsePolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDnsResponsePolicyRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDnsResponsePolicyRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule google_dns_response_policy_rule}
*/
export class GoogleDnsResponsePolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_response_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDnsResponsePolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDnsResponsePolicyRule to import
  * @param importFromId The id of the existing GoogleDnsResponsePolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDnsResponsePolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dns_response_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_response_policy_rule google_dns_response_policy_rule} Resource
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
        providerVersion: '6.21.0',
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
    this._behavior = config.behavior;
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._project = config.project;
    this._responsePolicy = config.responsePolicy;
    this._ruleName = config.ruleName;
    this._localData.internalValue = config.localData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behavior - computed: false, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

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
      behavior: cdktf.stringToTerraform(this._behavior),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      response_policy: cdktf.stringToTerraform(this._responsePolicy),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      local_data: googleDnsResponsePolicyRuleLocalDataToTerraform(this._localData.internalValue),
      timeouts: googleDnsResponsePolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behavior: {
        value: cdktf.stringToHclTerraform(this._behavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_policy: {
        value: cdktf.stringToHclTerraform(this._responsePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_data: {
        value: googleDnsResponsePolicyRuleLocalDataToHclTerraform(this._localData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsResponsePolicyRuleLocalDataList",
      },
      timeouts: {
        value: googleDnsResponsePolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDnsResponsePolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
