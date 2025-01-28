// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkSecurityServerTlsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies.
  * Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
  * Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#allow_open GoogleNetworkSecurityServerTlsPolicy#allow_open}
  */
  readonly allowOpen?: boolean | cdktf.IResolvable;
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#description GoogleNetworkSecurityServerTlsPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#id GoogleNetworkSecurityServerTlsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the ServerTlsPolicy resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#labels GoogleNetworkSecurityServerTlsPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the server tls policy.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#location GoogleNetworkSecurityServerTlsPolicy#location}
  */
  readonly location?: string;
  /**
  * Name of the ServerTlsPolicy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#name GoogleNetworkSecurityServerTlsPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#project GoogleNetworkSecurityServerTlsPolicy#project}
  */
  readonly project?: string;
  /**
  * mtls_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#mtls_policy GoogleNetworkSecurityServerTlsPolicy#mtls_policy}
  */
  readonly mtlsPolicy?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy;
  /**
  * server_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#server_certificate GoogleNetworkSecurityServerTlsPolicy#server_certificate}
  */
  readonly serverCertificate?: GoogleNetworkSecurityServerTlsPolicyServerCertificate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#timeouts GoogleNetworkSecurityServerTlsPolicy#timeouts}
  */
  readonly timeouts?: GoogleNetworkSecurityServerTlsPolicyTimeouts;
}
export interface GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance {
  /**
  * Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}
  */
  readonly pluginInstance: string;
}

export function googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference | GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_instance: cdktf.stringToTerraform(struct!.pluginInstance),
  }
}


export function googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference | GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_instance: {
      value: cdktf.stringToHclTerraform(struct!.pluginInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginInstance = this._pluginInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pluginInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pluginInstance = value.pluginInstance;
    }
  }

  // plugin_instance - computed: false, optional: false, required: true
  private _pluginInstance?: string; 
  public get pluginInstance() {
    return this.getStringAttribute('plugin_instance');
  }
  public set pluginInstance(value: string) {
    this._pluginInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInstanceInput() {
    return this._pluginInstance;
  }
}
export interface GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint {
  /**
  * The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}
  */
  readonly targetUri: string;
}

export function googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference | GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference | GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetUri = value.targetUri;
    }
  }

  // target_uri - computed: false, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}
export interface GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa {
  /**
  * certificate_provider_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#certificate_provider_instance GoogleNetworkSecurityServerTlsPolicy#certificate_provider_instance}
  */
  readonly certificateProviderInstance?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance;
  /**
  * grpc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#grpc_endpoint GoogleNetworkSecurityServerTlsPolicy#grpc_endpoint}
  */
  readonly grpcEndpoint?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint;
}

export function googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_provider_instance: googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceToTerraform(struct!.certificateProviderInstance),
    grpc_endpoint: googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointToTerraform(struct!.grpcEndpoint),
  }
}


