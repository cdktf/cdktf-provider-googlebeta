// https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleEventarcPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined annotations. See https://google.aip.dev/128#annotations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#annotations GoogleEventarcPipeline#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Resource name of a KMS crypto key (managed by the user) used to
  * encrypt/decrypt the event data. If not set, an internal Google-owned key
  * will be used to encrypt messages. It must match the pattern
  * "projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#crypto_key_name GoogleEventarcPipeline#crypto_key_name}
  */
  readonly cryptoKeyName?: string;
  /**
  * Display name of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#display_name GoogleEventarcPipeline#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#id GoogleEventarcPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User labels attached to the Pipeline that can be used to group
  * resources. An object containing a list of "key": value pairs. Example: {
  * "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#labels GoogleEventarcPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#location GoogleEventarcPipeline#location}
  */
  readonly location: string;
  /**
  * The user-provided ID to be assigned to the Pipeline. It should match the
  * format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#pipeline_id GoogleEventarcPipeline#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#project GoogleEventarcPipeline#project}
  */
  readonly project?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#destinations GoogleEventarcPipeline#destinations}
  */
  readonly destinations: GoogleEventarcPipelineDestinations[] | cdktf.IResolvable;
  /**
  * input_payload_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#input_payload_format GoogleEventarcPipeline#input_payload_format}
  */
  readonly inputPayloadFormat?: GoogleEventarcPipelineInputPayloadFormat;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#logging_config GoogleEventarcPipeline#logging_config}
  */
  readonly loggingConfig?: GoogleEventarcPipelineLoggingConfig;
  /**
  * mediations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#mediations GoogleEventarcPipeline#mediations}
  */
  readonly mediations?: GoogleEventarcPipelineMediations[] | cdktf.IResolvable;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#retry_policy GoogleEventarcPipeline#retry_policy}
  */
  readonly retryPolicy?: GoogleEventarcPipelineRetryPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#timeouts GoogleEventarcPipeline#timeouts}
  */
  readonly timeouts?: GoogleEventarcPipelineTimeouts;
}
export interface GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc {
  /**
  * Audience to be used to generate the OIDC Token. The audience claim
  * identifies the recipient that the JWT is intended for. If
  * unspecified, the destination URI will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#audience GoogleEventarcPipeline#audience}
  */
  readonly audience?: string;
  /**
  * Service account email used to generate the OIDC Token.
  * The principal who calls this API must have
  * iam.serviceAccounts.actAs permission in the service account. See
  * https://cloud.google.com/iam/docs/understanding-service-accounts
  * for more information. Eventarc service agents must have
  * roles/roles/iam.serviceAccountTokenCreator role to allow the
  * Pipeline to create OpenID tokens for authenticated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}
  */
  readonly serviceAccount: string;
}

