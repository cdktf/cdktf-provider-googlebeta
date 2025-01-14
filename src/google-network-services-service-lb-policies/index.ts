// https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkServicesServiceLbPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#description GoogleNetworkServicesServiceLbPolicies#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#id GoogleNetworkServicesServiceLbPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the ServiceLbPolicy resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#labels GoogleNetworkServicesServiceLbPolicies#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The type of load balancing algorithm to be used. The default behavior is WATERFALL_BY_REGION. Possible values: ["SPRAY_TO_REGION", "SPRAY_TO_WORLD", "WATERFALL_BY_REGION", "WATERFALL_BY_ZONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#load_balancing_algorithm GoogleNetworkServicesServiceLbPolicies#load_balancing_algorithm}
  */
  readonly loadBalancingAlgorithm?: string;
  /**
  * The location of the service lb policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#location GoogleNetworkServicesServiceLbPolicies#location}
  */
  readonly location: string;
  /**
  * Name of the ServiceLbPolicy resource. It matches pattern 'projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#name GoogleNetworkServicesServiceLbPolicies#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#project GoogleNetworkServicesServiceLbPolicies#project}
  */
  readonly project?: string;
  /**
  * auto_capacity_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#auto_capacity_drain GoogleNetworkServicesServiceLbPolicies#auto_capacity_drain}
  */
  readonly autoCapacityDrain?: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain;
  /**
  * failover_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#failover_config GoogleNetworkServicesServiceLbPolicies#failover_config}
  */
  readonly failoverConfig?: GoogleNetworkServicesServiceLbPoliciesFailoverConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#timeouts GoogleNetworkServicesServiceLbPolicies#timeouts}
  */
  readonly timeouts?: GoogleNetworkServicesServiceLbPoliciesTimeouts;
}
export interface GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain {
  /**
  * Optional. If set to 'True', an unhealthy MIG/NEG will be set as drained. - An MIG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the MIG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#enable GoogleNetworkServicesServiceLbPolicies#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function googleNetworkServicesServiceLbPoliciesAutoCapacityDrainToTerraform(struct?: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference | GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function googleNetworkServicesServiceLbPoliciesAutoCapacityDrainToHclTerraform(struct?: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference | GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface GoogleNetworkServicesServiceLbPoliciesFailoverConfig {
  /**
  * Optional. The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#failover_health_threshold GoogleNetworkServicesServiceLbPolicies#failover_health_threshold}
  */
  readonly failoverHealthThreshold: number;
}

export function googleNetworkServicesServiceLbPoliciesFailoverConfigToTerraform(struct?: GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference | GoogleNetworkServicesServiceLbPoliciesFailoverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_health_threshold: cdktf.numberToTerraform(struct!.failoverHealthThreshold),
  }
}


export function googleNetworkServicesServiceLbPoliciesFailoverConfigToHclTerraform(struct?: GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference | GoogleNetworkServicesServiceLbPoliciesFailoverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_health_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failoverHealthThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesServiceLbPoliciesFailoverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverHealthThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverHealthThreshold = this._failoverHealthThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesServiceLbPoliciesFailoverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverHealthThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverHealthThreshold = value.failoverHealthThreshold;
    }
  }

  // failover_health_threshold - computed: false, optional: false, required: true
  private _failoverHealthThreshold?: number; 
  public get failoverHealthThreshold() {
    return this.getNumberAttribute('failover_health_threshold');
  }
  public set failoverHealthThreshold(value: number) {
    this._failoverHealthThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverHealthThresholdInput() {
    return this._failoverHealthThreshold;
  }
}
export interface GoogleNetworkServicesServiceLbPoliciesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#create GoogleNetworkServicesServiceLbPolicies#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#delete GoogleNetworkServicesServiceLbPolicies#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#update GoogleNetworkServicesServiceLbPolicies#update}
  */
  readonly update?: string;
}

