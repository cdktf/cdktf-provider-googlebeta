/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApigeeFlowhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag that specifies whether execution should continue if the flow hook throws an exception. Set to true to continue execution. Set to false to stop execution if the flow hook throws an exception. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#continue_on_error GoogleApigeeFlowhook#continue_on_error}
  */
  readonly continueOnError?: boolean | cdktf.IResolvable;
  /**
  * Description of the flow hook.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#description GoogleApigeeFlowhook#description}
  */
  readonly description?: string;
  /**
  * The resource ID of the environment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#environment GoogleApigeeFlowhook#environment}
  */
  readonly environment: string;
  /**
  * Where in the API call flow the flow hook is invoked. Must be one of PreProxyFlowHook, PostProxyFlowHook, PreTargetFlowHook, or PostTargetFlowHook.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#flow_hook_point GoogleApigeeFlowhook#flow_hook_point}
  */
  readonly flowHookPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#id GoogleApigeeFlowhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Apigee Organization associated with the environment
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#org_id GoogleApigeeFlowhook#org_id}
  */
  readonly orgId: string;
  /**
  * Id of the Sharedflow attaching to a flowhook point.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#sharedflow GoogleApigeeFlowhook#sharedflow}
  */
  readonly sharedflow: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#timeouts GoogleApigeeFlowhook#timeouts}
  */
  readonly timeouts?: GoogleApigeeFlowhookTimeouts;
}
export interface GoogleApigeeFlowhookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#create GoogleApigeeFlowhook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook#delete GoogleApigeeFlowhook#delete}
  */
  readonly delete?: string;
}

export function googleApigeeFlowhookTimeoutsToTerraform(struct?: GoogleApigeeFlowhookTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GoogleApigeeFlowhookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApigeeFlowhookTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApigeeFlowhookTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook google_apigee_flowhook}
*/
export class GoogleApigeeFlowhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_flowhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_apigee_flowhook google_apigee_flowhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApigeeFlowhookConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApigeeFlowhookConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_flowhook',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.76.0',
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
    this._continueOnError = config.continueOnError;
    this._description = config.description;
    this._environment = config.environment;
    this._flowHookPoint = config.flowHookPoint;
    this._id = config.id;
    this._orgId = config.orgId;
    this._sharedflow = config.sharedflow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // continue_on_error - computed: false, optional: true, required: false
  private _continueOnError?: boolean | cdktf.IResolvable; 
  public get continueOnError() {
    return this.getBooleanAttribute('continue_on_error');
  }
  public set continueOnError(value: boolean | cdktf.IResolvable) {
    this._continueOnError = value;
  }
  public resetContinueOnError() {
    this._continueOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnErrorInput() {
    return this._continueOnError;
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // flow_hook_point - computed: false, optional: false, required: true
  private _flowHookPoint?: string; 
  public get flowHookPoint() {
    return this.getStringAttribute('flow_hook_point');
  }
  public set flowHookPoint(value: string) {
    this._flowHookPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowHookPointInput() {
    return this._flowHookPoint;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // sharedflow - computed: false, optional: false, required: true
  private _sharedflow?: string; 
  public get sharedflow() {
    return this.getStringAttribute('sharedflow');
  }
  public set sharedflow(value: string) {
    this._sharedflow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedflowInput() {
    return this._sharedflow;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApigeeFlowhookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApigeeFlowhookTimeouts) {
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
      continue_on_error: cdktf.booleanToTerraform(this._continueOnError),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      flow_hook_point: cdktf.stringToTerraform(this._flowHookPoint),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      sharedflow: cdktf.stringToTerraform(this._sharedflow),
      timeouts: googleApigeeFlowhookTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
