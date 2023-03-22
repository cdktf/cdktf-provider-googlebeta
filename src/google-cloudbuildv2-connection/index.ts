// https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudbuildv2ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allows clients to store small amounts of arbitrary data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#annotations GoogleCloudbuildv2Connection#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#disabled GoogleCloudbuildv2Connection#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#id GoogleCloudbuildv2Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#location GoogleCloudbuildv2Connection#location}
  */
  readonly location: string;
  /**
  * Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#name GoogleCloudbuildv2Connection#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#project GoogleCloudbuildv2Connection#project}
  */
  readonly project?: string;
  /**
  * github_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#github_config GoogleCloudbuildv2Connection#github_config}
  */
  readonly githubConfig?: GoogleCloudbuildv2ConnectionGithubConfig;
  /**
  * github_enterprise_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#github_enterprise_config GoogleCloudbuildv2Connection#github_enterprise_config}
  */
  readonly githubEnterpriseConfig?: GoogleCloudbuildv2ConnectionGithubEnterpriseConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#timeouts GoogleCloudbuildv2Connection#timeouts}
  */
  readonly timeouts?: GoogleCloudbuildv2ConnectionTimeouts;
}
export interface GoogleCloudbuildv2ConnectionInstallationState {
}

export function googleCloudbuildv2ConnectionInstallationStateToTerraform(struct?: GoogleCloudbuildv2ConnectionInstallationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleCloudbuildv2ConnectionInstallationStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildv2ConnectionInstallationState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionInstallationState | undefined) {
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

export class GoogleCloudbuildv2ConnectionInstallationStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCloudbuildv2ConnectionInstallationStateOutputReference {
    return new GoogleCloudbuildv2ConnectionInstallationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential {
  /**
  * A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/*\/secrets/*\/versions/*`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#oauth_token_secret_version GoogleCloudbuildv2Connection#oauth_token_secret_version}
  */
  readonly oauthTokenSecretVersion?: string;
}

export function googleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialToTerraform(struct?: GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_token_secret_version: cdktf.stringToTerraform(struct!.oauthTokenSecretVersion),
  }
}

export class GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenSecretVersion = this._oauthTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthTokenSecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthTokenSecretVersion = value.oauthTokenSecretVersion;
    }
  }

  // oauth_token_secret_version - computed: false, optional: true, required: false
  private _oauthTokenSecretVersion?: string; 
  public get oauthTokenSecretVersion() {
    return this.getStringAttribute('oauth_token_secret_version');
  }
  public set oauthTokenSecretVersion(value: string) {
    this._oauthTokenSecretVersion = value;
  }
  public resetOauthTokenSecretVersion() {
    this._oauthTokenSecretVersion = undefined;
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
export interface GoogleCloudbuildv2ConnectionGithubConfig {
  /**
  * GitHub App installation id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#app_installation_id GoogleCloudbuildv2Connection#app_installation_id}
  */
  readonly appInstallationId?: number;
  /**
  * authorizer_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}
  */
  readonly authorizerCredential?: GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential;
}

export function googleCloudbuildv2ConnectionGithubConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionGithubConfigOutputReference | GoogleCloudbuildv2ConnectionGithubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_installation_id: cdktf.numberToTerraform(struct!.appInstallationId),
    authorizer_credential: googleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
  }
}

export class GoogleCloudbuildv2ConnectionGithubConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGithubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInstallationId = this._appInstallationId;
    }
    if (this._authorizerCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerCredential = this._authorizerCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionGithubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appInstallationId = undefined;
      this._authorizerCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appInstallationId = value.appInstallationId;
      this._authorizerCredential.internalValue = value.authorizerCredential;
    }
  }

  // app_installation_id - computed: false, optional: true, required: false
  private _appInstallationId?: number; 
  public get appInstallationId() {
    return this.getNumberAttribute('app_installation_id');
  }
  public set appInstallationId(value: number) {
    this._appInstallationId = value;
  }
  public resetAppInstallationId() {
    this._appInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstallationIdInput() {
    return this._appInstallationId;
  }

  // authorizer_credential - computed: false, optional: true, required: false
  private _authorizerCredential = new GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential) {
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
export interface GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#service GoogleCloudbuildv2Connection#service}
  */
  readonly service: string;
}

