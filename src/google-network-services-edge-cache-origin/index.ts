/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkServicesEdgeCacheOriginConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#description GoogleNetworkServicesEdgeCacheOrigin#description}
  */
  readonly description?: string;
  /**
  * The Origin resource to try when the current origin cannot be reached.
  * After maxAttempts is reached, the configured failoverOrigin will be used to fulfil the request.
  * 
  * The value of timeout.maxAttemptsTimeout dictates the timeout across all origins.
  * A reference to a Topic resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#failover_origin GoogleNetworkServicesEdgeCacheOrigin#failover_origin}
  */
  readonly failoverOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#id GoogleNetworkServicesEdgeCacheOrigin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the EdgeCache resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#labels GoogleNetworkServicesEdgeCacheOrigin#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one of the retryConditions.
  * 
  * Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is specified. That failoverOrigin may specify its own maxAttempts,
  * retryConditions and failoverOrigin to control its own cache fill failures.
  * 
  * The total number of allowed attempts to cache fill across this and failover origins is limited to four.
  * The total time allowed for cache fill attempts across this and failover origins can be controlled with maxAttemptsTimeout.
  * 
  * The last valid, non-retried response from all origins will be returned to the client.
  * If no origin returns a valid response, an HTTP 502 will be returned to the client.
  * 
  * Defaults to 1. Must be a value greater than 0 and less than 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#max_attempts GoogleNetworkServicesEdgeCacheOrigin#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * Name of the resource; provided by the client when the resource is created.
  * The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
  * and all following characters must be a dash, underscore, letter or digit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#name GoogleNetworkServicesEdgeCacheOrigin#name}
  */
  readonly name: string;
  /**
  * A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud Storage bucket.
  * 
  * This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4: 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname
  * 
  * When providing an FQDN (hostname), it must be publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable.  It must not contain a protocol (e.g., https://) and it must not contain any slashes.
  * If a Cloud Storage bucket is provided, it must be in the canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#origin_address GoogleNetworkServicesEdgeCacheOrigin#origin_address}
  */
  readonly originAddress: string;
  /**
  * The port to connect to the origin on.
  * Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#port GoogleNetworkServicesEdgeCacheOrigin#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#project GoogleNetworkServicesEdgeCacheOrigin#project}
  */
  readonly project?: string;
  /**
  * The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users use HTTP2 for both security & performance.
  * 
  * When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed, unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#protocol GoogleNetworkServicesEdgeCacheOrigin#protocol}
  */
  readonly protocol?: string;
  /**
  * Specifies one or more retry conditions for the configured origin.
  * 
  * If the failure mode during a connection attempt to the origin matches the configured retryCondition(s),
  * the origin request will be retried up to maxAttempts times. The failoverOrigin, if configured, will then be used to satisfy the request.
  * 
  * The default retryCondition is "CONNECT_FAILURE".
  * 
  * retryConditions apply to this origin, and not subsequent failoverOrigin(s),
  * which may specify their own retryConditions and maxAttempts.
  * 
  * Valid values are:
  * 
  * - CONNECT_FAILURE: Retry on failures connecting to origins, for example due to connection timeouts.
  * - HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams.
  * - GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504.
  * - RETRIABLE_4XX: Retry for retriable 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests)
  * - NOT_FOUND: Retry if the origin returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
  * - FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX", "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#retry_conditions GoogleNetworkServicesEdgeCacheOrigin#retry_conditions}
  */
  readonly retryConditions?: string[];
  /**
  * aws_v4_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#aws_v4_authentication GoogleNetworkServicesEdgeCacheOrigin#aws_v4_authentication}
  */
  readonly awsV4Authentication?: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication;
  /**
  * origin_override_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#origin_override_action GoogleNetworkServicesEdgeCacheOrigin#origin_override_action}
  */
  readonly originOverrideAction?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction;
  /**
  * origin_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#origin_redirect GoogleNetworkServicesEdgeCacheOrigin#origin_redirect}
  */
  readonly originRedirect?: GoogleNetworkServicesEdgeCacheOriginOriginRedirect;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#timeout GoogleNetworkServicesEdgeCacheOrigin#timeout}
  */
  readonly timeout?: GoogleNetworkServicesEdgeCacheOriginTimeout;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#timeouts GoogleNetworkServicesEdgeCacheOrigin#timeouts}
  */
  readonly timeouts?: GoogleNetworkServicesEdgeCacheOriginTimeouts;
}
export interface GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication {
  /**
  * The access key ID your origin uses to identify the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#access_key_id GoogleNetworkServicesEdgeCacheOrigin#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The name of the AWS region that your origin is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#origin_region GoogleNetworkServicesEdgeCacheOrigin#origin_region}
  */
  readonly originRegion: string;
  /**
  * The Secret Manager secret version of the secret access key used by your origin.
  * 
  * This is the resource name of the secret version in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the project, secret, and version you require.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#secret_access_key_version GoogleNetworkServicesEdgeCacheOrigin#secret_access_key_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretAccessKeyVersion: string;
}

export function googleNetworkServicesEdgeCacheOriginAwsV4AuthenticationToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference | GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    origin_region: cdktf.stringToTerraform(struct!.originRegion),
    secret_access_key_version: cdktf.stringToTerraform(struct!.secretAccessKeyVersion),
  }
}


export function googleNetworkServicesEdgeCacheOriginAwsV4AuthenticationToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference | GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_region: {
      value: cdktf.stringToHclTerraform(struct!.originRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key_version: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKeyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._originRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRegion = this._originRegion;
    }
    if (this._secretAccessKeyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKeyVersion = this._secretAccessKeyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._originRegion = undefined;
      this._secretAccessKeyVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._originRegion = value.originRegion;
      this._secretAccessKeyVersion = value.secretAccessKeyVersion;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // origin_region - computed: false, optional: false, required: true
  private _originRegion?: string; 
  public get originRegion() {
    return this.getStringAttribute('origin_region');
  }
  public set originRegion(value: string) {
    this._originRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originRegionInput() {
    return this._originRegion;
  }

  // secret_access_key_version - computed: false, optional: false, required: true
  private _secretAccessKeyVersion?: string; 
  public get secretAccessKeyVersion() {
    return this.getStringAttribute('secret_access_key_version');
  }
  public set secretAccessKeyVersion(value: string) {
    this._secretAccessKeyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyVersionInput() {
    return this._secretAccessKeyVersion;
  }
}
export interface GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd {
  /**
  * The name of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#header_name GoogleNetworkServicesEdgeCacheOrigin#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the header to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#header_value GoogleNetworkServicesEdgeCacheOrigin#header_value}
  */
  readonly headerValue: string;
  /**
  * Whether to replace all existing headers with the same name.
  * 
  * By default, added header values are appended
  * to the response or request headers with the
  * same field names. The added values are
  * separated by commas.
  * 
  * To overwrite existing values, set 'replace' to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#replace GoogleNetworkServicesEdgeCacheOrigin#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
}

export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
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


export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd | cdktf.IResolvable): any {
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

export class GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd | cdktf.IResolvable | undefined) {
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

export class GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference {
    return new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction {
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#request_headers_to_add GoogleNetworkServicesEdgeCacheOrigin#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable;
}

export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_add: cdktf.listMapper(googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
  }
}


export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_add: {
      value: cdktf.listMapperHcl(googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
    }
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }
}
export interface GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected
  * origin, the request's host header is replaced with
  * contents of the hostRewrite.
  * 
  * This value must be between 1 and 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#host_rewrite GoogleNetworkServicesEdgeCacheOrigin#host_rewrite}
  */
  readonly hostRewrite?: string;
}

