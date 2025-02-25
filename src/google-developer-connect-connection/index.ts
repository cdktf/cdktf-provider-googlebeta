// https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDeveloperConnectConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Allows clients to store small amounts of arbitrary data.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#annotations GoogleDeveloperConnectConnection#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Required. Id of the requesting object
  * If auto-generating Id server-side, remove this field and
  * connection_id from the method_signature of Create RPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#connection_id GoogleDeveloperConnectConnection#connection_id}
  */
  readonly connectionId: string;
  /**
  * Optional. If disabled is set to true, functionality is disabled for this connection.
  * Repository based API methods and webhooks processing for repositories in
  * this connection will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#disabled GoogleDeveloperConnectConnection#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. This checksum is computed by the server based on the value of other
  * fields, and may be sent on update and delete requests to ensure the
  * client has an up-to-date value before proceeding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#etag GoogleDeveloperConnectConnection#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#id GoogleDeveloperConnectConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels as key value pairs
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#labels GoogleDeveloperConnectConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#location GoogleDeveloperConnectConnection#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#project GoogleDeveloperConnectConnection#project}
  */
  readonly project?: string;
  /**
  * bitbucket_cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#bitbucket_cloud_config GoogleDeveloperConnectConnection#bitbucket_cloud_config}
  */
  readonly bitbucketCloudConfig?: GoogleDeveloperConnectConnectionBitbucketCloudConfig;
  /**
  * bitbucket_data_center_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#bitbucket_data_center_config GoogleDeveloperConnectConnection#bitbucket_data_center_config}
  */
  readonly bitbucketDataCenterConfig?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfig;
  /**
  * crypto_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#crypto_key_config GoogleDeveloperConnectConnection#crypto_key_config}
  */
  readonly cryptoKeyConfig?: GoogleDeveloperConnectConnectionCryptoKeyConfig;
  /**
  * github_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#github_config GoogleDeveloperConnectConnection#github_config}
  */
  readonly githubConfig?: GoogleDeveloperConnectConnectionGithubConfig;
  /**
  * github_enterprise_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#github_enterprise_config GoogleDeveloperConnectConnection#github_enterprise_config}
  */
  readonly githubEnterpriseConfig?: GoogleDeveloperConnectConnectionGithubEnterpriseConfig;
  /**
  * gitlab_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#gitlab_config GoogleDeveloperConnectConnection#gitlab_config}
  */
  readonly gitlabConfig?: GoogleDeveloperConnectConnectionGitlabConfig;
  /**
  * gitlab_enterprise_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#gitlab_enterprise_config GoogleDeveloperConnectConnection#gitlab_enterprise_config}
  */
  readonly gitlabEnterpriseConfig?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#timeouts GoogleDeveloperConnectConnection#timeouts}
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
export interface GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionBitbucketCloudConfig {
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook
  * events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
  * validate and create webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#workspace GoogleDeveloperConnectConnection#workspace}
  */
  readonly workspace: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential;
}

export function googleDeveloperConnectConnectionBitbucketCloudConfigToTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference | GoogleDeveloperConnectConnectionBitbucketCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    workspace: cdktf.stringToTerraform(struct!.workspace),
    authorizer_credential: googleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: googleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
  }
}


export function googleDeveloperConnectConnectionBitbucketCloudConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference | GoogleDeveloperConnectConnectionBitbucketCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: googleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: googleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionBitbucketCloudConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionBitbucketCloudConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webhookSecretSecretVersion = undefined;
      this._workspace = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._workspace = value.workspace;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
    }
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionBitbucketCloudConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: GoogleDeveloperConnectConnectionBitbucketCloudConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }
}
export interface GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name.
  * Format:
  * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}
  */
  readonly service: string;
}

