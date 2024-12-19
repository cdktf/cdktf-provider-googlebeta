// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIapSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#id GoogleIapSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the IAP protected resource. Name can have below resources:
  * * organizations/{organization_id}
  * * folders/{folder_id}
  * * projects/{projects_id}
  * * projects/{projects_id}/iap_web
  * * projects/{projects_id}/iap_web/compute
  * * projects/{projects_id}/iap_web/compute-{region}
  * * projects/{projects_id}/iap_web/compute/service/{service_id}
  * * projects/{projects_id}/iap_web/compute-{region}/service/{service_id}
  * * projects/{projects_id}/iap_web/appengine-{app_id}
  * * projects/{projects_id}/iap_web/appengine-{app_id}/service/{service_id}
  * * projects/{projects_id}/iap_web/appengine-{app_id}/service/{service_id}/version/{version_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#name GoogleIapSettings#name}
  */
  readonly name: string;
  /**
  * access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#access_settings GoogleIapSettings#access_settings}
  */
  readonly accessSettings?: GoogleIapSettingsAccessSettings;
  /**
  * application_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#application_settings GoogleIapSettings#application_settings}
  */
  readonly applicationSettings?: GoogleIapSettingsApplicationSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#timeouts GoogleIapSettings#timeouts}
  */
  readonly timeouts?: GoogleIapSettingsTimeouts;
}
export interface GoogleIapSettingsAccessSettingsAllowedDomainsSettings {
  /**
  * List of trusted domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#domains GoogleIapSettings#domains}
  */
  readonly domains?: string[];
  /**
  * Configuration for customers to opt in for the feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function googleIapSettingsAccessSettingsAllowedDomainsSettingsToTerraform(struct?: GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference | GoogleIapSettingsAccessSettingsAllowedDomainsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function googleIapSettingsAccessSettingsAllowedDomainsSettingsToHclTerraform(struct?: GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference | GoogleIapSettingsAccessSettingsAllowedDomainsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettingsAllowedDomainsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettingsAllowedDomainsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
      this._enable = value.enable;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface GoogleIapSettingsAccessSettingsCorsSettings {
  /**
  * Configuration to allow HTTP OPTIONS calls to skip authorization.
  * If undefined, IAP will not apply any special logic to OPTIONS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#allow_http_options GoogleIapSettings#allow_http_options}
  */
  readonly allowHttpOptions?: boolean | cdktf.IResolvable;
}

export function googleIapSettingsAccessSettingsCorsSettingsToTerraform(struct?: GoogleIapSettingsAccessSettingsCorsSettingsOutputReference | GoogleIapSettingsAccessSettingsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_http_options: cdktf.booleanToTerraform(struct!.allowHttpOptions),
  }
}


export function googleIapSettingsAccessSettingsCorsSettingsToHclTerraform(struct?: GoogleIapSettingsAccessSettingsCorsSettingsOutputReference | GoogleIapSettingsAccessSettingsCorsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_http_options: {
      value: cdktf.booleanToHclTerraform(struct!.allowHttpOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettingsCorsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHttpOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHttpOptions = this._allowHttpOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettingsCorsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHttpOptions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHttpOptions = value.allowHttpOptions;
    }
  }

  // allow_http_options - computed: false, optional: true, required: false
  private _allowHttpOptions?: boolean | cdktf.IResolvable; 
  public get allowHttpOptions() {
    return this.getBooleanAttribute('allow_http_options');
  }
  public set allowHttpOptions(value: boolean | cdktf.IResolvable) {
    this._allowHttpOptions = value;
  }
  public resetAllowHttpOptions() {
    this._allowHttpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHttpOptionsInput() {
    return this._allowHttpOptions;
  }
}
export interface GoogleIapSettingsAccessSettingsGcipSettings {
  /**
  * Login page URI associated with the GCIP tenants. Typically, all resources within
  * the same project share the same login page, though it could be overridden at the
  * sub resource level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#login_page_uri GoogleIapSettings#login_page_uri}
  */
  readonly loginPageUri?: string;
  /**
  * GCIP tenant ids that are linked to the IAP resource. tenantIds could be a string
  * beginning with a number character to indicate authenticating with GCIP tenant flow,
  * or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
  * is used, tenantIds should only contain one single element, while for tenant flow,
  * tenantIds can contain multiple elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#tenant_ids GoogleIapSettings#tenant_ids}
  */
  readonly tenantIds?: string[];
}

export function googleIapSettingsAccessSettingsGcipSettingsToTerraform(struct?: GoogleIapSettingsAccessSettingsGcipSettingsOutputReference | GoogleIapSettingsAccessSettingsGcipSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_page_uri: cdktf.stringToTerraform(struct!.loginPageUri),
    tenant_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tenantIds),
  }
}