export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
  }
}


export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
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
}
export interface GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction {
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#header_action GoogleNetworkServicesEdgeCacheOrigin#header_action}
  */
  readonly headerAction?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#url_rewrite GoogleNetworkServicesEdgeCacheOrigin#url_rewrite}
  */
  readonly urlRewrite?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite;
}

export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_action: googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionToTerraform(struct!.headerAction),
    url_rewrite: googleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteToTerraform(struct!.urlRewrite),
  }
}


export function googleNetworkServicesEdgeCacheOriginOriginOverrideActionToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_action: {
      value: googleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionToHclTerraform(struct!.headerAction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionList",
    },
    url_rewrite: {
      value: googleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerAction.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerAction.internalValue = value.headerAction;
      this._urlRewrite.internalValue = value.urlRewrite;
    }
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }
}
export interface GoogleNetworkServicesEdgeCacheOriginOriginRedirect {
  /**
  * The set of redirect response codes that the CDN
  * follows. Values of
  * [RedirectConditions](https://cloud.google.com/media-cdn/docs/reference/rest/v1/projects.locations.edgeCacheOrigins#redirectconditions)
  * are accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#redirect_conditions GoogleNetworkServicesEdgeCacheOrigin#redirect_conditions}
  */
  readonly redirectConditions?: string[];
}