export function googleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcToTerraform(struct?: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference | GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function googleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcToHclTerraform(struct?: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference | GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken {
  /**
  * OAuth scope to be used for generating OAuth access token. If not
  * specified, "https://www.googleapis.com/auth/cloud-platform" will be
  * used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#scope GoogleEventarcPipeline#scope}
  */
  readonly scope?: string;
  /**
  * Service account email used to generate the [OAuth
  * token](https://developers.google.com/identity/protocols/OAuth2).
  * The principal who calls this API must have
  * iam.serviceAccounts.actAs permission in the service account. See
  * https://cloud.google.com/iam/docs/understanding-service-accounts
  * for more information. Eventarc service agents must have
  * roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline
  * to create OAuth2 tokens for authenticated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#service_account GoogleEventarcPipeline#service_account}
  */
  readonly serviceAccount: string;
}

export function googleEventarcPipelineDestinationsAuthenticationConfigOauthTokenToTerraform(struct?: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference | GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function googleEventarcPipelineDestinationsAuthenticationConfigOauthTokenToHclTerraform(struct?: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference | GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface GoogleEventarcPipelineDestinationsAuthenticationConfig {
  /**
  * google_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#google_oidc GoogleEventarcPipeline#google_oidc}
  */
  readonly googleOidc?: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc;
  /**
  * oauth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#oauth_token GoogleEventarcPipeline#oauth_token}
  */
  readonly oauthToken?: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken;
}

export function googleEventarcPipelineDestinationsAuthenticationConfigToTerraform(struct?: GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference | GoogleEventarcPipelineDestinationsAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_oidc: googleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcToTerraform(struct!.googleOidc),
    oauth_token: googleEventarcPipelineDestinationsAuthenticationConfigOauthTokenToTerraform(struct!.oauthToken),
  }
}


export function googleEventarcPipelineDestinationsAuthenticationConfigToHclTerraform(struct?: GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference | GoogleEventarcPipelineDestinationsAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_oidc: {
      value: googleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcToHclTerraform(struct!.googleOidc),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcList",
    },
    oauth_token: {
      value: googleEventarcPipelineDestinationsAuthenticationConfigOauthTokenToHclTerraform(struct!.oauthToken),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleOidc = this._googleOidc?.internalValue;
    }
    if (this._oauthToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleOidc.internalValue = undefined;
      this._oauthToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleOidc.internalValue = value.googleOidc;
      this._oauthToken.internalValue = value.oauthToken;
    }
  }

  // google_oidc - computed: false, optional: true, required: false
  private _googleOidc = new GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference(this, "google_oidc");
  public get googleOidc() {
    return this._googleOidc;
  }
  public putGoogleOidc(value: GoogleEventarcPipelineDestinationsAuthenticationConfigGoogleOidc) {
    this._googleOidc.internalValue = value;
  }
  public resetGoogleOidc() {
    this._googleOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleOidcInput() {
    return this._googleOidc.internalValue;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken = new GoogleEventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference(this, "oauth_token");
  public get oauthToken() {
    return this._oauthToken;
  }
  public putOauthToken(value: GoogleEventarcPipelineDestinationsAuthenticationConfigOauthToken) {
    this._oauthToken.internalValue = value;
  }
  public resetOauthToken() {
    this._oauthToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken.internalValue;
  }
}
export interface GoogleEventarcPipelineDestinationsHttpEndpoint {
  /**
  * The CEL expression used to modify how the destination-bound HTTP
  * request is constructed.
  * 
  * If a binding expression is not specified here, the message
  * is treated as a CloudEvent and is mapped to the HTTP request according
  * to the CloudEvent HTTP Protocol Binding Binary Content Mode
  * (https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
  * In this representation, all fields except the 'data' and
  * 'datacontenttype' field on the message are mapped to HTTP request
  * headers with a prefix of 'ce-'.
  * 
  * To construct the HTTP request payload and the value of the content-type
  * HTTP header, the payload format is defined as follows:
  * 1) Use the output_payload_format_type on the Pipeline.Destination if it
  * is set, else:
  * 2) Use the input_payload_format_type on the Pipeline if it is set,
  * else:
  * 3) Treat the payload as opaque binary data.
  * 
  * The 'data' field of the message is converted to the payload format or
  * left as-is for case 3) and then attached as the payload of the HTTP
  * request. The 'content-type' header on the HTTP request is set to the
  * payload format type or left empty for case 3). However, if a mediation
  * has updated the 'datacontenttype' field on the message so that it is
  * not the same as the payload format type but it is still a prefix of the
  * payload format type, then the 'content-type' header on the HTTP request
  * is set to this 'datacontenttype' value. For example, if the
  * 'datacontenttype' is "application/json" and the payload format type is
  * "application/json; charset=utf-8", then the 'content-type' header on
  * the HTTP request is set to "application/json; charset=utf-8".
  * 
  * If a non-empty binding expression is specified then this expression is
  * used to modify the default CloudEvent HTTP Protocol Binding Binary
  * Content representation.
  * The result of the CEL expression must be a map of key/value pairs
  * which is used as follows:
  * - If a map named 'headers' exists on the result of the expression,
  * then its key/value pairs are directly mapped to the HTTP request
  * headers. The headers values are constructed from the corresponding
  * value type's canonical representation. If the 'headers' field doesn't
  * exist then the resulting HTTP request will be the headers of the
  * CloudEvent HTTP Binding Binary Content Mode representation of the final
  * message. Note: If the specified binding expression, has updated the
  * 'datacontenttype' field on the message so that it is not the same as
  * the payload format type but it is still a prefix of the payload format
  * type, then the 'content-type' header in the 'headers' map is set to
  * this 'datacontenttype' value.
  * - If a field named 'body' exists on the result of the expression then
  * its value is directly mapped to the body of the request. If the value
  * of the 'body' field is of type bytes or string then it is used for
  * the HTTP request body as-is, with no conversion. If the body field is
  * of any other type then it is converted to a JSON string. If the body
  * field does not exist then the resulting payload of the HTTP request
  * will be data value of the CloudEvent HTTP Binding Binary Content Mode
  * representation of the final message as described earlier.
  * - Any other fields in the resulting expression will be ignored.
  * 
  * The CEL expression may access the incoming CloudEvent message in its
  * definition, as follows:
  * - The 'data' field of the incoming CloudEvent message can be accessed
  * using the 'message.data' value. Subfields of 'message.data' may also be
  * accessed if an input_payload_format has been specified on the Pipeline.
  * - Each attribute of the incoming CloudEvent message can be accessed
  * using the 'message.' value, where  is replaced with the
  * name of the attribute.
  * - Existing headers can be accessed in the CEL expression using the
  * 'headers' variable. The 'headers' variable defines a map of key/value
  * pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  * Binary Content Mode representation of the final message as described
  * earlier. For example, the following CEL expression can be used to
  * construct an HTTP request by adding an additional header to the HTTP
  * headers of the CloudEvent HTTP Binding Binary Content Mode
  * representation of the final message and by overwriting the body of the
  * request:
  * 
  * ```
  * {
  * "headers": headers.merge({"new-header-key": "new-header-value"}),
  * "body": "new-body"
  * }
  * ```
  * - The default binding for the message payload can be accessed using the
  * 'body' variable. It conatins a string representation of the message
  * payload in the format specified by the 'output_payload_format' field.
  * If the 'input_payload_format' field is not set, the 'body'
  * variable contains the same message payload bytes that were published.
  * 
  * Additionally, the following CEL extension functions are provided for
  * use in this CEL expression:
  * - toBase64Url:
  * map.toBase64Url() -> string
  * - Converts a CelValue to a base64url encoded string
  * - toJsonString: map.toJsonString() -> string
  * - Converts a CelValue to a JSON string
  * - merge:
  * map1.merge(map2) -> map3
  * - Merges the passed CEL map with the existing CEL map the
  * function is applied to.
  * - If the same key exists in both maps, if the key's value is type
  * map both maps are merged else the value from the passed map is
  * used.
  * - denormalize:
  * map.denormalize() -> map
  * - Denormalizes a CEL map such that every value of type map or key
  * in the map is expanded to return a single level map.
  * - The resulting keys are "." separated indices of the map keys.
  * - For example:
  * {
  * "a": 1,
  * "b": {
  * "c": 2,
  * "d": 3
  * }
  * "e": [4, 5]
  * }
  * .denormalize()
  * -> {
  * "a": 1,
  * "b.c": 2,
  * "b.d": 3,
  * "e.0": 4,
  * "e.1": 5
  * }
  * - setField:
  * map.setField(key, value) -> message
  * - Sets the field of the message with the given key to the
  * given value.
  * - If the field is not present it will be added.
  * - If the field is present it will be overwritten.
  * - The key can be a dot separated path to set a field in a nested
  * message.
  * - Key must be of type string.
  * - Value may be any valid type.
  * - removeFields:
  * map.removeFields([key1, key2, ...]) -> message
  * - Removes the fields of the map with the given keys.
  * - The keys can be a dot separated path to remove a field in a
  * nested message.
  * - If a key is not found it will be ignored.
  * - Keys must be of type string.
  * - toMap:
  * [map1, map2, ...].toMap() -> map
  * - Converts a CEL list of CEL maps to a single CEL map
  * - toCloudEventJsonWithPayloadFormat:
  * message.toCloudEventJsonWithPayloadFormat() -> map
  * - Converts a message to the corresponding structure of JSON
  * format for CloudEvents.
  * - It converts 'data' to destination payload format
  * specified in 'output_payload_format'. If 'output_payload_format' is
  * not set, the data will remain unchanged.
  * - It also sets the corresponding datacontenttype of
  * the CloudEvent, as indicated by
  * 'output_payload_format'. If no
  * 'output_payload_format' is set it will use the value of the
  * "datacontenttype" attribute on the CloudEvent if present, else
  * remove "datacontenttype" attribute.
  * - This function expects that the content of the message will
  * adhere to the standard CloudEvent format. If it doesn't then this
  * function will fail.
  * - The result is a CEL map that corresponds to the JSON
  * representation of the CloudEvent. To convert that data to a JSON
  * string it can be chained with the toJsonString function.
  * 
  * The Pipeline expects that the message it receives adheres to the
  * standard CloudEvent format. If it doesn't then the outgoing message
  * request may fail with a persistent error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#message_binding_template GoogleEventarcPipeline#message_binding_template}
  */
  readonly messageBindingTemplate?: string;
  /**
  * The URI of the HTTP enpdoint.
  * 
  * The value must be a RFC2396 URI string.
  * Examples: 'https://svc.us-central1.p.local:8080/route'.
  * Only the HTTPS protocol is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#uri GoogleEventarcPipeline#uri}
  */
  readonly uri: string;
}

export function googleEventarcPipelineDestinationsHttpEndpointToTerraform(struct?: GoogleEventarcPipelineDestinationsHttpEndpointOutputReference | GoogleEventarcPipelineDestinationsHttpEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_binding_template: cdktf.stringToTerraform(struct!.messageBindingTemplate),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleEventarcPipelineDestinationsHttpEndpointToHclTerraform(struct?: GoogleEventarcPipelineDestinationsHttpEndpointOutputReference | GoogleEventarcPipelineDestinationsHttpEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_binding_template: {
      value: cdktf.stringToHclTerraform(struct!.messageBindingTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsHttpEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsHttpEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageBindingTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBindingTemplate = this._messageBindingTemplate;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsHttpEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageBindingTemplate = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageBindingTemplate = value.messageBindingTemplate;
      this._uri = value.uri;
    }
  }

  // message_binding_template - computed: false, optional: true, required: false
  private _messageBindingTemplate?: string; 
  public get messageBindingTemplate() {
    return this.getStringAttribute('message_binding_template');
  }
  public set messageBindingTemplate(value: string) {
    this._messageBindingTemplate = value;
  }
  public resetMessageBindingTemplate() {
    this._messageBindingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBindingTemplateInput() {
    return this._messageBindingTemplate;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleEventarcPipelineDestinationsNetworkConfig {
  /**
  * Name of the NetworkAttachment that allows access to the consumer VPC.
  * Format:
  * 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#network_attachment GoogleEventarcPipeline#network_attachment}
  */
  readonly networkAttachment: string;
}

export function googleEventarcPipelineDestinationsNetworkConfigToTerraform(struct?: GoogleEventarcPipelineDestinationsNetworkConfigOutputReference | GoogleEventarcPipelineDestinationsNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
  }
}


export function googleEventarcPipelineDestinationsNetworkConfigToHclTerraform(struct?: GoogleEventarcPipelineDestinationsNetworkConfigOutputReference | GoogleEventarcPipelineDestinationsNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_attachment: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
    }
  }

  // network_attachment - computed: false, optional: false, required: true
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }
}
export interface GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function googleEventarcPipelineDestinationsOutputPayloadFormatAvroToTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function googleEventarcPipelineDestinationsOutputPayloadFormatAvroToHclTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface GoogleEventarcPipelineDestinationsOutputPayloadFormatJson {
}

export function googleEventarcPipelineDestinationsOutputPayloadFormatJsonToTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleEventarcPipelineDestinationsOutputPayloadFormatJsonToHclTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsOutputPayloadFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function googleEventarcPipelineDestinationsOutputPayloadFormatProtobufToTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function googleEventarcPipelineDestinationsOutputPayloadFormatProtobufToHclTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface GoogleEventarcPipelineDestinationsOutputPayloadFormat {
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}
  */
  readonly avro?: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}
  */
  readonly json?: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson;
  /**
  * protobuf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}
  */
  readonly protobuf?: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf;
}

export function googleEventarcPipelineDestinationsOutputPayloadFormatToTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro: googleEventarcPipelineDestinationsOutputPayloadFormatAvroToTerraform(struct!.avro),
    json: googleEventarcPipelineDestinationsOutputPayloadFormatJsonToTerraform(struct!.json),
    protobuf: googleEventarcPipelineDestinationsOutputPayloadFormatProtobufToTerraform(struct!.protobuf),
  }
}


