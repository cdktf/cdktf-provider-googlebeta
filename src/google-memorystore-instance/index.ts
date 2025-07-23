/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#authorization_mode GoogleMemorystoreInstance#authorization_mode}
  */
  readonly authorizationMode?: string;
  /**
  * Optional. If set to true deletion of the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#deletion_protection_enabled GoogleMemorystoreInstance#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. User-provided engine configurations for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#engine_configs GoogleMemorystoreInstance#engine_configs}
  */
  readonly engineConfigs?: { [key: string]: string };
  /**
  * Optional. Engine version of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#engine_version GoogleMemorystoreInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#id GoogleMemorystoreInstance#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#instance_id GoogleMemorystoreInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * The KMS key used to encrypt the at-rest data of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#kms_key GoogleMemorystoreInstance#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Optional. Labels to represent user-provided metadata. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#labels GoogleMemorystoreInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#location GoogleMemorystoreInstance#location}
  */
  readonly location: string;
  /**
  * Optional. cluster or cluster-disabled. 
  *  Possible values:
  *  CLUSTER
  *  CLUSTER_DISABLED Possible values: ["CLUSTER", "CLUSTER_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}
  */
  readonly mode?: string;
  /**
  * Optional. Machine type for individual nodes of the instance. 
  *  Possible values:
  *  SHARED_CORE_NANO
  * HIGHMEM_MEDIUM
  * HIGHMEM_XLARGE
  * STANDARD_SMALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#node_type GoogleMemorystoreInstance#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#project GoogleMemorystoreInstance#project}
  */
  readonly project?: string;
  /**
  * Optional. Number of replica nodes per shard. If omitted the default is 0 replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#replica_count GoogleMemorystoreInstance#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Required. Number of shards for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#shard_count GoogleMemorystoreInstance#shard_count}
  */
  readonly shardCount: number;
  /**
  * Optional. Immutable. In-transit encryption mode of the instance. 
  *  Possible values:
  *  TRANSIT_ENCRYPTION_DISABLED
  * SERVER_AUTHENTICATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#transit_encryption_mode GoogleMemorystoreInstance#transit_encryption_mode}
  */
  readonly transitEncryptionMode?: string;
  /**
  * automated_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#automated_backup_config GoogleMemorystoreInstance#automated_backup_config}
  */
  readonly automatedBackupConfig?: GoogleMemorystoreInstanceAutomatedBackupConfig;
  /**
  * cross_instance_replication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#cross_instance_replication_config GoogleMemorystoreInstance#cross_instance_replication_config}
  */
  readonly crossInstanceReplicationConfig?: GoogleMemorystoreInstanceCrossInstanceReplicationConfig;
  /**
  * desired_auto_created_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#desired_auto_created_endpoints GoogleMemorystoreInstance#desired_auto_created_endpoints}
  */
  readonly desiredAutoCreatedEndpoints?: GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints[] | cdktf.IResolvable;
  /**
  * desired_psc_auto_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#desired_psc_auto_connections GoogleMemorystoreInstance#desired_psc_auto_connections}
  */
  readonly desiredPscAutoConnections?: GoogleMemorystoreInstanceDesiredPscAutoConnections[] | cdktf.IResolvable;
  /**
  * gcs_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#gcs_source GoogleMemorystoreInstance#gcs_source}
  */
  readonly gcsSource?: GoogleMemorystoreInstanceGcsSource;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#maintenance_policy GoogleMemorystoreInstance#maintenance_policy}
  */
  readonly maintenancePolicy?: GoogleMemorystoreInstanceMaintenancePolicy;
  /**
  * managed_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#managed_backup_source GoogleMemorystoreInstance#managed_backup_source}
  */
  readonly managedBackupSource?: GoogleMemorystoreInstanceManagedBackupSource;
  /**
  * persistence_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#persistence_config GoogleMemorystoreInstance#persistence_config}
  */
  readonly persistenceConfig?: GoogleMemorystoreInstancePersistenceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#timeouts GoogleMemorystoreInstance#timeouts}
  */
  readonly timeouts?: GoogleMemorystoreInstanceTimeouts;
  /**
  * zone_distribution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#zone_distribution_config GoogleMemorystoreInstance#zone_distribution_config}
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
export interface GoogleMemorystoreInstanceMaintenanceSchedule {
}

export function googleMemorystoreInstanceMaintenanceScheduleToTerraform(struct?: GoogleMemorystoreInstanceMaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceMaintenanceScheduleToHclTerraform(struct?: GoogleMemorystoreInstanceMaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceMaintenanceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceMaintenanceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // schedule_deadline_time - computed: true, optional: false, required: false
  public get scheduleDeadlineTime() {
    return this.getStringAttribute('schedule_deadline_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class GoogleMemorystoreInstanceMaintenanceScheduleList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceMaintenanceScheduleOutputReference {
    return new GoogleMemorystoreInstanceMaintenanceScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceManagedServerCaCaCerts {
}

export function googleMemorystoreInstanceManagedServerCaCaCertsToTerraform(struct?: GoogleMemorystoreInstanceManagedServerCaCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceManagedServerCaCaCertsToHclTerraform(struct?: GoogleMemorystoreInstanceManagedServerCaCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceManagedServerCaCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceManagedServerCaCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceManagedServerCaCaCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificates - computed: true, optional: false, required: false
  public get certificates() {
    return this.getListAttribute('certificates');
  }
}

export class GoogleMemorystoreInstanceManagedServerCaCaCertsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceManagedServerCaCaCertsOutputReference {
    return new GoogleMemorystoreInstanceManagedServerCaCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceManagedServerCa {
}

export function googleMemorystoreInstanceManagedServerCaToTerraform(struct?: GoogleMemorystoreInstanceManagedServerCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceManagedServerCaToHclTerraform(struct?: GoogleMemorystoreInstanceManagedServerCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceManagedServerCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceManagedServerCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceManagedServerCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new GoogleMemorystoreInstanceManagedServerCaCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class GoogleMemorystoreInstanceManagedServerCaList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceManagedServerCaOutputReference {
    return new GoogleMemorystoreInstanceManagedServerCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
export interface GoogleMemorystoreInstancePscAttachmentDetails {
}

export function googleMemorystoreInstancePscAttachmentDetailsToTerraform(struct?: GoogleMemorystoreInstancePscAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstancePscAttachmentDetailsToHclTerraform(struct?: GoogleMemorystoreInstancePscAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstancePscAttachmentDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstancePscAttachmentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstancePscAttachmentDetails | undefined) {
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

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
}

export class GoogleMemorystoreInstancePscAttachmentDetailsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstancePscAttachmentDetailsOutputReference {
    return new GoogleMemorystoreInstancePscAttachmentDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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

  // target_engine_version - computed: true, optional: false, required: false
  public get targetEngineVersion() {
    return this.getStringAttribute('target_engine_version');
  }

  // target_node_type - computed: true, optional: false, required: false
  public get targetNodeType() {
    return this.getStringAttribute('target_node_type');
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
export interface GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime {
  /**
  * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23.
  * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#hours GoogleMemorystoreInstance#hours}
  */
  readonly hours: number;
}

