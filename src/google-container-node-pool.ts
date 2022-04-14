// https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleContainerNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#cluster GoogleContainerNodePool#cluster}
  */
  readonly cluster: string;
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#initial_node_count GoogleContainerNodePool#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The location (region or zone) of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#location GoogleContainerNodePool#location}
  */
  readonly location?: string;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#max_pods_per_node GoogleContainerNodePool#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#name GoogleContainerNodePool#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#name_prefix GoogleContainerNodePool#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#node_count GoogleContainerNodePool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#node_locations GoogleContainerNodePool#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The ID of the project in which to create the node pool. If blank, the provider-configured project will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#project GoogleContainerNodePool#project}
  */
  readonly project?: string;
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#version GoogleContainerNodePool#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#autoscaling GoogleContainerNodePool#autoscaling}
  */
  readonly autoscaling?: GoogleContainerNodePoolAutoscaling;
  /**
  * management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#management GoogleContainerNodePool#management}
  */
  readonly management?: GoogleContainerNodePoolManagement;
  /**
  * network_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#network_config GoogleContainerNodePool#network_config}
  */
  readonly networkConfig?: GoogleContainerNodePoolNetworkConfig;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#node_config GoogleContainerNodePool#node_config}
  */
  readonly nodeConfig?: GoogleContainerNodePoolNodeConfig;
  /**
  * placement_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#placement_policy GoogleContainerNodePool#placement_policy}
  */
  readonly placementPolicy?: GoogleContainerNodePoolPlacementPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#timeouts GoogleContainerNodePool#timeouts}
  */
  readonly timeouts?: GoogleContainerNodePoolTimeouts;
  /**
  * upgrade_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#upgrade_settings GoogleContainerNodePool#upgrade_settings}
  */
  readonly upgradeSettings?: GoogleContainerNodePoolUpgradeSettings;
}
export interface GoogleContainerNodePoolAutoscaling {
  /**
  * Maximum number of nodes in the NodePool. Must be >= min_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#max_node_count GoogleContainerNodePool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#min_node_count GoogleContainerNodePool#min_node_count}
  */
  readonly minNodeCount: number;
}

export function googleContainerNodePoolAutoscalingToTerraform(struct?: GoogleContainerNodePoolAutoscalingOutputReference | GoogleContainerNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class GoogleContainerNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface GoogleContainerNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#auto_repair GoogleContainerNodePool#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#auto_upgrade GoogleContainerNodePool#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function googleContainerNodePoolManagementToTerraform(struct?: GoogleContainerNodePoolManagementOutputReference | GoogleContainerNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}

export class GoogleContainerNodePoolManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }
}
export interface GoogleContainerNodePoolNetworkConfig {
  /**
  * Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#create_pod_range GoogleContainerNodePool#create_pod_range}
  */
  readonly createPodRange?: boolean | cdktf.IResolvable;
  /**
  * The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#pod_ipv4_cidr_block GoogleContainerNodePool#pod_ipv4_cidr_block}
  */
  readonly podIpv4CidrBlock?: string;
  /**
  * The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#pod_range GoogleContainerNodePool#pod_range}
  */
  readonly podRange: string;
}

export function googleContainerNodePoolNetworkConfigToTerraform(struct?: GoogleContainerNodePoolNetworkConfigOutputReference | GoogleContainerNodePoolNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_pod_range: cdktf.booleanToTerraform(struct!.createPodRange),
    pod_ipv4_cidr_block: cdktf.stringToTerraform(struct!.podIpv4CidrBlock),
    pod_range: cdktf.stringToTerraform(struct!.podRange),
  }
}

export class GoogleContainerNodePoolNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPodRange = this._createPodRange;
    }
    if (this._podIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpv4CidrBlock = this._podIpv4CidrBlock;
    }
    if (this._podRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRange = this._podRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createPodRange = undefined;
      this._podIpv4CidrBlock = undefined;
      this._podRange = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createPodRange = value.createPodRange;
      this._podIpv4CidrBlock = value.podIpv4CidrBlock;
      this._podRange = value.podRange;
    }
  }

  // create_pod_range - computed: false, optional: true, required: false
  private _createPodRange?: boolean | cdktf.IResolvable; 
  public get createPodRange() {
    return this.getBooleanAttribute('create_pod_range');
  }
  public set createPodRange(value: boolean | cdktf.IResolvable) {
    this._createPodRange = value;
  }
  public resetCreatePodRange() {
    this._createPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPodRangeInput() {
    return this._createPodRange;
  }

  // pod_ipv4_cidr_block - computed: true, optional: true, required: false
  private _podIpv4CidrBlock?: string; 
  public get podIpv4CidrBlock() {
    return this.getStringAttribute('pod_ipv4_cidr_block');
  }
  public set podIpv4CidrBlock(value: string) {
    this._podIpv4CidrBlock = value;
  }
  public resetPodIpv4CidrBlock() {
    this._podIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpv4CidrBlockInput() {
    return this._podIpv4CidrBlock;
  }

  // pod_range - computed: false, optional: false, required: true
  private _podRange?: string; 
  public get podRange() {
    return this.getStringAttribute('pod_range');
  }
  public set podRange(value: string) {
    this._podRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeInput() {
    return this._podRange;
  }
}
export interface GoogleContainerNodePoolNodeConfigGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#count GoogleContainerNodePool#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#gpu_partition_size GoogleContainerNodePool#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#type GoogleContainerNodePool#type}
  */
  readonly type?: string;
}

export function googleContainerNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: GoogleContainerNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface GoogleContainerNodePoolNodeConfigTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#effect GoogleContainerNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#key GoogleContainerNodePool#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#value GoogleContainerNodePool#value}
  */
  readonly value?: string;
}

export function googleContainerNodePoolNodeConfigTaintToTerraform(struct?: GoogleContainerNodePoolNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface GoogleContainerNodePoolNodeConfigEphemeralStorageConfig {
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function googleContainerNodePoolNodeConfigEphemeralStorageConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference | GoogleContainerNodePoolNodeConfigEphemeralStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}

export class GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigEphemeralStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface GoogleContainerNodePoolNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#enabled GoogleContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerNodePoolNodeConfigGcfsConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference | GoogleContainerNodePoolNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigGcfsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleContainerNodePoolNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#enabled GoogleContainerNodePool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerNodePoolNodeConfigGvnicToTerraform(struct?: GoogleContainerNodePoolNodeConfigGvnicOutputReference | GoogleContainerNodePoolNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class GoogleContainerNodePoolNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigGvnic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleContainerNodePoolNodeConfigKubeletConfig {
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#cpu_cfs_quota GoogleContainerNodePool#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#cpu_cfs_quota_period GoogleContainerNodePool#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#cpu_manager_policy GoogleContainerNodePool#cpu_manager_policy}
  */
  readonly cpuManagerPolicy: string;
}

export function googleContainerNodePoolNodeConfigKubeletConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference | GoogleContainerNodePoolNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
  }
}

export class GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
    }
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: false, required: true
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }
}
export interface GoogleContainerNodePoolNodeConfigLinuxNodeConfig {
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#sysctls GoogleContainerNodePool#sysctls}
  */
  readonly sysctls: { [key: string]: string };
}

export function googleContainerNodePoolNodeConfigLinuxNodeConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference | GoogleContainerNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sysctls),
  }
}

export class GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sysctls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sysctls = value.sysctls;
    }
  }

  // sysctls - computed: false, optional: false, required: true
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }
}
export interface GoogleContainerNodePoolNodeConfigSandboxConfig {
  /**
  * Type of the sandbox to use for the node (e.g. 'gvisor')
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#sandbox_type GoogleContainerNodePool#sandbox_type}
  */
  readonly sandboxType: string;
}

export function googleContainerNodePoolNodeConfigSandboxConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference | GoogleContainerNodePoolNodeConfigSandboxConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sandbox_type: cdktf.stringToTerraform(struct!.sandboxType),
  }
}

export class GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigSandboxConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sandboxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxType = this._sandboxType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigSandboxConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sandboxType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sandboxType = value.sandboxType;
    }
  }

  // sandbox_type - computed: false, optional: false, required: true
  private _sandboxType?: string; 
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
  public set sandboxType(value: string) {
    this._sandboxType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxTypeInput() {
    return this._sandboxType;
  }
}
export interface GoogleContainerNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#enable_integrity_monitoring GoogleContainerNodePool#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#enable_secure_boot GoogleContainerNodePool#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function googleContainerNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference | GoogleContainerNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export class GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#mode GoogleContainerNodePool#mode}
  */
  readonly mode: string;
}

