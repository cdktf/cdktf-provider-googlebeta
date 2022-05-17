// https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApikeysKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable display name of this API key. Modifiable by user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#display_name GoogleApikeysKey#display_name}
  */
  readonly displayName?: string;
  /**
  * The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#name GoogleApikeysKey#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#project GoogleApikeysKey#project}
  */
  readonly project?: string;
  /**
  * restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#restrictions GoogleApikeysKey#restrictions}
  */
  readonly restrictions?: GoogleApikeysKeyRestrictions;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#timeouts GoogleApikeysKey#timeouts}
  */
  readonly timeouts?: GoogleApikeysKeyTimeouts;
}
export interface GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications {
  /**
  * The package name of the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#package_name GoogleApikeysKey#package_name}
  */
  readonly packageName: string;
  /**
  * The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#sha1_fingerprint GoogleApikeysKey#sha1_fingerprint}
  */
  readonly sha1Fingerprint: string;
}

export function googleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsToTerraform(struct?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_name: cdktf.stringToTerraform(struct!.packageName),
    sha1_fingerprint: cdktf.stringToTerraform(struct!.sha1Fingerprint),
  }
}

export interface GoogleApikeysKeyRestrictionsAndroidKeyRestrictions {
  /**
  * allowed_applications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#allowed_applications GoogleApikeysKey#allowed_applications}
  */
  readonly allowedApplications: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[] | cdktf.IResolvable;
}

export function googleApikeysKeyRestrictionsAndroidKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsAndroidKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_applications: cdktf.listMapper(googleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsToTerraform)(struct!.allowedApplications),
  }
}

export class GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApikeysKeyRestrictionsAndroidKeyRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedApplications !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedApplications = this._allowedApplications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictionsAndroidKeyRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedApplications = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedApplications = value.allowedApplications;
    }
  }

  // allowed_applications - computed: false, optional: false, required: true
  private _allowedApplications?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[] | cdktf.IResolvable; 
  public get allowedApplications() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_applications');
  }
  public set allowedApplications(value: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[] | cdktf.IResolvable) {
    this._allowedApplications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedApplicationsInput() {
    return this._allowedApplications;
  }
}
export interface GoogleApikeysKeyRestrictionsApiTargets {
  /**
  * Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#methods GoogleApikeysKey#methods}
  */
  readonly methods?: string[];
  /**
  * The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#service GoogleApikeysKey#service}
  */
  readonly service: string;
}

export function googleApikeysKeyRestrictionsApiTargetsToTerraform(struct?: GoogleApikeysKeyRestrictionsApiTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.methods),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export interface GoogleApikeysKeyRestrictionsBrowserKeyRestrictions {
  /**
  * A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#allowed_referrers GoogleApikeysKey#allowed_referrers}
  */
  readonly allowedReferrers: string[];
}

export function googleApikeysKeyRestrictionsBrowserKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsBrowserKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_referrers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedReferrers),
  }
}

export class GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApikeysKeyRestrictionsBrowserKeyRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedReferrers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedReferrers = this._allowedReferrers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictionsBrowserKeyRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedReferrers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedReferrers = value.allowedReferrers;
    }
  }

  // allowed_referrers - computed: false, optional: false, required: true
  private _allowedReferrers?: string[]; 
  public get allowedReferrers() {
    return this.getListAttribute('allowed_referrers');
  }
  public set allowedReferrers(value: string[]) {
    this._allowedReferrers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedReferrersInput() {
    return this._allowedReferrers;
  }
}
export interface GoogleApikeysKeyRestrictionsIosKeyRestrictions {
  /**
  * A list of bundle IDs that are allowed when making API calls with this key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#allowed_bundle_ids GoogleApikeysKey#allowed_bundle_ids}
  */
  readonly allowedBundleIds: string[];
}

export function googleApikeysKeyRestrictionsIosKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsIosKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_bundle_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedBundleIds),
  }
}