export function googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeToTerraform(struct?: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference | GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
  }
}


export function googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeToHclTerraform(struct?: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference | GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }
}
export interface GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule {
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#start_time GoogleMemorystoreInstance#start_time}
  */
  readonly startTime: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime;
}

export function googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleToTerraform(struct?: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference | GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeToTerraform(struct!.startTime),
  }
}


export function googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleToHclTerraform(struct?: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference | GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime.internalValue = value.startTime;
    }
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}
export interface GoogleMemorystoreInstanceAutomatedBackupConfig {
  /**
  * How long to keep automated backups before the backups are deleted.
  * The value should be between 1 day and 365 days. If not specified, the default value is 35 days.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". The default_value is "3024000s"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#retention GoogleMemorystoreInstance#retention}
  */
  readonly retention: string;
  /**
  * fixed_frequency_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#fixed_frequency_schedule GoogleMemorystoreInstance#fixed_frequency_schedule}
  */
  readonly fixedFrequencySchedule: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule;
}

export function googleMemorystoreInstanceAutomatedBackupConfigToTerraform(struct?: GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference | GoogleMemorystoreInstanceAutomatedBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: cdktf.stringToTerraform(struct!.retention),
    fixed_frequency_schedule: googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleToTerraform(struct!.fixedFrequencySchedule),
  }
}