export function googleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GoogleDeveloperConnectConnectionBitbucketDataCenterConfig {
  /**
  * Required. The URI of the Bitbucket Data Center host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}
  */
  readonly hostUri: string;
  /**
  * Optional. SSL certificate authority to trust when making requests to Bitbucket Data
  * Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: string;
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook
  * events, formatted as 'projects/* /secrets/* /versions/*'. This is used to
  * validate webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
}

export function googleDeveloperConnectConnectionBitbucketDataCenterConfigToTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: googleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: googleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
    service_directory_config: googleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function googleDeveloperConnectConnectionBitbucketDataCenterConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference | GoogleDeveloperConnectConnectionBitbucketDataCenterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_uri: {
      value: cdktf.stringToHclTerraform(struct!.hostUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: googleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: googleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialList",
    },
    service_directory_config: {
      value: googleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionBitbucketDataCenterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostUri = undefined;
      this._sslCaCertificate = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostUri = value.hostUri;
      this._sslCaCertificate = value.sslCaCertificate;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // host_uri - computed: false, optional: false, required: true
  private _hostUri?: string; 
  public get hostUri() {
    return this.getStringAttribute('host_uri');
  }
  public set hostUri(value: string) {
    this._hostUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUriInput() {
    return this._hostUri;
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfigServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface GoogleDeveloperConnectConnectionCryptoKeyConfig {
  /**
  * Required. The name of the key which is used to encrypt/decrypt customer data. For key
  * in Cloud KMS, the key should be in the format of
  * 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#key_reference GoogleDeveloperConnectConnection#key_reference}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly keyReference: string;
}

export function googleDeveloperConnectConnectionCryptoKeyConfigToTerraform(struct?: GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference | GoogleDeveloperConnectConnectionCryptoKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_reference: cdktf.stringToTerraform(struct!.keyReference),
  }
}


export function googleDeveloperConnectConnectionCryptoKeyConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference | GoogleDeveloperConnectConnectionCryptoKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_reference: {
      value: cdktf.stringToHclTerraform(struct!.keyReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionCryptoKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyReference = this._keyReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionCryptoKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyReference = value.keyReference;
    }
  }

  // key_reference - computed: false, optional: false, required: true
  private _keyReference?: string; 
  public get keyReference() {
    return this.getStringAttribute('key_reference');
  }
  public set keyReference(value: string) {
    this._keyReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyReferenceInput() {
    return this._keyReference;
  }
}
export interface GoogleDeveloperConnectConnectionGithubConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the OAuth token that authorizes
  * the connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#oauth_token_secret_version GoogleDeveloperConnectConnection#oauth_token_secret_version}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}
  */
  readonly appInstallationId?: string;
  /**
  * Required. Immutable. The GitHub Application that was installed to the GitHub user or
  * organization.
  * Possible values:
  * GIT_HUB_APP_UNSPECIFIED
  * DEVELOPER_CONNECT
  * FIREBASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#github_app GoogleDeveloperConnectConnection#github_app}
  */
  readonly githubApp: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}
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
export interface GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name.
  * Format:
  * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}
  */
  readonly service: string;
}

