// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAppEngineStandardAppVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allows App Engine second generation runtimes to access the legacy bundled services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#app_engine_apis GoogleAppEngineStandardAppVersion#app_engine_apis}
  */
  readonly appEngineApis?: boolean | cdktf.IResolvable;
  /**
  * If set to 'true', the service will be deleted if it is the last version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#delete_service_on_destroy GoogleAppEngineStandardAppVersion#delete_service_on_destroy}
  */
  readonly deleteServiceOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Environment variables available to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#env_variables GoogleAppEngineStandardAppVersion#env_variables}
  */
  readonly envVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of the types of messages that this application is able to receive. Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#inbound_services GoogleAppEngineStandardAppVersion#inbound_services}
  */
  readonly inboundServices?: string[];
  /**
  * Instance class that is used to run this version. Valid values are
  * AutomaticScaling: F1, F2, F4, F4_1G
  * BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
  * Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#instance_class GoogleAppEngineStandardAppVersion#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * If set to 'true', the application version will not be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#noop_on_destroy GoogleAppEngineStandardAppVersion#noop_on_destroy}
  */
  readonly noopOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}
  */
  readonly project?: string;
  /**
  * Desired runtime. Example python27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#runtime GoogleAppEngineStandardAppVersion#runtime}
  */
  readonly runtime: string;
  /**
  * The version of the API in the given runtime environment.
  * Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
  * Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#runtime_api_version GoogleAppEngineStandardAppVersion#runtime_api_version}
  */
  readonly runtimeApiVersion?: string;
  /**
  * AppEngine service resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#service GoogleAppEngineStandardAppVersion#service}
  */
  readonly service: string;
  /**
  * The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#service_account GoogleAppEngineStandardAppVersion#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether multiple requests can be dispatched to this version at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#threadsafe GoogleAppEngineStandardAppVersion#threadsafe}
  */
  readonly threadsafe?: boolean | cdktf.IResolvable;
  /**
  * Relative name of the version within the service. For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#version_id GoogleAppEngineStandardAppVersion#version_id}
  */
  readonly versionId?: string;
  /**
  * automatic_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#automatic_scaling GoogleAppEngineStandardAppVersion#automatic_scaling}
  */
  readonly automaticScaling?: GoogleAppEngineStandardAppVersionAutomaticScaling;
  /**
  * basic_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#basic_scaling GoogleAppEngineStandardAppVersion#basic_scaling}
  */
  readonly basicScaling?: GoogleAppEngineStandardAppVersionBasicScaling;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#deployment GoogleAppEngineStandardAppVersion#deployment}
  */
  readonly deployment: GoogleAppEngineStandardAppVersionDeployment;
  /**
  * entrypoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#entrypoint GoogleAppEngineStandardAppVersion#entrypoint}
  */
  readonly entrypoint: GoogleAppEngineStandardAppVersionEntrypoint;
  /**
  * handlers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#handlers GoogleAppEngineStandardAppVersion#handlers}
  */
  readonly handlers?: GoogleAppEngineStandardAppVersionHandlers[] | cdktf.IResolvable;
  /**
  * libraries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#libraries GoogleAppEngineStandardAppVersion#libraries}
  */
  readonly libraries?: GoogleAppEngineStandardAppVersionLibraries[] | cdktf.IResolvable;
  /**
  * manual_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#manual_scaling GoogleAppEngineStandardAppVersion#manual_scaling}
  */
  readonly manualScaling?: GoogleAppEngineStandardAppVersionManualScaling;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#timeouts GoogleAppEngineStandardAppVersion#timeouts}
  */
  readonly timeouts?: GoogleAppEngineStandardAppVersionTimeouts;
  /**
  * vpc_access_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#vpc_access_connector GoogleAppEngineStandardAppVersion#vpc_access_connector}
  */
  readonly vpcAccessConnector?: GoogleAppEngineStandardAppVersionVpcAccessConnector;
}
export interface GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings {
  /**
  * Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#min_instances GoogleAppEngineStandardAppVersion#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#target_cpu_utilization GoogleAppEngineStandardAppVersion#target_cpu_utilization}
  */
  readonly targetCpuUtilization?: number;
  /**
  * Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#target_throughput_utilization GoogleAppEngineStandardAppVersion#target_throughput_utilization}
  */
  readonly targetThroughputUtilization?: number;
}

export function googleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsToTerraform(struct?: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference | GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
    target_cpu_utilization: cdktf.numberToTerraform(struct!.targetCpuUtilization),
    target_throughput_utilization: cdktf.numberToTerraform(struct!.targetThroughputUtilization),
  }
}