export function googleMemorystoreInstanceAutomatedBackupConfigToHclTerraform(struct?: GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference | GoogleMemorystoreInstanceAutomatedBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_frequency_schedule: {
      value: googleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleToHclTerraform(struct!.fixedFrequencySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceAutomatedBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._fixedFrequencySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedFrequencySchedule = this._fixedFrequencySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceAutomatedBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention = undefined;
      this._fixedFrequencySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention = value.retention;
      this._fixedFrequencySchedule.internalValue = value.fixedFrequencySchedule;
    }
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // fixed_frequency_schedule - computed: false, optional: false, required: true
  private _fixedFrequencySchedule = new GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencyScheduleOutputReference(this, "fixed_frequency_schedule");
  public get fixedFrequencySchedule() {
    return this._fixedFrequencySchedule;
  }
  public putFixedFrequencySchedule(value: GoogleMemorystoreInstanceAutomatedBackupConfigFixedFrequencySchedule) {
    this._fixedFrequencySchedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedFrequencyScheduleInput() {
    return this._fixedFrequencySchedule.internalValue;
  }
}
export interface GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance {
}

export function googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceToTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceToHclTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference {
    return new GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance {
}

export function googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceToTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceToHclTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference {
    return new GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership {
}

export function googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipToTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleMemorystoreInstanceCrossInstanceReplicationConfigMembershipToHclTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembership | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_instance - computed: true, optional: false, required: false
  private _primaryInstance = new GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipPrimaryInstanceList(this, "primary_instance", false);
  public get primaryInstance() {
    return this._primaryInstance;
  }

  // secondary_instance - computed: true, optional: false, required: false
  private _secondaryInstance = new GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipSecondaryInstanceList(this, "secondary_instance", false);
  public get secondaryInstance() {
    return this._secondaryInstance;
  }
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList extends cdktf.ComplexList {

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
  public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference {
    return new GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance {
  /**
  * The full resource path of the primary instance in the format: projects/{project}/locations/{region}/instances/{instance-id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#instance GoogleMemorystoreInstance#instance}
  */
  readonly instance?: string;
}

export function googleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceToTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference | GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
  }
}


export function googleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceToHclTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference | GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instance = value.instance;
    }
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances {
  /**
  * The full resource path of the Nth instance in the format: projects/{project}/locations/{region}/instance/{instance-id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#instance GoogleMemorystoreInstance#instance}
  */
  readonly instance?: string;
}

export function googleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesToTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
  }
}


export function googleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesToHclTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instance = value.instance;
    }
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList extends cdktf.ComplexList {
  public internalValue? : GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances[] | cdktf.IResolvable

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
  public get(index: number): GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference {
    return new GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceCrossInstanceReplicationConfig {
  /**
  * The instance role supports the following values:
  * 1. 'INSTANCE_ROLE_UNSPECIFIED': This is an independent instance that has never participated in cross instance replication. It allows both reads and writes.
  * 2. 'NONE': This is an independent instance that previously participated in cross instance replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
  * 3. 'PRIMARY': This instance serves as the replication source for secondary instance that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
  * 4. 'SECONDARY': This instance replicates data from the primary instance. It allows only reads. Possible values: ["INSTANCE_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#instance_role GoogleMemorystoreInstance#instance_role}
  */
  readonly instanceRole?: string;
  /**
  * primary_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#primary_instance GoogleMemorystoreInstance#primary_instance}
  */
  readonly primaryInstance?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance;
  /**
  * secondary_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#secondary_instances GoogleMemorystoreInstance#secondary_instances}
  */
  readonly secondaryInstances?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances[] | cdktf.IResolvable;
}

export function googleMemorystoreInstanceCrossInstanceReplicationConfigToTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference | GoogleMemorystoreInstanceCrossInstanceReplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_role: cdktf.stringToTerraform(struct!.instanceRole),
    primary_instance: googleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceToTerraform(struct!.primaryInstance),
    secondary_instances: cdktf.listMapper(googleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesToTerraform, true)(struct!.secondaryInstances),
  }
}