export function googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_provider_instance: {
      value: googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceToHclTerraform(struct!.certificateProviderInstance),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceList",
    },
    grpc_endpoint: {
      value: googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointToHclTerraform(struct!.grpcEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProviderInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProviderInstance = this._certificateProviderInstance?.internalValue;
    }
    if (this._grpcEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcEndpoint = this._grpcEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProviderInstance.internalValue = undefined;
      this._grpcEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProviderInstance.internalValue = value.certificateProviderInstance;
      this._grpcEndpoint.internalValue = value.grpcEndpoint;
    }
  }

  // certificate_provider_instance - computed: false, optional: true, required: false
  private _certificateProviderInstance = new GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference(this, "certificate_provider_instance");
  public get certificateProviderInstance() {
    return this._certificateProviderInstance;
  }
  public putCertificateProviderInstance(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance) {
    this._certificateProviderInstance.internalValue = value;
  }
  public resetCertificateProviderInstance() {
    this._certificateProviderInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProviderInstanceInput() {
    return this._certificateProviderInstance.internalValue;
  }

  // grpc_endpoint - computed: false, optional: true, required: false
  private _grpcEndpoint = new GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference(this, "grpc_endpoint");
  public get grpcEndpoint() {
    return this._grpcEndpoint;
  }
  public putGrpcEndpoint(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint) {
    this._grpcEndpoint.internalValue = value;
  }
  public resetGrpcEndpoint() {
    this._grpcEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcEndpointInput() {
    return this._grpcEndpoint.internalValue;
  }
}

export class GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList extends cdktf.ComplexList {
  public internalValue? : GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa[] | cdktf.IResolvable

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
  public get(index: number): GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference {
    return new GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleNetworkSecurityServerTlsPolicyMtlsPolicy {
  /**
  * When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.
  * Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. Possible values: ["CLIENT_VALIDATION_MODE_UNSPECIFIED", "ALLOW_INVALID_OR_MISSING_CLIENT_CERT", "REJECT_INVALID"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#client_validation_mode GoogleNetworkSecurityServerTlsPolicy#client_validation_mode}
  */
  readonly clientValidationMode?: string;
  /**
  * Reference to the TrustConfig from certificatemanager.googleapis.com namespace.
  * If specified, the chain validation will be performed against certificates configured in the given TrustConfig.
  * Allowed only if the policy is to be used with external HTTPS load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#client_validation_trust_config GoogleNetworkSecurityServerTlsPolicy#client_validation_trust_config}
  */
  readonly clientValidationTrustConfig?: string;
  /**
  * client_validation_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#client_validation_ca GoogleNetworkSecurityServerTlsPolicy#client_validation_ca}
  */
  readonly clientValidationCa?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa[] | cdktf.IResolvable;
}

export function googleNetworkSecurityServerTlsPolicyMtlsPolicyToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference | GoogleNetworkSecurityServerTlsPolicyMtlsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_validation_mode: cdktf.stringToTerraform(struct!.clientValidationMode),
    client_validation_trust_config: cdktf.stringToTerraform(struct!.clientValidationTrustConfig),
    client_validation_ca: cdktf.listMapper(googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaToTerraform, true)(struct!.clientValidationCa),
  }
}


export function googleNetworkSecurityServerTlsPolicyMtlsPolicyToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference | GoogleNetworkSecurityServerTlsPolicyMtlsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_validation_mode: {
      value: cdktf.stringToHclTerraform(struct!.clientValidationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_validation_trust_config: {
      value: cdktf.stringToHclTerraform(struct!.clientValidationTrustConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_validation_ca: {
      value: cdktf.listMapperHcl(googleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaToHclTerraform, true)(struct!.clientValidationCa),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyMtlsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientValidationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientValidationMode = this._clientValidationMode;
    }
    if (this._clientValidationTrustConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientValidationTrustConfig = this._clientValidationTrustConfig;
    }
    if (this._clientValidationCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientValidationCa = this._clientValidationCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientValidationMode = undefined;
      this._clientValidationTrustConfig = undefined;
      this._clientValidationCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientValidationMode = value.clientValidationMode;
      this._clientValidationTrustConfig = value.clientValidationTrustConfig;
      this._clientValidationCa.internalValue = value.clientValidationCa;
    }
  }

  // client_validation_mode - computed: false, optional: true, required: false
  private _clientValidationMode?: string; 
  public get clientValidationMode() {
    return this.getStringAttribute('client_validation_mode');
  }
  public set clientValidationMode(value: string) {
    this._clientValidationMode = value;
  }
  public resetClientValidationMode() {
    this._clientValidationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientValidationModeInput() {
    return this._clientValidationMode;
  }

  // client_validation_trust_config - computed: false, optional: true, required: false
  private _clientValidationTrustConfig?: string; 
  public get clientValidationTrustConfig() {
    return this.getStringAttribute('client_validation_trust_config');
  }
  public set clientValidationTrustConfig(value: string) {
    this._clientValidationTrustConfig = value;
  }
  public resetClientValidationTrustConfig() {
    this._clientValidationTrustConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientValidationTrustConfigInput() {
    return this._clientValidationTrustConfig;
  }

  // client_validation_ca - computed: false, optional: true, required: false
  private _clientValidationCa = new GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList(this, "client_validation_ca", false);
  public get clientValidationCa() {
    return this._clientValidationCa;
  }
  public putClientValidationCa(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa[] | cdktf.IResolvable) {
    this._clientValidationCa.internalValue = value;
  }
  public resetClientValidationCa() {
    this._clientValidationCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientValidationCaInput() {
    return this._clientValidationCa.internalValue;
  }
}
export interface GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance {
  /**
  * Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}
  */
  readonly pluginInstance: string;
}

export function googleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference | GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_instance: cdktf.stringToTerraform(struct!.pluginInstance),
  }
}


export function googleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference | GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_instance: {
      value: cdktf.stringToHclTerraform(struct!.pluginInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginInstance = this._pluginInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pluginInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pluginInstance = value.pluginInstance;
    }
  }

  // plugin_instance - computed: false, optional: false, required: true
  private _pluginInstance?: string; 
  public get pluginInstance() {
    return this.getStringAttribute('plugin_instance');
  }
  public set pluginInstance(value: string) {
    this._pluginInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInstanceInput() {
    return this._pluginInstance;
  }
}
export interface GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint {
  /**
  * The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}
  */
  readonly targetUri: string;
}

export function googleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference | GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function googleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference | GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetUri = value.targetUri;
    }
  }

  // target_uri - computed: false, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}
export interface GoogleNetworkSecurityServerTlsPolicyServerCertificate {
  /**
  * certificate_provider_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#certificate_provider_instance GoogleNetworkSecurityServerTlsPolicy#certificate_provider_instance}
  */
  readonly certificateProviderInstance?: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance;
  /**
  * grpc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#grpc_endpoint GoogleNetworkSecurityServerTlsPolicy#grpc_endpoint}
  */
  readonly grpcEndpoint?: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint;
}

export function googleNetworkSecurityServerTlsPolicyServerCertificateToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference | GoogleNetworkSecurityServerTlsPolicyServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_provider_instance: googleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceToTerraform(struct!.certificateProviderInstance),
    grpc_endpoint: googleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointToTerraform(struct!.grpcEndpoint),
  }
}


