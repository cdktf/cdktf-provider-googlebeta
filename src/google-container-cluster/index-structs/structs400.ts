/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList,
GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures,
googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform,
googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference,
GoogleContainerClusterNodePoolNodeConfigConfidentialNodes,
googleContainerClusterNodePoolNodeConfigConfidentialNodesToTerraform,
googleContainerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference,
GoogleContainerClusterNodePoolNodeConfigContainerdConfig,
googleContainerClusterNodePoolNodeConfigContainerdConfigToTerraform,
googleContainerClusterNodePoolNodeConfigContainerdConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigContainerdConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig,
googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToTerraform,
googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig,
googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform,
googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigFastSocket,
googleContainerClusterNodePoolNodeConfigFastSocketToTerraform,
googleContainerClusterNodePoolNodeConfigFastSocketToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference,
GoogleContainerClusterNodePoolNodeConfigGcfsConfig,
googleContainerClusterNodePoolNodeConfigGcfsConfigToTerraform,
googleContainerClusterNodePoolNodeConfigGcfsConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigGuestAccelerator,
googleContainerClusterNodePoolNodeConfigGuestAcceleratorToTerraform,
googleContainerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList,
GoogleContainerClusterNodePoolNodeConfigGvnic,
googleContainerClusterNodePoolNodeConfigGvnicToTerraform,
googleContainerClusterNodePoolNodeConfigGvnicToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference,
GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy,
googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform,
googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference,
GoogleContainerClusterNodePoolNodeConfigKubeletConfig,
googleContainerClusterNodePoolNodeConfigKubeletConfigToTerraform,
googleContainerClusterNodePoolNodeConfigKubeletConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig,
googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform,
googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig,
googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform,
googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigReservationAffinity,
googleContainerClusterNodePoolNodeConfigReservationAffinityToTerraform,
googleContainerClusterNodePoolNodeConfigReservationAffinityToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference,
GoogleContainerClusterNodePoolNodeConfigSandboxConfig,
googleContainerClusterNodePoolNodeConfigSandboxConfigToTerraform,
googleContainerClusterNodePoolNodeConfigSandboxConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks,
googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform,
googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList,
GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig,
googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform,
googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig,
googleContainerClusterNodePoolNodeConfigSoleTenantConfigToTerraform,
googleContainerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference,
GoogleContainerClusterNodePoolNodeConfigTaint,
googleContainerClusterNodePoolNodeConfigTaintToTerraform,
googleContainerClusterNodePoolNodeConfigTaintToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigTaintList,
GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig,
googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform,
googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform,
GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference,
GoogleContainerClusterNodePoolAutoscaling,
googleContainerClusterNodePoolAutoscalingToTerraform,
googleContainerClusterNodePoolAutoscalingToHclTerraform,
GoogleContainerClusterNodePoolAutoscalingOutputReference,
GoogleContainerClusterNodePoolManagement,
googleContainerClusterNodePoolManagementToTerraform,
googleContainerClusterNodePoolManagementToHclTerraform,
GoogleContainerClusterNodePoolManagementOutputReference,
GoogleContainerClusterNodePoolNetworkConfig,
googleContainerClusterNodePoolNetworkConfigToTerraform,
googleContainerClusterNodePoolNetworkConfigToHclTerraform,
GoogleContainerClusterNodePoolNetworkConfigOutputReference } from './structs0'
export interface GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode: string;
}

export function googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
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
export interface GoogleContainerClusterNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#boot_disk_kms_key GoogleContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#disk_size_gb GoogleContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#disk_type GoogleContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enable_confidential_storage GoogleContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#image_type GoogleContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#labels GoogleContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#local_ssd_count GoogleContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#local_ssd_encryption_mode GoogleContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#machine_type GoogleContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#max_run_duration GoogleContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#metadata GoogleContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#min_cpu_platform GoogleContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#node_group GoogleContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#oauth_scopes GoogleContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#preemptible GoogleContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#resource_labels GoogleContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#resource_manager_tags GoogleContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#service_account GoogleContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#spot GoogleContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#storage_pools GoogleContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#advanced_machine_features GoogleContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#confidential_nodes GoogleContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#containerd_config GoogleContainerCluster#containerd_config}
  */
  readonly containerdConfig?: GoogleContainerClusterNodePoolNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#ephemeral_storage_config GoogleContainerCluster#ephemeral_storage_config}
  */
  readonly ephemeralStorageConfig?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#ephemeral_storage_local_ssd_config GoogleContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#fast_socket GoogleContainerCluster#fast_socket}
  */
  readonly fastSocket?: GoogleContainerClusterNodePoolNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodePoolNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#guest_accelerator GoogleContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#gvnic GoogleContainerCluster#gvnic}
  */
  readonly gvnic?: GoogleContainerClusterNodePoolNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#host_maintenance_policy GoogleContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#kubelet_config GoogleContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: GoogleContainerClusterNodePoolNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#local_nvme_ssd_block_config GoogleContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#reservation_affinity GoogleContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleContainerClusterNodePoolNodeConfigReservationAffinity;
  /**
  * sandbox_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#sandbox_config GoogleContainerCluster#sandbox_config}
  */
  readonly sandboxConfig?: GoogleContainerClusterNodePoolNodeConfigSandboxConfig;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#secondary_boot_disks GoogleContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#shielded_instance_config GoogleContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#sole_tenant_config GoogleContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#taint GoogleContainerCluster#taint}
  */
  readonly taint?: GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#windows_node_config GoogleContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#workload_metadata_config GoogleContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig;
}

export function googleContainerClusterNodePoolNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktf.booleanToTerraform(struct!.enableConfidentialStorage),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    local_ssd_encryption_mode: cdktf.stringToTerraform(struct!.localSsdEncryptionMode),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_run_duration: cdktf.stringToTerraform(struct!.maxRunDuration),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    storage_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePools),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    confidential_nodes: googleContainerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: googleContainerClusterNodePoolNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_config: googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToTerraform(struct!.ephemeralStorageConfig),
    ephemeral_storage_local_ssd_config: googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: googleContainerClusterNodePoolNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: googleContainerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: googleContainerClusterNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: googleContainerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    reservation_affinity: googleContainerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    sandbox_config: googleContainerClusterNodePoolNodeConfigSandboxConfigToTerraform(struct!.sandboxConfig),
    secondary_boot_disks: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: googleContainerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktf.listMapper(googleContainerClusterNodePoolNodeConfigTaintToTerraform, true)(struct!.taint),
    windows_node_config: googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function googleContainerClusterNodePoolNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolNodeConfigOutputReference | GoogleContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_encryption_mode: {
      value: cdktf.stringToHclTerraform(struct!.localSsdEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_run_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxRunDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: googleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesList",
    },
    confidential_nodes: {
      value: googleContainerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: googleContainerClusterNodePoolNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigContainerdConfigList",
    },
    ephemeral_storage_config: {
      value: googleContainerClusterNodePoolNodeConfigEphemeralStorageConfigToHclTerraform(struct!.ephemeralStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: googleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: googleContainerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: googleContainerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: googleContainerClusterNodePoolNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: googleContainerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: googleContainerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: googleContainerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: googleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigList",
    },
    reservation_affinity: {
      value: googleContainerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigReservationAffinityList",
    },
    sandbox_config: {
      value: googleContainerClusterNodePoolNodeConfigSandboxConfigToHclTerraform(struct!.sandboxConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSandboxConfigList",
    },
    secondary_boot_disks: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: googleContainerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: googleContainerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigTaintList",
    },
    windows_node_config: {
      value: googleContainerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: googleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolNodeConfig | undefined {
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
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
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
    if (this._localSsdEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdEncryptionMode = this._localSsdEncryptionMode;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxRunDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration;
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
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._ephemeralStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageConfig = this._ephemeralStorageConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._sandboxConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sandboxConfig = this._sandboxConfig?.internalValue;
    }
    if (this._secondaryBootDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBootDisks = this._secondaryBootDisks?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._windowsNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodeConfig = this._windowsNodeConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._localSsdEncryptionMode = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._maxRunDuration = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._storagePools = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._containerdConfig.internalValue = undefined;
      this._ephemeralStorageConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._sandboxConfig.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._windowsNodeConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._localSsdEncryptionMode = value.localSsdEncryptionMode;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._maxRunDuration = value.maxRunDuration;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._storagePools = value.storagePools;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._ephemeralStorageConfig.internalValue = value.ephemeralStorageConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._sandboxConfig.internalValue = value.sandboxConfig;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._windowsNodeConfig.internalValue = value.windowsNodeConfig;
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

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new GoogleContainerClusterNodePoolNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktf.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
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

  // local_ssd_encryption_mode - computed: false, optional: true, required: false
  private _localSsdEncryptionMode?: string; 
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }
  public set localSsdEncryptionMode(value: string) {
    this._localSsdEncryptionMode = value;
  }
  public resetLocalSsdEncryptionMode() {
    this._localSsdEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdEncryptionModeInput() {
    return this._localSsdEncryptionMode;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
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

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration?: string; 
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
  public set maxRunDuration(value: string) {
    this._maxRunDuration = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration;
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

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
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

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string[]; 
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }
  public set storagePools(value: string[]) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
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

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: GoogleContainerClusterNodePoolNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new GoogleContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: GoogleContainerClusterNodePoolNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new GoogleContainerClusterNodePoolNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: GoogleContainerClusterNodePoolNodeConfigContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // ephemeral_storage_config - computed: false, optional: true, required: false
  private _ephemeralStorageConfig = new GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfigOutputReference(this, "ephemeral_storage_config");
  public get ephemeralStorageConfig() {
    return this._ephemeralStorageConfig;
  }
  public putEphemeralStorageConfig(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageConfig) {
    this._ephemeralStorageConfig.internalValue = value;
  }
  public resetEphemeralStorageConfig() {
    this._ephemeralStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageConfigInput() {
    return this._ephemeralStorageConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: GoogleContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new GoogleContainerClusterNodePoolNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: GoogleContainerClusterNodePoolNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodePoolNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new GoogleContainerClusterNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: GoogleContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new GoogleContainerClusterNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: GoogleContainerClusterNodePoolNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: GoogleContainerClusterNodePoolNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GoogleContainerClusterNodePoolNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GoogleContainerClusterNodePoolNodeConfigKubeletConfig) {
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
  private _linuxNodeConfig = new GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodePoolNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: GoogleContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleContainerClusterNodePoolNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleContainerClusterNodePoolNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // sandbox_config - computed: false, optional: true, required: false
  private _sandboxConfig = new GoogleContainerClusterNodePoolNodeConfigSandboxConfigOutputReference(this, "sandbox_config");
  public get sandboxConfig() {
    return this._sandboxConfig;
  }
  public putSandboxConfig(value: GoogleContainerClusterNodePoolNodeConfigSandboxConfig) {
    this._sandboxConfig.internalValue = value;
  }
  public resetSandboxConfig() {
    this._sandboxConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxConfigInput() {
    return this._sandboxConfig.internalValue;
  }

  // secondary_boot_disks - computed: false, optional: true, required: false
  private _secondaryBootDisks = new GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: GoogleContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable) {
    this._secondaryBootDisks.internalValue = value;
  }
  public resetSecondaryBootDisks() {
    this._secondaryBootDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBootDisksInput() {
    return this._secondaryBootDisks.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new GoogleContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: GoogleContainerClusterNodePoolNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new GoogleContainerClusterNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: GoogleContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: GoogleContainerClusterNodePoolNodeConfigWindowsNodeConfig) {
    this._windowsNodeConfig.internalValue = value;
  }
  public resetWindowsNodeConfig() {
    this._windowsNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodeConfigInput() {
    return this._windowsNodeConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: GoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig) {
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
export interface GoogleContainerClusterNodePoolPlacementPolicy {
  /**
  * If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#policy_name GoogleContainerCluster#policy_name}
  */
  readonly policyName?: string;
  /**
  * TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#tpu_topology GoogleContainerCluster#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * Type defines the type of placement policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#type GoogleContainerCluster#type}
  */
  readonly type: string;
}

export function googleContainerClusterNodePoolPlacementPolicyToTerraform(struct?: GoogleContainerClusterNodePoolPlacementPolicyOutputReference | GoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    tpu_topology: cdktf.stringToTerraform(struct!.tpuTopology),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleContainerClusterNodePoolPlacementPolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolPlacementPolicyOutputReference | GoogleContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpu_topology: {
      value: cdktf.stringToHclTerraform(struct!.tpuTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
      this._tpuTopology = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
      this._tpuTopology = value.tpuTopology;
      this._type = value.type;
    }
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
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
export interface GoogleContainerClusterNodePoolQueuedProvisioning {
  /**
  * Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolQueuedProvisioningToTerraform(struct?: GoogleContainerClusterNodePoolQueuedProvisioningOutputReference | GoogleContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolQueuedProvisioningToHclTerraform(struct?: GoogleContainerClusterNodePoolQueuedProvisioningOutputReference | GoogleContainerClusterNodePoolQueuedProvisioning): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolQueuedProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolQueuedProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolQueuedProvisioning | undefined) {
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
export interface GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#batch_node_count GoogleContainerCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the blue pool nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#batch_percentage GoogleContainerCluster#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#batch_soak_duration GoogleContainerCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktf.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktf.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktf.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktf.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchPercentage = undefined;
      this._batchSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchPercentage = value.batchPercentage;
      this._batchSoakDuration = value.batchSoakDuration;
    }
  }

  // batch_node_count - computed: true, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // batch_soak_duration - computed: true, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }
}
export interface GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#node_pool_soak_duration GoogleContainerCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#standard_rollout_policy GoogleContainerCluster#standard_rollout_policy}
  */
  readonly standardRolloutPolicy: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_soak_duration: cdktf.stringToTerraform(struct!.nodePoolSoakDuration),
    standard_rollout_policy: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_rollout_policy: {
      value: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    if (this._standardRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardRolloutPolicy = this._standardRolloutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolSoakDuration = undefined;
      this._standardRolloutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
      this._standardRolloutPolicy.internalValue = value.standardRolloutPolicy;
    }
  }

  // node_pool_soak_duration - computed: true, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }

  // standard_rollout_policy - computed: false, optional: false, required: true
  private _standardRolloutPolicy = new GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#max_surge GoogleContainerCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#max_unavailable GoogleContainerCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy for the given nodepool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#strategy GoogleContainerCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#blue_green_settings GoogleContainerCluster#blue_green_settings}
  */
  readonly blueGreenSettings?: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings;
}

export function googleContainerClusterNodePoolUpgradeSettingsToTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    blue_green_settings: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function googleContainerClusterNodePoolUpgradeSettingsToHclTerraform(struct?: GoogleContainerClusterNodePoolUpgradeSettingsOutputReference | GoogleContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blue_green_settings: {
      value: googleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolUpgradeSettings | undefined {
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
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._blueGreenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenSettings = this._blueGreenSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._strategy = undefined;
      this._blueGreenSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._strategy = value.strategy;
      this._blueGreenSettings.internalValue = value.blueGreenSettings;
    }
  }

  // max_surge - computed: true, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: true, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // blue_green_settings - computed: false, optional: true, required: false
  private _blueGreenSettings = new GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: GoogleContainerClusterNodePoolUpgradeSettingsBlueGreenSettings) {
    this._blueGreenSettings.internalValue = value;
  }
  public resetBlueGreenSettings() {
    this._blueGreenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenSettingsInput() {
    return this._blueGreenSettings.internalValue;
  }
}
export interface GoogleContainerClusterNodePool {
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#initial_node_count GoogleContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#max_pods_per_node GoogleContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#name GoogleContainerCluster#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#name_prefix GoogleContainerCluster#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#node_count GoogleContainerCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#node_locations GoogleContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#version GoogleContainerCluster#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#autoscaling GoogleContainerCluster#autoscaling}
  */
  readonly autoscaling?: GoogleContainerClusterNodePoolAutoscaling;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#management GoogleContainerCluster#management}
  */
  readonly management?: GoogleContainerClusterNodePoolManagement;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#network_config GoogleContainerCluster#network_config}
  */
  readonly networkConfig?: GoogleContainerClusterNodePoolNetworkConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#node_config GoogleContainerCluster#node_config}
  */
  readonly nodeConfig?: GoogleContainerClusterNodePoolNodeConfig;
  /**
  * placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#placement_policy GoogleContainerCluster#placement_policy}
  */
  readonly placementPolicy?: GoogleContainerClusterNodePoolPlacementPolicy;
  /**
  * queued_provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#queued_provisioning GoogleContainerCluster#queued_provisioning}
  */
  readonly queuedProvisioning?: GoogleContainerClusterNodePoolQueuedProvisioning;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#upgrade_settings GoogleContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: GoogleContainerClusterNodePoolUpgradeSettings;
}

export function googleContainerClusterNodePoolToTerraform(struct?: GoogleContainerClusterNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_node_count: cdktf.numberToTerraform(struct!.initialNodeCount),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktf.stringToTerraform(struct!.name),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeLocations),
    version: cdktf.stringToTerraform(struct!.version),
    autoscaling: googleContainerClusterNodePoolAutoscalingToTerraform(struct!.autoscaling),
    management: googleContainerClusterNodePoolManagementToTerraform(struct!.management),
    network_config: googleContainerClusterNodePoolNetworkConfigToTerraform(struct!.networkConfig),
    node_config: googleContainerClusterNodePoolNodeConfigToTerraform(struct!.nodeConfig),
    placement_policy: googleContainerClusterNodePoolPlacementPolicyToTerraform(struct!.placementPolicy),
    queued_provisioning: googleContainerClusterNodePoolQueuedProvisioningToTerraform(struct!.queuedProvisioning),
    upgrade_settings: googleContainerClusterNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function googleContainerClusterNodePoolToHclTerraform(struct?: GoogleContainerClusterNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initial_node_count: {
      value: cdktf.numberToHclTerraform(struct!.initialNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: googleContainerClusterNodePoolAutoscalingToHclTerraform(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoscalingList",
    },
    management: {
      value: googleContainerClusterNodePoolManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolManagementList",
    },
    network_config: {
      value: googleContainerClusterNodePoolNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNetworkConfigList",
    },
    node_config: {
      value: googleContainerClusterNodePoolNodeConfigToHclTerraform(struct!.nodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolNodeConfigList",
    },
    placement_policy: {
      value: googleContainerClusterNodePoolPlacementPolicyToHclTerraform(struct!.placementPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolPlacementPolicyList",
    },
    queued_provisioning: {
      value: googleContainerClusterNodePoolQueuedProvisioningToHclTerraform(struct!.queuedProvisioning),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolQueuedProvisioningList",
    },
    upgrade_settings: {
      value: googleContainerClusterNodePoolUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNodeCount = this._initialNodeCount;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocations = this._nodeLocations;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._placementPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementPolicy = this._placementPolicy?.internalValue;
    }
    if (this._queuedProvisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuedProvisioning = this._queuedProvisioning?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialNodeCount = undefined;
      this._maxPodsPerNode = undefined;
      this._name = undefined;
      this._namePrefix = undefined;
      this._nodeCount = undefined;
      this._nodeLocations = undefined;
      this._version = undefined;
      this._autoscaling.internalValue = undefined;
      this._management.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._placementPolicy.internalValue = undefined;
      this._queuedProvisioning.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialNodeCount = value.initialNodeCount;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._name = value.name;
      this._namePrefix = value.namePrefix;
      this._nodeCount = value.nodeCount;
      this._nodeLocations = value.nodeLocations;
      this._version = value.version;
      this._autoscaling.internalValue = value.autoscaling;
      this._management.internalValue = value.management;
      this._networkConfig.internalValue = value.networkConfig;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._placementPolicy.internalValue = value.placementPolicy;
      this._queuedProvisioning.internalValue = value.queuedProvisioning;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
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
  private _autoscaling = new GoogleContainerClusterNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: GoogleContainerClusterNodePoolAutoscaling) {
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
  private _management = new GoogleContainerClusterNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: GoogleContainerClusterNodePoolManagement) {
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
  private _networkConfig = new GoogleContainerClusterNodePoolNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleContainerClusterNodePoolNetworkConfig) {
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
  private _nodeConfig = new GoogleContainerClusterNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GoogleContainerClusterNodePoolNodeConfig) {
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
  private _placementPolicy = new GoogleContainerClusterNodePoolPlacementPolicyOutputReference(this, "placement_policy");
  public get placementPolicy() {
    return this._placementPolicy;
  }
  public putPlacementPolicy(value: GoogleContainerClusterNodePoolPlacementPolicy) {
    this._placementPolicy.internalValue = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy.internalValue;
  }

  // queued_provisioning - computed: false, optional: true, required: false
  private _queuedProvisioning = new GoogleContainerClusterNodePoolQueuedProvisioningOutputReference(this, "queued_provisioning");
  public get queuedProvisioning() {
    return this._queuedProvisioning;
  }
  public putQueuedProvisioning(value: GoogleContainerClusterNodePoolQueuedProvisioning) {
    this._queuedProvisioning.internalValue = value;
  }
  public resetQueuedProvisioning() {
    this._queuedProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuedProvisioningInput() {
    return this._queuedProvisioning.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new GoogleContainerClusterNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GoogleContainerClusterNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}

export class GoogleContainerClusterNodePoolList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePool[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolOutputReference {
    return new GoogleContainerClusterNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#cgroup_mode GoogleContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
}

export function googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktf.stringToTerraform(struct!.cgroupMode),
  }
}


export function googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktf.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }
}
export interface GoogleContainerClusterNodePoolAutoConfigNetworkTags {
  /**
  * List of network tags applied to auto-provisioned node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#tags GoogleContainerCluster#tags}
  */
  readonly tags?: string[];
}

export function googleContainerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | GoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function googleContainerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference | GoogleContainerClusterNodePoolAutoConfigNetworkTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigNetworkTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
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
}
export interface GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#insecure_kubelet_readonly_port_enabled GoogleContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
}

export function googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
  }
}


export function googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
    }
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }
}
export interface GoogleContainerClusterNodePoolAutoConfig {
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#resource_manager_tags GoogleContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#linux_node_config GoogleContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig;
  /**
  * network_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#network_tags GoogleContainerCluster#network_tags}
  */
  readonly networkTags?: GoogleContainerClusterNodePoolAutoConfigNetworkTags;
  /**
  * node_kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#node_kubelet_config GoogleContainerCluster#node_kubelet_config}
  */
  readonly nodeKubeletConfig?: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig;
}

export function googleContainerClusterNodePoolAutoConfigToTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigOutputReference | GoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    linux_node_config: googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    network_tags: googleContainerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct!.networkTags),
    node_kubelet_config: googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct!.nodeKubeletConfig),
  }
}


export function googleContainerClusterNodePoolAutoConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolAutoConfigOutputReference | GoogleContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    linux_node_config: {
      value: googleContainerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigList",
    },
    network_tags: {
      value: googleContainerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct!.networkTags),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigNetworkTagsList",
    },
    node_kubelet_config: {
      value: googleContainerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct!.nodeKubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolAutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolAutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._networkTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags?.internalValue;
    }
    if (this._nodeKubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKubeletConfig = this._nodeKubeletConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolAutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._networkTags.internalValue = undefined;
      this._nodeKubeletConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._networkTags.internalValue = value.networkTags;
      this._nodeKubeletConfig.internalValue = value.nodeKubeletConfig;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: GoogleContainerClusterNodePoolAutoConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags = new GoogleContainerClusterNodePoolAutoConfigNetworkTagsOutputReference(this, "network_tags");
  public get networkTags() {
    return this._networkTags;
  }
  public putNetworkTags(value: GoogleContainerClusterNodePoolAutoConfigNetworkTags) {
    this._networkTags.internalValue = value;
  }
  public resetNetworkTags() {
    this._networkTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags.internalValue;
  }

  // node_kubelet_config - computed: false, optional: true, required: false
  private _nodeKubeletConfig = new GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference(this, "node_kubelet_config");
  public get nodeKubeletConfig() {
    return this._nodeKubeletConfig;
  }
  public putNodeKubeletConfig(value: GoogleContainerClusterNodePoolAutoConfigNodeKubeletConfig) {
    this._nodeKubeletConfig.internalValue = value;
  }
  public resetNodeKubeletConfig() {
    this._nodeKubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKubeletConfigInput() {
    return this._nodeKubeletConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#secret_uri GoogleContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktf.stringToTerraform(struct!.secretUri),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.secretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUri = value.secretUri;
    }
  }

  // secret_uri - computed: false, optional: false, required: true
  private _secretUri?: string; 
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
  public set secretUri(value: string) {
    this._secretUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUriInput() {
    return this._secretUri;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#fqdns GoogleContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#gcp_secret_manager_certificate_config GoogleContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._gcpSecretManagerCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerCertificateConfig = this._gcpSecretManagerCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._gcpSecretManagerCertificateConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._gcpSecretManagerCertificateConfig.internalValue = value.gcpSecretManagerCertificateConfig;
    }
  }

  // fqdns - computed: false, optional: false, required: true
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // gcp_secret_manager_certificate_config - computed: false, optional: false, required: true
  private _gcpSecretManagerCertificateConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#certificate_authority_domain_config GoogleContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktf.listMapper(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
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
    certificate_authority_domain_config: {
      value: cdktf.listMapperHcl(googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._certificateAuthorityDomainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityDomainConfig = this._certificateAuthorityDomainConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._certificateAuthorityDomainConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._certificateAuthorityDomainConfig.internalValue = value.certificateAuthorityDomainConfig;
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

  // certificate_authority_domain_config - computed: false, optional: true, required: false
  private _certificateAuthorityDomainConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable) {
    this._certificateAuthorityDomainConfig.internalValue = value;
  }
  public resetCertificateAuthorityDomainConfig() {
    this._certificateAuthorityDomainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityDomainConfigInput() {
    return this._certificateAuthorityDomainConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#private_registry_access_config GoogleContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateRegistryAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateRegistryAccessConfig.internalValue = value.privateRegistryAccessConfig;
    }
  }

  // private_registry_access_config - computed: false, optional: true, required: false
  private _privateRegistryAccessConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig) {
    this._privateRegistryAccessConfig.internalValue = value;
  }
  public resetPrivateRegistryAccessConfig() {
    this._privateRegistryAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryAccessConfigInput() {
    return this._privateRegistryAccessConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined) {
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
export interface GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#insecure_kubelet_readonly_port_enabled GoogleContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#logging_variant GoogleContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#containerd_config GoogleContainerCluster#containerd_config}
  */
  readonly containerdConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#gcfs_config GoogleContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig;
}

export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    containerd_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct!.containerdConfig),
    gcfs_config: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct!.gcfsConfig),
  }
}


export function googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containerd_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigList",
    },
    gcfs_config: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._loggingVariant = undefined;
      this._containerdConfig.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._loggingVariant = value.loggingVariant;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._gcfsConfig.internalValue = value.gcfsConfig;
    }
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }
}
export interface GoogleContainerClusterNodePoolDefaults {
  /**
  * node_config_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#node_config_defaults GoogleContainerCluster#node_config_defaults}
  */
  readonly nodeConfigDefaults?: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults;
}

