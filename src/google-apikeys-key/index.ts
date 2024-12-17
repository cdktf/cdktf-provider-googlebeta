// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleApikeysKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable display name of this API key. Modifiable by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#display_name GoogleApikeysKey#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#id GoogleApikeysKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#name GoogleApikeysKey#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#project GoogleApikeysKey#project}
  */
  readonly project?: string;
  /**
  * restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#restrictions GoogleApikeysKey#restrictions}
  */
  readonly restrictions?: GoogleApikeysKeyRestrictions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#timeouts GoogleApikeysKey#timeouts}
  */
  readonly timeouts?: GoogleApikeysKeyTimeouts;
}
export interface GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications {
  /**
  * The package name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#package_name GoogleApikeysKey#package_name}
  */
  readonly packageName: string;
  /**
  * The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#sha1_fingerprint GoogleApikeysKey#sha1_fingerprint}
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


export function googleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsToHclTerraform(struct?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha1_fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.sha1Fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._sha1Fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Fingerprint = this._sha1Fingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packageName = undefined;
      this._sha1Fingerprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packageName = value.packageName;
      this._sha1Fingerprint = value.sha1Fingerprint;
    }
  }

  // package_name - computed: false, optional: false, required: true
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // sha1_fingerprint - computed: false, optional: false, required: true
  private _sha1Fingerprint?: string; 
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }
  public set sha1Fingerprint(value: string) {
    this._sha1Fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1FingerprintInput() {
    return this._sha1Fingerprint;
  }
}

export class GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList extends cdktf.ComplexList {
  public internalValue? : GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[] | cdktf.IResolvable

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
  public get(index: number): GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference {
    return new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApikeysKeyRestrictionsAndroidKeyRestrictions {
  /**
  * allowed_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#allowed_applications GoogleApikeysKey#allowed_applications}
  */
  readonly allowedApplications: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[] | cdktf.IResolvable;
}

export function googleApikeysKeyRestrictionsAndroidKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsAndroidKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_applications: cdktf.listMapper(googleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsToTerraform, true)(struct!.allowedApplications),
  }
}


export function googleApikeysKeyRestrictionsAndroidKeyRestrictionsToHclTerraform(struct?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsAndroidKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_applications: {
      value: cdktf.listMapperHcl(googleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsToHclTerraform, true)(struct!.allowedApplications),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._allowedApplications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedApplications = this._allowedApplications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictionsAndroidKeyRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedApplications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedApplications.internalValue = value.allowedApplications;
    }
  }

  // allowed_applications - computed: false, optional: false, required: true
  private _allowedApplications = new GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList(this, "allowed_applications", false);
  public get allowedApplications() {
    return this._allowedApplications;
  }
  public putAllowedApplications(value: GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications[] | cdktf.IResolvable) {
    this._allowedApplications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedApplicationsInput() {
    return this._allowedApplications.internalValue;
  }
}
export interface GoogleApikeysKeyRestrictionsApiTargets {
  /**
  * Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#methods GoogleApikeysKey#methods}
  */
  readonly methods?: string[];
  /**
  * The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#service GoogleApikeysKey#service}
  */
  readonly service: string;
}

export function googleApikeysKeyRestrictionsApiTargetsToTerraform(struct?: GoogleApikeysKeyRestrictionsApiTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleApikeysKeyRestrictionsApiTargetsToHclTerraform(struct?: GoogleApikeysKeyRestrictionsApiTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class GoogleApikeysKeyRestrictionsApiTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleApikeysKeyRestrictionsApiTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleApikeysKeyRestrictionsApiTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._service = value.service;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
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

export class GoogleApikeysKeyRestrictionsApiTargetsList extends cdktf.ComplexList {
  public internalValue? : GoogleApikeysKeyRestrictionsApiTargets[] | cdktf.IResolvable

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
  public get(index: number): GoogleApikeysKeyRestrictionsApiTargetsOutputReference {
    return new GoogleApikeysKeyRestrictionsApiTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleApikeysKeyRestrictionsBrowserKeyRestrictions {
  /**
  * A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#allowed_referrers GoogleApikeysKey#allowed_referrers}
  */
  readonly allowedReferrers: string[];
}

export function googleApikeysKeyRestrictionsBrowserKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsBrowserKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_referrers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedReferrers),
  }
}


export function googleApikeysKeyRestrictionsBrowserKeyRestrictionsToHclTerraform(struct?: GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsBrowserKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_referrers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedReferrers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#allowed_bundle_ids GoogleApikeysKey#allowed_bundle_ids}
  */
  readonly allowedBundleIds: string[];
}

export function googleApikeysKeyRestrictionsIosKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsIosKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_bundle_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedBundleIds),
  }
}


export function googleApikeysKeyRestrictionsIosKeyRestrictionsToHclTerraform(struct?: GoogleApikeysKeyRestrictionsIosKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsIosKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_bundle_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedBundleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#allowed_ips GoogleApikeysKey#allowed_ips}
  */
  readonly allowedIps: string[];
}

export function googleApikeysKeyRestrictionsServerKeyRestrictionsToTerraform(struct?: GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsServerKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIps),
  }
}


