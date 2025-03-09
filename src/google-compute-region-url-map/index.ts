// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionUrlMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full or partial URL of the defaultService resource to which traffic is directed if
  * none of the hostRules match. If defaultRouteAction is additionally specified, advanced
  * routing actions like URL Rewrites, etc. take effect prior to sending the request to the
  * backend. However, if defaultService is specified, defaultRouteAction cannot contain any
  * weightedBackendServices. Conversely, if routeAction specifies any
  * weightedBackendServices, service must not be specified.  Only one of defaultService,
  * defaultUrlRedirect or defaultRouteAction.weightedBackendService must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#default_service GoogleComputeRegionUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#description GoogleComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#id GoogleComputeRegionUrlMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#name GoogleComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#project GoogleComputeRegionUrlMap#project}
  */
  readonly project?: string;
  /**
  * The Region in which the url map should reside.
  * If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#region GoogleComputeRegionUrlMap#region}
  */
  readonly region?: string;
  /**
  * default_route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#default_route_action GoogleComputeRegionUrlMap#default_route_action}
  */
  readonly defaultRouteAction?: GoogleComputeRegionUrlMapDefaultRouteAction;
  /**
  * default_url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#default_url_redirect GoogleComputeRegionUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: GoogleComputeRegionUrlMapDefaultUrlRedirect;
  /**
  * host_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_rule GoogleComputeRegionUrlMap#host_rule}
  */
  readonly hostRule?: GoogleComputeRegionUrlMapHostRule[] | cdktf.IResolvable;
  /**
  * path_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_matcher GoogleComputeRegionUrlMap#path_matcher}
  */
  readonly pathMatcher?: GoogleComputeRegionUrlMapPathMatcher[] | cdktf.IResolvable;
  /**
  * test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#test GoogleComputeRegionUrlMap#test}
  */
  readonly test?: GoogleComputeRegionUrlMapTest[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#timeouts GoogleComputeRegionUrlMap#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionUrlMapTimeouts;
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This field translates to the Access-Control-Allow-Credentials header.
  * Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_credentials GoogleComputeRegionUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_headers GoogleComputeRegionUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_methods GoogleComputeRegionUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regualar expression patterns that match allowed origins. For regular expression grammar
  * please see en.cppreference.com/w/cpp/regex/ecmascript
  * An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_origin_regexes GoogleComputeRegionUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests.
  * An origin is allowed if it matches either an item in allowOrigins or an item in allowOriginRegexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_origins GoogleComputeRegionUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, the setting specifies the CORS policy is disabled. The default value of false, which indicates that the CORS policy is in effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#disabled GoogleComputeRegionUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#expose_headers GoogleComputeRegionUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long results of a preflight request can be cached in seconds.
  * This translates to the Access-Control-Max-Age header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#max_age GoogleComputeRegionUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function googleComputeRegionUrlMapDefaultRouteActionCorsPolicyToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionCorsPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
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

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request.
  * The value must be between 200 and 599 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#http_status GoogleComputeRegionUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be aborted as part of fault injection.
  * The value must be between 0.0 and 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#percentage GoogleComputeRegionUrlMap#percentage}
  */
  readonly percentage?: number;
}

export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktf.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
  * represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will be introduced as part of fault injection.
  * The value must be between 0.0 and 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#percentage GoogleComputeRegionUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#fixed_delay GoogleComputeRegionUrlMap#fixed_delay}
  */
  readonly fixedDelay?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_delay: {
      value: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct!.fixedDelay),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay = new GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  public resetFixedDelay() {
    this._fixedDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#abort GoogleComputeRegionUrlMap#abort}
  */
  readonly abort?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#delay GoogleComputeRegionUrlMap#delay}
  */
  readonly delay?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay;
}

export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicy {
  /**
  * The full or partial URL to the RegionBackendService resource being mirrored to.
  * The backend service configured for a mirroring policy must reference backends that are of the same type as the original backend service matched in the URL map.
  * Serverless NEG backends are not currently supported as a mirrored backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#backend_service GoogleComputeRegionUrlMap#backend_service}
  */
  readonly backendService?: string;
}

export function googleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktf.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: true, required: false
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  public resetBackendService() {
    this._backendService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are
  * represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
  * Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function googleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#num_retries GoogleComputeRegionUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specifies one or more conditions when this retry policy applies.
  * Valid values are listed below. Only the following codes are supported when the URL map is bound to target gRPC proxy that has validateForProxyless field set to true: cancelled, deadline-exceeded, internal, resource-exhausted, unavailable.
  *   - 5xx : retry is attempted if the instance or endpoint responds with any 5xx response code, or if the instance or endpoint does not respond at all. For example, disconnects, reset, read timeout, connection failure, and refused streams.
  *   - gateway-error : Similar to 5xx, but only applies to response codes 502, 503 or 504.
  *   - connect-failure : a retry is attempted on failures connecting to the instance or endpoint. For example, connection timeouts.
  *   - retriable-4xx : a retry is attempted if the instance or endpoint responds with a 4xx response code. The only error that you can retry is error code 409.
  *   - refused-stream : a retry is attempted if the instance or endpoint resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
  *   - cancelled : a retry is attempted if the gRPC status code in the response header is set to cancelled.
  *   - deadline-exceeded : a retry is attempted if the gRPC status code in the response header is set to deadline-exceeded.
  *   - internal :  a retry is attempted if the gRPC status code in the response header is set to internal.
  *   - resource-exhausted : a retry is attempted if the gRPC status code in the response header is set to resource-exhausted.
  *   - unavailable : a retry is attempted if the gRPC status code in the response header is set to unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#retry_conditions GoogleComputeRegionUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#per_try_timeout GoogleComputeRegionUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeout;
}

export function googleComputeRegionUrlMapDefaultRouteActionRetryPolicyToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: googleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionRetryPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_try_timeout: {
      value: googleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct!.perTryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 seconds field and a positive nanos field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds?: string;
}

export function googleComputeRegionUrlMapDefaultRouteActionTimeoutToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionTimeoutOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionTimeoutToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionTimeoutOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionUrlRewrite {
  /**
  * Before forwarding the request to the selected service, the request's host header is replaced with contents of hostRewrite.
  * The value must be from 1 to 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_rewrite GoogleComputeRegionUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Before forwarding the request to the selected backend service, the matching portion of the request's path is replaced by pathPrefixRewrite.
  * The value must be from 1 to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_prefix_rewrite GoogleComputeRegionUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function googleComputeRegionUrlMapDefaultRouteActionUrlRewriteToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionUrlRewriteOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionUrlRewriteToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionUrlRewriteOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header. If true, headerValue is set for the header, discarding any values that were set for that header.
  * The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName?: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue?: string;
  /**
  * If false, headerValue is appended to any values that already exist for the header. If true, headerValue is set for the header, discarding any values that were set for that header.
  * The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_remove GoogleComputeRegionUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response before sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_remove GoogleComputeRegionUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_add GoogleComputeRegionUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_add GoogleComputeRegionUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices {
  /**
  * The full or partial URL to the default BackendService resource. Before forwarding the request to backendService, the load balancer applies any relevant headerActions specified as part of this backendServiceWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#backend_service GoogleComputeRegionUrlMap#backend_service}
  */
  readonly backendService?: string;
  /**
  * Specifies the fraction of traffic sent to a backend service, computed as weight / (sum of all weightedBackendService weights in routeAction) .
  * The selection of a backend service is determined only for new traffic. Once a user's request has been directed to a backend service, subsequent requests are sent to the same backend service as determined by the backend service's session affinity policy.
  * The value must be from 0 to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#weight GoogleComputeRegionUrlMap#weight}
  */
  readonly weight?: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_action GoogleComputeRegionUrlMap#header_action}
  */
  readonly headerAction?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction;
}