export function googleIapSettingsAccessSettingsGcipSettingsToHclTerraform(struct?: GoogleIapSettingsAccessSettingsGcipSettingsOutputReference | GoogleIapSettingsAccessSettingsGcipSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_page_uri: {
      value: cdktf.stringToHclTerraform(struct!.loginPageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tenantIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsGcipSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettingsGcipSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginPageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPageUri = this._loginPageUri;
    }
    if (this._tenantIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantIds = this._tenantIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettingsGcipSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginPageUri = undefined;
      this._tenantIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginPageUri = value.loginPageUri;
      this._tenantIds = value.tenantIds;
    }
  }

  // login_page_uri - computed: false, optional: true, required: false
  private _loginPageUri?: string; 
  public get loginPageUri() {
    return this.getStringAttribute('login_page_uri');
  }
  public set loginPageUri(value: string) {
    this._loginPageUri = value;
  }
  public resetLoginPageUri() {
    this._loginPageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPageUriInput() {
    return this._loginPageUri;
  }

  // tenant_ids - computed: false, optional: true, required: false
  private _tenantIds?: string[]; 
  public get tenantIds() {
    return this.getListAttribute('tenant_ids');
  }
  public set tenantIds(value: string[]) {
    this._tenantIds = value;
  }
  public resetTenantIds() {
    this._tenantIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdsInput() {
    return this._tenantIds;
  }
}
export interface GoogleIapSettingsAccessSettingsOauthSettings {
  /**
  * Domain hint to send as hd=? parameter in OAuth request flow.
  * Enables redirect to primary IDP by skipping Google's login screen.
  * (https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
  * Note: IAP does not verify that the id token's hd claim matches this value
  * since access behavior is managed by IAM policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#login_hint GoogleIapSettings#login_hint}
  */
  readonly loginHint?: string;
  /**
  * List of client ids allowed to use IAP programmatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#programmatic_clients GoogleIapSettings#programmatic_clients}
  */
  readonly programmaticClients?: string[];
}

export function googleIapSettingsAccessSettingsOauthSettingsToTerraform(struct?: GoogleIapSettingsAccessSettingsOauthSettingsOutputReference | GoogleIapSettingsAccessSettingsOauthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_hint: cdktf.stringToTerraform(struct!.loginHint),
    programmatic_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.programmaticClients),
  }
}


export function googleIapSettingsAccessSettingsOauthSettingsToHclTerraform(struct?: GoogleIapSettingsAccessSettingsOauthSettingsOutputReference | GoogleIapSettingsAccessSettingsOauthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_hint: {
      value: cdktf.stringToHclTerraform(struct!.loginHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    programmatic_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.programmaticClients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsOauthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettingsOauthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginHint = this._loginHint;
    }
    if (this._programmaticClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.programmaticClients = this._programmaticClients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettingsOauthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginHint = undefined;
      this._programmaticClients = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginHint = value.loginHint;
      this._programmaticClients = value.programmaticClients;
    }
  }

  // login_hint - computed: false, optional: true, required: false
  private _loginHint?: string; 
  public get loginHint() {
    return this.getStringAttribute('login_hint');
  }
  public set loginHint(value: string) {
    this._loginHint = value;
  }
  public resetLoginHint() {
    this._loginHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginHintInput() {
    return this._loginHint;
  }

  // programmatic_clients - computed: false, optional: true, required: false
  private _programmaticClients?: string[]; 
  public get programmaticClients() {
    return this.getListAttribute('programmatic_clients');
  }
  public set programmaticClients(value: string[]) {
    this._programmaticClients = value;
  }
  public resetProgrammaticClients() {
    this._programmaticClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programmaticClientsInput() {
    return this._programmaticClients;
  }
}
export interface GoogleIapSettingsAccessSettingsReauthSettings {
  /**
  * Reauth session lifetime, how long before a user has to reauthenticate again.
  * A duration in seconds with up to nine fractional digits, ending with 's'.
  * Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#max_age GoogleIapSettings#max_age}
  */
  readonly maxAge: string;
  /**
  * Reauth method requested. The possible values are:
  * 
  * * 'LOGIN': Prompts the user to log in again.
  * * 'SECURE_KEY': User must use their secure key 2nd factor device.
  * * 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#method GoogleIapSettings#method}
  */
  readonly method: string;
  /**
  * How IAP determines the effective policy in cases of hierarchical policies.
  * Policies are merged from higher in the hierarchy to lower in the hierarchy.
  * The possible values are:
  * 
  * * 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  * 		   Effective policy may only be the same or stricter.
  * * 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#policy_type GoogleIapSettings#policy_type}
  */
  readonly policyType: string;
}

export function googleIapSettingsAccessSettingsReauthSettingsToTerraform(struct?: GoogleIapSettingsAccessSettingsReauthSettingsOutputReference | GoogleIapSettingsAccessSettingsReauthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    method: cdktf.stringToTerraform(struct!.method),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
  }
}


export function googleIapSettingsAccessSettingsReauthSettingsToHclTerraform(struct?: GoogleIapSettingsAccessSettingsReauthSettingsOutputReference | GoogleIapSettingsAccessSettingsReauthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsReauthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettingsReauthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettingsReauthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAge = undefined;
      this._method = undefined;
      this._policyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAge = value.maxAge;
      this._method = value.method;
      this._policyType = value.policyType;
    }
  }

  // max_age - computed: false, optional: false, required: true
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}
export interface GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 {
  /**
  * The OAuth 2.0 client ID registered in the workforce identity
  * federation OAuth 2.0 Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#client_id GoogleIapSettings#client_id}
  */
  readonly clientId?: string;
  /**
  * Input only. The OAuth 2.0 client secret created while registering
  * the client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#client_secret GoogleIapSettings#client_secret}
  */
  readonly clientSecret?: string;
}

