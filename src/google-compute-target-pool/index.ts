// https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeTargetPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * URL to the backup target pool. Must also set failover_ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#backup_pool GoogleComputeTargetPool#backup_pool}
  */
  readonly backupPool?: string;
  /**
  * Textual description field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#description GoogleComputeTargetPool#description}
  */
  readonly description?: string;
  /**
  * Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#failover_ratio GoogleComputeTargetPool#failover_ratio}
  */
  readonly failoverRatio?: number;
  /**
  * List of zero or one health check name or self_link. Only legacy google_compute_http_health_check is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#health_checks GoogleComputeTargetPool#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#id GoogleComputeTargetPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of instances in the pool. They can be given as URLs, or in the form of "zone/name". Note that the instances need not exist at the time of target pool creation, so there is no need to use the Terraform interpolators to create a dependency on the instances from the target pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#instances GoogleComputeTargetPool#instances}
  */
  readonly instances?: string[];
  /**
  * A unique name for the resource, required by GCE. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#name GoogleComputeTargetPool#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#project GoogleComputeTargetPool#project}
  */
  readonly project?: string;
  /**
  * Where the target pool resides. Defaults to project region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#region GoogleComputeTargetPool#region}
  */
  readonly region?: string;
  /**
  * The resource URL for the security policy associated with this target pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#security_policy GoogleComputeTargetPool#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * How to distribute load. Options are "NONE" (no affinity). "CLIENT_IP" (hash of the source/dest addresses / ports), and "CLIENT_IP_PROTO" also includes the protocol (default "NONE").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#session_affinity GoogleComputeTargetPool#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#timeouts GoogleComputeTargetPool#timeouts}
  */
  readonly timeouts?: GoogleComputeTargetPoolTimeouts;
}
export interface GoogleComputeTargetPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#create GoogleComputeTargetPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#delete GoogleComputeTargetPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#update GoogleComputeTargetPool#update}
  */
  readonly update?: string;
}

export function googleComputeTargetPoolTimeoutsToTerraform(struct?: GoogleComputeTargetPoolTimeouts | cdktf.IResolvable): any {
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


export function googleComputeTargetPoolTimeoutsToHclTerraform(struct?: GoogleComputeTargetPoolTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeTargetPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeTargetPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeTargetPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool google_compute_target_pool}
*/
export class GoogleComputeTargetPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_target_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeTargetPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeTargetPool to import
  * @param importFromId The id of the existing GoogleComputeTargetPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeTargetPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_target_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_target_pool google_compute_target_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeTargetPoolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeTargetPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_pool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.17.0',
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
    this._backupPool = config.backupPool;
    this._description = config.description;
    this._failoverRatio = config.failoverRatio;
    this._healthChecks = config.healthChecks;
    this._id = config.id;
    this._instances = config.instances;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._securityPolicy = config.securityPolicy;
    this._sessionAffinity = config.sessionAffinity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_pool - computed: false, optional: true, required: false
  private _backupPool?: string; 
  public get backupPool() {
    return this.getStringAttribute('backup_pool');
  }
  public set backupPool(value: string) {
    this._backupPool = value;
  }
  public resetBackupPool() {
    this._backupPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPoolInput() {
    return this._backupPool;
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

  // failover_ratio - computed: false, optional: true, required: false
  private _failoverRatio?: number; 
  public get failoverRatio() {
    return this.getNumberAttribute('failover_ratio');
  }
  public set failoverRatio(value: number) {
    this._failoverRatio = value;
  }
  public resetFailoverRatio() {
    this._failoverRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRatioInput() {
    return this._failoverRatio;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string[]; 
  public get healthChecks() {
    return this.getListAttribute('health_checks');
  }
  public set healthChecks(value: string[]) {
    this._healthChecks = value;
  }
  public resetHealthChecks() {
    this._healthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks;
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

  // instances - computed: true, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return cdktf.Fn.tolist(this.getListAttribute('instances'));
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
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

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeTargetPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeTargetPoolTimeouts) {
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
      backup_pool: cdktf.stringToTerraform(this._backupPool),
      description: cdktf.stringToTerraform(this._description),
      failover_ratio: cdktf.numberToTerraform(this._failoverRatio),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthChecks),
      id: cdktf.stringToTerraform(this._id),
      instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instances),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      timeouts: googleComputeTargetPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_pool: {
        value: cdktf.stringToHclTerraform(this._backupPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_ratio: {
        value: cdktf.numberToHclTerraform(this._failoverRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_checks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthChecks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instances),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_affinity: {
        value: cdktf.stringToHclTerraform(this._sessionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleComputeTargetPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeTargetPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