export function googleNetworkServicesServiceLbPoliciesTimeoutsToTerraform(struct?: GoogleNetworkServicesServiceLbPoliciesTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkServicesServiceLbPoliciesTimeoutsToHclTerraform(struct?: GoogleNetworkServicesServiceLbPoliciesTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkServicesServiceLbPoliciesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkServicesServiceLbPoliciesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies google_network_services_service_lb_policies}
*/
export class GoogleNetworkServicesServiceLbPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_service_lb_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkServicesServiceLbPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkServicesServiceLbPolicies to import
  * @param importFromId The id of the existing GoogleNetworkServicesServiceLbPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkServicesServiceLbPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_service_lb_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_services_service_lb_policies google_network_services_service_lb_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkServicesServiceLbPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkServicesServiceLbPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_service_lb_policies',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.16.0',
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
    this._labels = config.labels;
    this._loadBalancingAlgorithm = config.loadBalancingAlgorithm;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._autoCapacityDrain.internalValue = config.autoCapacityDrain;
    this._failoverConfig.internalValue = config.failoverConfig;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // load_balancing_algorithm - computed: false, optional: true, required: false
  private _loadBalancingAlgorithm?: string; 
  public get loadBalancingAlgorithm() {
    return this.getStringAttribute('load_balancing_algorithm');
  }
  public set loadBalancingAlgorithm(value: string) {
    this._loadBalancingAlgorithm = value;
  }
  public resetLoadBalancingAlgorithm() {
    this._loadBalancingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingAlgorithmInput() {
    return this._loadBalancingAlgorithm;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // auto_capacity_drain - computed: false, optional: true, required: false
  private _autoCapacityDrain = new GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainOutputReference(this, "auto_capacity_drain");
  public get autoCapacityDrain() {
    return this._autoCapacityDrain;
  }
  public putAutoCapacityDrain(value: GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrain) {
    this._autoCapacityDrain.internalValue = value;
  }
  public resetAutoCapacityDrain() {
    this._autoCapacityDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCapacityDrainInput() {
    return this._autoCapacityDrain.internalValue;
  }

  // failover_config - computed: false, optional: true, required: false
  private _failoverConfig = new GoogleNetworkServicesServiceLbPoliciesFailoverConfigOutputReference(this, "failover_config");
  public get failoverConfig() {
    return this._failoverConfig;
  }
  public putFailoverConfig(value: GoogleNetworkServicesServiceLbPoliciesFailoverConfig) {
    this._failoverConfig.internalValue = value;
  }
  public resetFailoverConfig() {
    this._failoverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverConfigInput() {
    return this._failoverConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkServicesServiceLbPoliciesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkServicesServiceLbPoliciesTimeouts) {
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
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      load_balancing_algorithm: cdktf.stringToTerraform(this._loadBalancingAlgorithm),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      auto_capacity_drain: googleNetworkServicesServiceLbPoliciesAutoCapacityDrainToTerraform(this._autoCapacityDrain.internalValue),
      failover_config: googleNetworkServicesServiceLbPoliciesFailoverConfigToTerraform(this._failoverConfig.internalValue),
      timeouts: googleNetworkServicesServiceLbPoliciesTimeoutsToTerraform(this._timeouts.internalValue),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      load_balancing_algorithm: {
        value: cdktf.stringToHclTerraform(this._loadBalancingAlgorithm),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      auto_capacity_drain: {
        value: googleNetworkServicesServiceLbPoliciesAutoCapacityDrainToHclTerraform(this._autoCapacityDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesServiceLbPoliciesAutoCapacityDrainList",
      },
      failover_config: {
        value: googleNetworkServicesServiceLbPoliciesFailoverConfigToHclTerraform(this._failoverConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesServiceLbPoliciesFailoverConfigList",
      },
      timeouts: {
        value: googleNetworkServicesServiceLbPoliciesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkServicesServiceLbPoliciesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