export function googleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference | GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig | undefined) {
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
export interface GoogleCloudbuildv2ConnectionGithubEnterpriseConfig {
  /**
  * Id of the GitHub App created from the manifest.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#app_id GoogleCloudbuildv2Connection#app_id}
  */
  readonly appId?: number;
  /**
  * ID of the installation of the GitHub App.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#app_installation_id GoogleCloudbuildv2Connection#app_installation_id}
  */
  readonly appInstallationId?: number;
  /**
  * The URL-friendly name of the GitHub App.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#app_slug GoogleCloudbuildv2Connection#app_slug}
  */
  readonly appSlug?: string;
  /**
  * Required. The URI of the GitHub Enterprise host this connection is for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#host_uri GoogleCloudbuildv2Connection#host_uri}
  */
  readonly hostUri: string;
  /**
  * SecretManager resource containing the private key of the GitHub App, formatted as `projects/*\/secrets/*\/versions/*`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#private_key_secret_version GoogleCloudbuildv2Connection#private_key_secret_version}
  */
  readonly privateKeySecretVersion?: string;
  /**
  * SSL certificate to use for requests to GitHub Enterprise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#ssl_ca GoogleCloudbuildv2Connection#ssl_ca}
  */
  readonly sslCa?: string;
  /**
  * SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/*\/secrets/*\/versions/*`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}
  */
  readonly webhookSecretSecretVersion?: string;
  /**
  * service_directory_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#service_directory_config GoogleCloudbuildv2Connection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig;
}

export function googleCloudbuildv2ConnectionGithubEnterpriseConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference | GoogleCloudbuildv2ConnectionGithubEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.numberToTerraform(struct!.appId),
    app_installation_id: cdktf.numberToTerraform(struct!.appInstallationId),
    app_slug: cdktf.stringToTerraform(struct!.appSlug),
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    private_key_secret_version: cdktf.stringToTerraform(struct!.privateKeySecretVersion),
    ssl_ca: cdktf.stringToTerraform(struct!.sslCa),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    service_directory_config: googleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}

export class GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGithubEnterpriseConfig | undefined {
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
    if (this._appSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSlug = this._appSlug;
    }
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._privateKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeySecretVersion = this._privateKeySecretVersion;
    }
    if (this._sslCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCa = this._sslCa;
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

  public set internalValue(value: GoogleCloudbuildv2ConnectionGithubEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._appInstallationId = undefined;
      this._appSlug = undefined;
      this._hostUri = undefined;
      this._privateKeySecretVersion = undefined;
      this._sslCa = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._appInstallationId = value.appInstallationId;
      this._appSlug = value.appSlug;
      this._hostUri = value.hostUri;
      this._privateKeySecretVersion = value.privateKeySecretVersion;
      this._sslCa = value.sslCa;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: number; 
  public get appId() {
    return this.getNumberAttribute('app_id');
  }
  public set appId(value: number) {
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
  private _appInstallationId?: number; 
  public get appInstallationId() {
    return this.getNumberAttribute('app_installation_id');
  }
  public set appInstallationId(value: number) {
    this._appInstallationId = value;
  }
  public resetAppInstallationId() {
    this._appInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstallationIdInput() {
    return this._appInstallationId;
  }

  // app_slug - computed: false, optional: true, required: false
  private _appSlug?: string; 
  public get appSlug() {
    return this.getStringAttribute('app_slug');
  }
  public set appSlug(value: string) {
    this._appSlug = value;
  }
  public resetAppSlug() {
    this._appSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSlugInput() {
    return this._appSlug;
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

  // ssl_ca - computed: false, optional: true, required: false
  private _sslCa?: string; 
  public get sslCa() {
    return this.getStringAttribute('ssl_ca');
  }
  public set sslCa(value: string) {
    this._sslCa = value;
  }
  public resetSslCa() {
    this._sslCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCaInput() {
    return this._sslCa;
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
  private _serviceDirectoryConfig = new GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig) {
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
export interface GoogleCloudbuildv2ConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#create GoogleCloudbuildv2Connection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#delete GoogleCloudbuildv2Connection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection#update GoogleCloudbuildv2Connection#update}
  */
  readonly update?: string;
}

export function googleCloudbuildv2ConnectionTimeoutsToTerraform(struct?: GoogleCloudbuildv2ConnectionTimeoutsOutputReference | GoogleCloudbuildv2ConnectionTimeouts | cdktf.IResolvable): any {
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

export class GoogleCloudbuildv2ConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudbuildv2ConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection google_cloudbuildv2_connection}
*/
export class GoogleCloudbuildv2Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudbuildv2_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudbuildv2_connection google_cloudbuildv2_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudbuildv2ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudbuildv2ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudbuildv2_connection',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.58.0',
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
    this._annotations = config.annotations;
    this._disabled = config.disabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._githubConfig.internalValue = config.githubConfig;
    this._githubEnterpriseConfig.internalValue = config.githubEnterpriseConfig;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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
  private _installationState = new GoogleCloudbuildv2ConnectionInstallationStateList(this, "installation_state", false);
  public get installationState() {
    return this._installationState;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // github_config - computed: false, optional: true, required: false
  private _githubConfig = new GoogleCloudbuildv2ConnectionGithubConfigOutputReference(this, "github_config");
  public get githubConfig() {
    return this._githubConfig;
  }
  public putGithubConfig(value: GoogleCloudbuildv2ConnectionGithubConfig) {
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
  private _githubEnterpriseConfig = new GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference(this, "github_enterprise_config");
  public get githubEnterpriseConfig() {
    return this._githubEnterpriseConfig;
  }
  public putGithubEnterpriseConfig(value: GoogleCloudbuildv2ConnectionGithubEnterpriseConfig) {
    this._githubEnterpriseConfig.internalValue = value;
  }
  public resetGithubEnterpriseConfig() {
    this._githubEnterpriseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseConfigInput() {
    return this._githubEnterpriseConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudbuildv2ConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudbuildv2ConnectionTimeouts) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      github_config: googleCloudbuildv2ConnectionGithubConfigToTerraform(this._githubConfig.internalValue),
      github_enterprise_config: googleCloudbuildv2ConnectionGithubEnterpriseConfigToTerraform(this._githubEnterpriseConfig.internalValue),
      timeouts: googleCloudbuildv2ConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
