/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudbuildv2ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allows clients to store small amounts of arbitrary data.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#annotations GoogleCloudbuildv2Connection#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#disabled GoogleCloudbuildv2Connection#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#id GoogleCloudbuildv2Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#location GoogleCloudbuildv2Connection#location}
  */
  readonly location: string;
  /**
  * Immutable. The resource name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#name GoogleCloudbuildv2Connection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#project GoogleCloudbuildv2Connection#project}
  */
  readonly project?: string;
  /**
  * bitbucket_cloud_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#bitbucket_cloud_config GoogleCloudbuildv2Connection#bitbucket_cloud_config}
  */
  readonly bitbucketCloudConfig?: GoogleCloudbuildv2ConnectionBitbucketCloudConfig;
  /**
  * bitbucket_data_center_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#bitbucket_data_center_config GoogleCloudbuildv2Connection#bitbucket_data_center_config}
  */
  readonly bitbucketDataCenterConfig?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig;
  /**
  * github_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#github_config GoogleCloudbuildv2Connection#github_config}
  */
  readonly githubConfig?: GoogleCloudbuildv2ConnectionGithubConfig;
  /**
  * github_enterprise_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#github_enterprise_config GoogleCloudbuildv2Connection#github_enterprise_config}
  */
  readonly githubEnterpriseConfig?: GoogleCloudbuildv2ConnectionGithubEnterpriseConfig;
  /**
  * gitlab_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#gitlab_config GoogleCloudbuildv2Connection#gitlab_config}
  */
  readonly gitlabConfig?: GoogleCloudbuildv2ConnectionGitlabConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#timeouts GoogleCloudbuildv2Connection#timeouts}
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


export function googleCloudbuildv2ConnectionInstallationStateToHclTerraform(struct?: GoogleCloudbuildv2ConnectionInstallationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
export interface GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialToTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialToHclTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential): any {
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

export class GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential | undefined) {
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
export interface GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialToTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialToHclTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential): any {
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

export class GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential | undefined) {
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
export interface GoogleCloudbuildv2ConnectionBitbucketCloudConfig {
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#workspace GoogleCloudbuildv2Connection#workspace}
  */
  readonly workspace: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}
  */
  readonly authorizerCredential: GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#read_authorizer_credential GoogleCloudbuildv2Connection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential;
}

export function googleCloudbuildv2ConnectionBitbucketCloudConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference | GoogleCloudbuildv2ConnectionBitbucketCloudConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    workspace: cdktf.stringToTerraform(struct!.workspace),
    authorizer_credential: googleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: googleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
  }
}


export function googleCloudbuildv2ConnectionBitbucketCloudConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference | GoogleCloudbuildv2ConnectionBitbucketCloudConfig): any {
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
      value: googleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: googleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionBitbucketCloudConfig | undefined {
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

  public set internalValue(value: GoogleCloudbuildv2ConnectionBitbucketCloudConfig | undefined) {
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
  private _authorizerCredential = new GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleCloudbuildv2ConnectionBitbucketCloudConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: GoogleCloudbuildv2ConnectionBitbucketCloudConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }
}
export interface GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialToTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialToHclTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential): any {
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

export class GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential | undefined) {
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
export interface GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToHclTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential): any {
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

export class GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential | undefined) {
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
export interface GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#service GoogleCloudbuildv2Connection#service}
  */
  readonly service: string;
}

export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig): any {
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

export class GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig | undefined) {
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
export interface GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig {
  /**
  * The URI of the Bitbucket Data Center host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#host_uri GoogleCloudbuildv2Connection#host_uri}
  */
  readonly hostUri: string;
  /**
  * SSL certificate to use for requests to the Bitbucket Data Center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#ssl_ca GoogleCloudbuildv2Connection#ssl_ca}
  */
  readonly sslCa?: string;
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}
  */
  readonly authorizerCredential: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#read_authorizer_credential GoogleCloudbuildv2Connection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#service_directory_config GoogleCloudbuildv2Connection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig;
}

