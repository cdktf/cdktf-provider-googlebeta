// https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDnsManagedZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * A textual description field. Defaults to 'Managed by Terraform'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#description GoogleDnsManagedZone#description}
  */
  readonly description?: string;
  /**
  * The DNS name of this managed zone, for instance "example.com.".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#dns_name GoogleDnsManagedZone#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#force_destroy GoogleDnsManagedZone#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * A set of key/value label pairs to assign to this ManagedZone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#labels GoogleDnsManagedZone#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * User assigned name for this resource.
Must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#name GoogleDnsManagedZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#project GoogleDnsManagedZone#project}
  */
  readonly project?: string;
  /**
  * Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under 'private_visibility_config'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#reverse_lookup GoogleDnsManagedZone#reverse_lookup}
  */
  readonly reverseLookup?: boolean | cdktf.IResolvable;
  /**
  * The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources. Default value: "public" Possible values: ["private", "public"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#visibility GoogleDnsManagedZone#visibility}
  */
  readonly visibility?: string;
  /**
  * dnssec_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#dnssec_config GoogleDnsManagedZone#dnssec_config}
  */
  readonly dnssecConfig?: GoogleDnsManagedZoneDnssecConfig;
  /**
  * forwarding_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#forwarding_config GoogleDnsManagedZone#forwarding_config}
  */
  readonly forwardingConfig?: GoogleDnsManagedZoneForwardingConfig;
  /**
  * peering_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#peering_config GoogleDnsManagedZone#peering_config}
  */
  readonly peeringConfig?: GoogleDnsManagedZonePeeringConfig;
  /**
  * private_visibility_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#private_visibility_config GoogleDnsManagedZone#private_visibility_config}
  */
  readonly privateVisibilityConfig?: GoogleDnsManagedZonePrivateVisibilityConfig;
  /**
  * service_directory_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#service_directory_config GoogleDnsManagedZone#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDnsManagedZoneServiceDirectoryConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#timeouts GoogleDnsManagedZone#timeouts}
  */
  readonly timeouts?: GoogleDnsManagedZoneTimeouts;
}
export interface GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs {
  /**
  * String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#algorithm GoogleDnsManagedZone#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Length of the keys in bits
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#key_length GoogleDnsManagedZone#key_length}
  */
  readonly keyLength?: number;
  /**
  * Specifies whether this is a key signing key (KSK) or a zone
signing key (ZSK). Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#key_type GoogleDnsManagedZone#key_type}
  */
  readonly keyType?: string;
  /**
  * Identifies what kind of resource this is
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}
  */
  readonly kind?: string;
}

export function googleDnsManagedZoneDnssecConfigDefaultKeySpecsToTerraform(struct?: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key_length: cdktf.numberToTerraform(struct!.keyLength),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}

export interface GoogleDnsManagedZoneDnssecConfig {
  /**
  * Identifies what kind of resource this is
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}
  */
  readonly kind?: string;
  /**
  * Specifies the mechanism used to provide authenticated denial-of-existence responses.
non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#non_existence GoogleDnsManagedZone#non_existence}
  */
  readonly nonExistence?: string;
  /**
  * Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#state GoogleDnsManagedZone#state}
  */
  readonly state?: string;
  /**
  * default_key_specs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#default_key_specs GoogleDnsManagedZone#default_key_specs}
  */
  readonly defaultKeySpecs?: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs[] | cdktf.IResolvable;
}

export function googleDnsManagedZoneDnssecConfigToTerraform(struct?: GoogleDnsManagedZoneDnssecConfigOutputReference | GoogleDnsManagedZoneDnssecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    non_existence: cdktf.stringToTerraform(struct!.nonExistence),
    state: cdktf.stringToTerraform(struct!.state),
    default_key_specs: cdktf.listMapper(googleDnsManagedZoneDnssecConfigDefaultKeySpecsToTerraform)(struct!.defaultKeySpecs),
  }
}

export class GoogleDnsManagedZoneDnssecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZoneDnssecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._nonExistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExistence = this._nonExistence;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._defaultKeySpecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultKeySpecs = this._defaultKeySpecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneDnssecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._nonExistence = undefined;
      this._state = undefined;
      this._defaultKeySpecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._nonExistence = value.nonExistence;
      this._state = value.state;
      this._defaultKeySpecs = value.defaultKeySpecs;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // non_existence - computed: true, optional: true, required: false
  private _nonExistence?: string; 
  public get nonExistence() {
    return this.getStringAttribute('non_existence');
  }
  public set nonExistence(value: string) {
    this._nonExistence = value;
  }
  public resetNonExistence() {
    this._nonExistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistenceInput() {
    return this._nonExistence;
  }

  // state - computed: false, optional: true, required: false
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

  // default_key_specs - computed: false, optional: true, required: false
  private _defaultKeySpecs?: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs[] | cdktf.IResolvable; 
  public get defaultKeySpecs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('default_key_specs');
  }
  public set defaultKeySpecs(value: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs[] | cdktf.IResolvable) {
    this._defaultKeySpecs = value;
  }
  public resetDefaultKeySpecs() {
    this._defaultKeySpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKeySpecsInput() {
    return this._defaultKeySpecs;
  }
}
export interface GoogleDnsManagedZoneForwardingConfigTargetNameServers {
  /**
  * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#forwarding_path GoogleDnsManagedZone#forwarding_path}
  */
  readonly forwardingPath?: string;
  /**
  * IPv4 address of a target name server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#ipv4_address GoogleDnsManagedZone#ipv4_address}
  */
  readonly ipv4Address: string;
}

export function googleDnsManagedZoneForwardingConfigTargetNameServersToTerraform(struct?: GoogleDnsManagedZoneForwardingConfigTargetNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_path: cdktf.stringToTerraform(struct!.forwardingPath),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}

export interface GoogleDnsManagedZoneForwardingConfig {
  /**
  * target_name_servers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#target_name_servers GoogleDnsManagedZone#target_name_servers}
  */
  readonly targetNameServers: GoogleDnsManagedZoneForwardingConfigTargetNameServers[] | cdktf.IResolvable;
}

export function googleDnsManagedZoneForwardingConfigToTerraform(struct?: GoogleDnsManagedZoneForwardingConfigOutputReference | GoogleDnsManagedZoneForwardingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_name_servers: cdktf.listMapper(googleDnsManagedZoneForwardingConfigTargetNameServersToTerraform)(struct!.targetNameServers),
  }
}

export class GoogleDnsManagedZoneForwardingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZoneForwardingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNameServers = this._targetNameServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneForwardingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetNameServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetNameServers = value.targetNameServers;
    }
  }

  // target_name_servers - computed: false, optional: false, required: true
  private _targetNameServers?: GoogleDnsManagedZoneForwardingConfigTargetNameServers[] | cdktf.IResolvable; 
  public get targetNameServers() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('target_name_servers')));
  }
  public set targetNameServers(value: GoogleDnsManagedZoneForwardingConfigTargetNameServers[] | cdktf.IResolvable) {
    this._targetNameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameServersInput() {
    return this._targetNameServers;
  }
}
export interface GoogleDnsManagedZonePeeringConfigTargetNetwork {
  /**
  * The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}
  */
  readonly networkUrl: string;
}

export function googleDnsManagedZonePeeringConfigTargetNetworkToTerraform(struct?: GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference | GoogleDnsManagedZonePeeringConfigTargetNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export class GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZonePeeringConfigTargetNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZonePeeringConfigTargetNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkUrl = value.networkUrl;
    }
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }
}
export interface GoogleDnsManagedZonePeeringConfig {
  /**
  * target_network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#target_network GoogleDnsManagedZone#target_network}
  */
  readonly targetNetwork: GoogleDnsManagedZonePeeringConfigTargetNetwork;
}

export function googleDnsManagedZonePeeringConfigToTerraform(struct?: GoogleDnsManagedZonePeeringConfigOutputReference | GoogleDnsManagedZonePeeringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_network: googleDnsManagedZonePeeringConfigTargetNetworkToTerraform(struct!.targetNetwork),
  }
}

export class GoogleDnsManagedZonePeeringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZonePeeringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNetwork = this._targetNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZonePeeringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetNetwork.internalValue = value.targetNetwork;
    }
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork = new GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference(this, "target_network");
  public get targetNetwork() {
    return this._targetNetwork;
  }
  public putTargetNetwork(value: GoogleDnsManagedZonePeeringConfigTargetNetwork) {
    this._targetNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork.internalValue;
  }
}
export interface GoogleDnsManagedZonePrivateVisibilityConfigNetworks {
  /**
  * The id or fully qualified URL of the VPC network to bind to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}
  */
  readonly networkUrl: string;
}

