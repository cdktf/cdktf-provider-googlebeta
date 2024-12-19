/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDnsManagedZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * A textual description field. Defaults to 'Managed by Terraform'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#description GoogleDnsManagedZone#description}
  */
  readonly description?: string;
  /**
  * The DNS name of this managed zone, for instance "example.com.".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#dns_name GoogleDnsManagedZone#dns_name}
  */
  readonly dnsName: string;
  /**
  * Set this true to delete all records in the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#force_destroy GoogleDnsManagedZone#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this ManagedZone.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#labels GoogleDnsManagedZone#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * User assigned name for this resource.
  * Must be unique within the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#name GoogleDnsManagedZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}
  */
  readonly project?: string;
  /**
  * Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
  * lookup queries using automatically configured records for VPC resources. This only applies
  * to networks listed under 'private_visibility_config'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#reverse_lookup GoogleDnsManagedZone#reverse_lookup}
  */
  readonly reverseLookup?: boolean | cdktf.IResolvable;
  /**
  * The zone's visibility: public zones are exposed to the Internet,
  * while private zones are visible only to Virtual Private Cloud resources. Default value: "public" Possible values: ["private", "public"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#visibility GoogleDnsManagedZone#visibility}
  */
  readonly visibility?: string;
  /**
  * cloud_logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#cloud_logging_config GoogleDnsManagedZone#cloud_logging_config}
  */
  readonly cloudLoggingConfig?: GoogleDnsManagedZoneCloudLoggingConfig;
  /**
  * dnssec_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#dnssec_config GoogleDnsManagedZone#dnssec_config}
  */
  readonly dnssecConfig?: GoogleDnsManagedZoneDnssecConfig;
  /**
  * forwarding_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#forwarding_config GoogleDnsManagedZone#forwarding_config}
  */
  readonly forwardingConfig?: GoogleDnsManagedZoneForwardingConfig;
  /**
  * peering_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#peering_config GoogleDnsManagedZone#peering_config}
  */
  readonly peeringConfig?: GoogleDnsManagedZonePeeringConfig;
  /**
  * private_visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#private_visibility_config GoogleDnsManagedZone#private_visibility_config}
  */
  readonly privateVisibilityConfig?: GoogleDnsManagedZonePrivateVisibilityConfig;
  /**
  * service_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#service_directory_config GoogleDnsManagedZone#service_directory_config}
  */
  readonly serviceDirectoryConfig?: GoogleDnsManagedZoneServiceDirectoryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#timeouts GoogleDnsManagedZone#timeouts}
  */
  readonly timeouts?: GoogleDnsManagedZoneTimeouts;
}
export interface GoogleDnsManagedZoneCloudLoggingConfig {
  /**
  * If set, enable query logging for this ManagedZone. False by default, making logging opt-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#enable_logging GoogleDnsManagedZone#enable_logging}
  */
  readonly enableLogging: boolean | cdktf.IResolvable;
}

export function googleDnsManagedZoneCloudLoggingConfigToTerraform(struct?: GoogleDnsManagedZoneCloudLoggingConfigOutputReference | GoogleDnsManagedZoneCloudLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
  }
}