export function googleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToTerraform(struct?: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference | GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function googleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToHclTerraform(struct?: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference | GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_secret_sha256 - computed: true, optional: false, required: false
  public get clientSecretSha256() {
    return this.getStringAttribute('client_secret_sha256');
  }
}
export interface GoogleIapSettingsAccessSettingsWorkforceIdentitySettings {
  /**
  * The workforce pool resources. Only one workforce pool is accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#workforce_pools GoogleIapSettings#workforce_pools}
  */
  readonly workforcePools?: string[];
  /**
  * oauth2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#oauth2 GoogleIapSettings#oauth2}
  */
  readonly oauth2?: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2;
}

export function googleIapSettingsAccessSettingsWorkforceIdentitySettingsToTerraform(struct?: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference | GoogleIapSettingsAccessSettingsWorkforceIdentitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workforce_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workforcePools),
    oauth2: googleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToTerraform(struct!.oauth2),
  }
}


export function googleIapSettingsAccessSettingsWorkforceIdentitySettingsToHclTerraform(struct?: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference | GoogleIapSettingsAccessSettingsWorkforceIdentitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workforce_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workforcePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oauth2: {
      value: googleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettingsWorkforceIdentitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workforcePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.workforcePools = this._workforcePools;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettingsWorkforceIdentitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workforcePools = undefined;
      this._oauth2.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workforcePools = value.workforcePools;
      this._oauth2.internalValue = value.oauth2;
    }
  }

  // workforce_pools - computed: false, optional: true, required: false
  private _workforcePools?: string[]; 
  public get workforcePools() {
    return this.getListAttribute('workforce_pools');
  }
  public set workforcePools(value: string[]) {
    this._workforcePools = value;
  }
  public resetWorkforcePools() {
    this._workforcePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforcePoolsInput() {
    return this._workforcePools;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }
}
export interface GoogleIapSettingsAccessSettings {
  /**
  * Identity sources that IAP can use to authenticate the end user. Only one identity source
  * can be configured. The possible values are:
  * 
  * * 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  *   				     Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#identity_sources GoogleIapSettings#identity_sources}
  */
  readonly identitySources?: string[];
  /**
  * allowed_domains_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#allowed_domains_settings GoogleIapSettings#allowed_domains_settings}
  */
  readonly allowedDomainsSettings?: GoogleIapSettingsAccessSettingsAllowedDomainsSettings;
  /**
  * cors_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#cors_settings GoogleIapSettings#cors_settings}
  */
  readonly corsSettings?: GoogleIapSettingsAccessSettingsCorsSettings;
  /**
  * gcip_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#gcip_settings GoogleIapSettings#gcip_settings}
  */
  readonly gcipSettings?: GoogleIapSettingsAccessSettingsGcipSettings;
  /**
  * oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#oauth_settings GoogleIapSettings#oauth_settings}
  */
  readonly oauthSettings?: GoogleIapSettingsAccessSettingsOauthSettings;
  /**
  * reauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#reauth_settings GoogleIapSettings#reauth_settings}
  */
  readonly reauthSettings?: GoogleIapSettingsAccessSettingsReauthSettings;
  /**
  * workforce_identity_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#workforce_identity_settings GoogleIapSettings#workforce_identity_settings}
  */
  readonly workforceIdentitySettings?: GoogleIapSettingsAccessSettingsWorkforceIdentitySettings;
}

