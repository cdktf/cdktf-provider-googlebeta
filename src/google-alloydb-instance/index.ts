/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAlloydbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#annotations GoogleAlloydbInstance#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * 'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
  * Note that primary and read instances can have different availability types.
  * Primary instances can be either ZONAL or REGIONAL. Read Pool instances can also be either ZONAL or REGIONAL.
  * Read pools of size 1 can only have zonal availability. Read pools with a node count of 2 or more
  * can have regional availability (nodes are present in 2 or more zones in a region).
  * Possible values are: 'AVAILABILITY_TYPE_UNSPECIFIED', 'ZONAL', 'REGIONAL'.' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#availability_type GoogleAlloydbInstance#availability_type}
  */
  readonly availabilityType?: string;
  /**
  * Identifies the alloydb cluster. Must be in the format
  * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#cluster GoogleAlloydbInstance#cluster}
  */
  readonly cluster: string;
  /**
  * Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#database_flags GoogleAlloydbInstance#database_flags}
  */
  readonly databaseFlags?: { [key: string]: string };
  /**
  * User-settable and human-readable display name for the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#display_name GoogleAlloydbInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#gce_zone GoogleAlloydbInstance#gce_zone}
  */
  readonly gceZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#id GoogleAlloydbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the alloydb instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#instance_id GoogleAlloydbInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * The type of the instance.
  * If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
  * If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
  * Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
  * If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
  * Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
  * Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#instance_type GoogleAlloydbInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * User-defined labels for the alloydb instance.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#labels GoogleAlloydbInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * client_connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#client_connection_config GoogleAlloydbInstance#client_connection_config}
  */
  readonly clientConnectionConfig?: GoogleAlloydbInstanceClientConnectionConfig;
  /**
  * machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#machine_config GoogleAlloydbInstance#machine_config}
  */
  readonly machineConfig?: GoogleAlloydbInstanceMachineConfig;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#network_config GoogleAlloydbInstance#network_config}
  */
  readonly networkConfig?: GoogleAlloydbInstanceNetworkConfig;
  /**
  * observability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#observability_config GoogleAlloydbInstance#observability_config}
  */
  readonly observabilityConfig?: GoogleAlloydbInstanceObservabilityConfig;
  /**
  * psc_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#psc_instance_config GoogleAlloydbInstance#psc_instance_config}
  */
  readonly pscInstanceConfig?: GoogleAlloydbInstancePscInstanceConfig;
  /**
  * query_insights_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#query_insights_config GoogleAlloydbInstance#query_insights_config}
  */
  readonly queryInsightsConfig?: GoogleAlloydbInstanceQueryInsightsConfig;
  /**
  * read_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#read_pool_config GoogleAlloydbInstance#read_pool_config}
  */
  readonly readPoolConfig?: GoogleAlloydbInstanceReadPoolConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#timeouts GoogleAlloydbInstance#timeouts}
  */
  readonly timeouts?: GoogleAlloydbInstanceTimeouts;
}
export interface GoogleAlloydbInstanceClientConnectionConfigSslConfig {
  /**
  * SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#ssl_mode GoogleAlloydbInstance#ssl_mode}
  */
  readonly sslMode?: string;
}

export function googleAlloydbInstanceClientConnectionConfigSslConfigToTerraform(struct?: GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference | GoogleAlloydbInstanceClientConnectionConfigSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
  }
}


export function googleAlloydbInstanceClientConnectionConfigSslConfigToHclTerraform(struct?: GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference | GoogleAlloydbInstanceClientConnectionConfigSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstanceClientConnectionConfigSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceClientConnectionConfigSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslMode = value.sslMode;
    }
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}
export interface GoogleAlloydbInstanceClientConnectionConfig {
  /**
  * Configuration to enforce connectors only (ex: AuthProxy) connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#require_connectors GoogleAlloydbInstance#require_connectors}
  */
  readonly requireConnectors?: boolean | cdktf.IResolvable;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#ssl_config GoogleAlloydbInstance#ssl_config}
  */
  readonly sslConfig?: GoogleAlloydbInstanceClientConnectionConfigSslConfig;
}

export function googleAlloydbInstanceClientConnectionConfigToTerraform(struct?: GoogleAlloydbInstanceClientConnectionConfigOutputReference | GoogleAlloydbInstanceClientConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_connectors: cdktf.booleanToTerraform(struct!.requireConnectors),
    ssl_config: googleAlloydbInstanceClientConnectionConfigSslConfigToTerraform(struct!.sslConfig),
  }
}


