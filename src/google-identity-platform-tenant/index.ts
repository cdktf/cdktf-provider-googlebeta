/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIdentityPlatformTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow email/password user authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#allow_password_signup GoogleIdentityPlatformTenant#allow_password_signup}
  */
  readonly allowPasswordSignup?: boolean | cdktf.IResolvable;
  /**
  * Whether authentication is disabled for the tenant. If true, the users under
  * the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
  * are not able to manage its users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#disable_auth GoogleIdentityPlatformTenant#disable_auth}
  */
  readonly disableAuth?: boolean | cdktf.IResolvable;
  /**
  * Human friendly display name of the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#display_name GoogleIdentityPlatformTenant#display_name}
  */
  readonly displayName: string;
  /**
  * Whether to enable email link user authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#enable_email_link_signin GoogleIdentityPlatformTenant#enable_email_link_signin}
  */
  readonly enableEmailLinkSignin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}
  */
  readonly project?: string;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#client GoogleIdentityPlatformTenant#client}
  */
  readonly client?: GoogleIdentityPlatformTenantClient;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#timeouts GoogleIdentityPlatformTenant#timeouts}
  */
  readonly timeouts?: GoogleIdentityPlatformTenantTimeouts;
}
export interface GoogleIdentityPlatformTenantClientPermissions {
  /**
  * When true, end users cannot delete their account on the associated project through any of our API methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#disabled_user_deletion GoogleIdentityPlatformTenant#disabled_user_deletion}
  */
  readonly disabledUserDeletion?: boolean | cdktf.IResolvable;
  /**
  * When true, end users cannot sign up for a new account on the associated project through any of our API methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#disabled_user_signup GoogleIdentityPlatformTenant#disabled_user_signup}
  */
  readonly disabledUserSignup?: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformTenantClientPermissionsToTerraform(struct?: GoogleIdentityPlatformTenantClientPermissionsOutputReference | GoogleIdentityPlatformTenantClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_user_deletion: cdktf.booleanToTerraform(struct!.disabledUserDeletion),
    disabled_user_signup: cdktf.booleanToTerraform(struct!.disabledUserSignup),
  }
}


export function googleIdentityPlatformTenantClientPermissionsToHclTerraform(struct?: GoogleIdentityPlatformTenantClientPermissionsOutputReference | GoogleIdentityPlatformTenantClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_user_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.disabledUserDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_user_signup: {
      value: cdktf.booleanToHclTerraform(struct!.disabledUserSignup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformTenantClientPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformTenantClientPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledUserDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledUserDeletion = this._disabledUserDeletion;
    }
    if (this._disabledUserSignup !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledUserSignup = this._disabledUserSignup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformTenantClientPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledUserDeletion = undefined;
      this._disabledUserSignup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledUserDeletion = value.disabledUserDeletion;
      this._disabledUserSignup = value.disabledUserSignup;
    }
  }

  // disabled_user_deletion - computed: false, optional: true, required: false
  private _disabledUserDeletion?: boolean | cdktf.IResolvable; 
  public get disabledUserDeletion() {
    return this.getBooleanAttribute('disabled_user_deletion');
  }
  public set disabledUserDeletion(value: boolean | cdktf.IResolvable) {
    this._disabledUserDeletion = value;
  }
  public resetDisabledUserDeletion() {
    this._disabledUserDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledUserDeletionInput() {
    return this._disabledUserDeletion;
  }

  // disabled_user_signup - computed: false, optional: true, required: false
  private _disabledUserSignup?: boolean | cdktf.IResolvable; 
  public get disabledUserSignup() {
    return this.getBooleanAttribute('disabled_user_signup');
  }
  public set disabledUserSignup(value: boolean | cdktf.IResolvable) {
    this._disabledUserSignup = value;
  }
  public resetDisabledUserSignup() {
    this._disabledUserSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledUserSignupInput() {
    return this._disabledUserSignup;
  }
}
export interface GoogleIdentityPlatformTenantClient {
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#permissions GoogleIdentityPlatformTenant#permissions}
  */
  readonly permissions?: GoogleIdentityPlatformTenantClientPermissions;
}

export function googleIdentityPlatformTenantClientToTerraform(struct?: GoogleIdentityPlatformTenantClientOutputReference | GoogleIdentityPlatformTenantClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: googleIdentityPlatformTenantClientPermissionsToTerraform(struct!.permissions),
  }
}


export function googleIdentityPlatformTenantClientToHclTerraform(struct?: GoogleIdentityPlatformTenantClientOutputReference | GoogleIdentityPlatformTenantClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: googleIdentityPlatformTenantClientPermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformTenantClientPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformTenantClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformTenantClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformTenantClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissions.internalValue = value.permissions;
    }
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new GoogleIdentityPlatformTenantClientPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: GoogleIdentityPlatformTenantClientPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }
}
export interface GoogleIdentityPlatformTenantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}
  */
  readonly update?: string;
}