export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktf.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: true, required: false
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  public resetBackendService() {
    this._backendService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesOutputReference {
    return new GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapDefaultRouteAction {
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#cors_policy GoogleComputeRegionUrlMap#cors_policy}
  */
  readonly corsPolicy?: GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#fault_injection_policy GoogleComputeRegionUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_mirror_policy GoogleComputeRegionUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#retry_policy GoogleComputeRegionUrlMap#retry_policy}
  */
  readonly retryPolicy?: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#timeout GoogleComputeRegionUrlMap#timeout}
  */
  readonly timeout?: GoogleComputeRegionUrlMapDefaultRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#url_rewrite GoogleComputeRegionUrlMap#url_rewrite}
  */
  readonly urlRewrite?: GoogleComputeRegionUrlMapDefaultRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#weighted_backend_services GoogleComputeRegionUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapDefaultRouteActionToTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionOutputReference | GoogleComputeRegionUrlMapDefaultRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: googleComputeRegionUrlMapDefaultRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: googleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: googleComputeRegionUrlMapDefaultRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: googleComputeRegionUrlMapDefaultRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: googleComputeRegionUrlMapDefaultRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function googleComputeRegionUrlMapDefaultRouteActionToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultRouteActionOutputReference | GoogleComputeRegionUrlMapDefaultRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cors_policy: {
      value: googleComputeRegionUrlMapDefaultRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: googleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyList",
    },
    request_mirror_policy: {
      value: googleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: googleComputeRegionUrlMapDefaultRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyList",
    },
    timeout: {
      value: googleComputeRegionUrlMapDefaultRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionTimeoutList",
    },
    url_rewrite: {
      value: googleComputeRegionUrlMapDefaultRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: GoogleComputeRegionUrlMapDefaultRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: GoogleComputeRegionUrlMapDefaultRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: GoogleComputeRegionUrlMapDefaultRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: GoogleComputeRegionUrlMapDefaultRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new GoogleComputeRegionUrlMapDefaultRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: GoogleComputeRegionUrlMapDefaultRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new GoogleComputeRegionUrlMapDefaultRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: GoogleComputeRegionUrlMapDefaultRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: GoogleComputeRegionUrlMapDefaultRouteActionWeightedBackendServices[] | cdktf.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
  * supplied in the request. The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_redirect GoogleComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
  * false, the URL scheme of the redirected request will remain the same as that of the
  * request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
  * true for TargetHttpsProxy is not permitted. The default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#https_redirect GoogleComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
  * supplied in the request. pathRedirect cannot be supplied together with
  * prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
  * original request will be used for the redirect. The value must be between 1 and 1024
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_redirect GoogleComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
  * retaining the remaining portion of the URL before redirecting the request.
  * prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
  * neither. If neither is supplied, the path of the original request will be used for
  * the redirect. The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#prefix_redirect GoogleComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
  * will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case,
  * the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#redirect_response_code GoogleComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
  * to redirecting the request. If set to false, the query portion of the original URL is
  * retained.
  *  This field is required to ensure an empty block is not set. The normal default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#strip_query GoogleComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapDefaultUrlRedirectToTerraform(struct?: GoogleComputeRegionUrlMapDefaultUrlRedirectOutputReference | GoogleComputeRegionUrlMapDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}


export function googleComputeRegionUrlMapDefaultUrlRedirectToHclTerraform(struct?: GoogleComputeRegionUrlMapDefaultUrlRedirectOutputReference | GoogleComputeRegionUrlMapDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktf.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktf.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapDefaultUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapDefaultUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapDefaultUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface GoogleComputeRegionUrlMapHostRule {
  /**
  * An optional description of this HostRule. Provide this property
  * when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#description GoogleComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * The list of host patterns to match. They must be valid
  * hostnames, except * will match any string of ([a-z0-9-.]*). In
  * that case, * must be the first character and must be followed in
  * the pattern by either - or ..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#hosts GoogleComputeRegionUrlMap#hosts}
  */
  readonly hosts: string[];
  /**
  * The name of the PathMatcher to use to match the path portion of
  * the URL if the hostRule matches the URL's host portion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_matcher GoogleComputeRegionUrlMap#path_matcher}
  */
  readonly pathMatcher: string;
}

export function googleComputeRegionUrlMapHostRuleToTerraform(struct?: GoogleComputeRegionUrlMapHostRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    path_matcher: cdktf.stringToTerraform(struct!.pathMatcher),
  }
}


export function googleComputeRegionUrlMapHostRuleToHclTerraform(struct?: GoogleComputeRegionUrlMapHostRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path_matcher: {
      value: cdktf.stringToHclTerraform(struct!.pathMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapHostRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapHostRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._pathMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatcher = this._pathMatcher;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapHostRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hosts = undefined;
      this._pathMatcher = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hosts = value.hosts;
      this._pathMatcher = value.pathMatcher;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // path_matcher - computed: false, optional: false, required: true
  private _pathMatcher?: string; 
  public get pathMatcher() {
    return this.getStringAttribute('path_matcher');
  }
  public set pathMatcher(value: string) {
    this._pathMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher;
  }
}

export class GoogleComputeRegionUrlMapHostRuleList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapHostRule[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapHostRuleOutputReference {
    return new GoogleComputeRegionUrlMapHostRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was
  * supplied in the request. The value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_redirect GoogleComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https. If set to
  * false, the URL scheme of the redirected request will remain the same as that of the
  * request. This must only be set for UrlMaps used in TargetHttpProxys. Setting this
  * true for TargetHttpsProxy is not permitted. The default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#https_redirect GoogleComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was
  * supplied in the request. pathRedirect cannot be supplied together with
  * prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the
  * original request will be used for the redirect. The value must be between 1 and 1024
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_redirect GoogleComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the HttpRouteRuleMatch,
  * retaining the remaining portion of the URL before redirecting the request.
  * prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or
  * neither. If neither is supplied, the path of the original request will be used for
  * the redirect. The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#prefix_redirect GoogleComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
  * will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case,
  * the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#redirect_response_code GoogleComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior
  * to redirecting the request. If set to false, the query portion of the original URL is
  * retained.
  *  This field is required to ensure an empty block is not set. The normal default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#strip_query GoogleComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirectOutputReference | GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}


export function googleComputeRegionUrlMapPathMatcherDefaultUrlRedirectToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirectOutputReference | GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktf.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktf.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the
  * actual request can include user credentials. This translates to the Access-
  * Control-Allow-Credentials header. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_credentials GoogleComputeRegionUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_headers GoogleComputeRegionUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_methods GoogleComputeRegionUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
  * regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
  * An origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_origin_regexes GoogleComputeRegionUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
  * origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_origins GoogleComputeRegionUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#disabled GoogleComputeRegionUrlMap#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#expose_headers GoogleComputeRegionUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
  * translates to the content for the Access-Control-Max-Age header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#max_age GoogleComputeRegionUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
  * and 599 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#http_status GoogleComputeRegionUrlMap#http_status}
  */
  readonly httpStatus: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
  * aborted as part of fault injection. The value must be between 0.0 and 100.0
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#percentage GoogleComputeRegionUrlMap#percentage}
  */
  readonly percentage: number;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktf.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: false, required: true
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
  * be introduced as part of fault injection. The value must be between 0.0 and
  * 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#percentage GoogleComputeRegionUrlMap#percentage}
  */
  readonly percentage: number;
  /**
  * fixed_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#fixed_delay GoogleComputeRegionUrlMap#fixed_delay}
  */
  readonly fixedDelay: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_delay: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct!.fixedDelay),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: false, required: true
  private _fixedDelay = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#abort GoogleComputeRegionUrlMap#abort}
  */
  readonly abort?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#delay GoogleComputeRegionUrlMap#delay}
  */
  readonly delay?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /**
  * The RegionBackendService resource being mirrored to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#backend_service GoogleComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktf.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#num_retries GoogleComputeRegionUrlMap#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specifies one or more conditions when this retry rule applies. Valid values are:
  * 
  * - 5xx: Loadbalancer will attempt a retry if the backend service responds with
  * any 5xx response code, or if the backend service does not respond at all,
  * for example: disconnects, reset, read timeout, connection failure, and refused
  * streams.
  * - gateway-error: Similar to 5xx, but only applies to response codes
  * 502, 503 or 504.
  * - connect-failure: Loadbalancer will retry on failures
  * connecting to backend services, for example due to connection timeouts.
  * - retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  * Currently the only retriable error supported is 409.
  * - refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  * REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
  * - cancelled: Loadbalancer will retry if the gRPC status code in the response
  * header is set to cancelled
  * - deadline-exceeded: Loadbalancer will retry if the
  * gRPC status code in the response header is set to deadline-exceeded
  * - resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  * header is set to resource-exhausted
  * - unavailable: Loadbalancer will retry if
  * the gRPC status code in the response header is set to unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#retry_conditions GoogleComputeRegionUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#per_try_timeout GoogleComputeRegionUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_try_timeout: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct!.perTryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
  * header is replaced with contents of hostRewrite. The value must be between 1 and
  * 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_rewrite GoogleComputeRegionUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
  * portion of the request's path is replaced by pathPrefixRewrite. The value must
  * be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_prefix_rewrite GoogleComputeRegionUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_remove GoogleComputeRegionUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_remove GoogleComputeRegionUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_add GoogleComputeRegionUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_add GoogleComputeRegionUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices {
  /**
  * The default RegionBackendService resource. Before
  * forwarding the request to backendService, the loadbalancer applies any relevant
  * headerActions specified as part of this backendServiceWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#backend_service GoogleComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
  * (sum of all weightedBackendService weights in routeAction) . The selection of a
  * backend service is determined only for new traffic. Once a user's request has
  * been directed to a backendService, subsequent requests will be sent to the same
  * backendService as determined by the BackendService's session affinity policy.
  * The value must be between 0 and 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#weight GoogleComputeRegionUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_action GoogleComputeRegionUrlMap#header_action}
  */
  readonly headerAction?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktf.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleRouteAction {
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#cors_policy GoogleComputeRegionUrlMap#cors_policy}
  */
  readonly corsPolicy?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#fault_injection_policy GoogleComputeRegionUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_mirror_policy GoogleComputeRegionUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#retry_policy GoogleComputeRegionUrlMap#retry_policy}
  */
  readonly retryPolicy?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#timeout GoogleComputeRegionUrlMap#timeout}
  */
  readonly timeout?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#url_rewrite GoogleComputeRegionUrlMap#url_rewrite}
  */
  readonly urlRewrite?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#weighted_backend_services GoogleComputeRegionUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleRouteActionToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cors_policy: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyList",
    },
    request_mirror_policy: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyList",
    },
    timeout: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutList",
    },
    url_rewrite: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionWeightedBackendServices[] | cdktf.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one
  * that was supplied in the request. The value must be between 1 and 255
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_redirect GoogleComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https.
  * If set to false, the URL scheme of the redirected request will remain the
  * same as that of the request. This must only be set for UrlMaps used in
  * TargetHttpProxys. Setting this true for TargetHttpsProxy is not
  * permitted. The default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#https_redirect GoogleComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one
  * that was supplied in the request. pathRedirect cannot be supplied
  * together with prefixRedirect. Supply one alone or neither. If neither is
  * supplied, the path of the original request will be used for the redirect.
  * The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_redirect GoogleComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the
  * HttpRouteRuleMatch, retaining the remaining portion of the URL before
  * redirecting the request. prefixRedirect cannot be supplied together with
  * pathRedirect. Supply one alone or neither. If neither is supplied, the
  * path of the original request will be used for the redirect. The value
  * must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#prefix_redirect GoogleComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
  * will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case,
  * the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#redirect_response_code GoogleComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed
  * prior to redirecting the request. If set to false, the query portion of the
  * original URL is retained.
  *  This field is required to ensure an empty block is not set. The normal default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#strip_query GoogleComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectOutputReference | GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktf.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktf.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: false, required: true
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherPathRule {
  /**
  * The list of path patterns to match. Each must start with / and the only place a
  * \* is allowed is at the end following a /. The string fed to the path matcher
  * does not include any text after the first ? or #, and those chars are not
  * allowed here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#paths GoogleComputeRegionUrlMap#paths}
  */
  readonly paths: string[];
  /**
  * The region backend service resource to which traffic is
  * directed if this rule is matched. If routeAction is additionally specified,
  * advanced routing actions like URL Rewrites, etc. take effect prior to sending
  * the request to the backend. However, if service is specified, routeAction cannot
  * contain any weightedBackendService s. Conversely, if routeAction specifies any
  * weightedBackendServices, service must not be specified. Only one of urlRedirect,
  * service or routeAction.weightedBackendService must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#service GoogleComputeRegionUrlMap#service}
  */
  readonly service?: string;
  /**
  * route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#route_action GoogleComputeRegionUrlMap#route_action}
  */
  readonly routeAction?: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteAction;
  /**
  * url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#url_redirect GoogleComputeRegionUrlMap#url_redirect}
  */
  readonly urlRedirect?: GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirect;
}

export function googleComputeRegionUrlMapPathMatcherPathRuleToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    service: cdktf.stringToTerraform(struct!.service),
    route_action: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionToTerraform(struct!.routeAction),
    url_redirect: googleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectToTerraform(struct!.urlRedirect),
  }
}


export function googleComputeRegionUrlMapPathMatcherPathRuleToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherPathRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_action: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleRouteActionToHclTerraform(struct!.routeAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionList",
    },
    url_redirect: {
      value: googleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectToHclTerraform(struct!.urlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherPathRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._routeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAction = this._routeAction?.internalValue;
    }
    if (this._urlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirect = this._urlRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherPathRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
      this._service = undefined;
      this._routeAction.internalValue = undefined;
      this._urlRedirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
      this._service = value.service;
      this._routeAction.internalValue = value.routeAction;
      this._urlRedirect.internalValue = value.urlRedirect;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new GoogleComputeRegionUrlMapPathMatcherPathRuleRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: GoogleComputeRegionUrlMapPathMatcherPathRuleRouteAction) {
    this._routeAction.internalValue = value;
  }
  public resetRouteAction() {
    this._routeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeActionInput() {
    return this._routeAction.internalValue;
  }

  // url_redirect - computed: false, optional: true, required: false
  private _urlRedirect = new GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: GoogleComputeRegionUrlMapPathMatcherPathRuleUrlRedirect) {
    this._urlRedirect.internalValue = value;
  }
  public resetUrlRedirect() {
    this._urlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectInput() {
    return this._urlRedirect.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherPathRuleList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherPathRule[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherPathRuleOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherPathRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_remove GoogleComputeRegionUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_remove GoogleComputeRegionUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_add GoogleComputeRegionUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_add GoogleComputeRegionUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch {
  /**
  * The end of the range (exclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#range_end GoogleComputeRegionUrlMap#range_end}
  */
  readonly rangeEnd: number;
  /**
  * The start of the range (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#range_start GoogleComputeRegionUrlMap#range_start}
  */
  readonly rangeStart: number;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_end: cdktf.numberToTerraform(struct!.rangeEnd),
    range_start: cdktf.numberToTerraform(struct!.rangeStart),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_end: {
      value: cdktf.numberToHclTerraform(struct!.rangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_start: {
      value: cdktf.numberToHclTerraform(struct!.rangeStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeEnd = this._rangeEnd;
    }
    if (this._rangeStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeStart = this._rangeStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeEnd = undefined;
      this._rangeStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeEnd = value.rangeEnd;
      this._rangeStart = value.rangeStart;
    }
  }

  // range_end - computed: false, optional: false, required: true
  private _rangeEnd?: number; 
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }
  public set rangeEnd(value: number) {
    this._rangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEndInput() {
    return this._rangeEnd;
  }

  // range_start - computed: false, optional: false, required: true
  private _rangeStart?: number; 
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }
  public set rangeStart(value: number) {
    this._rangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeStartInput() {
    return this._rangeStart;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches {
  /**
  * The value should exactly match contents of exactMatch. Only one of exactMatch,
  * prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#exact_match GoogleComputeRegionUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the HTTP header to match. For matching against the HTTP request's
  * authority, use a headerMatch with the header name ":authority". For matching a
  * request's method, use the headerName ":method".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * If set to false, the headerMatch is considered a match if the match criteria
  * above are met. If set to true, the headerMatch is considered a match if the
  * match criteria above are NOT met. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#invert_match GoogleComputeRegionUrlMap#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must start with the contents of prefixMatch. Only one of
  * exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
  * must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#prefix_match GoogleComputeRegionUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * A header with the contents of headerName must exist. The match takes place
  * whether or not the request's header has a value or not. Only one of exactMatch,
  * prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#present_match GoogleComputeRegionUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must match the regular expression specified in
  * regexMatch. For regular expression grammar, please see:
  * en.cppreference.com/w/cpp/regex/ecmascript  For matching against a port
  * specified in the HTTP request, use a headerMatch with headerName set to PORT and
  * a regular expression that satisfies the RFC2616 Host header's port specifier.
  * Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or
  * rangeMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#regex_match GoogleComputeRegionUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * The value of the header must end with the contents of suffixMatch. Only one of
  * exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch
  * must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#suffix_match GoogleComputeRegionUrlMap#suffix_match}
  */
  readonly suffixMatch?: string;
  /**
  * range_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#range_match GoogleComputeRegionUrlMap#range_match}
  */
  readonly rangeMatch?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
    range_match: googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToTerraform(struct!.rangeMatch),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktf.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_match: {
      value: cdktf.stringToHclTerraform(struct!.suffixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_match: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchToHclTerraform(struct!.rangeMatch),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._suffixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixMatch = this._suffixMatch;
    }
    if (this._rangeMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMatch = this._rangeMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._headerName = undefined;
      this._invertMatch = undefined;
      this._prefixMatch = undefined;
      this._presentMatch = undefined;
      this._regexMatch = undefined;
      this._suffixMatch = undefined;
      this._rangeMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._headerName = value.headerName;
      this._invertMatch = value.invertMatch;
      this._prefixMatch = value.prefixMatch;
      this._presentMatch = value.presentMatch;
      this._regexMatch = value.regexMatch;
      this._suffixMatch = value.suffixMatch;
      this._rangeMatch.internalValue = value.rangeMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // suffix_match - computed: false, optional: true, required: false
  private _suffixMatch?: string; 
  public get suffixMatch() {
    return this.getStringAttribute('suffix_match');
  }
  public set suffixMatch(value: string) {
    this._suffixMatch = value;
  }
  public resetSuffixMatch() {
    this._suffixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixMatchInput() {
    return this._suffixMatch;
  }

  // range_match - computed: false, optional: true, required: false
  private _rangeMatch = new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatchOutputReference(this, "range_match");
  public get rangeMatch() {
    return this._rangeMatch;
  }
  public putRangeMatch(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesRangeMatch) {
    this._rangeMatch.internalValue = value;
  }
  public resetRangeMatch() {
    this._rangeMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMatchInput() {
    return this._rangeMatch.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels {
  /**
  * Name of metadata label. The name can have a maximum length of 1024 characters
  * and must be at least 1 character long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#name GoogleComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * The value of the label must match the specified value. value can have a maximum
  * length of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#value GoogleComputeRegionUrlMap#value}
  */
  readonly value: string;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters {
  /**
  * Specifies how individual filterLabel matches within the list of filterLabels
  * contribute towards the overall metadataFilter match. Supported values are:
  * 
  * * MATCH_ANY: At least one of the filterLabels must have a matching label in the
  * provided metadata.
  * * MATCH_ALL: All filterLabels must have matching labels in
  * the provided metadata. Possible values: ["MATCH_ALL", "MATCH_ANY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#filter_match_criteria GoogleComputeRegionUrlMap#filter_match_criteria}
  */
  readonly filterMatchCriteria: string;
  /**
  * filter_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#filter_labels GoogleComputeRegionUrlMap#filter_labels}
  */
  readonly filterLabels: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_match_criteria: cdktf.stringToTerraform(struct!.filterMatchCriteria),
    filter_labels: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToTerraform, true)(struct!.filterLabels),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.filterMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_labels: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsToHclTerraform, true)(struct!.filterLabels),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMatchCriteria = this._filterMatchCriteria;
    }
    if (this._filterLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLabels = this._filterLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = undefined;
      this._filterLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = value.filterMatchCriteria;
      this._filterLabels.internalValue = value.filterLabels;
    }
  }

  // filter_match_criteria - computed: false, optional: false, required: true
  private _filterMatchCriteria?: string; 
  public get filterMatchCriteria() {
    return this.getStringAttribute('filter_match_criteria');
  }
  public set filterMatchCriteria(value: string) {
    this._filterMatchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchCriteriaInput() {
    return this._filterMatchCriteria;
  }

  // filter_labels - computed: false, optional: false, required: true
  private _filterLabels = new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabelsList(this, "filter_labels", false);
  public get filterLabels() {
    return this._filterLabels;
  }
  public putFilterLabels(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersFilterLabels[] | cdktf.IResolvable) {
    this._filterLabels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLabelsInput() {
    return this._filterLabels.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches {
  /**
  * The queryParameterMatch matches if the value of the parameter exactly matches
  * the contents of exactMatch. Only one of presentMatch, exactMatch and regexMatch
  * must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#exact_match GoogleComputeRegionUrlMap#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the query parameter to match. The query parameter must exist in the
  * request, in the absence of which the request match fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#name GoogleComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * Specifies that the queryParameterMatch matches if the request contains the query
  * parameter, irrespective of whether the parameter has a value or not. Only one of
  * presentMatch, exactMatch and regexMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#present_match GoogleComputeRegionUrlMap#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The queryParameterMatch matches if the value of the parameter matches the
  * regular expression specified by regexMatch. For the regular expression grammar,
  * please see en.cppreference.com/w/cpp/regex/ecmascript  Only one of presentMatch,
  * exactMatch and regexMatch must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#regex_match GoogleComputeRegionUrlMap#regex_match}
  */
  readonly regexMatch?: string;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    name: cdktf.stringToTerraform(struct!.name),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktf.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._name = undefined;
      this._presentMatch = undefined;
      this._regexMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._name = value.name;
      this._presentMatch = value.presentMatch;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
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

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules {
  /**
  * For satisfying the matchRule condition, the path of the request must exactly
  * match the value specified in fullPathMatch after removing any query parameters
  * and anchor that may be part of the original URL. FullPathMatch must be between 1
  * and 1024 characters. Only one of prefixMatch, fullPathMatch or regexMatch must
  * be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#full_path_match GoogleComputeRegionUrlMap#full_path_match}
  */
  readonly fullPathMatch?: string;
  /**
  * Specifies that prefixMatch and fullPathMatch matches are case sensitive.
  * Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#ignore_case GoogleComputeRegionUrlMap#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * For satisfying the matchRule condition, the path of the request
  * must match the wildcard pattern specified in pathTemplateMatch
  * after removing any query parameters and anchor that may be part
  * of the original URL.
  * 
  * pathTemplateMatch must be between 1 and 255 characters
  * (inclusive).  The pattern specified by pathTemplateMatch may
  * have at most 5 wildcard operators and at most 5 variable
  * captures in total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_template_match GoogleComputeRegionUrlMap#path_template_match}
  */
  readonly pathTemplateMatch?: string;
  /**
  * For satisfying the matchRule condition, the request's path must begin with the
  * specified prefixMatch. prefixMatch must begin with a /. The value must be
  * between 1 and 1024 characters. Only one of prefixMatch, fullPathMatch or
  * regexMatch must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#prefix_match GoogleComputeRegionUrlMap#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * For satisfying the matchRule condition, the path of the request must satisfy the
  * regular expression specified in regexMatch after removing any query parameters
  * and anchor supplied with the original URL. For regular expression grammar please
  * see en.cppreference.com/w/cpp/regex/ecmascript  Only one of prefixMatch,
  * fullPathMatch or regexMatch must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#regex_match GoogleComputeRegionUrlMap#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * header_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_matches GoogleComputeRegionUrlMap#header_matches}
  */
  readonly headerMatches?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktf.IResolvable;
  /**
  * metadata_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#metadata_filters GoogleComputeRegionUrlMap#metadata_filters}
  */
  readonly metadataFilters?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktf.IResolvable;
  /**
  * query_parameter_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#query_parameter_matches GoogleComputeRegionUrlMap#query_parameter_matches}
  */
  readonly queryParameterMatches?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_path_match: cdktf.stringToTerraform(struct!.fullPathMatch),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    path_template_match: cdktf.stringToTerraform(struct!.pathTemplateMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    header_matches: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToTerraform, true)(struct!.headerMatches),
    metadata_filters: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToTerraform, true)(struct!.metadataFilters),
    query_parameter_matches: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToTerraform, true)(struct!.queryParameterMatches),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_path_match: {
      value: cdktf.stringToHclTerraform(struct!.fullPathMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_template_match: {
      value: cdktf.stringToHclTerraform(struct!.pathTemplateMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_matches: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesToHclTerraform, true)(struct!.headerMatches),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList",
    },
    metadata_filters: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersToHclTerraform, true)(struct!.metadataFilters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList",
    },
    query_parameter_matches: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesToHclTerraform, true)(struct!.queryParameterMatches),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullPathMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullPathMatch = this._fullPathMatch;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._pathTemplateMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathTemplateMatch = this._pathTemplateMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._headerMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMatches = this._headerMatches?.internalValue;
    }
    if (this._metadataFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFilters = this._metadataFilters?.internalValue;
    }
    if (this._queryParameterMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterMatches = this._queryParameterMatches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullPathMatch = undefined;
      this._ignoreCase = undefined;
      this._pathTemplateMatch = undefined;
      this._prefixMatch = undefined;
      this._regexMatch = undefined;
      this._headerMatches.internalValue = undefined;
      this._metadataFilters.internalValue = undefined;
      this._queryParameterMatches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullPathMatch = value.fullPathMatch;
      this._ignoreCase = value.ignoreCase;
      this._pathTemplateMatch = value.pathTemplateMatch;
      this._prefixMatch = value.prefixMatch;
      this._regexMatch = value.regexMatch;
      this._headerMatches.internalValue = value.headerMatches;
      this._metadataFilters.internalValue = value.metadataFilters;
      this._queryParameterMatches.internalValue = value.queryParameterMatches;
    }
  }

  // full_path_match - computed: false, optional: true, required: false
  private _fullPathMatch?: string; 
  public get fullPathMatch() {
    return this.getStringAttribute('full_path_match');
  }
  public set fullPathMatch(value: string) {
    this._fullPathMatch = value;
  }
  public resetFullPathMatch() {
    this._fullPathMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathMatchInput() {
    return this._fullPathMatch;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // path_template_match - computed: false, optional: true, required: false
  private _pathTemplateMatch?: string; 
  public get pathTemplateMatch() {
    return this.getStringAttribute('path_template_match');
  }
  public set pathTemplateMatch(value: string) {
    this._pathTemplateMatch = value;
  }
  public resetPathTemplateMatch() {
    this._pathTemplateMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTemplateMatchInput() {
    return this._pathTemplateMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // header_matches - computed: false, optional: true, required: false
  private _headerMatches = new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatchesList(this, "header_matches", false);
  public get headerMatches() {
    return this._headerMatches;
  }
  public putHeaderMatches(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesHeaderMatches[] | cdktf.IResolvable) {
    this._headerMatches.internalValue = value;
  }
  public resetHeaderMatches() {
    this._headerMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMatchesInput() {
    return this._headerMatches.internalValue;
  }

  // metadata_filters - computed: false, optional: true, required: false
  private _metadataFilters = new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFiltersList(this, "metadata_filters", false);
  public get metadataFilters() {
    return this._metadataFilters;
  }
  public putMetadataFilters(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesMetadataFilters[] | cdktf.IResolvable) {
    this._metadataFilters.internalValue = value;
  }
  public resetMetadataFilters() {
    this._metadataFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFiltersInput() {
    return this._metadataFilters.internalValue;
  }

  // query_parameter_matches - computed: false, optional: true, required: false
  private _queryParameterMatches = new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatchesList(this, "query_parameter_matches", false);
  public get queryParameterMatches() {
    return this._queryParameterMatches;
  }
  public putQueryParameterMatches(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesQueryParameterMatches[] | cdktf.IResolvable) {
    this._queryParameterMatches.internalValue = value;
  }
  public resetQueryParameterMatches() {
    this._queryParameterMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterMatchesInput() {
    return this._queryParameterMatches.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the
  * actual request can include user credentials. This translates to the Access-
  * Control-Allow-Credentials header. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_credentials GoogleComputeRegionUrlMap#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_headers GoogleComputeRegionUrlMap#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for the Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_methods GoogleComputeRegionUrlMap#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins. For
  * regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript
  * An origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_origin_regexes GoogleComputeRegionUrlMap#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests. An
  * origin is allowed if it matches either allow_origins or allow_origin_regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#allow_origins GoogleComputeRegionUrlMap#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, specifies the CORS policy is disabled.
  * which indicates that the CORS policy is in effect. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#disabled GoogleComputeRegionUrlMap#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for the Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#expose_headers GoogleComputeRegionUrlMap#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long the results of a preflight request can be cached. This
  * translates to the content for the Access-Control-Max-Age header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#max_age GoogleComputeRegionUrlMap#max_age}
  */
  readonly maxAge?: number;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
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

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request. The value must be between 200
  * and 599 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#http_status GoogleComputeRegionUrlMap#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic (connections/operations/requests) which will be
  * aborted as part of fault injection. The value must be between 0.0 and 100.0
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#percentage GoogleComputeRegionUrlMap#percentage}
  */
  readonly percentage?: number;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktf.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay {
  /**
  * The percentage of traffic (connections/operations/requests) on which delay will
  * be introduced as part of fault injection. The value must be between 0.0 and
  * 100.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#percentage GoogleComputeRegionUrlMap#percentage}
  */
  readonly percentage?: number;
  /**
  * fixed_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#fixed_delay GoogleComputeRegionUrlMap#fixed_delay}
  */
  readonly fixedDelay?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    fixed_delay: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToTerraform(struct!.fixedDelay),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_delay: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayToHclTerraform(struct!.fixedDelay),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._fixedDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentage = undefined;
      this._fixedDelay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentage = value.percentage;
      this._fixedDelay.internalValue = value.fixedDelay;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelayOutputReference(this, "fixed_delay");
  public get fixedDelay() {
    return this._fixedDelay;
  }
  public putFixedDelay(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayFixedDelay) {
    this._fixedDelay.internalValue = value;
  }
  public resetFixedDelay() {
    this._fixedDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#abort GoogleComputeRegionUrlMap#abort}
  */
  readonly abort?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#delay GoogleComputeRegionUrlMap#delay}
  */
  readonly delay?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy {
  /**
  * The RegionBackendService resource being mirrored to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#backend_service GoogleComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktf.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backendService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backendService = value.backendService;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy {
  /**
  * Specifies the allowed number retries. This number must be > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#num_retries GoogleComputeRegionUrlMap#num_retries}
  */
  readonly numRetries: number;
  /**
  * Specifies one or more conditions when this retry rule applies. Valid values are:
  * 
  * * 5xx: Loadbalancer will attempt a retry if the backend service responds with
  *   any 5xx response code, or if the backend service does not respond at all,
  *   for example: disconnects, reset, read timeout, connection failure, and refused
  *   streams.
  * * gateway-error: Similar to 5xx, but only applies to response codes
  *   502, 503 or 504.
  * * connect-failure: Loadbalancer will retry on failures
  *   connecting to backend services, for example due to connection timeouts.
  * * retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.
  *   Currently the only retriable error supported is 409.
  * * refused-stream: Loadbalancer will retry if the backend service resets the stream with a
  *   REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
  * * cancelled: Loadbalancer will retry if the gRPC status code in the response
  *   header is set to cancelled
  * * deadline-exceeded: Loadbalancer will retry if the
  *   gRPC status code in the response header is set to deadline-exceeded
  * * resource-exhausted: Loadbalancer will retry if the gRPC status code in the response
  *   header is set to resource-exhausted
  * * unavailable: Loadbalancer will retry if the gRPC status code in
  *   the response header is set to unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#retry_conditions GoogleComputeRegionUrlMap#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * per_try_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#per_try_timeout GoogleComputeRegionUrlMap#per_try_timeout}
  */
  readonly perTryTimeout?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryConditions),
    per_try_timeout: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToTerraform(struct!.perTryTimeout),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    per_try_timeout: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutToHclTerraform(struct!.perTryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    if (this._perTryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._retryConditions = undefined;
      this._perTryTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._retryConditions = value.retryConditions;
      this._perTryTimeout.internalValue = value.perTryTimeout;
    }
  }

  // num_retries - computed: false, optional: false, required: true
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeoutOutputReference(this, "per_try_timeout");
  public get perTryTimeout() {
    return this._perTryTimeout;
  }
  public putPerTryTimeout(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyPerTryTimeout) {
    this._perTryTimeout.internalValue = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#nanos GoogleComputeRegionUrlMap#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#seconds GoogleComputeRegionUrlMap#seconds}
  */
  readonly seconds: string;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected service, the request's host
  * header is replaced with contents of hostRewrite. The value must be between 1 and
  * 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_rewrite GoogleComputeRegionUrlMap#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected backend service, the matching
  * portion of the request's path is replaced by pathPrefixRewrite. The value must
  * be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_prefix_rewrite GoogleComputeRegionUrlMap#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
  /**
  * Prior to forwarding the request to the selected origin, if the
  * request matched a pathTemplateMatch, the matching portion of the
  * request's path is replaced re-written using the pattern specified
  * by pathTemplateRewrite.
  * 
  * pathTemplateRewrite must be between 1 and 255 characters
  * (inclusive), must start with a '/', and must only use variables
  * captured by the route's pathTemplate matchers.
  * 
  * pathTemplateRewrite may only be used when all of a route's
  * MatchRules specify pathTemplate.
  * 
  * Only one of pathPrefixRewrite and pathTemplateRewrite may be
  * specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_template_rewrite GoogleComputeRegionUrlMap#path_template_rewrite}
  */
  readonly pathTemplateRewrite?: string;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
    path_template_rewrite: cdktf.stringToTerraform(struct!.pathTemplateRewrite),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_template_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.pathTemplateRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    if (this._pathTemplateRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathTemplateRewrite = this._pathTemplateRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
      this._pathTemplateRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
      this._pathTemplateRewrite = value.pathTemplateRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }

  // path_template_rewrite - computed: false, optional: true, required: false
  private _pathTemplateRewrite?: string; 
  public get pathTemplateRewrite() {
    return this.getStringAttribute('path_template_rewrite');
  }
  public set pathTemplateRewrite(value: string) {
    this._pathTemplateRewrite = value;
  }
  public resetPathTemplateRewrite() {
    this._pathTemplateRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTemplateRewriteInput() {
    return this._pathTemplateRewrite;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd {
  /**
  * The name of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_name GoogleComputeRegionUrlMap#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_value GoogleComputeRegionUrlMap#header_value}
  */
  readonly headerValue: string;
  /**
  * If false, headerValue is appended to any values that already exist for the
  * header. If true, headerValue is set for the header, discarding any values that
  * were set for that header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#replace GoogleComputeRegionUrlMap#replace}
  */
  readonly replace: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    replace: cdktf.booleanToTerraform(struct!.replace),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.booleanToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._replace = value.replace;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // replace - computed: false, optional: false, required: true
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction {
  /**
  * A list of header names for headers that need to be removed from the request
  * prior to forwarding the request to the backendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_remove GoogleComputeRegionUrlMap#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * A list of header names for headers that need to be removed from the response
  * prior to sending the response back to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_remove GoogleComputeRegionUrlMap#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_headers_to_add GoogleComputeRegionUrlMap#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#response_headers_to_add GoogleComputeRegionUrlMap#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices {
  /**
  * The default RegionBackendService resource. Before
  * forwarding the request to backendService, the loadbalancer applies any relevant
  * headerActions specified as part of this backendServiceWeight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#backend_service GoogleComputeRegionUrlMap#backend_service}
  */
  readonly backendService: string;
  /**
  * Specifies the fraction of traffic sent to backendService, computed as weight /
  * (sum of all weightedBackendService weights in routeAction) . The selection of a
  * backend service is determined only for new traffic. Once a user's request has
  * been directed to a backendService, subsequent requests will be sent to the same
  * backendService as determined by the BackendService's session affinity policy.
  * The value must be between 0 and 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#weight GoogleComputeRegionUrlMap#weight}
  */
  readonly weight: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_action GoogleComputeRegionUrlMap#header_action}
  */
  readonly headerAction?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_service: cdktf.stringToTerraform(struct!.backendService),
    weight: cdktf.numberToTerraform(struct!.weight),
    header_action: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToTerraform(struct!.headerAction),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_service: {
      value: cdktf.stringToHclTerraform(struct!.backendService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendService !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendService = this._backendService;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendService = undefined;
      this._weight = undefined;
      this._headerAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendService = value.backendService;
      this._weight = value.weight;
      this._headerAction.internalValue = value.headerAction;
    }
  }

  // backend_service - computed: false, optional: false, required: true
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteAction {
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#cors_policy GoogleComputeRegionUrlMap#cors_policy}
  */
  readonly corsPolicy?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#fault_injection_policy GoogleComputeRegionUrlMap#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#request_mirror_policy GoogleComputeRegionUrlMap#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#retry_policy GoogleComputeRegionUrlMap#retry_policy}
  */
  readonly retryPolicy?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#timeout GoogleComputeRegionUrlMap#timeout}
  */
  readonly timeout?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#url_rewrite GoogleComputeRegionUrlMap#url_rewrite}
  */
  readonly urlRewrite?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite;
  /**
  * weighted_backend_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#weighted_backend_services GoogleComputeRegionUrlMap#weighted_backend_services}
  */
  readonly weightedBackendServices?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cors_policy: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToTerraform(struct!.corsPolicy),
    fault_injection_policy: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    request_mirror_policy: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    retry_policy: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutToTerraform(struct!.timeout),
    url_rewrite: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToTerraform(struct!.urlRewrite),
    weighted_backend_services: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToTerraform, true)(struct!.weightedBackendServices),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cors_policy: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyList",
    },
    fault_injection_policy: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyList",
    },
    request_mirror_policy: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyList",
    },
    retry_policy: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyList",
    },
    timeout: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutList",
    },
    url_rewrite: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteList",
    },
    weighted_backend_services: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesToHclTerraform, true)(struct!.weightedBackendServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    if (this._weightedBackendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedBackendServices = this._weightedBackendServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._corsPolicy.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
      this._weightedBackendServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
      this._urlRewrite.internalValue = value.urlRewrite;
      this._weightedBackendServices.internalValue = value.weightedBackendServices;
    }
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }

  // weighted_backend_services - computed: false, optional: true, required: false
  private _weightedBackendServices = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServicesList(this, "weighted_backend_services", false);
  public get weightedBackendServices() {
    return this._weightedBackendServices;
  }
  public putWeightedBackendServices(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionWeightedBackendServices[] | cdktf.IResolvable) {
    this._weightedBackendServices.internalValue = value;
  }
  public resetWeightedBackendServices() {
    this._weightedBackendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedBackendServicesInput() {
    return this._weightedBackendServices.internalValue;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect {
  /**
  * The host that will be used in the redirect response instead of the one
  * that was supplied in the request. The value must be between 1 and 255
  * characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host_redirect GoogleComputeRegionUrlMap#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https.
  * If set to false, the URL scheme of the redirected request will remain the
  * same as that of the request. This must only be set for UrlMaps used in
  * TargetHttpProxys. Setting this true for TargetHttpsProxy is not
  * permitted. The default is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#https_redirect GoogleComputeRegionUrlMap#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one
  * that was supplied in the request. pathRedirect cannot be supplied
  * together with prefixRedirect. Supply one alone or neither. If neither is
  * supplied, the path of the original request will be used for the redirect.
  * The value must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_redirect GoogleComputeRegionUrlMap#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The prefix that replaces the prefixMatch specified in the
  * HttpRouteRuleMatch, retaining the remaining portion of the URL before
  * redirecting the request. prefixRedirect cannot be supplied together with
  * pathRedirect. Supply one alone or neither. If neither is supplied, the
  * path of the original request will be used for the redirect. The value
  * must be between 1 and 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#prefix_redirect GoogleComputeRegionUrlMap#prefix_redirect}
  */
  readonly prefixRedirect?: string;
  /**
  * The HTTP Status code to use for this RedirectAction. Supported values are:
  * 
  * * MOVED_PERMANENTLY_DEFAULT, which is the default value and corresponds to 301.
  * 
  * * FOUND, which corresponds to 302.
  * 
  * * SEE_OTHER which corresponds to 303.
  * 
  * * TEMPORARY_REDIRECT, which corresponds to 307. In this case, the request method
  * will be retained.
  * 
  * * PERMANENT_REDIRECT, which corresponds to 308. In this case,
  * the request method will be retained. Possible values: ["FOUND", "MOVED_PERMANENTLY_DEFAULT", "PERMANENT_REDIRECT", "SEE_OTHER", "TEMPORARY_REDIRECT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#redirect_response_code GoogleComputeRegionUrlMap#redirect_response_code}
  */
  readonly redirectResponseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is
  * removed prior to redirecting the request. If set to false, the query
  * portion of the original URL is retained. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#strip_query GoogleComputeRegionUrlMap#strip_query}
  */
  readonly stripQuery?: boolean | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    prefix_redirect: cdktf.stringToTerraform(struct!.prefixRedirect),
    redirect_response_code: cdktf.stringToTerraform(struct!.redirectResponseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectOutputReference | GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_redirect: {
      value: cdktf.stringToHclTerraform(struct!.prefixRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_response_code: {
      value: cdktf.stringToHclTerraform(struct!.redirectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktf.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._prefixRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRedirect = this._prefixRedirect;
    }
    if (this._redirectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectResponseCode = this._redirectResponseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._prefixRedirect = undefined;
      this._redirectResponseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._prefixRedirect = value.prefixRedirect;
      this._redirectResponseCode = value.redirectResponseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // prefix_redirect - computed: false, optional: true, required: false
  private _prefixRedirect?: string; 
  public get prefixRedirect() {
    return this.getStringAttribute('prefix_redirect');
  }
  public set prefixRedirect(value: string) {
    this._prefixRedirect = value;
  }
  public resetPrefixRedirect() {
    this._prefixRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRedirectInput() {
    return this._prefixRedirect;
  }

  // redirect_response_code - computed: false, optional: true, required: false
  private _redirectResponseCode?: string; 
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }
  public set redirectResponseCode(value: string) {
    this._redirectResponseCode = value;
  }
  public resetRedirectResponseCode() {
    this._redirectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectResponseCodeInput() {
    return this._redirectResponseCode;
  }

  // strip_query - computed: false, optional: true, required: false
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  public resetStripQuery() {
    this._stripQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface GoogleComputeRegionUrlMapPathMatcherRouteRules {
  /**
  * For routeRules within a given pathMatcher, priority determines the order
  * in which load balancer will interpret routeRules. RouteRules are evaluated
  * in order of priority, from the lowest to highest number. The priority of
  * a rule decreases as its number increases (1, 2, 3, N+1). The first rule
  * that matches the request is applied.
  * 
  * You cannot configure two or more routeRules with the same priority.
  * Priority for each rule must be set to a number between 0 and
  * 2147483647 inclusive.
  * 
  * Priority numbers can have gaps, which enable you to add or remove rules
  * in the future without affecting the rest of the rules. For example,
  * 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which
  * you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the
  * future without any impact on existing rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#priority GoogleComputeRegionUrlMap#priority}
  */
  readonly priority: number;
  /**
  * The region backend service resource to which traffic is
  * directed if this rule is matched. If routeAction is additionally specified,
  * advanced routing actions like URL Rewrites, etc. take effect prior to sending
  * the request to the backend. However, if service is specified, routeAction cannot
  * contain any weightedBackendService s. Conversely, if routeAction specifies any
  * weightedBackendServices, service must not be specified. Only one of urlRedirect,
  * service or routeAction.weightedBackendService must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#service GoogleComputeRegionUrlMap#service}
  */
  readonly service?: string;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#header_action GoogleComputeRegionUrlMap#header_action}
  */
  readonly headerAction?: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderAction;
  /**
  * match_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#match_rules GoogleComputeRegionUrlMap#match_rules}
  */
  readonly matchRules?: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable;
  /**
  * route_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#route_action GoogleComputeRegionUrlMap#route_action}
  */
  readonly routeAction?: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteAction;
  /**
  * url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#url_redirect GoogleComputeRegionUrlMap#url_redirect}
  */
  readonly urlRedirect?: GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect;
}

export function googleComputeRegionUrlMapPathMatcherRouteRulesToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    service: cdktf.stringToTerraform(struct!.service),
    header_action: googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionToTerraform(struct!.headerAction),
    match_rules: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesToTerraform, true)(struct!.matchRules),
    route_action: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionToTerraform(struct!.routeAction),
    url_redirect: googleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectToTerraform(struct!.urlRedirect),
  }
}


export function googleComputeRegionUrlMapPathMatcherRouteRulesToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcherRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_action: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionList",
    },
    match_rules: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesToHclTerraform, true)(struct!.matchRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesList",
    },
    route_action: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesRouteActionToHclTerraform(struct!.routeAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionList",
    },
    url_redirect: {
      value: googleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectToHclTerraform(struct!.urlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcherRouteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._matchRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules?.internalValue;
    }
    if (this._routeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAction = this._routeAction?.internalValue;
    }
    if (this._urlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirect = this._urlRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcherRouteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._service = undefined;
      this._headerAction.internalValue = undefined;
      this._matchRules.internalValue = undefined;
      this._routeAction.internalValue = undefined;
      this._urlRedirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._service = value.service;
      this._headerAction.internalValue = value.headerAction;
      this._matchRules.internalValue = value.matchRules;
      this._routeAction.internalValue = value.routeAction;
      this._urlRedirect.internalValue = value.urlRedirect;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules = new GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRulesList(this, "match_rules", false);
  public get matchRules() {
    return this._matchRules;
  }
  public putMatchRules(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesMatchRules[] | cdktf.IResolvable) {
    this._matchRules.internalValue = value;
  }
  public resetMatchRules() {
    this._matchRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules.internalValue;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesRouteAction) {
    this._routeAction.internalValue = value;
  }
  public resetRouteAction() {
    this._routeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeActionInput() {
    return this._routeAction.internalValue;
  }

  // url_redirect - computed: false, optional: true, required: false
  private _urlRedirect = new GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: GoogleComputeRegionUrlMapPathMatcherRouteRulesUrlRedirect) {
    this._urlRedirect.internalValue = value;
  }
  public resetUrlRedirect() {
    this._urlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectInput() {
    return this._urlRedirect.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherRouteRulesList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcherRouteRules[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherRouteRulesOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapPathMatcher {
  /**
  * A reference to a RegionBackendService resource. This will be used if
  * none of the pathRules defined by this PathMatcher is matched by
  * the URL's path portion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#default_service GoogleComputeRegionUrlMap#default_service}
  */
  readonly defaultService?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#description GoogleComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * The name to which this PathMatcher is referred by the HostRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#name GoogleComputeRegionUrlMap#name}
  */
  readonly name: string;
  /**
  * default_url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#default_url_redirect GoogleComputeRegionUrlMap#default_url_redirect}
  */
  readonly defaultUrlRedirect?: GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirect;
  /**
  * path_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path_rule GoogleComputeRegionUrlMap#path_rule}
  */
  readonly pathRule?: GoogleComputeRegionUrlMapPathMatcherPathRule[] | cdktf.IResolvable;
  /**
  * route_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#route_rules GoogleComputeRegionUrlMap#route_rules}
  */
  readonly routeRules?: GoogleComputeRegionUrlMapPathMatcherRouteRules[] | cdktf.IResolvable;
}

export function googleComputeRegionUrlMapPathMatcherToTerraform(struct?: GoogleComputeRegionUrlMapPathMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_service: cdktf.stringToTerraform(struct!.defaultService),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    default_url_redirect: googleComputeRegionUrlMapPathMatcherDefaultUrlRedirectToTerraform(struct!.defaultUrlRedirect),
    path_rule: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherPathRuleToTerraform, true)(struct!.pathRule),
    route_rules: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherRouteRulesToTerraform, true)(struct!.routeRules),
  }
}


export function googleComputeRegionUrlMapPathMatcherToHclTerraform(struct?: GoogleComputeRegionUrlMapPathMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_service: {
      value: cdktf.stringToHclTerraform(struct!.defaultService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_url_redirect: {
      value: googleComputeRegionUrlMapPathMatcherDefaultUrlRedirectToHclTerraform(struct!.defaultUrlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirectList",
    },
    path_rule: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherPathRuleToHclTerraform, true)(struct!.pathRule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherPathRuleList",
    },
    route_rules: {
      value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherRouteRulesToHclTerraform, true)(struct!.routeRules),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionUrlMapPathMatcherRouteRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionUrlMapPathMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapPathMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultService !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultService = this._defaultService;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._defaultUrlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUrlRedirect = this._defaultUrlRedirect?.internalValue;
    }
    if (this._pathRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRule = this._pathRule?.internalValue;
    }
    if (this._routeRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRules = this._routeRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapPathMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultService = undefined;
      this._description = undefined;
      this._name = undefined;
      this._defaultUrlRedirect.internalValue = undefined;
      this._pathRule.internalValue = undefined;
      this._routeRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultService = value.defaultService;
      this._description = value.description;
      this._name = value.name;
      this._defaultUrlRedirect.internalValue = value.defaultUrlRedirect;
      this._pathRule.internalValue = value.pathRule;
      this._routeRules.internalValue = value.routeRules;
    }
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect = new GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirectOutputReference(this, "default_url_redirect");
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public putDefaultUrlRedirect(value: GoogleComputeRegionUrlMapPathMatcherDefaultUrlRedirect) {
    this._defaultUrlRedirect.internalValue = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect.internalValue;
  }

  // path_rule - computed: false, optional: true, required: false
  private _pathRule = new GoogleComputeRegionUrlMapPathMatcherPathRuleList(this, "path_rule", false);
  public get pathRule() {
    return this._pathRule;
  }
  public putPathRule(value: GoogleComputeRegionUrlMapPathMatcherPathRule[] | cdktf.IResolvable) {
    this._pathRule.internalValue = value;
  }
  public resetPathRule() {
    this._pathRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRuleInput() {
    return this._pathRule.internalValue;
  }

  // route_rules - computed: false, optional: true, required: false
  private _routeRules = new GoogleComputeRegionUrlMapPathMatcherRouteRulesList(this, "route_rules", false);
  public get routeRules() {
    return this._routeRules;
  }
  public putRouteRules(value: GoogleComputeRegionUrlMapPathMatcherRouteRules[] | cdktf.IResolvable) {
    this._routeRules.internalValue = value;
  }
  public resetRouteRules() {
    this._routeRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRulesInput() {
    return this._routeRules.internalValue;
  }
}

export class GoogleComputeRegionUrlMapPathMatcherList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapPathMatcher[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapPathMatcherOutputReference {
    return new GoogleComputeRegionUrlMapPathMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapTest {
  /**
  * Description of this test case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#description GoogleComputeRegionUrlMap#description}
  */
  readonly description?: string;
  /**
  * Host portion of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#host GoogleComputeRegionUrlMap#host}
  */
  readonly host: string;
  /**
  * Path portion of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#path GoogleComputeRegionUrlMap#path}
  */
  readonly path: string;
  /**
  * A reference to expected RegionBackendService resource the given URL should be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#service GoogleComputeRegionUrlMap#service}
  */
  readonly service: string;
}

export function googleComputeRegionUrlMapTestToTerraform(struct?: GoogleComputeRegionUrlMapTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function googleComputeRegionUrlMapTestToHclTerraform(struct?: GoogleComputeRegionUrlMapTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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

export class GoogleComputeRegionUrlMapTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionUrlMapTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionUrlMapTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._host = undefined;
      this._path = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._host = value.host;
      this._path = value.path;
      this._service = value.service;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class GoogleComputeRegionUrlMapTestList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionUrlMapTest[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionUrlMapTestOutputReference {
    return new GoogleComputeRegionUrlMapTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionUrlMapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#create GoogleComputeRegionUrlMap#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#delete GoogleComputeRegionUrlMap#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#update GoogleComputeRegionUrlMap#update}
  */
  readonly update?: string;
}

export function googleComputeRegionUrlMapTimeoutsToTerraform(struct?: GoogleComputeRegionUrlMapTimeouts | cdktf.IResolvable): any {
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


export function googleComputeRegionUrlMapTimeoutsToHclTerraform(struct?: GoogleComputeRegionUrlMapTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionUrlMapTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeRegionUrlMapTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionUrlMapTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map google_compute_region_url_map}
*/
export class GoogleComputeRegionUrlMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_url_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeRegionUrlMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeRegionUrlMap to import
  * @param importFromId The id of the existing GoogleComputeRegionUrlMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeRegionUrlMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_url_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_url_map google_compute_region_url_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionUrlMapConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionUrlMapConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_url_map',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
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
    this._defaultService = config.defaultService;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._defaultRouteAction.internalValue = config.defaultRouteAction;
    this._defaultUrlRedirect.internalValue = config.defaultUrlRedirect;
    this._hostRule.internalValue = config.hostRule;
    this._pathMatcher.internalValue = config.pathMatcher;
    this._test.internalValue = config.test;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // default_service - computed: false, optional: true, required: false
  private _defaultService?: string; 
  public get defaultService() {
    return this.getStringAttribute('default_service');
  }
  public set defaultService(value: string) {
    this._defaultService = value;
  }
  public resetDefaultService() {
    this._defaultService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceInput() {
    return this._defaultService;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // map_id - computed: true, optional: false, required: false
  public get mapId() {
    return this.getNumberAttribute('map_id');
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

  // region - computed: true, optional: true, required: false
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // default_route_action - computed: false, optional: true, required: false
  private _defaultRouteAction = new GoogleComputeRegionUrlMapDefaultRouteActionOutputReference(this, "default_route_action");
  public get defaultRouteAction() {
    return this._defaultRouteAction;
  }
  public putDefaultRouteAction(value: GoogleComputeRegionUrlMapDefaultRouteAction) {
    this._defaultRouteAction.internalValue = value;
  }
  public resetDefaultRouteAction() {
    this._defaultRouteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteActionInput() {
    return this._defaultRouteAction.internalValue;
  }

  // default_url_redirect - computed: false, optional: true, required: false
  private _defaultUrlRedirect = new GoogleComputeRegionUrlMapDefaultUrlRedirectOutputReference(this, "default_url_redirect");
  public get defaultUrlRedirect() {
    return this._defaultUrlRedirect;
  }
  public putDefaultUrlRedirect(value: GoogleComputeRegionUrlMapDefaultUrlRedirect) {
    this._defaultUrlRedirect.internalValue = value;
  }
  public resetDefaultUrlRedirect() {
    this._defaultUrlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlRedirectInput() {
    return this._defaultUrlRedirect.internalValue;
  }

  // host_rule - computed: false, optional: true, required: false
  private _hostRule = new GoogleComputeRegionUrlMapHostRuleList(this, "host_rule", true);
  public get hostRule() {
    return this._hostRule;
  }
  public putHostRule(value: GoogleComputeRegionUrlMapHostRule[] | cdktf.IResolvable) {
    this._hostRule.internalValue = value;
  }
  public resetHostRule() {
    this._hostRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRuleInput() {
    return this._hostRule.internalValue;
  }

  // path_matcher - computed: false, optional: true, required: false
  private _pathMatcher = new GoogleComputeRegionUrlMapPathMatcherList(this, "path_matcher", false);
  public get pathMatcher() {
    return this._pathMatcher;
  }
  public putPathMatcher(value: GoogleComputeRegionUrlMapPathMatcher[] | cdktf.IResolvable) {
    this._pathMatcher.internalValue = value;
  }
  public resetPathMatcher() {
    this._pathMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatcherInput() {
    return this._pathMatcher.internalValue;
  }

  // test - computed: false, optional: true, required: false
  private _test = new GoogleComputeRegionUrlMapTestList(this, "test", false);
  public get test() {
    return this._test;
  }
  public putTest(value: GoogleComputeRegionUrlMapTest[] | cdktf.IResolvable) {
    this._test.internalValue = value;
  }
  public resetTest() {
    this._test.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionUrlMapTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionUrlMapTimeouts) {
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
      default_service: cdktf.stringToTerraform(this._defaultService),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      default_route_action: googleComputeRegionUrlMapDefaultRouteActionToTerraform(this._defaultRouteAction.internalValue),
      default_url_redirect: googleComputeRegionUrlMapDefaultUrlRedirectToTerraform(this._defaultUrlRedirect.internalValue),
      host_rule: cdktf.listMapper(googleComputeRegionUrlMapHostRuleToTerraform, true)(this._hostRule.internalValue),
      path_matcher: cdktf.listMapper(googleComputeRegionUrlMapPathMatcherToTerraform, true)(this._pathMatcher.internalValue),
      test: cdktf.listMapper(googleComputeRegionUrlMapTestToTerraform, true)(this._test.internalValue),
      timeouts: googleComputeRegionUrlMapTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_service: {
        value: cdktf.stringToHclTerraform(this._defaultService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route_action: {
        value: googleComputeRegionUrlMapDefaultRouteActionToHclTerraform(this._defaultRouteAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionUrlMapDefaultRouteActionList",
      },
      default_url_redirect: {
        value: googleComputeRegionUrlMapDefaultUrlRedirectToHclTerraform(this._defaultUrlRedirect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionUrlMapDefaultUrlRedirectList",
      },
      host_rule: {
        value: cdktf.listMapperHcl(googleComputeRegionUrlMapHostRuleToHclTerraform, true)(this._hostRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeRegionUrlMapHostRuleList",
      },
      path_matcher: {
        value: cdktf.listMapperHcl(googleComputeRegionUrlMapPathMatcherToHclTerraform, true)(this._pathMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionUrlMapPathMatcherList",
      },
      test: {
        value: cdktf.listMapperHcl(googleComputeRegionUrlMapTestToHclTerraform, true)(this._test.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionUrlMapTestList",
      },
      timeouts: {
        value: googleComputeRegionUrlMapTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeRegionUrlMapTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
