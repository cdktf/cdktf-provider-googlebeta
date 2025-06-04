// https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIamWorkloadIdentityPoolManagedIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the managed identity. Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#description GoogleIamWorkloadIdentityPoolManagedIdentity#description}
  */
  readonly description?: string;
  /**
  * Whether the managed identity is disabled. If disabled, credentials may no longer be issued for
  * the identity, however existing credentials will still be accepted until they expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#disabled GoogleIamWorkloadIdentityPoolManagedIdentity#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#id GoogleIamWorkloadIdentityPoolManagedIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#project GoogleIamWorkloadIdentityPoolManagedIdentity#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name. This
  * value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
  /**
  * The ID to use for the managed identity. This value must:
  * * contain at most 63 characters
  * * contain only lowercase alphanumeric characters or '-'
  * * start with an alphanumeric character
  * * end with an alphanumeric character
  * 
  * 
  * The prefix 'gcp-' will be reserved for future uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}
  */
  readonly workloadIdentityPoolManagedIdentityId: string;
  /**
  * The ID to use for the namespace. This value must:
  * * contain at most 63 characters
  * * contain only lowercase alphanumeric characters or '-'
  * * start with an alphanumeric character
  * * end with an alphanumeric character
  * 
  * 
  * The prefix 'gcp-' will be reserved for future uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}
  */
  readonly workloadIdentityPoolNamespaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#timeouts GoogleIamWorkloadIdentityPoolManagedIdentity#timeouts}
  */
  readonly timeouts?: GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts;
}
export interface GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#create GoogleIamWorkloadIdentityPoolManagedIdentity#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#delete GoogleIamWorkloadIdentityPoolManagedIdentity#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#update GoogleIamWorkloadIdentityPoolManagedIdentity#update}
  */
  readonly update?: string;
}

export function googleIamWorkloadIdentityPoolManagedIdentityTimeoutsToTerraform(struct?: GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts | cdktf.IResolvable): any {
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


export function googleIamWorkloadIdentityPoolManagedIdentityTimeoutsToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts | cdktf.IResolvable): any {
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

export class GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}
*/
export class GoogleIamWorkloadIdentityPoolManagedIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool_managed_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolManagedIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolManagedIdentity to import
  * @param importFromId The id of the existing GoogleIamWorkloadIdentityPoolManagedIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolManagedIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool_managed_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.38.0/docs/resources/google_iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIamWorkloadIdentityPoolManagedIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIamWorkloadIdentityPoolManagedIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool_managed_identity',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.38.0',
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
    this._workloadIdentityPoolManagedIdentityId = config.workloadIdentityPoolManagedIdentityId;
    this._workloadIdentityPoolNamespaceId = config.workloadIdentityPoolNamespaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workload_identity_pool_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolId?: string; 
  public get workloadIdentityPoolId() {
    return this.getStringAttribute('workload_identity_pool_id');
  }
  public set workloadIdentityPoolId(value: string) {
    this._workloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolIdInput() {
    return this._workloadIdentityPoolId;
  }

  // workload_identity_pool_managed_identity_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolManagedIdentityId?: string; 
  public get workloadIdentityPoolManagedIdentityId() {
    return this.getStringAttribute('workload_identity_pool_managed_identity_id');
  }
  public set workloadIdentityPoolManagedIdentityId(value: string) {
    this._workloadIdentityPoolManagedIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolManagedIdentityIdInput() {
    return this._workloadIdentityPoolManagedIdentityId;
  }

  // workload_identity_pool_namespace_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolNamespaceId?: string; 
  public get workloadIdentityPoolNamespaceId() {
    return this.getStringAttribute('workload_identity_pool_namespace_id');
  }
  public set workloadIdentityPoolNamespaceId(value: string) {
    this._workloadIdentityPoolNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolNamespaceIdInput() {
    return this._workloadIdentityPoolNamespaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      workload_identity_pool_id: cdktf.stringToTerraform(this._workloadIdentityPoolId),
      workload_identity_pool_managed_identity_id: cdktf.stringToTerraform(this._workloadIdentityPoolManagedIdentityId),
      workload_identity_pool_namespace_id: cdktf.stringToTerraform(this._workloadIdentityPoolNamespaceId),
      timeouts: googleIamWorkloadIdentityPoolManagedIdentityTimeoutsToTerraform(this._timeouts.internalValue),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_managed_identity_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolManagedIdentityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_namespace_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolNamespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleIamWorkloadIdentityPoolManagedIdentityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
