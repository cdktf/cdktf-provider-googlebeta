// https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIdentityPlatformConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of domains authorized for OAuth redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#authorized_domains GoogleIdentityPlatformConfig#authorized_domains}
  */
  readonly authorizedDomains?: string[];
  /**
  * Whether anonymous users will be auto-deleted after a period of 30 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#autodelete_anonymous_users GoogleIdentityPlatformConfig#autodelete_anonymous_users}
  */
  readonly autodeleteAnonymousUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#id GoogleIdentityPlatformConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#project GoogleIdentityPlatformConfig#project}
  */
  readonly project?: string;
  /**
  * blocking_functions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#blocking_functions GoogleIdentityPlatformConfig#blocking_functions}
  */
  readonly blockingFunctions?: GoogleIdentityPlatformConfigBlockingFunctions;
  /**
  * client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#client GoogleIdentityPlatformConfig#client}
  */
  readonly client?: GoogleIdentityPlatformConfigClient;
  /**
  * mfa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#mfa GoogleIdentityPlatformConfig#mfa}
  */
  readonly mfa?: GoogleIdentityPlatformConfigMfa;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#monitoring GoogleIdentityPlatformConfig#monitoring}
  */
  readonly monitoring?: GoogleIdentityPlatformConfigMonitoring;
  /**
  * multi_tenant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#multi_tenant GoogleIdentityPlatformConfig#multi_tenant}
  */
  readonly multiTenant?: GoogleIdentityPlatformConfigMultiTenant;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#quota GoogleIdentityPlatformConfig#quota}
  */
  readonly quota?: GoogleIdentityPlatformConfigQuota;
  /**
  * sign_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#sign_in GoogleIdentityPlatformConfig#sign_in}
  */
  readonly signIn?: GoogleIdentityPlatformConfigSignIn;
  /**
  * sms_region_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#sms_region_config GoogleIdentityPlatformConfig#sms_region_config}
  */
  readonly smsRegionConfig?: GoogleIdentityPlatformConfigSmsRegionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#timeouts GoogleIdentityPlatformConfig#timeouts}
  */
  readonly timeouts?: GoogleIdentityPlatformConfigTimeouts;
}
export interface GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials {
  /**
  * Whether to pass the user's OAuth identity provider's access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#access_token GoogleIdentityPlatformConfig#access_token}
  */
  readonly accessToken?: boolean | cdktf.IResolvable;
  /**
  * Whether to pass the user's OIDC identity provider's ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#id_token GoogleIdentityPlatformConfig#id_token}
  */
  readonly idToken?: boolean | cdktf.IResolvable;
  /**
  * Whether to pass the user's OAuth identity provider's refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#refresh_token GoogleIdentityPlatformConfig#refresh_token}
  */
  readonly refreshToken?: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsToTerraform(struct?: GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference | GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.booleanToTerraform(struct!.accessToken),
    id_token: cdktf.booleanToTerraform(struct!.idToken),
    refresh_token: cdktf.booleanToTerraform(struct!.refreshToken),
  }
}