export function googleNetworkServicesEdgeCacheOriginOriginRedirectToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectConditions),
  }
}


export function googleNetworkServicesEdgeCacheOriginOriginRedirectToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference | GoogleNetworkServicesEdgeCacheOriginOriginRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginOriginRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectConditions = this._redirectConditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginOriginRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectConditions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectConditions = value.redirectConditions;
    }
  }

  // redirect_conditions - computed: false, optional: true, required: false
  private _redirectConditions?: string[]; 
  public get redirectConditions() {
    return this.getListAttribute('redirect_conditions');
  }
  public set redirectConditions(value: string[]) {
    this._redirectConditions = value;
  }
  public resetRedirectConditions() {
    this._redirectConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectConditionsInput() {
    return this._redirectConditions;
  }
}
export interface GoogleNetworkServicesEdgeCacheOriginTimeout {
  /**
  * The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.
  * 
  * Defaults to 5 seconds. The timeout must be a value between 1s and 15s.
  * 
  * The connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#connect_timeout GoogleNetworkServicesEdgeCacheOrigin#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. A HTTP 504 will be returned if the timeout is reached before a response is returned.
  * 
  * Defaults to 15 seconds. The timeout must be a value between 1s and 30s.
  * 
  * If a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#max_attempts_timeout GoogleNetworkServicesEdgeCacheOrigin#max_attempts_timeout}
  */
  readonly maxAttemptsTimeout?: string;
  /**
  * The maximum duration to wait between reads of a single HTTP connection/stream.
  * 
  * Defaults to 15 seconds.  The timeout must be a value between 1s and 30s.
  * 
  * The readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.
  * 
  * If the response headers have already been written to the connection, the response will be truncated and logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#read_timeout GoogleNetworkServicesEdgeCacheOrigin#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.
  * 
  * Defaults to 30 seconds. The timeout must be a value between 1s and 120s.
  * 
  * The responseTimeout starts after the connection has been established.
  * 
  * This also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.
  * 
  * If the response headers have already been written to the connection, the response will be truncated and logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#response_timeout GoogleNetworkServicesEdgeCacheOrigin#response_timeout}
  */
  readonly responseTimeout?: string;
}

export function googleNetworkServicesEdgeCacheOriginTimeoutToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference | GoogleNetworkServicesEdgeCacheOriginTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    max_attempts_timeout: cdktf.stringToTerraform(struct!.maxAttemptsTimeout),
    read_timeout: cdktf.stringToTerraform(struct!.readTimeout),
    response_timeout: cdktf.stringToTerraform(struct!.responseTimeout),
  }
}