export function googleDnsManagedZoneCloudLoggingConfigToHclTerraform(struct?: GoogleDnsManagedZoneCloudLoggingConfigOutputReference | GoogleDnsManagedZoneCloudLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsManagedZoneCloudLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsManagedZoneCloudLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneCloudLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableLogging = value.enableLogging;
    }
  }

  // enable_logging - computed: false, optional: false, required: true
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }
}
export interface GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs {
  /**
  * String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#algorithm GoogleDnsManagedZone#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Length of the keys in bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#key_length GoogleDnsManagedZone#key_length}
  */
  readonly keyLength?: number;
  /**
  * Specifies whether this is a key signing key (KSK) or a zone
  * signing key (ZSK). Key signing keys have the Secure Entry
  * Point flag set and, when active, will only be used to sign
  * resource record sets of type DNSKEY. Zone signing keys do
  * not have the Secure Entry Point flag set and will be used
  * to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#key_type GoogleDnsManagedZone#key_type}
  */
  readonly keyType?: string;
  /**
  * Identifies what kind of resource this is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}
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


export function googleDnsManagedZoneDnssecConfigDefaultKeySpecsToHclTerraform(struct?: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_length: {
      value: cdktf.numberToHclTerraform(struct!.keyLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._keyLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyLength = this._keyLength;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._keyLength = undefined;
      this._keyType = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._keyLength = value.keyLength;
      this._keyType = value.keyType;
      this._kind = value.kind;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key_length - computed: false, optional: true, required: false
  private _keyLength?: number; 
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }
  public set keyLength(value: number) {
    this._keyLength = value;
  }
  public resetKeyLength() {
    this._keyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLengthInput() {
    return this._keyLength;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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
}

export class GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList extends cdktf.ComplexList {
  public internalValue? : GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs[] | cdktf.IResolvable

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
  public get(index: number): GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference {
    return new GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsManagedZoneDnssecConfig {
  /**
  * Identifies what kind of resource this is
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}
  */
  readonly kind?: string;
  /**
  * Specifies the mechanism used to provide authenticated denial-of-existence responses.
  * non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#non_existence GoogleDnsManagedZone#non_existence}
  */
  readonly nonExistence?: string;
  /**
  * Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#state GoogleDnsManagedZone#state}
  */
  readonly state?: string;
  /**
  * default_key_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#default_key_specs GoogleDnsManagedZone#default_key_specs}
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
    default_key_specs: cdktf.listMapper(googleDnsManagedZoneDnssecConfigDefaultKeySpecsToTerraform, true)(struct!.defaultKeySpecs),
  }
}


export function googleDnsManagedZoneDnssecConfigToHclTerraform(struct?: GoogleDnsManagedZoneDnssecConfigOutputReference | GoogleDnsManagedZoneDnssecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_existence: {
      value: cdktf.stringToHclTerraform(struct!.nonExistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_key_specs: {
      value: cdktf.listMapperHcl(googleDnsManagedZoneDnssecConfigDefaultKeySpecsToHclTerraform, true)(struct!.defaultKeySpecs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._defaultKeySpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultKeySpecs = this._defaultKeySpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneDnssecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._nonExistence = undefined;
      this._state = undefined;
      this._defaultKeySpecs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._nonExistence = value.nonExistence;
      this._state = value.state;
      this._defaultKeySpecs.internalValue = value.defaultKeySpecs;
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
  private _defaultKeySpecs = new GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList(this, "default_key_specs", false);
  public get defaultKeySpecs() {
    return this._defaultKeySpecs;
  }
  public putDefaultKeySpecs(value: GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs[] | cdktf.IResolvable) {
    this._defaultKeySpecs.internalValue = value;
  }
  public resetDefaultKeySpecs() {
    this._defaultKeySpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultKeySpecsInput() {
    return this._defaultKeySpecs.internalValue;
  }
}
export interface GoogleDnsManagedZoneForwardingConfigTargetNameServers {
  /**
  * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
  * decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
  * to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#forwarding_path GoogleDnsManagedZone#forwarding_path}
  */
  readonly forwardingPath?: string;
  /**
  * IPv4 address of a target name server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#ipv4_address GoogleDnsManagedZone#ipv4_address}
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


export function googleDnsManagedZoneForwardingConfigTargetNameServersToHclTerraform(struct?: GoogleDnsManagedZoneForwardingConfigTargetNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_path: {
      value: cdktf.stringToHclTerraform(struct!.forwardingPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDnsManagedZoneForwardingConfigTargetNameServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingPath = this._forwardingPath;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneForwardingConfigTargetNameServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardingPath = undefined;
      this._ipv4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardingPath = value.forwardingPath;
      this._ipv4Address = value.ipv4Address;
    }
  }

  // forwarding_path - computed: false, optional: true, required: false
  private _forwardingPath?: string; 
  public get forwardingPath() {
    return this.getStringAttribute('forwarding_path');
  }
  public set forwardingPath(value: string) {
    this._forwardingPath = value;
  }
  public resetForwardingPath() {
    this._forwardingPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingPathInput() {
    return this._forwardingPath;
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }
}

export class GoogleDnsManagedZoneForwardingConfigTargetNameServersList extends cdktf.ComplexList {
  public internalValue? : GoogleDnsManagedZoneForwardingConfigTargetNameServers[] | cdktf.IResolvable

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
  public get(index: number): GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference {
    return new GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsManagedZoneForwardingConfig {
  /**
  * target_name_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#target_name_servers GoogleDnsManagedZone#target_name_servers}
  */
  readonly targetNameServers: GoogleDnsManagedZoneForwardingConfigTargetNameServers[] | cdktf.IResolvable;
}