export function googleContainerClusterNodePoolDefaultsToTerraform(struct?: GoogleContainerClusterNodePoolDefaultsOutputReference | GoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_config_defaults: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct!.nodeConfigDefaults),
  }
}


export function googleContainerClusterNodePoolDefaultsToHclTerraform(struct?: GoogleContainerClusterNodePoolDefaultsOutputReference | GoogleContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_config_defaults: {
      value: googleContainerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct!.nodeConfigDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNodePoolDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNodePoolDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeConfigDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigDefaults = this._nodeConfigDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNodePoolDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeConfigDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeConfigDefaults.internalValue = value.nodeConfigDefaults;
    }
  }

  // node_config_defaults - computed: false, optional: true, required: false
  private _nodeConfigDefaults = new GoogleContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference(this, "node_config_defaults");
  public get nodeConfigDefaults() {
    return this._nodeConfigDefaults;
  }
  public putNodeConfigDefaults(value: GoogleContainerClusterNodePoolDefaultsNodeConfigDefaults) {
    this._nodeConfigDefaults.internalValue = value;
  }
  public resetNodeConfigDefaults() {
    this._nodeConfigDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigDefaultsInput() {
    return this._nodeConfigDefaults.internalValue;
  }
}
export interface GoogleContainerClusterNotificationConfigPubsubFilter {
  /**
  * Can be used to filter what notifications are sent. Valid values include include UPGRADE_AVAILABLE_EVENT, UPGRADE_EVENT, SECURITY_BULLETIN_EVENT, and UPGRADE_INFO_EVENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#event_type GoogleContainerCluster#event_type}
  */
  readonly eventType: string[];
}