export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    ssl_ca: cdktf.stringToTerraform(struct!.sslCa),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: googleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: googleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
    service_directory_config: googleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function googleCloudbuildv2ConnectionBitbucketDataCenterConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference | GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig): any {
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
    ssl_ca: {
      value: cdktf.stringToHclTerraform(struct!.sslCa),
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
      value: googleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: googleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialList",
    },
    service_directory_config: {
      value: googleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._sslCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCa = this._sslCa;
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

  public set internalValue(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostUri = undefined;
      this._sslCa = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostUri = value.hostUri;
      this._sslCa = value.sslCa;
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
  private _authorizerCredential = new GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigServiceDirectoryConfig) {
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
export interface GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential {
  /**
  * A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#oauth_token_secret_version GoogleCloudbuildv2Connection#oauth_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
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


export function googleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredential): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#app_installation_id GoogleCloudbuildv2Connection#app_installation_id}
  */
  readonly appInstallationId?: number;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}
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


export function googleCloudbuildv2ConnectionGithubConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGithubConfigOutputReference | GoogleCloudbuildv2ConnectionGithubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_installation_id: {
      value: cdktf.numberToHclTerraform(struct!.appInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorizer_credential: {
      value: googleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionGithubConfigAuthorizerCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#service GoogleCloudbuildv2Connection#service}
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


export function googleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigOutputReference | GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfig): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#app_id GoogleCloudbuildv2Connection#app_id}
  */
  readonly appId?: number;
  /**
  * ID of the installation of the GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#app_installation_id GoogleCloudbuildv2Connection#app_installation_id}
  */
  readonly appInstallationId?: number;
  /**
  * The URL-friendly name of the GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#app_slug GoogleCloudbuildv2Connection#app_slug}
  */
  readonly appSlug?: string;
  /**
  * Required. The URI of the GitHub Enterprise host this connection is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#host_uri GoogleCloudbuildv2Connection#host_uri}
  */
  readonly hostUri: string;
  /**
  * SecretManager resource containing the private key of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#private_key_secret_version GoogleCloudbuildv2Connection#private_key_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly privateKeySecretVersion?: string;
  /**
  * SSL certificate to use for requests to GitHub Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#ssl_ca GoogleCloudbuildv2Connection#ssl_ca}
  */
  readonly sslCa?: string;
  /**
  * SecretManager resource containing the webhook secret of the GitHub App, formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion?: string;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#service_directory_config GoogleCloudbuildv2Connection#service_directory_config}
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


export function googleCloudbuildv2ConnectionGithubEnterpriseConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGithubEnterpriseConfigOutputReference | GoogleCloudbuildv2ConnectionGithubEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.numberToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_installation_id: {
      value: cdktf.numberToHclTerraform(struct!.appInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_slug: {
      value: cdktf.stringToHclTerraform(struct!.appSlug),
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
    ssl_ca: {
      value: cdktf.stringToHclTerraform(struct!.sslCa),
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
      value: googleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionGithubEnterpriseConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialToTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential): any {
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

export class GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential | undefined) {
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
export interface GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential {
  /**
  * Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#user_token_secret_version GoogleCloudbuildv2Connection#user_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userTokenSecretVersion: string;
}

export function googleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialToTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_token_secret_version: cdktf.stringToTerraform(struct!.userTokenSecretVersion),
  }
}


export function googleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference | GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential): any {
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

export class GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTokenSecretVersion = this._userTokenSecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential | undefined) {
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
export interface GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig {
  /**
  * Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#service GoogleCloudbuildv2Connection#service}
  */
  readonly service: string;
}

export function googleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference | GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference | GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig): any {
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

export class GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig | undefined) {
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
export interface GoogleCloudbuildv2ConnectionGitlabConfig {
  /**
  * The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#host_uri GoogleCloudbuildv2Connection#host_uri}
  */
  readonly hostUri?: string;
  /**
  * SSL certificate to use for requests to GitLab Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#ssl_ca GoogleCloudbuildv2Connection#ssl_ca}
  */
  readonly sslCa?: string;
  /**
  * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#webhook_secret_secret_version GoogleCloudbuildv2Connection#webhook_secret_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly webhookSecretSecretVersion: string;
  /**
  * authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#authorizer_credential GoogleCloudbuildv2Connection#authorizer_credential}
  */
  readonly authorizerCredential: GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential;
  /**
  * read_authorizer_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#read_authorizer_credential GoogleCloudbuildv2Connection#read_authorizer_credential}
  */
  readonly readAuthorizerCredential: GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#service_directory_config GoogleCloudbuildv2Connection#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig;
}

export function googleCloudbuildv2ConnectionGitlabConfigToTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigOutputReference | GoogleCloudbuildv2ConnectionGitlabConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_uri: cdktf.stringToTerraform(struct!.hostUri),
    ssl_ca: cdktf.stringToTerraform(struct!.sslCa),
    webhook_secret_secret_version: cdktf.stringToTerraform(struct!.webhookSecretSecretVersion),
    authorizer_credential: googleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialToTerraform(struct!.authorizerCredential),
    read_authorizer_credential: googleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialToTerraform(struct!.readAuthorizerCredential),
    service_directory_config: googleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigToTerraform(struct!.serviceDirectoryConfig),
  }
}


export function googleCloudbuildv2ConnectionGitlabConfigToHclTerraform(struct?: GoogleCloudbuildv2ConnectionGitlabConfigOutputReference | GoogleCloudbuildv2ConnectionGitlabConfig): any {
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
    ssl_ca: {
      value: cdktf.stringToHclTerraform(struct!.sslCa),
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
      value: googleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialToHclTerraform(struct!.authorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialList",
    },
    read_authorizer_credential: {
      value: googleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialToHclTerraform(struct!.readAuthorizerCredential),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialList",
    },
    service_directory_config: {
      value: googleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigToHclTerraform(struct!.serviceDirectoryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildv2ConnectionGitlabConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildv2ConnectionGitlabConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUri = this._hostUri;
    }
    if (this._sslCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCa = this._sslCa;
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

  public set internalValue(value: GoogleCloudbuildv2ConnectionGitlabConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostUri = undefined;
      this._sslCa = undefined;
      this._webhookSecretSecretVersion = undefined;
      this._authorizerCredential.internalValue = undefined;
      this._readAuthorizerCredential.internalValue = undefined;
      this._serviceDirectoryConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostUri = value.hostUri;
      this._sslCa = value.sslCa;
      this._webhookSecretSecretVersion = value.webhookSecretSecretVersion;
      this._authorizerCredential.internalValue = value.authorizerCredential;
      this._readAuthorizerCredential.internalValue = value.readAuthorizerCredential;
      this._serviceDirectoryConfig.internalValue = value.serviceDirectoryConfig;
    }
  }

  // host_uri - computed: true, optional: true, required: false
  private _hostUri?: string; 
  public get hostUri() {
    return this.getStringAttribute('host_uri');
  }
  public set hostUri(value: string) {
    this._hostUri = value;
  }
  public resetHostUri() {
    this._hostUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUriInput() {
    return this._hostUri;
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
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
  private _authorizerCredential = new GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredentialOutputReference(this, "authorizer_credential");
  public get authorizerCredential() {
    return this._authorizerCredential;
  }
  public putAuthorizerCredential(value: GoogleCloudbuildv2ConnectionGitlabConfigAuthorizerCredential) {
    this._authorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerCredentialInput() {
    return this._authorizerCredential.internalValue;
  }

  // read_authorizer_credential - computed: false, optional: false, required: true
  private _readAuthorizerCredential = new GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredentialOutputReference(this, "read_authorizer_credential");
  public get readAuthorizerCredential() {
    return this._readAuthorizerCredential;
  }
  public putReadAuthorizerCredential(value: GoogleCloudbuildv2ConnectionGitlabConfigReadAuthorizerCredential) {
    this._readAuthorizerCredential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readAuthorizerCredentialInput() {
    return this._readAuthorizerCredential.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleCloudbuildv2ConnectionGitlabConfigServiceDirectoryConfig) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#create GoogleCloudbuildv2Connection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#delete GoogleCloudbuildv2Connection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#update GoogleCloudbuildv2Connection#update}
  */
  readonly update?: string;
}

export function googleCloudbuildv2ConnectionTimeoutsToTerraform(struct?: GoogleCloudbuildv2ConnectionTimeouts | cdktf.IResolvable): any {
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


export function googleCloudbuildv2ConnectionTimeoutsToHclTerraform(struct?: GoogleCloudbuildv2ConnectionTimeouts | cdktf.IResolvable): any {
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

export class GoogleCloudbuildv2ConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection google_cloudbuildv2_connection}
*/
export class GoogleCloudbuildv2Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudbuildv2_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCloudbuildv2Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudbuildv2Connection to import
  * @param importFromId The id of the existing GoogleCloudbuildv2Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudbuildv2Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloudbuildv2_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudbuildv2_connection google_cloudbuildv2_connection} Resource
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
        providerVersion: '6.14.1',
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._bitbucketCloudConfig.internalValue = config.bitbucketCloudConfig;
    this._bitbucketDataCenterConfig.internalValue = config.bitbucketDataCenterConfig;
    this._githubConfig.internalValue = config.githubConfig;
    this._githubEnterpriseConfig.internalValue = config.githubEnterpriseConfig;
    this._gitlabConfig.internalValue = config.gitlabConfig;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
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

  // bitbucket_cloud_config - computed: false, optional: true, required: false
  private _bitbucketCloudConfig = new GoogleCloudbuildv2ConnectionBitbucketCloudConfigOutputReference(this, "bitbucket_cloud_config");
  public get bitbucketCloudConfig() {
    return this._bitbucketCloudConfig;
  }
  public putBitbucketCloudConfig(value: GoogleCloudbuildv2ConnectionBitbucketCloudConfig) {
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
  private _bitbucketDataCenterConfig = new GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigOutputReference(this, "bitbucket_data_center_config");
  public get bitbucketDataCenterConfig() {
    return this._bitbucketDataCenterConfig;
  }
  public putBitbucketDataCenterConfig(value: GoogleCloudbuildv2ConnectionBitbucketDataCenterConfig) {
    this._bitbucketDataCenterConfig.internalValue = value;
  }
  public resetBitbucketDataCenterConfig() {
    this._bitbucketDataCenterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketDataCenterConfigInput() {
    return this._bitbucketDataCenterConfig.internalValue;
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

  // gitlab_config - computed: false, optional: true, required: false
  private _gitlabConfig = new GoogleCloudbuildv2ConnectionGitlabConfigOutputReference(this, "gitlab_config");
  public get gitlabConfig() {
    return this._gitlabConfig;
  }
  public putGitlabConfig(value: GoogleCloudbuildv2ConnectionGitlabConfig) {
    this._gitlabConfig.internalValue = value;
  }
  public resetGitlabConfig() {
    this._gitlabConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabConfigInput() {
    return this._gitlabConfig.internalValue;
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
      bitbucket_cloud_config: googleCloudbuildv2ConnectionBitbucketCloudConfigToTerraform(this._bitbucketCloudConfig.internalValue),
      bitbucket_data_center_config: googleCloudbuildv2ConnectionBitbucketDataCenterConfigToTerraform(this._bitbucketDataCenterConfig.internalValue),
      github_config: googleCloudbuildv2ConnectionGithubConfigToTerraform(this._githubConfig.internalValue),
      github_enterprise_config: googleCloudbuildv2ConnectionGithubEnterpriseConfigToTerraform(this._githubEnterpriseConfig.internalValue),
      gitlab_config: googleCloudbuildv2ConnectionGitlabConfigToTerraform(this._gitlabConfig.internalValue),
      timeouts: googleCloudbuildv2ConnectionTimeoutsToTerraform(this._timeouts.internalValue),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      bitbucket_cloud_config: {
        value: googleCloudbuildv2ConnectionBitbucketCloudConfigToHclTerraform(this._bitbucketCloudConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildv2ConnectionBitbucketCloudConfigList",
      },
      bitbucket_data_center_config: {
        value: googleCloudbuildv2ConnectionBitbucketDataCenterConfigToHclTerraform(this._bitbucketDataCenterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildv2ConnectionBitbucketDataCenterConfigList",
      },
      github_config: {
        value: googleCloudbuildv2ConnectionGithubConfigToHclTerraform(this._githubConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildv2ConnectionGithubConfigList",
      },
      github_enterprise_config: {
        value: googleCloudbuildv2ConnectionGithubEnterpriseConfigToHclTerraform(this._githubEnterpriseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildv2ConnectionGithubEnterpriseConfigList",
      },
      gitlab_config: {
        value: googleCloudbuildv2ConnectionGitlabConfigToHclTerraform(this._gitlabConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildv2ConnectionGitlabConfigList",
      },
      timeouts: {
        value: googleCloudbuildv2ConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudbuildv2ConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
