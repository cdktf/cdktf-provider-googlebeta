/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleServiceUsageConsumerQuotaOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#dimensions GoogleServiceUsageConsumerQuotaOverride#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * If the new quota would decrease the existing quota by more than 10%, the request is rejected.
  * If 'force' is 'true', that safety check is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#force GoogleServiceUsageConsumerQuotaOverride#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#id GoogleServiceUsageConsumerQuotaOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The limit on the metric, e.g. '/project/region'.
  * 
  * ~> Make sure that 'limit' is in a format that doesn't start with '1/' or contain curly braces.
  * E.g. use '/project/user' instead of '1/{project}/{user}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#limit GoogleServiceUsageConsumerQuotaOverride#limit}
  */
  readonly limit: string;
  /**
  * The metric that should be limited, e.g. 'compute.googleapis.com/cpus'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#metric GoogleServiceUsageConsumerQuotaOverride#metric}
  */
  readonly metric: string;
  /**
  * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#override_value GoogleServiceUsageConsumerQuotaOverride#override_value}
  */
  readonly overrideValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#project GoogleServiceUsageConsumerQuotaOverride#project}
  */
  readonly project?: string;
  /**
  * The service that the metrics belong to, e.g. 'compute.googleapis.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#service GoogleServiceUsageConsumerQuotaOverride#service}
  */
  readonly service: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#timeouts GoogleServiceUsageConsumerQuotaOverride#timeouts}
  */
  readonly timeouts?: GoogleServiceUsageConsumerQuotaOverrideTimeouts;
}
export interface GoogleServiceUsageConsumerQuotaOverrideTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#create GoogleServiceUsageConsumerQuotaOverride#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#delete GoogleServiceUsageConsumerQuotaOverride#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#update GoogleServiceUsageConsumerQuotaOverride#update}
  */
  readonly update?: string;
}

export function googleServiceUsageConsumerQuotaOverrideTimeoutsToTerraform(struct?: GoogleServiceUsageConsumerQuotaOverrideTimeouts | cdktf.IResolvable): any {
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


export function googleServiceUsageConsumerQuotaOverrideTimeoutsToHclTerraform(struct?: GoogleServiceUsageConsumerQuotaOverrideTimeouts | cdktf.IResolvable): any {
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

export class GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleServiceUsageConsumerQuotaOverrideTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleServiceUsageConsumerQuotaOverrideTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override google_service_usage_consumer_quota_override}
*/
export class GoogleServiceUsageConsumerQuotaOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_usage_consumer_quota_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleServiceUsageConsumerQuotaOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleServiceUsageConsumerQuotaOverride to import
  * @param importFromId The id of the existing GoogleServiceUsageConsumerQuotaOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleServiceUsageConsumerQuotaOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_service_usage_consumer_quota_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_service_usage_consumer_quota_override google_service_usage_consumer_quota_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleServiceUsageConsumerQuotaOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleServiceUsageConsumerQuotaOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_usage_consumer_quota_override',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.12.0',
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
    this._dimensions = config.dimensions;
    this._force = config.force;
    this._id = config.id;
    this._limit = config.limit;
    this._metric = config.metric;
    this._overrideValue = config.overrideValue;
    this._project = config.project;
    this._service = config.service;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // limit - computed: false, optional: false, required: true
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_value - computed: false, optional: false, required: true
  private _overrideValue?: string; 
  public get overrideValue() {
    return this.getStringAttribute('override_value');
  }
  public set overrideValue(value: string) {
    this._overrideValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideValueInput() {
    return this._overrideValue;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleServiceUsageConsumerQuotaOverrideTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleServiceUsageConsumerQuotaOverrideTimeouts) {
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
      dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._dimensions),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.stringToTerraform(this._limit),
      metric: cdktf.stringToTerraform(this._metric),
      override_value: cdktf.stringToTerraform(this._overrideValue),
      project: cdktf.stringToTerraform(this._project),
      service: cdktf.stringToTerraform(this._service),
      timeouts: googleServiceUsageConsumerQuotaOverrideTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dimensions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dimensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.stringToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_value: {
        value: cdktf.stringToHclTerraform(this._overrideValue),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleServiceUsageConsumerQuotaOverrideTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleServiceUsageConsumerQuotaOverrideTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
