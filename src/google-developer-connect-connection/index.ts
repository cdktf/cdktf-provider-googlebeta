/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDeveloperConnectConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Allows clients to store small amounts of arbitrary data.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#annotations GoogleDeveloperConnectConnection#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Required. Id of the requesting object. If auto-generating Id server-side,
  * remove this field and connection_id from the method_signature of Create RPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#connection_id GoogleDeveloperConnectConnection#connection_id}
  */
  readonly connectionId: string;
  /**
  * Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#disabled GoogleDeveloperConnectConnection#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. This checksum is computed by the server based on the value
  * of other fields, and may be sent on update and delete requests to ensure the
  * client has an up-to-date value before proceeding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#etag GoogleDeveloperConnectConnection#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels as key value pairs
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#labels GoogleDeveloperConnectConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource
  * within its parent collection as described in https://google.aip.dev/122. See documentation
  * for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#location GoogleDeveloperConnectConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}
  */
  readonly project?: string;
  /**
  * github_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#github_config GoogleDeveloperConnectConnection#github_config}
  */
  readonly githubConfig?: GoogleDeveloperConnectConnectionGithubConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#timeouts GoogleDeveloperConnectConnection#timeouts}
  */
  readonly timeouts?: GoogleDeveloperConnectConnectionTimeouts;
}
export interface GoogleDeveloperConnectConnectionInstallationState {
}

export function googleDeveloperConnectConnectionInstallationStateToTerraform(struct?: GoogleDeveloperConnectConnectionInstallationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDeveloperConnectConnectionInstallationStateToHclTerraform(struct?: GoogleDeveloperConnectConnectionInstallationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDeveloperConnectConnectionInstallationStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDeveloperConnectConnectionInstallationState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionInstallationState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_uri - computed: true, optional: false, required: false
  public get actionUri() {
    return this.getStringAttribute('action_uri');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }
}

export class GoogleDeveloperConnectConnectionInstallationStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDeveloperConnectConnectionInstallationStateOutputReference {
    return new GoogleDeveloperConnectConnectionInstallationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the OAuth token
  * that authorizes the connection.
  * Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#oauth_token_secret_version GoogleDeveloperConnectConnection#oauth_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly oauthTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionGithubConfigAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_token_secret_version: cdktf.stringToTerraform(struct!.oauthTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionGithubConfigAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenSecretVersion = this._oauthTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthTokenSecretVersion = value.oauthTokenSecretVersion;
    }
  }

  // oauth_token_secret_version - computed: false, optional: false, required: true
  private _oauthTokenSecretVersion?: string; 
  public get oauthTokenSecretVersion() {
    return this.getStringAttribute('oauth_token_secret_version');
  }
  public set oauthTokenSecretVersion(value: string) {
    this._oauthTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenSecretVersionInput() {
    return this._oauthTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionGithubConfig {
  /**
  * Optional. GitHub App installation id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}
  */
  readonly appInstallationId?: string;
  /**
  * Required. Immutable. The GitHub Application that was installed to
  * the GitHub user or organization.
  * Possible values:
  *   GIT_HUB_APP_UNSPECIFIED
  *   DEVELOPER_CONNECT
  *   FIREBASE"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#github_app GoogleDeveloperConnectConnection#github_app}
  */
  readonly githubApp: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential?: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential;
}

export function googleDeveloperConnectConnectionGithubConfigToTerraform(struct?: GoogleDeveloperConnectConnectionGithubConfigOutputReference | GoogleDeveloperConnectConnectionGithubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_installation_id: cdktf.stringToTerraform(struct!.appInstallationId),
    github_app: cdktf.stringToTerraform(struct!.githubApp),
    authorizer_credential: googleDeveloperConnectConnectionGithubConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
  }
}


export function googleDeveloperConnectConnectionGithubConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionGithubConfigOutputReference | GoogleDeveloperConnectConnectionGithubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_installation_id: {
      value: cdktf.stringToHclTerraform(struct!.appInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app: {
      value: cdktf.stringToHclTerraform(struct!.githubApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: googleDeveloperConnectConnectionGithubConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGithubConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGithubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInstallationId = this._appInstallationId;
    }
    if (this._githubApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubApp = this._githubApp;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGithubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appInstallationId = undefined;
      this._githubApp = undefined;
      this._authorizerCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appInstallationId = value.appInstallationId;
      this._githubApp = value.githubApp;
      this._authorizerCredential.internalValue = value.authorizerCredential;
    }
  }

  // app_installation_id - computed: true, optional: true, required: false
  private _appInstallationId?: string; 
  public get appInstallationId() {
    return this.getStringAttribute('app_installation_id');
  }
  public set appInstallationId(value: string) {
    this._appInstallationId = value;
  }
  public resetAppInstallationId() {
    this._appInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstallationIdInput() {
    return this._appInstallationId;
  }

  // github_app - computed: false, optional: false, required: true
  private _githubApp?: string; 
  public get githubApp() {
    return this.getStringAttribute('github_app');
  }
  public set githubApp(value: string) {
    this._githubApp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInput() {
    return this._githubApp;
  }

  // installation_uri - computed: true, optional: false, required: false
  public get installationUri() {
    return this.getStringAttribute('installation_uri');
  }

  // authorizer_credential - computed: false, optional: true, required: false
  private _authorizerCredential = new GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  public resetAuthorizerCredential() {
    this._authorizerCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }
}
export interface GoogleDeveloperConnectConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}
  */
  readonly update?: string;
}

export function googleDeveloperConnectConnectionTimeoutsToTerraform(struct?: GoogleDeveloperConnectConnectionTimeouts | cdktf.IResolvable): any {
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


export function googleDeveloperConnectConnectionTimeoutsToHclTerraform(struct?: GoogleDeveloperConnectConnectionTimeouts | cdktf.IResolvable): any {
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

export class GoogleDeveloperConnectConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDeveloperConnectConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection google_developer_connect_connection}
*/
export class GoogleDeveloperConnectConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_developer_connect_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDeveloperConnectConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDeveloperConnectConnection to import
  * @param importFromId The id of the existing GoogleDeveloperConnectConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDeveloperConnectConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_developer_connect_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_developer_connect_connection google_developer_connect_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDeveloperConnectConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDeveloperConnectConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_developer_connect_connection',
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
    this._annotations = config.annotations;
    this._connectionId = config.connectionId;
    this._disabled = config.disabled;
    this._etag = config.etag;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._githubConfig.internalValue = config.githubConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // installation_state - computed: true, optional: false, required: false
  private _installationState = new GoogleDeveloperConnectConnectionInstallationStateList(this, "installation_state", false);
  public get installationState() {
    return this._installationState;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // github_config - computed: false, optional: true, required: false
  private _githubConfig = new GoogleDeveloperConnectConnectionGithubConfigOutputReference(this, "github_config");
  public get githubConfig() {
    return this._githubConfig;
  }
  public putGithubConfig(value: GoogleDeveloperConnectConnectionGithubConfig) {
    this._githubConfig.internalValue = value;
  }
  public resetGithubConfig() {
    this._githubConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubConfigInput() {
    return this._githubConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDeveloperConnectConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDeveloperConnectConnectionTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      github_config: googleDeveloperConnectConnectionGithubConfigToTerraform(this._githubConfig.internalValue),
      timeouts: googleDeveloperConnectConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      github_config: {
        value: googleDeveloperConnectConnectionGithubConfigToHclTerraform(this._githubConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionGithubConfigList",
      },
      timeouts: {
        value: googleDeveloperConnectConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDeveloperConnectConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