export function googleNetworkServicesEdgeCacheOriginTimeoutToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference | GoogleNetworkServicesEdgeCacheOriginTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_attempts_timeout: {
      value: cdktf.stringToHclTerraform(struct!.maxAttemptsTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_timeout: {
      value: cdktf.stringToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._maxAttemptsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttemptsTimeout = this._maxAttemptsTimeout;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectTimeout = undefined;
      this._maxAttemptsTimeout = undefined;
      this._readTimeout = undefined;
      this._responseTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectTimeout = value.connectTimeout;
      this._maxAttemptsTimeout = value.maxAttemptsTimeout;
      this._readTimeout = value.readTimeout;
      this._responseTimeout = value.responseTimeout;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // max_attempts_timeout - computed: false, optional: true, required: false
  private _maxAttemptsTimeout?: string; 
  public get maxAttemptsTimeout() {
    return this.getStringAttribute('max_attempts_timeout');
  }
  public set maxAttemptsTimeout(value: string) {
    this._maxAttemptsTimeout = value;
  }
  public resetMaxAttemptsTimeout() {
    this._maxAttemptsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsTimeoutInput() {
    return this._maxAttemptsTimeout;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: string; 
  public get responseTimeout() {
    return this.getStringAttribute('response_timeout');
  }
  public set responseTimeout(value: string) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }
}
export interface GoogleNetworkServicesEdgeCacheOriginTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#create GoogleNetworkServicesEdgeCacheOrigin#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#delete GoogleNetworkServicesEdgeCacheOrigin#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#update GoogleNetworkServicesEdgeCacheOrigin#update}
  */
  readonly update?: string;
}

export function googleNetworkServicesEdgeCacheOriginTimeoutsToTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkServicesEdgeCacheOriginTimeoutsToHclTerraform(struct?: GoogleNetworkServicesEdgeCacheOriginTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkServicesEdgeCacheOriginTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkServicesEdgeCacheOriginTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin google_network_services_edge_cache_origin}
*/
export class GoogleNetworkServicesEdgeCacheOrigin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_edge_cache_origin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheOrigin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkServicesEdgeCacheOrigin to import
  * @param importFromId The id of the existing GoogleNetworkServicesEdgeCacheOrigin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkServicesEdgeCacheOrigin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_edge_cache_origin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_services_edge_cache_origin google_network_services_edge_cache_origin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkServicesEdgeCacheOriginConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkServicesEdgeCacheOriginConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_edge_cache_origin',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.25.0',
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
    this._description = config.description;
    this._failoverOrigin = config.failoverOrigin;
    this._id = config.id;
    this._labels = config.labels;
    this._maxAttempts = config.maxAttempts;
    this._name = config.name;
    this._originAddress = config.originAddress;
    this._port = config.port;
    this._project = config.project;
    this._protocol = config.protocol;
    this._retryConditions = config.retryConditions;
    this._awsV4Authentication.internalValue = config.awsV4Authentication;
    this._originOverrideAction.internalValue = config.originOverrideAction;
    this._originRedirect.internalValue = config.originRedirect;
    this._timeout.internalValue = config.timeout;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // failover_origin - computed: false, optional: true, required: false
  private _failoverOrigin?: string; 
  public get failoverOrigin() {
    return this.getStringAttribute('failover_origin');
  }
  public set failoverOrigin(value: string) {
    this._failoverOrigin = value;
  }
  public resetFailoverOrigin() {
    this._failoverOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverOriginInput() {
    return this._failoverOrigin;
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

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
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

  // origin_address - computed: false, optional: false, required: true
  private _originAddress?: string; 
  public get originAddress() {
    return this.getStringAttribute('origin_address');
  }
  public set originAddress(value: string) {
    this._originAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originAddressInput() {
    return this._originAddress;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // retry_conditions - computed: true, optional: true, required: false
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // aws_v4_authentication - computed: false, optional: true, required: false
  private _awsV4Authentication = new GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationOutputReference(this, "aws_v4_authentication");
  public get awsV4Authentication() {
    return this._awsV4Authentication;
  }
  public putAwsV4Authentication(value: GoogleNetworkServicesEdgeCacheOriginAwsV4Authentication) {
    this._awsV4Authentication.internalValue = value;
  }
  public resetAwsV4Authentication() {
    this._awsV4Authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV4AuthenticationInput() {
    return this._awsV4Authentication.internalValue;
  }

  // origin_override_action - computed: false, optional: true, required: false
  private _originOverrideAction = new GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionOutputReference(this, "origin_override_action");
  public get originOverrideAction() {
    return this._originOverrideAction;
  }
  public putOriginOverrideAction(value: GoogleNetworkServicesEdgeCacheOriginOriginOverrideAction) {
    this._originOverrideAction.internalValue = value;
  }
  public resetOriginOverrideAction() {
    this._originOverrideAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originOverrideActionInput() {
    return this._originOverrideAction.internalValue;
  }

  // origin_redirect - computed: false, optional: true, required: false
  private _originRedirect = new GoogleNetworkServicesEdgeCacheOriginOriginRedirectOutputReference(this, "origin_redirect");
  public get originRedirect() {
    return this._originRedirect;
  }
  public putOriginRedirect(value: GoogleNetworkServicesEdgeCacheOriginOriginRedirect) {
    this._originRedirect.internalValue = value;
  }
  public resetOriginRedirect() {
    this._originRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRedirectInput() {
    return this._originRedirect.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new GoogleNetworkServicesEdgeCacheOriginTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: GoogleNetworkServicesEdgeCacheOriginTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkServicesEdgeCacheOriginTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkServicesEdgeCacheOriginTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      failover_origin: cdktf.stringToTerraform(this._failoverOrigin),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_attempts: cdktf.numberToTerraform(this._maxAttempts),
      name: cdktf.stringToTerraform(this._name),
      origin_address: cdktf.stringToTerraform(this._originAddress),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      retry_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retryConditions),
      aws_v4_authentication: googleNetworkServicesEdgeCacheOriginAwsV4AuthenticationToTerraform(this._awsV4Authentication.internalValue),
      origin_override_action: googleNetworkServicesEdgeCacheOriginOriginOverrideActionToTerraform(this._originOverrideAction.internalValue),
      origin_redirect: googleNetworkServicesEdgeCacheOriginOriginRedirectToTerraform(this._originRedirect.internalValue),
      timeout: googleNetworkServicesEdgeCacheOriginTimeoutToTerraform(this._timeout.internalValue),
      timeouts: googleNetworkServicesEdgeCacheOriginTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_origin: {
        value: cdktf.stringToHclTerraform(this._failoverOrigin),
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
      max_attempts: {
        value: cdktf.numberToHclTerraform(this._maxAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_address: {
        value: cdktf.stringToHclTerraform(this._originAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_conditions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retryConditions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_v4_authentication: {
        value: googleNetworkServicesEdgeCacheOriginAwsV4AuthenticationToHclTerraform(this._awsV4Authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesEdgeCacheOriginAwsV4AuthenticationList",
      },
      origin_override_action: {
        value: googleNetworkServicesEdgeCacheOriginOriginOverrideActionToHclTerraform(this._originOverrideAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesEdgeCacheOriginOriginOverrideActionList",
      },
      origin_redirect: {
        value: googleNetworkServicesEdgeCacheOriginOriginRedirectToHclTerraform(this._originRedirect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesEdgeCacheOriginOriginRedirectList",
      },
      timeout: {
        value: googleNetworkServicesEdgeCacheOriginTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkServicesEdgeCacheOriginTimeoutList",
      },
      timeouts: {
        value: googleNetworkServicesEdgeCacheOriginTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkServicesEdgeCacheOriginTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
