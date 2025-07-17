/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIamWorkloadIdentityPoolNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the namespace. Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#description GoogleIamWorkloadIdentityPoolNamespace#description}
  */
  readonly description?: string;
  /**
  * Whether the namespace is disabled. If disabled, credentials may no longer be issued for
  * identities within this namespace, however existing credentials will still be accepted until
  * they expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#disabled GoogleIamWorkloadIdentityPoolNamespace#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#id GoogleIamWorkloadIdentityPoolNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#project GoogleIamWorkloadIdentityPoolNamespace#project}
  */
  readonly project?: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name. This
  * value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolNamespace#workload_identity_pool_namespace_id}
  */
  readonly workloadIdentityPoolNamespaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#timeouts GoogleIamWorkloadIdentityPoolNamespace#timeouts}
  */
  readonly timeouts?: GoogleIamWorkloadIdentityPoolNamespaceTimeouts;
}
export interface GoogleIamWorkloadIdentityPoolNamespaceOwnerService {
}

export function googleIamWorkloadIdentityPoolNamespaceOwnerServiceToTerraform(struct?: GoogleIamWorkloadIdentityPoolNamespaceOwnerService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleIamWorkloadIdentityPoolNamespaceOwnerServiceToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolNamespaceOwnerService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleIamWorkloadIdentityPoolNamespaceOwnerService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIamWorkloadIdentityPoolNamespaceOwnerService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principal_subject - computed: true, optional: false, required: false
  public get principalSubject() {
    return this.getStringAttribute('principal_subject');
  }
}

export class GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference {
    return new GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIamWorkloadIdentityPoolNamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#create GoogleIamWorkloadIdentityPoolNamespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#delete GoogleIamWorkloadIdentityPoolNamespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#update GoogleIamWorkloadIdentityPoolNamespace#update}
  */
  readonly update?: string;
}

export function googleIamWorkloadIdentityPoolNamespaceTimeoutsToTerraform(struct?: GoogleIamWorkloadIdentityPoolNamespaceTimeouts | cdktf.IResolvable): any {
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


export function googleIamWorkloadIdentityPoolNamespaceTimeoutsToHclTerraform(struct?: GoogleIamWorkloadIdentityPoolNamespaceTimeouts | cdktf.IResolvable): any {
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

export class GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIamWorkloadIdentityPoolNamespaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIamWorkloadIdentityPoolNamespaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace google_iam_workload_identity_pool_namespace}
*/
export class GoogleIamWorkloadIdentityPoolNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolNamespace to import
  * @param importFromId The id of the existing GoogleIamWorkloadIdentityPoolNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_iam_workload_identity_pool_namespace google_iam_workload_identity_pool_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIamWorkloadIdentityPoolNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIamWorkloadIdentityPoolNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool_namespace',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.44.0',
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

  // owner_service - computed: true, optional: false, required: false
  private _ownerService = new GoogleIamWorkloadIdentityPoolNamespaceOwnerServiceList(this, "owner_service", false);
  public get ownerService() {
    return this._ownerService;
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
  private _timeouts = new GoogleIamWorkloadIdentityPoolNamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIamWorkloadIdentityPoolNamespaceTimeouts) {
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
      workload_identity_pool_namespace_id: cdktf.stringToTerraform(this._workloadIdentityPoolNamespaceId),
      timeouts: googleIamWorkloadIdentityPoolNamespaceTimeoutsToTerraform(this._timeouts.internalValue),
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
      workload_identity_pool_namespace_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolNamespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleIamWorkloadIdentityPoolNamespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIamWorkloadIdentityPoolNamespaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