export function googleContainerNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface GoogleContainerNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#boot_disk_kms_key GoogleContainerNodePool#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#disk_size_gb GoogleContainerNodePool#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#disk_type GoogleContainerNodePool#disk_type}
  */
  readonly diskType?: string;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#guest_accelerator GoogleContainerNodePool#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleContainerNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#image_type GoogleContainerNodePool#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#labels GoogleContainerNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#local_ssd_count GoogleContainerNodePool#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Google Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#machine_type GoogleContainerNodePool#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#metadata GoogleContainerNodePool#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#min_cpu_platform GoogleContainerNodePool#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#node_group GoogleContainerNodePool#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#oauth_scopes GoogleContainerNodePool#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#preemptible GoogleContainerNodePool#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#service_account GoogleContainerNodePool#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#spot GoogleContainerNodePool#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of instance tags applied to all nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#tags GoogleContainerNodePool#tags}
  */
  readonly tags?: string[];
  /**
  * List of Kubernetes taints to be applied to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#taint GoogleContainerNodePool#taint}
  */
  readonly taint?: GoogleContainerNodePoolNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * ephemeral_storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#ephemeral_storage_config GoogleContainerNodePool#ephemeral_storage_config}
  */
  readonly ephemeralStorageConfig?: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig;
  /**
  * gcfs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#gcfs_config GoogleContainerNodePool#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerNodePoolNodeConfigGcfsConfig;
  /**
  * gvnic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#gvnic GoogleContainerNodePool#gvnic}
  */
  readonly gvnic?: GoogleContainerNodePoolNodeConfigGvnic;
  /**
  * kubelet_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#kubelet_config GoogleContainerNodePool#kubelet_config}
  */
  readonly kubeletConfig?: GoogleContainerNodePoolNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#linux_node_config GoogleContainerNodePool#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerNodePoolNodeConfigLinuxNodeConfig;
  /**
  * sandbox_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#sandbox_config GoogleContainerNodePool#sandbox_config}
  */
  readonly sandboxConfig?: GoogleContainerNodePoolNodeConfigSandboxConfig;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#shielded_instance_config GoogleContainerNodePool#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * workload_metadata_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#workload_metadata_config GoogleContainerNodePool#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig;
}

export function googleContainerNodePoolNodeConfigToTerraform(struct?: GoogleContainerNodePoolNodeConfigOutputReference | GoogleContainerNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    guest_accelerator: cdktf.listMapper(googleContainerNodePoolNodeConfigGuestAcceleratorToTerraform)(struct!.guestAccelerator),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    taint: cdktf.listMapper(googleContainerNodePoolNodeConfigTaintToTerraform)(struct!.taint),
    ephemeral_storage_config: googleContainerNodePoolNodeConfigEphemeralStorageConfigToTerraform(struct!.ephemeralStorageConfig),
    gcfs_config: googleContainerNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    gvnic: googleContainerNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    kubelet_config: googleContainerNodePoolNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: googleContainerNodePoolNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    sandbox_config: googleContainerNodePoolNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    shielded_instance_config: googleContainerNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    workload_metadata_config: googleContainerNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}