export function googleDnsManagedZonePrivateVisibilityConfigNetworksToTerraform(struct?: GoogleDnsManagedZonePrivateVisibilityConfigNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export interface GoogleDnsManagedZonePrivateVisibilityConfig {
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#networks GoogleDnsManagedZone#networks}
  */
  readonly networks: GoogleDnsManagedZonePrivateVisibilityConfigNetworks[] | cdktf.IResolvable;
}

export function googleDnsManagedZonePrivateVisibilityConfigToTerraform(struct?: GoogleDnsManagedZonePrivateVisibilityConfigOutputReference | GoogleDnsManagedZonePrivateVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(googleDnsManagedZonePrivateVisibilityConfigNetworksToTerraform)(struct!.networks),
  }
}

export class GoogleDnsManagedZonePrivateVisibilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZonePrivateVisibilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZonePrivateVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networks = value.networks;
    }
  }

  // networks - computed: false, optional: false, required: true
  private _networks?: GoogleDnsManagedZonePrivateVisibilityConfigNetworks[] | cdktf.IResolvable; 
  public get networks() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('networks')));
  }
  public set networks(value: GoogleDnsManagedZonePrivateVisibilityConfigNetworks[] | cdktf.IResolvable) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }
}
export interface GoogleDnsManagedZoneServiceDirectoryConfigNamespace {
  /**
  * The fully qualified or partial URL of the service directory namespace that should be
associated with the zone. This should be formatted like
'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
Ignored for 'public' visibility zones.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#namespace_url GoogleDnsManagedZone#namespace_url}
  */
  readonly namespaceUrl: string;
}

export function googleDnsManagedZoneServiceDirectoryConfigNamespaceToTerraform(struct?: GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference | GoogleDnsManagedZoneServiceDirectoryConfigNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_url: cdktf.stringToTerraform(struct!.namespaceUrl),
  }
}

export class GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZoneServiceDirectoryConfigNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceUrl = this._namespaceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneServiceDirectoryConfigNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaceUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaceUrl = value.namespaceUrl;
    }
  }

  // namespace_url - computed: false, optional: false, required: true
  private _namespaceUrl?: string; 
  public get namespaceUrl() {
    return this.getStringAttribute('namespace_url');
  }
  public set namespaceUrl(value: string) {
    this._namespaceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceUrlInput() {
    return this._namespaceUrl;
  }
}
export interface GoogleDnsManagedZoneServiceDirectoryConfig {
  /**
  * namespace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#namespace GoogleDnsManagedZone#namespace}
  */
  readonly namespace: GoogleDnsManagedZoneServiceDirectoryConfigNamespace;
}

export function googleDnsManagedZoneServiceDirectoryConfigToTerraform(struct?: GoogleDnsManagedZoneServiceDirectoryConfigOutputReference | GoogleDnsManagedZoneServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: googleDnsManagedZoneServiceDirectoryConfigNamespaceToTerraform(struct!.namespace),
  }
}

export class GoogleDnsManagedZoneServiceDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZoneServiceDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneServiceDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace.internalValue = value.namespace;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace = new GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference(this, "namespace");
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: GoogleDnsManagedZoneServiceDirectoryConfigNamespace) {
    this._namespace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }
}
export interface GoogleDnsManagedZoneTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#create GoogleDnsManagedZone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone#update GoogleDnsManagedZone#update}
  */
  readonly update?: string;
}