export function googleEventarcPipelineDestinationsOutputPayloadFormatToHclTerraform(struct?: GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference | GoogleEventarcPipelineDestinationsOutputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro: {
      value: googleEventarcPipelineDestinationsOutputPayloadFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroList",
    },
    json: {
      value: googleEventarcPipelineDestinationsOutputPayloadFormatJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonList",
    },
    protobuf: {
      value: googleEventarcPipelineDestinationsOutputPayloadFormatProtobufToHclTerraform(struct!.protobuf),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineDestinationsOutputPayloadFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._protobuf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protobuf = this._protobuf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinationsOutputPayloadFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avro.internalValue = undefined;
      this._json.internalValue = undefined;
      this._protobuf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avro.internalValue = value.avro;
      this._json.internalValue = value.json;
      this._protobuf.internalValue = value.protobuf;
    }
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new GoogleEventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: GoogleEventarcPipelineDestinationsOutputPayloadFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new GoogleEventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: GoogleEventarcPipelineDestinationsOutputPayloadFormatJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // protobuf - computed: false, optional: true, required: false
  private _protobuf = new GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference(this, "protobuf");
  public get protobuf() {
    return this._protobuf;
  }
  public putProtobuf(value: GoogleEventarcPipelineDestinationsOutputPayloadFormatProtobuf) {
    this._protobuf.internalValue = value;
  }
  public resetProtobuf() {
    this._protobuf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protobufInput() {
    return this._protobuf.internalValue;
  }
}
export interface GoogleEventarcPipelineDestinations {
  /**
  * The resource name of the Message Bus to which events should be
  * published. The Message Bus resource should exist in the same project as
  * the Pipeline. Format:
  * 'projects/{project}/locations/{location}/messageBuses/{message_bus}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#message_bus GoogleEventarcPipeline#message_bus}
  */
  readonly messageBus?: string;
  /**
  * The resource name of the Pub/Sub topic to which events should be
  * published. Format:
  * 'projects/{project}/locations/{location}/topics/{topic}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#topic GoogleEventarcPipeline#topic}
  */
  readonly topic?: string;
  /**
  * The resource name of the Workflow whose Executions are triggered by
  * the events. The Workflow resource should be deployed in the same
  * project as the Pipeline. Format:
  * 'projects/{project}/locations/{location}/workflows/{workflow}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#workflow GoogleEventarcPipeline#workflow}
  */
  readonly workflow?: string;
  /**
  * authentication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#authentication_config GoogleEventarcPipeline#authentication_config}
  */
  readonly authenticationConfig?: GoogleEventarcPipelineDestinationsAuthenticationConfig;
  /**
  * http_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#http_endpoint GoogleEventarcPipeline#http_endpoint}
  */
  readonly httpEndpoint?: GoogleEventarcPipelineDestinationsHttpEndpoint;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#network_config GoogleEventarcPipeline#network_config}
  */
  readonly networkConfig?: GoogleEventarcPipelineDestinationsNetworkConfig;
  /**
  * output_payload_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#output_payload_format GoogleEventarcPipeline#output_payload_format}
  */
  readonly outputPayloadFormat?: GoogleEventarcPipelineDestinationsOutputPayloadFormat;
}

export function googleEventarcPipelineDestinationsToTerraform(struct?: GoogleEventarcPipelineDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_bus: cdktf.stringToTerraform(struct!.messageBus),
    topic: cdktf.stringToTerraform(struct!.topic),
    workflow: cdktf.stringToTerraform(struct!.workflow),
    authentication_config: googleEventarcPipelineDestinationsAuthenticationConfigToTerraform(struct!.authenticationConfig),
    http_endpoint: googleEventarcPipelineDestinationsHttpEndpointToTerraform(struct!.httpEndpoint),
    network_config: googleEventarcPipelineDestinationsNetworkConfigToTerraform(struct!.networkConfig),
    output_payload_format: googleEventarcPipelineDestinationsOutputPayloadFormatToTerraform(struct!.outputPayloadFormat),
  }
}