export function googleDnsManagedZoneForwardingConfigToTerraform(struct?: GoogleDnsManagedZoneForwardingConfigOutputReference | GoogleDnsManagedZoneForwardingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_name_servers: cdktf.listMapper(googleDnsManagedZoneForwardingConfigTargetNameServersToTerraform, true)(struct!.targetNameServers),
  }
}


export function googleDnsManagedZoneForwardingConfigToHclTerraform(struct?: GoogleDnsManagedZoneForwardingConfigOutputReference | GoogleDnsManagedZoneForwardingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_name_servers: {
      value: cdktf.listMapperHcl(googleDnsManagedZoneForwardingConfigTargetNameServersToHclTerraform, true)(struct!.targetNameServers),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleDnsManagedZoneForwardingConfigTargetNameServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._targetNameServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNameServers = this._targetNameServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZoneForwardingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetNameServers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetNameServers.internalValue = value.targetNameServers;
    }
  }

  // target_name_servers - computed: false, optional: false, required: true
  private _targetNameServers = new GoogleDnsManagedZoneForwardingConfigTargetNameServersList(this, "target_name_servers", true);
  public get targetNameServers() {
    return this._targetNameServers;
  }
  public putTargetNameServers(value: GoogleDnsManagedZoneForwardingConfigTargetNameServers[] | cdktf.IResolvable) {
    this._targetNameServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameServersInput() {
    return this._targetNameServers.internalValue;
  }
}
export interface GoogleDnsManagedZonePeeringConfigTargetNetwork {
  /**
  * The id or fully qualified URL of the VPC network to forward queries to.
  * This should be formatted like 'projects/{project}/global/networks/{network}' or
  * 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}
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


export function googleDnsManagedZonePeeringConfigTargetNetworkToHclTerraform(struct?: GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference | GoogleDnsManagedZonePeeringConfigTargetNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_url: {
      value: cdktf.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#target_network GoogleDnsManagedZone#target_network}
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


export function googleDnsManagedZonePeeringConfigToHclTerraform(struct?: GoogleDnsManagedZonePeeringConfigOutputReference | GoogleDnsManagedZonePeeringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_network: {
      value: googleDnsManagedZonePeeringConfigTargetNetworkToHclTerraform(struct!.targetNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsManagedZonePeeringConfigTargetNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters {
  /**
  * The resource name of the cluster to bind this ManagedZone to.
  * This should be specified in the format like
  * 'projects/* /locations/* /clusters/*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#gke_cluster_name GoogleDnsManagedZone#gke_cluster_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gkeClusterName: string;
}

export function googleDnsManagedZonePrivateVisibilityConfigGkeClustersToTerraform(struct?: GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_cluster_name: cdktf.stringToTerraform(struct!.gkeClusterName),
  }
}


export function googleDnsManagedZonePrivateVisibilityConfigGkeClustersToHclTerraform(struct?: GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gke_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.gkeClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterName = this._gkeClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gkeClusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gkeClusterName = value.gkeClusterName;
    }
  }

  // gke_cluster_name - computed: false, optional: false, required: true
  private _gkeClusterName?: string; 
  public get gkeClusterName() {
    return this.getStringAttribute('gke_cluster_name');
  }
  public set gkeClusterName(value: string) {
    this._gkeClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterNameInput() {
    return this._gkeClusterName;
  }
}

export class GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList extends cdktf.ComplexList {
  public internalValue? : GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters[] | cdktf.IResolvable

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
  public get(index: number): GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference {
    return new GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsManagedZonePrivateVisibilityConfigNetworks {
  /**
  * The id or fully qualified URL of the VPC network to bind to.
  * This should be formatted like 'projects/{project}/global/networks/{network}' or
  * 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}
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


export function googleDnsManagedZonePrivateVisibilityConfigNetworksToHclTerraform(struct?: GoogleDnsManagedZonePrivateVisibilityConfigNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_url: {
      value: cdktf.stringToHclTerraform(struct!.networkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDnsManagedZonePrivateVisibilityConfigNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZonePrivateVisibilityConfigNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class GoogleDnsManagedZonePrivateVisibilityConfigNetworksList extends cdktf.ComplexList {
  public internalValue? : GoogleDnsManagedZonePrivateVisibilityConfigNetworks[] | cdktf.IResolvable

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
  public get(index: number): GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference {
    return new GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDnsManagedZonePrivateVisibilityConfig {
  /**
  * gke_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#gke_clusters GoogleDnsManagedZone#gke_clusters}
  */
  readonly gkeClusters?: GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters[] | cdktf.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#networks GoogleDnsManagedZone#networks}
  */
  readonly networks?: GoogleDnsManagedZonePrivateVisibilityConfigNetworks[] | cdktf.IResolvable;
}