export function googleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsToHclTerraform(struct?: GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference | GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.booleanToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id_token: {
      value: cdktf.booleanToHclTerraform(struct!.idToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_token: {
      value: cdktf.booleanToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._idToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idToken = this._idToken;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._idToken = undefined;
      this._refreshToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._idToken = value.idToken;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: boolean | cdktf.IResolvable; 
  public get accessToken() {
    return this.getBooleanAttribute('access_token');
  }
  public set accessToken(value: boolean | cdktf.IResolvable) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // id_token - computed: false, optional: true, required: false
  private _idToken?: boolean | cdktf.IResolvable; 
  public get idToken() {
    return this.getBooleanAttribute('id_token');
  }
  public set idToken(value: boolean | cdktf.IResolvable) {
    this._idToken = value;
  }
  public resetIdToken() {
    this._idToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenInput() {
    return this._idToken;
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: boolean | cdktf.IResolvable; 
  public get refreshToken() {
    return this.getBooleanAttribute('refresh_token');
  }
  public set refreshToken(value: boolean | cdktf.IResolvable) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface GoogleIdentityPlatformConfigBlockingFunctionsTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#event_type GoogleIdentityPlatformConfig#event_type}
  */
  readonly eventType: string;
  /**
  * HTTP URI trigger for the Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#function_uri GoogleIdentityPlatformConfig#function_uri}
  */
  readonly functionUri: string;
}

export function googleIdentityPlatformConfigBlockingFunctionsTriggersToTerraform(struct?: GoogleIdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    function_uri: cdktf.stringToTerraform(struct!.functionUri),
  }
}


export function googleIdentityPlatformConfigBlockingFunctionsTriggersToHclTerraform(struct?: GoogleIdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_uri: {
      value: cdktf.stringToHclTerraform(struct!.functionUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleIdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._functionUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionUri = this._functionUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigBlockingFunctionsTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._functionUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._functionUri = value.functionUri;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // function_uri - computed: false, optional: false, required: true
  private _functionUri?: string; 
  public get functionUri() {
    return this.getStringAttribute('function_uri');
  }
  public set functionUri(value: string) {
    this._functionUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUriInput() {
    return this._functionUri;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleIdentityPlatformConfigBlockingFunctionsTriggersList extends cdktf.ComplexList {
  public internalValue? : GoogleIdentityPlatformConfigBlockingFunctionsTriggers[] | cdktf.IResolvable

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
  public get(index: number): GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference {
    return new GoogleIdentityPlatformConfigBlockingFunctionsTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIdentityPlatformConfigBlockingFunctions {
  /**
  * forward_inbound_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#forward_inbound_credentials GoogleIdentityPlatformConfig#forward_inbound_credentials}
  */
  readonly forwardInboundCredentials?: GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#triggers GoogleIdentityPlatformConfig#triggers}
  */
  readonly triggers: GoogleIdentityPlatformConfigBlockingFunctionsTriggers[] | cdktf.IResolvable;
}

export function googleIdentityPlatformConfigBlockingFunctionsToTerraform(struct?: GoogleIdentityPlatformConfigBlockingFunctionsOutputReference | GoogleIdentityPlatformConfigBlockingFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_inbound_credentials: googleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsToTerraform(struct!.forwardInboundCredentials),
    triggers: cdktf.listMapper(googleIdentityPlatformConfigBlockingFunctionsTriggersToTerraform, true)(struct!.triggers),
  }
}


export function googleIdentityPlatformConfigBlockingFunctionsToHclTerraform(struct?: GoogleIdentityPlatformConfigBlockingFunctionsOutputReference | GoogleIdentityPlatformConfigBlockingFunctions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_inbound_credentials: {
      value: googleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsToHclTerraform(struct!.forwardInboundCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsList",
    },
    triggers: {
      value: cdktf.listMapperHcl(googleIdentityPlatformConfigBlockingFunctionsTriggersToHclTerraform, true)(struct!.triggers),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleIdentityPlatformConfigBlockingFunctionsTriggersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigBlockingFunctionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigBlockingFunctions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardInboundCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardInboundCredentials = this._forwardInboundCredentials?.internalValue;
    }
    if (this._triggers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigBlockingFunctions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardInboundCredentials.internalValue = undefined;
      this._triggers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardInboundCredentials.internalValue = value.forwardInboundCredentials;
      this._triggers.internalValue = value.triggers;
    }
  }

  // forward_inbound_credentials - computed: false, optional: true, required: false
  private _forwardInboundCredentials = new GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference(this, "forward_inbound_credentials");
  public get forwardInboundCredentials() {
    return this._forwardInboundCredentials;
  }
  public putForwardInboundCredentials(value: GoogleIdentityPlatformConfigBlockingFunctionsForwardInboundCredentials) {
    this._forwardInboundCredentials.internalValue = value;
  }
  public resetForwardInboundCredentials() {
    this._forwardInboundCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInboundCredentialsInput() {
    return this._forwardInboundCredentials.internalValue;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new GoogleIdentityPlatformConfigBlockingFunctionsTriggersList(this, "triggers", true);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: GoogleIdentityPlatformConfigBlockingFunctionsTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }
}
export interface GoogleIdentityPlatformConfigClientPermissions {
  /**
  * When true, end users cannot delete their account on the associated project through any of our API methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#disabled_user_deletion GoogleIdentityPlatformConfig#disabled_user_deletion}
  */
  readonly disabledUserDeletion?: boolean | cdktf.IResolvable;
  /**
  * When true, end users cannot sign up for a new account on the associated project through any of our API methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#disabled_user_signup GoogleIdentityPlatformConfig#disabled_user_signup}
  */
  readonly disabledUserSignup?: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformConfigClientPermissionsToTerraform(struct?: GoogleIdentityPlatformConfigClientPermissionsOutputReference | GoogleIdentityPlatformConfigClientPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_user_deletion: cdktf.booleanToTerraform(struct!.disabledUserDeletion),
    disabled_user_signup: cdktf.booleanToTerraform(struct!.disabledUserSignup),
  }
}


export function googleIdentityPlatformConfigClientPermissionsToHclTerraform(struct?: GoogleIdentityPlatformConfigClientPermissionsOutputReference | GoogleIdentityPlatformConfigClientPermissions): any {
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

export class GoogleIdentityPlatformConfigClientPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigClientPermissions | undefined {
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

  public set internalValue(value: GoogleIdentityPlatformConfigClientPermissions | undefined) {
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
export interface GoogleIdentityPlatformConfigClient {
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#permissions GoogleIdentityPlatformConfig#permissions}
  */
  readonly permissions?: GoogleIdentityPlatformConfigClientPermissions;
}

export function googleIdentityPlatformConfigClientToTerraform(struct?: GoogleIdentityPlatformConfigClientOutputReference | GoogleIdentityPlatformConfigClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: googleIdentityPlatformConfigClientPermissionsToTerraform(struct!.permissions),
  }
}


export function googleIdentityPlatformConfigClientToHclTerraform(struct?: GoogleIdentityPlatformConfigClientOutputReference | GoogleIdentityPlatformConfigClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: googleIdentityPlatformConfigClientPermissionsToHclTerraform(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigClientPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permissions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permissions.internalValue = value.permissions;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // firebase_subdomain - computed: true, optional: false, required: false
  public get firebaseSubdomain() {
    return this.getStringAttribute('firebase_subdomain');
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new GoogleIdentityPlatformConfigClientPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: GoogleIdentityPlatformConfigClientPermissions) {
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
export interface GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig {
  /**
  * The allowed number of adjacent intervals that will be used for verification to avoid clock skew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#adjacent_intervals GoogleIdentityPlatformConfig#adjacent_intervals}
  */
  readonly adjacentIntervals?: number;
}

export function googleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigToTerraform(struct?: GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference | GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adjacent_intervals: cdktf.numberToTerraform(struct!.adjacentIntervals),
  }
}


export function googleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigToHclTerraform(struct?: GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference | GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adjacent_intervals: {
      value: cdktf.numberToHclTerraform(struct!.adjacentIntervals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adjacentIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjacentIntervals = this._adjacentIntervals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adjacentIntervals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adjacentIntervals = value.adjacentIntervals;
    }
  }

  // adjacent_intervals - computed: false, optional: true, required: false
  private _adjacentIntervals?: number; 
  public get adjacentIntervals() {
    return this.getNumberAttribute('adjacent_intervals');
  }
  public set adjacentIntervals(value: number) {
    this._adjacentIntervals = value;
  }
  public resetAdjacentIntervals() {
    this._adjacentIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjacentIntervalsInput() {
    return this._adjacentIntervals;
  }
}
export interface GoogleIdentityPlatformConfigMfaProviderConfigs {
  /**
  * Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#state GoogleIdentityPlatformConfig#state}
  */
  readonly state?: string;
  /**
  * totp_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#totp_provider_config GoogleIdentityPlatformConfig#totp_provider_config}
  */
  readonly totpProviderConfig?: GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig;
}

export function googleIdentityPlatformConfigMfaProviderConfigsToTerraform(struct?: GoogleIdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
    totp_provider_config: googleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigToTerraform(struct!.totpProviderConfig),
  }
}


export function googleIdentityPlatformConfigMfaProviderConfigsToHclTerraform(struct?: GoogleIdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    totp_provider_config: {
      value: googleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigToHclTerraform(struct!.totpProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleIdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._totpProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totpProviderConfig = this._totpProviderConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigMfaProviderConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._totpProviderConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._totpProviderConfig.internalValue = value.totpProviderConfig;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // totp_provider_config - computed: false, optional: true, required: false
  private _totpProviderConfig = new GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference(this, "totp_provider_config");
  public get totpProviderConfig() {
    return this._totpProviderConfig;
  }
  public putTotpProviderConfig(value: GoogleIdentityPlatformConfigMfaProviderConfigsTotpProviderConfig) {
    this._totpProviderConfig.internalValue = value;
  }
  public resetTotpProviderConfig() {
    this._totpProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpProviderConfigInput() {
    return this._totpProviderConfig.internalValue;
  }
}

export class GoogleIdentityPlatformConfigMfaProviderConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleIdentityPlatformConfigMfaProviderConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference {
    return new GoogleIdentityPlatformConfigMfaProviderConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIdentityPlatformConfigMfa {
  /**
  * A list of usable second factors for this project. Possible values: ["PHONE_SMS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#enabled_providers GoogleIdentityPlatformConfig#enabled_providers}
  */
  readonly enabledProviders?: string[];
  /**
  * Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#state GoogleIdentityPlatformConfig#state}
  */
  readonly state?: string;
  /**
  * provider_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#provider_configs GoogleIdentityPlatformConfig#provider_configs}
  */
  readonly providerConfigs?: GoogleIdentityPlatformConfigMfaProviderConfigs[] | cdktf.IResolvable;
}

export function googleIdentityPlatformConfigMfaToTerraform(struct?: GoogleIdentityPlatformConfigMfaOutputReference | GoogleIdentityPlatformConfigMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledProviders),
    state: cdktf.stringToTerraform(struct!.state),
    provider_configs: cdktf.listMapper(googleIdentityPlatformConfigMfaProviderConfigsToTerraform, true)(struct!.providerConfigs),
  }
}


export function googleIdentityPlatformConfigMfaToHclTerraform(struct?: GoogleIdentityPlatformConfigMfaOutputReference | GoogleIdentityPlatformConfigMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_configs: {
      value: cdktf.listMapperHcl(googleIdentityPlatformConfigMfaProviderConfigsToHclTerraform, true)(struct!.providerConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigMfaProviderConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigMfa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledProviders = this._enabledProviders;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._providerConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfigs = this._providerConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigMfa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledProviders = undefined;
      this._state = undefined;
      this._providerConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledProviders = value.enabledProviders;
      this._state = value.state;
      this._providerConfigs.internalValue = value.providerConfigs;
    }
  }

  // enabled_providers - computed: false, optional: true, required: false
  private _enabledProviders?: string[]; 
  public get enabledProviders() {
    return this.getListAttribute('enabled_providers');
  }
  public set enabledProviders(value: string[]) {
    this._enabledProviders = value;
  }
  public resetEnabledProviders() {
    this._enabledProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProvidersInput() {
    return this._enabledProviders;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // provider_configs - computed: false, optional: true, required: false
  private _providerConfigs = new GoogleIdentityPlatformConfigMfaProviderConfigsList(this, "provider_configs", false);
  public get providerConfigs() {
    return this._providerConfigs;
  }
  public putProviderConfigs(value: GoogleIdentityPlatformConfigMfaProviderConfigs[] | cdktf.IResolvable) {
    this._providerConfigs.internalValue = value;
  }
  public resetProviderConfigs() {
    this._providerConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigsInput() {
    return this._providerConfigs.internalValue;
  }
}
export interface GoogleIdentityPlatformConfigMonitoringRequestLogging {
  /**
  * Whether logging is enabled for this project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformConfigMonitoringRequestLoggingToTerraform(struct?: GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference | GoogleIdentityPlatformConfigMonitoringRequestLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleIdentityPlatformConfigMonitoringRequestLoggingToHclTerraform(struct?: GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference | GoogleIdentityPlatformConfigMonitoringRequestLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigMonitoringRequestLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigMonitoringRequestLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface GoogleIdentityPlatformConfigMonitoring {
  /**
  * request_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#request_logging GoogleIdentityPlatformConfig#request_logging}
  */
  readonly requestLogging?: GoogleIdentityPlatformConfigMonitoringRequestLogging;
}

export function googleIdentityPlatformConfigMonitoringToTerraform(struct?: GoogleIdentityPlatformConfigMonitoringOutputReference | GoogleIdentityPlatformConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_logging: googleIdentityPlatformConfigMonitoringRequestLoggingToTerraform(struct!.requestLogging),
  }
}


export function googleIdentityPlatformConfigMonitoringToHclTerraform(struct?: GoogleIdentityPlatformConfigMonitoringOutputReference | GoogleIdentityPlatformConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_logging: {
      value: googleIdentityPlatformConfigMonitoringRequestLoggingToHclTerraform(struct!.requestLogging),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigMonitoringRequestLoggingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestLogging = this._requestLogging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestLogging.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestLogging.internalValue = value.requestLogging;
    }
  }

  // request_logging - computed: false, optional: true, required: false
  private _requestLogging = new GoogleIdentityPlatformConfigMonitoringRequestLoggingOutputReference(this, "request_logging");
  public get requestLogging() {
    return this._requestLogging;
  }
  public putRequestLogging(value: GoogleIdentityPlatformConfigMonitoringRequestLogging) {
    this._requestLogging.internalValue = value;
  }
  public resetRequestLogging() {
    this._requestLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLoggingInput() {
    return this._requestLogging.internalValue;
  }
}
export interface GoogleIdentityPlatformConfigMultiTenant {
  /**
  * Whether this project can have tenants or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#allow_tenants GoogleIdentityPlatformConfig#allow_tenants}
  */
  readonly allowTenants?: boolean | cdktf.IResolvable;
  /**
  * The default cloud parent org or folder that the tenant project should be created under.
  * The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
  * If the value is not set, the tenant will be created under the same organization or folder as the agent project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#default_tenant_location GoogleIdentityPlatformConfig#default_tenant_location}
  */
  readonly defaultTenantLocation?: string;
}

export function googleIdentityPlatformConfigMultiTenantToTerraform(struct?: GoogleIdentityPlatformConfigMultiTenantOutputReference | GoogleIdentityPlatformConfigMultiTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_tenants: cdktf.booleanToTerraform(struct!.allowTenants),
    default_tenant_location: cdktf.stringToTerraform(struct!.defaultTenantLocation),
  }
}


export function googleIdentityPlatformConfigMultiTenantToHclTerraform(struct?: GoogleIdentityPlatformConfigMultiTenantOutputReference | GoogleIdentityPlatformConfigMultiTenant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_tenants: {
      value: cdktf.booleanToHclTerraform(struct!.allowTenants),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_tenant_location: {
      value: cdktf.stringToHclTerraform(struct!.defaultTenantLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigMultiTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigMultiTenant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTenants !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTenants = this._allowTenants;
    }
    if (this._defaultTenantLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTenantLocation = this._defaultTenantLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigMultiTenant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTenants = undefined;
      this._defaultTenantLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTenants = value.allowTenants;
      this._defaultTenantLocation = value.defaultTenantLocation;
    }
  }

  // allow_tenants - computed: false, optional: true, required: false
  private _allowTenants?: boolean | cdktf.IResolvable; 
  public get allowTenants() {
    return this.getBooleanAttribute('allow_tenants');
  }
  public set allowTenants(value: boolean | cdktf.IResolvable) {
    this._allowTenants = value;
  }
  public resetAllowTenants() {
    this._allowTenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTenantsInput() {
    return this._allowTenants;
  }

  // default_tenant_location - computed: false, optional: true, required: false
  private _defaultTenantLocation?: string; 
  public get defaultTenantLocation() {
    return this.getStringAttribute('default_tenant_location');
  }
  public set defaultTenantLocation(value: string) {
    this._defaultTenantLocation = value;
  }
  public resetDefaultTenantLocation() {
    this._defaultTenantLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTenantLocationInput() {
    return this._defaultTenantLocation;
  }
}
export interface GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig {
  /**
  * A sign up APIs quota that customers can override temporarily. Value can be in between 1 and 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#quota GoogleIdentityPlatformConfig#quota}
  */
  readonly quota?: number;
  /**
  * How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#quota_duration GoogleIdentityPlatformConfig#quota_duration}
  */
  readonly quotaDuration?: string;
  /**
  * When this quota will take affect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#start_time GoogleIdentityPlatformConfig#start_time}
  */
  readonly startTime?: string;
}

export function googleIdentityPlatformConfigQuotaSignUpQuotaConfigToTerraform(struct?: GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference | GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quota: cdktf.numberToTerraform(struct!.quota),
    quota_duration: cdktf.stringToTerraform(struct!.quotaDuration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function googleIdentityPlatformConfigQuotaSignUpQuotaConfigToHclTerraform(struct?: GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference | GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quota: {
      value: cdktf.numberToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_duration: {
      value: cdktf.stringToHclTerraform(struct!.quotaDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._quotaDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaDuration = this._quotaDuration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quota = undefined;
      this._quotaDuration = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quota = value.quota;
      this._quotaDuration = value.quotaDuration;
      this._startTime = value.startTime;
    }
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // quota_duration - computed: false, optional: true, required: false
  private _quotaDuration?: string; 
  public get quotaDuration() {
    return this.getStringAttribute('quota_duration');
  }
  public set quotaDuration(value: string) {
    this._quotaDuration = value;
  }
  public resetQuotaDuration() {
    this._quotaDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaDurationInput() {
    return this._quotaDuration;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface GoogleIdentityPlatformConfigQuota {
  /**
  * sign_up_quota_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#sign_up_quota_config GoogleIdentityPlatformConfig#sign_up_quota_config}
  */
  readonly signUpQuotaConfig?: GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig;
}

export function googleIdentityPlatformConfigQuotaToTerraform(struct?: GoogleIdentityPlatformConfigQuotaOutputReference | GoogleIdentityPlatformConfigQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sign_up_quota_config: googleIdentityPlatformConfigQuotaSignUpQuotaConfigToTerraform(struct!.signUpQuotaConfig),
  }
}


export function googleIdentityPlatformConfigQuotaToHclTerraform(struct?: GoogleIdentityPlatformConfigQuotaOutputReference | GoogleIdentityPlatformConfigQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sign_up_quota_config: {
      value: googleIdentityPlatformConfigQuotaSignUpQuotaConfigToHclTerraform(struct!.signUpQuotaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signUpQuotaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signUpQuotaConfig = this._signUpQuotaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signUpQuotaConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signUpQuotaConfig.internalValue = value.signUpQuotaConfig;
    }
  }

  // sign_up_quota_config - computed: false, optional: true, required: false
  private _signUpQuotaConfig = new GoogleIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference(this, "sign_up_quota_config");
  public get signUpQuotaConfig() {
    return this._signUpQuotaConfig;
  }
  public putSignUpQuotaConfig(value: GoogleIdentityPlatformConfigQuotaSignUpQuotaConfig) {
    this._signUpQuotaConfig.internalValue = value;
  }
  public resetSignUpQuotaConfig() {
    this._signUpQuotaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signUpQuotaConfigInput() {
    return this._signUpQuotaConfig.internalValue;
  }
}
export interface GoogleIdentityPlatformConfigSignInHashConfig {
}

export function googleIdentityPlatformConfigSignInHashConfigToTerraform(struct?: GoogleIdentityPlatformConfigSignInHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleIdentityPlatformConfigSignInHashConfigToHclTerraform(struct?: GoogleIdentityPlatformConfigSignInHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleIdentityPlatformConfigSignInHashConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleIdentityPlatformConfigSignInHashConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSignInHashConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // memory_cost - computed: true, optional: false, required: false
  public get memoryCost() {
    return this.getNumberAttribute('memory_cost');
  }

  // rounds - computed: true, optional: false, required: false
  public get rounds() {
    return this.getNumberAttribute('rounds');
  }

  // salt_separator - computed: true, optional: false, required: false
  public get saltSeparator() {
    return this.getStringAttribute('salt_separator');
  }

  // signer_key - computed: true, optional: false, required: false
  public get signerKey() {
    return this.getStringAttribute('signer_key');
  }
}

export class GoogleIdentityPlatformConfigSignInHashConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleIdentityPlatformConfigSignInHashConfigOutputReference {
    return new GoogleIdentityPlatformConfigSignInHashConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIdentityPlatformConfigSignInAnonymous {
  /**
  * Whether anonymous user auth is enabled for the project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformConfigSignInAnonymousToTerraform(struct?: GoogleIdentityPlatformConfigSignInAnonymousOutputReference | GoogleIdentityPlatformConfigSignInAnonymous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleIdentityPlatformConfigSignInAnonymousToHclTerraform(struct?: GoogleIdentityPlatformConfigSignInAnonymousOutputReference | GoogleIdentityPlatformConfigSignInAnonymous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigSignInAnonymousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigSignInAnonymous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSignInAnonymous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleIdentityPlatformConfigSignInEmail {
  /**
  * Whether email auth is enabled for the project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether a password is required for email auth or not. If true, both an email and
  * password must be provided to sign in. If false, a user may sign in via either
  * email/password or email link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#password_required GoogleIdentityPlatformConfig#password_required}
  */
  readonly passwordRequired?: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformConfigSignInEmailToTerraform(struct?: GoogleIdentityPlatformConfigSignInEmailOutputReference | GoogleIdentityPlatformConfigSignInEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password_required: cdktf.booleanToTerraform(struct!.passwordRequired),
  }
}


export function googleIdentityPlatformConfigSignInEmailToHclTerraform(struct?: GoogleIdentityPlatformConfigSignInEmailOutputReference | GoogleIdentityPlatformConfigSignInEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_required: {
      value: cdktf.booleanToHclTerraform(struct!.passwordRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigSignInEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigSignInEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._passwordRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRequired = this._passwordRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSignInEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._passwordRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._passwordRequired = value.passwordRequired;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // password_required - computed: false, optional: true, required: false
  private _passwordRequired?: boolean | cdktf.IResolvable; 
  public get passwordRequired() {
    return this.getBooleanAttribute('password_required');
  }
  public set passwordRequired(value: boolean | cdktf.IResolvable) {
    this._passwordRequired = value;
  }
  public resetPasswordRequired() {
    this._passwordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequiredInput() {
    return this._passwordRequired;
  }
}
export interface GoogleIdentityPlatformConfigSignInPhoneNumber {
  /**
  * Whether phone number auth is enabled for the project or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#enabled GoogleIdentityPlatformConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * A map of <test phone number, fake code> that can be used for phone auth testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#test_phone_numbers GoogleIdentityPlatformConfig#test_phone_numbers}
  */
  readonly testPhoneNumbers?: { [key: string]: string };
}

export function googleIdentityPlatformConfigSignInPhoneNumberToTerraform(struct?: GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference | GoogleIdentityPlatformConfigSignInPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    test_phone_numbers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.testPhoneNumbers),
  }
}


export function googleIdentityPlatformConfigSignInPhoneNumberToHclTerraform(struct?: GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference | GoogleIdentityPlatformConfigSignInPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    test_phone_numbers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.testPhoneNumbers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigSignInPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._testPhoneNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.testPhoneNumbers = this._testPhoneNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSignInPhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._testPhoneNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._testPhoneNumbers = value.testPhoneNumbers;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // test_phone_numbers - computed: false, optional: true, required: false
  private _testPhoneNumbers?: { [key: string]: string }; 
  public get testPhoneNumbers() {
    return this.getStringMapAttribute('test_phone_numbers');
  }
  public set testPhoneNumbers(value: { [key: string]: string }) {
    this._testPhoneNumbers = value;
  }
  public resetTestPhoneNumbers() {
    this._testPhoneNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testPhoneNumbersInput() {
    return this._testPhoneNumbers;
  }
}
export interface GoogleIdentityPlatformConfigSignIn {
  /**
  * Whether to allow more than one account to have the same email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#allow_duplicate_emails GoogleIdentityPlatformConfig#allow_duplicate_emails}
  */
  readonly allowDuplicateEmails?: boolean | cdktf.IResolvable;
  /**
  * anonymous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#anonymous GoogleIdentityPlatformConfig#anonymous}
  */
  readonly anonymous?: GoogleIdentityPlatformConfigSignInAnonymous;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#email GoogleIdentityPlatformConfig#email}
  */
  readonly email?: GoogleIdentityPlatformConfigSignInEmail;
  /**
  * phone_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#phone_number GoogleIdentityPlatformConfig#phone_number}
  */
  readonly phoneNumber?: GoogleIdentityPlatformConfigSignInPhoneNumber;
}

export function googleIdentityPlatformConfigSignInToTerraform(struct?: GoogleIdentityPlatformConfigSignInOutputReference | GoogleIdentityPlatformConfigSignIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_duplicate_emails: cdktf.booleanToTerraform(struct!.allowDuplicateEmails),
    anonymous: googleIdentityPlatformConfigSignInAnonymousToTerraform(struct!.anonymous),
    email: googleIdentityPlatformConfigSignInEmailToTerraform(struct!.email),
    phone_number: googleIdentityPlatformConfigSignInPhoneNumberToTerraform(struct!.phoneNumber),
  }
}


export function googleIdentityPlatformConfigSignInToHclTerraform(struct?: GoogleIdentityPlatformConfigSignInOutputReference | GoogleIdentityPlatformConfigSignIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_duplicate_emails: {
      value: cdktf.booleanToHclTerraform(struct!.allowDuplicateEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anonymous: {
      value: googleIdentityPlatformConfigSignInAnonymousToHclTerraform(struct!.anonymous),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigSignInAnonymousList",
    },
    email: {
      value: googleIdentityPlatformConfigSignInEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigSignInEmailList",
    },
    phone_number: {
      value: googleIdentityPlatformConfigSignInPhoneNumberToHclTerraform(struct!.phoneNumber),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigSignInPhoneNumberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigSignInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigSignIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDuplicateEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicateEmails = this._allowDuplicateEmails;
    }
    if (this._anonymous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._phoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSignIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowDuplicateEmails = undefined;
      this._anonymous.internalValue = undefined;
      this._email.internalValue = undefined;
      this._phoneNumber.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowDuplicateEmails = value.allowDuplicateEmails;
      this._anonymous.internalValue = value.anonymous;
      this._email.internalValue = value.email;
      this._phoneNumber.internalValue = value.phoneNumber;
    }
  }

  // allow_duplicate_emails - computed: false, optional: true, required: false
  private _allowDuplicateEmails?: boolean | cdktf.IResolvable; 
  public get allowDuplicateEmails() {
    return this.getBooleanAttribute('allow_duplicate_emails');
  }
  public set allowDuplicateEmails(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateEmails = value;
  }
  public resetAllowDuplicateEmails() {
    this._allowDuplicateEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateEmailsInput() {
    return this._allowDuplicateEmails;
  }

  // hash_config - computed: true, optional: false, required: false
  private _hashConfig = new GoogleIdentityPlatformConfigSignInHashConfigList(this, "hash_config", false);
  public get hashConfig() {
    return this._hashConfig;
  }

  // anonymous - computed: false, optional: true, required: false
  private _anonymous = new GoogleIdentityPlatformConfigSignInAnonymousOutputReference(this, "anonymous");
  public get anonymous() {
    return this._anonymous;
  }
  public putAnonymous(value: GoogleIdentityPlatformConfigSignInAnonymous) {
    this._anonymous.internalValue = value;
  }
  public resetAnonymous() {
    this._anonymous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new GoogleIdentityPlatformConfigSignInEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: GoogleIdentityPlatformConfigSignInEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber = new GoogleIdentityPlatformConfigSignInPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: GoogleIdentityPlatformConfigSignInPhoneNumber) {
    this._phoneNumber.internalValue = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }
}
export interface GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault {
  /**
  * Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#disallowed_regions GoogleIdentityPlatformConfig#disallowed_regions}
  */
  readonly disallowedRegions?: string[];
}

export function googleIdentityPlatformConfigSmsRegionConfigAllowByDefaultToTerraform(struct?: GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference | GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disallowed_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disallowedRegions),
  }
}


export function googleIdentityPlatformConfigSmsRegionConfigAllowByDefaultToHclTerraform(struct?: GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference | GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disallowed_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disallowedRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disallowedRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedRegions = this._disallowedRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disallowedRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disallowedRegions = value.disallowedRegions;
    }
  }

  // disallowed_regions - computed: false, optional: true, required: false
  private _disallowedRegions?: string[]; 
  public get disallowedRegions() {
    return this.getListAttribute('disallowed_regions');
  }
  public set disallowedRegions(value: string[]) {
    this._disallowedRegions = value;
  }
  public resetDisallowedRegions() {
    this._disallowedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedRegionsInput() {
    return this._disallowedRegions;
  }
}
export interface GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly {
  /**
  * Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#allowed_regions GoogleIdentityPlatformConfig#allowed_regions}
  */
  readonly allowedRegions?: string[];
}

export function googleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyToTerraform(struct?: GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference | GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRegions),
  }
}


export function googleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyToHclTerraform(struct?: GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference | GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegions = this._allowedRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedRegions = value.allowedRegions;
    }
  }

  // allowed_regions - computed: false, optional: true, required: false
  private _allowedRegions?: string[]; 
  public get allowedRegions() {
    return this.getListAttribute('allowed_regions');
  }
  public set allowedRegions(value: string[]) {
    this._allowedRegions = value;
  }
  public resetAllowedRegions() {
    this._allowedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegionsInput() {
    return this._allowedRegions;
  }
}
export interface GoogleIdentityPlatformConfigSmsRegionConfig {
  /**
  * allow_by_default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#allow_by_default GoogleIdentityPlatformConfig#allow_by_default}
  */
  readonly allowByDefault?: GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault;
  /**
  * allowlist_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#allowlist_only GoogleIdentityPlatformConfig#allowlist_only}
  */
  readonly allowlistOnly?: GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly;
}

export function googleIdentityPlatformConfigSmsRegionConfigToTerraform(struct?: GoogleIdentityPlatformConfigSmsRegionConfigOutputReference | GoogleIdentityPlatformConfigSmsRegionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_by_default: googleIdentityPlatformConfigSmsRegionConfigAllowByDefaultToTerraform(struct!.allowByDefault),
    allowlist_only: googleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyToTerraform(struct!.allowlistOnly),
  }
}


export function googleIdentityPlatformConfigSmsRegionConfigToHclTerraform(struct?: GoogleIdentityPlatformConfigSmsRegionConfigOutputReference | GoogleIdentityPlatformConfigSmsRegionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_by_default: {
      value: googleIdentityPlatformConfigSmsRegionConfigAllowByDefaultToHclTerraform(struct!.allowByDefault),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultList",
    },
    allowlist_only: {
      value: googleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyToHclTerraform(struct!.allowlistOnly),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIdentityPlatformConfigSmsRegionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformConfigSmsRegionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowByDefault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowByDefault = this._allowByDefault?.internalValue;
    }
    if (this._allowlistOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlistOnly = this._allowlistOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformConfigSmsRegionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowByDefault.internalValue = undefined;
      this._allowlistOnly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowByDefault.internalValue = value.allowByDefault;
      this._allowlistOnly.internalValue = value.allowlistOnly;
    }
  }

  // allow_by_default - computed: false, optional: true, required: false
  private _allowByDefault = new GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference(this, "allow_by_default");
  public get allowByDefault() {
    return this._allowByDefault;
  }
  public putAllowByDefault(value: GoogleIdentityPlatformConfigSmsRegionConfigAllowByDefault) {
    this._allowByDefault.internalValue = value;
  }
  public resetAllowByDefault() {
    this._allowByDefault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowByDefaultInput() {
    return this._allowByDefault.internalValue;
  }

  // allowlist_only - computed: false, optional: true, required: false
  private _allowlistOnly = new GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference(this, "allowlist_only");
  public get allowlistOnly() {
    return this._allowlistOnly;
  }
  public putAllowlistOnly(value: GoogleIdentityPlatformConfigSmsRegionConfigAllowlistOnly) {
    this._allowlistOnly.internalValue = value;
  }
  public resetAllowlistOnly() {
    this._allowlistOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistOnlyInput() {
    return this._allowlistOnly.internalValue;
  }
}
export interface GoogleIdentityPlatformConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#create GoogleIdentityPlatformConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#delete GoogleIdentityPlatformConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#update GoogleIdentityPlatformConfig#update}
  */
  readonly update?: string;
}

export function googleIdentityPlatformConfigTimeoutsToTerraform(struct?: GoogleIdentityPlatformConfigTimeouts | cdktf.IResolvable): any {
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


export function googleIdentityPlatformConfigTimeoutsToHclTerraform(struct?: GoogleIdentityPlatformConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleIdentityPlatformConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIdentityPlatformConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIdentityPlatformConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config google_identity_platform_config}
*/
export class GoogleIdentityPlatformConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIdentityPlatformConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIdentityPlatformConfig to import
  * @param importFromId The id of the existing GoogleIdentityPlatformConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIdentityPlatformConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_identity_platform_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_config google_identity_platform_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIdentityPlatformConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleIdentityPlatformConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_config',
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
    this._authorizedDomains = config.authorizedDomains;
    this._autodeleteAnonymousUsers = config.autodeleteAnonymousUsers;
    this._id = config.id;
    this._project = config.project;
    this._blockingFunctions.internalValue = config.blockingFunctions;
    this._client.internalValue = config.client;
    this._mfa.internalValue = config.mfa;
    this._monitoring.internalValue = config.monitoring;
    this._multiTenant.internalValue = config.multiTenant;
    this._quota.internalValue = config.quota;
    this._signIn.internalValue = config.signIn;
    this._smsRegionConfig.internalValue = config.smsRegionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_domains - computed: true, optional: true, required: false
  private _authorizedDomains?: string[]; 
  public get authorizedDomains() {
    return this.getListAttribute('authorized_domains');
  }
  public set authorizedDomains(value: string[]) {
    this._authorizedDomains = value;
  }
  public resetAuthorizedDomains() {
    this._authorizedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedDomainsInput() {
    return this._authorizedDomains;
  }

  // autodelete_anonymous_users - computed: false, optional: true, required: false
  private _autodeleteAnonymousUsers?: boolean | cdktf.IResolvable; 
  public get autodeleteAnonymousUsers() {
    return this.getBooleanAttribute('autodelete_anonymous_users');
  }
  public set autodeleteAnonymousUsers(value: boolean | cdktf.IResolvable) {
    this._autodeleteAnonymousUsers = value;
  }
  public resetAutodeleteAnonymousUsers() {
    this._autodeleteAnonymousUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodeleteAnonymousUsersInput() {
    return this._autodeleteAnonymousUsers;
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

  // blocking_functions - computed: false, optional: true, required: false
  private _blockingFunctions = new GoogleIdentityPlatformConfigBlockingFunctionsOutputReference(this, "blocking_functions");
  public get blockingFunctions() {
    return this._blockingFunctions;
  }
  public putBlockingFunctions(value: GoogleIdentityPlatformConfigBlockingFunctions) {
    this._blockingFunctions.internalValue = value;
  }
  public resetBlockingFunctions() {
    this._blockingFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingFunctionsInput() {
    return this._blockingFunctions.internalValue;
  }

  // client - computed: false, optional: true, required: false
  private _client = new GoogleIdentityPlatformConfigClientOutputReference(this, "client");
  public get client() {
    return this._client;
  }
  public putClient(value: GoogleIdentityPlatformConfigClient) {
    this._client.internalValue = value;
  }
  public resetClient() {
    this._client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client.internalValue;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new GoogleIdentityPlatformConfigMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: GoogleIdentityPlatformConfigMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new GoogleIdentityPlatformConfigMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: GoogleIdentityPlatformConfigMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // multi_tenant - computed: false, optional: true, required: false
  private _multiTenant = new GoogleIdentityPlatformConfigMultiTenantOutputReference(this, "multi_tenant");
  public get multiTenant() {
    return this._multiTenant;
  }
  public putMultiTenant(value: GoogleIdentityPlatformConfigMultiTenant) {
    this._multiTenant.internalValue = value;
  }
  public resetMultiTenant() {
    this._multiTenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantInput() {
    return this._multiTenant.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new GoogleIdentityPlatformConfigQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: GoogleIdentityPlatformConfigQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // sign_in - computed: false, optional: true, required: false
  private _signIn = new GoogleIdentityPlatformConfigSignInOutputReference(this, "sign_in");
  public get signIn() {
    return this._signIn;
  }
  public putSignIn(value: GoogleIdentityPlatformConfigSignIn) {
    this._signIn.internalValue = value;
  }
  public resetSignIn() {
    this._signIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInInput() {
    return this._signIn.internalValue;
  }

  // sms_region_config - computed: false, optional: true, required: false
  private _smsRegionConfig = new GoogleIdentityPlatformConfigSmsRegionConfigOutputReference(this, "sms_region_config");
  public get smsRegionConfig() {
    return this._smsRegionConfig;
  }
  public putSmsRegionConfig(value: GoogleIdentityPlatformConfigSmsRegionConfig) {
    this._smsRegionConfig.internalValue = value;
  }
  public resetSmsRegionConfig() {
    this._smsRegionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsRegionConfigInput() {
    return this._smsRegionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIdentityPlatformConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIdentityPlatformConfigTimeouts) {
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
      authorized_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedDomains),
      autodelete_anonymous_users: cdktf.booleanToTerraform(this._autodeleteAnonymousUsers),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      blocking_functions: googleIdentityPlatformConfigBlockingFunctionsToTerraform(this._blockingFunctions.internalValue),
      client: googleIdentityPlatformConfigClientToTerraform(this._client.internalValue),
      mfa: googleIdentityPlatformConfigMfaToTerraform(this._mfa.internalValue),
      monitoring: googleIdentityPlatformConfigMonitoringToTerraform(this._monitoring.internalValue),
      multi_tenant: googleIdentityPlatformConfigMultiTenantToTerraform(this._multiTenant.internalValue),
      quota: googleIdentityPlatformConfigQuotaToTerraform(this._quota.internalValue),
      sign_in: googleIdentityPlatformConfigSignInToTerraform(this._signIn.internalValue),
      sms_region_config: googleIdentityPlatformConfigSmsRegionConfigToTerraform(this._smsRegionConfig.internalValue),
      timeouts: googleIdentityPlatformConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      autodelete_anonymous_users: {
        value: cdktf.booleanToHclTerraform(this._autodeleteAnonymousUsers),
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
      blocking_functions: {
        value: googleIdentityPlatformConfigBlockingFunctionsToHclTerraform(this._blockingFunctions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigBlockingFunctionsList",
      },
      client: {
        value: googleIdentityPlatformConfigClientToHclTerraform(this._client.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigClientList",
      },
      mfa: {
        value: googleIdentityPlatformConfigMfaToHclTerraform(this._mfa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigMfaList",
      },
      monitoring: {
        value: googleIdentityPlatformConfigMonitoringToHclTerraform(this._monitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigMonitoringList",
      },
      multi_tenant: {
        value: googleIdentityPlatformConfigMultiTenantToHclTerraform(this._multiTenant.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigMultiTenantList",
      },
      quota: {
        value: googleIdentityPlatformConfigQuotaToHclTerraform(this._quota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigQuotaList",
      },
      sign_in: {
        value: googleIdentityPlatformConfigSignInToHclTerraform(this._signIn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigSignInList",
      },
      sms_region_config: {
        value: googleIdentityPlatformConfigSmsRegionConfigToHclTerraform(this._smsRegionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIdentityPlatformConfigSmsRegionConfigList",
      },
      timeouts: {
        value: googleIdentityPlatformConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIdentityPlatformConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
