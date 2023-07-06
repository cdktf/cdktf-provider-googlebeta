// https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeNodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#cpu_overcommit_type GoogleComputeNodeTemplate#cpu_overcommit_type}
  */
  readonly cpuOvercommitType?: string;
  /**
  * An optional textual description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#description GoogleComputeNodeTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#name GoogleComputeNodeTemplate#name}
  */
  readonly name?: string;
  /**
  * Labels to use for node affinity, which will be used in
instance scheduling.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#node_affinity_labels GoogleComputeNodeTemplate#node_affinity_labels}
  */
  readonly nodeAffinityLabels?: { [key: string]: string };
  /**
  * Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#node_type GoogleComputeNodeTemplate#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}
  */
  readonly project?: string;
  /**
  * Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#region GoogleComputeNodeTemplate#region}
  */
  readonly region?: string;
  /**
  * node_type_flexibility block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#node_type_flexibility GoogleComputeNodeTemplate#node_type_flexibility}
  */
  readonly nodeTypeFlexibility?: GoogleComputeNodeTemplateNodeTypeFlexibility;
  /**
  * server_binding block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#server_binding GoogleComputeNodeTemplate#server_binding}
  */
  readonly serverBinding?: GoogleComputeNodeTemplateServerBinding;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#timeouts GoogleComputeNodeTemplate#timeouts}
  */
  readonly timeouts?: GoogleComputeNodeTemplateTimeouts;
}
export interface GoogleComputeNodeTemplateNodeTypeFlexibility {
  /**
  * Number of virtual CPUs to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#cpus GoogleComputeNodeTemplate#cpus}
  */
  readonly cpus?: string;
  /**
  * Physical memory available to the node, defined in MB.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#memory GoogleComputeNodeTemplate#memory}
  */
  readonly memory?: string;
}

export function googleComputeNodeTemplateNodeTypeFlexibilityToTerraform(struct?: GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference | GoogleComputeNodeTemplateNodeTypeFlexibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpus: cdktf.stringToTerraform(struct!.cpus),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export class GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeNodeTemplateNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeNodeTemplateNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpus = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpus = value.cpus;
      this._memory = value.memory;
    }
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: string; 
  public get cpus() {
    return this.getStringAttribute('cpus');
  }
  public set cpus(value: string) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // local_ssd - computed: true, optional: false, required: false
  public get localSsd() {
    return this.getStringAttribute('local_ssd');
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface GoogleComputeNodeTemplateServerBinding {
  /**
  * Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER',
nodes using this template will restart on any physical server
following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#type GoogleComputeNodeTemplate#type}
  */
  readonly type: string;
}

export function googleComputeNodeTemplateServerBindingToTerraform(struct?: GoogleComputeNodeTemplateServerBindingOutputReference | GoogleComputeNodeTemplateServerBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleComputeNodeTemplateServerBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeNodeTemplateServerBinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeNodeTemplateServerBinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface GoogleComputeNodeTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}
  */
  readonly delete?: string;
}

export function googleComputeNodeTemplateTimeoutsToTerraform(struct?: GoogleComputeNodeTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GoogleComputeNodeTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeNodeTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeNodeTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template google_compute_node_template}
*/
export class GoogleComputeNodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_node_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_compute_node_template google_compute_node_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeNodeTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeNodeTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_node_template',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.72.1',
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
    this._cpuOvercommitType = config.cpuOvercommitType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nodeAffinityLabels = config.nodeAffinityLabels;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._region = config.region;
    this._nodeTypeFlexibility.internalValue = config.nodeTypeFlexibility;
    this._serverBinding.internalValue = config.serverBinding;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_overcommit_type - computed: false, optional: true, required: false
  private _cpuOvercommitType?: string; 
  public get cpuOvercommitType() {
    return this.getStringAttribute('cpu_overcommit_type');
  }
  public set cpuOvercommitType(value: string) {
    this._cpuOvercommitType = value;
  }
  public resetCpuOvercommitType() {
    this._cpuOvercommitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOvercommitTypeInput() {
    return this._cpuOvercommitType;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // node_affinity_labels - computed: false, optional: true, required: false
  private _nodeAffinityLabels?: { [key: string]: string }; 
  public get nodeAffinityLabels() {
    return this.getStringMapAttribute('node_affinity_labels');
  }
  public set nodeAffinityLabels(value: { [key: string]: string }) {
    this._nodeAffinityLabels = value;
  }
  public resetNodeAffinityLabels() {
    this._nodeAffinityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityLabelsInput() {
    return this._nodeAffinityLabels;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // node_type_flexibility - computed: false, optional: true, required: false
  private _nodeTypeFlexibility = new GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference(this, "node_type_flexibility");
  public get nodeTypeFlexibility() {
    return this._nodeTypeFlexibility;
  }
  public putNodeTypeFlexibility(value: GoogleComputeNodeTemplateNodeTypeFlexibility) {
    this._nodeTypeFlexibility.internalValue = value;
  }
  public resetNodeTypeFlexibility() {
    this._nodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeFlexibilityInput() {
    return this._nodeTypeFlexibility.internalValue;
  }

  // server_binding - computed: false, optional: true, required: false
  private _serverBinding = new GoogleComputeNodeTemplateServerBindingOutputReference(this, "server_binding");
  public get serverBinding() {
    return this._serverBinding;
  }
  public putServerBinding(value: GoogleComputeNodeTemplateServerBinding) {
    this._serverBinding.internalValue = value;
  }
  public resetServerBinding() {
    this._serverBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBindingInput() {
    return this._serverBinding.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeNodeTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeNodeTemplateTimeouts) {
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
      cpu_overcommit_type: cdktf.stringToTerraform(this._cpuOvercommitType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_affinity_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeAffinityLabels),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      node_type_flexibility: googleComputeNodeTemplateNodeTypeFlexibilityToTerraform(this._nodeTypeFlexibility.internalValue),
      server_binding: googleComputeNodeTemplateServerBindingToTerraform(this._serverBinding.internalValue),
      timeouts: googleComputeNodeTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