export function googleApikeysKeyRestrictionsServerKeyRestrictionsToHclTerraform(struct?: GoogleApikeysKeyRestrictionsServerKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictionsServerKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#android_key_restrictions GoogleApikeysKey#android_key_restrictions}
  */
  readonly androidKeyRestrictions?: GoogleApikeysKeyRestrictionsAndroidKeyRestrictions;
  /**
  * api_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#api_targets GoogleApikeysKey#api_targets}
  */
  readonly apiTargets?: GoogleApikeysKeyRestrictionsApiTargets[] | cdktf.IResolvable;
  /**
  * browser_key_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#browser_key_restrictions GoogleApikeysKey#browser_key_restrictions}
  */
  readonly browserKeyRestrictions?: GoogleApikeysKeyRestrictionsBrowserKeyRestrictions;
  /**
  * ios_key_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#ios_key_restrictions GoogleApikeysKey#ios_key_restrictions}
  */
  readonly iosKeyRestrictions?: GoogleApikeysKeyRestrictionsIosKeyRestrictions;
  /**
  * server_key_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#server_key_restrictions GoogleApikeysKey#server_key_restrictions}
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
    api_targets: cdktf.listMapper(googleApikeysKeyRestrictionsApiTargetsToTerraform, true)(struct!.apiTargets),
    browser_key_restrictions: googleApikeysKeyRestrictionsBrowserKeyRestrictionsToTerraform(struct!.browserKeyRestrictions),
    ios_key_restrictions: googleApikeysKeyRestrictionsIosKeyRestrictionsToTerraform(struct!.iosKeyRestrictions),
    server_key_restrictions: googleApikeysKeyRestrictionsServerKeyRestrictionsToTerraform(struct!.serverKeyRestrictions),
  }
}


export function googleApikeysKeyRestrictionsToHclTerraform(struct?: GoogleApikeysKeyRestrictionsOutputReference | GoogleApikeysKeyRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    android_key_restrictions: {
      value: googleApikeysKeyRestrictionsAndroidKeyRestrictionsToHclTerraform(struct!.androidKeyRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApikeysKeyRestrictionsAndroidKeyRestrictionsList",
    },
    api_targets: {
      value: cdktf.listMapperHcl(googleApikeysKeyRestrictionsApiTargetsToHclTerraform, true)(struct!.apiTargets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApikeysKeyRestrictionsApiTargetsList",
    },
    browser_key_restrictions: {
      value: googleApikeysKeyRestrictionsBrowserKeyRestrictionsToHclTerraform(struct!.browserKeyRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApikeysKeyRestrictionsBrowserKeyRestrictionsList",
    },
    ios_key_restrictions: {
      value: googleApikeysKeyRestrictionsIosKeyRestrictionsToHclTerraform(struct!.iosKeyRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApikeysKeyRestrictionsIosKeyRestrictionsList",
    },
    server_key_restrictions: {
      value: googleApikeysKeyRestrictionsServerKeyRestrictionsToHclTerraform(struct!.serverKeyRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleApikeysKeyRestrictionsServerKeyRestrictionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._apiTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTargets = this._apiTargets?.internalValue;
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
      this._apiTargets.internalValue = undefined;
      this._browserKeyRestrictions.internalValue = undefined;
      this._iosKeyRestrictions.internalValue = undefined;
      this._serverKeyRestrictions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._androidKeyRestrictions.internalValue = value.androidKeyRestrictions;
      this._apiTargets.internalValue = value.apiTargets;
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
  private _apiTargets = new GoogleApikeysKeyRestrictionsApiTargetsList(this, "api_targets", false);
  public get apiTargets() {
    return this._apiTargets;
  }
  public putApiTargets(value: GoogleApikeysKeyRestrictionsApiTargets[] | cdktf.IResolvable) {
    this._apiTargets.internalValue = value;
  }
  public resetApiTargets() {
    this._apiTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTargetsInput() {
    return this._apiTargets.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#create GoogleApikeysKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#delete GoogleApikeysKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#update GoogleApikeysKey#update}
  */
  readonly update?: string;
}

export function googleApikeysKeyTimeoutsToTerraform(struct?: GoogleApikeysKeyTimeouts | cdktf.IResolvable): any {
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


export function googleApikeysKeyTimeoutsToHclTerraform(struct?: GoogleApikeysKeyTimeouts | cdktf.IResolvable): any {
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

export class GoogleApikeysKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleApikeysKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleApikeysKeyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key google_apikeys_key}
*/
export class GoogleApikeysKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apikeys_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleApikeysKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleApikeysKey to import
  * @param importFromId The id of the existing GoogleApikeysKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleApikeysKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apikeys_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_apikeys_key google_apikeys_key} Resource
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
        providerVersion: '6.14.0',
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      restrictions: googleApikeysKeyRestrictionsToTerraform(this._restrictions.internalValue),
      timeouts: googleApikeysKeyTimeoutsToTerraform(this._timeouts.internalValue),
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
      restrictions: {
        value: googleApikeysKeyRestrictionsToHclTerraform(this._restrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleApikeysKeyRestrictionsList",
      },
      timeouts: {
        value: googleApikeysKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleApikeysKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