export function googleEventarcPipelineDestinationsToHclTerraform(struct?: GoogleEventarcPipelineDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_bus: {
      value: cdktf.stringToHclTerraform(struct!.messageBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: cdktf.stringToHclTerraform(struct!.workflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_config: {
      value: googleEventarcPipelineDestinationsAuthenticationConfigToHclTerraform(struct!.authenticationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsAuthenticationConfigList",
    },
    http_endpoint: {
      value: googleEventarcPipelineDestinationsHttpEndpointToHclTerraform(struct!.httpEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsHttpEndpointList",
    },
    network_config: {
      value: googleEventarcPipelineDestinationsNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsNetworkConfigList",
    },
    output_payload_format: {
      value: googleEventarcPipelineDestinationsOutputPayloadFormatToHclTerraform(struct!.outputPayloadFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineDestinationsOutputPayloadFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleEventarcPipelineDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBus = this._messageBus;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    if (this._authenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfig = this._authenticationConfig?.internalValue;
    }
    if (this._httpEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._outputPayloadFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPayloadFormat = this._outputPayloadFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageBus = undefined;
      this._topic = undefined;
      this._workflow = undefined;
      this._authenticationConfig.internalValue = undefined;
      this._httpEndpoint.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._outputPayloadFormat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageBus = value.messageBus;
      this._topic = value.topic;
      this._workflow = value.workflow;
      this._authenticationConfig.internalValue = value.authenticationConfig;
      this._httpEndpoint.internalValue = value.httpEndpoint;
      this._networkConfig.internalValue = value.networkConfig;
      this._outputPayloadFormat.internalValue = value.outputPayloadFormat;
    }
  }

  // message_bus - computed: false, optional: true, required: false
  private _messageBus?: string; 
  public get messageBus() {
    return this.getStringAttribute('message_bus');
  }
  public set messageBus(value: string) {
    this._messageBus = value;
  }
  public resetMessageBus() {
    this._messageBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBusInput() {
    return this._messageBus;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // authentication_config - computed: false, optional: true, required: false
  private _authenticationConfig = new GoogleEventarcPipelineDestinationsAuthenticationConfigOutputReference(this, "authentication_config");
  public get authenticationConfig() {
    return this._authenticationConfig;
  }
  public putAuthenticationConfig(value: GoogleEventarcPipelineDestinationsAuthenticationConfig) {
    this._authenticationConfig.internalValue = value;
  }
  public resetAuthenticationConfig() {
    this._authenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigInput() {
    return this._authenticationConfig.internalValue;
  }

  // http_endpoint - computed: false, optional: true, required: false
  private _httpEndpoint = new GoogleEventarcPipelineDestinationsHttpEndpointOutputReference(this, "http_endpoint");
  public get httpEndpoint() {
    return this._httpEndpoint;
  }
  public putHttpEndpoint(value: GoogleEventarcPipelineDestinationsHttpEndpoint) {
    this._httpEndpoint.internalValue = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleEventarcPipelineDestinationsNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleEventarcPipelineDestinationsNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // output_payload_format - computed: false, optional: true, required: false
  private _outputPayloadFormat = new GoogleEventarcPipelineDestinationsOutputPayloadFormatOutputReference(this, "output_payload_format");
  public get outputPayloadFormat() {
    return this._outputPayloadFormat;
  }
  public putOutputPayloadFormat(value: GoogleEventarcPipelineDestinationsOutputPayloadFormat) {
    this._outputPayloadFormat.internalValue = value;
  }
  public resetOutputPayloadFormat() {
    this._outputPayloadFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPayloadFormatInput() {
    return this._outputPayloadFormat.internalValue;
  }
}

export class GoogleEventarcPipelineDestinationsList extends cdktf.ComplexList {
  public internalValue? : GoogleEventarcPipelineDestinations[] | cdktf.IResolvable

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
  public get(index: number): GoogleEventarcPipelineDestinationsOutputReference {
    return new GoogleEventarcPipelineDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleEventarcPipelineInputPayloadFormatAvro {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function googleEventarcPipelineInputPayloadFormatAvroToTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatAvroOutputReference | GoogleEventarcPipelineInputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function googleEventarcPipelineInputPayloadFormatAvroToHclTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatAvroOutputReference | GoogleEventarcPipelineInputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineInputPayloadFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineInputPayloadFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineInputPayloadFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface GoogleEventarcPipelineInputPayloadFormatJson {
}

export function googleEventarcPipelineInputPayloadFormatJsonToTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatJsonOutputReference | GoogleEventarcPipelineInputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleEventarcPipelineInputPayloadFormatJsonToHclTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatJsonOutputReference | GoogleEventarcPipelineInputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleEventarcPipelineInputPayloadFormatJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineInputPayloadFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineInputPayloadFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleEventarcPipelineInputPayloadFormatProtobuf {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#schema_definition GoogleEventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function googleEventarcPipelineInputPayloadFormatProtobufToTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference | GoogleEventarcPipelineInputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function googleEventarcPipelineInputPayloadFormatProtobufToHclTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference | GoogleEventarcPipelineInputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineInputPayloadFormatProtobuf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineInputPayloadFormatProtobuf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface GoogleEventarcPipelineInputPayloadFormat {
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#avro GoogleEventarcPipeline#avro}
  */
  readonly avro?: GoogleEventarcPipelineInputPayloadFormatAvro;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#json GoogleEventarcPipeline#json}
  */
  readonly json?: GoogleEventarcPipelineInputPayloadFormatJson;
  /**
  * protobuf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#protobuf GoogleEventarcPipeline#protobuf}
  */
  readonly protobuf?: GoogleEventarcPipelineInputPayloadFormatProtobuf;
}

export function googleEventarcPipelineInputPayloadFormatToTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatOutputReference | GoogleEventarcPipelineInputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro: googleEventarcPipelineInputPayloadFormatAvroToTerraform(struct!.avro),
    json: googleEventarcPipelineInputPayloadFormatJsonToTerraform(struct!.json),
    protobuf: googleEventarcPipelineInputPayloadFormatProtobufToTerraform(struct!.protobuf),
  }
}


export function googleEventarcPipelineInputPayloadFormatToHclTerraform(struct?: GoogleEventarcPipelineInputPayloadFormatOutputReference | GoogleEventarcPipelineInputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro: {
      value: googleEventarcPipelineInputPayloadFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineInputPayloadFormatAvroList",
    },
    json: {
      value: googleEventarcPipelineInputPayloadFormatJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineInputPayloadFormatJsonList",
    },
    protobuf: {
      value: googleEventarcPipelineInputPayloadFormatProtobufToHclTerraform(struct!.protobuf),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineInputPayloadFormatProtobufList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineInputPayloadFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineInputPayloadFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._protobuf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protobuf = this._protobuf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineInputPayloadFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avro.internalValue = undefined;
      this._json.internalValue = undefined;
      this._protobuf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avro.internalValue = value.avro;
      this._json.internalValue = value.json;
      this._protobuf.internalValue = value.protobuf;
    }
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new GoogleEventarcPipelineInputPayloadFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: GoogleEventarcPipelineInputPayloadFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new GoogleEventarcPipelineInputPayloadFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: GoogleEventarcPipelineInputPayloadFormatJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // protobuf - computed: false, optional: true, required: false
  private _protobuf = new GoogleEventarcPipelineInputPayloadFormatProtobufOutputReference(this, "protobuf");
  public get protobuf() {
    return this._protobuf;
  }
  public putProtobuf(value: GoogleEventarcPipelineInputPayloadFormatProtobuf) {
    this._protobuf.internalValue = value;
  }
  public resetProtobuf() {
    this._protobuf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protobufInput() {
    return this._protobuf.internalValue;
  }
}
export interface GoogleEventarcPipelineLoggingConfig {
  /**
  * The minimum severity of logs that will be sent to Stackdriver/Platform
  * Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#log_severity GoogleEventarcPipeline#log_severity}
  */
  readonly logSeverity?: string;
}

export function googleEventarcPipelineLoggingConfigToTerraform(struct?: GoogleEventarcPipelineLoggingConfigOutputReference | GoogleEventarcPipelineLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_severity: cdktf.stringToTerraform(struct!.logSeverity),
  }
}


export function googleEventarcPipelineLoggingConfigToHclTerraform(struct?: GoogleEventarcPipelineLoggingConfigOutputReference | GoogleEventarcPipelineLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_severity: {
      value: cdktf.stringToHclTerraform(struct!.logSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverity = this._logSeverity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logSeverity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logSeverity = value.logSeverity;
    }
  }

  // log_severity - computed: true, optional: true, required: false
  private _logSeverity?: string; 
  public get logSeverity() {
    return this.getStringAttribute('log_severity');
  }
  public set logSeverity(value: string) {
    this._logSeverity = value;
  }
  public resetLogSeverity() {
    this._logSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityInput() {
    return this._logSeverity;
  }
}
export interface GoogleEventarcPipelineMediationsTransformation {
  /**
  * The CEL expression template to apply to transform messages.
  * The following CEL extension functions are provided for
  * use in this CEL expression:
  * - merge:
  * map1.merge(map2) -> map3
  * - Merges the passed CEL map with the existing CEL map the
  * function is applied to.
  * - If the same key exists in both maps, if the key's value is type
  * map both maps are merged else the value from the passed map is
  * used.
  * - denormalize:
  * map.denormalize() -> map
  * - Denormalizes a CEL map such that every value of type map or key
  * in the map is expanded to return a single level map.
  * - The resulting keys are "." separated indices of the map keys.
  * - For example:
  * {
  * "a": 1,
  * "b": {
  * "c": 2,
  * "d": 3
  * }
  * "e": [4, 5]
  * }
  * .denormalize()
  * -> {
  * "a": 1,
  * "b.c": 2,
  * "b.d": 3,
  * "e.0": 4,
  * "e.1": 5
  * }
  * - setField:
  * map.setField(key, value) -> message
  * - Sets the field of the message with the given key to the
  * given value.
  * - If the field is not present it will be added.
  * - If the field is present it will be overwritten.
  * - The key can be a dot separated path to set a field in a nested
  * message.
  * - Key must be of type string.
  * - Value may be any valid type.
  * - removeFields:
  * map.removeFields([key1, key2, ...]) -> message
  * - Removes the fields of the map with the given keys.
  * - The keys can be a dot separated path to remove a field in a
  * nested message.
  * - If a key is not found it will be ignored.
  * - Keys must be of type string.
  * - toMap:
  * [map1, map2, ...].toMap() -> map
  * - Converts a CEL list of CEL maps to a single CEL map
  * - toDestinationPayloadFormat():
  * message.data.toDestinationPayloadFormat() -> string or bytes
  * - Converts the message data to the destination payload format
  * specified in Pipeline.Destination.output_payload_format
  * - This function is meant to be applied to the message.data field.
  * - If the destination payload format is not set, the function will
  * return the message data unchanged.
  * - toCloudEventJsonWithPayloadFormat:
  * message.toCloudEventJsonWithPayloadFormat() -> map
  * - Converts a message to the corresponding structure of JSON
  * format for CloudEvents
  * - This function applies toDestinationPayloadFormat() to the
  * message data. It also sets the corresponding datacontenttype of
  * the CloudEvent, as indicated by
  * Pipeline.Destination.output_payload_format. If no
  * output_payload_format is set it will use the existing
  * datacontenttype on the CloudEvent if present, else leave
  * datacontenttype absent.
  * - This function expects that the content of the message will
  * adhere to the standard CloudEvent format. If it doesn't then this
  * function will fail.
  * - The result is a CEL map that corresponds to the JSON
  * representation of the CloudEvent. To convert that data to a JSON
  * string it can be chained with the toJsonString function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#transformation_template GoogleEventarcPipeline#transformation_template}
  */
  readonly transformationTemplate?: string;
}

export function googleEventarcPipelineMediationsTransformationToTerraform(struct?: GoogleEventarcPipelineMediationsTransformationOutputReference | GoogleEventarcPipelineMediationsTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation_template: cdktf.stringToTerraform(struct!.transformationTemplate),
  }
}


export function googleEventarcPipelineMediationsTransformationToHclTerraform(struct?: GoogleEventarcPipelineMediationsTransformationOutputReference | GoogleEventarcPipelineMediationsTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation_template: {
      value: cdktf.stringToHclTerraform(struct!.transformationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineMediationsTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineMediationsTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationTemplate = this._transformationTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineMediationsTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformationTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformationTemplate = value.transformationTemplate;
    }
  }

  // transformation_template - computed: false, optional: true, required: false
  private _transformationTemplate?: string; 
  public get transformationTemplate() {
    return this.getStringAttribute('transformation_template');
  }
  public set transformationTemplate(value: string) {
    this._transformationTemplate = value;
  }
  public resetTransformationTemplate() {
    this._transformationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTemplateInput() {
    return this._transformationTemplate;
  }
}
export interface GoogleEventarcPipelineMediations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#transformation GoogleEventarcPipeline#transformation}
  */
  readonly transformation?: GoogleEventarcPipelineMediationsTransformation;
}

export function googleEventarcPipelineMediationsToTerraform(struct?: GoogleEventarcPipelineMediations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: googleEventarcPipelineMediationsTransformationToTerraform(struct!.transformation),
  }
}


export function googleEventarcPipelineMediationsToHclTerraform(struct?: GoogleEventarcPipelineMediations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: googleEventarcPipelineMediationsTransformationToHclTerraform(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleEventarcPipelineMediationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineMediationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleEventarcPipelineMediations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineMediations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transformation.internalValue = value.transformation;
    }
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new GoogleEventarcPipelineMediationsTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: GoogleEventarcPipelineMediationsTransformation) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}

export class GoogleEventarcPipelineMediationsList extends cdktf.ComplexList {
  public internalValue? : GoogleEventarcPipelineMediations[] | cdktf.IResolvable

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
  public get(index: number): GoogleEventarcPipelineMediationsOutputReference {
    return new GoogleEventarcPipelineMediationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleEventarcPipelineRetryPolicy {
  /**
  * The maximum number of delivery attempts for any message. The value must
  * be between 1 and 100.
  * The default value for this field is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#max_attempts GoogleEventarcPipeline#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * The maximum amount of seconds to wait between retry attempts. The value
  * must be between 1 and 600.
  * The default value for this field is 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#max_retry_delay GoogleEventarcPipeline#max_retry_delay}
  */
  readonly maxRetryDelay?: string;
  /**
  * The minimum amount of seconds to wait between retry attempts. The value
  * must be between 1 and 600.
  * The default value for this field is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#min_retry_delay GoogleEventarcPipeline#min_retry_delay}
  */
  readonly minRetryDelay?: string;
}

export function googleEventarcPipelineRetryPolicyToTerraform(struct?: GoogleEventarcPipelineRetryPolicyOutputReference | GoogleEventarcPipelineRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    max_retry_delay: cdktf.stringToTerraform(struct!.maxRetryDelay),
    min_retry_delay: cdktf.stringToTerraform(struct!.minRetryDelay),
  }
}


export function googleEventarcPipelineRetryPolicyToHclTerraform(struct?: GoogleEventarcPipelineRetryPolicyOutputReference | GoogleEventarcPipelineRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retry_delay: {
      value: cdktf.stringToHclTerraform(struct!.maxRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_retry_delay: {
      value: cdktf.stringToHclTerraform(struct!.minRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleEventarcPipelineRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleEventarcPipelineRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._maxRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryDelay = this._maxRetryDelay;
    }
    if (this._minRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryDelay = this._minRetryDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleEventarcPipelineRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._maxRetryDelay = undefined;
      this._minRetryDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._maxRetryDelay = value.maxRetryDelay;
      this._minRetryDelay = value.minRetryDelay;
    }
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

  // max_retry_delay - computed: false, optional: true, required: false
  private _maxRetryDelay?: string; 
  public get maxRetryDelay() {
    return this.getStringAttribute('max_retry_delay');
  }
  public set maxRetryDelay(value: string) {
    this._maxRetryDelay = value;
  }
  public resetMaxRetryDelay() {
    this._maxRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDelayInput() {
    return this._maxRetryDelay;
  }

  // min_retry_delay - computed: false, optional: true, required: false
  private _minRetryDelay?: string; 
  public get minRetryDelay() {
    return this.getStringAttribute('min_retry_delay');
  }
  public set minRetryDelay(value: string) {
    this._minRetryDelay = value;
  }
  public resetMinRetryDelay() {
    this._minRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryDelayInput() {
    return this._minRetryDelay;
  }
}
export interface GoogleEventarcPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#create GoogleEventarcPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#delete GoogleEventarcPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#update GoogleEventarcPipeline#update}
  */
  readonly update?: string;
}

export function googleEventarcPipelineTimeoutsToTerraform(struct?: GoogleEventarcPipelineTimeouts | cdktf.IResolvable): any {
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


export function googleEventarcPipelineTimeoutsToHclTerraform(struct?: GoogleEventarcPipelineTimeouts | cdktf.IResolvable): any {
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

export class GoogleEventarcPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleEventarcPipelineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleEventarcPipelineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline google_eventarc_pipeline}
*/
export class GoogleEventarcPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_eventarc_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleEventarcPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleEventarcPipeline to import
  * @param importFromId The id of the existing GoogleEventarcPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleEventarcPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_eventarc_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_eventarc_pipeline google_eventarc_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleEventarcPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleEventarcPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_eventarc_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.26.0',
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
    this._cryptoKeyName = config.cryptoKeyName;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._pipelineId = config.pipelineId;
    this._project = config.project;
    this._destinations.internalValue = config.destinations;
    this._inputPayloadFormat.internalValue = config.inputPayloadFormat;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._mediations.internalValue = config.mediations;
    this._retryPolicy.internalValue = config.retryPolicy;
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

  // crypto_key_name - computed: false, optional: true, required: false
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  public resetCryptoKeyName() {
    this._cryptoKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new GoogleEventarcPipelineDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: GoogleEventarcPipelineDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // input_payload_format - computed: false, optional: true, required: false
  private _inputPayloadFormat = new GoogleEventarcPipelineInputPayloadFormatOutputReference(this, "input_payload_format");
  public get inputPayloadFormat() {
    return this._inputPayloadFormat;
  }
  public putInputPayloadFormat(value: GoogleEventarcPipelineInputPayloadFormat) {
    this._inputPayloadFormat.internalValue = value;
  }
  public resetInputPayloadFormat() {
    this._inputPayloadFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPayloadFormatInput() {
    return this._inputPayloadFormat.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new GoogleEventarcPipelineLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: GoogleEventarcPipelineLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // mediations - computed: false, optional: true, required: false
  private _mediations = new GoogleEventarcPipelineMediationsList(this, "mediations", false);
  public get mediations() {
    return this._mediations;
  }
  public putMediations(value: GoogleEventarcPipelineMediations[] | cdktf.IResolvable) {
    this._mediations.internalValue = value;
  }
  public resetMediations() {
    this._mediations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediationsInput() {
    return this._mediations.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new GoogleEventarcPipelineRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: GoogleEventarcPipelineRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleEventarcPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleEventarcPipelineTimeouts) {
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
      crypto_key_name: cdktf.stringToTerraform(this._cryptoKeyName),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      project: cdktf.stringToTerraform(this._project),
      destinations: cdktf.listMapper(googleEventarcPipelineDestinationsToTerraform, true)(this._destinations.internalValue),
      input_payload_format: googleEventarcPipelineInputPayloadFormatToTerraform(this._inputPayloadFormat.internalValue),
      logging_config: googleEventarcPipelineLoggingConfigToTerraform(this._loggingConfig.internalValue),
      mediations: cdktf.listMapper(googleEventarcPipelineMediationsToTerraform, true)(this._mediations.internalValue),
      retry_policy: googleEventarcPipelineRetryPolicyToTerraform(this._retryPolicy.internalValue),
      timeouts: googleEventarcPipelineTimeoutsToTerraform(this._timeouts.internalValue),
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
      crypto_key_name: {
        value: cdktf.stringToHclTerraform(this._cryptoKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
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
      destinations: {
        value: cdktf.listMapperHcl(googleEventarcPipelineDestinationsToHclTerraform, true)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleEventarcPipelineDestinationsList",
      },
      input_payload_format: {
        value: googleEventarcPipelineInputPayloadFormatToHclTerraform(this._inputPayloadFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleEventarcPipelineInputPayloadFormatList",
      },
      logging_config: {
        value: googleEventarcPipelineLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleEventarcPipelineLoggingConfigList",
      },
      mediations: {
        value: cdktf.listMapperHcl(googleEventarcPipelineMediationsToHclTerraform, true)(this._mediations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleEventarcPipelineMediationsList",
      },
      retry_policy: {
        value: googleEventarcPipelineRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleEventarcPipelineRetryPolicyList",
      },
      timeouts: {
        value: googleEventarcPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleEventarcPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
