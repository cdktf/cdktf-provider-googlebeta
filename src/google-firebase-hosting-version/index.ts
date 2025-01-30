// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseHostingVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. The ID of the site in which to create this Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#site_id GoogleFirebaseHostingVersion#site_id}
  */
  readonly siteId: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#config GoogleFirebaseHostingVersion#config}
  */
  readonly config?: GoogleFirebaseHostingVersionConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#timeouts GoogleFirebaseHostingVersion#timeouts}
  */
  readonly timeouts?: GoogleFirebaseHostingVersionTimeouts;
}
export interface GoogleFirebaseHostingVersionConfigHeaders {
  /**
  * The user-supplied glob to match against the request URL path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}
  */
  readonly glob?: string;
  /**
  * The additional headers to add to the response. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#headers GoogleFirebaseHostingVersion#headers}
  */
  readonly headers: { [key: string]: string };
  /**
  * The user-supplied RE2 regular expression to match against the request URL path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}
  */
  readonly regex?: string;
}

export function googleFirebaseHostingVersionConfigHeadersToTerraform(struct?: GoogleFirebaseHostingVersionConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glob: cdktf.stringToTerraform(struct!.glob),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function googleFirebaseHostingVersionConfigHeadersToHclTerraform(struct?: GoogleFirebaseHostingVersionConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glob: {
      value: cdktf.stringToHclTerraform(struct!.glob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseHostingVersionConfigHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingVersionConfigHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glob !== undefined) {
      hasAnyValues = true;
      internalValueResult.glob = this._glob;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingVersionConfigHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glob = undefined;
      this._headers = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glob = value.glob;
      this._headers = value.headers;
      this._regex = value.regex;
    }
  }

  // glob - computed: false, optional: true, required: false
  private _glob?: string; 
  public get glob() {
    return this.getStringAttribute('glob');
  }
  public set glob(value: string) {
    this._glob = value;
  }
  public resetGlob() {
    this._glob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globInput() {
    return this._glob;
  }

  // headers - computed: false, optional: false, required: true
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class GoogleFirebaseHostingVersionConfigHeadersList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseHostingVersionConfigHeaders[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseHostingVersionConfigHeadersOutputReference {
    return new GoogleFirebaseHostingVersionConfigHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingVersionConfigRedirects {
  /**
  * The user-supplied glob to match against the request URL path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}
  */
  readonly glob?: string;
  /**
  * The value to put in the HTTP location header of the response.
  * The location can contain capture group values from the pattern using a : prefix to identify
  * the segment and an optional * to capture the rest of the URL. For example:
  * 
  * ```hcl
  * redirects {
  *   glob = "/:capture*"
  *   status_code = 302
  *   location = "https://example.com/foo/:capture"
  * }
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#location GoogleFirebaseHostingVersion#location}
  */
  readonly location: string;
  /**
  * The user-supplied RE2 regular expression to match against the request URL path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}
  */
  readonly regex?: string;
  /**
  * The status HTTP code to return in the response. It must be a valid 3xx status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#status_code GoogleFirebaseHostingVersion#status_code}
  */
  readonly statusCode: number;
}

export function googleFirebaseHostingVersionConfigRedirectsToTerraform(struct?: GoogleFirebaseHostingVersionConfigRedirects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glob: cdktf.stringToTerraform(struct!.glob),
    location: cdktf.stringToTerraform(struct!.location),
    regex: cdktf.stringToTerraform(struct!.regex),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function googleFirebaseHostingVersionConfigRedirectsToHclTerraform(struct?: GoogleFirebaseHostingVersionConfigRedirects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glob: {
      value: cdktf.stringToHclTerraform(struct!.glob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseHostingVersionConfigRedirectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingVersionConfigRedirects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glob !== undefined) {
      hasAnyValues = true;
      internalValueResult.glob = this._glob;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingVersionConfigRedirects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._glob = undefined;
      this._location = undefined;
      this._regex = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._glob = value.glob;
      this._location = value.location;
      this._regex = value.regex;
      this._statusCode = value.statusCode;
    }
  }

  // glob - computed: false, optional: true, required: false
  private _glob?: string; 
  public get glob() {
    return this.getStringAttribute('glob');
  }
  public set glob(value: string) {
    this._glob = value;
  }
  public resetGlob() {
    this._glob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globInput() {
    return this._glob;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class GoogleFirebaseHostingVersionConfigRedirectsList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseHostingVersionConfigRedirects[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseHostingVersionConfigRedirectsOutputReference {
    return new GoogleFirebaseHostingVersionConfigRedirectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingVersionConfigRewritesRun {
  /**
  * Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#region GoogleFirebaseHostingVersion#region}
  */
  readonly region?: string;
  /**
  * User-defined ID of the Cloud Run service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#service_id GoogleFirebaseHostingVersion#service_id}
  */
  readonly serviceId: string;
}

export function googleFirebaseHostingVersionConfigRewritesRunToTerraform(struct?: GoogleFirebaseHostingVersionConfigRewritesRunOutputReference | GoogleFirebaseHostingVersionConfigRewritesRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
  }
}


export function googleFirebaseHostingVersionConfigRewritesRunToHclTerraform(struct?: GoogleFirebaseHostingVersionConfigRewritesRunOutputReference | GoogleFirebaseHostingVersionConfigRewritesRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseHostingVersionConfigRewritesRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseHostingVersionConfigRewritesRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingVersionConfigRewritesRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._serviceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._serviceId = value.serviceId;
    }
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}
export interface GoogleFirebaseHostingVersionConfigRewrites {
  /**
  * The function to proxy requests to. Must match the exported function name exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#function GoogleFirebaseHostingVersion#function}
  */
  readonly function?: string;
  /**
  * The user-supplied glob to match against the request URL path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}
  */
  readonly glob?: string;
  /**
  * The URL path to rewrite the request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#path GoogleFirebaseHostingVersion#path}
  */
  readonly path?: string;
  /**
  * The user-supplied RE2 regular expression to match against the request URL path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}
  */
  readonly regex?: string;
  /**
  * run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#run GoogleFirebaseHostingVersion#run}
  */
  readonly run?: GoogleFirebaseHostingVersionConfigRewritesRun;
}

export function googleFirebaseHostingVersionConfigRewritesToTerraform(struct?: GoogleFirebaseHostingVersionConfigRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    glob: cdktf.stringToTerraform(struct!.glob),
    path: cdktf.stringToTerraform(struct!.path),
    regex: cdktf.stringToTerraform(struct!.regex),
    run: googleFirebaseHostingVersionConfigRewritesRunToTerraform(struct!.run),
  }
}


export function googleFirebaseHostingVersionConfigRewritesToHclTerraform(struct?: GoogleFirebaseHostingVersionConfigRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glob: {
      value: cdktf.stringToHclTerraform(struct!.glob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run: {
      value: googleFirebaseHostingVersionConfigRewritesRunToHclTerraform(struct!.run),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseHostingVersionConfigRewritesRunList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseHostingVersionConfigRewritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseHostingVersionConfigRewrites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._glob !== undefined) {
      hasAnyValues = true;
      internalValueResult.glob = this._glob;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._run?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingVersionConfigRewrites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._function = undefined;
      this._glob = undefined;
      this._path = undefined;
      this._regex = undefined;
      this._run.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._function = value.function;
      this._glob = value.glob;
      this._path = value.path;
      this._regex = value.regex;
      this._run.internalValue = value.run;
    }
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // glob - computed: false, optional: true, required: false
  private _glob?: string; 
  public get glob() {
    return this.getStringAttribute('glob');
  }
  public set glob(value: string) {
    this._glob = value;
  }
  public resetGlob() {
    this._glob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globInput() {
    return this._glob;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // run - computed: false, optional: true, required: false
  private _run = new GoogleFirebaseHostingVersionConfigRewritesRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: GoogleFirebaseHostingVersionConfigRewritesRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }
}

export class GoogleFirebaseHostingVersionConfigRewritesList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseHostingVersionConfigRewrites[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseHostingVersionConfigRewritesOutputReference {
    return new GoogleFirebaseHostingVersionConfigRewritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseHostingVersionConfigA {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#headers GoogleFirebaseHostingVersion#headers}
  */
  readonly headers?: GoogleFirebaseHostingVersionConfigHeaders[] | cdktf.IResolvable;
  /**
  * redirects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#redirects GoogleFirebaseHostingVersion#redirects}
  */
  readonly redirects?: GoogleFirebaseHostingVersionConfigRedirects[] | cdktf.IResolvable;
  /**
  * rewrites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#rewrites GoogleFirebaseHostingVersion#rewrites}
  */
  readonly rewrites?: GoogleFirebaseHostingVersionConfigRewrites[] | cdktf.IResolvable;
}

export function googleFirebaseHostingVersionConfigAToTerraform(struct?: GoogleFirebaseHostingVersionConfigAOutputReference | GoogleFirebaseHostingVersionConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(googleFirebaseHostingVersionConfigHeadersToTerraform, true)(struct!.headers),
    redirects: cdktf.listMapper(googleFirebaseHostingVersionConfigRedirectsToTerraform, true)(struct!.redirects),
    rewrites: cdktf.listMapper(googleFirebaseHostingVersionConfigRewritesToTerraform, true)(struct!.rewrites),
  }
}


export function googleFirebaseHostingVersionConfigAToHclTerraform(struct?: GoogleFirebaseHostingVersionConfigAOutputReference | GoogleFirebaseHostingVersionConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(googleFirebaseHostingVersionConfigHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseHostingVersionConfigHeadersList",
    },
    redirects: {
      value: cdktf.listMapperHcl(googleFirebaseHostingVersionConfigRedirectsToHclTerraform, true)(struct!.redirects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseHostingVersionConfigRedirectsList",
    },
    rewrites: {
      value: cdktf.listMapperHcl(googleFirebaseHostingVersionConfigRewritesToHclTerraform, true)(struct!.rewrites),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseHostingVersionConfigRewritesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseHostingVersionConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseHostingVersionConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._redirects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirects = this._redirects?.internalValue;
    }
    if (this._rewrites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewrites = this._rewrites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingVersionConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
      this._redirects.internalValue = undefined;
      this._rewrites.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
      this._redirects.internalValue = value.redirects;
      this._rewrites.internalValue = value.rewrites;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new GoogleFirebaseHostingVersionConfigHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GoogleFirebaseHostingVersionConfigHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // redirects - computed: false, optional: true, required: false
  private _redirects = new GoogleFirebaseHostingVersionConfigRedirectsList(this, "redirects", false);
  public get redirects() {
    return this._redirects;
  }
  public putRedirects(value: GoogleFirebaseHostingVersionConfigRedirects[] | cdktf.IResolvable) {
    this._redirects.internalValue = value;
  }
  public resetRedirects() {
    this._redirects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectsInput() {
    return this._redirects.internalValue;
  }

  // rewrites - computed: false, optional: true, required: false
  private _rewrites = new GoogleFirebaseHostingVersionConfigRewritesList(this, "rewrites", false);
  public get rewrites() {
    return this._rewrites;
  }
  public putRewrites(value: GoogleFirebaseHostingVersionConfigRewrites[] | cdktf.IResolvable) {
    this._rewrites.internalValue = value;
  }
  public resetRewrites() {
    this._rewrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritesInput() {
    return this._rewrites.internalValue;
  }
}
export interface GoogleFirebaseHostingVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}
  */
  readonly delete?: string;
}

export function googleFirebaseHostingVersionTimeoutsToTerraform(struct?: GoogleFirebaseHostingVersionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleFirebaseHostingVersionTimeoutsToHclTerraform(struct?: GoogleFirebaseHostingVersionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseHostingVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseHostingVersionTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseHostingVersionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version google_firebase_hosting_version}
*/
export class GoogleFirebaseHostingVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_hosting_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseHostingVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseHostingVersion to import
  * @param importFromId The id of the existing GoogleFirebaseHostingVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseHostingVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_hosting_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_hosting_version google_firebase_hosting_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseHostingVersionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseHostingVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_hosting_version',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.18.1',
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
    this._siteId = config.siteId;
    this._config.internalValue = config.config;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // config - computed: false, optional: true, required: false
  private _config = new GoogleFirebaseHostingVersionConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleFirebaseHostingVersionConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseHostingVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseHostingVersionTimeouts) {
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
      site_id: cdktf.stringToTerraform(this._siteId),
      config: googleFirebaseHostingVersionConfigAToTerraform(this._config.internalValue),
      timeouts: googleFirebaseHostingVersionTimeoutsToTerraform(this._timeouts.internalValue),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: googleFirebaseHostingVersionConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseHostingVersionConfigAList",
      },
      timeouts: {
        value: googleFirebaseHostingVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseHostingVersionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
