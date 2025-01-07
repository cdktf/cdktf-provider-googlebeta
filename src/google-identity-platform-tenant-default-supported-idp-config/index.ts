/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * OAuth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_id}
  */
  readonly clientId: string;
  /**
  * OAuth client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_secret GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}
  */
  readonly clientSecret: string;
  /**
  * If this IDP allows the user to sign in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#enabled GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the IDP. Possible values include:
  * 
  * * 'apple.com'
  * 
  * * 'facebook.com'
  * 
  * * 'gc.apple.com'
  * 
  * * 'github.com'
  * 
  * * 'google.com'
  * 
  * * 'linkedin.com'
  * 
  * * 'microsoft.com'
  * 
  * * 'playgames.google.com'
  * 
  * * 'twitter.com'
  * 
  * * 'yahoo.com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#idp_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}
  */
  readonly idpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}
  */
  readonly project?: string;
  /**
  * The name of the tenant where this DefaultSupportedIdpConfig resource exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#tenant GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#tenant}
  */
  readonly tenant: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#timeouts GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}
  */
  readonly timeouts?: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts;
}
export interface GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}
  */
  readonly update?: string;
}

export function googleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsToTerraform(struct?: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts | cdktf.IResolvable): any {
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


export function googleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsToHclTerraform(struct?: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config}
*/
export class GoogleIdentityPlatformTenantDefaultSupportedIdpConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_tenant_default_supported_idp_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIdentityPlatformTenantDefaultSupportedIdpConfig to import
  * @param importFromId The id of the existing GoogleIdentityPlatformTenantDefaultSupportedIdpConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIdentityPlatformTenantDefaultSupportedIdpConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_identity_platform_tenant_default_supported_idp_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant_default_supported_idp_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.15.0',
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
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._enabled = config.enabled;
    this._id = config.id;
    this._idpId = config.idpId;
    this._project = config.project;
    this._tenant = config.tenant;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // idp_id - computed: false, optional: false, required: true
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
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

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts) {
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
      project: cdktf.stringToTerraform(this._project),
      tenant: cdktf.stringToTerraform(this._tenant),
      timeouts: googleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      idp_id: {
        value: cdktf.stringToHclTerraform(this._idpId),
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
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