export function googleMemorystoreInstanceCrossInstanceReplicationConfigToHclTerraform(struct?: GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference | GoogleMemorystoreInstanceCrossInstanceReplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_role: {
      value: cdktf.stringToHclTerraform(struct!.instanceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_instance: {
      value: googleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceToHclTerraform(struct!.primaryInstance),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceList",
    },
    secondary_instances: {
      value: cdktf.listMapperHcl(googleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesToHclTerraform, true)(struct!.secondaryInstances),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceCrossInstanceReplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRole = this._instanceRole;
    }
    if (this._primaryInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryInstance = this._primaryInstance?.internalValue;
    }
    if (this._secondaryInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryInstances = this._secondaryInstances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceRole = undefined;
      this._primaryInstance.internalValue = undefined;
      this._secondaryInstances.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceRole = value.instanceRole;
      this._primaryInstance.internalValue = value.primaryInstance;
      this._secondaryInstances.internalValue = value.secondaryInstances;
    }
  }

  // instance_role - computed: false, optional: true, required: false
  private _instanceRole?: string; 
  public get instanceRole() {
    return this.getStringAttribute('instance_role');
  }
  public set instanceRole(value: string) {
    this._instanceRole = value;
  }
  public resetInstanceRole() {
    this._instanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleInput() {
    return this._instanceRole;
  }

  // membership - computed: true, optional: false, required: false
  private _membership = new GoogleMemorystoreInstanceCrossInstanceReplicationConfigMembershipList(this, "membership", false);
  public get membership() {
    return this._membership;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // primary_instance - computed: false, optional: true, required: false
  private _primaryInstance = new GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstanceOutputReference(this, "primary_instance");
  public get primaryInstance() {
    return this._primaryInstance;
  }
  public putPrimaryInstance(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigPrimaryInstance) {
    this._primaryInstance.internalValue = value;
  }
  public resetPrimaryInstance() {
    this._primaryInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInstanceInput() {
    return this._primaryInstance.internalValue;
  }

  // secondary_instances - computed: false, optional: true, required: false
  private _secondaryInstances = new GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstancesList(this, "secondary_instances", false);
  public get secondaryInstances() {
    return this._secondaryInstances;
  }
  public putSecondaryInstances(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfigSecondaryInstances[] | cdktf.IResolvable) {
    this._secondaryInstances.internalValue = value;
  }
  public resetSecondaryInstances() {
    this._secondaryInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInstancesInput() {
    return this._secondaryInstances.internalValue;
  }
}
export interface GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints {
  /**
  * Required. The consumer network where the IP address resides, in the form of
  * projects/{project_id}/global/networks/{network_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#network GoogleMemorystoreInstance#network}
  */
  readonly network: string;
  /**
  * Required. The consumer project_id where the forwarding rule is created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#project_id GoogleMemorystoreInstance#project_id}
  */
  readonly projectId: string;
}

export function googleMemorystoreInstanceDesiredAutoCreatedEndpointsToTerraform(struct?: GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function googleMemorystoreInstanceDesiredAutoCreatedEndpointsToHclTerraform(struct?: GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints | cdktf.IResolvable): any {
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

export class GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints | cdktf.IResolvable | undefined) {
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

export class GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList extends cdktf.ComplexList {
  public internalValue? : GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints[] | cdktf.IResolvable

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
  public get(index: number): GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference {
    return new GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceDesiredPscAutoConnections {
  /**
  * Required. The consumer network where the IP address resides, in the form of
  * projects/{project_id}/global/networks/{network_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#network GoogleMemorystoreInstance#network}
  */
  readonly network: string;
  /**
  * Required. The consumer project_id where the forwarding rule is created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#project_id GoogleMemorystoreInstance#project_id}
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
export interface GoogleMemorystoreInstanceGcsSource {
  /**
  * URIs of the GCS objects to import.
  * Example: gs://bucket1/object1, gs://bucket2/folder2/object2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#uris GoogleMemorystoreInstance#uris}
  */
  readonly uris: string[];
}

export function googleMemorystoreInstanceGcsSourceToTerraform(struct?: GoogleMemorystoreInstanceGcsSourceOutputReference | GoogleMemorystoreInstanceGcsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function googleMemorystoreInstanceGcsSourceToHclTerraform(struct?: GoogleMemorystoreInstanceGcsSourceOutputReference | GoogleMemorystoreInstanceGcsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceGcsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceGcsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceGcsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // uris - computed: false, optional: false, required: true
  private _uris?: string[]; 
  public get uris() {
    return cdktf.Fn.tolist(this.getListAttribute('uris'));
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#hours GoogleMemorystoreInstance#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#minutes GoogleMemorystoreInstance#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#nanos GoogleMemorystoreInstance#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  * An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#seconds GoogleMemorystoreInstance#seconds}
  */
  readonly seconds?: number;
}

export function googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct?: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference | GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToHclTerraform(struct?: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference | GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
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

  public set internalValue(value: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
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
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
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
export interface GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow {
  /**
  * The day of week that maintenance updates occur.
  * 
  * - DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
  * - MONDAY: Monday
  * - TUESDAY: Tuesday
  * - WEDNESDAY: Wednesday
  * - THURSDAY: Thursday
  * - FRIDAY: Friday
  * - SATURDAY: Saturday
  * - SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#day GoogleMemorystoreInstance#day}
  */
  readonly day: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#start_time GoogleMemorystoreInstance#start_time}
  */
  readonly startTime: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export function googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowToTerraform(struct?: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    start_time: googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct!.startTime),
  }
}


export function googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowToHclTerraform(struct?: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime.internalValue = value.startTime;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference {
    return new GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleMemorystoreInstanceMaintenancePolicy {
  /**
  * weekly_maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#weekly_maintenance_window GoogleMemorystoreInstance#weekly_maintenance_window}
  */
  readonly weeklyMaintenanceWindow?: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable;
}

export function googleMemorystoreInstanceMaintenancePolicyToTerraform(struct?: GoogleMemorystoreInstanceMaintenancePolicyOutputReference | GoogleMemorystoreInstanceMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weekly_maintenance_window: cdktf.listMapper(googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowToTerraform, true)(struct!.weeklyMaintenanceWindow),
  }
}


export function googleMemorystoreInstanceMaintenancePolicyToHclTerraform(struct?: GoogleMemorystoreInstanceMaintenancePolicyOutputReference | GoogleMemorystoreInstanceMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weekly_maintenance_window: {
      value: cdktf.listMapperHcl(googleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowToHclTerraform, true)(struct!.weeklyMaintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weeklyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyMaintenanceWindow = this._weeklyMaintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._weeklyMaintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._weeklyMaintenanceWindow.internalValue = value.weeklyMaintenanceWindow;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // weekly_maintenance_window - computed: false, optional: true, required: false
  private _weeklyMaintenanceWindow = new GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindowList(this, "weekly_maintenance_window", false);
  public get weeklyMaintenanceWindow() {
    return this._weeklyMaintenanceWindow;
  }
  public putWeeklyMaintenanceWindow(value: GoogleMemorystoreInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable) {
    this._weeklyMaintenanceWindow.internalValue = value;
  }
  public resetWeeklyMaintenanceWindow() {
    this._weeklyMaintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowInput() {
    return this._weeklyMaintenanceWindow.internalValue;
  }
}
export interface GoogleMemorystoreInstanceManagedBackupSource {
  /**
  * Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#backup GoogleMemorystoreInstance#backup}
  */
  readonly backup: string;
}

export function googleMemorystoreInstanceManagedBackupSourceToTerraform(struct?: GoogleMemorystoreInstanceManagedBackupSourceOutputReference | GoogleMemorystoreInstanceManagedBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.stringToTerraform(struct!.backup),
  }
}


export function googleMemorystoreInstanceManagedBackupSourceToHclTerraform(struct?: GoogleMemorystoreInstanceManagedBackupSourceOutputReference | GoogleMemorystoreInstanceManagedBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleMemorystoreInstanceManagedBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleMemorystoreInstanceManagedBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleMemorystoreInstanceManagedBackupSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backup = value.backup;
    }
  }

  // backup - computed: false, optional: false, required: true
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#append_fsync GoogleMemorystoreInstance#append_fsync}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#rdb_snapshot_period GoogleMemorystoreInstance#rdb_snapshot_period}
  */
  readonly rdbSnapshotPeriod?: string;
  /**
  * Optional. Time that the first snapshot was/will be attempted, and to which future
  * snapshots will be aligned. If not provided, the current time will be
  * used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#rdb_snapshot_start_time GoogleMemorystoreInstance#rdb_snapshot_start_time}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}
  */
  readonly mode?: string;
  /**
  * aof_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#aof_config GoogleMemorystoreInstance#aof_config}
  */
  readonly aofConfig?: GoogleMemorystoreInstancePersistenceConfigAofConfig;
  /**
  * rdb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#rdb_config GoogleMemorystoreInstance#rdb_config}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#create GoogleMemorystoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#delete GoogleMemorystoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#update GoogleMemorystoreInstance#update}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#mode GoogleMemorystoreInstance#mode}
  */
  readonly mode?: string;
  /**
  * Optional. Defines zone where all resources will be allocated with SINGLE_ZONE mode.
  * Ignored for MULTI_ZONE mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#zone GoogleMemorystoreInstance#zone}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance google_memorystore_instance}
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
  * @param importFromId The id of the existing GoogleMemorystoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleMemorystoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_memorystore_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_memorystore_instance google_memorystore_instance} Resource
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
        providerVersion: '6.45.0',
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
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._mode = config.mode;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._replicaCount = config.replicaCount;
    this._shardCount = config.shardCount;
    this._transitEncryptionMode = config.transitEncryptionMode;
    this._automatedBackupConfig.internalValue = config.automatedBackupConfig;
    this._crossInstanceReplicationConfig.internalValue = config.crossInstanceReplicationConfig;
    this._desiredAutoCreatedEndpoints.internalValue = config.desiredAutoCreatedEndpoints;
    this._desiredPscAutoConnections.internalValue = config.desiredPscAutoConnections;
    this._gcsSource.internalValue = config.gcsSource;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._managedBackupSource.internalValue = config.managedBackupSource;
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

  // backup_collection - computed: true, optional: false, required: false
  public get backupCollection() {
    return this.getStringAttribute('backup_collection');
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

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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

  // maintenance_schedule - computed: true, optional: false, required: false
  private _maintenanceSchedule = new GoogleMemorystoreInstanceMaintenanceScheduleList(this, "maintenance_schedule", false);
  public get maintenanceSchedule() {
    return this._maintenanceSchedule;
  }

  // managed_server_ca - computed: true, optional: false, required: false
  private _managedServerCa = new GoogleMemorystoreInstanceManagedServerCaList(this, "managed_server_ca", false);
  public get managedServerCa() {
    return this._managedServerCa;
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

  // psc_attachment_details - computed: true, optional: false, required: false
  private _pscAttachmentDetails = new GoogleMemorystoreInstancePscAttachmentDetailsList(this, "psc_attachment_details", false);
  public get pscAttachmentDetails() {
    return this._pscAttachmentDetails;
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

  // automated_backup_config - computed: false, optional: true, required: false
  private _automatedBackupConfig = new GoogleMemorystoreInstanceAutomatedBackupConfigOutputReference(this, "automated_backup_config");
  public get automatedBackupConfig() {
    return this._automatedBackupConfig;
  }
  public putAutomatedBackupConfig(value: GoogleMemorystoreInstanceAutomatedBackupConfig) {
    this._automatedBackupConfig.internalValue = value;
  }
  public resetAutomatedBackupConfig() {
    this._automatedBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedBackupConfigInput() {
    return this._automatedBackupConfig.internalValue;
  }

  // cross_instance_replication_config - computed: false, optional: true, required: false
  private _crossInstanceReplicationConfig = new GoogleMemorystoreInstanceCrossInstanceReplicationConfigOutputReference(this, "cross_instance_replication_config");
  public get crossInstanceReplicationConfig() {
    return this._crossInstanceReplicationConfig;
  }
  public putCrossInstanceReplicationConfig(value: GoogleMemorystoreInstanceCrossInstanceReplicationConfig) {
    this._crossInstanceReplicationConfig.internalValue = value;
  }
  public resetCrossInstanceReplicationConfig() {
    this._crossInstanceReplicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossInstanceReplicationConfigInput() {
    return this._crossInstanceReplicationConfig.internalValue;
  }

  // desired_auto_created_endpoints - computed: false, optional: true, required: false
  private _desiredAutoCreatedEndpoints = new GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList(this, "desired_auto_created_endpoints", false);
  public get desiredAutoCreatedEndpoints() {
    return this._desiredAutoCreatedEndpoints;
  }
  public putDesiredAutoCreatedEndpoints(value: GoogleMemorystoreInstanceDesiredAutoCreatedEndpoints[] | cdktf.IResolvable) {
    this._desiredAutoCreatedEndpoints.internalValue = value;
  }
  public resetDesiredAutoCreatedEndpoints() {
    this._desiredAutoCreatedEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredAutoCreatedEndpointsInput() {
    return this._desiredAutoCreatedEndpoints.internalValue;
  }

  // desired_psc_auto_connections - computed: false, optional: true, required: false
  private _desiredPscAutoConnections = new GoogleMemorystoreInstanceDesiredPscAutoConnectionsList(this, "desired_psc_auto_connections", false);
  public get desiredPscAutoConnections() {
    return this._desiredPscAutoConnections;
  }
  public putDesiredPscAutoConnections(value: GoogleMemorystoreInstanceDesiredPscAutoConnections[] | cdktf.IResolvable) {
    this._desiredPscAutoConnections.internalValue = value;
  }
  public resetDesiredPscAutoConnections() {
    this._desiredPscAutoConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPscAutoConnectionsInput() {
    return this._desiredPscAutoConnections.internalValue;
  }

  // gcs_source - computed: false, optional: true, required: false
  private _gcsSource = new GoogleMemorystoreInstanceGcsSourceOutputReference(this, "gcs_source");
  public get gcsSource() {
    return this._gcsSource;
  }
  public putGcsSource(value: GoogleMemorystoreInstanceGcsSource) {
    this._gcsSource.internalValue = value;
  }
  public resetGcsSource() {
    this._gcsSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsSourceInput() {
    return this._gcsSource.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new GoogleMemorystoreInstanceMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: GoogleMemorystoreInstanceMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // managed_backup_source - computed: false, optional: true, required: false
  private _managedBackupSource = new GoogleMemorystoreInstanceManagedBackupSourceOutputReference(this, "managed_backup_source");
  public get managedBackupSource() {
    return this._managedBackupSource;
  }
  public putManagedBackupSource(value: GoogleMemorystoreInstanceManagedBackupSource) {
    this._managedBackupSource.internalValue = value;
  }
  public resetManagedBackupSource() {
    this._managedBackupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedBackupSourceInput() {
    return this._managedBackupSource.internalValue;
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
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      mode: cdktf.stringToTerraform(this._mode),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project: cdktf.stringToTerraform(this._project),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      transit_encryption_mode: cdktf.stringToTerraform(this._transitEncryptionMode),
      automated_backup_config: googleMemorystoreInstanceAutomatedBackupConfigToTerraform(this._automatedBackupConfig.internalValue),
      cross_instance_replication_config: googleMemorystoreInstanceCrossInstanceReplicationConfigToTerraform(this._crossInstanceReplicationConfig.internalValue),
      desired_auto_created_endpoints: cdktf.listMapper(googleMemorystoreInstanceDesiredAutoCreatedEndpointsToTerraform, true)(this._desiredAutoCreatedEndpoints.internalValue),
      desired_psc_auto_connections: cdktf.listMapper(googleMemorystoreInstanceDesiredPscAutoConnectionsToTerraform, true)(this._desiredPscAutoConnections.internalValue),
      gcs_source: googleMemorystoreInstanceGcsSourceToTerraform(this._gcsSource.internalValue),
      maintenance_policy: googleMemorystoreInstanceMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      managed_backup_source: googleMemorystoreInstanceManagedBackupSourceToTerraform(this._managedBackupSource.internalValue),
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
      kms_key: {
        value: cdktf.stringToHclTerraform(this._kmsKey),
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
      automated_backup_config: {
        value: googleMemorystoreInstanceAutomatedBackupConfigToHclTerraform(this._automatedBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceAutomatedBackupConfigList",
      },
      cross_instance_replication_config: {
        value: googleMemorystoreInstanceCrossInstanceReplicationConfigToHclTerraform(this._crossInstanceReplicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceCrossInstanceReplicationConfigList",
      },
      desired_auto_created_endpoints: {
        value: cdktf.listMapperHcl(googleMemorystoreInstanceDesiredAutoCreatedEndpointsToHclTerraform, true)(this._desiredAutoCreatedEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceDesiredAutoCreatedEndpointsList",
      },
      desired_psc_auto_connections: {
        value: cdktf.listMapperHcl(googleMemorystoreInstanceDesiredPscAutoConnectionsToHclTerraform, true)(this._desiredPscAutoConnections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceDesiredPscAutoConnectionsList",
      },
      gcs_source: {
        value: googleMemorystoreInstanceGcsSourceToHclTerraform(this._gcsSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceGcsSourceList",
      },
      maintenance_policy: {
        value: googleMemorystoreInstanceMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceMaintenancePolicyList",
      },
      managed_backup_source: {
        value: googleMemorystoreInstanceManagedBackupSourceToHclTerraform(this._managedBackupSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleMemorystoreInstanceManagedBackupSourceList",
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
