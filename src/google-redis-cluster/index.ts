/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleRedisClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#authorization_mode GoogleRedisCluster#authorization_mode}
  */
  readonly authorizationMode?: string;
  /**
  * Optional. Indicates if the cluster is deletion protected or not.
  * If the value if set to true, any delete cluster operation will fail.
  * Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#deletion_protection_enabled GoogleRedisCluster#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The KMS key used to encrypt the at-rest data of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#kms_key GoogleRedisCluster#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Unique name of the resource in this scope including project and location using the form:
  * projects/{projectId}/locations/{locationId}/clusters/{clusterId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#name GoogleRedisCluster#name}
  */
  readonly name?: string;
  /**
  * The nodeType for the Redis cluster.
  * If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#node_type GoogleRedisCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}
  */
  readonly project?: string;
  /**
  * Configure Redis Cluster behavior using a subset of native Redis configuration parameters.
  * Please check Memorystore documentation for the list of supported parameters:
  * https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#redis_configs GoogleRedisCluster#redis_configs}
  */
  readonly redisConfigs?: { [key: string]: string };
  /**
  * The name of the region of the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#region GoogleRedisCluster#region}
  */
  readonly region?: string;
  /**
  * Optional. The number of replica nodes per shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#replica_count GoogleRedisCluster#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Required. Number of shards for the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#shard_count GoogleRedisCluster#shard_count}
  */
  readonly shardCount: number;
  /**
  * Optional. The in-transit encryption for the Redis cluster.
  * If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#transit_encryption_mode GoogleRedisCluster#transit_encryption_mode}
  */
  readonly transitEncryptionMode?: string;
  /**
  * automated_backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#automated_backup_config GoogleRedisCluster#automated_backup_config}
  */
  readonly automatedBackupConfig?: GoogleRedisClusterAutomatedBackupConfig;
  /**
  * cross_cluster_replication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#cross_cluster_replication_config GoogleRedisCluster#cross_cluster_replication_config}
  */
  readonly crossClusterReplicationConfig?: GoogleRedisClusterCrossClusterReplicationConfig;
  /**
  * gcs_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#gcs_source GoogleRedisCluster#gcs_source}
  */
  readonly gcsSource?: GoogleRedisClusterGcsSource;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#maintenance_policy GoogleRedisCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: GoogleRedisClusterMaintenancePolicy;
  /**
  * managed_backup_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#managed_backup_source GoogleRedisCluster#managed_backup_source}
  */
  readonly managedBackupSource?: GoogleRedisClusterManagedBackupSource;
  /**
  * persistence_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#persistence_config GoogleRedisCluster#persistence_config}
  */
  readonly persistenceConfig?: GoogleRedisClusterPersistenceConfig;
  /**
  * psc_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#psc_configs GoogleRedisCluster#psc_configs}
  */
  readonly pscConfigs?: GoogleRedisClusterPscConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#timeouts GoogleRedisCluster#timeouts}
  */
  readonly timeouts?: GoogleRedisClusterTimeouts;
  /**
  * zone_distribution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#zone_distribution_config GoogleRedisCluster#zone_distribution_config}
  */
  readonly zoneDistributionConfig?: GoogleRedisClusterZoneDistributionConfig;
}
export interface GoogleRedisClusterDiscoveryEndpointsPscConfig {
}

