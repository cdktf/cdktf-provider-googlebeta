// https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGameServicesGameServerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique id for the deployment config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#config_id GoogleGameServicesGameServerConfig#config_id}
  */
  readonly configId: string;
  /**
  * A unique id for the deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#deployment_id GoogleGameServicesGameServerConfig#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * The description of the game server config.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#description GoogleGameServicesGameServerConfig#description}
  */
  readonly description?: string;
  /**
  * The labels associated with this game server config. Each label is a
key-value pair.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of the Deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#location GoogleGameServicesGameServerConfig#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#project GoogleGameServicesGameServerConfig#project}
  */
  readonly project?: string;
  /**
  * fleet_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#fleet_configs GoogleGameServicesGameServerConfig#fleet_configs}
  */
  readonly fleetConfigs: GoogleGameServicesGameServerConfigFleetConfigs[] | cdktf.IResolvable;
  /**
  * scaling_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#scaling_configs GoogleGameServicesGameServerConfig#scaling_configs}
  */
  readonly scalingConfigs?: GoogleGameServicesGameServerConfigScalingConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#timeouts GoogleGameServicesGameServerConfig#timeouts}
  */
  readonly timeouts?: GoogleGameServicesGameServerConfigTimeouts;
}
export interface GoogleGameServicesGameServerConfigFleetConfigs {
  /**
  * The fleet spec, which is sent to Agones to configure fleet.
The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

* fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
* fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#fleet_spec GoogleGameServicesGameServerConfig#fleet_spec}
  */
  readonly fleetSpec: string;
  /**
  * The name of the FleetConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}
  */
  readonly name?: string;
}

export function googleGameServicesGameServerConfigFleetConfigsToTerraform(struct?: GoogleGameServicesGameServerConfigFleetConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_spec: cdktf.stringToTerraform(struct!.fleetSpec),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface GoogleGameServicesGameServerConfigScalingConfigsSchedules {
  /**
  * The duration for the cron job event. The duration of the event is effective
after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#cron_job_duration GoogleGameServicesGameServerConfig#cron_job_duration}
  */
  readonly cronJobDuration?: string;
  /**
  * The cron definition of the scheduled event. See
https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as
defined by the realm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#cron_spec GoogleGameServicesGameServerConfig#cron_spec}
  */
  readonly cronSpec?: string;
  /**
  * The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#end_time GoogleGameServicesGameServerConfig#end_time}
  */
  readonly endTime?: string;
  /**
  * The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#start_time GoogleGameServicesGameServerConfig#start_time}
  */
  readonly startTime?: string;
}

export function googleGameServicesGameServerConfigScalingConfigsSchedulesToTerraform(struct?: GoogleGameServicesGameServerConfigScalingConfigsSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_job_duration: cdktf.stringToTerraform(struct!.cronJobDuration),
    cron_spec: cdktf.stringToTerraform(struct!.cronSpec),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface GoogleGameServicesGameServerConfigScalingConfigsSelectors {
  /**
  * Set of labels to group by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#labels GoogleGameServicesGameServerConfig#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function googleGameServicesGameServerConfigScalingConfigsSelectorsToTerraform(struct?: GoogleGameServicesGameServerConfigScalingConfigsSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export interface GoogleGameServicesGameServerConfigScalingConfigs {
  /**
  * Fleet autoscaler spec, which is sent to Agones.
Example spec can be found :
https://agones.dev/site/docs/reference/fleetautoscaler/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#fleet_autoscaler_spec GoogleGameServicesGameServerConfig#fleet_autoscaler_spec}
  */
  readonly fleetAutoscalerSpec: string;
  /**
  * The name of the ScalingConfig
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#name GoogleGameServicesGameServerConfig#name}
  */
  readonly name: string;
  /**
  * schedules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#schedules GoogleGameServicesGameServerConfig#schedules}
  */
  readonly schedules?: GoogleGameServicesGameServerConfigScalingConfigsSchedules[] | cdktf.IResolvable;
  /**
  * selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#selectors GoogleGameServicesGameServerConfig#selectors}
  */
  readonly selectors?: GoogleGameServicesGameServerConfigScalingConfigsSelectors[] | cdktf.IResolvable;
}

export function googleGameServicesGameServerConfigScalingConfigsToTerraform(struct?: GoogleGameServicesGameServerConfigScalingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleet_autoscaler_spec: cdktf.stringToTerraform(struct!.fleetAutoscalerSpec),
    name: cdktf.stringToTerraform(struct!.name),
    schedules: cdktf.listMapper(googleGameServicesGameServerConfigScalingConfigsSchedulesToTerraform)(struct!.schedules),
    selectors: cdktf.listMapper(googleGameServicesGameServerConfigScalingConfigsSelectorsToTerraform)(struct!.selectors),
  }
}

export interface GoogleGameServicesGameServerConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#create GoogleGameServicesGameServerConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config#delete GoogleGameServicesGameServerConfig#delete}
  */
  readonly delete?: string;
}

export function googleGameServicesGameServerConfigTimeoutsToTerraform(struct?: GoogleGameServicesGameServerConfigTimeoutsOutputReference | GoogleGameServicesGameServerConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GoogleGameServicesGameServerConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGameServicesGameServerConfigTimeouts | undefined {
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

  public set internalValue(value: GoogleGameServicesGameServerConfigTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config google_game_services_game_server_config}
*/
export class GoogleGameServicesGameServerConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_game_services_game_server_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_config google_game_services_game_server_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGameServicesGameServerConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGameServicesGameServerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_config',
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
    this._configId = config.configId;
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._fleetConfigs = config.fleetConfigs;
    this._scalingConfigs = config.scalingConfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // fleet_configs - computed: false, optional: false, required: true
  private _fleetConfigs?: GoogleGameServicesGameServerConfigFleetConfigs[] | cdktf.IResolvable; 
  public get fleetConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('fleet_configs');
  }
  public set fleetConfigs(value: GoogleGameServicesGameServerConfigFleetConfigs[] | cdktf.IResolvable) {
    this._fleetConfigs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetConfigsInput() {
    return this._fleetConfigs;
  }

  // scaling_configs - computed: false, optional: true, required: false
  private _scalingConfigs?: GoogleGameServicesGameServerConfigScalingConfigs[] | cdktf.IResolvable; 
  public get scalingConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scaling_configs');
  }
  public set scalingConfigs(value: GoogleGameServicesGameServerConfigScalingConfigs[] | cdktf.IResolvable) {
    this._scalingConfigs = value;
  }
  public resetScalingConfigs() {
    this._scalingConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigsInput() {
    return this._scalingConfigs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGameServicesGameServerConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGameServicesGameServerConfigTimeouts) {
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
      config_id: cdktf.stringToTerraform(this._configId),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      fleet_configs: cdktf.listMapper(googleGameServicesGameServerConfigFleetConfigsToTerraform)(this._fleetConfigs),
      scaling_configs: cdktf.listMapper(googleGameServicesGameServerConfigScalingConfigsToTerraform)(this._scalingConfigs),
      timeouts: googleGameServicesGameServerConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