export function googleAlloydbInstanceClientConnectionConfigToHclTerraform(struct?: GoogleAlloydbInstanceClientConnectionConfigOutputReference | GoogleAlloydbInstanceClientConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_connectors: {
      value: cdktf.booleanToHclTerraform(struct!.requireConnectors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_config: {
      value: googleAlloydbInstanceClientConnectionConfigSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbInstanceClientConnectionConfigSslConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceClientConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstanceClientConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireConnectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireConnectors = this._requireConnectors;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceClientConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requireConnectors = undefined;
      this._sslConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requireConnectors = value.requireConnectors;
      this._sslConfig.internalValue = value.sslConfig;
    }
  }

  // require_connectors - computed: false, optional: true, required: false
  private _requireConnectors?: boolean | cdktf.IResolvable; 
  public get requireConnectors() {
    return this.getBooleanAttribute('require_connectors');
  }
  public set requireConnectors(value: boolean | cdktf.IResolvable) {
    this._requireConnectors = value;
  }
  public resetRequireConnectors() {
    this._requireConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireConnectorsInput() {
    return this._requireConnectors;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new GoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: GoogleAlloydbInstanceClientConnectionConfigSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }
}
export interface GoogleAlloydbInstanceMachineConfig {
  /**
  * The number of CPU's in the VM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#cpu_count GoogleAlloydbInstance#cpu_count}
  */
  readonly cpuCount?: number;
}

export function googleAlloydbInstanceMachineConfigToTerraform(struct?: GoogleAlloydbInstanceMachineConfigOutputReference | GoogleAlloydbInstanceMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
  }
}


export function googleAlloydbInstanceMachineConfigToHclTerraform(struct?: GoogleAlloydbInstanceMachineConfigOutputReference | GoogleAlloydbInstanceMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstanceMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
    }
  }

  // cpu_count - computed: true, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }
}
export interface GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks {
  /**
  * CIDR range for one authorized network of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#cidr_range GoogleAlloydbInstance#cidr_range}
  */
  readonly cidrRange?: string;
}

export function googleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksToTerraform(struct?: GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_range: cdktf.stringToTerraform(struct!.cidrRange),
  }
}


