/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleMemorystoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Immutable. Authorization mode of the instance. Possible values:
  *  AUTH_DISABLED
  * IAM_AUTH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#authorization_mode GoogleMemorystoreInstance#authorization_mode}
  */
  readonly authorizationMode?: string;
  /**
  * Optional. If set to true deletion of the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#deletion_protection_enabled GoogleMemorystoreInstance#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. User-provided engine configurations for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#engine_configs GoogleMemorystoreInstance#engine_configs}
  */
  readonly engineConfigs?: { [key: string]: string };
  /**
  * Optional. Engine version of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#engine_version GoogleMemorystoreInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#id GoogleMemorystoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Required. The ID to use for the instance, which will become the final component of
  * the instance's resource name.
  * 
  * This value is subject to the following restrictions:
  * 
  * * Must be 4-63 characters in length
  * * Must begin with a letter or digit
  * * Must contain only lowercase letters, digits, and hyphens
  * * Must not end with a hyphen
  * * Must be unique within a location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#instance_id GoogleMemorystoreInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Optional. Labels to represent user-provided metadata. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#labels GoogleMemorystoreInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#location GoogleMemorystoreInstance#location}
  */
  readonly location: string;
  /**
  * Optional. cluster or cluster-disabled. 
  *  Possible values:
  *  CLUSTER
  *  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}
  */
  readonly mode?: string;
  /**
  * Optional. Immutable. Machine type for individual nodes of the instance. 
  *  Possible values:
  *  SHARED_CORE_NANO
  * HIGHMEM_MEDIUM
  * HIGHMEM_XLARGE
  * STANDARD_SMALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#node_type GoogleMemorystoreInstance#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#project GoogleMemorystoreInstance#project}
  */
  readonly project?: string;
  /**
  * Optional. Number of replica nodes per shard. If omitted the default is 0 replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#replica_count GoogleMemorystoreInstance#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Required. Number of shards for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#shard_count GoogleMemorystoreInstance#shard_count}
  */
  readonly shardCount: number;
  /**
  * Optional. Immutable. In-transit encryption mode of the instance. 
  *  Possible values:
  *  TRANSIT_ENCRYPTION_DISABLED
  * SERVER_AUTHENTICATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#transit_encryption_mode GoogleMemorystoreInstance#transit_encryption_mode}
  */
  readonly transitEncryptionMode?: string;
  /**
  * desired_psc_auto_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#desired_psc_auto_connections GoogleMemorystoreInstance#desired_psc_auto_connections}
  */
  readonly desiredPscAutoConnections: GoogleMemorystoreInstanceDesiredPscAutoConnections[] | cdktf.IResolvable;
  /**
  * persistence_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#persistence_config GoogleMemorystoreInstance#persistence_config}
  */
  readonly persistenceConfig?: GoogleMemorystoreInstancePersistenceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#timeouts GoogleMemorystoreInstance#timeouts}
  */
  readonly timeouts?: GoogleMemorystoreInstanceTimeouts;
  /**
  * zone_distribution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#zone_distribution_config GoogleMemorystoreInstance#zone_distribution_config}
  */
  readonly zoneDistributionConfig?: GoogleMemorystoreInstanceZoneDistributionConfig;
}
export interface GoogleMemorystoreInstanceDiscoveryEndpoints {
}

