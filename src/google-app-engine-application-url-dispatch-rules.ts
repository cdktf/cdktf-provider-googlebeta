// https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAppEngineApplicationUrlDispatchRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#project GoogleAppEngineApplicationUrlDispatchRules#project}
  */
  readonly project?: string;
  /**
  * dispatch_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#dispatch_rules GoogleAppEngineApplicationUrlDispatchRules#dispatch_rules}
  */
  readonly dispatchRules: GoogleAppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#timeouts GoogleAppEngineApplicationUrlDispatchRules#timeouts}
  */
  readonly timeouts?: GoogleAppEngineApplicationUrlDispatchRulesTimeouts;
}
export interface GoogleAppEngineApplicationUrlDispatchRulesDispatchRules {
  /**
  * Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#domain GoogleAppEngineApplicationUrlDispatchRules#domain}
  */
  readonly domain?: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#path GoogleAppEngineApplicationUrlDispatchRules#path}
  */
  readonly path: string;
  /**
  * Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#service GoogleAppEngineApplicationUrlDispatchRules#service}
  */
  readonly service: string;
}

export function googleAppEngineApplicationUrlDispatchRulesDispatchRulesToTerraform(struct?: GoogleAppEngineApplicationUrlDispatchRulesDispatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export interface GoogleAppEngineApplicationUrlDispatchRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#create GoogleAppEngineApplicationUrlDispatchRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#delete GoogleAppEngineApplicationUrlDispatchRules#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules#update GoogleAppEngineApplicationUrlDispatchRules#update}
  */
  readonly update?: string;
}

export function googleAppEngineApplicationUrlDispatchRulesTimeoutsToTerraform(struct?: GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference | GoogleAppEngineApplicationUrlDispatchRulesTimeouts | cdktf.IResolvable): any {
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

export class GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineApplicationUrlDispatchRulesTimeouts | undefined {
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

  public set internalValue(value: GoogleAppEngineApplicationUrlDispatchRulesTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}
*/
export class GoogleAppEngineApplicationUrlDispatchRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_application_url_dispatch_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAppEngineApplicationUrlDispatchRulesConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAppEngineApplicationUrlDispatchRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_application_url_dispatch_rules',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.20.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._dispatchRules = config.dispatchRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dispatch_rules - computed: false, optional: false, required: true
  private _dispatchRules?: GoogleAppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable; 
  public get dispatchRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dispatch_rules');
  }
  public set dispatchRules(value: GoogleAppEngineApplicationUrlDispatchRulesDispatchRules[] | cdktf.IResolvable) {
    this._dispatchRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRulesInput() {
    return this._dispatchRules;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAppEngineApplicationUrlDispatchRulesTimeouts) {
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
      project: cdktf.stringToTerraform(this._project),
      dispatch_rules: cdktf.listMapper(googleAppEngineApplicationUrlDispatchRulesDispatchRulesToTerraform)(this._dispatchRules),
      timeouts: googleAppEngineApplicationUrlDispatchRulesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