export function googleContainerClusterNotificationConfigPubsubFilterToTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubFilterOutputReference | GoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventType),
  }
}


export function googleContainerClusterNotificationConfigPubsubFilterToHclTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubFilterOutputReference | GoogleContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigPubsubFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfigPubsubFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfigPubsubFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string[]; 
  public get eventType() {
    return this.getListAttribute('event_type');
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }
}
export interface GoogleContainerClusterNotificationConfigPubsub {
  /**
  * Whether or not the notification config is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#topic GoogleContainerCluster#topic}
  */
  readonly topic?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#filter GoogleContainerCluster#filter}
  */
  readonly filter?: GoogleContainerClusterNotificationConfigPubsubFilter;
}

export function googleContainerClusterNotificationConfigPubsubToTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubOutputReference | GoogleContainerClusterNotificationConfigPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    topic: cdktf.stringToTerraform(struct!.topic),
    filter: googleContainerClusterNotificationConfigPubsubFilterToTerraform(struct!.filter),
  }
}


export function googleContainerClusterNotificationConfigPubsubToHclTerraform(struct?: GoogleContainerClusterNotificationConfigPubsubOutputReference | GoogleContainerClusterNotificationConfigPubsub): any {
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
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: googleContainerClusterNotificationConfigPubsubFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNotificationConfigPubsubFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfigPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfigPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
      this._filter.internalValue = value.filter;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleContainerClusterNotificationConfigPubsubFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleContainerClusterNotificationConfigPubsubFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface GoogleContainerClusterNotificationConfig {
  /**
  * pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#pubsub GoogleContainerCluster#pubsub}
  */
  readonly pubsub: GoogleContainerClusterNotificationConfigPubsub;
}

export function googleContainerClusterNotificationConfigToTerraform(struct?: GoogleContainerClusterNotificationConfigOutputReference | GoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub: googleContainerClusterNotificationConfigPubsubToTerraform(struct!.pubsub),
  }
}