export class GoogleContainerNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._guestAccelerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taint !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint;
    }
    if (this._ephemeralStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageConfig = this._ephemeralStorageConfig?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._guestAccelerator = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._tags = undefined;
      this._taint = undefined;
      this._ephemeralStorageConfig.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._guestAccelerator = value.guestAccelerator;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._tags = value.tags;
      this._taint = value.taint;
      this._ephemeralStorageConfig.internalValue = value.ephemeralStorageConfig;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._gvnic.internalValue = value.gvnic;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator?: GoogleContainerNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable; 
  public get guestAccelerator() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('guest_accelerator');
  }
  public set guestAccelerator(value: GoogleContainerNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
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

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // taint - computed: true, optional: true, required: false
  private _taint?: GoogleContainerNodePoolNodeConfigTaint[] | cdktf.IResolvable; 
  public get taint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taint');
  }
  public set taint(value: GoogleContainerNodePoolNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint = value;
  }
  public resetTaint() {
    this._taint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint;
  }

  // ephemeral_storage_config - computed: false, optional: true, required: false
  private _ephemeralStorageConfig = new GoogleContainerNodePoolNodeConfigEphemeralStorageConfigOutputReference(this, "ephemeral_storage_config");
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }
  public putEphemeralStorageConfig(value: GoogleContainerNodePoolNodeConfigEphemeralStorageConfig) {
    this._ephemeralStorageConfig.internalValue = value;
  }
  public resetEphemeralStorageConfig() {
    this._ephemeralStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageConfigInput() {
    return this._ephemeralStorageConfig.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerNodePoolNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new GoogleContainerNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: GoogleContainerNodePoolNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GoogleContainerNodePoolNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GoogleContainerNodePoolNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerNodePoolNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerNodePoolNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new GoogleContainerNodePoolNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: GoogleContainerNodePoolNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerNodePoolNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new GoogleContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: GoogleContainerNodePoolNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface GoogleContainerNodePoolPlacementPolicy {
  /**
  * Type defines the type of placement policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#type GoogleContainerNodePool#type}
  */
  readonly type: string;
}

export function googleContainerNodePoolPlacementPolicyToTerraform(struct?: GoogleContainerNodePoolPlacementPolicyOutputReference | GoogleContainerNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleContainerNodePoolPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleContainerNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#create GoogleContainerNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#delete GoogleContainerNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#update GoogleContainerNodePool#update}
  */
  readonly update?: string;
}

export function googleContainerNodePoolTimeoutsToTerraform(struct?: GoogleContainerNodePoolTimeoutsOutputReference | GoogleContainerNodePoolTimeouts | cdktf.IResolvable): any {
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

export class GoogleContainerNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolTimeouts | undefined {
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

  public set internalValue(value: GoogleContainerNodePoolTimeouts | undefined) {
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
export interface GoogleContainerNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#max_surge GoogleContainerNodePool#max_surge}
  */
  readonly maxSurge: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool#max_unavailable GoogleContainerNodePool#max_unavailable}
  */
  readonly maxUnavailable: number;
}

export function googleContainerNodePoolUpgradeSettingsToTerraform(struct?: GoogleContainerNodePoolUpgradeSettingsOutputReference | GoogleContainerNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}

export class GoogleContainerNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: false, required: true
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: false, required: true
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool google_container_node_pool}
*/
export class GoogleContainerNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_node_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_container_node_pool google_container_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleContainerNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleContainerNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.17.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._initialNodeCount = config.initialNodeCount;
    this._location = config.location;
    this._maxPodsPerNode = config.maxPodsPerNode;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._nodeCount = config.nodeCount;
    this._nodeLocations = config.nodeLocations;
    this._project = config.project;
    this._version = config.version;
    this._autoscaling.internalValue = config.autoscaling;
    this._management.internalValue = config.management;
    this._networkConfig.internalValue = config.networkConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._placementPolicy.internalValue = config.placementPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._upgradeSettings.internalValue = config.upgradeSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_node_count - computed: true, optional: true, required: false
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // location - computed: true, optional: true, required: false
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

  // managed_instance_group_urls - computed: true, optional: false, required: false
  public get managedInstanceGroupUrls() {
    return this.getListAttribute('managed_instance_group_urls');
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // node_count - computed: true, optional: true, required: false
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

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('node_locations'));
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new GoogleContainerNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: GoogleContainerNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new GoogleContainerNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GoogleContainerNodePoolManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleContainerNodePoolNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleContainerNodePoolNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new GoogleContainerNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GoogleContainerNodePoolNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy = new GoogleContainerNodePoolPlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: GoogleContainerNodePoolPlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleContainerNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleContainerNodePoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new GoogleContainerNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GoogleContainerNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      initial_node_count: cdktf.numberToTerraform(this._initialNodeCount),
      location: cdktf.stringToTerraform(this._location),
      max_pods_per_node: cdktf.numberToTerraform(this._maxPodsPerNode),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._nodeLocations),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.stringToTerraform(this._version),
      autoscaling: googleContainerNodePoolAutoscalingToTerraform(this._autoscaling.internalValue),
      management: googleContainerNodePoolManagementToTerraform(this._management.internalValue),
      network_config: googleContainerNodePoolNetworkConfigToTerraform(this._networkConfig.internalValue),
      node_config: googleContainerNodePoolNodeConfigToTerraform(this._nodeConfig.internalValue),
      placement_policy: googleContainerNodePoolPlacementPolicyToTerraform(this._placementPolicy.internalValue),
      timeouts: googleContainerNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_settings: googleContainerNodePoolUpgradeSettingsToTerraform(this._upgradeSettings.internalValue),
    };
  }
}