export class GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApikeysKeyRestrictionsIosKeyRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedBundleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedBundleIds = this._allowedBundleIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictionsIosKeyRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedBundleIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedBundleIds = value.allowedBundleIds;
    }
  }

  // allowed_bundle_ids - computed: false, optional: false, required: true
  private _allowedBundleIds?: string[]; 
  public get allowedBundleIds() {
    return this.getListAttribute('allowed_bundle_ids');
  }
  public set allowedBundleIds(value: string[]) {
    this._allowedBundleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedBundleIdsInput() {
    return this._allowedBundleIds;
  }
}
export interface GoogleApikeysKeyRestrictionsServerKeyRestrictions {
  /**
  * A list of the caller IP addresses that are allowed to make API calls with this key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#allowed_ips GoogleApikeysKey#allowed_ips}
  */
  readonly allowedIps: string[];
}

export function googleApikeysKeyRestrictionsServerKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsServerKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedIps),
  }
}

export class GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApikeysKeyRestrictionsServerKeyRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIps = this._allowedIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictionsServerKeyRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIps = value.allowedIps;
    }
  }

  // allowed_ips - computed: false, optional: false, required: true
  private _allowedIps?: string[]; 
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[]) {
    this._allowedIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }
}
export interface GoogleApikeysKeyRestrictions {
  /**
  * android_key_restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#android_key_restrictions GoogleApikeysKey#android_key_restrictions}
  */
  readonly androidKeyRestrictions?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictions;
  /**
  * api_targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#api_targets GoogleApikeysKey#api_targets}
  */
  readonly apiTargets?: GoogleApikeysKeyRestrictionsApiTargets[] | cdktf.IResolvable;
  /**
  * browser_key_restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#browser_key_restrictions GoogleApikeysKey#browser_key_restrictions}
  */
  readonly browserKeyRestrictions?: GoogleApikeysKeyRestrictionsBrowserKeyRestrictions;
  /**
  * ios_key_restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#ios_key_restrictions GoogleApikeysKey#ios_key_restrictions}
  */
  readonly iosKeyRestrictions?: GoogleApikeysKeyRestrictionsIosKeyRestrictions;
  /**
  * server_key_restrictions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#server_key_restrictions GoogleApikeysKey#server_key_restrictions}
  */
  readonly serverKeyRestrictions?: GoogleApikeysKeyRestrictionsServerKeyRestrictions;
}

export function googleApikeysKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    android_key_restrictions: googleApikeysKeyRestrictionsAndroidKeyRestrictionsToTerraform(struct!.androidKeyRestrictions),
    api_targets: cdktf.listMapper(googleApikeysKeyRestrictionsApiTargetsToTerraform)(struct!.apiTargets),
    browser_key_restrictions: googleApikeysKeyRestrictionsBrowserKeyRestrictionsToTerraform(struct!.browserKeyRestrictions),
    ios_key_restrictions: googleApikeysKeyRestrictionsIosKeyRestrictionsToTerraform(struct!.iosKeyRestrictions),
    server_key_restrictions: googleApikeysKeyRestrictionsServerKeyRestrictionsToTerraform(struct!.serverKeyRestrictions),
  }
}