export function googleContainerClusterNotificationConfigToHclTerraform(struct?: GoogleContainerClusterNotificationConfigOutputReference | GoogleContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pubsub: {
      value: googleContainerClusterNotificationConfigPubsubToHclTerraform(struct!.pubsub),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterNotificationConfigPubsubList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsub = this._pubsub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsub.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsub.internalValue = value.pubsub;
    }
  }

  // pubsub - computed: false, optional: false, required: true
  private _pubsub = new GoogleContainerClusterNotificationConfigPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: GoogleContainerClusterNotificationConfigPubsub) {
    this._pubsub.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
  }
}
export interface GoogleContainerClusterPodAutoscaling {
  /**
  * 
  * 								HPA Profile is used to configure the Horizontal Pod Autoscaler (HPA) profile for the cluster.
  * 								Available options include:
  * 								- NONE: Customers explicitly opt-out of HPA profiles.
  * 								- PERFORMANCE: PERFORMANCE is used when customers opt-in to the performance HPA profile. In this profile we support a higher number of HPAs per cluster and faster metrics collection for workload autoscaling.
  * 							
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#hpa_profile GoogleContainerCluster#hpa_profile}
  */
  readonly hpaProfile: string;
}

export function googleContainerClusterPodAutoscalingToTerraform(struct?: GoogleContainerClusterPodAutoscalingOutputReference | GoogleContainerClusterPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hpa_profile: cdktf.stringToTerraform(struct!.hpaProfile),
  }
}


export function googleContainerClusterPodAutoscalingToHclTerraform(struct?: GoogleContainerClusterPodAutoscalingOutputReference | GoogleContainerClusterPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hpa_profile: {
      value: cdktf.stringToHclTerraform(struct!.hpaProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hpaProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpaProfile = this._hpaProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hpaProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hpaProfile = value.hpaProfile;
    }
  }

  // hpa_profile - computed: false, optional: false, required: true
  private _hpaProfile?: string; 
  public get hpaProfile() {
    return this.getStringAttribute('hpa_profile');
  }
  public set hpaProfile(value: string) {
    this._hpaProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaProfileInput() {
    return this._hpaProfile;
  }
}
export interface GoogleContainerClusterPodSecurityPolicyConfig {
  /**
  * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterPodSecurityPolicyConfigToTerraform(struct?: GoogleContainerClusterPodSecurityPolicyConfigOutputReference | GoogleContainerClusterPodSecurityPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterPodSecurityPolicyConfigToHclTerraform(struct?: GoogleContainerClusterPodSecurityPolicyConfigOutputReference | GoogleContainerClusterPodSecurityPolicyConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterPodSecurityPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPodSecurityPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPodSecurityPolicyConfig | undefined) {
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
export interface GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /**
  * Whether the cluster master is accessible globally or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined) {
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
export interface GoogleContainerClusterPrivateClusterConfig {
  /**
  * When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enable_private_endpoint GoogleContainerCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enable_private_nodes GoogleContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#master_ipv4_cidr_block GoogleContainerCluster#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * Subnetwork in cluster's network where master's endpoint will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#private_endpoint_subnetwork GoogleContainerCluster#private_endpoint_subnetwork}
  */
  readonly privateEndpointSubnetwork?: string;
  /**
  * master_global_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#master_global_access_config GoogleContainerCluster#master_global_access_config}
  */
  readonly masterGlobalAccessConfig?: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig;
}

export function googleContainerClusterPrivateClusterConfigToTerraform(struct?: GoogleContainerClusterPrivateClusterConfigOutputReference | GoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    private_endpoint_subnetwork: cdktf.stringToTerraform(struct!.privateEndpointSubnetwork),
    master_global_access_config: googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct!.masterGlobalAccessConfig),
  }
}


