/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_billing_account_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBillingAccountIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_billing_account_iam_policy#billing_account_id GoogleBillingAccountIamPolicy#billing_account_id}
  */
  readonly billingAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_billing_account_iam_policy#id GoogleBillingAccountIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_billing_account_iam_policy#policy_data GoogleBillingAccountIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_billing_account_iam_policy google_billing_account_iam_policy}
*/
export class GoogleBillingAccountIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_billing_account_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_billing_account_iam_policy google_billing_account_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBillingAccountIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBillingAccountIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_billing_account_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.71.0',
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
    this._billingAccountId = config.billingAccountId;
    this._id = config.id;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_id - computed: false, optional: false, required: true
  private _billingAccountId?: string; 
  public get billingAccountId() {
    return this.getStringAttribute('billing_account_id');
  }
  public set billingAccountId(value: string) {
    this._billingAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountIdInput() {
    return this._billingAccountId;
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

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account_id: cdktf.stringToTerraform(this._billingAccountId),
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }
}