export function googleNetworkSecurityServerTlsPolicyServerCertificateToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference | GoogleNetworkSecurityServerTlsPolicyServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_provider_instance: {
      value: googleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceToHclTerraform(struct!.certificateProviderInstance),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceList",
    },
    grpc_endpoint: {
      value: googleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointToHclTerraform(struct!.grpcEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyServerCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProviderInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProviderInstance = this._certificateProviderInstance?.internalValue;
    }
    if (this._grpcEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcEndpoint = this._grpcEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyServerCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateProviderInstance.internalValue = undefined;
      this._grpcEndpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateProviderInstance.internalValue = value.certificateProviderInstance;
      this._grpcEndpoint.internalValue = value.grpcEndpoint;
    }
  }

  // certificate_provider_instance - computed: false, optional: true, required: false
  private _certificateProviderInstance = new GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference(this, "certificate_provider_instance");
  public get certificateProviderInstance() {
    return this._certificateProviderInstance;
  }
  public putCertificateProviderInstance(value: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance) {
    this._certificateProviderInstance.internalValue = value;
  }
  public resetCertificateProviderInstance() {
    this._certificateProviderInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProviderInstanceInput() {
    return this._certificateProviderInstance.internalValue;
  }

  // grpc_endpoint - computed: false, optional: true, required: false
  private _grpcEndpoint = new GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference(this, "grpc_endpoint");
  public get grpcEndpoint() {
    return this._grpcEndpoint;
  }
  public putGrpcEndpoint(value: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint) {
    this._grpcEndpoint.internalValue = value;
  }
  public resetGrpcEndpoint() {
    this._grpcEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcEndpointInput() {
    return this._grpcEndpoint.internalValue;
  }
}
export interface GoogleNetworkSecurityServerTlsPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#create GoogleNetworkSecurityServerTlsPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#delete GoogleNetworkSecurityServerTlsPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#update GoogleNetworkSecurityServerTlsPolicy#update}
  */
  readonly update?: string;
}

export function googleNetworkSecurityServerTlsPolicyTimeoutsToTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkSecurityServerTlsPolicyTimeoutsToHclTerraform(struct?: GoogleNetworkSecurityServerTlsPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkSecurityServerTlsPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkSecurityServerTlsPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy google_network_security_server_tls_policy}
*/
export class GoogleNetworkSecurityServerTlsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_server_tls_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkSecurityServerTlsPolicy to import
  * @param importFromId The id of the existing GoogleNetworkSecurityServerTlsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkSecurityServerTlsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_server_tls_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_security_server_tls_policy google_network_security_server_tls_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkSecurityServerTlsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkSecurityServerTlsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_server_tls_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.18.0',
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
    this._allowOpen = config.allowOpen;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._mtlsPolicy.internalValue = config.mtlsPolicy;
    this._serverCertificate.internalValue = config.serverCertificate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_open - computed: false, optional: true, required: false
  private _allowOpen?: boolean | cdktf.IResolvable; 
  public get allowOpen() {
    return this.getBooleanAttribute('allow_open');
  }
  public set allowOpen(value: boolean | cdktf.IResolvable) {
    this._allowOpen = value;
  }
  public resetAllowOpen() {
    this._allowOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOpenInput() {
    return this._allowOpen;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // mtls_policy - computed: false, optional: true, required: false
  private _mtlsPolicy = new GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference(this, "mtls_policy");
  public get mtlsPolicy() {
    return this._mtlsPolicy;
  }
  public putMtlsPolicy(value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy) {
    this._mtlsPolicy.internalValue = value;
  }
  public resetMtlsPolicy() {
    this._mtlsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsPolicyInput() {
    return this._mtlsPolicy.internalValue;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate = new GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference(this, "server_certificate");
  public get serverCertificate() {
    return this._serverCertificate;
  }
  public putServerCertificate(value: GoogleNetworkSecurityServerTlsPolicyServerCertificate) {
    this._serverCertificate.internalValue = value;
  }
  public resetServerCertificate() {
    this._serverCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkSecurityServerTlsPolicyTimeouts) {
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
      allow_open: cdktf.booleanToTerraform(this._allowOpen),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      mtls_policy: googleNetworkSecurityServerTlsPolicyMtlsPolicyToTerraform(this._mtlsPolicy.internalValue),
      server_certificate: googleNetworkSecurityServerTlsPolicyServerCertificateToTerraform(this._serverCertificate.internalValue),
      timeouts: googleNetworkSecurityServerTlsPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_open: {
        value: cdktf.booleanToHclTerraform(this._allowOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      mtls_policy: {
        value: googleNetworkSecurityServerTlsPolicyMtlsPolicyToHclTerraform(this._mtlsPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecurityServerTlsPolicyMtlsPolicyList",
      },
      server_certificate: {
        value: googleNetworkSecurityServerTlsPolicyServerCertificateToHclTerraform(this._serverCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkSecurityServerTlsPolicyServerCertificateList",
      },
      timeouts: {
        value: googleNetworkSecurityServerTlsPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkSecurityServerTlsPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
