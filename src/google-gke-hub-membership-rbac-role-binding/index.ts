// https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGkeHubMembershipRbacRoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of the Membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#location GoogleGkeHubMembershipRbacRoleBinding#location}
  */
  readonly location: string;
  /**
  * Id of the membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_id GoogleGkeHubMembershipRbacRoleBinding#membership_id}
  */
  readonly membershipId: string;
  /**
  * The client-provided identifier of the RBAC Role Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_rbac_role_binding_id GoogleGkeHubMembershipRbacRoleBinding#membership_rbac_role_binding_id}
  */
  readonly membershipRbacRoleBindingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}
  */
  readonly project?: string;
  /**
  * Principal that is be authorized in the cluster (at least of one the oneof
  * is required). Updating one will unset the other automatically.
  * user is the name of the user as seen by the kubernetes cluster, example
  * "alice" or "alice@domain.tld"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#user GoogleGkeHubMembershipRbacRoleBinding#user}
  */
  readonly user: string;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#role GoogleGkeHubMembershipRbacRoleBinding#role}
  */
  readonly role: GoogleGkeHubMembershipRbacRoleBindingRole;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#timeouts GoogleGkeHubMembershipRbacRoleBinding#timeouts}
  */
  readonly timeouts?: GoogleGkeHubMembershipRbacRoleBindingTimeouts;
}
export interface GoogleGkeHubMembershipRbacRoleBindingState {
}

export function googleGkeHubMembershipRbacRoleBindingStateToTerraform(struct?: GoogleGkeHubMembershipRbacRoleBindingState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeHubMembershipRbacRoleBindingStateToHclTerraform(struct?: GoogleGkeHubMembershipRbacRoleBindingState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeHubMembershipRbacRoleBindingStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubMembershipRbacRoleBindingState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubMembershipRbacRoleBindingState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class GoogleGkeHubMembershipRbacRoleBindingStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeHubMembershipRbacRoleBindingStateOutputReference {
    return new GoogleGkeHubMembershipRbacRoleBindingStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubMembershipRbacRoleBindingRole {
  /**
  * PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW", "ANTHOS_SUPPORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#predefined_role GoogleGkeHubMembershipRbacRoleBinding#predefined_role}
  */
  readonly predefinedRole: string;
}

export function googleGkeHubMembershipRbacRoleBindingRoleToTerraform(struct?: GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference | GoogleGkeHubMembershipRbacRoleBindingRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predefined_role: cdktf.stringToTerraform(struct!.predefinedRole),
  }
}


export function googleGkeHubMembershipRbacRoleBindingRoleToHclTerraform(struct?: GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference | GoogleGkeHubMembershipRbacRoleBindingRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predefined_role: {
      value: cdktf.stringToHclTerraform(struct!.predefinedRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubMembershipRbacRoleBindingRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predefinedRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedRole = this._predefinedRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubMembershipRbacRoleBindingRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predefinedRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predefinedRole = value.predefinedRole;
    }
  }

  // predefined_role - computed: false, optional: false, required: true
  private _predefinedRole?: string; 
  public get predefinedRole() {
    return this.getStringAttribute('predefined_role');
  }
  public set predefinedRole(value: string) {
    this._predefinedRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedRoleInput() {
    return this._predefinedRole;
  }
}
export interface GoogleGkeHubMembershipRbacRoleBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#create GoogleGkeHubMembershipRbacRoleBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#delete GoogleGkeHubMembershipRbacRoleBinding#delete}
  */
  readonly delete?: string;
}

export function googleGkeHubMembershipRbacRoleBindingTimeoutsToTerraform(struct?: GoogleGkeHubMembershipRbacRoleBindingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleGkeHubMembershipRbacRoleBindingTimeoutsToHclTerraform(struct?: GoogleGkeHubMembershipRbacRoleBindingTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleGkeHubMembershipRbacRoleBindingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleGkeHubMembershipRbacRoleBindingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding google_gke_hub_membership_rbac_role_binding}
*/
export class GoogleGkeHubMembershipRbacRoleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_membership_rbac_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleGkeHubMembershipRbacRoleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleGkeHubMembershipRbacRoleBinding to import
  * @param importFromId The id of the existing GoogleGkeHubMembershipRbacRoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleGkeHubMembershipRbacRoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_membership_rbac_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_gke_hub_membership_rbac_role_binding google_gke_hub_membership_rbac_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGkeHubMembershipRbacRoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGkeHubMembershipRbacRoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_membership_rbac_role_binding',
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
    this._id = config.id;
    this._location = config.location;
    this._membershipId = config.membershipId;
    this._membershipRbacRoleBindingId = config.membershipRbacRoleBindingId;
    this._project = config.project;
    this._user = config.user;
    this._role.internalValue = config.role;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // membership_id - computed: false, optional: false, required: true
  private _membershipId?: string; 
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }
  public set membershipId(value: string) {
    this._membershipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdInput() {
    return this._membershipId;
  }

  // membership_rbac_role_binding_id - computed: false, optional: false, required: true
  private _membershipRbacRoleBindingId?: string; 
  public get membershipRbacRoleBindingId() {
    return this.getStringAttribute('membership_rbac_role_binding_id');
  }
  public set membershipRbacRoleBindingId(value: string) {
    this._membershipRbacRoleBindingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipRbacRoleBindingIdInput() {
    return this._membershipRbacRoleBindingId;
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
  private _state = new GoogleGkeHubMembershipRbacRoleBindingStateList(this, "state", false);
  public get state() {
    return this._state;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // role - computed: false, optional: false, required: true
  private _role = new GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference(this, "role");
  public get role() {
    return this._role;
  }
  public putRole(value: GoogleGkeHubMembershipRbacRoleBindingRole) {
    this._role.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGkeHubMembershipRbacRoleBindingTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      membership_id: cdktf.stringToTerraform(this._membershipId),
      membership_rbac_role_binding_id: cdktf.stringToTerraform(this._membershipRbacRoleBindingId),
      project: cdktf.stringToTerraform(this._project),
      user: cdktf.stringToTerraform(this._user),
      role: googleGkeHubMembershipRbacRoleBindingRoleToTerraform(this._role.internalValue),
      timeouts: googleGkeHubMembershipRbacRoleBindingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      membership_id: {
        value: cdktf.stringToHclTerraform(this._membershipId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_rbac_role_binding_id: {
        value: cdktf.stringToHclTerraform(this._membershipRbacRoleBindingId),
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
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: googleGkeHubMembershipRbacRoleBindingRoleToHclTerraform(this._role.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeHubMembershipRbacRoleBindingRoleList",
      },
      timeouts: {
        value: googleGkeHubMembershipRbacRoleBindingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleGkeHubMembershipRbacRoleBindingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