export function googleIdentityPlatformTenantTimeoutsToTerraform(struct?: GoogleIdentityPlatformTenantTimeouts | cdktf.IResolvable): any {
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


export function googleIdentityPlatformTenantTimeoutsToHclTerraform(struct?: GoogleIdentityPlatformTenantTimeouts | cdktf.IResolvable): any {
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

export class GoogleIdentityPlatformTenantTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIdentityPlatformTenantTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIdentityPlatformTenantTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant google_identity_platform_tenant}
*/
export class GoogleIdentityPlatformTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIdentityPlatformTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIdentityPlatformTenant to import
  * @param importFromId The id of the existing GoogleIdentityPlatformTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIdentityPlatformTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_identity_platform_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_identity_platform_tenant google_identity_platform_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIdentityPlatformTenantConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIdentityPlatformTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.40.0',
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
    this._allowPasswordSignup = config.allowPasswordSignup;
    this._disableAuth = config.disableAuth;
    this._displayName = config.displayName;
    this._enableEmailLinkSignin = config.enableEmailLinkSignin;
    this._id = config.id;
    this._project = config.project;
    this._client.internalValue = config.client;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_password_signup - computed: false, optional: true, required: false
  private _allowPasswordSignup?: boolean | cdktf.IResolvable; 
  public get allowPasswordSignup() {
    return this.getBooleanAttribute('allow_password_signup');
  }
  public set allowPasswordSignup(value: boolean | cdktf.IResolvable) {
    this._allowPasswordSignup = value;
  }
  public resetAllowPasswordSignup() {
    this._allowPasswordSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPasswordSignupInput() {
    return this._allowPasswordSignup;
  }

  // disable_auth - computed: false, optional: true, required: false
  private _disableAuth?: boolean | cdktf.IResolvable; 
  public get disableAuth() {
    return this.getBooleanAttribute('disable_auth');
  }
  public set disableAuth(value: boolean | cdktf.IResolvable) {
    this._disableAuth = value;
  }
  public resetDisableAuth() {
    this._disableAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAuthInput() {
    return this._disableAuth;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_email_link_signin - computed: false, optional: true, required: false
  private _enableEmailLinkSignin?: boolean | cdktf.IResolvable; 
  public get enableEmailLinkSignin() {
    return this.getBooleanAttribute('enable_email_link_signin');
  }
  public set enableEmailLinkSignin(value: boolean | cdktf.IResolvable) {
    this._enableEmailLinkSignin = value;
  }
  public resetEnableEmailLinkSignin() {
    this._enableEmailLinkSignin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailLinkSigninInput() {
    return this._enableEmailLinkSignin;
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

  // client - computed: false, optional: true, required: false
  private _client = new GoogleIdentityPlatformTenantClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: GoogleIdentityPlatformTenantClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIdentityPlatformTenantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIdentityPlatformTenantTimeouts) {
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
      allow_password_signup: cdktf.booleanToTerraform(this._allowPasswordSignup),
      disable_auth: cdktf.booleanToTerraform(this._disableAuth),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_email_link_signin: cdktf.booleanToTerraform(this._enableEmailLinkSignin),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      client: googleIdentityPlatformTenantClientToTerraform(this._client.internalValue),
      timeouts: googleIdentityPlatformTenantTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_password_signup: {
        value: cdktf.booleanToHclTerraform(this._allowPasswordSignup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_auth: {
        value: cdktf.booleanToHclTerraform(this._disableAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_email_link_signin: {
        value: cdktf.booleanToHclTerraform(this._enableEmailLinkSignin),
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
      client: {
        value: googleIdentityPlatformTenantClientToHclTerraform(this._client.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformTenantClientList",
      },
      timeouts: {
        value: googleIdentityPlatformTenantTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIdentityPlatformTenantTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