export function googleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToTerraform(struct?: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference | GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference | GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GoogleDeveloperConnectConnectionGithubEnterpriseConfig {
  /**
  * Optional. ID of the GitHub App created from the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#app_id GoogleDeveloperConnectConnection#app_id}
  */
  readonly appId?: string;
  /**
  * Optional. ID of the installation of the GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#app_installation_id GoogleDeveloperConnectConnection#app_installation_id}
  */
  readonly appInstallationId?: string;
  /**
  * Required. The URI of the GitHub Enterprise host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}
  */
  readonly hostUri: string;
  /**
  * Optional. SecretManager resource containing the private key of the GitHub App,
  * formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#private_key_secret_version GoogleDeveloperConnectConnection#private_key_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly privateKeySecretVersion?: string;
  /**
  * Optional. SSL certificate to use for requests to GitHub Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: string;
  /**
  * Optional. SecretManager resource containing the webhook secret of the GitHub App,
  * formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion?: string;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig;
}

export function googleDeveloperConnectConnectionGithubEnterpriseConfigToTerraform(struct?: GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference | GoogleDeveloperConnectConnectionGithubEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_installation_id: cdktf.stringToTerraform(struct!.appInstallationId),
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    private_key_secret_version: cdktf.stringToTerraform(struct!.privateKeySecretVersion),
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    service_directory_config: googleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function googleDeveloperConnectConnectionGithubEnterpriseConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference | GoogleDeveloperConnectConnectionGithubEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_installation_id: {
      value: cdktf.stringToHclTerraform(struct!.appInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_uri: {
      value: cdktf.stringToHclTerraform(struct!.hostUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.privateKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_config: {
      value: googleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGithubEnterpriseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInstallationId = this._appInstallationId;
    }
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._privateKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeySecretVersion = this._privateKeySecretVersion;
    }
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGithubEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appInstallationId = undefined;
      this._hostUri = undefined;
      this._privateKeySecretVersion = undefined;
      this._sslCaCertificate = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appInstallationId = value.appInstallationId;
      this._hostUri = value.hostUri;
      this._privateKeySecretVersion = value.privateKeySecretVersion;
      this._sslCaCertificate = value.sslCaCertificate;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_installation_id - computed: false, optional: true, required: false
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

  // app_slug - computed: true, optional: false, required: false
  public get appSlug() {
    return this.getStringAttribute('app_slug');
  }

  // host_uri - computed: false, optional: false, required: true
  private _hostUri?: string; 
  public get hostUri() {
    return this.getStringAttribute('host_uri');
  }
  public set hostUri(value: string) {
    this._hostUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUriInput() {
    return this._hostUri;
  }

  // installation_uri - computed: true, optional: false, required: false
  public get installationUri() {
    return this.getStringAttribute('installation_uri');
  }

  // private_key_secret_version - computed: false, optional: true, required: false
  private _privateKeySecretVersion?: string; 
  public get privateKeySecretVersion() {
    return this.getStringAttribute('private_key_secret_version');
  }
  public set privateKeySecretVersion(value: string) {
    this._privateKeySecretVersion = value;
  }
  public resetPrivateKeySecretVersion() {
    this._privateKeySecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeySecretVersionInput() {
    return this._privateKeySecretVersion;
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }

  // webhook_secret_secret_version - computed: false, optional: true, required: false
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  public resetWebhookSecretSecretVersion() {
    this._webhookSecretSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleDeveloperConnectConnectionGithubEnterpriseConfigServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionGitlabConfig {
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project,
  * formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
  * webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential;
}

export function googleDeveloperConnectConnectionGitlabConfigToTerraform(struct?: GoogleDeveloperConnectConnectionGitlabConfigOutputReference | GoogleDeveloperConnectConnectionGitlabConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: googleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: googleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
  }
}


export function googleDeveloperConnectConnectionGitlabConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionGitlabConfigOutputReference | GoogleDeveloperConnectConnectionGitlabConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: googleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: googleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGitlabConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGitlabConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGitlabConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
    }
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }
}
export interface GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes
  * the Developer Connect connection. Format:
  * 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#user_token_secret_version GoogleDeveloperConnectConnection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToHclTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userTokenSecretVersion = value.userTokenSecretVersion;
    }
  }

  // user_token_secret_version - computed: false, optional: false, required: true
  private _userTokenSecretVersion?: string; 
  public get userTokenSecretVersion() {
    return this.getStringAttribute('user_token_secret_version');
  }
  public set userTokenSecretVersion(value: string) {
    this._userTokenSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenSecretVersionInput() {
    return this._userTokenSecretVersion;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name.
  * Format:
  * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#service GoogleDeveloperConnectConnection#service}
  */
  readonly service: string;
}

export function googleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface GoogleDeveloperConnectConnectionGitlabEnterpriseConfig {
  /**
  * Required. The URI of the GitLab Enterprise host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#host_uri GoogleDeveloperConnectConnection#host_uri}
  */
  readonly hostUri: string;
  /**
  * Optional. SSL Certificate Authority certificate to use for requests to GitLab
  * Enterprise instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#ssl_ca_certificate GoogleDeveloperConnectConnection#ssl_ca_certificate}
  */
  readonly sslCaCertificate?: string;
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab project,
  * formatted as 'projects/* /secrets/* /versions/*'. This is used to validate
  * webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#webhook_secret_secret_version GoogleDeveloperConnectConnection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#authorizer_credential GoogleDeveloperConnectConnection#authorizer_credential}
  */
  readonly authorizerCredential: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#read_authorizer_credential GoogleDeveloperConnectConnection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#service_directory_config GoogleDeveloperConnectConnection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig;
}

export function googleDeveloperConnectConnectionGitlabEnterpriseConfigToTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    ssl_ca_certificate: cdktf.stringToTerraform(struct!.sslCaCertificate),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: googleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: googleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
    service_directory_config: googleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function googleDeveloperConnectConnectionGitlabEnterpriseConfigToHclTerraform(struct?: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference | GoogleDeveloperConnectConnectionGitlabEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_uri: {
      value: cdktf.stringToHclTerraform(struct!.hostUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_secret_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.webhookSecretSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizer_credential: {
      value: googleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: googleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialList",
    },
    service_directory_config: {
      value: googleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDeveloperConnectConnectionGitlabEnterpriseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._sslCaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCaCertificate = this._sslCaCertificate;
    }
    if (this._webhookSecretSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSecretSecretVersion = this._webhookSecretSecretVersion;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    if (this._readAuthorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAuthorizerCredential = this._readAuthorizerCredential?.internalValue;
    }
    if (this._serviceDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryConfig = this._serviceDirectoryConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostUri = undefined;
      this._sslCaCertificate = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostUri = value.hostUri;
      this._sslCaCertificate = value.sslCaCertificate;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // host_uri - computed: false, optional: false, required: true
  private _hostUri?: string; 
  public get hostUri() {
    return this.getStringAttribute('host_uri');
  }
  public set hostUri(value: string) {
    this._hostUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUriInput() {
    return this._hostUri;
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // ssl_ca_certificate - computed: false, optional: true, required: false
  private _sslCaCertificate?: string; 
  public get sslCaCertificate() {
    return this.getStringAttribute('ssl_ca_certificate');
  }
  public set sslCaCertificate(value: string) {
    this._sslCaCertificate = value;
  }
  public resetSslCaCertificate() {
    this._sslCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaCertificateInput() {
    return this._sslCaCertificate;
  }

  // webhook_secret_secret_version - computed: false, optional: false, required: true
  private _webhookSecretSecretVersion?: string; 
  public get webhookSecretSecretVersion() {
    return this.getStringAttribute('webhook_secret_secret_version');
  }
  public set webhookSecretSecretVersion(value: string) {
    this._webhookSecretSecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretSecretVersionInput() {
    return this._webhookSecretSecretVersion;
  }

  // authorizer_credential - computed: false, optional: false, required: true
  private _authorizerCredential = new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfigServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }
}
export interface GoogleDeveloperConnectConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#create GoogleDeveloperConnectConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#delete GoogleDeveloperConnectConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#update GoogleDeveloperConnectConnection#update}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection google_developer_connect_connection}
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
  * @param importFromId The id of the existing GoogleDeveloperConnectConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDeveloperConnectConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_developer_connect_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_developer_connect_connection google_developer_connect_connection} Resource
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
        providerVersion: '6.22.0',
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
    this._bitbucketCloudConfig.internalValue = config.bitbucketCloudConfig;
    this._bitbucketDataCenterConfig.internalValue = config.bitbucketDataCenterConfig;
    this._cryptoKeyConfig.internalValue = config.cryptoKeyConfig;
    this._githubConfig.internalValue = config.githubConfig;
    this._githubEnterpriseConfig.internalValue = config.githubEnterpriseConfig;
    this._gitlabConfig.internalValue = config.gitlabConfig;
    this._gitlabEnterpriseConfig.internalValue = config.gitlabEnterpriseConfig;
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

  // bitbucket_cloud_config - computed: false, optional: true, required: false
  private _bitbucketCloudConfig = new GoogleDeveloperConnectConnectionBitbucketCloudConfigOutputReference(this, "bitbucket_cloud_config");
  public get bitbucketCloudConfig() {
    return this._bitbucketCloudConfig;
  }
  public putBitbucketCloudConfig(value: GoogleDeveloperConnectConnectionBitbucketCloudConfig) {
    this._bitbucketCloudConfig.internalValue = value;
  }
  public resetBitbucketCloudConfig() {
    this._bitbucketCloudConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketCloudConfigInput() {
    return this._bitbucketCloudConfig.internalValue;
  }

  // bitbucket_data_center_config - computed: false, optional: true, required: false
  private _bitbucketDataCenterConfig = new GoogleDeveloperConnectConnectionBitbucketDataCenterConfigOutputReference(this, "bitbucket_data_center_config");
  public get bitbucketDataCenterConfig() {
    return this._bitbucketDataCenterConfig;
  }
  public putBitbucketDataCenterConfig(value: GoogleDeveloperConnectConnectionBitbucketDataCenterConfig) {
    this._bitbucketDataCenterConfig.internalValue = value;
  }
  public resetBitbucketDataCenterConfig() {
    this._bitbucketDataCenterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketDataCenterConfigInput() {
    return this._bitbucketDataCenterConfig.internalValue;
  }

  // crypto_key_config - computed: false, optional: true, required: false
  private _cryptoKeyConfig = new GoogleDeveloperConnectConnectionCryptoKeyConfigOutputReference(this, "crypto_key_config");
  public get cryptoKeyConfig() {
    return this._cryptoKeyConfig;
  }
  public putCryptoKeyConfig(value: GoogleDeveloperConnectConnectionCryptoKeyConfig) {
    this._cryptoKeyConfig.internalValue = value;
  }
  public resetCryptoKeyConfig() {
    this._cryptoKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyConfigInput() {
    return this._cryptoKeyConfig.internalValue;
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

  // github_enterprise_config - computed: false, optional: true, required: false
  private _githubEnterpriseConfig = new GoogleDeveloperConnectConnectionGithubEnterpriseConfigOutputReference(this, "github_enterprise_config");
  public get githubEnterpriseConfig() {
    return this._githubEnterpriseConfig;
  }
  public putGithubEnterpriseConfig(value: GoogleDeveloperConnectConnectionGithubEnterpriseConfig) {
    this._githubEnterpriseConfig.internalValue = value;
  }
  public resetGithubEnterpriseConfig() {
    this._githubEnterpriseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseConfigInput() {
    return this._githubEnterpriseConfig.internalValue;
  }

  // gitlab_config - computed: false, optional: true, required: false
  private _gitlabConfig = new GoogleDeveloperConnectConnectionGitlabConfigOutputReference(this, "gitlab_config");
  public get gitlabConfig() {
    return this._gitlabConfig;
  }
  public putGitlabConfig(value: GoogleDeveloperConnectConnectionGitlabConfig) {
    this._gitlabConfig.internalValue = value;
  }
  public resetGitlabConfig() {
    this._gitlabConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabConfigInput() {
    return this._gitlabConfig.internalValue;
  }

  // gitlab_enterprise_config - computed: false, optional: true, required: false
  private _gitlabEnterpriseConfig = new GoogleDeveloperConnectConnectionGitlabEnterpriseConfigOutputReference(this, "gitlab_enterprise_config");
  public get gitlabEnterpriseConfig() {
    return this._gitlabEnterpriseConfig;
  }
  public putGitlabEnterpriseConfig(value: GoogleDeveloperConnectConnectionGitlabEnterpriseConfig) {
    this._gitlabEnterpriseConfig.internalValue = value;
  }
  public resetGitlabEnterpriseConfig() {
    this._gitlabEnterpriseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabEnterpriseConfigInput() {
    return this._gitlabEnterpriseConfig.internalValue;
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
      bitbucket_cloud_config: googleDeveloperConnectConnectionBitbucketCloudConfigToTerraform(this._bitbucketCloudConfig.internalValue),
      bitbucket_data_center_config: googleDeveloperConnectConnectionBitbucketDataCenterConfigToTerraform(this._bitbucketDataCenterConfig.internalValue),
      crypto_key_config: googleDeveloperConnectConnectionCryptoKeyConfigToTerraform(this._cryptoKeyConfig.internalValue),
      github_config: googleDeveloperConnectConnectionGithubConfigToTerraform(this._githubConfig.internalValue),
      github_enterprise_config: googleDeveloperConnectConnectionGithubEnterpriseConfigToTerraform(this._githubEnterpriseConfig.internalValue),
      gitlab_config: googleDeveloperConnectConnectionGitlabConfigToTerraform(this._gitlabConfig.internalValue),
      gitlab_enterprise_config: googleDeveloperConnectConnectionGitlabEnterpriseConfigToTerraform(this._gitlabEnterpriseConfig.internalValue),
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
      bitbucket_cloud_config: {
        value: googleDeveloperConnectConnectionBitbucketCloudConfigToHclTerraform(this._bitbucketCloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionBitbucketCloudConfigList",
      },
      bitbucket_data_center_config: {
        value: googleDeveloperConnectConnectionBitbucketDataCenterConfigToHclTerraform(this._bitbucketDataCenterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionBitbucketDataCenterConfigList",
      },
      crypto_key_config: {
        value: googleDeveloperConnectConnectionCryptoKeyConfigToHclTerraform(this._cryptoKeyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionCryptoKeyConfigList",
      },
      github_config: {
        value: googleDeveloperConnectConnectionGithubConfigToHclTerraform(this._githubConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionGithubConfigList",
      },
      github_enterprise_config: {
        value: googleDeveloperConnectConnectionGithubEnterpriseConfigToHclTerraform(this._githubEnterpriseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionGithubEnterpriseConfigList",
      },
      gitlab_config: {
        value: googleDeveloperConnectConnectionGitlabConfigToHclTerraform(this._gitlabConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionGitlabConfigList",
      },
      gitlab_enterprise_config: {
        value: googleDeveloperConnectConnectionGitlabEnterpriseConfigToHclTerraform(this._gitlabEnterpriseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDeveloperConnectConnectionGitlabEnterpriseConfigList",
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
