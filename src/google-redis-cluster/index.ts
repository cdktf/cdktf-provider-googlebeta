/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleRedisClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. Default value: "AUTH_MODE_DISABLED" Possible values: ["AUTH_MODE_UNSPECIFIED", "AUTH_MODE_IAM_AUTH", "AUTH_MODE_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#authorization_mode GoogleRedisCluster#authorization_mode}
  */
  readonly authorizationMode?: string;
  /**
  * Optional. Indicates if the cluster is deletion protected or not.
  * If the value if set to true, any delete cluster operation will fail.
  * Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#deletion_protection_enabled GoogleRedisCluster#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#id GoogleRedisCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the resource in this scope including project and location using the form:
  * projects/{projectId}/locations/{locationId}/clusters/{clusterId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#name GoogleRedisCluster#name}
  */
  readonly name?: string;
  /**
  * The nodeType for the Redis cluster.
  * If not provided, REDIS_HIGHMEM_MEDIUM will be used as default Possible values: ["REDIS_SHARED_CORE_NANO", "REDIS_HIGHMEM_MEDIUM", "REDIS_HIGHMEM_XLARGE", "REDIS_STANDARD_SMALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#node_type GoogleRedisCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#project GoogleRedisCluster#project}
  */
  readonly project?: string;
  /**
  * Configure Redis Cluster behavior using a subset of native Redis configuration parameters.
  * Please check Memorystore documentation for the list of supported parameters:
  * https://cloud.google.com/memorystore/docs/cluster/supported-instance-configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#redis_configs GoogleRedisCluster#redis_configs}
  */
  readonly redisConfigs?: { [key: string]: string };
  /**
  * The name of the region of the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#region GoogleRedisCluster#region}
  */
  readonly region?: string;
  /**
  * Optional. The number of replica nodes per shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#replica_count GoogleRedisCluster#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Required. Number of shards for the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#shard_count GoogleRedisCluster#shard_count}
  */
  readonly shardCount: number;
  /**
  * Optional. The in-transit encryption for the Redis cluster.
  * If not provided, encryption is disabled for the cluster. Default value: "TRANSIT_ENCRYPTION_MODE_DISABLED" Possible values: ["TRANSIT_ENCRYPTION_MODE_UNSPECIFIED", "TRANSIT_ENCRYPTION_MODE_DISABLED", "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#transit_encryption_mode GoogleRedisCluster#transit_encryption_mode}
  */
  readonly transitEncryptionMode?: string;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#maintenance_policy GoogleRedisCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: GoogleRedisClusterMaintenancePolicy;
  /**
  * psc_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#psc_configs GoogleRedisCluster#psc_configs}
  */
  readonly pscConfigs: GoogleRedisClusterPscConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#timeouts GoogleRedisCluster#timeouts}
  */
  readonly timeouts?: GoogleRedisClusterTimeouts;
  /**
  * zone_distribution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#zone_distribution_config GoogleRedisCluster#zone_distribution_config}
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
export interface GoogleRedisClusterMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#hours GoogleRedisCluster#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#minutes GoogleRedisCluster#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#nanos GoogleRedisCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  * An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#seconds GoogleRedisCluster#seconds}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#day GoogleRedisCluster#day}
  */
  readonly day: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#start_time GoogleRedisCluster#start_time}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#weekly_maintenance_window GoogleRedisCluster#weekly_maintenance_window}
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
export interface GoogleRedisClusterPscConfigs {
  /**
  * Required. The consumer network where the network address of
  * the discovery endpoint will be reserved, in the form of
  * projects/{network_project_id_or_number}/global/networks/{network_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#network GoogleRedisCluster#network}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#create GoogleRedisCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#delete GoogleRedisCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#update GoogleRedisCluster#update}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#mode GoogleRedisCluster#mode}
  */
  readonly mode?: string;
  /**
  * Immutable. The zone for single zone Memorystore Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#zone GoogleRedisCluster#zone}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster google_redis_cluster}
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
  * @param importFromId The id of the existing GoogleRedisCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleRedisCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_redis_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.7.0/docs/resources/google_redis_cluster google_redis_cluster} Resource
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
        providerVersion: '6.7.0',
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
    this._name = config.name;
    this._nodeType = config.nodeType;
    this._project = config.project;
    this._redisConfigs = config.redisConfigs;
    this._region = config.region;
    this._replicaCount = config.replicaCount;
    this._shardCount = config.shardCount;
    this._transitEncryptionMode = config.transitEncryptionMode;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
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

  // maintenance_schedule - computed: true, optional: false, required: false
  private _maintenanceSchedule = new GoogleRedisClusterMaintenanceScheduleList(this, "maintenance_schedule", false);
  public get maintenanceSchedule() {
    return this._maintenanceSchedule;
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

  // psc_configs - computed: false, optional: false, required: true
  private _pscConfigs = new GoogleRedisClusterPscConfigsList(this, "psc_configs", false);
  public get pscConfigs() {
    return this._pscConfigs;
  }
  public putPscConfigs(value: GoogleRedisClusterPscConfigs[] | cdktf.IResolvable) {
    this._pscConfigs.internalValue = value;
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
      name: cdktf.stringToTerraform(this._name),
      node_type: cdktf.stringToTerraform(this._nodeType),
      project: cdktf.stringToTerraform(this._project),
      redis_configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._redisConfigs),
      region: cdktf.stringToTerraform(this._region),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      transit_encryption_mode: cdktf.stringToTerraform(this._transitEncryptionMode),
      maintenance_policy: googleRedisClusterMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
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
      maintenance_policy: {
        value: googleRedisClusterMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterMaintenancePolicyList",
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