export function googleIapSettingsAccessSettingsToTerraform(struct?: GoogleIapSettingsAccessSettingsOutputReference | GoogleIapSettingsAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identitySources),
    allowed_domains_settings: googleIapSettingsAccessSettingsAllowedDomainsSettingsToTerraform(struct!.allowedDomainsSettings),
    cors_settings: googleIapSettingsAccessSettingsCorsSettingsToTerraform(struct!.corsSettings),
    gcip_settings: googleIapSettingsAccessSettingsGcipSettingsToTerraform(struct!.gcipSettings),
    oauth_settings: googleIapSettingsAccessSettingsOauthSettingsToTerraform(struct!.oauthSettings),
    reauth_settings: googleIapSettingsAccessSettingsReauthSettingsToTerraform(struct!.reauthSettings),
    workforce_identity_settings: googleIapSettingsAccessSettingsWorkforceIdentitySettingsToTerraform(struct!.workforceIdentitySettings),
  }
}


export function googleIapSettingsAccessSettingsToHclTerraform(struct?: GoogleIapSettingsAccessSettingsOutputReference | GoogleIapSettingsAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identitySources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_domains_settings: {
      value: googleIapSettingsAccessSettingsAllowedDomainsSettingsToHclTerraform(struct!.allowedDomainsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsAccessSettingsAllowedDomainsSettingsList",
    },
    cors_settings: {
      value: googleIapSettingsAccessSettingsCorsSettingsToHclTerraform(struct!.corsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsAccessSettingsCorsSettingsList",
    },
    gcip_settings: {
      value: googleIapSettingsAccessSettingsGcipSettingsToHclTerraform(struct!.gcipSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsAccessSettingsGcipSettingsList",
    },
    oauth_settings: {
      value: googleIapSettingsAccessSettingsOauthSettingsToHclTerraform(struct!.oauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsAccessSettingsOauthSettingsList",
    },
    reauth_settings: {
      value: googleIapSettingsAccessSettingsReauthSettingsToHclTerraform(struct!.reauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsAccessSettingsReauthSettingsList",
    },
    workforce_identity_settings: {
      value: googleIapSettingsAccessSettingsWorkforceIdentitySettingsToHclTerraform(struct!.workforceIdentitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identitySources !== undefined) {
      hasAnyValues = true;
      internalValueResult.identitySources = this._identitySources;
    }
    if (this._allowedDomainsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomainsSettings = this._allowedDomainsSettings?.internalValue;
    }
    if (this._corsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsSettings = this._corsSettings?.internalValue;
    }
    if (this._gcipSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcipSettings = this._gcipSettings?.internalValue;
    }
    if (this._oauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthSettings = this._oauthSettings?.internalValue;
    }
    if (this._reauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthSettings = this._reauthSettings?.internalValue;
    }
    if (this._workforceIdentitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workforceIdentitySettings = this._workforceIdentitySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identitySources = undefined;
      this._allowedDomainsSettings.internalValue = undefined;
      this._corsSettings.internalValue = undefined;
      this._gcipSettings.internalValue = undefined;
      this._oauthSettings.internalValue = undefined;
      this._reauthSettings.internalValue = undefined;
      this._workforceIdentitySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identitySources = value.identitySources;
      this._allowedDomainsSettings.internalValue = value.allowedDomainsSettings;
      this._corsSettings.internalValue = value.corsSettings;
      this._gcipSettings.internalValue = value.gcipSettings;
      this._oauthSettings.internalValue = value.oauthSettings;
      this._reauthSettings.internalValue = value.reauthSettings;
      this._workforceIdentitySettings.internalValue = value.workforceIdentitySettings;
    }
  }

  // identity_sources - computed: false, optional: true, required: false
  private _identitySources?: string[]; 
  public get identitySources() {
    return this.getListAttribute('identity_sources');
  }
  public set identitySources(value: string[]) {
    this._identitySources = value;
  }
  public resetIdentitySources() {
    this._identitySources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySourcesInput() {
    return this._identitySources;
  }

  // allowed_domains_settings - computed: false, optional: true, required: false
  private _allowedDomainsSettings = new GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(this, "allowed_domains_settings");
  public get allowedDomainsSettings() {
    return this._allowedDomainsSettings;
  }
  public putAllowedDomainsSettings(value: GoogleIapSettingsAccessSettingsAllowedDomainsSettings) {
    this._allowedDomainsSettings.internalValue = value;
  }
  public resetAllowedDomainsSettings() {
    this._allowedDomainsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsSettingsInput() {
    return this._allowedDomainsSettings.internalValue;
  }

  // cors_settings - computed: false, optional: true, required: false
  private _corsSettings = new GoogleIapSettingsAccessSettingsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }
  public putCorsSettings(value: GoogleIapSettingsAccessSettingsCorsSettings) {
    this._corsSettings.internalValue = value;
  }
  public resetCorsSettings() {
    this._corsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsSettingsInput() {
    return this._corsSettings.internalValue;
  }

  // gcip_settings - computed: false, optional: true, required: false
  private _gcipSettings = new GoogleIapSettingsAccessSettingsGcipSettingsOutputReference(this, "gcip_settings");
  public get gcipSettings() {
    return this._gcipSettings;
  }
  public putGcipSettings(value: GoogleIapSettingsAccessSettingsGcipSettings) {
    this._gcipSettings.internalValue = value;
  }
  public resetGcipSettings() {
    this._gcipSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcipSettingsInput() {
    return this._gcipSettings.internalValue;
  }

  // oauth_settings - computed: false, optional: true, required: false
  private _oauthSettings = new GoogleIapSettingsAccessSettingsOauthSettingsOutputReference(this, "oauth_settings");
  public get oauthSettings() {
    return this._oauthSettings;
  }
  public putOauthSettings(value: GoogleIapSettingsAccessSettingsOauthSettings) {
    this._oauthSettings.internalValue = value;
  }
  public resetOauthSettings() {
    this._oauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthSettingsInput() {
    return this._oauthSettings.internalValue;
  }

  // reauth_settings - computed: false, optional: true, required: false
  private _reauthSettings = new GoogleIapSettingsAccessSettingsReauthSettingsOutputReference(this, "reauth_settings");
  public get reauthSettings() {
    return this._reauthSettings;
  }
  public putReauthSettings(value: GoogleIapSettingsAccessSettingsReauthSettings) {
    this._reauthSettings.internalValue = value;
  }
  public resetReauthSettings() {
    this._reauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthSettingsInput() {
    return this._reauthSettings.internalValue;
  }

  // workforce_identity_settings - computed: false, optional: true, required: false
  private _workforceIdentitySettings = new GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(this, "workforce_identity_settings");
  public get workforceIdentitySettings() {
    return this._workforceIdentitySettings;
  }
  public putWorkforceIdentitySettings(value: GoogleIapSettingsAccessSettingsWorkforceIdentitySettings) {
    this._workforceIdentitySettings.internalValue = value;
  }
  public resetWorkforceIdentitySettings() {
    this._workforceIdentitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceIdentitySettingsInput() {
    return this._workforceIdentitySettings.internalValue;
  }
}
export interface GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings {
  /**
  * The URI to be redirected to when access is denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#access_denied_page_uri GoogleIapSettings#access_denied_page_uri}
  */
  readonly accessDeniedPageUri?: string;
  /**
  * Whether to generate a troubleshooting URL on access denied events to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#generate_troubleshooting_uri GoogleIapSettings#generate_troubleshooting_uri}
  */
  readonly generateTroubleshootingUri?: boolean | cdktf.IResolvable;
  /**
  * Whether to generate remediation token on access denied events to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#remediation_token_generation_enabled GoogleIapSettings#remediation_token_generation_enabled}
  */
  readonly remediationTokenGenerationEnabled?: boolean | cdktf.IResolvable;
}

export function googleIapSettingsApplicationSettingsAccessDeniedPageSettingsToTerraform(struct?: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference | GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_denied_page_uri: cdktf.stringToTerraform(struct!.accessDeniedPageUri),
    generate_troubleshooting_uri: cdktf.booleanToTerraform(struct!.generateTroubleshootingUri),
    remediation_token_generation_enabled: cdktf.booleanToTerraform(struct!.remediationTokenGenerationEnabled),
  }
}


export function googleIapSettingsApplicationSettingsAccessDeniedPageSettingsToHclTerraform(struct?: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference | GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_denied_page_uri: {
      value: cdktf.stringToHclTerraform(struct!.accessDeniedPageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_troubleshooting_uri: {
      value: cdktf.booleanToHclTerraform(struct!.generateTroubleshootingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remediation_token_generation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.remediationTokenGenerationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessDeniedPageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDeniedPageUri = this._accessDeniedPageUri;
    }
    if (this._generateTroubleshootingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateTroubleshootingUri = this._generateTroubleshootingUri;
    }
    if (this._remediationTokenGenerationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTokenGenerationEnabled = this._remediationTokenGenerationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessDeniedPageUri = undefined;
      this._generateTroubleshootingUri = undefined;
      this._remediationTokenGenerationEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessDeniedPageUri = value.accessDeniedPageUri;
      this._generateTroubleshootingUri = value.generateTroubleshootingUri;
      this._remediationTokenGenerationEnabled = value.remediationTokenGenerationEnabled;
    }
  }

  // access_denied_page_uri - computed: false, optional: true, required: false
  private _accessDeniedPageUri?: string; 
  public get accessDeniedPageUri() {
    return this.getStringAttribute('access_denied_page_uri');
  }
  public set accessDeniedPageUri(value: string) {
    this._accessDeniedPageUri = value;
  }
  public resetAccessDeniedPageUri() {
    this._accessDeniedPageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDeniedPageUriInput() {
    return this._accessDeniedPageUri;
  }

  // generate_troubleshooting_uri - computed: false, optional: true, required: false
  private _generateTroubleshootingUri?: boolean | cdktf.IResolvable; 
  public get generateTroubleshootingUri() {
    return this.getBooleanAttribute('generate_troubleshooting_uri');
  }
  public set generateTroubleshootingUri(value: boolean | cdktf.IResolvable) {
    this._generateTroubleshootingUri = value;
  }
  public resetGenerateTroubleshootingUri() {
    this._generateTroubleshootingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateTroubleshootingUriInput() {
    return this._generateTroubleshootingUri;
  }

  // remediation_token_generation_enabled - computed: false, optional: true, required: false
  private _remediationTokenGenerationEnabled?: boolean | cdktf.IResolvable; 
  public get remediationTokenGenerationEnabled() {
    return this.getBooleanAttribute('remediation_token_generation_enabled');
  }
  public set remediationTokenGenerationEnabled(value: boolean | cdktf.IResolvable) {
    this._remediationTokenGenerationEnabled = value;
  }
  public resetRemediationTokenGenerationEnabled() {
    this._remediationTokenGenerationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTokenGenerationEnabledInput() {
    return this._remediationTokenGenerationEnabled;
  }
}
export interface GoogleIapSettingsApplicationSettingsAttributePropagationSettings {
  /**
  * Whether the provided attribute propagation settings should be evaluated on user requests.
  * If set to true, attributes returned from the expression will be propagated in the set output credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can
  * be selected. Expressions can select different attribute types from attributes:
  * attributes.saml_attributes, attributes.iap_attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#expression GoogleIapSettings#expression}
  */
  readonly expression?: string;
  /**
  * Which output credentials attributes selected by the CEL expression should be propagated in.
  * All attributes will be fully duplicated in each selected output credential.
  * Possible values are:
  * 
  * * 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
  * * 'JWT': Propagate attributes in the JWT of the form:
  *          "additional_claims": { "my_attribute": ["value1", "value2"] }
  * * 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  *              additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#output_credentials GoogleIapSettings#output_credentials}
  */
  readonly outputCredentials?: string[];
}

export function googleIapSettingsApplicationSettingsAttributePropagationSettingsToTerraform(struct?: GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference | GoogleIapSettingsApplicationSettingsAttributePropagationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    expression: cdktf.stringToTerraform(struct!.expression),
    output_credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputCredentials),
  }
}


export function googleIapSettingsApplicationSettingsAttributePropagationSettingsToHclTerraform(struct?: GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference | GoogleIapSettingsApplicationSettingsAttributePropagationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_credentials: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputCredentials),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsApplicationSettingsAttributePropagationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._outputCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputCredentials = this._outputCredentials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsApplicationSettingsAttributePropagationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._expression = undefined;
      this._outputCredentials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._expression = value.expression;
      this._outputCredentials = value.outputCredentials;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // output_credentials - computed: false, optional: true, required: false
  private _outputCredentials?: string[]; 
  public get outputCredentials() {
    return this.getListAttribute('output_credentials');
  }
  public set outputCredentials(value: string[]) {
    this._outputCredentials = value;
  }
  public resetOutputCredentials() {
    this._outputCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCredentialsInput() {
    return this._outputCredentials;
  }
}
export interface GoogleIapSettingsApplicationSettingsCsmSettings {
  /**
  * Audience claim set in the generated RCToken. This value is not validated by IAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#rctoken_aud GoogleIapSettings#rctoken_aud}
  */
  readonly rctokenAud?: string;
}

export function googleIapSettingsApplicationSettingsCsmSettingsToTerraform(struct?: GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference | GoogleIapSettingsApplicationSettingsCsmSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rctoken_aud: cdktf.stringToTerraform(struct!.rctokenAud),
  }
}


export function googleIapSettingsApplicationSettingsCsmSettingsToHclTerraform(struct?: GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference | GoogleIapSettingsApplicationSettingsCsmSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rctoken_aud: {
      value: cdktf.stringToHclTerraform(struct!.rctokenAud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsApplicationSettingsCsmSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rctokenAud !== undefined) {
      hasAnyValues = true;
      internalValueResult.rctokenAud = this._rctokenAud;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsApplicationSettingsCsmSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rctokenAud = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rctokenAud = value.rctokenAud;
    }
  }

  // rctoken_aud - computed: false, optional: true, required: false
  private _rctokenAud?: string; 
  public get rctokenAud() {
    return this.getStringAttribute('rctoken_aud');
  }
  public set rctokenAud(value: string) {
    this._rctokenAud = value;
  }
  public resetRctokenAud() {
    this._rctokenAud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rctokenAudInput() {
    return this._rctokenAud;
  }
}
export interface GoogleIapSettingsApplicationSettings {
  /**
  * The Domain value to set for cookies generated by IAP. This value is not validated by the API,
  * but will be ignored at runtime if invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#cookie_domain GoogleIapSettings#cookie_domain}
  */
  readonly cookieDomain?: string;
  /**
  * access_denied_page_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#access_denied_page_settings GoogleIapSettings#access_denied_page_settings}
  */
  readonly accessDeniedPageSettings?: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings;
  /**
  * attribute_propagation_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#attribute_propagation_settings GoogleIapSettings#attribute_propagation_settings}
  */
  readonly attributePropagationSettings?: GoogleIapSettingsApplicationSettingsAttributePropagationSettings;
  /**
  * csm_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#csm_settings GoogleIapSettings#csm_settings}
  */
  readonly csmSettings?: GoogleIapSettingsApplicationSettingsCsmSettings;
}

export function googleIapSettingsApplicationSettingsToTerraform(struct?: GoogleIapSettingsApplicationSettingsOutputReference | GoogleIapSettingsApplicationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_domain: cdktf.stringToTerraform(struct!.cookieDomain),
    access_denied_page_settings: googleIapSettingsApplicationSettingsAccessDeniedPageSettingsToTerraform(struct!.accessDeniedPageSettings),
    attribute_propagation_settings: googleIapSettingsApplicationSettingsAttributePropagationSettingsToTerraform(struct!.attributePropagationSettings),
    csm_settings: googleIapSettingsApplicationSettingsCsmSettingsToTerraform(struct!.csmSettings),
  }
}


export function googleIapSettingsApplicationSettingsToHclTerraform(struct?: GoogleIapSettingsApplicationSettingsOutputReference | GoogleIapSettingsApplicationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.cookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_denied_page_settings: {
      value: googleIapSettingsApplicationSettingsAccessDeniedPageSettingsToHclTerraform(struct!.accessDeniedPageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsList",
    },
    attribute_propagation_settings: {
      value: googleIapSettingsApplicationSettingsAttributePropagationSettingsToHclTerraform(struct!.attributePropagationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsApplicationSettingsAttributePropagationSettingsList",
    },
    csm_settings: {
      value: googleIapSettingsApplicationSettingsCsmSettingsToHclTerraform(struct!.csmSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleIapSettingsApplicationSettingsCsmSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleIapSettingsApplicationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIapSettingsApplicationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieDomain = this._cookieDomain;
    }
    if (this._accessDeniedPageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDeniedPageSettings = this._accessDeniedPageSettings?.internalValue;
    }
    if (this._attributePropagationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePropagationSettings = this._attributePropagationSettings?.internalValue;
    }
    if (this._csmSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csmSettings = this._csmSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIapSettingsApplicationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieDomain = undefined;
      this._accessDeniedPageSettings.internalValue = undefined;
      this._attributePropagationSettings.internalValue = undefined;
      this._csmSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieDomain = value.cookieDomain;
      this._accessDeniedPageSettings.internalValue = value.accessDeniedPageSettings;
      this._attributePropagationSettings.internalValue = value.attributePropagationSettings;
      this._csmSettings.internalValue = value.csmSettings;
    }
  }

  // cookie_domain - computed: false, optional: true, required: false
  private _cookieDomain?: string; 
  public get cookieDomain() {
    return this.getStringAttribute('cookie_domain');
  }
  public set cookieDomain(value: string) {
    this._cookieDomain = value;
  }
  public resetCookieDomain() {
    this._cookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainInput() {
    return this._cookieDomain;
  }

  // access_denied_page_settings - computed: false, optional: true, required: false
  private _accessDeniedPageSettings = new GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(this, "access_denied_page_settings");
  public get accessDeniedPageSettings() {
    return this._accessDeniedPageSettings;
  }
  public putAccessDeniedPageSettings(value: GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings) {
    this._accessDeniedPageSettings.internalValue = value;
  }
  public resetAccessDeniedPageSettings() {
    this._accessDeniedPageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDeniedPageSettingsInput() {
    return this._accessDeniedPageSettings.internalValue;
  }

  // attribute_propagation_settings - computed: false, optional: true, required: false
  private _attributePropagationSettings = new GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(this, "attribute_propagation_settings");
  public get attributePropagationSettings() {
    return this._attributePropagationSettings;
  }
  public putAttributePropagationSettings(value: GoogleIapSettingsApplicationSettingsAttributePropagationSettings) {
    this._attributePropagationSettings.internalValue = value;
  }
  public resetAttributePropagationSettings() {
    this._attributePropagationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePropagationSettingsInput() {
    return this._attributePropagationSettings.internalValue;
  }

  // csm_settings - computed: false, optional: true, required: false
  private _csmSettings = new GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference(this, "csm_settings");
  public get csmSettings() {
    return this._csmSettings;
  }
  public putCsmSettings(value: GoogleIapSettingsApplicationSettingsCsmSettings) {
    this._csmSettings.internalValue = value;
  }
  public resetCsmSettings() {
    this._csmSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csmSettingsInput() {
    return this._csmSettings.internalValue;
  }
}
export interface GoogleIapSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#create GoogleIapSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#update GoogleIapSettings#update}
  */
  readonly update?: string;
}

export function googleIapSettingsTimeoutsToTerraform(struct?: GoogleIapSettingsTimeouts | cdktf.IResolvable): any {
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


export function googleIapSettingsTimeoutsToHclTerraform(struct?: GoogleIapSettingsTimeouts | cdktf.IResolvable): any {
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

export class GoogleIapSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleIapSettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleIapSettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings google_iap_settings}
*/
export class GoogleIapSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iap_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleIapSettings to import
  * @param importFromId The id of the existing GoogleIapSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleIapSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iap_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_iap_settings google_iap_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIapSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleIapSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_settings',
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
    this._id = config.id;
    this._name = config.name;
    this._accessSettings.internalValue = config.accessSettings;
    this._applicationSettings.internalValue = config.applicationSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // access_settings - computed: false, optional: true, required: false
  private _accessSettings = new GoogleIapSettingsAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }
  public putAccessSettings(value: GoogleIapSettingsAccessSettings) {
    this._accessSettings.internalValue = value;
  }
  public resetAccessSettings() {
    this._accessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSettingsInput() {
    return this._accessSettings.internalValue;
  }

  // application_settings - computed: false, optional: true, required: false
  private _applicationSettings = new GoogleIapSettingsApplicationSettingsOutputReference(this, "application_settings");
  public get applicationSettings() {
    return this._applicationSettings;
  }
  public putApplicationSettings(value: GoogleIapSettingsApplicationSettings) {
    this._applicationSettings.internalValue = value;
  }
  public resetApplicationSettings() {
    this._applicationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSettingsInput() {
    return this._applicationSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIapSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIapSettingsTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      access_settings: googleIapSettingsAccessSettingsToTerraform(this._accessSettings.internalValue),
      application_settings: googleIapSettingsApplicationSettingsToTerraform(this._applicationSettings.internalValue),
      timeouts: googleIapSettingsTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_settings: {
        value: googleIapSettingsAccessSettingsToHclTerraform(this._accessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIapSettingsAccessSettingsList",
      },
      application_settings: {
        value: googleIapSettingsApplicationSettingsToHclTerraform(this._applicationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleIapSettingsApplicationSettingsList",
      },
      timeouts: {
        value: googleIapSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleIapSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