export function googleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsToHclTerraform(struct?: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference | GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instances: {
      value: cdktf.numberToHclTerraform(struct!.minInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_cpu_utilization: {
      value: cdktf.numberToHclTerraform(struct!.targetCpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_throughput_utilization: {
      value: cdktf.numberToHclTerraform(struct!.targetThroughputUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._targetCpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCpuUtilization = this._targetCpuUtilization;
    }
    if (this._targetThroughputUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetThroughputUtilization = this._targetThroughputUtilization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._targetCpuUtilization = undefined;
      this._targetThroughputUtilization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._targetCpuUtilization = value.targetCpuUtilization;
      this._targetThroughputUtilization = value.targetThroughputUtilization;
    }
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // target_cpu_utilization - computed: false, optional: true, required: false
  private _targetCpuUtilization?: number; 
  public get targetCpuUtilization() {
    return this.getNumberAttribute('target_cpu_utilization');
  }
  public set targetCpuUtilization(value: number) {
    this._targetCpuUtilization = value;
  }
  public resetTargetCpuUtilization() {
    this._targetCpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCpuUtilizationInput() {
    return this._targetCpuUtilization;
  }

  // target_throughput_utilization - computed: false, optional: true, required: false
  private _targetThroughputUtilization?: number; 
  public get targetThroughputUtilization() {
    return this.getNumberAttribute('target_throughput_utilization');
  }
  public set targetThroughputUtilization(value: number) {
    this._targetThroughputUtilization = value;
  }
  public resetTargetThroughputUtilization() {
    this._targetThroughputUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetThroughputUtilizationInput() {
    return this._targetThroughputUtilization;
  }
}
export interface GoogleAppEngineStandardAppVersionAutomaticScaling {
  /**
  * Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.
  * 
  * Defaults to a runtime-specific value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#max_concurrent_requests GoogleAppEngineStandardAppVersion#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * Maximum number of idle instances that should be maintained for this version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#max_idle_instances GoogleAppEngineStandardAppVersion#max_idle_instances}
  */
  readonly maxIdleInstances?: number;
  /**
  * Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#max_pending_latency GoogleAppEngineStandardAppVersion#max_pending_latency}
  */
  readonly maxPendingLatency?: string;
  /**
  * Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#min_idle_instances GoogleAppEngineStandardAppVersion#min_idle_instances}
  */
  readonly minIdleInstances?: number;
  /**
  * Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#min_pending_latency GoogleAppEngineStandardAppVersion#min_pending_latency}
  */
  readonly minPendingLatency?: string;
  /**
  * standard_scheduler_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#standard_scheduler_settings GoogleAppEngineStandardAppVersion#standard_scheduler_settings}
  */
  readonly standardSchedulerSettings?: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings;
}

export function googleAppEngineStandardAppVersionAutomaticScalingToTerraform(struct?: GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference | GoogleAppEngineStandardAppVersionAutomaticScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    max_idle_instances: cdktf.numberToTerraform(struct!.maxIdleInstances),
    max_pending_latency: cdktf.stringToTerraform(struct!.maxPendingLatency),
    min_idle_instances: cdktf.numberToTerraform(struct!.minIdleInstances),
    min_pending_latency: cdktf.stringToTerraform(struct!.minPendingLatency),
    standard_scheduler_settings: googleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsToTerraform(struct!.standardSchedulerSettings),
  }
}


export function googleAppEngineStandardAppVersionAutomaticScalingToHclTerraform(struct?: GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference | GoogleAppEngineStandardAppVersionAutomaticScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_latency: {
      value: cdktf.stringToHclTerraform(struct!.maxPendingLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_idle_instances: {
      value: cdktf.numberToHclTerraform(struct!.minIdleInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_pending_latency: {
      value: cdktf.stringToHclTerraform(struct!.minPendingLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_scheduler_settings: {
      value: googleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsToHclTerraform(struct!.standardSchedulerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionAutomaticScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRequests = this._maxConcurrentRequests;
    }
    if (this._maxIdleInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleInstances = this._maxIdleInstances;
    }
    if (this._maxPendingLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingLatency = this._maxPendingLatency;
    }
    if (this._minIdleInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleInstances = this._minIdleInstances;
    }
    if (this._minPendingLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPendingLatency = this._minPendingLatency;
    }
    if (this._standardSchedulerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardSchedulerSettings = this._standardSchedulerSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionAutomaticScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentRequests = undefined;
      this._maxIdleInstances = undefined;
      this._maxPendingLatency = undefined;
      this._minIdleInstances = undefined;
      this._minPendingLatency = undefined;
      this._standardSchedulerSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentRequests = value.maxConcurrentRequests;
      this._maxIdleInstances = value.maxIdleInstances;
      this._maxPendingLatency = value.maxPendingLatency;
      this._minIdleInstances = value.minIdleInstances;
      this._minPendingLatency = value.minPendingLatency;
      this._standardSchedulerSettings.internalValue = value.standardSchedulerSettings;
    }
  }

  // max_concurrent_requests - computed: false, optional: true, required: false
  private _maxConcurrentRequests?: number; 
  public get maxConcurrentRequests() {
    return this.getNumberAttribute('max_concurrent_requests');
  }
  public set maxConcurrentRequests(value: number) {
    this._maxConcurrentRequests = value;
  }
  public resetMaxConcurrentRequests() {
    this._maxConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRequestsInput() {
    return this._maxConcurrentRequests;
  }

  // max_idle_instances - computed: false, optional: true, required: false
  private _maxIdleInstances?: number; 
  public get maxIdleInstances() {
    return this.getNumberAttribute('max_idle_instances');
  }
  public set maxIdleInstances(value: number) {
    this._maxIdleInstances = value;
  }
  public resetMaxIdleInstances() {
    this._maxIdleInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleInstancesInput() {
    return this._maxIdleInstances;
  }

  // max_pending_latency - computed: false, optional: true, required: false
  private _maxPendingLatency?: string; 
  public get maxPendingLatency() {
    return this.getStringAttribute('max_pending_latency');
  }
  public set maxPendingLatency(value: string) {
    this._maxPendingLatency = value;
  }
  public resetMaxPendingLatency() {
    this._maxPendingLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingLatencyInput() {
    return this._maxPendingLatency;
  }

  // min_idle_instances - computed: false, optional: true, required: false
  private _minIdleInstances?: number; 
  public get minIdleInstances() {
    return this.getNumberAttribute('min_idle_instances');
  }
  public set minIdleInstances(value: number) {
    this._minIdleInstances = value;
  }
  public resetMinIdleInstances() {
    this._minIdleInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleInstancesInput() {
    return this._minIdleInstances;
  }

  // min_pending_latency - computed: false, optional: true, required: false
  private _minPendingLatency?: string; 
  public get minPendingLatency() {
    return this.getStringAttribute('min_pending_latency');
  }
  public set minPendingLatency(value: string) {
    this._minPendingLatency = value;
  }
  public resetMinPendingLatency() {
    this._minPendingLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPendingLatencyInput() {
    return this._minPendingLatency;
  }

  // standard_scheduler_settings - computed: false, optional: true, required: false
  private _standardSchedulerSettings = new GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(this, "standard_scheduler_settings");
  public get standardSchedulerSettings() {
    return this._standardSchedulerSettings;
  }
  public putStandardSchedulerSettings(value: GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings) {
    this._standardSchedulerSettings.internalValue = value;
  }
  public resetStandardSchedulerSettings() {
    this._standardSchedulerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardSchedulerSettingsInput() {
    return this._standardSchedulerSettings.internalValue;
  }
}
export interface GoogleAppEngineStandardAppVersionBasicScaling {
  /**
  * Duration of time after the last request that an instance must wait before the instance is shut down.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#idle_timeout GoogleAppEngineStandardAppVersion#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}
  */
  readonly maxInstances: number;
}

export function googleAppEngineStandardAppVersionBasicScalingToTerraform(struct?: GoogleAppEngineStandardAppVersionBasicScalingOutputReference | GoogleAppEngineStandardAppVersionBasicScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
  }
}


export function googleAppEngineStandardAppVersionBasicScalingToHclTerraform(struct?: GoogleAppEngineStandardAppVersionBasicScalingOutputReference | GoogleAppEngineStandardAppVersionBasicScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionBasicScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionBasicScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionBasicScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeout = undefined;
      this._maxInstances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeout = value.idleTimeout;
      this._maxInstances = value.maxInstances;
    }
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_instances - computed: false, optional: false, required: true
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }
}
export interface GoogleAppEngineStandardAppVersionDeploymentFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}
  */
  readonly name: string;
  /**
  * SHA1 checksum of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#sha1_sum GoogleAppEngineStandardAppVersion#sha1_sum}
  */
  readonly sha1Sum?: string;
  /**
  * Source URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

export function googleAppEngineStandardAppVersionDeploymentFilesToTerraform(struct?: GoogleAppEngineStandardAppVersionDeploymentFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sha1_sum: cdktf.stringToTerraform(struct!.sha1Sum),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}


export function googleAppEngineStandardAppVersionDeploymentFilesToHclTerraform(struct?: GoogleAppEngineStandardAppVersionDeploymentFiles | cdktf.IResolvable): any {
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
    sha1_sum: {
      value: cdktf.stringToHclTerraform(struct!.sha1Sum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAppEngineStandardAppVersionDeploymentFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sha1Sum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Sum = this._sha1Sum;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionDeploymentFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._sha1Sum = undefined;
      this._sourceUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._sha1Sum = value.sha1Sum;
      this._sourceUrl = value.sourceUrl;
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

  // sha1_sum - computed: false, optional: true, required: false
  private _sha1Sum?: string; 
  public get sha1Sum() {
    return this.getStringAttribute('sha1_sum');
  }
  public set sha1Sum(value: string) {
    this._sha1Sum = value;
  }
  public resetSha1Sum() {
    this._sha1Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1SumInput() {
    return this._sha1Sum;
  }

  // source_url - computed: false, optional: false, required: true
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }
}

export class GoogleAppEngineStandardAppVersionDeploymentFilesList extends cdktf.ComplexList {
  public internalValue? : GoogleAppEngineStandardAppVersionDeploymentFiles[] | cdktf.IResolvable

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
  public get(index: number): GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference {
    return new GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAppEngineStandardAppVersionDeploymentZip {
  /**
  * files count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#files_count GoogleAppEngineStandardAppVersion#files_count}
  */
  readonly filesCount?: number;
  /**
  * Source URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

export function googleAppEngineStandardAppVersionDeploymentZipToTerraform(struct?: GoogleAppEngineStandardAppVersionDeploymentZipOutputReference | GoogleAppEngineStandardAppVersionDeploymentZip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files_count: cdktf.numberToTerraform(struct!.filesCount),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}


export function googleAppEngineStandardAppVersionDeploymentZipToHclTerraform(struct?: GoogleAppEngineStandardAppVersionDeploymentZipOutputReference | GoogleAppEngineStandardAppVersionDeploymentZip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files_count: {
      value: cdktf.numberToHclTerraform(struct!.filesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionDeploymentZipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionDeploymentZip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesCount = this._filesCount;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionDeploymentZip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filesCount = undefined;
      this._sourceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filesCount = value.filesCount;
      this._sourceUrl = value.sourceUrl;
    }
  }

  // files_count - computed: false, optional: true, required: false
  private _filesCount?: number; 
  public get filesCount() {
    return this.getNumberAttribute('files_count');
  }
  public set filesCount(value: number) {
    this._filesCount = value;
  }
  public resetFilesCount() {
    this._filesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesCountInput() {
    return this._filesCount;
  }

  // source_url - computed: false, optional: false, required: true
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }
}
export interface GoogleAppEngineStandardAppVersionDeployment {
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#files GoogleAppEngineStandardAppVersion#files}
  */
  readonly files?: GoogleAppEngineStandardAppVersionDeploymentFiles[] | cdktf.IResolvable;
  /**
  * zip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#zip GoogleAppEngineStandardAppVersion#zip}
  */
  readonly zip?: GoogleAppEngineStandardAppVersionDeploymentZip;
}

export function googleAppEngineStandardAppVersionDeploymentToTerraform(struct?: GoogleAppEngineStandardAppVersionDeploymentOutputReference | GoogleAppEngineStandardAppVersionDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.listMapper(googleAppEngineStandardAppVersionDeploymentFilesToTerraform, true)(struct!.files),
    zip: googleAppEngineStandardAppVersionDeploymentZipToTerraform(struct!.zip),
  }
}


export function googleAppEngineStandardAppVersionDeploymentToHclTerraform(struct?: GoogleAppEngineStandardAppVersionDeploymentOutputReference | GoogleAppEngineStandardAppVersionDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.listMapperHcl(googleAppEngineStandardAppVersionDeploymentFilesToHclTerraform, true)(struct!.files),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleAppEngineStandardAppVersionDeploymentFilesList",
    },
    zip: {
      value: googleAppEngineStandardAppVersionDeploymentZipToHclTerraform(struct!.zip),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAppEngineStandardAppVersionDeploymentZipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._zip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._files.internalValue = undefined;
      this._zip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._files.internalValue = value.files;
      this._zip.internalValue = value.zip;
    }
  }

  // files - computed: false, optional: true, required: false
  private _files = new GoogleAppEngineStandardAppVersionDeploymentFilesList(this, "files", true);
  public get files() {
    return this._files;
  }
  public putFiles(value: GoogleAppEngineStandardAppVersionDeploymentFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // zip - computed: false, optional: true, required: false
  private _zip = new GoogleAppEngineStandardAppVersionDeploymentZipOutputReference(this, "zip");
  public get zip() {
    return this._zip;
  }
  public putZip(value: GoogleAppEngineStandardAppVersionDeploymentZip) {
    this._zip.internalValue = value;
  }
  public resetZip() {
    this._zip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip.internalValue;
  }
}
export interface GoogleAppEngineStandardAppVersionEntrypoint {
  /**
  * The format should be a shell command that can be fed to bash -c.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#shell GoogleAppEngineStandardAppVersion#shell}
  */
  readonly shell: string;
}

export function googleAppEngineStandardAppVersionEntrypointToTerraform(struct?: GoogleAppEngineStandardAppVersionEntrypointOutputReference | GoogleAppEngineStandardAppVersionEntrypoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function googleAppEngineStandardAppVersionEntrypointToHclTerraform(struct?: GoogleAppEngineStandardAppVersionEntrypointOutputReference | GoogleAppEngineStandardAppVersionEntrypoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionEntrypointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionEntrypoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionEntrypoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shell = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shell = value.shell;
    }
  }

  // shell - computed: false, optional: false, required: true
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }
}
export interface GoogleAppEngineStandardAppVersionHandlersScript {
  /**
  * Path to the script from the application root directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#script_path GoogleAppEngineStandardAppVersion#script_path}
  */
  readonly scriptPath: string;
}

export function googleAppEngineStandardAppVersionHandlersScriptToTerraform(struct?: GoogleAppEngineStandardAppVersionHandlersScriptOutputReference | GoogleAppEngineStandardAppVersionHandlersScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
  }
}


export function googleAppEngineStandardAppVersionHandlersScriptToHclTerraform(struct?: GoogleAppEngineStandardAppVersionHandlersScriptOutputReference | GoogleAppEngineStandardAppVersionHandlersScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script_path: {
      value: cdktf.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionHandlersScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionHandlersScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionHandlersScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scriptPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scriptPath = value.scriptPath;
    }
  }

  // script_path - computed: false, optional: false, required: true
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }
}
export interface GoogleAppEngineStandardAppVersionHandlersStaticFiles {
  /**
  * Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as
  * static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
  * against both your code and static data storage resource quotas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#application_readable GoogleAppEngineStandardAppVersion#application_readable}
  */
  readonly applicationReadable?: boolean | cdktf.IResolvable;
  /**
  * Time a static file served by this handler should be cached by web proxies and browsers.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#expiration GoogleAppEngineStandardAppVersion#expiration}
  */
  readonly expiration?: string;
  /**
  * HTTP headers to use for all responses from these URLs.
  * An object containing a list of "key:value" value pairs.".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#http_headers GoogleAppEngineStandardAppVersion#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * MIME type used to serve all files served by this handler.
  * Defaults to file-specific MIME types, which are derived from each file's filename extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#mime_type GoogleAppEngineStandardAppVersion#mime_type}
  */
  readonly mimeType?: string;
  /**
  * Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#path GoogleAppEngineStandardAppVersion#path}
  */
  readonly path?: string;
  /**
  * Whether this handler should match the request if the file referenced by the handler does not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#require_matching_file GoogleAppEngineStandardAppVersion#require_matching_file}
  */
  readonly requireMatchingFile?: boolean | cdktf.IResolvable;
  /**
  * Regular expression that matches the file paths for all files that should be referenced by this handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#upload_path_regex GoogleAppEngineStandardAppVersion#upload_path_regex}
  */
  readonly uploadPathRegex?: string;
}

export function googleAppEngineStandardAppVersionHandlersStaticFilesToTerraform(struct?: GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference | GoogleAppEngineStandardAppVersionHandlersStaticFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_readable: cdktf.booleanToTerraform(struct!.applicationReadable),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
    path: cdktf.stringToTerraform(struct!.path),
    require_matching_file: cdktf.booleanToTerraform(struct!.requireMatchingFile),
    upload_path_regex: cdktf.stringToTerraform(struct!.uploadPathRegex),
  }
}


export function googleAppEngineStandardAppVersionHandlersStaticFilesToHclTerraform(struct?: GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference | GoogleAppEngineStandardAppVersionHandlersStaticFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_readable: {
      value: cdktf.booleanToHclTerraform(struct!.applicationReadable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mime_type: {
      value: cdktf.stringToHclTerraform(struct!.mimeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_matching_file: {
      value: cdktf.booleanToHclTerraform(struct!.requireMatchingFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upload_path_regex: {
      value: cdktf.stringToHclTerraform(struct!.uploadPathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionHandlersStaticFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationReadable !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationReadable = this._applicationReadable;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._mimeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeType = this._mimeType;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requireMatchingFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMatchingFile = this._requireMatchingFile;
    }
    if (this._uploadPathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPathRegex = this._uploadPathRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionHandlersStaticFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationReadable = undefined;
      this._expiration = undefined;
      this._httpHeaders = undefined;
      this._mimeType = undefined;
      this._path = undefined;
      this._requireMatchingFile = undefined;
      this._uploadPathRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationReadable = value.applicationReadable;
      this._expiration = value.expiration;
      this._httpHeaders = value.httpHeaders;
      this._mimeType = value.mimeType;
      this._path = value.path;
      this._requireMatchingFile = value.requireMatchingFile;
      this._uploadPathRegex = value.uploadPathRegex;
    }
  }

  // application_readable - computed: false, optional: true, required: false
  private _applicationReadable?: boolean | cdktf.IResolvable; 
  public get applicationReadable() {
    return this.getBooleanAttribute('application_readable');
  }
  public set applicationReadable(value: boolean | cdktf.IResolvable) {
    this._applicationReadable = value;
  }
  public resetApplicationReadable() {
    this._applicationReadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationReadableInput() {
    return this._applicationReadable;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // mime_type - computed: false, optional: true, required: false
  private _mimeType?: string; 
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
  public set mimeType(value: string) {
    this._mimeType = value;
  }
  public resetMimeType() {
    this._mimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypeInput() {
    return this._mimeType;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // require_matching_file - computed: false, optional: true, required: false
  private _requireMatchingFile?: boolean | cdktf.IResolvable; 
  public get requireMatchingFile() {
    return this.getBooleanAttribute('require_matching_file');
  }
  public set requireMatchingFile(value: boolean | cdktf.IResolvable) {
    this._requireMatchingFile = value;
  }
  public resetRequireMatchingFile() {
    this._requireMatchingFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMatchingFileInput() {
    return this._requireMatchingFile;
  }

  // upload_path_regex - computed: false, optional: true, required: false
  private _uploadPathRegex?: string; 
  public get uploadPathRegex() {
    return this.getStringAttribute('upload_path_regex');
  }
  public set uploadPathRegex(value: string) {
    this._uploadPathRegex = value;
  }
  public resetUploadPathRegex() {
    this._uploadPathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPathRegexInput() {
    return this._uploadPathRegex;
  }
}
export interface GoogleAppEngineStandardAppVersionHandlers {
  /**
  * Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#auth_fail_action GoogleAppEngineStandardAppVersion#auth_fail_action}
  */
  readonly authFailAction?: string;
  /**
  * Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#login GoogleAppEngineStandardAppVersion#login}
  */
  readonly login?: string;
  /**
  * 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#redirect_http_response_code GoogleAppEngineStandardAppVersion#redirect_http_response_code}
  */
  readonly redirectHttpResponseCode?: string;
  /**
  * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#security_level GoogleAppEngineStandardAppVersion#security_level}
  */
  readonly securityLevel?: string;
  /**
  * URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
  * All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#url_regex GoogleAppEngineStandardAppVersion#url_regex}
  */
  readonly urlRegex?: string;
  /**
  * script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#script GoogleAppEngineStandardAppVersion#script}
  */
  readonly script?: GoogleAppEngineStandardAppVersionHandlersScript;
  /**
  * static_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#static_files GoogleAppEngineStandardAppVersion#static_files}
  */
  readonly staticFiles?: GoogleAppEngineStandardAppVersionHandlersStaticFiles;
}

export function googleAppEngineStandardAppVersionHandlersToTerraform(struct?: GoogleAppEngineStandardAppVersionHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_fail_action: cdktf.stringToTerraform(struct!.authFailAction),
    login: cdktf.stringToTerraform(struct!.login),
    redirect_http_response_code: cdktf.stringToTerraform(struct!.redirectHttpResponseCode),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    url_regex: cdktf.stringToTerraform(struct!.urlRegex),
    script: googleAppEngineStandardAppVersionHandlersScriptToTerraform(struct!.script),
    static_files: googleAppEngineStandardAppVersionHandlersStaticFilesToTerraform(struct!.staticFiles),
  }
}


export function googleAppEngineStandardAppVersionHandlersToHclTerraform(struct?: GoogleAppEngineStandardAppVersionHandlers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_fail_action: {
      value: cdktf.stringToHclTerraform(struct!.authFailAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login: {
      value: cdktf.stringToHclTerraform(struct!.login),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_http_response_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectHttpResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_regex: {
      value: cdktf.stringToHclTerraform(struct!.urlRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: googleAppEngineStandardAppVersionHandlersScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAppEngineStandardAppVersionHandlersScriptList",
    },
    static_files: {
      value: googleAppEngineStandardAppVersionHandlersStaticFilesToHclTerraform(struct!.staticFiles),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAppEngineStandardAppVersionHandlersStaticFilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionHandlersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAppEngineStandardAppVersionHandlers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailAction = this._authFailAction;
    }
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._redirectHttpResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectHttpResponseCode = this._redirectHttpResponseCode;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._urlRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRegex = this._urlRegex;
    }
    if (this._script?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script?.internalValue;
    }
    if (this._staticFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticFiles = this._staticFiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionHandlers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authFailAction = undefined;
      this._login = undefined;
      this._redirectHttpResponseCode = undefined;
      this._securityLevel = undefined;
      this._urlRegex = undefined;
      this._script.internalValue = undefined;
      this._staticFiles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authFailAction = value.authFailAction;
      this._login = value.login;
      this._redirectHttpResponseCode = value.redirectHttpResponseCode;
      this._securityLevel = value.securityLevel;
      this._urlRegex = value.urlRegex;
      this._script.internalValue = value.script;
      this._staticFiles.internalValue = value.staticFiles;
    }
  }

  // auth_fail_action - computed: false, optional: true, required: false
  private _authFailAction?: string; 
  public get authFailAction() {
    return this.getStringAttribute('auth_fail_action');
  }
  public set authFailAction(value: string) {
    this._authFailAction = value;
  }
  public resetAuthFailAction() {
    this._authFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailActionInput() {
    return this._authFailAction;
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // redirect_http_response_code - computed: false, optional: true, required: false
  private _redirectHttpResponseCode?: string; 
  public get redirectHttpResponseCode() {
    return this.getStringAttribute('redirect_http_response_code');
  }
  public set redirectHttpResponseCode(value: string) {
    this._redirectHttpResponseCode = value;
  }
  public resetRedirectHttpResponseCode() {
    this._redirectHttpResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpResponseCodeInput() {
    return this._redirectHttpResponseCode;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // url_regex - computed: false, optional: true, required: false
  private _urlRegex?: string; 
  public get urlRegex() {
    return this.getStringAttribute('url_regex');
  }
  public set urlRegex(value: string) {
    this._urlRegex = value;
  }
  public resetUrlRegex() {
    this._urlRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRegexInput() {
    return this._urlRegex;
  }

  // script - computed: false, optional: true, required: false
  private _script = new GoogleAppEngineStandardAppVersionHandlersScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: GoogleAppEngineStandardAppVersionHandlersScript) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }

  // static_files - computed: false, optional: true, required: false
  private _staticFiles = new GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference(this, "static_files");
  public get staticFiles() {
    return this._staticFiles;
  }
  public putStaticFiles(value: GoogleAppEngineStandardAppVersionHandlersStaticFiles) {
    this._staticFiles.internalValue = value;
  }
  public resetStaticFiles() {
    this._staticFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFilesInput() {
    return this._staticFiles.internalValue;
  }
}

export class GoogleAppEngineStandardAppVersionHandlersList extends cdktf.ComplexList {
  public internalValue? : GoogleAppEngineStandardAppVersionHandlers[] | cdktf.IResolvable

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
  public get(index: number): GoogleAppEngineStandardAppVersionHandlersOutputReference {
    return new GoogleAppEngineStandardAppVersionHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAppEngineStandardAppVersionLibraries {
  /**
  * Name of the library. Example "django".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}
  */
  readonly name?: string;
  /**
  * Version of the library to select, or "latest".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#version GoogleAppEngineStandardAppVersion#version}
  */
  readonly version?: string;
}

export function googleAppEngineStandardAppVersionLibrariesToTerraform(struct?: GoogleAppEngineStandardAppVersionLibraries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleAppEngineStandardAppVersionLibrariesToHclTerraform(struct?: GoogleAppEngineStandardAppVersionLibraries | cdktf.IResolvable): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionLibrariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAppEngineStandardAppVersionLibraries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionLibraries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class GoogleAppEngineStandardAppVersionLibrariesList extends cdktf.ComplexList {
  public internalValue? : GoogleAppEngineStandardAppVersionLibraries[] | cdktf.IResolvable

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
  public get(index: number): GoogleAppEngineStandardAppVersionLibrariesOutputReference {
    return new GoogleAppEngineStandardAppVersionLibrariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAppEngineStandardAppVersionManualScaling {
  /**
  * Number of instances to assign to the service at the start.
  * 
  * **Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
  * Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#instances GoogleAppEngineStandardAppVersion#instances}
  */
  readonly instances: number;
}

export function googleAppEngineStandardAppVersionManualScalingToTerraform(struct?: GoogleAppEngineStandardAppVersionManualScalingOutputReference | GoogleAppEngineStandardAppVersionManualScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instances: cdktf.numberToTerraform(struct!.instances),
  }
}


export function googleAppEngineStandardAppVersionManualScalingToHclTerraform(struct?: GoogleAppEngineStandardAppVersionManualScalingOutputReference | GoogleAppEngineStandardAppVersionManualScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instances: {
      value: cdktf.numberToHclTerraform(struct!.instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionManualScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionManualScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionManualScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instances = value.instances;
    }
  }

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }
}
export interface GoogleAppEngineStandardAppVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}
  */
  readonly update?: string;
}

export function googleAppEngineStandardAppVersionTimeoutsToTerraform(struct?: GoogleAppEngineStandardAppVersionTimeouts | cdktf.IResolvable): any {
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


export function googleAppEngineStandardAppVersionTimeoutsToHclTerraform(struct?: GoogleAppEngineStandardAppVersionTimeouts | cdktf.IResolvable): any {
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

export class GoogleAppEngineStandardAppVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAppEngineStandardAppVersionTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleAppEngineStandardAppVersionVpcAccessConnector {
  /**
  * The egress setting for the connector, controlling what traffic is diverted through it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#egress_setting GoogleAppEngineStandardAppVersion#egress_setting}
  */
  readonly egressSetting?: string;
  /**
  * Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}
  */
  readonly name: string;
}

export function googleAppEngineStandardAppVersionVpcAccessConnectorToTerraform(struct?: GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference | GoogleAppEngineStandardAppVersionVpcAccessConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_setting: cdktf.stringToTerraform(struct!.egressSetting),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleAppEngineStandardAppVersionVpcAccessConnectorToHclTerraform(struct?: GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference | GoogleAppEngineStandardAppVersionVpcAccessConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_setting: {
      value: cdktf.stringToHclTerraform(struct!.egressSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineStandardAppVersionVpcAccessConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressSetting = this._egressSetting;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineStandardAppVersionVpcAccessConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressSetting = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressSetting = value.egressSetting;
      this._name = value.name;
    }
  }

  // egress_setting - computed: false, optional: true, required: false
  private _egressSetting?: string; 
  public get egressSetting() {
    return this.getStringAttribute('egress_setting');
  }
  public set egressSetting(value: string) {
    this._egressSetting = value;
  }
  public resetEgressSetting() {
    this._egressSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressSettingInput() {
    return this._egressSetting;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version google_app_engine_standard_app_version}
*/
export class GoogleAppEngineStandardAppVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_standard_app_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAppEngineStandardAppVersion to import
  * @param importFromId The id of the existing GoogleAppEngineStandardAppVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAppEngineStandardAppVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_app_engine_standard_app_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_app_engine_standard_app_version google_app_engine_standard_app_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAppEngineStandardAppVersionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAppEngineStandardAppVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_standard_app_version',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.14.1',
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
    this._appEngineApis = config.appEngineApis;
    this._deleteServiceOnDestroy = config.deleteServiceOnDestroy;
    this._envVariables = config.envVariables;
    this._id = config.id;
    this._inboundServices = config.inboundServices;
    this._instanceClass = config.instanceClass;
    this._noopOnDestroy = config.noopOnDestroy;
    this._project = config.project;
    this._runtime = config.runtime;
    this._runtimeApiVersion = config.runtimeApiVersion;
    this._service = config.service;
    this._serviceAccount = config.serviceAccount;
    this._threadsafe = config.threadsafe;
    this._versionId = config.versionId;
    this._automaticScaling.internalValue = config.automaticScaling;
    this._basicScaling.internalValue = config.basicScaling;
    this._deployment.internalValue = config.deployment;
    this._entrypoint.internalValue = config.entrypoint;
    this._handlers.internalValue = config.handlers;
    this._libraries.internalValue = config.libraries;
    this._manualScaling.internalValue = config.manualScaling;
    this._timeouts.internalValue = config.timeouts;
    this._vpcAccessConnector.internalValue = config.vpcAccessConnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_engine_apis - computed: false, optional: true, required: false
  private _appEngineApis?: boolean | cdktf.IResolvable; 
  public get appEngineApis() {
    return this.getBooleanAttribute('app_engine_apis');
  }
  public set appEngineApis(value: boolean | cdktf.IResolvable) {
    this._appEngineApis = value;
  }
  public resetAppEngineApis() {
    this._appEngineApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineApisInput() {
    return this._appEngineApis;
  }

  // delete_service_on_destroy - computed: false, optional: true, required: false
  private _deleteServiceOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteServiceOnDestroy() {
    return this.getBooleanAttribute('delete_service_on_destroy');
  }
  public set deleteServiceOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteServiceOnDestroy = value;
  }
  public resetDeleteServiceOnDestroy() {
    this._deleteServiceOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteServiceOnDestroyInput() {
    return this._deleteServiceOnDestroy;
  }

  // env_variables - computed: false, optional: true, required: false
  private _envVariables?: { [key: string]: string }; 
  public get envVariables() {
    return this.getStringMapAttribute('env_variables');
  }
  public set envVariables(value: { [key: string]: string }) {
    this._envVariables = value;
  }
  public resetEnvVariables() {
    this._envVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVariablesInput() {
    return this._envVariables;
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

  // inbound_services - computed: false, optional: true, required: false
  private _inboundServices?: string[]; 
  public get inboundServices() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_services'));
  }
  public set inboundServices(value: string[]) {
    this._inboundServices = value;
  }
  public resetInboundServices() {
    this._inboundServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundServicesInput() {
    return this._inboundServices;
  }

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // noop_on_destroy - computed: false, optional: true, required: false
  private _noopOnDestroy?: boolean | cdktf.IResolvable; 
  public get noopOnDestroy() {
    return this.getBooleanAttribute('noop_on_destroy');
  }
  public set noopOnDestroy(value: boolean | cdktf.IResolvable) {
    this._noopOnDestroy = value;
  }
  public resetNoopOnDestroy() {
    this._noopOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noopOnDestroyInput() {
    return this._noopOnDestroy;
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

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // runtime_api_version - computed: false, optional: true, required: false
  private _runtimeApiVersion?: string; 
  public get runtimeApiVersion() {
    return this.getStringAttribute('runtime_api_version');
  }
  public set runtimeApiVersion(value: string) {
    this._runtimeApiVersion = value;
  }
  public resetRuntimeApiVersion() {
    this._runtimeApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeApiVersionInput() {
    return this._runtimeApiVersion;
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

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // threadsafe - computed: false, optional: true, required: false
  private _threadsafe?: boolean | cdktf.IResolvable; 
  public get threadsafe() {
    return this.getBooleanAttribute('threadsafe');
  }
  public set threadsafe(value: boolean | cdktf.IResolvable) {
    this._threadsafe = value;
  }
  public resetThreadsafe() {
    this._threadsafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsafeInput() {
    return this._threadsafe;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // automatic_scaling - computed: false, optional: true, required: false
  private _automaticScaling = new GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference(this, "automatic_scaling");
  public get automaticScaling() {
    return this._automaticScaling;
  }
  public putAutomaticScaling(value: GoogleAppEngineStandardAppVersionAutomaticScaling) {
    this._automaticScaling.internalValue = value;
  }
  public resetAutomaticScaling() {
    this._automaticScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticScalingInput() {
    return this._automaticScaling.internalValue;
  }

  // basic_scaling - computed: false, optional: true, required: false
  private _basicScaling = new GoogleAppEngineStandardAppVersionBasicScalingOutputReference(this, "basic_scaling");
  public get basicScaling() {
    return this._basicScaling;
  }
  public putBasicScaling(value: GoogleAppEngineStandardAppVersionBasicScaling) {
    this._basicScaling.internalValue = value;
  }
  public resetBasicScaling() {
    this._basicScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicScalingInput() {
    return this._basicScaling.internalValue;
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment = new GoogleAppEngineStandardAppVersionDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: GoogleAppEngineStandardAppVersionDeployment) {
    this._deployment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint = new GoogleAppEngineStandardAppVersionEntrypointOutputReference(this, "entrypoint");
  public get entrypoint() {
    return this._entrypoint;
  }
  public putEntrypoint(value: GoogleAppEngineStandardAppVersionEntrypoint) {
    this._entrypoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint.internalValue;
  }

  // handlers - computed: false, optional: true, required: false
  private _handlers = new GoogleAppEngineStandardAppVersionHandlersList(this, "handlers", false);
  public get handlers() {
    return this._handlers;
  }
  public putHandlers(value: GoogleAppEngineStandardAppVersionHandlers[] | cdktf.IResolvable) {
    this._handlers.internalValue = value;
  }
  public resetHandlers() {
    this._handlers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlersInput() {
    return this._handlers.internalValue;
  }

  // libraries - computed: false, optional: true, required: false
  private _libraries = new GoogleAppEngineStandardAppVersionLibrariesList(this, "libraries", false);
  public get libraries() {
    return this._libraries;
  }
  public putLibraries(value: GoogleAppEngineStandardAppVersionLibraries[] | cdktf.IResolvable) {
    this._libraries.internalValue = value;
  }
  public resetLibraries() {
    this._libraries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get librariesInput() {
    return this._libraries.internalValue;
  }

  // manual_scaling - computed: false, optional: true, required: false
  private _manualScaling = new GoogleAppEngineStandardAppVersionManualScalingOutputReference(this, "manual_scaling");
  public get manualScaling() {
    return this._manualScaling;
  }
  public putManualScaling(value: GoogleAppEngineStandardAppVersionManualScaling) {
    this._manualScaling.internalValue = value;
  }
  public resetManualScaling() {
    this._manualScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualScalingInput() {
    return this._manualScaling.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAppEngineStandardAppVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAppEngineStandardAppVersionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_access_connector - computed: false, optional: true, required: false
  private _vpcAccessConnector = new GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference(this, "vpc_access_connector");
  public get vpcAccessConnector() {
    return this._vpcAccessConnector;
  }
  public putVpcAccessConnector(value: GoogleAppEngineStandardAppVersionVpcAccessConnector) {
    this._vpcAccessConnector.internalValue = value;
  }
  public resetVpcAccessConnector() {
    this._vpcAccessConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessConnectorInput() {
    return this._vpcAccessConnector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_engine_apis: cdktf.booleanToTerraform(this._appEngineApis),
      delete_service_on_destroy: cdktf.booleanToTerraform(this._deleteServiceOnDestroy),
      env_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._envVariables),
      id: cdktf.stringToTerraform(this._id),
      inbound_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inboundServices),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      noop_on_destroy: cdktf.booleanToTerraform(this._noopOnDestroy),
      project: cdktf.stringToTerraform(this._project),
      runtime: cdktf.stringToTerraform(this._runtime),
      runtime_api_version: cdktf.stringToTerraform(this._runtimeApiVersion),
      service: cdktf.stringToTerraform(this._service),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      threadsafe: cdktf.booleanToTerraform(this._threadsafe),
      version_id: cdktf.stringToTerraform(this._versionId),
      automatic_scaling: googleAppEngineStandardAppVersionAutomaticScalingToTerraform(this._automaticScaling.internalValue),
      basic_scaling: googleAppEngineStandardAppVersionBasicScalingToTerraform(this._basicScaling.internalValue),
      deployment: googleAppEngineStandardAppVersionDeploymentToTerraform(this._deployment.internalValue),
      entrypoint: googleAppEngineStandardAppVersionEntrypointToTerraform(this._entrypoint.internalValue),
      handlers: cdktf.listMapper(googleAppEngineStandardAppVersionHandlersToTerraform, true)(this._handlers.internalValue),
      libraries: cdktf.listMapper(googleAppEngineStandardAppVersionLibrariesToTerraform, true)(this._libraries.internalValue),
      manual_scaling: googleAppEngineStandardAppVersionManualScalingToTerraform(this._manualScaling.internalValue),
      timeouts: googleAppEngineStandardAppVersionTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_access_connector: googleAppEngineStandardAppVersionVpcAccessConnectorToTerraform(this._vpcAccessConnector.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_engine_apis: {
        value: cdktf.booleanToHclTerraform(this._appEngineApis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_service_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteServiceOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      env_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._envVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inboundServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      noop_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._noopOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_api_version: {
        value: cdktf.stringToHclTerraform(this._runtimeApiVersion),
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
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threadsafe: {
        value: cdktf.booleanToHclTerraform(this._threadsafe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_scaling: {
        value: googleAppEngineStandardAppVersionAutomaticScalingToHclTerraform(this._automaticScaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionAutomaticScalingList",
      },
      basic_scaling: {
        value: googleAppEngineStandardAppVersionBasicScalingToHclTerraform(this._basicScaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionBasicScalingList",
      },
      deployment: {
        value: googleAppEngineStandardAppVersionDeploymentToHclTerraform(this._deployment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionDeploymentList",
      },
      entrypoint: {
        value: googleAppEngineStandardAppVersionEntrypointToHclTerraform(this._entrypoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionEntrypointList",
      },
      handlers: {
        value: cdktf.listMapperHcl(googleAppEngineStandardAppVersionHandlersToHclTerraform, true)(this._handlers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionHandlersList",
      },
      libraries: {
        value: cdktf.listMapperHcl(googleAppEngineStandardAppVersionLibrariesToHclTerraform, true)(this._libraries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionLibrariesList",
      },
      manual_scaling: {
        value: googleAppEngineStandardAppVersionManualScalingToHclTerraform(this._manualScaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionManualScalingList",
      },
      timeouts: {
        value: googleAppEngineStandardAppVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAppEngineStandardAppVersionTimeouts",
      },
      vpc_access_connector: {
        value: googleAppEngineStandardAppVersionVpcAccessConnectorToHclTerraform(this._vpcAccessConnector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineStandardAppVersionVpcAccessConnectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