export function googleRedisClusterDiscoveryEndpointsPscConfigToTerraform(struct?: GoogleRedisClusterDiscoveryEndpointsPscConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterDiscoveryEndpointsPscConfigToHclTerraform(struct?: GoogleRedisClusterDiscoveryEndpointsPscConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterDiscoveryEndpointsPscConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterDiscoveryEndpointsPscConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}

export class GoogleRedisClusterDiscoveryEndpointsPscConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference {
    return new GoogleRedisClusterDiscoveryEndpointsPscConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterDiscoveryEndpoints {
}

export function googleRedisClusterDiscoveryEndpointsToTerraform(struct?: GoogleRedisClusterDiscoveryEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterDiscoveryEndpointsToHclTerraform(struct?: GoogleRedisClusterDiscoveryEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterDiscoveryEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterDiscoveryEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterDiscoveryEndpoints | undefined) {
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // psc_config - computed: true, optional: false, required: false
  private _pscConfig = new GoogleRedisClusterDiscoveryEndpointsPscConfigList(this, "psc_config", false);
  public get pscConfig() {
    return this._pscConfig;
  }
}

export class GoogleRedisClusterDiscoveryEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterDiscoveryEndpointsOutputReference {
    return new GoogleRedisClusterDiscoveryEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterMaintenanceSchedule {
}

export function googleRedisClusterMaintenanceScheduleToTerraform(struct?: GoogleRedisClusterMaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterMaintenanceScheduleToHclTerraform(struct?: GoogleRedisClusterMaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterMaintenanceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterMaintenanceSchedule | undefined) {
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

export class GoogleRedisClusterMaintenanceScheduleList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterMaintenanceScheduleOutputReference {
    return new GoogleRedisClusterMaintenanceScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterManagedServerCaCaCerts {
}

export function googleRedisClusterManagedServerCaCaCertsToTerraform(struct?: GoogleRedisClusterManagedServerCaCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterManagedServerCaCaCertsToHclTerraform(struct?: GoogleRedisClusterManagedServerCaCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterManagedServerCaCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterManagedServerCaCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterManagedServerCaCaCerts | undefined) {
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

export class GoogleRedisClusterManagedServerCaCaCertsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterManagedServerCaCaCertsOutputReference {
    return new GoogleRedisClusterManagedServerCaCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterManagedServerCa {
}

export function googleRedisClusterManagedServerCaToTerraform(struct?: GoogleRedisClusterManagedServerCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterManagedServerCaToHclTerraform(struct?: GoogleRedisClusterManagedServerCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterManagedServerCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterManagedServerCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterManagedServerCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  private _caCerts = new GoogleRedisClusterManagedServerCaCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
}

export class GoogleRedisClusterManagedServerCaList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterManagedServerCaOutputReference {
    return new GoogleRedisClusterManagedServerCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterPscConnections {
}

export function googleRedisClusterPscConnectionsToTerraform(struct?: GoogleRedisClusterPscConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterPscConnectionsToHclTerraform(struct?: GoogleRedisClusterPscConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterPscConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterPscConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterPscConnections | undefined) {
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

  // forwarding_rule - computed: true, optional: false, required: false
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }
}

export class GoogleRedisClusterPscConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterPscConnectionsOutputReference {
    return new GoogleRedisClusterPscConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterPscServiceAttachments {
}

export function googleRedisClusterPscServiceAttachmentsToTerraform(struct?: GoogleRedisClusterPscServiceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterPscServiceAttachmentsToHclTerraform(struct?: GoogleRedisClusterPscServiceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterPscServiceAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterPscServiceAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterPscServiceAttachments | undefined) {
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

export class GoogleRedisClusterPscServiceAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterPscServiceAttachmentsOutputReference {
    return new GoogleRedisClusterPscServiceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterStateInfoUpdateInfo {
}

export function googleRedisClusterStateInfoUpdateInfoToTerraform(struct?: GoogleRedisClusterStateInfoUpdateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterStateInfoUpdateInfoToHclTerraform(struct?: GoogleRedisClusterStateInfoUpdateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterStateInfoUpdateInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterStateInfoUpdateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterStateInfoUpdateInfo | undefined) {
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

export class GoogleRedisClusterStateInfoUpdateInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterStateInfoUpdateInfoOutputReference {
    return new GoogleRedisClusterStateInfoUpdateInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterStateInfo {
}

export function googleRedisClusterStateInfoToTerraform(struct?: GoogleRedisClusterStateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterStateInfoToHclTerraform(struct?: GoogleRedisClusterStateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterStateInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterStateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterStateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // update_info - computed: true, optional: false, required: false
  private _updateInfo = new GoogleRedisClusterStateInfoUpdateInfoList(this, "update_info", false);
  public get updateInfo() {
    return this._updateInfo;
  }
}

export class GoogleRedisClusterStateInfoList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterStateInfoOutputReference {
    return new GoogleRedisClusterStateInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime {
  /**
  * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23.
  * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#hours GoogleRedisCluster#hours}
  */
  readonly hours: number;
}

export function googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeToTerraform(struct?: GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference | GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
  }
}


export function googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeToHclTerraform(struct?: GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference | GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime): any {
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

export class GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime | undefined) {
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
export interface GoogleRedisClusterAutomatedBackupConfigFixedFrequencySchedule {
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#start_time GoogleRedisCluster#start_time}
  */
  readonly startTime: GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime;
}

export function googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleToTerraform(struct?: GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference | GoogleRedisClusterAutomatedBackupConfigFixedFrequencySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeToTerraform(struct!.startTime),
  }
}


export function googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleToHclTerraform(struct?: GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference | GoogleRedisClusterAutomatedBackupConfigFixedFrequencySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterAutomatedBackupConfigFixedFrequencySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterAutomatedBackupConfigFixedFrequencySchedule | undefined) {
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
  private _startTime = new GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}
export interface GoogleRedisClusterAutomatedBackupConfig {
  /**
  * How long to keep automated backups before the backups are deleted.
  * The value should be between 1 day and 365 days. If not specified, the default value is 35 days.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#retention GoogleRedisCluster#retention}
  */
  readonly retention: string;
  /**
  * fixed_frequency_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#fixed_frequency_schedule GoogleRedisCluster#fixed_frequency_schedule}
  */
  readonly fixedFrequencySchedule: GoogleRedisClusterAutomatedBackupConfigFixedFrequencySchedule;
}

export function googleRedisClusterAutomatedBackupConfigToTerraform(struct?: GoogleRedisClusterAutomatedBackupConfigOutputReference | GoogleRedisClusterAutomatedBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: cdktf.stringToTerraform(struct!.retention),
    fixed_frequency_schedule: googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleToTerraform(struct!.fixedFrequencySchedule),
  }
}


export function googleRedisClusterAutomatedBackupConfigToHclTerraform(struct?: GoogleRedisClusterAutomatedBackupConfigOutputReference | GoogleRedisClusterAutomatedBackupConfig): any {
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
      value: googleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleToHclTerraform(struct!.fixedFrequencySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterAutomatedBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterAutomatedBackupConfig | undefined {
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

  public set internalValue(value: GoogleRedisClusterAutomatedBackupConfig | undefined) {
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
  private _fixedFrequencySchedule = new GoogleRedisClusterAutomatedBackupConfigFixedFrequencyScheduleOutputReference(this, "fixed_frequency_schedule");
  public get fixedFrequencySchedule() {
    return this._fixedFrequencySchedule;
  }
  public putFixedFrequencySchedule(value: GoogleRedisClusterAutomatedBackupConfigFixedFrequencySchedule) {
    this._fixedFrequencySchedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedFrequencyScheduleInput() {
    return this._fixedFrequencySchedule.internalValue;
  }
}
export interface GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster {
}

export function googleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterToTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterToHclTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference {
    return new GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters {
}

export function googleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersToTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersToHclTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference {
    return new GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterCrossClusterReplicationConfigMembership {
}

export function googleRedisClusterCrossClusterReplicationConfigMembershipToTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigMembership): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleRedisClusterCrossClusterReplicationConfigMembershipToHclTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigMembership): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterCrossClusterReplicationConfigMembership | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterCrossClusterReplicationConfigMembership | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_cluster - computed: true, optional: false, required: false
  private _primaryCluster = new GoogleRedisClusterCrossClusterReplicationConfigMembershipPrimaryClusterList(this, "primary_cluster", false);
  public get primaryCluster() {
    return this._primaryCluster;
  }

  // secondary_clusters - computed: true, optional: false, required: false
  private _secondaryClusters = new GoogleRedisClusterCrossClusterReplicationConfigMembershipSecondaryClustersList(this, "secondary_clusters", false);
  public get secondaryClusters() {
    return this._secondaryClusters;
  }
}

export class GoogleRedisClusterCrossClusterReplicationConfigMembershipList extends cdktf.ComplexList {

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
  public get(index: number): GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference {
    return new GoogleRedisClusterCrossClusterReplicationConfigMembershipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster {
  /**
  * The full resource path of the primary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#cluster GoogleRedisCluster#cluster}
  */
  readonly cluster?: string;
}

export function googleRedisClusterCrossClusterReplicationConfigPrimaryClusterToTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference | GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
  }
}


export function googleRedisClusterCrossClusterReplicationConfigPrimaryClusterToHclTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference | GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters {
  /**
  * The full resource path of the secondary cluster in the format: projects/{project}/locations/{region}/clusters/{cluster-id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#cluster GoogleRedisCluster#cluster}
  */
  readonly cluster?: string;
}

export function googleRedisClusterCrossClusterReplicationConfigSecondaryClustersToTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
  }
}


export function googleRedisClusterCrossClusterReplicationConfigSecondaryClustersToHclTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList extends cdktf.ComplexList {
  public internalValue? : GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters[] | cdktf.IResolvable

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
  public get(index: number): GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference {
    return new GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterCrossClusterReplicationConfig {
  /**
  * The role of the cluster in cross cluster replication. Supported values are:
  * 
  * 1. 'CLUSTER_ROLE_UNSPECIFIED': This is an independent cluster that has never participated in cross cluster replication. It allows both reads and writes.
  * 
  * 1. 'NONE': This is an independent cluster that previously participated in cross cluster replication(either as a 'PRIMARY' or 'SECONDARY' cluster). It allows both reads and writes.
  * 
  * 1. 'PRIMARY': This cluster serves as the replication source for secondary clusters that are replicating from it. Any data written to it is automatically replicated to its secondary clusters. It allows both reads and writes.
  * 
  * 1. 'SECONDARY': This cluster replicates data from the primary cluster. It allows only reads. Possible values: ["CLUSTER_ROLE_UNSPECIFIED", "NONE", "PRIMARY", "SECONDARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#cluster_role GoogleRedisCluster#cluster_role}
  */
  readonly clusterRole?: string;
  /**
  * primary_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#primary_cluster GoogleRedisCluster#primary_cluster}
  */
  readonly primaryCluster?: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster;
  /**
  * secondary_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#secondary_clusters GoogleRedisCluster#secondary_clusters}
  */
  readonly secondaryClusters?: GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters[] | cdktf.IResolvable;
}

export function googleRedisClusterCrossClusterReplicationConfigToTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigOutputReference | GoogleRedisClusterCrossClusterReplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role: cdktf.stringToTerraform(struct!.clusterRole),
    primary_cluster: googleRedisClusterCrossClusterReplicationConfigPrimaryClusterToTerraform(struct!.primaryCluster),
    secondary_clusters: cdktf.listMapper(googleRedisClusterCrossClusterReplicationConfigSecondaryClustersToTerraform, true)(struct!.secondaryClusters),
  }
}


export function googleRedisClusterCrossClusterReplicationConfigToHclTerraform(struct?: GoogleRedisClusterCrossClusterReplicationConfigOutputReference | GoogleRedisClusterCrossClusterReplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_role: {
      value: cdktf.stringToHclTerraform(struct!.clusterRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_cluster: {
      value: googleRedisClusterCrossClusterReplicationConfigPrimaryClusterToHclTerraform(struct!.primaryCluster),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterList",
    },
    secondary_clusters: {
      value: cdktf.listMapperHcl(googleRedisClusterCrossClusterReplicationConfigSecondaryClustersToHclTerraform, true)(struct!.secondaryClusters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterCrossClusterReplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterCrossClusterReplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRole = this._clusterRole;
    }
    if (this._primaryCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryCluster = this._primaryCluster?.internalValue;
    }
    if (this._secondaryClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryClusters = this._secondaryClusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterCrossClusterReplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterRole = undefined;
      this._primaryCluster.internalValue = undefined;
      this._secondaryClusters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterRole = value.clusterRole;
      this._primaryCluster.internalValue = value.primaryCluster;
      this._secondaryClusters.internalValue = value.secondaryClusters;
    }
  }

  // cluster_role - computed: false, optional: true, required: false
  private _clusterRole?: string; 
  public get clusterRole() {
    return this.getStringAttribute('cluster_role');
  }
  public set clusterRole(value: string) {
    this._clusterRole = value;
  }
  public resetClusterRole() {
    this._clusterRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleInput() {
    return this._clusterRole;
  }

  // membership - computed: true, optional: false, required: false
  private _membership = new GoogleRedisClusterCrossClusterReplicationConfigMembershipList(this, "membership", false);
  public get membership() {
    return this._membership;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // primary_cluster - computed: false, optional: true, required: false
  private _primaryCluster = new GoogleRedisClusterCrossClusterReplicationConfigPrimaryClusterOutputReference(this, "primary_cluster");
  public get primaryCluster() {
    return this._primaryCluster;
  }
  public putPrimaryCluster(value: GoogleRedisClusterCrossClusterReplicationConfigPrimaryCluster) {
    this._primaryCluster.internalValue = value;
  }
  public resetPrimaryCluster() {
    this._primaryCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryClusterInput() {
    return this._primaryCluster.internalValue;
  }

  // secondary_clusters - computed: false, optional: true, required: false
  private _secondaryClusters = new GoogleRedisClusterCrossClusterReplicationConfigSecondaryClustersList(this, "secondary_clusters", false);
  public get secondaryClusters() {
    return this._secondaryClusters;
  }
  public putSecondaryClusters(value: GoogleRedisClusterCrossClusterReplicationConfigSecondaryClusters[] | cdktf.IResolvable) {
    this._secondaryClusters.internalValue = value;
  }
  public resetSecondaryClusters() {
    this._secondaryClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryClustersInput() {
    return this._secondaryClusters.internalValue;
  }
}
export interface GoogleRedisClusterGcsSource {
  /**
  * URIs of the GCS objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#uris GoogleRedisCluster#uris}
  */
  readonly uris: string[];
}

export function googleRedisClusterGcsSourceToTerraform(struct?: GoogleRedisClusterGcsSourceOutputReference | GoogleRedisClusterGcsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function googleRedisClusterGcsSourceToHclTerraform(struct?: GoogleRedisClusterGcsSourceOutputReference | GoogleRedisClusterGcsSource): any {
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

export class GoogleRedisClusterGcsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterGcsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterGcsSource | undefined) {
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
export interface GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#hours GoogleRedisCluster#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#minutes GoogleRedisCluster#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#nanos GoogleRedisCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  * An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#seconds GoogleRedisCluster#seconds}
  */
  readonly seconds?: number;
}

export function googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct?: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference | GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime): any {
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


export function googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeToHclTerraform(struct?: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference | GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime): any {
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

export class GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined {
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

  public set internalValue(value: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined) {
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
export interface GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow {
  /**
  * Required. The day of week that maintenance updates occur.
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#day GoogleRedisCluster#day}
  */
  readonly day: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#start_time GoogleRedisCluster#start_time}
  */
  readonly startTime: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export function googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowToTerraform(struct?: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    start_time: googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct!.startTime),
  }
}


export function googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowToHclTerraform(struct?: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable): any {
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
      value: googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined) {
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
  private _startTime = new GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference {
    return new GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterMaintenancePolicy {
  /**
  * weekly_maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#weekly_maintenance_window GoogleRedisCluster#weekly_maintenance_window}
  */
  readonly weeklyMaintenanceWindow?: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable;
}

export function googleRedisClusterMaintenancePolicyToTerraform(struct?: GoogleRedisClusterMaintenancePolicyOutputReference | GoogleRedisClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weekly_maintenance_window: cdktf.listMapper(googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowToTerraform, true)(struct!.weeklyMaintenanceWindow),
  }
}


export function googleRedisClusterMaintenancePolicyToHclTerraform(struct?: GoogleRedisClusterMaintenancePolicyOutputReference | GoogleRedisClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weekly_maintenance_window: {
      value: cdktf.listMapperHcl(googleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowToHclTerraform, true)(struct!.weeklyMaintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weeklyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyMaintenanceWindow = this._weeklyMaintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterMaintenancePolicy | undefined) {
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
  private _weeklyMaintenanceWindow = new GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowList(this, "weekly_maintenance_window", false);
  public get weeklyMaintenanceWindow() {
    return this._weeklyMaintenanceWindow;
  }
  public putWeeklyMaintenanceWindow(value: GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable) {
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
export interface GoogleRedisClusterManagedBackupSource {
  /**
  * Example: 'projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#backup GoogleRedisCluster#backup}
  */
  readonly backup: string;
}

export function googleRedisClusterManagedBackupSourceToTerraform(struct?: GoogleRedisClusterManagedBackupSourceOutputReference | GoogleRedisClusterManagedBackupSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.stringToTerraform(struct!.backup),
  }
}


export function googleRedisClusterManagedBackupSourceToHclTerraform(struct?: GoogleRedisClusterManagedBackupSourceOutputReference | GoogleRedisClusterManagedBackupSource): any {
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

export class GoogleRedisClusterManagedBackupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterManagedBackupSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterManagedBackupSource | undefined) {
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
export interface GoogleRedisClusterPersistenceConfigAofConfig {
  /**
  * Optional. Available fsync modes.
  * 
  * - NO - Do not explicitly call fsync(). Rely on OS defaults.
  * - EVERYSEC - Call fsync() once per second in a background thread. A balance between performance and durability.
  * - ALWAYS - Call fsync() for earch write command. Possible values: ["APPEND_FSYNC_UNSPECIFIED", "NO", "EVERYSEC", "ALWAYS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#append_fsync GoogleRedisCluster#append_fsync}
  */
  readonly appendFsync?: string;
}

export function googleRedisClusterPersistenceConfigAofConfigToTerraform(struct?: GoogleRedisClusterPersistenceConfigAofConfigOutputReference | GoogleRedisClusterPersistenceConfigAofConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_fsync: cdktf.stringToTerraform(struct!.appendFsync),
  }
}


export function googleRedisClusterPersistenceConfigAofConfigToHclTerraform(struct?: GoogleRedisClusterPersistenceConfigAofConfigOutputReference | GoogleRedisClusterPersistenceConfigAofConfig): any {
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

export class GoogleRedisClusterPersistenceConfigAofConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterPersistenceConfigAofConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendFsync !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendFsync = this._appendFsync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterPersistenceConfigAofConfig | undefined) {
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
export interface GoogleRedisClusterPersistenceConfigRdbConfig {
  /**
  * Optional. Available snapshot periods for scheduling.
  * 
  * - ONE_HOUR:	Snapshot every 1 hour.
  * - SIX_HOURS:	Snapshot every 6 hours.
  * - TWELVE_HOURS:	Snapshot every 12 hours.
  * - TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["SNAPSHOT_PERIOD_UNSPECIFIED", "ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#rdb_snapshot_period GoogleRedisCluster#rdb_snapshot_period}
  */
  readonly rdbSnapshotPeriod?: string;
  /**
  * The time that the first snapshot was/will be attempted, and to which
  * future snapshots will be aligned.
  * If not provided, the current time will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#rdb_snapshot_start_time GoogleRedisCluster#rdb_snapshot_start_time}
  */
  readonly rdbSnapshotStartTime?: string;
}

export function googleRedisClusterPersistenceConfigRdbConfigToTerraform(struct?: GoogleRedisClusterPersistenceConfigRdbConfigOutputReference | GoogleRedisClusterPersistenceConfigRdbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rdb_snapshot_period: cdktf.stringToTerraform(struct!.rdbSnapshotPeriod),
    rdb_snapshot_start_time: cdktf.stringToTerraform(struct!.rdbSnapshotStartTime),
  }
}


export function googleRedisClusterPersistenceConfigRdbConfigToHclTerraform(struct?: GoogleRedisClusterPersistenceConfigRdbConfigOutputReference | GoogleRedisClusterPersistenceConfigRdbConfig): any {
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

export class GoogleRedisClusterPersistenceConfigRdbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterPersistenceConfigRdbConfig | undefined {
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

  public set internalValue(value: GoogleRedisClusterPersistenceConfigRdbConfig | undefined) {
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
export interface GoogleRedisClusterPersistenceConfig {
  /**
  * Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
  * 
  * - DISABLED: 	Persistence (both backup and restore) is disabled for the cluster.
  * - RDB: RDB based Persistence is enabled.
  * - AOF: AOF based Persistence is enabled. Possible values: ["PERSISTENCE_MODE_UNSPECIFIED", "DISABLED", "RDB", "AOF"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}
  */
  readonly mode?: string;
  /**
  * aof_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#aof_config GoogleRedisCluster#aof_config}
  */
  readonly aofConfig?: GoogleRedisClusterPersistenceConfigAofConfig;
  /**
  * rdb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#rdb_config GoogleRedisCluster#rdb_config}
  */
  readonly rdbConfig?: GoogleRedisClusterPersistenceConfigRdbConfig;
}

export function googleRedisClusterPersistenceConfigToTerraform(struct?: GoogleRedisClusterPersistenceConfigOutputReference | GoogleRedisClusterPersistenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    aof_config: googleRedisClusterPersistenceConfigAofConfigToTerraform(struct!.aofConfig),
    rdb_config: googleRedisClusterPersistenceConfigRdbConfigToTerraform(struct!.rdbConfig),
  }
}


export function googleRedisClusterPersistenceConfigToHclTerraform(struct?: GoogleRedisClusterPersistenceConfigOutputReference | GoogleRedisClusterPersistenceConfig): any {
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
      value: googleRedisClusterPersistenceConfigAofConfigToHclTerraform(struct!.aofConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterPersistenceConfigAofConfigList",
    },
    rdb_config: {
      value: googleRedisClusterPersistenceConfigRdbConfigToHclTerraform(struct!.rdbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterPersistenceConfigRdbConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterPersistenceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterPersistenceConfig | undefined {
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

  public set internalValue(value: GoogleRedisClusterPersistenceConfig | undefined) {
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
  private _aofConfig = new GoogleRedisClusterPersistenceConfigAofConfigOutputReference(this, "aof_config");
  public get aofConfig() {
    return this._aofConfig;
  }
  public putAofConfig(value: GoogleRedisClusterPersistenceConfigAofConfig) {
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
  private _rdbConfig = new GoogleRedisClusterPersistenceConfigRdbConfigOutputReference(this, "rdb_config");
  public get rdbConfig() {
    return this._rdbConfig;
  }
  public putRdbConfig(value: GoogleRedisClusterPersistenceConfigRdbConfig) {
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
export interface GoogleRedisClusterPscConfigs {
  /**
  * Required. The consumer network where the network address of
  * the discovery endpoint will be reserved, in the form of
  * projects/{network_project_id_or_number}/global/networks/{network_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#network GoogleRedisCluster#network}
  */
  readonly network: string;
}

export function googleRedisClusterPscConfigsToTerraform(struct?: GoogleRedisClusterPscConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function googleRedisClusterPscConfigsToHclTerraform(struct?: GoogleRedisClusterPscConfigs | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterPscConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterPscConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterPscConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
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
}

export class GoogleRedisClusterPscConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleRedisClusterPscConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleRedisClusterPscConfigsOutputReference {
    return new GoogleRedisClusterPscConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}
  */
  readonly update?: string;
}

export function googleRedisClusterTimeoutsToTerraform(struct?: GoogleRedisClusterTimeouts | cdktf.IResolvable): any {
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


export function googleRedisClusterTimeoutsToHclTerraform(struct?: GoogleRedisClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleRedisClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleRedisClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleRedisClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleRedisClusterZoneDistributionConfig {
  /**
  * Immutable. The mode for zone distribution for Memorystore Redis cluster.
  * If not provided, MULTI_ZONE will be used as default Possible values: ["MULTI_ZONE", "SINGLE_ZONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}
  */
  readonly mode?: string;
  /**
  * Immutable. The zone for single zone Memorystore Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#zone GoogleRedisCluster#zone}
  */
  readonly zone?: string;
}

export function googleRedisClusterZoneDistributionConfigToTerraform(struct?: GoogleRedisClusterZoneDistributionConfigOutputReference | GoogleRedisClusterZoneDistributionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function googleRedisClusterZoneDistributionConfigToHclTerraform(struct?: GoogleRedisClusterZoneDistributionConfigOutputReference | GoogleRedisClusterZoneDistributionConfig): any {
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

export class GoogleRedisClusterZoneDistributionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterZoneDistributionConfig | undefined {
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

  public set internalValue(value: GoogleRedisClusterZoneDistributionConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster google_redis_cluster}
*/
export class GoogleRedisCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_redis_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleRedisCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleRedisCluster to import
  * @param importFromId The id of the existing GoogleRedisCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleRedisCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_redis_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_redis_cluster google_redis_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleRedisClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleRedisClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_redis_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.40.0',
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
    this._id = config.id;
    this._kmsKey = config.kmsKey;
    this._name = config.name;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._redisConfigs = config.redisConfigs;
    this._region = config.region;
    this._replicaCount = config.replicaCount;
    this._shardCount = config.shardCount;
    this._transitEncryptionMode = config.transitEncryptionMode;
    this._automatedBackupConfig.internalValue = config.automatedBackupConfig;
    this._crossClusterReplicationConfig.internalValue = config.crossClusterReplicationConfig;
    this._gcsSource.internalValue = config.gcsSource;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._managedBackupSource.internalValue = config.managedBackupSource;
    this._persistenceConfig.internalValue = config.persistenceConfig;
    this._pscConfigs.internalValue = config.pscConfigs;
    this._timeouts.internalValue = config.timeouts;
    this._zoneDistributionConfig.internalValue = config.zoneDistributionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_mode - computed: false, optional: true, required: false
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
  private _discoveryEndpoints = new GoogleRedisClusterDiscoveryEndpointsList(this, "discovery_endpoints", false);
  public get discoveryEndpoints() {
    return this._discoveryEndpoints;
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

  // maintenance_schedule - computed: true, optional: false, required: false
  private _maintenanceSchedule = new GoogleRedisClusterMaintenanceScheduleList(this, "maintenance_schedule", false);
  public get maintenanceSchedule() {
    return this._maintenanceSchedule;
  }

  // managed_server_ca - computed: true, optional: false, required: false
  private _managedServerCa = new GoogleRedisClusterManagedServerCaList(this, "managed_server_ca", false);
  public get managedServerCa() {
    return this._managedServerCa;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // precise_size_gb - computed: true, optional: false, required: false
  public get preciseSizeGb() {
    return this.getNumberAttribute('precise_size_gb');
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

  // psc_connections - computed: true, optional: false, required: false
  private _pscConnections = new GoogleRedisClusterPscConnectionsList(this, "psc_connections", false);
  public get pscConnections() {
    return this._pscConnections;
  }

  // psc_service_attachments - computed: true, optional: false, required: false
  private _pscServiceAttachments = new GoogleRedisClusterPscServiceAttachmentsList(this, "psc_service_attachments", false);
  public get pscServiceAttachments() {
    return this._pscServiceAttachments;
  }

  // redis_configs - computed: false, optional: true, required: false
  private _redisConfigs?: { [key: string]: string }; 
  public get redisConfigs() {
    return this.getStringMapAttribute('redis_configs');
  }
  public set redisConfigs(value: { [key: string]: string }) {
    this._redisConfigs = value;
  }
  public resetRedisConfigs() {
    this._redisConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisConfigsInput() {
    return this._redisConfigs;
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

  // replica_count - computed: false, optional: true, required: false
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

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_info - computed: true, optional: false, required: false
  private _stateInfo = new GoogleRedisClusterStateInfoList(this, "state_info", false);
  public get stateInfo() {
    return this._stateInfo;
  }

  // transit_encryption_mode - computed: false, optional: true, required: false
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

  // automated_backup_config - computed: false, optional: true, required: false
  private _automatedBackupConfig = new GoogleRedisClusterAutomatedBackupConfigOutputReference(this, "automated_backup_config");
  public get automatedBackupConfig() {
    return this._automatedBackupConfig;
  }
  public putAutomatedBackupConfig(value: GoogleRedisClusterAutomatedBackupConfig) {
    this._automatedBackupConfig.internalValue = value;
  }
  public resetAutomatedBackupConfig() {
    this._automatedBackupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedBackupConfigInput() {
    return this._automatedBackupConfig.internalValue;
  }

  // cross_cluster_replication_config - computed: false, optional: true, required: false
  private _crossClusterReplicationConfig = new GoogleRedisClusterCrossClusterReplicationConfigOutputReference(this, "cross_cluster_replication_config");
  public get crossClusterReplicationConfig() {
    return this._crossClusterReplicationConfig;
  }
  public putCrossClusterReplicationConfig(value: GoogleRedisClusterCrossClusterReplicationConfig) {
    this._crossClusterReplicationConfig.internalValue = value;
  }
  public resetCrossClusterReplicationConfig() {
    this._crossClusterReplicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossClusterReplicationConfigInput() {
    return this._crossClusterReplicationConfig.internalValue;
  }

  // gcs_source - computed: false, optional: true, required: false
  private _gcsSource = new GoogleRedisClusterGcsSourceOutputReference(this, "gcs_source");
  public get gcsSource() {
    return this._gcsSource;
  }
  public putGcsSource(value: GoogleRedisClusterGcsSource) {
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
  private _maintenancePolicy = new GoogleRedisClusterMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: GoogleRedisClusterMaintenancePolicy) {
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
  private _managedBackupSource = new GoogleRedisClusterManagedBackupSourceOutputReference(this, "managed_backup_source");
  public get managedBackupSource() {
    return this._managedBackupSource;
  }
  public putManagedBackupSource(value: GoogleRedisClusterManagedBackupSource) {
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
  private _persistenceConfig = new GoogleRedisClusterPersistenceConfigOutputReference(this, "persistence_config");
  public get persistenceConfig() {
    return this._persistenceConfig;
  }
  public putPersistenceConfig(value: GoogleRedisClusterPersistenceConfig) {
    this._persistenceConfig.internalValue = value;
  }
  public resetPersistenceConfig() {
    this._persistenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceConfigInput() {
    return this._persistenceConfig.internalValue;
  }

  // psc_configs - computed: false, optional: true, required: false
  private _pscConfigs = new GoogleRedisClusterPscConfigsList(this, "psc_configs", false);
  public get pscConfigs() {
    return this._pscConfigs;
  }
  public putPscConfigs(value: GoogleRedisClusterPscConfigs[] | cdktf.IResolvable) {
    this._pscConfigs.internalValue = value;
  }
  public resetPscConfigs() {
    this._pscConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConfigsInput() {
    return this._pscConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleRedisClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleRedisClusterTimeouts) {
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
  private _zoneDistributionConfig = new GoogleRedisClusterZoneDistributionConfigOutputReference(this, "zone_distribution_config");
  public get zoneDistributionConfig() {
    return this._zoneDistributionConfig;
  }
  public putZoneDistributionConfig(value: GoogleRedisClusterZoneDistributionConfig) {
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
      id: cdktf.stringToTerraform(this._id),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      name: cdktf.stringToTerraform(this._name),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project: cdktf.stringToTerraform(this._project),
      redis_configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._redisConfigs),
      region: cdktf.stringToTerraform(this._region),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      transit_encryption_mode: cdktf.stringToTerraform(this._transitEncryptionMode),
      automated_backup_config: googleRedisClusterAutomatedBackupConfigToTerraform(this._automatedBackupConfig.internalValue),
      cross_cluster_replication_config: googleRedisClusterCrossClusterReplicationConfigToTerraform(this._crossClusterReplicationConfig.internalValue),
      gcs_source: googleRedisClusterGcsSourceToTerraform(this._gcsSource.internalValue),
      maintenance_policy: googleRedisClusterMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      managed_backup_source: googleRedisClusterManagedBackupSourceToTerraform(this._managedBackupSource.internalValue),
      persistence_config: googleRedisClusterPersistenceConfigToTerraform(this._persistenceConfig.internalValue),
      psc_configs: cdktf.listMapper(googleRedisClusterPscConfigsToTerraform, true)(this._pscConfigs.internalValue),
      timeouts: googleRedisClusterTimeoutsToTerraform(this._timeouts.internalValue),
      zone_distribution_config: googleRedisClusterZoneDistributionConfigToTerraform(this._zoneDistributionConfig.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      redis_configs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._redisConfigs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
        value: googleRedisClusterAutomatedBackupConfigToHclTerraform(this._automatedBackupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterAutomatedBackupConfigList",
      },
      cross_cluster_replication_config: {
        value: googleRedisClusterCrossClusterReplicationConfigToHclTerraform(this._crossClusterReplicationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterCrossClusterReplicationConfigList",
      },
      gcs_source: {
        value: googleRedisClusterGcsSourceToHclTerraform(this._gcsSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterGcsSourceList",
      },
      maintenance_policy: {
        value: googleRedisClusterMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterMaintenancePolicyList",
      },
      managed_backup_source: {
        value: googleRedisClusterManagedBackupSourceToHclTerraform(this._managedBackupSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterManagedBackupSourceList",
      },
      persistence_config: {
        value: googleRedisClusterPersistenceConfigToHclTerraform(this._persistenceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterPersistenceConfigList",
      },
      psc_configs: {
        value: cdktf.listMapperHcl(googleRedisClusterPscConfigsToHclTerraform, true)(this._pscConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterPscConfigsList",
      },
      timeouts: {
        value: googleRedisClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleRedisClusterTimeouts",
      },
      zone_distribution_config: {
        value: googleRedisClusterZoneDistributionConfigToHclTerraform(this._zoneDistributionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterZoneDistributionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