export class GoogleApikeysKeyRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApikeysKeyRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._androidKeyRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.androidKeyRestrictions = this._androidKeyRestrictions?.internalValue;
    }
    if (this._apiTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTargets = this._apiTargets;
    }
    if (this._browserKeyRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserKeyRestrictions = this._browserKeyRestrictions?.internalValue;
    }
    if (this._iosKeyRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iosKeyRestrictions = this._iosKeyRestrictions?.internalValue;
    }
    if (this._serverKeyRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeyRestrictions = this._serverKeyRestrictions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._androidKeyRestrictions.internalValue = undefined;
      this._apiTargets = undefined;
      this._browserKeyRestrictions.internalValue = undefined;
      this._iosKeyRestrictions.internalValue = undefined;
      this._serverKeyRestrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._androidKeyRestrictions.internalValue = value.androidKeyRestrictions;
      this._apiTargets = value.apiTargets;
      this._browserKeyRestrictions.internalValue = value.browserKeyRestrictions;
      this._iosKeyRestrictions.internalValue = value.iosKeyRestrictions;
      this._serverKeyRestrictions.internalValue = value.serverKeyRestrictions;
    }
  }

  // android_key_restrictions - computed: false, optional: true, required: false
  private _androidKeyRestrictions = new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference(this, "android_key_restrictions");
  public get androidKeyRestrictions() {
    return this._androidKeyRestrictions;
  }
  public putAndroidKeyRestrictions(value: GoogleApikeysKeyRestrictionsAndroidKeyRestrictions) {
    this._androidKeyRestrictions.internalValue = value;
  }
  public resetAndroidKeyRestrictions() {
    this._androidKeyRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidKeyRestrictionsInput() {
    return this._androidKeyRestrictions.internalValue;
  }

  // api_targets - computed: false, optional: true, required: false
  private _apiTargets?: GoogleApikeysKeyRestrictionsApiTargets[] | cdktf.IResolvable; 
  public get apiTargets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('api_targets');
  }
  public set apiTargets(value: GoogleApikeysKeyRestrictionsApiTargets[] | cdktf.IResolvable) {
    this._apiTargets = value;
  }
  public resetApiTargets() {
    this._apiTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTargetsInput() {
    return this._apiTargets;
  }

  // browser_key_restrictions - computed: false, optional: true, required: false
  private _browserKeyRestrictions = new GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference(this, "browser_key_restrictions");
  public get browserKeyRestrictions() {
    return this._browserKeyRestrictions;
  }
  public putBrowserKeyRestrictions(value: GoogleApikeysKeyRestrictionsBrowserKeyRestrictions) {
    this._browserKeyRestrictions.internalValue = value;
  }
  public resetBrowserKeyRestrictions() {
    this._browserKeyRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserKeyRestrictionsInput() {
    return this._browserKeyRestrictions.internalValue;
  }

  // ios_key_restrictions - computed: false, optional: true, required: false
  private _iosKeyRestrictions = new GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference(this, "ios_key_restrictions");
  public get iosKeyRestrictions() {
    return this._iosKeyRestrictions;
  }
  public putIosKeyRestrictions(value: GoogleApikeysKeyRestrictionsIosKeyRestrictions) {
    this._iosKeyRestrictions.internalValue = value;
  }
  public resetIosKeyRestrictions() {
    this._iosKeyRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosKeyRestrictionsInput() {
    return this._iosKeyRestrictions.internalValue;
  }

  // server_key_restrictions - computed: false, optional: true, required: false
  private _serverKeyRestrictions = new GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference(this, "server_key_restrictions");
  public get serverKeyRestrictions() {
    return this._serverKeyRestrictions;
  }
  public putServerKeyRestrictions(value: GoogleApikeysKeyRestrictionsServerKeyRestrictions) {
    this._serverKeyRestrictions.internalValue = value;
  }
  public resetServerKeyRestrictions() {
    this._serverKeyRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyRestrictionsInput() {
    return this._serverKeyRestrictions.internalValue;
  }
}
export interface GoogleApikeysKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#create GoogleApikeysKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#delete GoogleApikeysKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key#update GoogleApikeysKey#update}
  */
  readonly update?: string;
}

export function googleApikeysKeyTimeoutsToTerraform(struct?: GoogleApikeysKeyTimeoutsOutputReference | GoogleApikeysKeyTimeouts | cdktf.IResolvable): any {
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

export class GoogleApikeysKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleApikeysKeyTimeouts | undefined {
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

  public set internalValue(value: GoogleApikeysKeyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key google_apikeys_key}
*/
export class GoogleApikeysKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apikeys_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_apikeys_key google_apikeys_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleApikeysKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleApikeysKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apikeys_key',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._name = config.name;
    this._project = config.project;
    this._restrictions.internalValue = config.restrictions;
    this._timeouts.internalValue = config.timeouts;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_string - computed: true, optional: false, required: false
  public get keyString() {
    return this.getStringAttribute('key_string');
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

  // restrictions - computed: false, optional: true, required: false
  private _restrictions = new GoogleApikeysKeyRestrictionsOutputReference(this, "restrictions");
  public get restrictions() {
    return this._restrictions;
  }
  public putRestrictions(value: GoogleApikeysKeyRestrictions) {
    this._restrictions.internalValue = value;
  }
  public resetRestrictions() {
    this._restrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleApikeysKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleApikeysKeyTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      restrictions: googleApikeysKeyRestrictionsToTerraform(this._restrictions.internalValue),
      timeouts: googleApikeysKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
