// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataflowFlexTemplateJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#additional_experiments GoogleDataflowFlexTemplateJob#additional_experiments}
  */
  readonly additionalExperiments?: string[];
  /**
  * The algorithm to use for autoscaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#autoscaling_algorithm GoogleDataflowFlexTemplateJob#autoscaling_algorithm}
  */
  readonly autoscalingAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}
  */
  readonly containerSpecGcsPath: string;
  /**
  * Indicates if the job should use the streaming engine feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#enable_streaming_engine GoogleDataflowFlexTemplateJob#enable_streaming_engine}
  */
  readonly enableStreamingEngine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#ip_configuration GoogleDataflowFlexTemplateJob#ip_configuration}
  */
  readonly ipConfiguration?: string;
  /**
  * The name for the Cloud KMS key for the job. Key format is: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#kms_key_name GoogleDataflowFlexTemplateJob#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * User labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. NOTE: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#labels GoogleDataflowFlexTemplateJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The machine type to use for launching the job. The default is n1-standard-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#launcher_machine_type GoogleDataflowFlexTemplateJob#launcher_machine_type}
  */
  readonly launcherMachineType?: string;
  /**
  * The machine type to use for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#machine_type GoogleDataflowFlexTemplateJob#machine_type}
  */
  readonly machineType?: string;
  /**
  * The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#max_workers GoogleDataflowFlexTemplateJob#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}
  */
  readonly name: string;
  /**
  * The network to which VMs will be assigned. If it is not provided, "default" will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#network GoogleDataflowFlexTemplateJob#network}
  */
  readonly network?: string;
  /**
  * The initial number of Google Compute Engine instances for the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#num_workers GoogleDataflowFlexTemplateJob#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}
  */
  readonly project?: string;
  /**
  * The region in which the created job should run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#region GoogleDataflowFlexTemplateJob#region}
  */
  readonly region?: string;
  /**
  * Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#sdk_container_image GoogleDataflowFlexTemplateJob#sdk_container_image}
  */
  readonly sdkContainerImage?: string;
  /**
  * The Service Account email used to create the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#service_account_email GoogleDataflowFlexTemplateJob#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#skip_wait_on_job_termination GoogleDataflowFlexTemplateJob#skip_wait_on_job_termination}
  */
  readonly skipWaitOnJobTermination?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#staging_location GoogleDataflowFlexTemplateJob#staging_location}
  */
  readonly stagingLocation?: string;
  /**
  * The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#subnetwork GoogleDataflowFlexTemplateJob#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#temp_location GoogleDataflowFlexTemplateJob#temp_location}
  */
  readonly tempLocation?: string;
  /**
  * Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#transform_name_mapping GoogleDataflowFlexTemplateJob#transform_name_mapping}
  */
  readonly transformNameMapping?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job google_dataflow_flex_template_job}