export function googleDnsManagedZoneTimeoutsToTerraform(struct?: GoogleDnsManagedZoneTimeoutsOutputReference | GoogleDnsManagedZoneTimeouts | cdktf.IResolvable): any {
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

export class GoogleDnsManagedZoneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZoneTimeouts | undefined {
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

  public set internalValue(value: GoogleDnsManagedZoneTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone google_dns_managed_zone}
*/
export class GoogleDnsManagedZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_managed_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_managed_zone google_dns_managed_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDnsManagedZoneConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDnsManagedZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_managed_zone',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.20.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._dnsName = config.dnsName;
    this._forceDestroy = config.forceDestroy;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._reverseLookup = config.reverseLookup;
    this._visibility = config.visibility;
    this._dnssecConfig.internalValue = config.dnssecConfig;
    this._forwardingConfig.internalValue = config.forwardingConfig;
    this._peeringConfig.internalValue = config.peeringConfig;
    this._privateVisibilityConfig.internalValue = config.privateVisibilityConfig;
    this._serviceDirectoryConfig.internalValue = config.serviceDirectoryConfig;
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

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
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

  // reverse_lookup - computed: false, optional: true, required: false
  private _reverseLookup?: boolean | cdktf.IResolvable; 
  public get reverseLookup() {
    return this.getBooleanAttribute('reverse_lookup');
  }
  public set reverseLookup(value: boolean | cdktf.IResolvable) {
    this._reverseLookup = value;
  }
  public resetReverseLookup() {
    this._reverseLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseLookupInput() {
    return this._reverseLookup;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // dnssec_config - computed: false, optional: true, required: false
  private _dnssecConfig = new GoogleDnsManagedZoneDnssecConfigOutputReference(this, "dnssec_config");
  public get dnssecConfig() {
    return this._dnssecConfig;
  }
  public putDnssecConfig(value: GoogleDnsManagedZoneDnssecConfig) {
    this._dnssecConfig.internalValue = value;
  }
  public resetDnssecConfig() {
    this._dnssecConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecConfigInput() {
    return this._dnssecConfig.internalValue;
  }

  // forwarding_config - computed: false, optional: true, required: false
  private _forwardingConfig = new GoogleDnsManagedZoneForwardingConfigOutputReference(this, "forwarding_config");
  public get forwardingConfig() {
    return this._forwardingConfig;
  }
  public putForwardingConfig(value: GoogleDnsManagedZoneForwardingConfig) {
    this._forwardingConfig.internalValue = value;
  }
  public resetForwardingConfig() {
    this._forwardingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingConfigInput() {
    return this._forwardingConfig.internalValue;
  }

  // peering_config - computed: false, optional: true, required: false
  private _peeringConfig = new GoogleDnsManagedZonePeeringConfigOutputReference(this, "peering_config");
  public get peeringConfig() {
    return this._peeringConfig;
  }
  public putPeeringConfig(value: GoogleDnsManagedZonePeeringConfig) {
    this._peeringConfig.internalValue = value;
  }
  public resetPeeringConfig() {
    this._peeringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringConfigInput() {
    return this._peeringConfig.internalValue;
  }

  // private_visibility_config - computed: false, optional: true, required: false
  private _privateVisibilityConfig = new GoogleDnsManagedZonePrivateVisibilityConfigOutputReference(this, "private_visibility_config");
  public get privateVisibilityConfig() {
    return this._privateVisibilityConfig;
  }
  public putPrivateVisibilityConfig(value: GoogleDnsManagedZonePrivateVisibilityConfig) {
    this._privateVisibilityConfig.internalValue = value;
  }
  public resetPrivateVisibilityConfig() {
    this._privateVisibilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVisibilityConfigInput() {
    return this._privateVisibilityConfig.internalValue;
  }

  // service_directory_config - computed: false, optional: true, required: false
  private _serviceDirectoryConfig = new GoogleDnsManagedZoneServiceDirectoryConfigOutputReference(this, "service_directory_config");
  public get serviceDirectoryConfig() {
    return this._serviceDirectoryConfig;
  }
  public putServiceDirectoryConfig(value: GoogleDnsManagedZoneServiceDirectoryConfig) {
    this._serviceDirectoryConfig.internalValue = value;
  }
  public resetServiceDirectoryConfig() {
    this._serviceDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryConfigInput() {
    return this._serviceDirectoryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDnsManagedZoneTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDnsManagedZoneTimeouts) {
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
      dns_name: cdktf.stringToTerraform(this._dnsName),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      reverse_lookup: cdktf.booleanToTerraform(this._reverseLookup),
      visibility: cdktf.stringToTerraform(this._visibility),
      dnssec_config: googleDnsManagedZoneDnssecConfigToTerraform(this._dnssecConfig.internalValue),
      forwarding_config: googleDnsManagedZoneForwardingConfigToTerraform(this._forwardingConfig.internalValue),
      peering_config: googleDnsManagedZonePeeringConfigToTerraform(this._peeringConfig.internalValue),
      private_visibility_config: googleDnsManagedZonePrivateVisibilityConfigToTerraform(this._privateVisibilityConfig.internalValue),
      service_directory_config: googleDnsManagedZoneServiceDirectoryConfigToTerraform(this._serviceDirectoryConfig.internalValue),
      timeouts: googleDnsManagedZoneTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