export function googleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksToHclTerraform(struct?: GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_range: {
      value: cdktf.stringToHclTerraform(struct!.cidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRange = this._cidrRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrRange = value.cidrRange;
    }
  }

  // cidr_range - computed: false, optional: true, required: false
  private _cidrRange?: string; 
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
  public set cidrRange(value: string) {
    this._cidrRange = value;
  }
  public resetCidrRange() {
    this._cidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeInput() {
    return this._cidrRange;
  }
}

export class GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList extends cdktf.ComplexList {
  public internalValue? : GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks[] | cdktf.IResolvable

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
  public get(index: number): GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference {
    return new GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbInstanceNetworkConfig {
  /**
  * Enabling outbound public ip for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#enable_outbound_public_ip GoogleAlloydbInstance#enable_outbound_public_ip}
  */
  readonly enableOutboundPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Enabling public ip for the instance. If a user wishes to disable this,
  * please also clear the list of the authorized external networks set on
  * the same instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#enable_public_ip GoogleAlloydbInstance#enable_public_ip}
  */
  readonly enablePublicIp?: boolean | cdktf.IResolvable;
  /**
  * authorized_external_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#authorized_external_networks GoogleAlloydbInstance#authorized_external_networks}
  */
  readonly authorizedExternalNetworks?: GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks[] | cdktf.IResolvable;
}

export function googleAlloydbInstanceNetworkConfigToTerraform(struct?: GoogleAlloydbInstanceNetworkConfigOutputReference | GoogleAlloydbInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_outbound_public_ip: cdktf.booleanToTerraform(struct!.enableOutboundPublicIp),
    enable_public_ip: cdktf.booleanToTerraform(struct!.enablePublicIp),
    authorized_external_networks: cdktf.listMapper(googleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksToTerraform, true)(struct!.authorizedExternalNetworks),
  }
}


export function googleAlloydbInstanceNetworkConfigToHclTerraform(struct?: GoogleAlloydbInstanceNetworkConfigOutputReference | GoogleAlloydbInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_outbound_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableOutboundPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authorized_external_networks: {
      value: cdktf.listMapperHcl(googleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksToHclTerraform, true)(struct!.authorizedExternalNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstanceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOutboundPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOutboundPublicIp = this._enableOutboundPublicIp;
    }
    if (this._enablePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicIp = this._enablePublicIp;
    }
    if (this._authorizedExternalNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedExternalNetworks = this._authorizedExternalNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOutboundPublicIp = undefined;
      this._enablePublicIp = undefined;
      this._authorizedExternalNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOutboundPublicIp = value.enableOutboundPublicIp;
      this._enablePublicIp = value.enablePublicIp;
      this._authorizedExternalNetworks.internalValue = value.authorizedExternalNetworks;
    }
  }

  // enable_outbound_public_ip - computed: false, optional: true, required: false
  private _enableOutboundPublicIp?: boolean | cdktf.IResolvable; 
  public get enableOutboundPublicIp() {
    return this.getBooleanAttribute('enable_outbound_public_ip');
  }
  public set enableOutboundPublicIp(value: boolean | cdktf.IResolvable) {
    this._enableOutboundPublicIp = value;
  }
  public resetEnableOutboundPublicIp() {
    this._enableOutboundPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOutboundPublicIpInput() {
    return this._enableOutboundPublicIp;
  }

  // enable_public_ip - computed: false, optional: true, required: false
  private _enablePublicIp?: boolean | cdktf.IResolvable; 
  public get enablePublicIp() {
    return this.getBooleanAttribute('enable_public_ip');
  }
  public set enablePublicIp(value: boolean | cdktf.IResolvable) {
    this._enablePublicIp = value;
  }
  public resetEnablePublicIp() {
    this._enablePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicIpInput() {
    return this._enablePublicIp;
  }

  // authorized_external_networks - computed: false, optional: true, required: false
  private _authorizedExternalNetworks = new GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(this, "authorized_external_networks", false);
  public get authorizedExternalNetworks() {
    return this._authorizedExternalNetworks;
  }
  public putAuthorizedExternalNetworks(value: GoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks[] | cdktf.IResolvable) {
    this._authorizedExternalNetworks.internalValue = value;
  }
  public resetAuthorizedExternalNetworks() {
    this._authorizedExternalNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedExternalNetworksInput() {
    return this._authorizedExternalNetworks.internalValue;
  }
}
export interface GoogleAlloydbInstanceObservabilityConfig {
  /**
  * Observability feature status for an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#enabled GoogleAlloydbInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Query string length. The default value is 10240. Any integer between 1024 and 100000 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#max_query_string_length GoogleAlloydbInstance#max_query_string_length}
  */
  readonly maxQueryStringLength?: number;
  /**
  * Preserve comments in the query string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#preserve_comments GoogleAlloydbInstance#preserve_comments}
  */
  readonly preserveComments?: boolean | cdktf.IResolvable;
  /**
  * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 200 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}
  */
  readonly queryPlansPerMinute?: number;
  /**
  * Record application tags for an instance. This flag is turned "on" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}
  */
  readonly recordApplicationTags?: boolean | cdktf.IResolvable;
  /**
  * Track actively running queries. If not set, default value is "off".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#track_active_queries GoogleAlloydbInstance#track_active_queries}
  */
  readonly trackActiveQueries?: boolean | cdktf.IResolvable;
  /**
  * Record wait event types during query execution for an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#track_wait_event_types GoogleAlloydbInstance#track_wait_event_types}
  */
  readonly trackWaitEventTypes?: boolean | cdktf.IResolvable;
  /**
  * Record wait events during query execution for an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#track_wait_events GoogleAlloydbInstance#track_wait_events}
  */
  readonly trackWaitEvents?: boolean | cdktf.IResolvable;
}

export function googleAlloydbInstanceObservabilityConfigToTerraform(struct?: GoogleAlloydbInstanceObservabilityConfigOutputReference | GoogleAlloydbInstanceObservabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_query_string_length: cdktf.numberToTerraform(struct!.maxQueryStringLength),
    preserve_comments: cdktf.booleanToTerraform(struct!.preserveComments),
    query_plans_per_minute: cdktf.numberToTerraform(struct!.queryPlansPerMinute),
    record_application_tags: cdktf.booleanToTerraform(struct!.recordApplicationTags),
    track_active_queries: cdktf.booleanToTerraform(struct!.trackActiveQueries),
    track_wait_event_types: cdktf.booleanToTerraform(struct!.trackWaitEventTypes),
    track_wait_events: cdktf.booleanToTerraform(struct!.trackWaitEvents),
  }
}


export function googleAlloydbInstanceObservabilityConfigToHclTerraform(struct?: GoogleAlloydbInstanceObservabilityConfigOutputReference | GoogleAlloydbInstanceObservabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_query_string_length: {
      value: cdktf.numberToHclTerraform(struct!.maxQueryStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preserve_comments: {
      value: cdktf.booleanToHclTerraform(struct!.preserveComments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_plans_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.queryPlansPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_application_tags: {
      value: cdktf.booleanToHclTerraform(struct!.recordApplicationTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_active_queries: {
      value: cdktf.booleanToHclTerraform(struct!.trackActiveQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_wait_event_types: {
      value: cdktf.booleanToHclTerraform(struct!.trackWaitEventTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_wait_events: {
      value: cdktf.booleanToHclTerraform(struct!.trackWaitEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceObservabilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstanceObservabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxQueryStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQueryStringLength = this._maxQueryStringLength;
    }
    if (this._preserveComments !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveComments = this._preserveComments;
    }
    if (this._queryPlansPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPlansPerMinute = this._queryPlansPerMinute;
    }
    if (this._recordApplicationTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordApplicationTags = this._recordApplicationTags;
    }
    if (this._trackActiveQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackActiveQueries = this._trackActiveQueries;
    }
    if (this._trackWaitEventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackWaitEventTypes = this._trackWaitEventTypes;
    }
    if (this._trackWaitEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackWaitEvents = this._trackWaitEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceObservabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxQueryStringLength = undefined;
      this._preserveComments = undefined;
      this._queryPlansPerMinute = undefined;
      this._recordApplicationTags = undefined;
      this._trackActiveQueries = undefined;
      this._trackWaitEventTypes = undefined;
      this._trackWaitEvents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxQueryStringLength = value.maxQueryStringLength;
      this._preserveComments = value.preserveComments;
      this._queryPlansPerMinute = value.queryPlansPerMinute;
      this._recordApplicationTags = value.recordApplicationTags;
      this._trackActiveQueries = value.trackActiveQueries;
      this._trackWaitEventTypes = value.trackWaitEventTypes;
      this._trackWaitEvents = value.trackWaitEvents;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_query_string_length - computed: false, optional: true, required: false
  private _maxQueryStringLength?: number; 
  public get maxQueryStringLength() {
    return this.getNumberAttribute('max_query_string_length');
  }
  public set maxQueryStringLength(value: number) {
    this._maxQueryStringLength = value;
  }
  public resetMaxQueryStringLength() {
    this._maxQueryStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueryStringLengthInput() {
    return this._maxQueryStringLength;
  }

  // preserve_comments - computed: false, optional: true, required: false
  private _preserveComments?: boolean | cdktf.IResolvable; 
  public get preserveComments() {
    return this.getBooleanAttribute('preserve_comments');
  }
  public set preserveComments(value: boolean | cdktf.IResolvable) {
    this._preserveComments = value;
  }
  public resetPreserveComments() {
    this._preserveComments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCommentsInput() {
    return this._preserveComments;
  }

  // query_plans_per_minute - computed: false, optional: true, required: false
  private _queryPlansPerMinute?: number; 
  public get queryPlansPerMinute() {
    return this.getNumberAttribute('query_plans_per_minute');
  }
  public set queryPlansPerMinute(value: number) {
    this._queryPlansPerMinute = value;
  }
  public resetQueryPlansPerMinute() {
    this._queryPlansPerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPlansPerMinuteInput() {
    return this._queryPlansPerMinute;
  }

  // record_application_tags - computed: false, optional: true, required: false
  private _recordApplicationTags?: boolean | cdktf.IResolvable; 
  public get recordApplicationTags() {
    return this.getBooleanAttribute('record_application_tags');
  }
  public set recordApplicationTags(value: boolean | cdktf.IResolvable) {
    this._recordApplicationTags = value;
  }
  public resetRecordApplicationTags() {
    this._recordApplicationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordApplicationTagsInput() {
    return this._recordApplicationTags;
  }

  // track_active_queries - computed: false, optional: true, required: false
  private _trackActiveQueries?: boolean | cdktf.IResolvable; 
  public get trackActiveQueries() {
    return this.getBooleanAttribute('track_active_queries');
  }
  public set trackActiveQueries(value: boolean | cdktf.IResolvable) {
    this._trackActiveQueries = value;
  }
  public resetTrackActiveQueries() {
    this._trackActiveQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActiveQueriesInput() {
    return this._trackActiveQueries;
  }

  // track_wait_event_types - computed: false, optional: true, required: false
  private _trackWaitEventTypes?: boolean | cdktf.IResolvable; 
  public get trackWaitEventTypes() {
    return this.getBooleanAttribute('track_wait_event_types');
  }
  public set trackWaitEventTypes(value: boolean | cdktf.IResolvable) {
    this._trackWaitEventTypes = value;
  }
  public resetTrackWaitEventTypes() {
    this._trackWaitEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackWaitEventTypesInput() {
    return this._trackWaitEventTypes;
  }

  // track_wait_events - computed: false, optional: true, required: false
  private _trackWaitEvents?: boolean | cdktf.IResolvable; 
  public get trackWaitEvents() {
    return this.getBooleanAttribute('track_wait_events');
  }
  public set trackWaitEvents(value: boolean | cdktf.IResolvable) {
    this._trackWaitEvents = value;
  }
  public resetTrackWaitEvents() {
    this._trackWaitEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackWaitEventsInput() {
    return this._trackWaitEvents;
  }
}
export interface GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs {
  /**
  * The network attachment resource created in the consumer project to which the PSC interface will be linked.
  * This is of the format: "projects/${CONSUMER_PROJECT}/regions/${REGION}/networkAttachments/${NETWORK_ATTACHMENT_NAME}".
  * The network attachment must be in the same region as the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#network_attachment_resource GoogleAlloydbInstance#network_attachment_resource}
  */
  readonly networkAttachmentResource?: string;
}

export function googleAlloydbInstancePscInstanceConfigPscInterfaceConfigsToTerraform(struct?: GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment_resource: cdktf.stringToTerraform(struct!.networkAttachmentResource),
  }
}


export function googleAlloydbInstancePscInstanceConfigPscInterfaceConfigsToHclTerraform(struct?: GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_attachment_resource: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachmentResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachmentResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachmentResource = this._networkAttachmentResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAttachmentResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAttachmentResource = value.networkAttachmentResource;
    }
  }

  // network_attachment_resource - computed: false, optional: true, required: false
  private _networkAttachmentResource?: string; 
  public get networkAttachmentResource() {
    return this.getStringAttribute('network_attachment_resource');
  }
  public set networkAttachmentResource(value: string) {
    this._networkAttachmentResource = value;
  }
  public resetNetworkAttachmentResource() {
    this._networkAttachmentResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentResourceInput() {
    return this._networkAttachmentResource;
  }
}

export class GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference {
    return new GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAlloydbInstancePscInstanceConfig {
  /**
  * List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.
  * These should be specified as project numbers only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#allowed_consumer_projects GoogleAlloydbInstance#allowed_consumer_projects}
  */
  readonly allowedConsumerProjects?: string[];
  /**
  * psc_interface_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#psc_interface_configs GoogleAlloydbInstance#psc_interface_configs}
  */
  readonly pscInterfaceConfigs?: GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs[] | cdktf.IResolvable;
}

export function googleAlloydbInstancePscInstanceConfigToTerraform(struct?: GoogleAlloydbInstancePscInstanceConfigOutputReference | GoogleAlloydbInstancePscInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_consumer_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedConsumerProjects),
    psc_interface_configs: cdktf.listMapper(googleAlloydbInstancePscInstanceConfigPscInterfaceConfigsToTerraform, true)(struct!.pscInterfaceConfigs),
  }
}


export function googleAlloydbInstancePscInstanceConfigToHclTerraform(struct?: GoogleAlloydbInstancePscInstanceConfigOutputReference | GoogleAlloydbInstancePscInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_consumer_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedConsumerProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    psc_interface_configs: {
      value: cdktf.listMapperHcl(googleAlloydbInstancePscInstanceConfigPscInterfaceConfigsToHclTerraform, true)(struct!.pscInterfaceConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstancePscInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstancePscInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedConsumerProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedConsumerProjects = this._allowedConsumerProjects;
    }
    if (this._pscInterfaceConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscInterfaceConfigs = this._pscInterfaceConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstancePscInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedConsumerProjects = undefined;
      this._pscInterfaceConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedConsumerProjects = value.allowedConsumerProjects;
      this._pscInterfaceConfigs.internalValue = value.pscInterfaceConfigs;
    }
  }

  // allowed_consumer_projects - computed: false, optional: true, required: false
  private _allowedConsumerProjects?: string[]; 
  public get allowedConsumerProjects() {
    return this.getListAttribute('allowed_consumer_projects');
  }
  public set allowedConsumerProjects(value: string[]) {
    this._allowedConsumerProjects = value;
  }
  public resetAllowedConsumerProjects() {
    this._allowedConsumerProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedConsumerProjectsInput() {
    return this._allowedConsumerProjects;
  }

  // psc_dns_name - computed: true, optional: false, required: false
  public get pscDnsName() {
    return this.getStringAttribute('psc_dns_name');
  }

  // service_attachment_link - computed: true, optional: false, required: false
  public get serviceAttachmentLink() {
    return this.getStringAttribute('service_attachment_link');
  }

  // psc_interface_configs - computed: false, optional: true, required: false
  private _pscInterfaceConfigs = new GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList(this, "psc_interface_configs", false);
  public get pscInterfaceConfigs() {
    return this._pscInterfaceConfigs;
  }
  public putPscInterfaceConfigs(value: GoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs[] | cdktf.IResolvable) {
    this._pscInterfaceConfigs.internalValue = value;
  }
  public resetPscInterfaceConfigs() {
    this._pscInterfaceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigsInput() {
    return this._pscInterfaceConfigs.internalValue;
  }
}
export interface GoogleAlloydbInstanceQueryInsightsConfig {
  /**
  * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#query_plans_per_minute GoogleAlloydbInstance#query_plans_per_minute}
  */
  readonly queryPlansPerMinute?: number;
  /**
  * Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#query_string_length GoogleAlloydbInstance#query_string_length}
  */
  readonly queryStringLength?: number;
  /**
  * Record application tags for an instance. This flag is turned "on" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#record_application_tags GoogleAlloydbInstance#record_application_tags}
  */
  readonly recordApplicationTags?: boolean | cdktf.IResolvable;
  /**
  * Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#record_client_address GoogleAlloydbInstance#record_client_address}
  */
  readonly recordClientAddress?: boolean | cdktf.IResolvable;
}

export function googleAlloydbInstanceQueryInsightsConfigToTerraform(struct?: GoogleAlloydbInstanceQueryInsightsConfigOutputReference | GoogleAlloydbInstanceQueryInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_plans_per_minute: cdktf.numberToTerraform(struct!.queryPlansPerMinute),
    query_string_length: cdktf.numberToTerraform(struct!.queryStringLength),
    record_application_tags: cdktf.booleanToTerraform(struct!.recordApplicationTags),
    record_client_address: cdktf.booleanToTerraform(struct!.recordClientAddress),
  }
}


export function googleAlloydbInstanceQueryInsightsConfigToHclTerraform(struct?: GoogleAlloydbInstanceQueryInsightsConfigOutputReference | GoogleAlloydbInstanceQueryInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_plans_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.queryPlansPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_string_length: {
      value: cdktf.numberToHclTerraform(struct!.queryStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_application_tags: {
      value: cdktf.booleanToHclTerraform(struct!.recordApplicationTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_client_address: {
      value: cdktf.booleanToHclTerraform(struct!.recordClientAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceQueryInsightsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstanceQueryInsightsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryPlansPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPlansPerMinute = this._queryPlansPerMinute;
    }
    if (this._queryStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringLength = this._queryStringLength;
    }
    if (this._recordApplicationTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordApplicationTags = this._recordApplicationTags;
    }
    if (this._recordClientAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClientAddress = this._recordClientAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceQueryInsightsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryPlansPerMinute = undefined;
      this._queryStringLength = undefined;
      this._recordApplicationTags = undefined;
      this._recordClientAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryPlansPerMinute = value.queryPlansPerMinute;
      this._queryStringLength = value.queryStringLength;
      this._recordApplicationTags = value.recordApplicationTags;
      this._recordClientAddress = value.recordClientAddress;
    }
  }

  // query_plans_per_minute - computed: false, optional: true, required: false
  private _queryPlansPerMinute?: number; 
  public get queryPlansPerMinute() {
    return this.getNumberAttribute('query_plans_per_minute');
  }
  public set queryPlansPerMinute(value: number) {
    this._queryPlansPerMinute = value;
  }
  public resetQueryPlansPerMinute() {
    this._queryPlansPerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPlansPerMinuteInput() {
    return this._queryPlansPerMinute;
  }

  // query_string_length - computed: false, optional: true, required: false
  private _queryStringLength?: number; 
  public get queryStringLength() {
    return this.getNumberAttribute('query_string_length');
  }
  public set queryStringLength(value: number) {
    this._queryStringLength = value;
  }
  public resetQueryStringLength() {
    this._queryStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringLengthInput() {
    return this._queryStringLength;
  }

  // record_application_tags - computed: false, optional: true, required: false
  private _recordApplicationTags?: boolean | cdktf.IResolvable; 
  public get recordApplicationTags() {
    return this.getBooleanAttribute('record_application_tags');
  }
  public set recordApplicationTags(value: boolean | cdktf.IResolvable) {
    this._recordApplicationTags = value;
  }
  public resetRecordApplicationTags() {
    this._recordApplicationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordApplicationTagsInput() {
    return this._recordApplicationTags;
  }

  // record_client_address - computed: false, optional: true, required: false
  private _recordClientAddress?: boolean | cdktf.IResolvable; 
  public get recordClientAddress() {
    return this.getBooleanAttribute('record_client_address');
  }
  public set recordClientAddress(value: boolean | cdktf.IResolvable) {
    this._recordClientAddress = value;
  }
  public resetRecordClientAddress() {
    this._recordClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClientAddressInput() {
    return this._recordClientAddress;
  }
}
export interface GoogleAlloydbInstanceReadPoolConfig {
  /**
  * Read capacity, i.e. number of nodes in a read pool instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#node_count GoogleAlloydbInstance#node_count}
  */
  readonly nodeCount?: number;
}

export function googleAlloydbInstanceReadPoolConfigToTerraform(struct?: GoogleAlloydbInstanceReadPoolConfigOutputReference | GoogleAlloydbInstanceReadPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function googleAlloydbInstanceReadPoolConfigToHclTerraform(struct?: GoogleAlloydbInstanceReadPoolConfigOutputReference | GoogleAlloydbInstanceReadPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAlloydbInstanceReadPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAlloydbInstanceReadPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAlloydbInstanceReadPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCount = value.nodeCount;
    }
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface GoogleAlloydbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#create GoogleAlloydbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#delete GoogleAlloydbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#update GoogleAlloydbInstance#update}
  */
  readonly update?: string;
}

export function googleAlloydbInstanceTimeoutsToTerraform(struct?: GoogleAlloydbInstanceTimeouts | cdktf.IResolvable): any {
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


export function googleAlloydbInstanceTimeoutsToHclTerraform(struct?: GoogleAlloydbInstanceTimeouts | cdktf.IResolvable): any {
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

export class GoogleAlloydbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAlloydbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAlloydbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance google_alloydb_instance}
*/
export class GoogleAlloydbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_alloydb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAlloydbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAlloydbInstance to import
  * @param importFromId The id of the existing GoogleAlloydbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAlloydbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_alloydb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_alloydb_instance google_alloydb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAlloydbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAlloydbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_alloydb_instance',
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
    this._annotations = config.annotations;
    this._availabilityType = config.availabilityType;
    this._cluster = config.cluster;
    this._databaseFlags = config.databaseFlags;
    this._displayName = config.displayName;
    this._gceZone = config.gceZone;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceType = config.instanceType;
    this._labels = config.labels;
    this._clientConnectionConfig.internalValue = config.clientConnectionConfig;
    this._machineConfig.internalValue = config.machineConfig;
    this._networkConfig.internalValue = config.networkConfig;
    this._observabilityConfig.internalValue = config.observabilityConfig;
    this._pscInstanceConfig.internalValue = config.pscInstanceConfig;
    this._queryInsightsConfig.internalValue = config.queryInsightsConfig;
    this._readPoolConfig.internalValue = config.readPoolConfig;
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

  // availability_type - computed: true, optional: true, required: false
  private _availabilityType?: string; 
  public get availabilityType() {
    return this.getStringAttribute('availability_type');
  }
  public set availabilityType(value: string) {
    this._availabilityType = value;
  }
  public resetAvailabilityType() {
    this._availabilityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityTypeInput() {
    return this._availabilityType;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database_flags - computed: true, optional: true, required: false
  private _databaseFlags?: { [key: string]: string }; 
  public get databaseFlags() {
    return this.getStringMapAttribute('database_flags');
  }
  public set databaseFlags(value: { [key: string]: string }) {
    this._databaseFlags = value;
  }
  public resetDatabaseFlags() {
    this._databaseFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFlagsInput() {
    return this._databaseFlags;
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

  // gce_zone - computed: false, optional: true, required: false
  private _gceZone?: string; 
  public get gceZone() {
    return this.getStringAttribute('gce_zone');
  }
  public set gceZone(value: string) {
    this._gceZone = value;
  }
  public resetGceZone() {
    this._gceZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceZoneInput() {
    return this._gceZone;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outbound_public_ip_addresses - computed: true, optional: false, required: false
  public get outboundPublicIpAddresses() {
    return this.getListAttribute('outbound_public_ip_addresses');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // client_connection_config - computed: false, optional: true, required: false
  private _clientConnectionConfig = new GoogleAlloydbInstanceClientConnectionConfigOutputReference(this, "client_connection_config");
  public get clientConnectionConfig() {
    return this._clientConnectionConfig;
  }
  public putClientConnectionConfig(value: GoogleAlloydbInstanceClientConnectionConfig) {
    this._clientConnectionConfig.internalValue = value;
  }
  public resetClientConnectionConfig() {
    this._clientConnectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectionConfigInput() {
    return this._clientConnectionConfig.internalValue;
  }

  // machine_config - computed: false, optional: true, required: false
  private _machineConfig = new GoogleAlloydbInstanceMachineConfigOutputReference(this, "machine_config");
  public get machineConfig() {
    return this._machineConfig;
  }
  public putMachineConfig(value: GoogleAlloydbInstanceMachineConfig) {
    this._machineConfig.internalValue = value;
  }
  public resetMachineConfig() {
    this._machineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConfigInput() {
    return this._machineConfig.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleAlloydbInstanceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleAlloydbInstanceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // observability_config - computed: false, optional: true, required: false
  private _observabilityConfig = new GoogleAlloydbInstanceObservabilityConfigOutputReference(this, "observability_config");
  public get observabilityConfig() {
    return this._observabilityConfig;
  }
  public putObservabilityConfig(value: GoogleAlloydbInstanceObservabilityConfig) {
    this._observabilityConfig.internalValue = value;
  }
  public resetObservabilityConfig() {
    this._observabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityConfigInput() {
    return this._observabilityConfig.internalValue;
  }

  // psc_instance_config - computed: false, optional: true, required: false
  private _pscInstanceConfig = new GoogleAlloydbInstancePscInstanceConfigOutputReference(this, "psc_instance_config");
  public get pscInstanceConfig() {
    return this._pscInstanceConfig;
  }
  public putPscInstanceConfig(value: GoogleAlloydbInstancePscInstanceConfig) {
    this._pscInstanceConfig.internalValue = value;
  }
  public resetPscInstanceConfig() {
    this._pscInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInstanceConfigInput() {
    return this._pscInstanceConfig.internalValue;
  }

  // query_insights_config - computed: false, optional: true, required: false
  private _queryInsightsConfig = new GoogleAlloydbInstanceQueryInsightsConfigOutputReference(this, "query_insights_config");
  public get queryInsightsConfig() {
    return this._queryInsightsConfig;
  }
  public putQueryInsightsConfig(value: GoogleAlloydbInstanceQueryInsightsConfig) {
    this._queryInsightsConfig.internalValue = value;
  }
  public resetQueryInsightsConfig() {
    this._queryInsightsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsConfigInput() {
    return this._queryInsightsConfig.internalValue;
  }

  // read_pool_config - computed: false, optional: true, required: false
  private _readPoolConfig = new GoogleAlloydbInstanceReadPoolConfigOutputReference(this, "read_pool_config");
  public get readPoolConfig() {
    return this._readPoolConfig;
  }
  public putReadPoolConfig(value: GoogleAlloydbInstanceReadPoolConfig) {
    this._readPoolConfig.internalValue = value;
  }
  public resetReadPoolConfig() {
    this._readPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPoolConfigInput() {
    return this._readPoolConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAlloydbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAlloydbInstanceTimeouts) {
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
      availability_type: cdktf.stringToTerraform(this._availabilityType),
      cluster: cdktf.stringToTerraform(this._cluster),
      database_flags: cdktf.hashMapper(cdktf.stringToTerraform)(this._databaseFlags),
      display_name: cdktf.stringToTerraform(this._displayName),
      gce_zone: cdktf.stringToTerraform(this._gceZone),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      client_connection_config: googleAlloydbInstanceClientConnectionConfigToTerraform(this._clientConnectionConfig.internalValue),
      machine_config: googleAlloydbInstanceMachineConfigToTerraform(this._machineConfig.internalValue),
      network_config: googleAlloydbInstanceNetworkConfigToTerraform(this._networkConfig.internalValue),
      observability_config: googleAlloydbInstanceObservabilityConfigToTerraform(this._observabilityConfig.internalValue),
      psc_instance_config: googleAlloydbInstancePscInstanceConfigToTerraform(this._pscInstanceConfig.internalValue),
      query_insights_config: googleAlloydbInstanceQueryInsightsConfigToTerraform(this._queryInsightsConfig.internalValue),
      read_pool_config: googleAlloydbInstanceReadPoolConfigToTerraform(this._readPoolConfig.internalValue),
      timeouts: googleAlloydbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      availability_type: {
        value: cdktf.stringToHclTerraform(this._availabilityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_flags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._databaseFlags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gce_zone: {
        value: cdktf.stringToHclTerraform(this._gceZone),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
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
      client_connection_config: {
        value: googleAlloydbInstanceClientConnectionConfigToHclTerraform(this._clientConnectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbInstanceClientConnectionConfigList",
      },
      machine_config: {
        value: googleAlloydbInstanceMachineConfigToHclTerraform(this._machineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbInstanceMachineConfigList",
      },
      network_config: {
        value: googleAlloydbInstanceNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbInstanceNetworkConfigList",
      },
      observability_config: {
        value: googleAlloydbInstanceObservabilityConfigToHclTerraform(this._observabilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbInstanceObservabilityConfigList",
      },
      psc_instance_config: {
        value: googleAlloydbInstancePscInstanceConfigToHclTerraform(this._pscInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbInstancePscInstanceConfigList",
      },
      query_insights_config: {
        value: googleAlloydbInstanceQueryInsightsConfigToHclTerraform(this._queryInsightsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbInstanceQueryInsightsConfigList",
      },
      read_pool_config: {
        value: googleAlloydbInstanceReadPoolConfigToHclTerraform(this._readPoolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAlloydbInstanceReadPoolConfigList",
      },
      timeouts: {
        value: googleAlloydbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAlloydbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