export function googleContainerClusterPrivateClusterConfigToHclTerraform(struct?: GoogleContainerClusterPrivateClusterConfigOutputReference | GoogleContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_private_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.masterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointSubnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_global_access_config: {
      value: googleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct!.masterGlobalAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterPrivateClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterPrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._masterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._privateEndpointSubnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointSubnetwork = this._privateEndpointSubnetwork;
    }
    if (this._masterGlobalAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterGlobalAccessConfig = this._masterGlobalAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateEndpoint = undefined;
      this._enablePrivateNodes = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._privateEndpointSubnetwork = undefined;
      this._masterGlobalAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._privateEndpointSubnetwork = value.privateEndpointSubnetwork;
      this._masterGlobalAccessConfig.internalValue = value.masterGlobalAccessConfig;
    }
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // enable_private_nodes - computed: false, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktf.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // master_ipv4_cidr_block - computed: true, optional: true, required: false
  private _masterIpv4CidrBlock?: string; 
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
  public set masterIpv4CidrBlock(value: string) {
    this._masterIpv4CidrBlock = value;
  }
  public resetMasterIpv4CidrBlock() {
    this._masterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpv4CidrBlockInput() {
    return this._masterIpv4CidrBlock;
  }

  // peering_name - computed: true, optional: false, required: false
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_subnetwork - computed: false, optional: true, required: false
  private _privateEndpointSubnetwork?: string; 
  public get privateEndpointSubnetwork() {
    return this.getStringAttribute('private_endpoint_subnetwork');
  }
  public set privateEndpointSubnetwork(value: string) {
    this._privateEndpointSubnetwork = value;
  }
  public resetPrivateEndpointSubnetwork() {
    this._privateEndpointSubnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointSubnetworkInput() {
    return this._privateEndpointSubnetwork;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // master_global_access_config - computed: false, optional: true, required: false
  private _masterGlobalAccessConfig = new GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference(this, "master_global_access_config");
  public get masterGlobalAccessConfig() {
    return this._masterGlobalAccessConfig;
  }
  public putMasterGlobalAccessConfig(value: GoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig) {
    this._masterGlobalAccessConfig.internalValue = value;
  }
  public resetMasterGlobalAccessConfig() {
    this._masterGlobalAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterGlobalAccessConfigInput() {
    return this._masterGlobalAccessConfig.internalValue;
  }
}
export interface GoogleContainerClusterProtectConfigWorkloadConfig {
  /**
  * Sets which mode of auditing should be used for the cluster's workloads. Accepted values are DISABLED, BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#audit_mode GoogleContainerCluster#audit_mode}
  */
  readonly auditMode: string;
}

export function googleContainerClusterProtectConfigWorkloadConfigToTerraform(struct?: GoogleContainerClusterProtectConfigWorkloadConfigOutputReference | GoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_mode: cdktf.stringToTerraform(struct!.auditMode),
  }
}


export function googleContainerClusterProtectConfigWorkloadConfigToHclTerraform(struct?: GoogleContainerClusterProtectConfigWorkloadConfigOutputReference | GoogleContainerClusterProtectConfigWorkloadConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_mode: {
      value: cdktf.stringToHclTerraform(struct!.auditMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterProtectConfigWorkloadConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterProtectConfigWorkloadConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditMode = this._auditMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterProtectConfigWorkloadConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditMode = value.auditMode;
    }
  }

  // audit_mode - computed: false, optional: false, required: true
  private _auditMode?: string; 
  public get auditMode() {
    return this.getStringAttribute('audit_mode');
  }
  public set auditMode(value: string) {
    this._auditMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditModeInput() {
    return this._auditMode;
  }
}
export interface GoogleContainerClusterProtectConfig {
  /**
  * Sets which mode to use for Protect workload vulnerability scanning feature. Accepted values are DISABLED, BASIC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#workload_vulnerability_mode GoogleContainerCluster#workload_vulnerability_mode}
  */
  readonly workloadVulnerabilityMode?: string;
  /**
  * workload_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#workload_config GoogleContainerCluster#workload_config}
  */
  readonly workloadConfig?: GoogleContainerClusterProtectConfigWorkloadConfig;
}

export function googleContainerClusterProtectConfigToTerraform(struct?: GoogleContainerClusterProtectConfigOutputReference | GoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_vulnerability_mode: cdktf.stringToTerraform(struct!.workloadVulnerabilityMode),
    workload_config: googleContainerClusterProtectConfigWorkloadConfigToTerraform(struct!.workloadConfig),
  }
}


export function googleContainerClusterProtectConfigToHclTerraform(struct?: GoogleContainerClusterProtectConfigOutputReference | GoogleContainerClusterProtectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.workloadVulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_config: {
      value: googleContainerClusterProtectConfigWorkloadConfigToHclTerraform(struct!.workloadConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterProtectConfigWorkloadConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterProtectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterProtectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadVulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadVulnerabilityMode = this._workloadVulnerabilityMode;
    }
    if (this._workloadConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadConfig = this._workloadConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterProtectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadVulnerabilityMode = undefined;
      this._workloadConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadVulnerabilityMode = value.workloadVulnerabilityMode;
      this._workloadConfig.internalValue = value.workloadConfig;
    }
  }

  // workload_vulnerability_mode - computed: true, optional: true, required: false
  private _workloadVulnerabilityMode?: string; 
  public get workloadVulnerabilityMode() {
    return this.getStringAttribute('workload_vulnerability_mode');
  }
  public set workloadVulnerabilityMode(value: string) {
    this._workloadVulnerabilityMode = value;
  }
  public resetWorkloadVulnerabilityMode() {
    this._workloadVulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadVulnerabilityModeInput() {
    return this._workloadVulnerabilityMode;
  }

  // workload_config - computed: false, optional: true, required: false
  private _workloadConfig = new GoogleContainerClusterProtectConfigWorkloadConfigOutputReference(this, "workload_config");
  public get workloadConfig() {
    return this._workloadConfig;
  }
  public putWorkloadConfig(value: GoogleContainerClusterProtectConfigWorkloadConfig) {
    this._workloadConfig.internalValue = value;
  }
  public resetWorkloadConfig() {
    this._workloadConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadConfigInput() {
    return this._workloadConfig.internalValue;
  }
}
export interface GoogleContainerClusterReleaseChannel {
  /**
  * The selected release channel. Accepted values are:
  * * UNSPECIFIED: Not set.
  * * RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
  * * REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
  * * STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.
  * * EXTENDED: GKE provides extended support for Kubernetes minor versions through the Extended channel. With this channel, you can stay on a minor version for up to 24 months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#channel GoogleContainerCluster#channel}
  */
  readonly channel: string;
}

export function googleContainerClusterReleaseChannelToTerraform(struct?: GoogleContainerClusterReleaseChannelOutputReference | GoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}


export function googleContainerClusterReleaseChannelToHclTerraform(struct?: GoogleContainerClusterReleaseChannelOutputReference | GoogleContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterReleaseChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterReleaseChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterReleaseChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface GoogleContainerClusterResourceUsageExportConfigBigqueryDestination {
  /**
  * The ID of a BigQuery Dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#dataset_id GoogleContainerCluster#dataset_id}
  */
  readonly datasetId: string;
}

export function googleContainerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | GoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}


export function googleContainerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | GoogleContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterResourceUsageExportConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
export interface GoogleContainerClusterResourceUsageExportConfig {
  /**
  * Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enable_network_egress_metering GoogleContainerCluster#enable_network_egress_metering}
  */
  readonly enableNetworkEgressMetering?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enable_resource_consumption_metering GoogleContainerCluster#enable_resource_consumption_metering}
  */
  readonly enableResourceConsumptionMetering?: boolean | cdktf.IResolvable;
  /**
  * bigquery_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#bigquery_destination GoogleContainerCluster#bigquery_destination}
  */
  readonly bigqueryDestination: GoogleContainerClusterResourceUsageExportConfigBigqueryDestination;
}

export function googleContainerClusterResourceUsageExportConfigToTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigOutputReference | GoogleContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_network_egress_metering: cdktf.booleanToTerraform(struct!.enableNetworkEgressMetering),
    enable_resource_consumption_metering: cdktf.booleanToTerraform(struct!.enableResourceConsumptionMetering),
    bigquery_destination: googleContainerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}


export function googleContainerClusterResourceUsageExportConfigToHclTerraform(struct?: GoogleContainerClusterResourceUsageExportConfigOutputReference | GoogleContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_network_egress_metering: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkEgressMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_consumption_metering: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceConsumptionMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_destination: {
      value: googleContainerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct!.bigqueryDestination),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterResourceUsageExportConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterResourceUsageExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNetworkEgressMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkEgressMetering = this._enableNetworkEgressMetering;
    }
    if (this._enableResourceConsumptionMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceConsumptionMetering = this._enableResourceConsumptionMetering;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterResourceUsageExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNetworkEgressMetering = undefined;
      this._enableResourceConsumptionMetering = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNetworkEgressMetering = value.enableNetworkEgressMetering;
      this._enableResourceConsumptionMetering = value.enableResourceConsumptionMetering;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // enable_network_egress_metering - computed: false, optional: true, required: false
  private _enableNetworkEgressMetering?: boolean | cdktf.IResolvable; 
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering');
  }
  public set enableNetworkEgressMetering(value: boolean | cdktf.IResolvable) {
    this._enableNetworkEgressMetering = value;
  }
  public resetEnableNetworkEgressMetering() {
    this._enableNetworkEgressMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkEgressMeteringInput() {
    return this._enableNetworkEgressMetering;
  }

  // enable_resource_consumption_metering - computed: false, optional: true, required: false
  private _enableResourceConsumptionMetering?: boolean | cdktf.IResolvable; 
  public get enableResourceConsumptionMetering() {
    return this.getBooleanAttribute('enable_resource_consumption_metering');
  }
  public set enableResourceConsumptionMetering(value: boolean | cdktf.IResolvable) {
    this._enableResourceConsumptionMetering = value;
  }
  public resetEnableResourceConsumptionMetering() {
    this._enableResourceConsumptionMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceConsumptionMeteringInput() {
    return this._enableResourceConsumptionMetering;
  }

  // bigquery_destination - computed: false, optional: false, required: true
  private _bigqueryDestination = new GoogleContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: GoogleContainerClusterResourceUsageExportConfigBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }
}
export interface GoogleContainerClusterSecretManagerConfig {
  /**
  * Enable the Secret manager csi component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterSecretManagerConfigToTerraform(struct?: GoogleContainerClusterSecretManagerConfigOutputReference | GoogleContainerClusterSecretManagerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterSecretManagerConfigToHclTerraform(struct?: GoogleContainerClusterSecretManagerConfigOutputReference | GoogleContainerClusterSecretManagerConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterSecretManagerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterSecretManagerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterSecretManagerConfig | undefined) {
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
export interface GoogleContainerClusterSecurityPostureConfig {
  /**
  * Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED, BASIC, and ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#mode GoogleContainerCluster#mode}
  */
  readonly mode?: string;
  /**
  * Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED, VULNERABILITY_BASIC and VULNERABILITY_ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#vulnerability_mode GoogleContainerCluster#vulnerability_mode}
  */
  readonly vulnerabilityMode?: string;
}

export function googleContainerClusterSecurityPostureConfigToTerraform(struct?: GoogleContainerClusterSecurityPostureConfigOutputReference | GoogleContainerClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    vulnerability_mode: cdktf.stringToTerraform(struct!.vulnerabilityMode),
  }
}


export function googleContainerClusterSecurityPostureConfigToHclTerraform(struct?: GoogleContainerClusterSecurityPostureConfigOutputReference | GoogleContainerClusterSecurityPostureConfig): any {
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
    vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterSecurityPostureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterSecurityPostureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityMode = this._vulnerabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterSecurityPostureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._vulnerabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._vulnerabilityMode = value.vulnerabilityMode;
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

  // vulnerability_mode - computed: true, optional: true, required: false
  private _vulnerabilityMode?: string; 
  public get vulnerabilityMode() {
    return this.getStringAttribute('vulnerability_mode');
  }
  public set vulnerabilityMode(value: string) {
    this._vulnerabilityMode = value;
  }
  public resetVulnerabilityMode() {
    this._vulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityModeInput() {
    return this._vulnerabilityMode;
  }
}
export interface GoogleContainerClusterServiceExternalIpsConfig {
  /**
  * When enabled, services with external ips specified will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterServiceExternalIpsConfigToTerraform(struct?: GoogleContainerClusterServiceExternalIpsConfigOutputReference | GoogleContainerClusterServiceExternalIpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterServiceExternalIpsConfigToHclTerraform(struct?: GoogleContainerClusterServiceExternalIpsConfigOutputReference | GoogleContainerClusterServiceExternalIpsConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterServiceExternalIpsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterServiceExternalIpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterServiceExternalIpsConfig | undefined) {
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
export interface GoogleContainerClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#create GoogleContainerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#delete GoogleContainerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#read GoogleContainerCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#update GoogleContainerCluster#update}
  */
  readonly update?: string;
}

export function googleContainerClusterTimeoutsToTerraform(struct?: GoogleContainerClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleContainerClusterTimeoutsToHclTerraform(struct?: GoogleContainerClusterTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class GoogleContainerClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleContainerClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface GoogleContainerClusterTpuConfig {
  /**
  * Whether Cloud TPU integration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Whether to use service networking for Cloud TPU or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#use_service_networking GoogleContainerCluster#use_service_networking}
  */
  readonly useServiceNetworking?: boolean | cdktf.IResolvable;
}

export function googleContainerClusterTpuConfigToTerraform(struct?: GoogleContainerClusterTpuConfigOutputReference | GoogleContainerClusterTpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    use_service_networking: cdktf.booleanToTerraform(struct!.useServiceNetworking),
  }
}


export function googleContainerClusterTpuConfigToHclTerraform(struct?: GoogleContainerClusterTpuConfigOutputReference | GoogleContainerClusterTpuConfig): any {
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
    use_service_networking: {
      value: cdktf.booleanToHclTerraform(struct!.useServiceNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterTpuConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterTpuConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._useServiceNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServiceNetworking = this._useServiceNetworking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterTpuConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._useServiceNetworking = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._useServiceNetworking = value.useServiceNetworking;
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

  // ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipv4CidrBlock() {
    return this.getStringAttribute('ipv4_cidr_block');
  }

  // use_service_networking - computed: false, optional: true, required: false
  private _useServiceNetworking?: boolean | cdktf.IResolvable; 
  public get useServiceNetworking() {
    return this.getBooleanAttribute('use_service_networking');
  }
  public set useServiceNetworking(value: boolean | cdktf.IResolvable) {
    this._useServiceNetworking = value;
  }
  public resetUseServiceNetworking() {
    this._useServiceNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNetworkingInput() {
    return this._useServiceNetworking;
  }
}
export interface GoogleContainerClusterUserManagedKeysConfig {
  /**
  * The Certificate Authority Service caPool to use for the aggreation CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#aggregation_ca GoogleContainerCluster#aggregation_ca}
  */
  readonly aggregationCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the cluster CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#cluster_ca GoogleContainerCluster#cluster_ca}
  */
  readonly clusterCa?: string;
  /**
  * The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#control_plane_disk_encryption_key GoogleContainerCluster#control_plane_disk_encryption_key}
  */
  readonly controlPlaneDiskEncryptionKey?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd API CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#etcd_api_ca GoogleContainerCluster#etcd_api_ca}
  */
  readonly etcdApiCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd peer CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#etcd_peer_ca GoogleContainerCluster#etcd_peer_ca}
  */
  readonly etcdPeerCa?: string;
  /**
  * Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#gkeops_etcd_backup_encryption_key GoogleContainerCluster#gkeops_etcd_backup_encryption_key}
  */
  readonly gkeopsEtcdBackupEncryptionKey?: string;
  /**
  * The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#service_account_signing_keys GoogleContainerCluster#service_account_signing_keys}
  */
  readonly serviceAccountSigningKeys?: string[];
  /**
  * The Cloud KMS cryptoKeyVersions to use for verifying service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#service_account_verification_keys GoogleContainerCluster#service_account_verification_keys}
  */
  readonly serviceAccountVerificationKeys?: string[];
}

export function googleContainerClusterUserManagedKeysConfigToTerraform(struct?: GoogleContainerClusterUserManagedKeysConfigOutputReference | GoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_ca: cdktf.stringToTerraform(struct!.aggregationCa),
    cluster_ca: cdktf.stringToTerraform(struct!.clusterCa),
    control_plane_disk_encryption_key: cdktf.stringToTerraform(struct!.controlPlaneDiskEncryptionKey),
    etcd_api_ca: cdktf.stringToTerraform(struct!.etcdApiCa),
    etcd_peer_ca: cdktf.stringToTerraform(struct!.etcdPeerCa),
    gkeops_etcd_backup_encryption_key: cdktf.stringToTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
    service_account_signing_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountSigningKeys),
    service_account_verification_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountVerificationKeys),
  }
}


export function googleContainerClusterUserManagedKeysConfigToHclTerraform(struct?: GoogleContainerClusterUserManagedKeysConfigOutputReference | GoogleContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_ca: {
      value: cdktf.stringToHclTerraform(struct!.aggregationCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca: {
      value: cdktf.stringToHclTerraform(struct!.clusterCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_disk_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneDiskEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_api_ca: {
      value: cdktf.stringToHclTerraform(struct!.etcdApiCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_peer_ca: {
      value: cdktf.stringToHclTerraform(struct!.etcdPeerCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gkeops_etcd_backup_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_signing_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountSigningKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_account_verification_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountVerificationKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterUserManagedKeysConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterUserManagedKeysConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationCa = this._aggregationCa;
    }
    if (this._clusterCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCa = this._clusterCa;
    }
    if (this._controlPlaneDiskEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneDiskEncryptionKey = this._controlPlaneDiskEncryptionKey;
    }
    if (this._etcdApiCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdApiCa = this._etcdApiCa;
    }
    if (this._etcdPeerCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdPeerCa = this._etcdPeerCa;
    }
    if (this._gkeopsEtcdBackupEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeopsEtcdBackupEncryptionKey = this._gkeopsEtcdBackupEncryptionKey;
    }
    if (this._serviceAccountSigningKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSigningKeys = this._serviceAccountSigningKeys;
    }
    if (this._serviceAccountVerificationKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountVerificationKeys = this._serviceAccountVerificationKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterUserManagedKeysConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationCa = undefined;
      this._clusterCa = undefined;
      this._controlPlaneDiskEncryptionKey = undefined;
      this._etcdApiCa = undefined;
      this._etcdPeerCa = undefined;
      this._gkeopsEtcdBackupEncryptionKey = undefined;
      this._serviceAccountSigningKeys = undefined;
      this._serviceAccountVerificationKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationCa = value.aggregationCa;
      this._clusterCa = value.clusterCa;
      this._controlPlaneDiskEncryptionKey = value.controlPlaneDiskEncryptionKey;
      this._etcdApiCa = value.etcdApiCa;
      this._etcdPeerCa = value.etcdPeerCa;
      this._gkeopsEtcdBackupEncryptionKey = value.gkeopsEtcdBackupEncryptionKey;
      this._serviceAccountSigningKeys = value.serviceAccountSigningKeys;
      this._serviceAccountVerificationKeys = value.serviceAccountVerificationKeys;
    }
  }

  // aggregation_ca - computed: false, optional: true, required: false
  private _aggregationCa?: string; 
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }
  public set aggregationCa(value: string) {
    this._aggregationCa = value;
  }
  public resetAggregationCa() {
    this._aggregationCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationCaInput() {
    return this._aggregationCa;
  }

  // cluster_ca - computed: false, optional: true, required: false
  private _clusterCa?: string; 
  public get clusterCa() {
    return this.getStringAttribute('cluster_ca');
  }
  public set clusterCa(value: string) {
    this._clusterCa = value;
  }
  public resetClusterCa() {
    this._clusterCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaInput() {
    return this._clusterCa;
  }

  // control_plane_disk_encryption_key - computed: false, optional: true, required: false
  private _controlPlaneDiskEncryptionKey?: string; 
  public get controlPlaneDiskEncryptionKey() {
    return this.getStringAttribute('control_plane_disk_encryption_key');
  }
  public set controlPlaneDiskEncryptionKey(value: string) {
    this._controlPlaneDiskEncryptionKey = value;
  }
  public resetControlPlaneDiskEncryptionKey() {
    this._controlPlaneDiskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneDiskEncryptionKeyInput() {
    return this._controlPlaneDiskEncryptionKey;
  }

  // etcd_api_ca - computed: false, optional: true, required: false
  private _etcdApiCa?: string; 
  public get etcdApiCa() {
    return this.getStringAttribute('etcd_api_ca');
  }
  public set etcdApiCa(value: string) {
    this._etcdApiCa = value;
  }
  public resetEtcdApiCa() {
    this._etcdApiCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdApiCaInput() {
    return this._etcdApiCa;
  }

  // etcd_peer_ca - computed: false, optional: true, required: false
  private _etcdPeerCa?: string; 
  public get etcdPeerCa() {
    return this.getStringAttribute('etcd_peer_ca');
  }
  public set etcdPeerCa(value: string) {
    this._etcdPeerCa = value;
  }
  public resetEtcdPeerCa() {
    this._etcdPeerCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdPeerCaInput() {
    return this._etcdPeerCa;
  }

  // gkeops_etcd_backup_encryption_key - computed: false, optional: true, required: false
  private _gkeopsEtcdBackupEncryptionKey?: string; 
  public get gkeopsEtcdBackupEncryptionKey() {
    return this.getStringAttribute('gkeops_etcd_backup_encryption_key');
  }
  public set gkeopsEtcdBackupEncryptionKey(value: string) {
    this._gkeopsEtcdBackupEncryptionKey = value;
  }
  public resetGkeopsEtcdBackupEncryptionKey() {
    this._gkeopsEtcdBackupEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeopsEtcdBackupEncryptionKeyInput() {
    return this._gkeopsEtcdBackupEncryptionKey;
  }

  // service_account_signing_keys - computed: false, optional: true, required: false
  private _serviceAccountSigningKeys?: string[]; 
  public get serviceAccountSigningKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_signing_keys'));
  }
  public set serviceAccountSigningKeys(value: string[]) {
    this._serviceAccountSigningKeys = value;
  }
  public resetServiceAccountSigningKeys() {
    this._serviceAccountSigningKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSigningKeysInput() {
    return this._serviceAccountSigningKeys;
  }

  // service_account_verification_keys - computed: false, optional: true, required: false
  private _serviceAccountVerificationKeys?: string[]; 
  public get serviceAccountVerificationKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_verification_keys'));
  }
  public set serviceAccountVerificationKeys(value: string[]) {
    this._serviceAccountVerificationKeys = value;
  }
  public resetServiceAccountVerificationKeys() {
    this._serviceAccountVerificationKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountVerificationKeysInput() {
    return this._serviceAccountVerificationKeys;
  }
}
export interface GoogleContainerClusterVerticalPodAutoscaling {
  /**
  * Enables vertical pod autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enabled GoogleContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleContainerClusterVerticalPodAutoscalingToTerraform(struct?: GoogleContainerClusterVerticalPodAutoscalingOutputReference | GoogleContainerClusterVerticalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerClusterVerticalPodAutoscalingToHclTerraform(struct?: GoogleContainerClusterVerticalPodAutoscalingOutputReference | GoogleContainerClusterVerticalPodAutoscaling): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterVerticalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterVerticalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterVerticalPodAutoscaling | undefined) {
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
export interface GoogleContainerClusterWorkloadAltsConfig {
  /**
  * Whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workloadPool must be non-empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#enable_alts GoogleContainerCluster#enable_alts}
  */
  readonly enableAlts: boolean | cdktf.IResolvable;
}

export function googleContainerClusterWorkloadAltsConfigToTerraform(struct?: GoogleContainerClusterWorkloadAltsConfigOutputReference | GoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_alts: cdktf.booleanToTerraform(struct!.enableAlts),
  }
}


export function googleContainerClusterWorkloadAltsConfigToHclTerraform(struct?: GoogleContainerClusterWorkloadAltsConfigOutputReference | GoogleContainerClusterWorkloadAltsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_alts: {
      value: cdktf.booleanToHclTerraform(struct!.enableAlts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterWorkloadAltsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterWorkloadAltsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAlts !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAlts = this._enableAlts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterWorkloadAltsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAlts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAlts = value.enableAlts;
    }
  }

  // enable_alts - computed: false, optional: false, required: true
  private _enableAlts?: boolean | cdktf.IResolvable; 
  public get enableAlts() {
    return this.getBooleanAttribute('enable_alts');
  }
  public set enableAlts(value: boolean | cdktf.IResolvable) {
    this._enableAlts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAltsInput() {
    return this._enableAlts;
  }
}
export interface GoogleContainerClusterWorkloadIdentityConfig {
  /**
  * The workload pool to attach all Kubernetes service accounts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_container_cluster#workload_pool GoogleContainerCluster#workload_pool}
  */
  readonly workloadPool?: string;
}

export function googleContainerClusterWorkloadIdentityConfigToTerraform(struct?: GoogleContainerClusterWorkloadIdentityConfigOutputReference | GoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_pool: cdktf.stringToTerraform(struct!.workloadPool),
  }
}


export function googleContainerClusterWorkloadIdentityConfigToHclTerraform(struct?: GoogleContainerClusterWorkloadIdentityConfigOutputReference | GoogleContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_pool: {
      value: cdktf.stringToHclTerraform(struct!.workloadPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadPool = this._workloadPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadPool = value.workloadPool;
    }
  }

  // workload_pool - computed: false, optional: true, required: false
  private _workloadPool?: string; 
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
  public set workloadPool(value: string) {
    this._workloadPool = value;
  }
  public resetWorkloadPool() {
    this._workloadPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolInput() {
    return this._workloadPool;
  }
}