export function googleMemorystoreInstanceDiscoveryEndpointsToTerraform(struct?: GoogleMemorystoreInstanceDiscoveryEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceDiscoveryEndpointsToHclTerraform(struct?: GoogleMemorystoreInstanceDiscoveryEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstanceDiscoveryEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceDiscoveryEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class GoogleMemorystoreInstanceDiscoveryEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference {
    return new GoogleMemorystoreInstanceDiscoveryEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection {
}

export function googleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionToTerraform(struct?: GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionToHclTerraform(struct?: GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // forwarding_rule - computed: true, optional: false, required: false
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
}

export class GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference {
    return new GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceEndpointsConnections {
}

export function googleMemorystoreInstanceEndpointsConnectionsToTerraform(struct?: GoogleMemorystoreInstanceEndpointsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceEndpointsConnectionsToHclTerraform(struct?: GoogleMemorystoreInstanceEndpointsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceEndpointsConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstanceEndpointsConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceEndpointsConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // psc_auto_connection - computed: true, optional: false, required: false
  private _pscAutoConnection = new GoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList(this, "psc_auto_connection", false);
  public get pscAutoConnection() {
    return this._pscAutoConnection;
  }
}

export class GoogleMemorystoreInstanceEndpointsConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceEndpointsConnectionsOutputReference {
    return new GoogleMemorystoreInstanceEndpointsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceEndpoints {
}

export function googleMemorystoreInstanceEndpointsToTerraform(struct?: GoogleMemorystoreInstanceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceEndpointsToHclTerraform(struct?: GoogleMemorystoreInstanceEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstanceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new GoogleMemorystoreInstanceEndpointsConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
}

export class GoogleMemorystoreInstanceEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceEndpointsOutputReference {
    return new GoogleMemorystoreInstanceEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceNodeConfig {
}

export function googleMemorystoreInstanceNodeConfigToTerraform(struct?: GoogleMemorystoreInstanceNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceNodeConfigToHclTerraform(struct?: GoogleMemorystoreInstanceNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstanceNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
}

export class GoogleMemorystoreInstanceNodeConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceNodeConfigOutputReference {
    return new GoogleMemorystoreInstanceNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstancePscAutoConnections {
}

export function googleMemorystoreInstancePscAutoConnectionsToTerraform(struct?: GoogleMemorystoreInstancePscAutoConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstancePscAutoConnectionsToHclTerraform(struct?: GoogleMemorystoreInstancePscAutoConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstancePscAutoConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstancePscAutoConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstancePscAutoConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // forwarding_rule - computed: true, optional: false, required: false
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }

  // psc_connection_status - computed: true, optional: false, required: false
  public get pscConnectionStatus() {
    return this.getStringAttribute('psc_connection_status');
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
}

export class GoogleMemorystoreInstancePscAutoConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstancePscAutoConnectionsOutputReference {
    return new GoogleMemorystoreInstancePscAutoConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceStateInfoUpdateInfo {
}

export function googleMemorystoreInstanceStateInfoUpdateInfoToTerraform(struct?: GoogleMemorystoreInstanceStateInfoUpdateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceStateInfoUpdateInfoToHclTerraform(struct?: GoogleMemorystoreInstanceStateInfoUpdateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstanceStateInfoUpdateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceStateInfoUpdateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_replica_count - computed: true, optional: false, required: false
  public get targetReplicaCount() {
    return this.getNumberAttribute('target_replica_count');
  }

  // target_shard_count - computed: true, optional: false, required: false
  public get targetShardCount() {
    return this.getNumberAttribute('target_shard_count');
  }
}

export class GoogleMemorystoreInstanceStateInfoUpdateInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference {
    return new GoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceStateInfo {
}

export function googleMemorystoreInstanceStateInfoToTerraform(struct?: GoogleMemorystoreInstanceStateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceStateInfoToHclTerraform(struct?: GoogleMemorystoreInstanceStateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceStateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleMemorystoreInstanceStateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceStateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // update_info - computed: true, optional: false, required: false
  private _updateInfo = new GoogleMemorystoreInstanceStateInfoUpdateInfoList(this, "update_info", false);
  public get updateInfo() {
    return this._updateInfo;
  }
}

export class GoogleMemorystoreInstanceStateInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceStateInfoOutputReference {
    return new GoogleMemorystoreInstanceStateInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceDesiredPscAutoConnections {
  /**
  * Required. The consumer network where the IP address resides, in the form of
  * projects/{project_id}/global/networks/{network_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#network GoogleMemorystoreInstance#network}
  */
  readonly network: string;
  /**
  * Required. The consumer project_id where the forwarding rule is created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#project_id GoogleMemorystoreInstance#project_id}
  */
  readonly projectId: string;
}

export function googleMemorystoreInstanceDesiredPscAutoConnectionsToTerraform(struct?: GoogleMemorystoreInstanceDesiredPscAutoConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function googleMemorystoreInstanceDesiredPscAutoConnectionsToHclTerraform(struct?: GoogleMemorystoreInstanceDesiredPscAutoConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceDesiredPscAutoConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceDesiredPscAutoConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._projectId = value.projectId;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class GoogleMemorystoreInstanceDesiredPscAutoConnectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleMemorystoreInstanceDesiredPscAutoConnections[] | cdktf.IResolvable

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
  public get(index: number): GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference {
    return new GoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstancePersistenceConfigAofConfig {
  /**
  * Optional. The fsync mode. 
  *  Possible values:
  *  NEVER
  * EVERY_SEC
  * ALWAYS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#append_fsync GoogleMemorystoreInstance#append_fsync}
  */
  readonly appendFsync?: string;
}

export function googleMemorystoreInstancePersistenceConfigAofConfigToTerraform(struct?: GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference | GoogleMemorystoreInstancePersistenceConfigAofConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_fsync: cdktf.stringToTerraform(struct!.appendFsync),
  }
}


export function googleMemorystoreInstancePersistenceConfigAofConfigToHclTerraform(struct?: GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference | GoogleMemorystoreInstancePersistenceConfigAofConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_fsync: {
      value: cdktf.stringToHclTerraform(struct!.appendFsync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstancePersistenceConfigAofConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendFsync !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendFsync = this._appendFsync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstancePersistenceConfigAofConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appendFsync = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appendFsync = value.appendFsync;
    }
  }

  // append_fsync - computed: true, optional: true, required: false
  private _appendFsync?: string; 
  public get appendFsync() {
    return this.getStringAttribute('append_fsync');
  }
  public set appendFsync(value: string) {
    this._appendFsync = value;
  }
  public resetAppendFsync() {
    this._appendFsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendFsyncInput() {
    return this._appendFsync;
  }
}
export interface GoogleMemorystoreInstancePersistenceConfigRdbConfig {
  /**
  * Optional. Period between RDB snapshots. 
  *  Possible values:
  *  ONE_HOUR
  * SIX_HOURS
  * TWELVE_HOURS
  * TWENTY_FOUR_HOURS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#rdb_snapshot_period GoogleMemorystoreInstance#rdb_snapshot_period}
  */
  readonly rdbSnapshotPeriod?: string;
  /**
  * Optional. Time that the first snapshot was/will be attempted, and to which future
  * snapshots will be aligned. If not provided, the current time will be
  * used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#rdb_snapshot_start_time GoogleMemorystoreInstance#rdb_snapshot_start_time}
  */
  readonly rdbSnapshotStartTime?: string;
}

export function googleMemorystoreInstancePersistenceConfigRdbConfigToTerraform(struct?: GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference | GoogleMemorystoreInstancePersistenceConfigRdbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rdb_snapshot_period: cdktf.stringToTerraform(struct!.rdbSnapshotPeriod),
    rdb_snapshot_start_time: cdktf.stringToTerraform(struct!.rdbSnapshotStartTime),
  }
}


export function googleMemorystoreInstancePersistenceConfigRdbConfigToHclTerraform(struct?: GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference | GoogleMemorystoreInstancePersistenceConfigRdbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rdb_snapshot_period: {
      value: cdktf.stringToHclTerraform(struct!.rdbSnapshotPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdb_snapshot_start_time: {
      value: cdktf.stringToHclTerraform(struct!.rdbSnapshotStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstancePersistenceConfigRdbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rdbSnapshotPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbSnapshotPeriod = this._rdbSnapshotPeriod;
    }
    if (this._rdbSnapshotStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbSnapshotStartTime = this._rdbSnapshotStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstancePersistenceConfigRdbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rdbSnapshotPeriod = undefined;
      this._rdbSnapshotStartTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rdbSnapshotPeriod = value.rdbSnapshotPeriod;
      this._rdbSnapshotStartTime = value.rdbSnapshotStartTime;
    }
  }

  // rdb_snapshot_period - computed: true, optional: true, required: false
  private _rdbSnapshotPeriod?: string; 
  public get rdbSnapshotPeriod() {
    return this.getStringAttribute('rdb_snapshot_period');
  }
  public set rdbSnapshotPeriod(value: string) {
    this._rdbSnapshotPeriod = value;
  }
  public resetRdbSnapshotPeriod() {
    this._rdbSnapshotPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbSnapshotPeriodInput() {
    return this._rdbSnapshotPeriod;
  }

  // rdb_snapshot_start_time - computed: true, optional: true, required: false
  private _rdbSnapshotStartTime?: string; 
  public get rdbSnapshotStartTime() {
    return this.getStringAttribute('rdb_snapshot_start_time');
  }
  public set rdbSnapshotStartTime(value: string) {
    this._rdbSnapshotStartTime = value;
  }
  public resetRdbSnapshotStartTime() {
    this._rdbSnapshotStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbSnapshotStartTimeInput() {
    return this._rdbSnapshotStartTime;
  }
}
export interface GoogleMemorystoreInstancePersistenceConfig {
  /**
  * Optional. Current persistence mode. 
  *  Possible values:
  * DISABLED
  * RDB
  * AOF Possible values: ["DISABLED", "RDB", "AOF"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}
  */
  readonly mode?: string;
  /**
  * aof_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#aof_config GoogleMemorystoreInstance#aof_config}
  */
  readonly aofConfig?: GoogleMemorystoreInstancePersistenceConfigAofConfig;
  /**
  * rdb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#rdb_config GoogleMemorystoreInstance#rdb_config}
  */
  readonly rdbConfig?: GoogleMemorystoreInstancePersistenceConfigRdbConfig;
}

export function googleMemorystoreInstancePersistenceConfigToTerraform(struct?: GoogleMemorystoreInstancePersistenceConfigOutputReference | GoogleMemorystoreInstancePersistenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    aof_config: googleMemorystoreInstancePersistenceConfigAofConfigToTerraform(struct!.aofConfig),
    rdb_config: googleMemorystoreInstancePersistenceConfigRdbConfigToTerraform(struct!.rdbConfig),
  }
}


export function googleMemorystoreInstancePersistenceConfigToHclTerraform(struct?: GoogleMemorystoreInstancePersistenceConfigOutputReference | GoogleMemorystoreInstancePersistenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aof_config: {
      value: googleMemorystoreInstancePersistenceConfigAofConfigToHclTerraform(struct!.aofConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstancePersistenceConfigAofConfigList",
    },
    rdb_config: {
      value: googleMemorystoreInstancePersistenceConfigRdbConfigToHclTerraform(struct!.rdbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstancePersistenceConfigRdbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstancePersistenceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstancePersistenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._aofConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aofConfig = this._aofConfig?.internalValue;
    }
    if (this._rdbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbConfig = this._rdbConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstancePersistenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._aofConfig.internalValue = undefined;
      this._rdbConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._aofConfig.internalValue = value.aofConfig;
      this._rdbConfig.internalValue = value.rdbConfig;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // aof_config - computed: false, optional: true, required: false
  private _aofConfig = new GoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference(this, "aof_config");
  public get aofConfig() {
    return this._aofConfig;
  }
  public putAofConfig(value: GoogleMemorystoreInstancePersistenceConfigAofConfig) {
    this._aofConfig.internalValue = value;
  }
  public resetAofConfig() {
    this._aofConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aofConfigInput() {
    return this._aofConfig.internalValue;
  }

  // rdb_config - computed: false, optional: true, required: false
  private _rdbConfig = new GoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference(this, "rdb_config");
  public get rdbConfig() {
    return this._rdbConfig;
  }
  public putRdbConfig(value: GoogleMemorystoreInstancePersistenceConfigRdbConfig) {
    this._rdbConfig.internalValue = value;
  }
  public resetRdbConfig() {
    this._rdbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbConfigInput() {
    return this._rdbConfig.internalValue;
  }
}
export interface GoogleMemorystoreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#create GoogleMemorystoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#delete GoogleMemorystoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#update GoogleMemorystoreInstance#update}
  */
  readonly update?: string;
}

export function googleMemorystoreInstanceTimeoutsToTerraform(struct?: GoogleMemorystoreInstanceTimeouts | cdktf.IResolvable): any {
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


export function googleMemorystoreInstanceTimeoutsToHclTerraform(struct?: GoogleMemorystoreInstanceTimeouts | cdktf.IResolvable): any {
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

export class GoogleMemorystoreInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleMemorystoreInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleMemorystoreInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleMemorystoreInstanceZoneDistributionConfig {
  /**
  * Optional. Current zone distribution mode. Defaults to MULTI_ZONE. 
  *  Possible values:
  *  MULTI_ZONE
  * SINGLE_ZONE Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}
  */
  readonly mode?: string;
  /**
  * Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode.
  * Ignored for MULTI_ZONE mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#zone GoogleMemorystoreInstance#zone}
  */
  readonly zone?: string;
}

export function googleMemorystoreInstanceZoneDistributionConfigToTerraform(struct?: GoogleMemorystoreInstanceZoneDistributionConfigOutputReference | GoogleMemorystoreInstanceZoneDistributionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleMemorystoreInstanceZoneDistributionConfigToHclTerraform(struct?: GoogleMemorystoreInstanceZoneDistributionConfigOutputReference | GoogleMemorystoreInstanceZoneDistributionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceZoneDistributionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceZoneDistributionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceZoneDistributionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._zone = value.zone;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance google_memorystore_instance}
*/
export class GoogleMemorystoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_memorystore_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleMemorystoreInstance to import
  * @param importFromId The id of the existing GoogleMemorystoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleMemorystoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_memorystore_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_memorystore_instance google_memorystore_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleMemorystoreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleMemorystoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_memorystore_instance',
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
    this._authorizationMode = config.authorizationMode;
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._engineConfigs = config.engineConfigs;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._labels = config.labels;
    this._location = config.location;
    this._mode = config.mode;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._replicaCount = config.replicaCount;
    this._shardCount = config.shardCount;
    this._transitEncryptionMode = config.transitEncryptionMode;
    this._desiredPscAutoConnections.internalValue = config.desiredPscAutoConnections;
    this._persistenceConfig.internalValue = config.persistenceConfig;
    this._timeouts.internalValue = config.timeouts;
    this._zoneDistributionConfig.internalValue = config.zoneDistributionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_mode - computed: true, optional: true, required: false
  private _authorizationMode?: string; 
  public get authorizationMode() {
    return this.getStringAttribute('authorization_mode');
  }
  public set authorizationMode(value: string) {
    this._authorizationMode = value;
  }
  public resetAuthorizationMode() {
    this._authorizationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationModeInput() {
    return this._authorizationMode;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection_enabled - computed: false, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // discovery_endpoints - computed: true, optional: false, required: false
  private _discoveryEndpoints = new GoogleMemorystoreInstanceDiscoveryEndpointsList(this, "discovery_endpoints", false);
  public get discoveryEndpoints() {
    return this._discoveryEndpoints;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new GoogleMemorystoreInstanceEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // engine_configs - computed: false, optional: true, required: false
  private _engineConfigs?: { [key: string]: string }; 
  public get engineConfigs() {
    return this.getStringMapAttribute('engine_configs');
  }
  public set engineConfigs(value: { [key: string]: string }) {
    this._engineConfigs = value;
  }
  public resetEngineConfigs() {
    this._engineConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigsInput() {
    return this._engineConfigs;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_config - computed: true, optional: false, required: false
  private _nodeConfig = new GoogleMemorystoreInstanceNodeConfigList(this, "node_config", false);
  public get nodeConfig() {
    return this._nodeConfig;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
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

  // psc_auto_connections - computed: true, optional: false, required: false
  private _pscAutoConnections = new GoogleMemorystoreInstancePscAutoConnectionsList(this, "psc_auto_connections", false);
  public get pscAutoConnections() {
    return this._pscAutoConnections;
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // shard_count - computed: false, optional: false, required: true
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_info - computed: true, optional: false, required: false
  private _stateInfo = new GoogleMemorystoreInstanceStateInfoList(this, "state_info", false);
  public get stateInfo() {
    return this._stateInfo;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // transit_encryption_mode - computed: true, optional: true, required: false
  private _transitEncryptionMode?: string; 
  public get transitEncryptionMode() {
    return this.getStringAttribute('transit_encryption_mode');
  }
  public set transitEncryptionMode(value: string) {
    this._transitEncryptionMode = value;
  }
  public resetTransitEncryptionMode() {
    this._transitEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionModeInput() {
    return this._transitEncryptionMode;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // desired_psc_auto_connections - computed: false, optional: false, required: true
  private _desiredPscAutoConnections = new GoogleMemorystoreInstanceDesiredPscAutoConnectionsList(this, "desired_psc_auto_connections", false);
  public get desiredPscAutoConnections() {
    return this._desiredPscAutoConnections;
  }
  public putDesiredPscAutoConnections(value: GoogleMemorystoreInstanceDesiredPscAutoConnections[] | cdktf.IResolvable) {
    this._desiredPscAutoConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPscAutoConnectionsInput() {
    return this._desiredPscAutoConnections.internalValue;
  }

  // persistence_config - computed: false, optional: true, required: false
  private _persistenceConfig = new GoogleMemorystoreInstancePersistenceConfigOutputReference(this, "persistence_config");
  public get persistenceConfig() {
    return this._persistenceConfig;
  }
  public putPersistenceConfig(value: GoogleMemorystoreInstancePersistenceConfig) {
    this._persistenceConfig.internalValue = value;
  }
  public resetPersistenceConfig() {
    this._persistenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceConfigInput() {
    return this._persistenceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleMemorystoreInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleMemorystoreInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // zone_distribution_config - computed: false, optional: true, required: false
  private _zoneDistributionConfig = new GoogleMemorystoreInstanceZoneDistributionConfigOutputReference(this, "zone_distribution_config");
  public get zoneDistributionConfig() {
    return this._zoneDistributionConfig;
  }
  public putZoneDistributionConfig(value: GoogleMemorystoreInstanceZoneDistributionConfig) {
    this._zoneDistributionConfig.internalValue = value;
  }
  public resetZoneDistributionConfig() {
    this._zoneDistributionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneDistributionConfigInput() {
    return this._zoneDistributionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_mode: cdktf.stringToTerraform(this._authorizationMode),
      deletion_protection_enabled: cdktf.booleanToTerraform(this._deletionProtectionEnabled),
      engine_configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._engineConfigs),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      mode: cdktf.stringToTerraform(this._mode),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project: cdktf.stringToTerraform(this._project),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      transit_encryption_mode: cdktf.stringToTerraform(this._transitEncryptionMode),
      desired_psc_auto_connections: cdktf.listMapper(googleMemorystoreInstanceDesiredPscAutoConnectionsToTerraform, true)(this._desiredPscAutoConnections.internalValue),
      persistence_config: googleMemorystoreInstancePersistenceConfigToTerraform(this._persistenceConfig.internalValue),
      timeouts: googleMemorystoreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      zone_distribution_config: googleMemorystoreInstanceZoneDistributionConfigToTerraform(this._zoneDistributionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_mode: {
        value: cdktf.stringToHclTerraform(this._authorizationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_configs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._engineConfigs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
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
      replica_count: {
        value: cdktf.numberToHclTerraform(this._replicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transit_encryption_mode: {
        value: cdktf.stringToHclTerraform(this._transitEncryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_psc_auto_connections: {
        value: cdktf.listMapperHcl(googleMemorystoreInstanceDesiredPscAutoConnectionsToHclTerraform, true)(this._desiredPscAutoConnections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceDesiredPscAutoConnectionsList",
      },
      persistence_config: {
        value: googleMemorystoreInstancePersistenceConfigToHclTerraform(this._persistenceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstancePersistenceConfigList",
      },
      timeouts: {
        value: googleMemorystoreInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleMemorystoreInstanceTimeouts",
      },
      zone_distribution_config: {
        value: googleMemorystoreInstanceZoneDistributionConfigToHclTerraform(this._zoneDistributionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceZoneDistributionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
