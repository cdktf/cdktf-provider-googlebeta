// https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataflowFlexTemplateJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#container_spec_gcs_path GoogleDataflowFlexTemplateJob#container_spec_gcs_path}
  */
  readonly containerSpecGcsPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#id GoogleDataflowFlexTemplateJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#labels GoogleDataflowFlexTemplateJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#name GoogleDataflowFlexTemplateJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#on_delete GoogleDataflowFlexTemplateJob#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#parameters GoogleDataflowFlexTemplateJob#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#project GoogleDataflowFlexTemplateJob#project}
  */
  readonly project?: string;
  /**
  * The region in which the created job should run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#region GoogleDataflowFlexTemplateJob#region}
  */
  readonly region?: string;
  /**
  * If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are different, e.g. by embedding a release ID or by using a random_id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job#skip_wait_on_job_termination GoogleDataflowFlexTemplateJob#skip_wait_on_job_termination}
  */
  readonly skipWaitOnJobTermination?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job google_dataflow_flex_template_job}
*/
export class GoogleDataflowFlexTemplateJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataflow_flex_template_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataflow_flex_template_job google_dataflow_flex_template_job} Resource
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
        providerVersion: '4.30.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerSpecGcsPath = config.containerSpecGcsPath;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._onDelete = config.onDelete;
    this._parameters = config.parameters;
    this._project = config.project;
    this._region = config.region;
    this._skipWaitOnJobTermination = config.skipWaitOnJobTermination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_spec_gcs_path: cdktf.stringToTerraform(this._containerSpecGcsPath),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      on_delete: cdktf.stringToTerraform(this._onDelete),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      skip_wait_on_job_termination: cdktf.booleanToTerraform(this._skipWaitOnJobTermination),
    };
  }
}
