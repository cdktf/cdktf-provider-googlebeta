// https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataformRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. The repository's user-friendly name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#display_name GoogleDataformRepository#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#id GoogleDataformRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. The reference to a KMS encryption key. If provided, it will be used to encrypt user data in the repository and all child resources.
  * It is not possible to add or update the encryption key after the repository is created. Example projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#kms_key_name GoogleDataformRepository#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Optional. Repository user labels.
  * An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#labels GoogleDataformRepository#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The repository's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#name GoogleDataformRepository#name}
  */
  readonly name: string;
  /**
  * Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format projects/* /secrets/* /versions/*. The file itself must be in a JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#npmrc_environment_variables_secret_version GoogleDataformRepository#npmrc_environment_variables_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly npmrcEnvironmentVariablesSecretVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#project GoogleDataformRepository#project}
  */
  readonly project?: string;
  /**
  * A reference to the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#region GoogleDataformRepository#region}
  */
  readonly region?: string;
  /**
  * The service account to run workflow invocations under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#service_account GoogleDataformRepository#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * git_remote_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#git_remote_settings GoogleDataformRepository#git_remote_settings}
  */
  readonly gitRemoteSettings?: GoogleDataformRepositoryGitRemoteSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#timeouts GoogleDataformRepository#timeouts}
  */
  readonly timeouts?: GoogleDataformRepositoryTimeouts;
  /**
  * workspace_compilation_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#workspace_compilation_overrides GoogleDataformRepository#workspace_compilation_overrides}
  */
  readonly workspaceCompilationOverrides?: GoogleDataformRepositoryWorkspaceCompilationOverrides;
}
export interface GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig {
  /**
  * Content of a public SSH key to verify an identity of a remote Git host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#host_public_key GoogleDataformRepository#host_public_key}
  */
  readonly hostPublicKey: string;
  /**
  * The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#user_private_key_secret_version GoogleDataformRepository#user_private_key_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly userPrivateKeySecretVersion: string;
}

export function googleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigToTerraform(struct?: GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference | GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_public_key: cdktf.stringToTerraform(struct!.hostPublicKey),
    user_private_key_secret_version: cdktf.stringToTerraform(struct!.userPrivateKeySecretVersion),
  }
}


export function googleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigToHclTerraform(struct?: GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference | GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_public_key: {
      value: cdktf.stringToHclTerraform(struct!.hostPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_private_key_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.userPrivateKeySecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPublicKey = this._hostPublicKey;
    }
    if (this._userPrivateKeySecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPrivateKeySecretVersion = this._userPrivateKeySecretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostPublicKey = undefined;
      this._userPrivateKeySecretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostPublicKey = value.hostPublicKey;
      this._userPrivateKeySecretVersion = value.userPrivateKeySecretVersion;
    }
  }

  // host_public_key - computed: false, optional: false, required: true
  private _hostPublicKey?: string; 
  public get hostPublicKey() {
    return this.getStringAttribute('host_public_key');
  }
  public set hostPublicKey(value: string) {
    this._hostPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPublicKeyInput() {
    return this._hostPublicKey;
  }

  // user_private_key_secret_version - computed: false, optional: false, required: true
  private _userPrivateKeySecretVersion?: string; 
  public get userPrivateKeySecretVersion() {
    return this.getStringAttribute('user_private_key_secret_version');
  }
  public set userPrivateKeySecretVersion(value: string) {
    this._userPrivateKeySecretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrivateKeySecretVersionInput() {
    return this._userPrivateKeySecretVersion;
  }
}
export interface GoogleDataformRepositoryGitRemoteSettings {
  /**
  * The name of the Secret Manager secret version to use as an authentication token for Git operations. This secret is for assigning with HTTPS only(for SSH use 'ssh_authentication_config'). Must be in the format projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#authentication_token_secret_version GoogleDataformRepository#authentication_token_secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly authenticationTokenSecretVersion?: string;
  /**
  * The Git remote's default branch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#default_branch GoogleDataformRepository#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * The Git remote's URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#url GoogleDataformRepository#url}
  */
  readonly url: string;
  /**
  * ssh_authentication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#ssh_authentication_config GoogleDataformRepository#ssh_authentication_config}
  */
  readonly sshAuthenticationConfig?: GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig;
}

export function googleDataformRepositoryGitRemoteSettingsToTerraform(struct?: GoogleDataformRepositoryGitRemoteSettingsOutputReference | GoogleDataformRepositoryGitRemoteSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_token_secret_version: cdktf.stringToTerraform(struct!.authenticationTokenSecretVersion),
    default_branch: cdktf.stringToTerraform(struct!.defaultBranch),
    url: cdktf.stringToTerraform(struct!.url),
    ssh_authentication_config: googleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigToTerraform(struct!.sshAuthenticationConfig),
  }
}