export function googleDnsManagedZonePrivateVisibilityConfigToTerraform(struct?: GoogleDnsManagedZonePrivateVisibilityConfigOutputReference | GoogleDnsManagedZonePrivateVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_clusters: cdktf.listMapper(googleDnsManagedZonePrivateVisibilityConfigGkeClustersToTerraform, true)(struct!.gkeClusters),
    networks: cdktf.listMapper(googleDnsManagedZonePrivateVisibilityConfigNetworksToTerraform, true)(struct!.networks),
  }
}


export function googleDnsManagedZonePrivateVisibilityConfigToHclTerraform(struct?: GoogleDnsManagedZonePrivateVisibilityConfigOutputReference | GoogleDnsManagedZonePrivateVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gke_clusters: {
      value: cdktf.listMapperHcl(googleDnsManagedZonePrivateVisibilityConfigGkeClustersToHclTerraform, true)(struct!.gkeClusters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList",
    },
    networks: {
      value: cdktf.listMapperHcl(googleDnsManagedZonePrivateVisibilityConfigNetworksToHclTerraform, true)(struct!.networks),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleDnsManagedZonePrivateVisibilityConfigNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._gkeClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusters = this._gkeClusters?.internalValue;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsManagedZonePrivateVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeClusters.internalValue = undefined;
      this._networks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeClusters.internalValue = value.gkeClusters;
      this._networks.internalValue = value.networks;
    }
  }

  // gke_clusters - computed: false, optional: true, required: false
  private _gkeClusters = new GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList(this, "gke_clusters", false);
  public get gkeClusters() {
    return this._gkeClusters;
  }
  public putGkeClusters(value: GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters[] | cdktf.IResolvable) {
    this._gkeClusters.internalValue = value;
  }
  public resetGkeClusters() {
    this._gkeClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClustersInput() {
    return this._gkeClusters.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new GoogleDnsManagedZonePrivateVisibilityConfigNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: GoogleDnsManagedZonePrivateVisibilityConfigNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }
}
export interface GoogleDnsManagedZoneServiceDirectoryConfigNamespace {
  /**
  * The fully qualified or partial URL of the service directory namespace that should be
  * associated with the zone. This should be formatted like
  * 'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
  * or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
  * Ignored for 'public' visibility zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#namespace_url GoogleDnsManagedZone#namespace_url}
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


export function googleDnsManagedZoneServiceDirectoryConfigNamespaceToHclTerraform(struct?: GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference | GoogleDnsManagedZoneServiceDirectoryConfigNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_url: {
      value: cdktf.stringToHclTerraform(struct!.namespaceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#namespace GoogleDnsManagedZone#namespace}
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


export function googleDnsManagedZoneServiceDirectoryConfigToHclTerraform(struct?: GoogleDnsManagedZoneServiceDirectoryConfigOutputReference | GoogleDnsManagedZoneServiceDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: googleDnsManagedZoneServiceDirectoryConfigNamespaceToHclTerraform(struct!.namespace),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDnsManagedZoneServiceDirectoryConfigNamespaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}
  */
  readonly update?: string;
}

export function googleDnsManagedZoneTimeoutsToTerraform(struct?: GoogleDnsManagedZoneTimeouts | cdktf.IResolvable): any {
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


export function googleDnsManagedZoneTimeoutsToHclTerraform(struct?: GoogleDnsManagedZoneTimeouts | cdktf.IResolvable): any {
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

export class GoogleDnsManagedZoneTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDnsManagedZoneTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDnsManagedZoneTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone google_dns_managed_zone}
*/
export class GoogleDnsManagedZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_managed_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDnsManagedZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDnsManagedZone to import
  * @param importFromId The id of the existing GoogleDnsManagedZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDnsManagedZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dns_managed_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dns_managed_zone google_dns_managed_zone} Resource
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
    this._description = config.description;
    this._dnsName = config.dnsName;
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._reverseLookup = config.reverseLookup;
    this._visibility = config.visibility;
    this._cloudLoggingConfig.internalValue = config.cloudLoggingConfig;
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // managed_zone_id - computed: true, optional: false, required: false
  public get managedZoneId() {
    return this.getNumberAttribute('managed_zone_id');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // cloud_logging_config - computed: false, optional: true, required: false
  private _cloudLoggingConfig = new GoogleDnsManagedZoneCloudLoggingConfigOutputReference(this, "cloud_logging_config");
  public get cloudLoggingConfig() {
    return this._cloudLoggingConfig;
  }
  public putCloudLoggingConfig(value: GoogleDnsManagedZoneCloudLoggingConfig) {
    this._cloudLoggingConfig.internalValue = value;
  }
  public resetCloudLoggingConfig() {
    this._cloudLoggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLoggingConfigInput() {
    return this._cloudLoggingConfig.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      reverse_lookup: cdktf.booleanToTerraform(this._reverseLookup),
      visibility: cdktf.stringToTerraform(this._visibility),
      cloud_logging_config: googleDnsManagedZoneCloudLoggingConfigToTerraform(this._cloudLoggingConfig.internalValue),
      dnssec_config: googleDnsManagedZoneDnssecConfigToTerraform(this._dnssecConfig.internalValue),
      forwarding_config: googleDnsManagedZoneForwardingConfigToTerraform(this._forwardingConfig.internalValue),
      peering_config: googleDnsManagedZonePeeringConfigToTerraform(this._peeringConfig.internalValue),
      private_visibility_config: googleDnsManagedZonePrivateVisibilityConfigToTerraform(this._privateVisibilityConfig.internalValue),
      service_directory_config: googleDnsManagedZoneServiceDirectoryConfigToTerraform(this._serviceDirectoryConfig.internalValue),
      timeouts: googleDnsManagedZoneTimeoutsToTerraform(this._timeouts.internalValue),
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
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      reverse_lookup: {
        value: cdktf.booleanToHclTerraform(this._reverseLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_logging_config: {
        value: googleDnsManagedZoneCloudLoggingConfigToHclTerraform(this._cloudLoggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsManagedZoneCloudLoggingConfigList",
      },
      dnssec_config: {
        value: googleDnsManagedZoneDnssecConfigToHclTerraform(this._dnssecConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsManagedZoneDnssecConfigList",
      },
      forwarding_config: {
        value: googleDnsManagedZoneForwardingConfigToHclTerraform(this._forwardingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsManagedZoneForwardingConfigList",
      },
      peering_config: {
        value: googleDnsManagedZonePeeringConfigToHclTerraform(this._peeringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsManagedZonePeeringConfigList",
      },
      private_visibility_config: {
        value: googleDnsManagedZonePrivateVisibilityConfigToHclTerraform(this._privateVisibilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsManagedZonePrivateVisibilityConfigList",
      },
      service_directory_config: {
        value: googleDnsManagedZoneServiceDirectoryConfigToHclTerraform(this._serviceDirectoryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDnsManagedZoneServiceDirectoryConfigList",
      },
      timeouts: {
        value: googleDnsManagedZoneTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDnsManagedZoneTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