*/
export class GoogleDataflowFlexTemplateJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataflow_flex_template_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataflowFlexTemplateJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataflowFlexTemplateJob to import
  * @param importFromId The id of the existing GoogleDataflowFlexTemplateJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataflowFlexTemplateJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataflow_flex_template_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataflow_flex_template_job google_dataflow_flex_template_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataflowFlexTemplateJobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataflowFlexTemplateJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataflow_flex_template_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.18.1',
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
    this._additionalExperiments = config.additionalExperiments;
    this._autoscalingAlgorithm = config.autoscalingAlgorithm;
    this._containerSpecGcsPath = config.containerSpecGcsPath;
    this._enableStreamingEngine = config.enableStreamingEngine;
    this._id = config.id;
    this._ipConfiguration = config.ipConfiguration;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._launcherMachineType = config.launcherMachineType;
    this._machineType = config.machineType;
    this._maxWorkers = config.maxWorkers;
    this._name = config.name;
    this._network = config.network;
    this._numWorkers = config.numWorkers;
    this._onDelete = config.onDelete;
    this._parameters = config.parameters;
    this._project = config.project;
    this._region = config.region;
    this._sdkContainerImage = config.sdkContainerImage;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._skipWaitOnJobTermination = config.skipWaitOnJobTermination;
    this._stagingLocation = config.stagingLocation;
    this._subnetwork = config.subnetwork;
    this._tempLocation = config.tempLocation;
    this._transformNameMapping = config.transformNameMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_experiments - computed: true, optional: true, required: false
  private _additionalExperiments?: string[]; 
  public get additionalExperiments() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_experiments'));
  }
  public set additionalExperiments(value: string[]) {
    this._additionalExperiments = value;
  }
  public resetAdditionalExperiments() {
    this._additionalExperiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExperimentsInput() {
    return this._additionalExperiments;
  }

  // autoscaling_algorithm - computed: true, optional: true, required: false
  private _autoscalingAlgorithm?: string; 
  public get autoscalingAlgorithm() {
    return this.getStringAttribute('autoscaling_algorithm');
  }
  public set autoscalingAlgorithm(value: string) {
    this._autoscalingAlgorithm = value;
  }
  public resetAutoscalingAlgorithm() {
    this._autoscalingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingAlgorithmInput() {
    return this._autoscalingAlgorithm;
  }

  // container_spec_gcs_path - computed: false, optional: false, required: true
  private _containerSpecGcsPath?: string; 
  public get containerSpecGcsPath() {
    return this.getStringAttribute('container_spec_gcs_path');
  }
  public set containerSpecGcsPath(value: string) {
    this._containerSpecGcsPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecGcsPathInput() {
    return this._containerSpecGcsPath;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_streaming_engine - computed: false, optional: true, required: false
  private _enableStreamingEngine?: boolean | cdktf.IResolvable; 
  public get enableStreamingEngine() {
    return this.getBooleanAttribute('enable_streaming_engine');
  }
  public set enableStreamingEngine(value: boolean | cdktf.IResolvable) {
    this._enableStreamingEngine = value;
  }
  public resetEnableStreamingEngine() {
    this._enableStreamingEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStreamingEngineInput() {
    return this._enableStreamingEngine;
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

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: string; 
  public get ipConfiguration() {
    return this.getStringAttribute('ip_configuration');
  }
  public set ipConfiguration(value: string) {
    this._ipConfiguration = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // kms_key_name - computed: true, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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

  // launcher_machine_type - computed: true, optional: true, required: false
  private _launcherMachineType?: string; 
  public get launcherMachineType() {
    return this.getStringAttribute('launcher_machine_type');
  }
  public set launcherMachineType(value: string) {
    this._launcherMachineType = value;
  }
  public resetLauncherMachineType() {
    this._launcherMachineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launcherMachineTypeInput() {
    return this._launcherMachineType;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_workers - computed: true, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // num_workers - computed: true, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sdk_container_image - computed: true, optional: true, required: false
  private _sdkContainerImage?: string; 
  public get sdkContainerImage() {
    return this.getStringAttribute('sdk_container_image');
  }
  public set sdkContainerImage(value: string) {
    this._sdkContainerImage = value;
  }
  public resetSdkContainerImage() {
    this._sdkContainerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkContainerImageInput() {
    return this._sdkContainerImage;
  }

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // skip_wait_on_job_termination - computed: false, optional: true, required: false
  private _skipWaitOnJobTermination?: boolean | cdktf.IResolvable; 
  public get skipWaitOnJobTermination() {
    return this.getBooleanAttribute('skip_wait_on_job_termination');
  }
  public set skipWaitOnJobTermination(value: boolean | cdktf.IResolvable) {
    this._skipWaitOnJobTermination = value;
  }
  public resetSkipWaitOnJobTermination() {
    this._skipWaitOnJobTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitOnJobTerminationInput() {
    return this._skipWaitOnJobTermination;
  }

  // staging_location - computed: true, optional: true, required: false
  private _stagingLocation?: string; 
  public get stagingLocation() {
    return this.getStringAttribute('staging_location');
  }
  public set stagingLocation(value: string) {
    this._stagingLocation = value;
  }
  public resetStagingLocation() {
    this._stagingLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingLocationInput() {
    return this._stagingLocation;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // temp_location - computed: true, optional: true, required: false
  private _tempLocation?: string; 
  public get tempLocation() {
    return this.getStringAttribute('temp_location');
  }
  public set tempLocation(value: string) {
    this._tempLocation = value;
  }
  public resetTempLocation() {
    this._tempLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempLocationInput() {
    return this._tempLocation;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // transform_name_mapping - computed: false, optional: true, required: false
  private _transformNameMapping?: { [key: string]: string }; 
  public get transformNameMapping() {
    return this.getStringMapAttribute('transform_name_mapping');
  }
  public set transformNameMapping(value: { [key: string]: string }) {
    this._transformNameMapping = value;
  }
  public resetTransformNameMapping() {
    this._transformNameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNameMappingInput() {
    return this._transformNameMapping;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_experiments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalExperiments),
      autoscaling_algorithm: cdktf.stringToTerraform(this._autoscalingAlgorithm),
      container_spec_gcs_path: cdktf.stringToTerraform(this._containerSpecGcsPath),
      enable_streaming_engine: cdktf.booleanToTerraform(this._enableStreamingEngine),
      id: cdktf.stringToTerraform(this._id),
      ip_configuration: cdktf.stringToTerraform(this._ipConfiguration),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      launcher_machine_type: cdktf.stringToTerraform(this._launcherMachineType),
      machine_type: cdktf.stringToTerraform(this._machineType),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      num_workers: cdktf.numberToTerraform(this._numWorkers),
      on_delete: cdktf.stringToTerraform(this._onDelete),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      sdk_container_image: cdktf.stringToTerraform(this._sdkContainerImage),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      skip_wait_on_job_termination: cdktf.booleanToTerraform(this._skipWaitOnJobTermination),
      staging_location: cdktf.stringToTerraform(this._stagingLocation),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      temp_location: cdktf.stringToTerraform(this._tempLocation),
      transform_name_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._transformNameMapping),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_experiments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalExperiments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      autoscaling_algorithm: {
        value: cdktf.stringToHclTerraform(this._autoscalingAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_spec_gcs_path: {
        value: cdktf.stringToHclTerraform(this._containerSpecGcsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_streaming_engine: {
        value: cdktf.booleanToHclTerraform(this._enableStreamingEngine),
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
      ip_configuration: {
        value: cdktf.stringToHclTerraform(this._ipConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      launcher_machine_type: {
        value: cdktf.stringToHclTerraform(this._launcherMachineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_workers: {
        value: cdktf.numberToHclTerraform(this._maxWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_workers: {
        value: cdktf.numberToHclTerraform(this._numWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_delete: {
        value: cdktf.stringToHclTerraform(this._onDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdk_container_image: {
        value: cdktf.stringToHclTerraform(this._sdkContainerImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_wait_on_job_termination: {
        value: cdktf.booleanToHclTerraform(this._skipWaitOnJobTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      staging_location: {
        value: cdktf.stringToHclTerraform(this._stagingLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temp_location: {
        value: cdktf.stringToHclTerraform(this._tempLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transform_name_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._transformNameMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