export function googleDataformRepositoryGitRemoteSettingsToHclTerraform(struct?: GoogleDataformRepositoryGitRemoteSettingsOutputReference | GoogleDataformRepositoryGitRemoteSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_token_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.authenticationTokenSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_branch: {
      value: cdktf.stringToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_authentication_config: {
      value: googleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigToHclTerraform(struct!.sshAuthenticationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataformRepositoryGitRemoteSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataformRepositoryGitRemoteSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationTokenSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTokenSecretVersion = this._authenticationTokenSecretVersion;
    }
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._sshAuthenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthenticationConfig = this._sshAuthenticationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryGitRemoteSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationTokenSecretVersion = undefined;
      this._defaultBranch = undefined;
      this._url = undefined;
      this._sshAuthenticationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationTokenSecretVersion = value.authenticationTokenSecretVersion;
      this._defaultBranch = value.defaultBranch;
      this._url = value.url;
      this._sshAuthenticationConfig.internalValue = value.sshAuthenticationConfig;
    }
  }

  // authentication_token_secret_version - computed: false, optional: true, required: false
  private _authenticationTokenSecretVersion?: string; 
  public get authenticationTokenSecretVersion() {
    return this.getStringAttribute('authentication_token_secret_version');
  }
  public set authenticationTokenSecretVersion(value: string) {
    this._authenticationTokenSecretVersion = value;
  }
  public resetAuthenticationTokenSecretVersion() {
    this._authenticationTokenSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenSecretVersionInput() {
    return this._authenticationTokenSecretVersion;
  }

  // default_branch - computed: false, optional: false, required: true
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // token_status - computed: true, optional: false, required: false
  public get tokenStatus() {
    return this.getStringAttribute('token_status');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // ssh_authentication_config - computed: false, optional: true, required: false
  private _sshAuthenticationConfig = new GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfigOutputReference(this, "ssh_authentication_config");
  public get sshAuthenticationConfig() {
    return this._sshAuthenticationConfig;
  }
  public putSshAuthenticationConfig(value: GoogleDataformRepositoryGitRemoteSettingsSshAuthenticationConfig) {
    this._sshAuthenticationConfig.internalValue = value;
  }
  public resetSshAuthenticationConfig() {
    this._sshAuthenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthenticationConfigInput() {
    return this._sshAuthenticationConfig.internalValue;
  }
}
export interface GoogleDataformRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#create GoogleDataformRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#delete GoogleDataformRepository#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#update GoogleDataformRepository#update}
  */
  readonly update?: string;
}

export function googleDataformRepositoryTimeoutsToTerraform(struct?: GoogleDataformRepositoryTimeouts | cdktf.IResolvable): any {
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


export function googleDataformRepositoryTimeoutsToHclTerraform(struct?: GoogleDataformRepositoryTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataformRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataformRepositoryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataformRepositoryTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleDataformRepositoryWorkspaceCompilationOverrides {
  /**
  * The default database (Google Cloud project ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#default_database GoogleDataformRepository#default_database}
  */
  readonly defaultDatabase?: string;
  /**
  * The suffix that should be appended to all schema (BigQuery dataset ID) names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#schema_suffix GoogleDataformRepository#schema_suffix}
  */
  readonly schemaSuffix?: string;
  /**
  * The prefix that should be prepended to all table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#table_prefix GoogleDataformRepository#table_prefix}
  */
  readonly tablePrefix?: string;
}

export function googleDataformRepositoryWorkspaceCompilationOverridesToTerraform(struct?: GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference | GoogleDataformRepositoryWorkspaceCompilationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_database: cdktf.stringToTerraform(struct!.defaultDatabase),
    schema_suffix: cdktf.stringToTerraform(struct!.schemaSuffix),
    table_prefix: cdktf.stringToTerraform(struct!.tablePrefix),
  }
}


export function googleDataformRepositoryWorkspaceCompilationOverridesToHclTerraform(struct?: GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference | GoogleDataformRepositoryWorkspaceCompilationOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_database: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_suffix: {
      value: cdktf.stringToHclTerraform(struct!.schemaSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataformRepositoryWorkspaceCompilationOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatabase = this._defaultDatabase;
    }
    if (this._schemaSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSuffix = this._schemaSuffix;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryWorkspaceCompilationOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDatabase = undefined;
      this._schemaSuffix = undefined;
      this._tablePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDatabase = value.defaultDatabase;
      this._schemaSuffix = value.schemaSuffix;
      this._tablePrefix = value.tablePrefix;
    }
  }

  // default_database - computed: false, optional: true, required: false
  private _defaultDatabase?: string; 
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }
  public set defaultDatabase(value: string) {
    this._defaultDatabase = value;
  }
  public resetDefaultDatabase() {
    this._defaultDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseInput() {
    return this._defaultDatabase;
  }

  // schema_suffix - computed: false, optional: true, required: false
  private _schemaSuffix?: string; 
  public get schemaSuffix() {
    return this.getStringAttribute('schema_suffix');
  }
  public set schemaSuffix(value: string) {
    this._schemaSuffix = value;
  }
  public resetSchemaSuffix() {
    this._schemaSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSuffixInput() {
    return this._schemaSuffix;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository google_dataform_repository}
*/
export class GoogleDataformRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataform_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataformRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataformRepository to import
  * @param importFromId The id of the existing GoogleDataformRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataformRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataform_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataform_repository google_dataform_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataformRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataformRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataform_repository',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.23.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._name = config.name;
    this._npmrcEnvironmentVariablesSecretVersion = config.npmrcEnvironmentVariablesSecretVersion;
    this._project = config.project;
    this._region = config.region;
    this._serviceAccount = config.serviceAccount;
    this._gitRemoteSettings.internalValue = config.gitRemoteSettings;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceCompilationOverrides.internalValue = config.workspaceCompilationOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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

  // npmrc_environment_variables_secret_version - computed: false, optional: true, required: false
  private _npmrcEnvironmentVariablesSecretVersion?: string; 
  public get npmrcEnvironmentVariablesSecretVersion() {
    return this.getStringAttribute('npmrc_environment_variables_secret_version');
  }
  public set npmrcEnvironmentVariablesSecretVersion(value: string) {
    this._npmrcEnvironmentVariablesSecretVersion = value;
  }
  public resetNpmrcEnvironmentVariablesSecretVersion() {
    this._npmrcEnvironmentVariablesSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npmrcEnvironmentVariablesSecretVersionInput() {
    return this._npmrcEnvironmentVariablesSecretVersion;
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

  // region - computed: false, optional: true, required: false
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // git_remote_settings - computed: false, optional: true, required: false
  private _gitRemoteSettings = new GoogleDataformRepositoryGitRemoteSettingsOutputReference(this, "git_remote_settings");
  public get gitRemoteSettings() {
    return this._gitRemoteSettings;
  }
  public putGitRemoteSettings(value: GoogleDataformRepositoryGitRemoteSettings) {
    this._gitRemoteSettings.internalValue = value;
  }
  public resetGitRemoteSettings() {
    this._gitRemoteSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRemoteSettingsInput() {
    return this._gitRemoteSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataformRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataformRepositoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_compilation_overrides - computed: false, optional: true, required: false
  private _workspaceCompilationOverrides = new GoogleDataformRepositoryWorkspaceCompilationOverridesOutputReference(this, "workspace_compilation_overrides");
  public get workspaceCompilationOverrides() {
    return this._workspaceCompilationOverrides;
  }
  public putWorkspaceCompilationOverrides(value: GoogleDataformRepositoryWorkspaceCompilationOverrides) {
    this._workspaceCompilationOverrides.internalValue = value;
  }
  public resetWorkspaceCompilationOverrides() {
    this._workspaceCompilationOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCompilationOverridesInput() {
    return this._workspaceCompilationOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      npmrc_environment_variables_secret_version: cdktf.stringToTerraform(this._npmrcEnvironmentVariablesSecretVersion),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      git_remote_settings: googleDataformRepositoryGitRemoteSettingsToTerraform(this._gitRemoteSettings.internalValue),
      timeouts: googleDataformRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_compilation_overrides: googleDataformRepositoryWorkspaceCompilationOverridesToTerraform(this._workspaceCompilationOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      npmrc_environment_variables_secret_version: {
        value: cdktf.stringToHclTerraform(this._npmrcEnvironmentVariablesSecretVersion),
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
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_remote_settings: {
        value: googleDataformRepositoryGitRemoteSettingsToHclTerraform(this._gitRemoteSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataformRepositoryGitRemoteSettingsList",
      },
      timeouts: {
        value: googleDataformRepositoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataformRepositoryTimeouts",
      },
      workspace_compilation_overrides: {
        value: googleDataformRepositoryWorkspaceCompilationOverridesToHclTerraform(this._workspaceCompilationOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataformRepositoryWorkspaceCompilationOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
