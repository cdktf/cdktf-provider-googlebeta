// https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeTargetInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#description GoogleComputeTargetInstance#description}
  */
  readonly description?: string;
  /**
  * The Compute instance VM handling traffic for this target instance.
Accepts the instance self-link, relative path
(e.g. 'projects/project/zones/zone/instances/instance') or name. If
name is given, the zone will default to the given zone or
the provider-default zone and the project will default to the
provider-level project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#instance GoogleComputeTargetInstance#instance}
  */
  readonly instance: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#name GoogleComputeTargetInstance#name}
  */
  readonly name: string;
  /**
  * NAT option controlling how IPs are NAT'ed to the instance.
Currently only NO_NAT (default value) is supported. Default value: "NO_NAT" Possible values: ["NO_NAT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#nat_policy GoogleComputeTargetInstance#nat_policy}
  */
  readonly natPolicy?: string;
  /**
  * The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#network GoogleComputeTargetInstance#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#project GoogleComputeTargetInstance#project}
  */
  readonly project?: string;
  /**
  * URL of the zone where the target instance resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#zone GoogleComputeTargetInstance#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#timeouts GoogleComputeTargetInstance#timeouts}
  */
  readonly timeouts?: GoogleComputeTargetInstanceTimeouts;
}
export interface GoogleComputeTargetInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#create GoogleComputeTargetInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance#delete GoogleComputeTargetInstance#delete}
  */
  readonly delete?: string;
}

export function googleComputeTargetInstanceTimeoutsToTerraform(struct?: GoogleComputeTargetInstanceTimeoutsOutputReference | GoogleComputeTargetInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GoogleComputeTargetInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeTargetInstanceTimeouts | undefined {
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

  public set internalValue(value: GoogleComputeTargetInstanceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance google_compute_target_instance}
*/
export class GoogleComputeTargetInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_target_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_target_instance google_compute_target_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeTargetInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeTargetInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_instance',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._instance = config.instance;
    this._name = config.name;
    this._natPolicy = config.natPolicy;
    this._network = config.network;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // nat_policy - computed: false, optional: true, required: false
  private _natPolicy?: string; 
  public get natPolicy() {
    return this.getStringAttribute('nat_policy');
  }
  public set natPolicy(value: string) {
    this._natPolicy = value;
  }
  public resetNatPolicy() {
    this._natPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPolicyInput() {
    return this._natPolicy;
  }

  // network - computed: false, optional: true, required: false
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeTargetInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeTargetInstanceTimeouts) {
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
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      nat_policy: cdktf.stringToTerraform(this._natPolicy),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: googleComputeTargetInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
