/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { GoogleContainerClusterAddonsConfig, 
googleContainerClusterAddonsConfigToTerraform, 
googleContainerClusterAddonsConfigToHclTerraform, 
GoogleContainerClusterAddonsConfigOutputReference, 
GoogleContainerClusterAuthenticatorGroupsConfig, 
googleContainerClusterAuthenticatorGroupsConfigToTerraform, 
googleContainerClusterAuthenticatorGroupsConfigToHclTerraform, 
GoogleContainerClusterAuthenticatorGroupsConfigOutputReference, 
GoogleContainerClusterBinaryAuthorization, 
googleContainerClusterBinaryAuthorizationToTerraform, 
googleContainerClusterBinaryAuthorizationToHclTerraform, 
GoogleContainerClusterBinaryAuthorizationOutputReference, 
GoogleContainerClusterClusterAutoscaling, 
googleContainerClusterClusterAutoscalingToTerraform, 
googleContainerClusterClusterAutoscalingToHclTerraform, 
GoogleContainerClusterClusterAutoscalingOutputReference, 
GoogleContainerClusterClusterTelemetry, 
googleContainerClusterClusterTelemetryToTerraform, 
googleContainerClusterClusterTelemetryToHclTerraform, 
GoogleContainerClusterClusterTelemetryOutputReference, 
GoogleContainerClusterConfidentialNodes, 
googleContainerClusterConfidentialNodesToTerraform, 
googleContainerClusterConfidentialNodesToHclTerraform, 
GoogleContainerClusterConfidentialNodesOutputReference, 
GoogleContainerClusterControlPlaneEndpointsConfig, 
googleContainerClusterControlPlaneEndpointsConfigToTerraform, 
googleContainerClusterControlPlaneEndpointsConfigToHclTerraform, 
GoogleContainerClusterControlPlaneEndpointsConfigOutputReference, 
GoogleContainerClusterCostManagementConfig, 
googleContainerClusterCostManagementConfigToTerraform, 
googleContainerClusterCostManagementConfigToHclTerraform, 
GoogleContainerClusterCostManagementConfigOutputReference, 
GoogleContainerClusterDatabaseEncryption, 
googleContainerClusterDatabaseEncryptionToTerraform, 
googleContainerClusterDatabaseEncryptionToHclTerraform, 
GoogleContainerClusterDatabaseEncryptionOutputReference, 
GoogleContainerClusterDefaultSnatStatus, 
googleContainerClusterDefaultSnatStatusToTerraform, 
googleContainerClusterDefaultSnatStatusToHclTerraform, 
GoogleContainerClusterDefaultSnatStatusOutputReference, 
GoogleContainerClusterDnsConfig, 
googleContainerClusterDnsConfigToTerraform, 
googleContainerClusterDnsConfigToHclTerraform, 
GoogleContainerClusterDnsConfigOutputReference, 
GoogleContainerClusterEnableK8SBetaApis, 
googleContainerClusterEnableK8SBetaApisToTerraform, 
googleContainerClusterEnableK8SBetaApisToHclTerraform, 
GoogleContainerClusterEnableK8SBetaApisOutputReference, 
GoogleContainerClusterEnterpriseConfig, 
googleContainerClusterEnterpriseConfigToTerraform, 
googleContainerClusterEnterpriseConfigToHclTerraform, 
GoogleContainerClusterEnterpriseConfigOutputReference, 
GoogleContainerClusterFleet, 
googleContainerClusterFleetToTerraform, 
googleContainerClusterFleetToHclTerraform, 
GoogleContainerClusterFleetOutputReference, 
GoogleContainerClusterGatewayApiConfig, 
googleContainerClusterGatewayApiConfigToTerraform, 
googleContainerClusterGatewayApiConfigToHclTerraform, 
GoogleContainerClusterGatewayApiConfigOutputReference, 
GoogleContainerClusterIdentityServiceConfig, 
googleContainerClusterIdentityServiceConfigToTerraform, 
googleContainerClusterIdentityServiceConfigToHclTerraform, 
GoogleContainerClusterIdentityServiceConfigOutputReference, 
GoogleContainerClusterIpAllocationPolicy, 
googleContainerClusterIpAllocationPolicyToTerraform, 
googleContainerClusterIpAllocationPolicyToHclTerraform, 
GoogleContainerClusterIpAllocationPolicyOutputReference, 
GoogleContainerClusterLoggingConfig, 
googleContainerClusterLoggingConfigToTerraform, 
googleContainerClusterLoggingConfigToHclTerraform, 
GoogleContainerClusterLoggingConfigOutputReference, 
GoogleContainerClusterMaintenancePolicy, 
googleContainerClusterMaintenancePolicyToTerraform, 
googleContainerClusterMaintenancePolicyToHclTerraform, 
GoogleContainerClusterMaintenancePolicyOutputReference, 
GoogleContainerClusterMasterAuth, 
googleContainerClusterMasterAuthToTerraform, 
googleContainerClusterMasterAuthToHclTerraform, 
GoogleContainerClusterMasterAuthOutputReference, 
GoogleContainerClusterMasterAuthorizedNetworksConfig, 
googleContainerClusterMasterAuthorizedNetworksConfigToTerraform, 
googleContainerClusterMasterAuthorizedNetworksConfigToHclTerraform, 
GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference, 
GoogleContainerClusterMeshCertificates, 
googleContainerClusterMeshCertificatesToTerraform, 
googleContainerClusterMeshCertificatesToHclTerraform, 
GoogleContainerClusterMeshCertificatesOutputReference, 
GoogleContainerClusterMonitoringConfig, 
googleContainerClusterMonitoringConfigToTerraform, 
googleContainerClusterMonitoringConfigToHclTerraform, 
GoogleContainerClusterMonitoringConfigOutputReference, 
GoogleContainerClusterNetworkPerformanceConfig, 
googleContainerClusterNetworkPerformanceConfigToTerraform, 
googleContainerClusterNetworkPerformanceConfigToHclTerraform, 
GoogleContainerClusterNetworkPerformanceConfigOutputReference, 
GoogleContainerClusterNetworkPolicy, 
googleContainerClusterNetworkPolicyToTerraform, 
googleContainerClusterNetworkPolicyToHclTerraform, 
GoogleContainerClusterNetworkPolicyOutputReference, 
GoogleContainerClusterNodeConfig, 
googleContainerClusterNodeConfigToTerraform, 
googleContainerClusterNodeConfigToHclTerraform, 
GoogleContainerClusterNodeConfigOutputReference, 
GoogleContainerClusterNodePool, 
googleContainerClusterNodePoolToTerraform, 
googleContainerClusterNodePoolToHclTerraform, 
GoogleContainerClusterNodePoolList, 
GoogleContainerClusterNodePoolAutoConfig, 
googleContainerClusterNodePoolAutoConfigToTerraform, 
googleContainerClusterNodePoolAutoConfigToHclTerraform, 
GoogleContainerClusterNodePoolAutoConfigOutputReference, 
GoogleContainerClusterNodePoolDefaults, 
googleContainerClusterNodePoolDefaultsToTerraform, 
googleContainerClusterNodePoolDefaultsToHclTerraform, 
GoogleContainerClusterNodePoolDefaultsOutputReference, 
GoogleContainerClusterNotificationConfig, 
googleContainerClusterNotificationConfigToTerraform, 
googleContainerClusterNotificationConfigToHclTerraform, 
GoogleContainerClusterNotificationConfigOutputReference, 
GoogleContainerClusterPodAutoscaling, 
googleContainerClusterPodAutoscalingToTerraform, 
googleContainerClusterPodAutoscalingToHclTerraform, 
GoogleContainerClusterPodAutoscalingOutputReference, 
GoogleContainerClusterPodSecurityPolicyConfig, 
googleContainerClusterPodSecurityPolicyConfigToTerraform, 
googleContainerClusterPodSecurityPolicyConfigToHclTerraform, 
GoogleContainerClusterPodSecurityPolicyConfigOutputReference, 
GoogleContainerClusterPrivateClusterConfig, 
googleContainerClusterPrivateClusterConfigToTerraform, 
googleContainerClusterPrivateClusterConfigToHclTerraform, 
GoogleContainerClusterPrivateClusterConfigOutputReference, 
GoogleContainerClusterProtectConfig, 
googleContainerClusterProtectConfigToTerraform, 
googleContainerClusterProtectConfigToHclTerraform, 
GoogleContainerClusterProtectConfigOutputReference, 
GoogleContainerClusterReleaseChannel, 
googleContainerClusterReleaseChannelToTerraform, 
googleContainerClusterReleaseChannelToHclTerraform, 
GoogleContainerClusterReleaseChannelOutputReference, 
GoogleContainerClusterResourceUsageExportConfig, 
googleContainerClusterResourceUsageExportConfigToTerraform, 
googleContainerClusterResourceUsageExportConfigToHclTerraform, 
GoogleContainerClusterResourceUsageExportConfigOutputReference, 
GoogleContainerClusterSecretManagerConfig, 
googleContainerClusterSecretManagerConfigToTerraform, 
googleContainerClusterSecretManagerConfigToHclTerraform, 
GoogleContainerClusterSecretManagerConfigOutputReference, 
GoogleContainerClusterSecurityPostureConfig, 
googleContainerClusterSecurityPostureConfigToTerraform, 
googleContainerClusterSecurityPostureConfigToHclTerraform, 
GoogleContainerClusterSecurityPostureConfigOutputReference, 
GoogleContainerClusterServiceExternalIpsConfig, 
googleContainerClusterServiceExternalIpsConfigToTerraform, 
googleContainerClusterServiceExternalIpsConfigToHclTerraform, 
GoogleContainerClusterServiceExternalIpsConfigOutputReference, 
GoogleContainerClusterTimeouts, 
googleContainerClusterTimeoutsToTerraform, 
googleContainerClusterTimeoutsToHclTerraform, 
GoogleContainerClusterTimeoutsOutputReference, 
GoogleContainerClusterTpuConfig, 
googleContainerClusterTpuConfigToTerraform, 
googleContainerClusterTpuConfigToHclTerraform, 
GoogleContainerClusterTpuConfigOutputReference, 
GoogleContainerClusterUserManagedKeysConfig, 
googleContainerClusterUserManagedKeysConfigToTerraform, 
googleContainerClusterUserManagedKeysConfigToHclTerraform, 
GoogleContainerClusterUserManagedKeysConfigOutputReference, 
GoogleContainerClusterVerticalPodAutoscaling, 
googleContainerClusterVerticalPodAutoscalingToTerraform, 
googleContainerClusterVerticalPodAutoscalingToHclTerraform, 
GoogleContainerClusterVerticalPodAutoscalingOutputReference, 
GoogleContainerClusterWorkloadAltsConfig, 
googleContainerClusterWorkloadAltsConfigToTerraform, 
googleContainerClusterWorkloadAltsConfigToHclTerraform, 
GoogleContainerClusterWorkloadAltsConfigOutputReference, 
GoogleContainerClusterWorkloadIdentityConfig, 
googleContainerClusterWorkloadIdentityConfigToTerraform, 
googleContainerClusterWorkloadIdentityConfigToHclTerraform, 
GoogleContainerClusterWorkloadIdentityConfigOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GoogleContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable NET_ADMIN for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#allow_net_admin GoogleContainerCluster#allow_net_admin}
  */
  readonly allowNetAdmin?: boolean | cdktf.IResolvable;
  /**
  * The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#cluster_ipv4_cidr GoogleContainerCluster#cluster_ipv4_cidr}
  */
  readonly clusterIpv4Cidr?: string;
  /**
  * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#datapath_provider GoogleContainerCluster#datapath_provider}
  */
  readonly datapathProvider?: string;
  /**
  * The default maximum number of pods per node in this cluster. This doesn't work on "routes-based" clusters, clusters that don't have IP Aliasing enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#default_max_pods_per_node GoogleContainerCluster#default_max_pods_per_node}
  */
  readonly defaultMaxPodsPerNode?: number;
  /**
  * When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the cluster will fail. When the field is set to false, deleting the cluster is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#deletion_protection GoogleContainerCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  *  Description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#description GoogleContainerCluster#description}
  */
  readonly description?: string;
  /**
  * Disable L4 load balancer VPC firewalls to enable firewall policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#disable_l4_lb_firewall_reconciliation GoogleContainerCluster#disable_l4_lb_firewall_reconciliation}
  */
  readonly disableL4LbFirewallReconciliation?: boolean | cdktf.IResolvable;
  /**
  * Enable Autopilot for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_autopilot GoogleContainerCluster#enable_autopilot}
  */
  readonly enableAutopilot?: boolean | cdktf.IResolvable;
  /**
  * Whether Cilium cluster-wide network policy is enabled on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_cilium_clusterwide_network_policy GoogleContainerCluster#enable_cilium_clusterwide_network_policy}
  */
  readonly enableCiliumClusterwideNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Whether FQDN Network Policy is enabled on this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_fqdn_network_policy GoogleContainerCluster#enable_fqdn_network_policy}
  */
  readonly enableFqdnNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_intranode_visibility GoogleContainerCluster#enable_intranode_visibility}
  */
  readonly enableIntranodeVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Kubernetes Alpha features for this cluster. Note that when this option is enabled, the cluster cannot be upgraded and will be automatically deleted after 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_kubernetes_alpha GoogleContainerCluster#enable_kubernetes_alpha}
  */
  readonly enableKubernetesAlpha?: boolean | cdktf.IResolvable;
  /**
  * Whether L4ILB Subsetting is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_l4_ilb_subsetting GoogleContainerCluster#enable_l4_ilb_subsetting}
  */
  readonly enableL4IlbSubsetting?: boolean | cdktf.IResolvable;
  /**
  * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_legacy_abac GoogleContainerCluster#enable_legacy_abac}
  */
  readonly enableLegacyAbac?: boolean | cdktf.IResolvable;
  /**
  * Whether multi-networking is enabled for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_multi_networking GoogleContainerCluster#enable_multi_networking}
  */
  readonly enableMultiNetworking?: boolean | cdktf.IResolvable;
  /**
  * Enable Shielded Nodes features on all nodes in this cluster. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_shielded_nodes GoogleContainerCluster#enable_shielded_nodes}
  */
  readonly enableShieldedNodes?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Cloud TPU resources in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_tpu GoogleContainerCluster#enable_tpu}
  */
  readonly enableTpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#id GoogleContainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines the config of in-transit encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#in_transit_encryption_config GoogleContainerCluster#in_transit_encryption_config}
  */
  readonly inTransitEncryptionConfig?: string;
  /**
  * The number of nodes to create in this cluster's default node pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Must be set if node_pool is not set. If you're using google_container_node_pool objects with no default node pool, you'll need to set this to a value of at least 1, alongside setting remove_default_node_pool to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#initial_node_count GoogleContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#location GoogleContainerCluster#location}
  */
  readonly location?: string;
  /**
  * The logging service that the cluster should write logs to. Available options include logging.googleapis.com(Legacy Stackdriver), logging.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Logging), and none. Defaults to logging.googleapis.com/kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#logging_service GoogleContainerCluster#logging_service}
  */
  readonly loggingService?: string;
  /**
  * The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster's version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#min_master_version GoogleContainerCluster#min_master_version}
  */
  readonly minMasterVersion?: string;
  /**
  * The monitoring service that the cluster should write metrics to. Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting Available options include monitoring.googleapis.com(Legacy Stackdriver), monitoring.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Monitoring), and none. Defaults to monitoring.googleapis.com/kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#monitoring_service GoogleContainerCluster#monitoring_service}
  */
  readonly monitoringService?: string;
  /**
  * The name of the cluster, unique within the project and location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#name GoogleContainerCluster#name}
  */
  readonly name: string;
  /**
  * The name or self_link of the Google Compute Engine network to which the cluster is connected. For Shared VPC, set this to the self link of the shared network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#network GoogleContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Determines whether alias IPs or routes will be used for pod IPs in the cluster. Defaults to VPC_NATIVE for new clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#networking_mode GoogleContainerCluster#networking_mode}
  */
  readonly networkingMode?: string;
  /**
  * The list of zones in which the cluster's nodes are located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If this is specified for a zonal cluster, omit the cluster's zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#node_locations GoogleContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version on the nodes. Must either be unset or set to the same value as min_master_version on create. Defaults to the default version set by GKE which is not necessarily the latest version. This only affects nodes in the default node pool. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. To update nodes in other node pools, use the version attribute on the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#node_version GoogleContainerCluster#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#private_ipv6_google_access GoogleContainerCluster#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#project GoogleContainerCluster#project}
  */
  readonly project?: string;
  /**
  * If true, deletes the default node pool upon cluster creation. If you're using google_container_node_pool resources with no default node pool, this should be set to true, alongside setting initial_node_count to at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#remove_default_node_pool GoogleContainerCluster#remove_default_node_pool}
  */
  readonly removeDefaultNodePool?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  * 
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#resource_labels GoogleContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * The name or self_link of the Google Compute Engine subnetwork in which the cluster's instances are launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#subnetwork GoogleContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * addons_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#addons_config GoogleContainerCluster#addons_config}
  */
  readonly addonsConfig?: GoogleContainerClusterAddonsConfig;
  /**
  * authenticator_groups_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#authenticator_groups_config GoogleContainerCluster#authenticator_groups_config}
  */
  readonly authenticatorGroupsConfig?: GoogleContainerClusterAuthenticatorGroupsConfig;
  /**
  * binary_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#binary_authorization GoogleContainerCluster#binary_authorization}
  */
  readonly binaryAuthorization?: GoogleContainerClusterBinaryAuthorization;
  /**
  * cluster_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#cluster_autoscaling GoogleContainerCluster#cluster_autoscaling}
  */
  readonly clusterAutoscaling?: GoogleContainerClusterClusterAutoscaling;
  /**
  * cluster_telemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#cluster_telemetry GoogleContainerCluster#cluster_telemetry}
  */
  readonly clusterTelemetry?: GoogleContainerClusterClusterTelemetry;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#confidential_nodes GoogleContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: GoogleContainerClusterConfidentialNodes;
  /**
  * control_plane_endpoints_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#control_plane_endpoints_config GoogleContainerCluster#control_plane_endpoints_config}
  */
  readonly controlPlaneEndpointsConfig?: GoogleContainerClusterControlPlaneEndpointsConfig;
  /**
  * cost_management_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#cost_management_config GoogleContainerCluster#cost_management_config}
  */
  readonly costManagementConfig?: GoogleContainerClusterCostManagementConfig;
  /**
  * database_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#database_encryption GoogleContainerCluster#database_encryption}
  */
  readonly databaseEncryption?: GoogleContainerClusterDatabaseEncryption;
  /**
  * default_snat_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#default_snat_status GoogleContainerCluster#default_snat_status}
  */
  readonly defaultSnatStatus?: GoogleContainerClusterDefaultSnatStatus;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#dns_config GoogleContainerCluster#dns_config}
  */
  readonly dnsConfig?: GoogleContainerClusterDnsConfig;
  /**
  * enable_k8s_beta_apis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enable_k8s_beta_apis GoogleContainerCluster#enable_k8s_beta_apis}
  */
  readonly enableK8SBetaApis?: GoogleContainerClusterEnableK8SBetaApis;
  /**
  * enterprise_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#enterprise_config GoogleContainerCluster#enterprise_config}
  */
  readonly enterpriseConfig?: GoogleContainerClusterEnterpriseConfig;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#fleet GoogleContainerCluster#fleet}
  */
  readonly fleet?: GoogleContainerClusterFleet;
  /**
  * gateway_api_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#gateway_api_config GoogleContainerCluster#gateway_api_config}
  */
  readonly gatewayApiConfig?: GoogleContainerClusterGatewayApiConfig;
  /**
  * identity_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#identity_service_config GoogleContainerCluster#identity_service_config}
  */
  readonly identityServiceConfig?: GoogleContainerClusterIdentityServiceConfig;
  /**
  * ip_allocation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#ip_allocation_policy GoogleContainerCluster#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: GoogleContainerClusterIpAllocationPolicy;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#logging_config GoogleContainerCluster#logging_config}
  */
  readonly loggingConfig?: GoogleContainerClusterLoggingConfig;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#maintenance_policy GoogleContainerCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: GoogleContainerClusterMaintenancePolicy;
  /**
  * master_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#master_auth GoogleContainerCluster#master_auth}
  */
  readonly masterAuth?: GoogleContainerClusterMasterAuth;
  /**
  * master_authorized_networks_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#master_authorized_networks_config GoogleContainerCluster#master_authorized_networks_config}
  */
  readonly masterAuthorizedNetworksConfig?: GoogleContainerClusterMasterAuthorizedNetworksConfig;
  /**
  * mesh_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#mesh_certificates GoogleContainerCluster#mesh_certificates}
  */
  readonly meshCertificates?: GoogleContainerClusterMeshCertificates;
  /**
  * monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#monitoring_config GoogleContainerCluster#monitoring_config}
  */
  readonly monitoringConfig?: GoogleContainerClusterMonitoringConfig;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#network_performance_config GoogleContainerCluster#network_performance_config}
  */
  readonly networkPerformanceConfig?: GoogleContainerClusterNetworkPerformanceConfig;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#network_policy GoogleContainerCluster#network_policy}
  */
  readonly networkPolicy?: GoogleContainerClusterNetworkPolicy;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#node_config GoogleContainerCluster#node_config}
  */
  readonly nodeConfig?: GoogleContainerClusterNodeConfig;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#node_pool GoogleContainerCluster#node_pool}
  */
  readonly nodePool?: GoogleContainerClusterNodePool[] | cdktf.IResolvable;
  /**
  * node_pool_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#node_pool_auto_config GoogleContainerCluster#node_pool_auto_config}
  */
  readonly nodePoolAutoConfig?: GoogleContainerClusterNodePoolAutoConfig;
  /**
  * node_pool_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#node_pool_defaults GoogleContainerCluster#node_pool_defaults}
  */
  readonly nodePoolDefaults?: GoogleContainerClusterNodePoolDefaults;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#notification_config GoogleContainerCluster#notification_config}
  */
  readonly notificationConfig?: GoogleContainerClusterNotificationConfig;
  /**
  * pod_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#pod_autoscaling GoogleContainerCluster#pod_autoscaling}
  */
  readonly podAutoscaling?: GoogleContainerClusterPodAutoscaling;
  /**
  * pod_security_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#pod_security_policy_config GoogleContainerCluster#pod_security_policy_config}
  */
  readonly podSecurityPolicyConfig?: GoogleContainerClusterPodSecurityPolicyConfig;
  /**
  * private_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#private_cluster_config GoogleContainerCluster#private_cluster_config}
  */
  readonly privateClusterConfig?: GoogleContainerClusterPrivateClusterConfig;
  /**
  * protect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#protect_config GoogleContainerCluster#protect_config}
  */
  readonly protectConfig?: GoogleContainerClusterProtectConfig;
  /**
  * release_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#release_channel GoogleContainerCluster#release_channel}
  */
  readonly releaseChannel?: GoogleContainerClusterReleaseChannel;
  /**
  * resource_usage_export_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#resource_usage_export_config GoogleContainerCluster#resource_usage_export_config}
  */
  readonly resourceUsageExportConfig?: GoogleContainerClusterResourceUsageExportConfig;
  /**
  * secret_manager_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#secret_manager_config GoogleContainerCluster#secret_manager_config}
  */
  readonly secretManagerConfig?: GoogleContainerClusterSecretManagerConfig;
  /**
  * security_posture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#security_posture_config GoogleContainerCluster#security_posture_config}
  */
  readonly securityPostureConfig?: GoogleContainerClusterSecurityPostureConfig;
  /**
  * service_external_ips_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#service_external_ips_config GoogleContainerCluster#service_external_ips_config}
  */
  readonly serviceExternalIpsConfig?: GoogleContainerClusterServiceExternalIpsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#timeouts GoogleContainerCluster#timeouts}
  */
  readonly timeouts?: GoogleContainerClusterTimeouts;
  /**
  * tpu_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#tpu_config GoogleContainerCluster#tpu_config}
  */
  readonly tpuConfig?: GoogleContainerClusterTpuConfig;
  /**
  * user_managed_keys_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#user_managed_keys_config GoogleContainerCluster#user_managed_keys_config}
  */
  readonly userManagedKeysConfig?: GoogleContainerClusterUserManagedKeysConfig;
  /**
  * vertical_pod_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#vertical_pod_autoscaling GoogleContainerCluster#vertical_pod_autoscaling}
  */
  readonly verticalPodAutoscaling?: GoogleContainerClusterVerticalPodAutoscaling;
  /**
  * workload_alts_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#workload_alts_config GoogleContainerCluster#workload_alts_config}
  */
  readonly workloadAltsConfig?: GoogleContainerClusterWorkloadAltsConfig;
  /**
  * workload_identity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#workload_identity_config GoogleContainerCluster#workload_identity_config}
  */
  readonly workloadIdentityConfig?: GoogleContainerClusterWorkloadIdentityConfig;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster google_container_cluster}
*/
export class GoogleContainerCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleContainerCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleContainerCluster to import
  * @param importFromId The id of the existing GoogleContainerCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleContainerCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_container_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_cluster google_container_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleContainerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleContainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_cluster',
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
    this._allowNetAdmin = config.allowNetAdmin;
    this._clusterIpv4Cidr = config.clusterIpv4Cidr;
    this._datapathProvider = config.datapathProvider;
    this._defaultMaxPodsPerNode = config.defaultMaxPodsPerNode;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._disableL4LbFirewallReconciliation = config.disableL4LbFirewallReconciliation;
    this._enableAutopilot = config.enableAutopilot;
    this._enableCiliumClusterwideNetworkPolicy = config.enableCiliumClusterwideNetworkPolicy;
    this._enableFqdnNetworkPolicy = config.enableFqdnNetworkPolicy;
    this._enableIntranodeVisibility = config.enableIntranodeVisibility;
    this._enableKubernetesAlpha = config.enableKubernetesAlpha;
    this._enableL4IlbSubsetting = config.enableL4IlbSubsetting;
    this._enableLegacyAbac = config.enableLegacyAbac;
    this._enableMultiNetworking = config.enableMultiNetworking;
    this._enableShieldedNodes = config.enableShieldedNodes;
    this._enableTpu = config.enableTpu;
    this._id = config.id;
    this._inTransitEncryptionConfig = config.inTransitEncryptionConfig;
    this._initialNodeCount = config.initialNodeCount;
    this._location = config.location;
    this._loggingService = config.loggingService;
    this._minMasterVersion = config.minMasterVersion;
    this._monitoringService = config.monitoringService;
    this._name = config.name;
    this._network = config.network;
    this._networkingMode = config.networkingMode;
    this._nodeLocations = config.nodeLocations;
    this._nodeVersion = config.nodeVersion;
    this._privateIpv6GoogleAccess = config.privateIpv6GoogleAccess;
    this._project = config.project;
    this._removeDefaultNodePool = config.removeDefaultNodePool;
    this._resourceLabels = config.resourceLabels;
    this._subnetwork = config.subnetwork;
    this._addonsConfig.internalValue = config.addonsConfig;
    this._authenticatorGroupsConfig.internalValue = config.authenticatorGroupsConfig;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._clusterAutoscaling.internalValue = config.clusterAutoscaling;
    this._clusterTelemetry.internalValue = config.clusterTelemetry;
    this._confidentialNodes.internalValue = config.confidentialNodes;
    this._controlPlaneEndpointsConfig.internalValue = config.controlPlaneEndpointsConfig;
    this._costManagementConfig.internalValue = config.costManagementConfig;
    this._databaseEncryption.internalValue = config.databaseEncryption;
    this._defaultSnatStatus.internalValue = config.defaultSnatStatus;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._enableK8SBetaApis.internalValue = config.enableK8SBetaApis;
    this._enterpriseConfig.internalValue = config.enterpriseConfig;
    this._fleet.internalValue = config.fleet;
    this._gatewayApiConfig.internalValue = config.gatewayApiConfig;
    this._identityServiceConfig.internalValue = config.identityServiceConfig;
    this._ipAllocationPolicy.internalValue = config.ipAllocationPolicy;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._masterAuth.internalValue = config.masterAuth;
    this._masterAuthorizedNetworksConfig.internalValue = config.masterAuthorizedNetworksConfig;
    this._meshCertificates.internalValue = config.meshCertificates;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._networkPerformanceConfig.internalValue = config.networkPerformanceConfig;
    this._networkPolicy.internalValue = config.networkPolicy;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._nodePool.internalValue = config.nodePool;
    this._nodePoolAutoConfig.internalValue = config.nodePoolAutoConfig;
    this._nodePoolDefaults.internalValue = config.nodePoolDefaults;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._podAutoscaling.internalValue = config.podAutoscaling;
    this._podSecurityPolicyConfig.internalValue = config.podSecurityPolicyConfig;
    this._privateClusterConfig.internalValue = config.privateClusterConfig;
    this._protectConfig.internalValue = config.protectConfig;
    this._releaseChannel.internalValue = config.releaseChannel;
    this._resourceUsageExportConfig.internalValue = config.resourceUsageExportConfig;
    this._secretManagerConfig.internalValue = config.secretManagerConfig;
    this._securityPostureConfig.internalValue = config.securityPostureConfig;
    this._serviceExternalIpsConfig.internalValue = config.serviceExternalIpsConfig;
    this._timeouts.internalValue = config.timeouts;
    this._tpuConfig.internalValue = config.tpuConfig;
    this._userManagedKeysConfig.internalValue = config.userManagedKeysConfig;
    this._verticalPodAutoscaling.internalValue = config.verticalPodAutoscaling;
    this._workloadAltsConfig.internalValue = config.workloadAltsConfig;
    this._workloadIdentityConfig.internalValue = config.workloadIdentityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_net_admin - computed: false, optional: true, required: false
  private _allowNetAdmin?: boolean | cdktf.IResolvable; 
  public get allowNetAdmin() {
    return this.getBooleanAttribute('allow_net_admin');
  }
  public set allowNetAdmin(value: boolean | cdktf.IResolvable) {
    this._allowNetAdmin = value;
  }
  public resetAllowNetAdmin() {
    this._allowNetAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNetAdminInput() {
    return this._allowNetAdmin;
  }

  // cluster_ipv4_cidr - computed: true, optional: true, required: false
  private _clusterIpv4Cidr?: string; 
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }
  public set clusterIpv4Cidr(value: string) {
    this._clusterIpv4Cidr = value;
  }
  public resetClusterIpv4Cidr() {
    this._clusterIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrInput() {
    return this._clusterIpv4Cidr;
  }

  // datapath_provider - computed: true, optional: true, required: false
  private _datapathProvider?: string; 
  public get datapathProvider() {
    return this.getStringAttribute('datapath_provider');
  }
  public set datapathProvider(value: string) {
    this._datapathProvider = value;
  }
  public resetDatapathProvider() {
    this._datapathProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathProviderInput() {
    return this._datapathProvider;
  }

  // default_max_pods_per_node - computed: true, optional: true, required: false
  private _defaultMaxPodsPerNode?: number; 
  public get defaultMaxPodsPerNode() {
    return this.getNumberAttribute('default_max_pods_per_node');
  }
  public set defaultMaxPodsPerNode(value: number) {
    this._defaultMaxPodsPerNode = value;
  }
  public resetDefaultMaxPodsPerNode() {
    this._defaultMaxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaxPodsPerNodeInput() {
    return this._defaultMaxPodsPerNode;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // disable_l4_lb_firewall_reconciliation - computed: false, optional: true, required: false
  private _disableL4LbFirewallReconciliation?: boolean | cdktf.IResolvable; 
  public get disableL4LbFirewallReconciliation() {
    return this.getBooleanAttribute('disable_l4_lb_firewall_reconciliation');
  }
  public set disableL4LbFirewallReconciliation(value: boolean | cdktf.IResolvable) {
    this._disableL4LbFirewallReconciliation = value;
  }
  public resetDisableL4LbFirewallReconciliation() {
    this._disableL4LbFirewallReconciliation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableL4LbFirewallReconciliationInput() {
    return this._disableL4LbFirewallReconciliation;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_autopilot - computed: false, optional: true, required: false
  private _enableAutopilot?: boolean | cdktf.IResolvable; 
  public get enableAutopilot() {
    return this.getBooleanAttribute('enable_autopilot');
  }
  public set enableAutopilot(value: boolean | cdktf.IResolvable) {
    this._enableAutopilot = value;
  }
  public resetEnableAutopilot() {
    this._enableAutopilot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutopilotInput() {
    return this._enableAutopilot;
  }

  // enable_cilium_clusterwide_network_policy - computed: false, optional: true, required: false
  private _enableCiliumClusterwideNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get enableCiliumClusterwideNetworkPolicy() {
    return this.getBooleanAttribute('enable_cilium_clusterwide_network_policy');
  }
  public set enableCiliumClusterwideNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._enableCiliumClusterwideNetworkPolicy = value;
  }
  public resetEnableCiliumClusterwideNetworkPolicy() {
    this._enableCiliumClusterwideNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCiliumClusterwideNetworkPolicyInput() {
    return this._enableCiliumClusterwideNetworkPolicy;
  }

  // enable_fqdn_network_policy - computed: false, optional: true, required: false
  private _enableFqdnNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get enableFqdnNetworkPolicy() {
    return this.getBooleanAttribute('enable_fqdn_network_policy');
  }
  public set enableFqdnNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._enableFqdnNetworkPolicy = value;
  }
  public resetEnableFqdnNetworkPolicy() {
    this._enableFqdnNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFqdnNetworkPolicyInput() {
    return this._enableFqdnNetworkPolicy;
  }

  // enable_intranode_visibility - computed: true, optional: true, required: false
  private _enableIntranodeVisibility?: boolean | cdktf.IResolvable; 
  public get enableIntranodeVisibility() {
    return this.getBooleanAttribute('enable_intranode_visibility');
  }
  public set enableIntranodeVisibility(value: boolean | cdktf.IResolvable) {
    this._enableIntranodeVisibility = value;
  }
  public resetEnableIntranodeVisibility() {
    this._enableIntranodeVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntranodeVisibilityInput() {
    return this._enableIntranodeVisibility;
  }

  // enable_kubernetes_alpha - computed: false, optional: true, required: false
  private _enableKubernetesAlpha?: boolean | cdktf.IResolvable; 
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
  }
  public set enableKubernetesAlpha(value: boolean | cdktf.IResolvable) {
    this._enableKubernetesAlpha = value;
  }
  public resetEnableKubernetesAlpha() {
    this._enableKubernetesAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubernetesAlphaInput() {
    return this._enableKubernetesAlpha;
  }

  // enable_l4_ilb_subsetting - computed: false, optional: true, required: false
  private _enableL4IlbSubsetting?: boolean | cdktf.IResolvable; 
  public get enableL4IlbSubsetting() {
    return this.getBooleanAttribute('enable_l4_ilb_subsetting');
  }
  public set enableL4IlbSubsetting(value: boolean | cdktf.IResolvable) {
    this._enableL4IlbSubsetting = value;
  }
  public resetEnableL4IlbSubsetting() {
    this._enableL4IlbSubsetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableL4IlbSubsettingInput() {
    return this._enableL4IlbSubsetting;
  }

  // enable_legacy_abac - computed: false, optional: true, required: false
  private _enableLegacyAbac?: boolean | cdktf.IResolvable; 
  public get enableLegacyAbac() {
    return this.getBooleanAttribute('enable_legacy_abac');
  }
  public set enableLegacyAbac(value: boolean | cdktf.IResolvable) {
    this._enableLegacyAbac = value;
  }
  public resetEnableLegacyAbac() {
    this._enableLegacyAbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyAbacInput() {
    return this._enableLegacyAbac;
  }

  // enable_multi_networking - computed: false, optional: true, required: false
  private _enableMultiNetworking?: boolean | cdktf.IResolvable; 
  public get enableMultiNetworking() {
    return this.getBooleanAttribute('enable_multi_networking');
  }
  public set enableMultiNetworking(value: boolean | cdktf.IResolvable) {
    this._enableMultiNetworking = value;
  }
  public resetEnableMultiNetworking() {
    this._enableMultiNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiNetworkingInput() {
    return this._enableMultiNetworking;
  }

  // enable_shielded_nodes - computed: false, optional: true, required: false
  private _enableShieldedNodes?: boolean | cdktf.IResolvable; 
  public get enableShieldedNodes() {
    return this.getBooleanAttribute('enable_shielded_nodes');
  }
  public set enableShieldedNodes(value: boolean | cdktf.IResolvable) {
    this._enableShieldedNodes = value;
  }
  public resetEnableShieldedNodes() {
    this._enableShieldedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShieldedNodesInput() {
    return this._enableShieldedNodes;
  }

  // enable_tpu - computed: true, optional: true, required: false
  private _enableTpu?: boolean | cdktf.IResolvable; 
  public get enableTpu() {
    return this.getBooleanAttribute('enable_tpu');
  }
  public set enableTpu(value: boolean | cdktf.IResolvable) {
    this._enableTpu = value;
  }
  public resetEnableTpu() {
    this._enableTpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTpuInput() {
    return this._enableTpu;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // in_transit_encryption_config - computed: false, optional: true, required: false
  private _inTransitEncryptionConfig?: string; 
  public get inTransitEncryptionConfig() {
    return this.getStringAttribute('in_transit_encryption_config');
  }
  public set inTransitEncryptionConfig(value: string) {
    this._inTransitEncryptionConfig = value;
  }
  public resetInTransitEncryptionConfig() {
    this._inTransitEncryptionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTransitEncryptionConfigInput() {
    return this._inTransitEncryptionConfig;
  }

  // initial_node_count - computed: false, optional: true, required: false
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

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
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

  // logging_service - computed: true, optional: true, required: false
  private _loggingService?: string; 
  public get loggingService() {
    return this.getStringAttribute('logging_service');
  }
  public set loggingService(value: string) {
    this._loggingService = value;
  }
  public resetLoggingService() {
    this._loggingService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingServiceInput() {
    return this._loggingService;
  }

  // master_version - computed: true, optional: false, required: false
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // min_master_version - computed: false, optional: true, required: false
  private _minMasterVersion?: string; 
  public get minMasterVersion() {
    return this.getStringAttribute('min_master_version');
  }
  public set minMasterVersion(value: string) {
    this._minMasterVersion = value;
  }
  public resetMinMasterVersion() {
    this._minMasterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMasterVersionInput() {
    return this._minMasterVersion;
  }

  // monitoring_service - computed: true, optional: true, required: false
  private _monitoringService?: string; 
  public get monitoringService() {
    return this.getStringAttribute('monitoring_service');
  }
  public set monitoringService(value: string) {
    this._monitoringService = value;
  }
  public resetMonitoringService() {
    this._monitoringService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringServiceInput() {
    return this._monitoringService;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // networking_mode - computed: true, optional: true, required: false
  private _networkingMode?: string; 
  public get networkingMode() {
    return this.getStringAttribute('networking_mode');
  }
  public set networkingMode(value: string) {
    this._networkingMode = value;
  }
  public resetNetworkingMode() {
    this._networkingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingModeInput() {
    return this._networkingMode;
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

  // node_version - computed: true, optional: true, required: false
  private _nodeVersion?: string; 
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }
  public set nodeVersion(value: string) {
    this._nodeVersion = value;
  }
  public resetNodeVersion() {
    this._nodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVersionInput() {
    return this._nodeVersion;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // private_ipv6_google_access - computed: true, optional: true, required: false
  private _privateIpv6GoogleAccess?: string; 
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess;
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

  // remove_default_node_pool - computed: false, optional: true, required: false
  private _removeDefaultNodePool?: boolean | cdktf.IResolvable; 
  public get removeDefaultNodePool() {
    return this.getBooleanAttribute('remove_default_node_pool');
  }
  public set removeDefaultNodePool(value: boolean | cdktf.IResolvable) {
    this._removeDefaultNodePool = value;
  }
  public resetRemoveDefaultNodePool() {
    this._removeDefaultNodePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDefaultNodePoolInput() {
    return this._removeDefaultNodePool;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // services_ipv4_cidr - computed: true, optional: false, required: false
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // tpu_ipv4_cidr_block - computed: true, optional: false, required: false
  public get tpuIpv4CidrBlock() {
    return this.getStringAttribute('tpu_ipv4_cidr_block');
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig = new GoogleContainerClusterAddonsConfigOutputReference(this, "addons_config");
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public putAddonsConfig(value: GoogleContainerClusterAddonsConfig) {
    this._addonsConfig.internalValue = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig.internalValue;
  }

  // authenticator_groups_config - computed: false, optional: true, required: false
  private _authenticatorGroupsConfig = new GoogleContainerClusterAuthenticatorGroupsConfigOutputReference(this, "authenticator_groups_config");
  public get authenticatorGroupsConfig() {
    return this._authenticatorGroupsConfig;
  }
  public putAuthenticatorGroupsConfig(value: GoogleContainerClusterAuthenticatorGroupsConfig) {
    this._authenticatorGroupsConfig.internalValue = value;
  }
  public resetAuthenticatorGroupsConfig() {
    this._authenticatorGroupsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorGroupsConfigInput() {
    return this._authenticatorGroupsConfig.internalValue;
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new GoogleContainerClusterBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: GoogleContainerClusterBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // cluster_autoscaling - computed: false, optional: true, required: false
  private _clusterAutoscaling = new GoogleContainerClusterClusterAutoscalingOutputReference(this, "cluster_autoscaling");
  public get clusterAutoscaling() {
    return this._clusterAutoscaling;
  }
  public putClusterAutoscaling(value: GoogleContainerClusterClusterAutoscaling) {
    this._clusterAutoscaling.internalValue = value;
  }
  public resetClusterAutoscaling() {
    this._clusterAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoscalingInput() {
    return this._clusterAutoscaling.internalValue;
  }

  // cluster_telemetry - computed: false, optional: true, required: false
  private _clusterTelemetry = new GoogleContainerClusterClusterTelemetryOutputReference(this, "cluster_telemetry");
  public get clusterTelemetry() {
    return this._clusterTelemetry;
  }
  public putClusterTelemetry(value: GoogleContainerClusterClusterTelemetry) {
    this._clusterTelemetry.internalValue = value;
  }
  public resetClusterTelemetry() {
    this._clusterTelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTelemetryInput() {
    return this._clusterTelemetry.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new GoogleContainerClusterConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: GoogleContainerClusterConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // control_plane_endpoints_config - computed: false, optional: true, required: false
  private _controlPlaneEndpointsConfig = new GoogleContainerClusterControlPlaneEndpointsConfigOutputReference(this, "control_plane_endpoints_config");
  public get controlPlaneEndpointsConfig() {
    return this._controlPlaneEndpointsConfig;
  }
  public putControlPlaneEndpointsConfig(value: GoogleContainerClusterControlPlaneEndpointsConfig) {
    this._controlPlaneEndpointsConfig.internalValue = value;
  }
  public resetControlPlaneEndpointsConfig() {
    this._controlPlaneEndpointsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEndpointsConfigInput() {
    return this._controlPlaneEndpointsConfig.internalValue;
  }

  // cost_management_config - computed: false, optional: true, required: false
  private _costManagementConfig = new GoogleContainerClusterCostManagementConfigOutputReference(this, "cost_management_config");
  public get costManagementConfig() {
    return this._costManagementConfig;
  }
  public putCostManagementConfig(value: GoogleContainerClusterCostManagementConfig) {
    this._costManagementConfig.internalValue = value;
  }
  public resetCostManagementConfig() {
    this._costManagementConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costManagementConfigInput() {
    return this._costManagementConfig.internalValue;
  }

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption = new GoogleContainerClusterDatabaseEncryptionOutputReference(this, "database_encryption");
  public get databaseEncryption() {
    return this._databaseEncryption;
  }
  public putDatabaseEncryption(value: GoogleContainerClusterDatabaseEncryption) {
    this._databaseEncryption.internalValue = value;
  }
  public resetDatabaseEncryption() {
    this._databaseEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEncryptionInput() {
    return this._databaseEncryption.internalValue;
  }

  // default_snat_status - computed: false, optional: true, required: false
  private _defaultSnatStatus = new GoogleContainerClusterDefaultSnatStatusOutputReference(this, "default_snat_status");
  public get defaultSnatStatus() {
    return this._defaultSnatStatus;
  }
  public putDefaultSnatStatus(value: GoogleContainerClusterDefaultSnatStatus) {
    this._defaultSnatStatus.internalValue = value;
  }
  public resetDefaultSnatStatus() {
    this._defaultSnatStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSnatStatusInput() {
    return this._defaultSnatStatus.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new GoogleContainerClusterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: GoogleContainerClusterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // enable_k8s_beta_apis - computed: false, optional: true, required: false
  private _enableK8SBetaApis = new GoogleContainerClusterEnableK8SBetaApisOutputReference(this, "enable_k8s_beta_apis");
  public get enableK8SBetaApis() {
    return this._enableK8SBetaApis;
  }
  public putEnableK8SBetaApis(value: GoogleContainerClusterEnableK8SBetaApis) {
    this._enableK8SBetaApis.internalValue = value;
  }
  public resetEnableK8SBetaApis() {
    this._enableK8SBetaApis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableK8SBetaApisInput() {
    return this._enableK8SBetaApis.internalValue;
  }

  // enterprise_config - computed: false, optional: true, required: false
  private _enterpriseConfig = new GoogleContainerClusterEnterpriseConfigOutputReference(this, "enterprise_config");
  public get enterpriseConfig() {
    return this._enterpriseConfig;
  }
  public putEnterpriseConfig(value: GoogleContainerClusterEnterpriseConfig) {
    this._enterpriseConfig.internalValue = value;
  }
  public resetEnterpriseConfig() {
    this._enterpriseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseConfigInput() {
    return this._enterpriseConfig.internalValue;
  }

  // fleet - computed: false, optional: true, required: false
  private _fleet = new GoogleContainerClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: GoogleContainerClusterFleet) {
    this._fleet.internalValue = value;
  }
  public resetFleet() {
    this._fleet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // gateway_api_config - computed: false, optional: true, required: false
  private _gatewayApiConfig = new GoogleContainerClusterGatewayApiConfigOutputReference(this, "gateway_api_config");
  public get gatewayApiConfig() {
    return this._gatewayApiConfig;
  }
  public putGatewayApiConfig(value: GoogleContainerClusterGatewayApiConfig) {
    this._gatewayApiConfig.internalValue = value;
  }
  public resetGatewayApiConfig() {
    this._gatewayApiConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayApiConfigInput() {
    return this._gatewayApiConfig.internalValue;
  }

  // identity_service_config - computed: false, optional: true, required: false
  private _identityServiceConfig = new GoogleContainerClusterIdentityServiceConfigOutputReference(this, "identity_service_config");
  public get identityServiceConfig() {
    return this._identityServiceConfig;
  }
  public putIdentityServiceConfig(value: GoogleContainerClusterIdentityServiceConfig) {
    this._identityServiceConfig.internalValue = value;
  }
  public resetIdentityServiceConfig() {
    this._identityServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityServiceConfigInput() {
    return this._identityServiceConfig.internalValue;
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy = new GoogleContainerClusterIpAllocationPolicyOutputReference(this, "ip_allocation_policy");
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public putIpAllocationPolicy(value: GoogleContainerClusterIpAllocationPolicy) {
    this._ipAllocationPolicy.internalValue = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new GoogleContainerClusterLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: GoogleContainerClusterLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new GoogleContainerClusterMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: GoogleContainerClusterMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // master_auth - computed: false, optional: true, required: false
  private _masterAuth = new GoogleContainerClusterMasterAuthOutputReference(this, "master_auth");
  public get masterAuth() {
    return this._masterAuth;
  }
  public putMasterAuth(value: GoogleContainerClusterMasterAuth) {
    this._masterAuth.internalValue = value;
  }
  public resetMasterAuth() {
    this._masterAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthInput() {
    return this._masterAuth.internalValue;
  }

  // master_authorized_networks_config - computed: false, optional: true, required: false
  private _masterAuthorizedNetworksConfig = new GoogleContainerClusterMasterAuthorizedNetworksConfigOutputReference(this, "master_authorized_networks_config");
  public get masterAuthorizedNetworksConfig() {
    return this._masterAuthorizedNetworksConfig;
  }
  public putMasterAuthorizedNetworksConfig(value: GoogleContainerClusterMasterAuthorizedNetworksConfig) {
    this._masterAuthorizedNetworksConfig.internalValue = value;
  }
  public resetMasterAuthorizedNetworksConfig() {
    this._masterAuthorizedNetworksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthorizedNetworksConfigInput() {
    return this._masterAuthorizedNetworksConfig.internalValue;
  }

  // mesh_certificates - computed: false, optional: true, required: false
  private _meshCertificates = new GoogleContainerClusterMeshCertificatesOutputReference(this, "mesh_certificates");
  public get meshCertificates() {
    return this._meshCertificates;
  }
  public putMeshCertificates(value: GoogleContainerClusterMeshCertificates) {
    this._meshCertificates.internalValue = value;
  }
  public resetMeshCertificates() {
    this._meshCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshCertificatesInput() {
    return this._meshCertificates.internalValue;
  }

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new GoogleContainerClusterMonitoringConfigOutputReference(this, "monitoring_config");
  public get monitoringConfig() {
    return this._monitoringConfig;
  }
  public putMonitoringConfig(value: GoogleContainerClusterMonitoringConfig) {
    this._monitoringConfig.internalValue = value;
  }
  public resetMonitoringConfig() {
    this._monitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigInput() {
    return this._monitoringConfig.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new GoogleContainerClusterNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: GoogleContainerClusterNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new GoogleContainerClusterNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: GoogleContainerClusterNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new GoogleContainerClusterNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GoogleContainerClusterNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool = new GoogleContainerClusterNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: GoogleContainerClusterNodePool[] | cdktf.IResolvable) {
    this._nodePool.internalValue = value;
  }
  public resetNodePool() {
    this._nodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool.internalValue;
  }

  // node_pool_auto_config - computed: false, optional: true, required: false
  private _nodePoolAutoConfig = new GoogleContainerClusterNodePoolAutoConfigOutputReference(this, "node_pool_auto_config");
  public get nodePoolAutoConfig() {
    return this._nodePoolAutoConfig;
  }
  public putNodePoolAutoConfig(value: GoogleContainerClusterNodePoolAutoConfig) {
    this._nodePoolAutoConfig.internalValue = value;
  }
  public resetNodePoolAutoConfig() {
    this._nodePoolAutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolAutoConfigInput() {
    return this._nodePoolAutoConfig.internalValue;
  }

  // node_pool_defaults - computed: false, optional: true, required: false
  private _nodePoolDefaults = new GoogleContainerClusterNodePoolDefaultsOutputReference(this, "node_pool_defaults");
  public get nodePoolDefaults() {
    return this._nodePoolDefaults;
  }
  public putNodePoolDefaults(value: GoogleContainerClusterNodePoolDefaults) {
    this._nodePoolDefaults.internalValue = value;
  }
  public resetNodePoolDefaults() {
    this._nodePoolDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolDefaultsInput() {
    return this._nodePoolDefaults.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new GoogleContainerClusterNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: GoogleContainerClusterNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // pod_autoscaling - computed: false, optional: true, required: false
  private _podAutoscaling = new GoogleContainerClusterPodAutoscalingOutputReference(this, "pod_autoscaling");
  public get podAutoscaling() {
    return this._podAutoscaling;
  }
  public putPodAutoscaling(value: GoogleContainerClusterPodAutoscaling) {
    this._podAutoscaling.internalValue = value;
  }
  public resetPodAutoscaling() {
    this._podAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAutoscalingInput() {
    return this._podAutoscaling.internalValue;
  }

  // pod_security_policy_config - computed: false, optional: true, required: false
  private _podSecurityPolicyConfig = new GoogleContainerClusterPodSecurityPolicyConfigOutputReference(this, "pod_security_policy_config");
  public get podSecurityPolicyConfig() {
    return this._podSecurityPolicyConfig;
  }
  public putPodSecurityPolicyConfig(value: GoogleContainerClusterPodSecurityPolicyConfig) {
    this._podSecurityPolicyConfig.internalValue = value;
  }
  public resetPodSecurityPolicyConfig() {
    this._podSecurityPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityPolicyConfigInput() {
    return this._podSecurityPolicyConfig.internalValue;
  }

  // private_cluster_config - computed: false, optional: true, required: false
  private _privateClusterConfig = new GoogleContainerClusterPrivateClusterConfigOutputReference(this, "private_cluster_config");
  public get privateClusterConfig() {
    return this._privateClusterConfig;
  }
  public putPrivateClusterConfig(value: GoogleContainerClusterPrivateClusterConfig) {
    this._privateClusterConfig.internalValue = value;
  }
  public resetPrivateClusterConfig() {
    this._privateClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterConfigInput() {
    return this._privateClusterConfig.internalValue;
  }

  // protect_config - computed: false, optional: true, required: false
  private _protectConfig = new GoogleContainerClusterProtectConfigOutputReference(this, "protect_config");
  public get protectConfig() {
    return this._protectConfig;
  }
  public putProtectConfig(value: GoogleContainerClusterProtectConfig) {
    this._protectConfig.internalValue = value;
  }
  public resetProtectConfig() {
    this._protectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectConfigInput() {
    return this._protectConfig.internalValue;
  }

  // release_channel - computed: false, optional: true, required: false
  private _releaseChannel = new GoogleContainerClusterReleaseChannelOutputReference(this, "release_channel");
  public get releaseChannel() {
    return this._releaseChannel;
  }
  public putReleaseChannel(value: GoogleContainerClusterReleaseChannel) {
    this._releaseChannel.internalValue = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel.internalValue;
  }

  // resource_usage_export_config - computed: false, optional: true, required: false
  private _resourceUsageExportConfig = new GoogleContainerClusterResourceUsageExportConfigOutputReference(this, "resource_usage_export_config");
  public get resourceUsageExportConfig() {
    return this._resourceUsageExportConfig;
  }
  public putResourceUsageExportConfig(value: GoogleContainerClusterResourceUsageExportConfig) {
    this._resourceUsageExportConfig.internalValue = value;
  }
  public resetResourceUsageExportConfig() {
    this._resourceUsageExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageExportConfigInput() {
    return this._resourceUsageExportConfig.internalValue;
  }

  // secret_manager_config - computed: false, optional: true, required: false
  private _secretManagerConfig = new GoogleContainerClusterSecretManagerConfigOutputReference(this, "secret_manager_config");
  public get secretManagerConfig() {
    return this._secretManagerConfig;
  }
  public putSecretManagerConfig(value: GoogleContainerClusterSecretManagerConfig) {
    this._secretManagerConfig.internalValue = value;
  }
  public resetSecretManagerConfig() {
    this._secretManagerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerConfigInput() {
    return this._secretManagerConfig.internalValue;
  }

  // security_posture_config - computed: false, optional: true, required: false
  private _securityPostureConfig = new GoogleContainerClusterSecurityPostureConfigOutputReference(this, "security_posture_config");
  public get securityPostureConfig() {
    return this._securityPostureConfig;
  }
  public putSecurityPostureConfig(value: GoogleContainerClusterSecurityPostureConfig) {
    this._securityPostureConfig.internalValue = value;
  }
  public resetSecurityPostureConfig() {
    this._securityPostureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPostureConfigInput() {
    return this._securityPostureConfig.internalValue;
  }

  // service_external_ips_config - computed: false, optional: true, required: false
  private _serviceExternalIpsConfig = new GoogleContainerClusterServiceExternalIpsConfigOutputReference(this, "service_external_ips_config");
  public get serviceExternalIpsConfig() {
    return this._serviceExternalIpsConfig;
  }
  public putServiceExternalIpsConfig(value: GoogleContainerClusterServiceExternalIpsConfig) {
    this._serviceExternalIpsConfig.internalValue = value;
  }
  public resetServiceExternalIpsConfig() {
    this._serviceExternalIpsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExternalIpsConfigInput() {
    return this._serviceExternalIpsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleContainerClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleContainerClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tpu_config - computed: false, optional: true, required: false
  private _tpuConfig = new GoogleContainerClusterTpuConfigOutputReference(this, "tpu_config");
  public get tpuConfig() {
    return this._tpuConfig;
  }
  public putTpuConfig(value: GoogleContainerClusterTpuConfig) {
    this._tpuConfig.internalValue = value;
  }
  public resetTpuConfig() {
    this._tpuConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuConfigInput() {
    return this._tpuConfig.internalValue;
  }

  // user_managed_keys_config - computed: false, optional: true, required: false
  private _userManagedKeysConfig = new GoogleContainerClusterUserManagedKeysConfigOutputReference(this, "user_managed_keys_config");
  public get userManagedKeysConfig() {
    return this._userManagedKeysConfig;
  }
  public putUserManagedKeysConfig(value: GoogleContainerClusterUserManagedKeysConfig) {
    this._userManagedKeysConfig.internalValue = value;
  }
  public resetUserManagedKeysConfig() {
    this._userManagedKeysConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedKeysConfigInput() {
    return this._userManagedKeysConfig.internalValue;
  }

  // vertical_pod_autoscaling - computed: false, optional: true, required: false
  private _verticalPodAutoscaling = new GoogleContainerClusterVerticalPodAutoscalingOutputReference(this, "vertical_pod_autoscaling");
  public get verticalPodAutoscaling() {
    return this._verticalPodAutoscaling;
  }
  public putVerticalPodAutoscaling(value: GoogleContainerClusterVerticalPodAutoscaling) {
    this._verticalPodAutoscaling.internalValue = value;
  }
  public resetVerticalPodAutoscaling() {
    this._verticalPodAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPodAutoscalingInput() {
    return this._verticalPodAutoscaling.internalValue;
  }

  // workload_alts_config - computed: false, optional: true, required: false
  private _workloadAltsConfig = new GoogleContainerClusterWorkloadAltsConfigOutputReference(this, "workload_alts_config");
  public get workloadAltsConfig() {
    return this._workloadAltsConfig;
  }
  public putWorkloadAltsConfig(value: GoogleContainerClusterWorkloadAltsConfig) {
    this._workloadAltsConfig.internalValue = value;
  }
  public resetWorkloadAltsConfig() {
    this._workloadAltsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadAltsConfigInput() {
    return this._workloadAltsConfig.internalValue;
  }

  // workload_identity_config - computed: false, optional: true, required: false
  private _workloadIdentityConfig = new GoogleContainerClusterWorkloadIdentityConfigOutputReference(this, "workload_identity_config");
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }
  public putWorkloadIdentityConfig(value: GoogleContainerClusterWorkloadIdentityConfig) {
    this._workloadIdentityConfig.internalValue = value;
  }
  public resetWorkloadIdentityConfig() {
    this._workloadIdentityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityConfigInput() {
    return this._workloadIdentityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_net_admin: cdktf.booleanToTerraform(this._allowNetAdmin),
      cluster_ipv4_cidr: cdktf.stringToTerraform(this._clusterIpv4Cidr),
      datapath_provider: cdktf.stringToTerraform(this._datapathProvider),
      default_max_pods_per_node: cdktf.numberToTerraform(this._defaultMaxPodsPerNode),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disable_l4_lb_firewall_reconciliation: cdktf.booleanToTerraform(this._disableL4LbFirewallReconciliation),
      enable_autopilot: cdktf.booleanToTerraform(this._enableAutopilot),
      enable_cilium_clusterwide_network_policy: cdktf.booleanToTerraform(this._enableCiliumClusterwideNetworkPolicy),
      enable_fqdn_network_policy: cdktf.booleanToTerraform(this._enableFqdnNetworkPolicy),
      enable_intranode_visibility: cdktf.booleanToTerraform(this._enableIntranodeVisibility),
      enable_kubernetes_alpha: cdktf.booleanToTerraform(this._enableKubernetesAlpha),
      enable_l4_ilb_subsetting: cdktf.booleanToTerraform(this._enableL4IlbSubsetting),
      enable_legacy_abac: cdktf.booleanToTerraform(this._enableLegacyAbac),
      enable_multi_networking: cdktf.booleanToTerraform(this._enableMultiNetworking),
      enable_shielded_nodes: cdktf.booleanToTerraform(this._enableShieldedNodes),
      enable_tpu: cdktf.booleanToTerraform(this._enableTpu),
      id: cdktf.stringToTerraform(this._id),
      in_transit_encryption_config: cdktf.stringToTerraform(this._inTransitEncryptionConfig),
      initial_node_count: cdktf.numberToTerraform(this._initialNodeCount),
      location: cdktf.stringToTerraform(this._location),
      logging_service: cdktf.stringToTerraform(this._loggingService),
      min_master_version: cdktf.stringToTerraform(this._minMasterVersion),
      monitoring_service: cdktf.stringToTerraform(this._monitoringService),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      networking_mode: cdktf.stringToTerraform(this._networkingMode),
      node_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeLocations),
      node_version: cdktf.stringToTerraform(this._nodeVersion),
      private_ipv6_google_access: cdktf.stringToTerraform(this._privateIpv6GoogleAccess),
      project: cdktf.stringToTerraform(this._project),
      remove_default_node_pool: cdktf.booleanToTerraform(this._removeDefaultNodePool),
      resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceLabels),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      addons_config: googleContainerClusterAddonsConfigToTerraform(this._addonsConfig.internalValue),
      authenticator_groups_config: googleContainerClusterAuthenticatorGroupsConfigToTerraform(this._authenticatorGroupsConfig.internalValue),
      binary_authorization: googleContainerClusterBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      cluster_autoscaling: googleContainerClusterClusterAutoscalingToTerraform(this._clusterAutoscaling.internalValue),
      cluster_telemetry: googleContainerClusterClusterTelemetryToTerraform(this._clusterTelemetry.internalValue),
      confidential_nodes: googleContainerClusterConfidentialNodesToTerraform(this._confidentialNodes.internalValue),
      control_plane_endpoints_config: googleContainerClusterControlPlaneEndpointsConfigToTerraform(this._controlPlaneEndpointsConfig.internalValue),
      cost_management_config: googleContainerClusterCostManagementConfigToTerraform(this._costManagementConfig.internalValue),
      database_encryption: googleContainerClusterDatabaseEncryptionToTerraform(this._databaseEncryption.internalValue),
      default_snat_status: googleContainerClusterDefaultSnatStatusToTerraform(this._defaultSnatStatus.internalValue),
      dns_config: googleContainerClusterDnsConfigToTerraform(this._dnsConfig.internalValue),
      enable_k8s_beta_apis: googleContainerClusterEnableK8SBetaApisToTerraform(this._enableK8SBetaApis.internalValue),
      enterprise_config: googleContainerClusterEnterpriseConfigToTerraform(this._enterpriseConfig.internalValue),
      fleet: googleContainerClusterFleetToTerraform(this._fleet.internalValue),
      gateway_api_config: googleContainerClusterGatewayApiConfigToTerraform(this._gatewayApiConfig.internalValue),
      identity_service_config: googleContainerClusterIdentityServiceConfigToTerraform(this._identityServiceConfig.internalValue),
      ip_allocation_policy: googleContainerClusterIpAllocationPolicyToTerraform(this._ipAllocationPolicy.internalValue),
      logging_config: googleContainerClusterLoggingConfigToTerraform(this._loggingConfig.internalValue),
      maintenance_policy: googleContainerClusterMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      master_auth: googleContainerClusterMasterAuthToTerraform(this._masterAuth.internalValue),
      master_authorized_networks_config: googleContainerClusterMasterAuthorizedNetworksConfigToTerraform(this._masterAuthorizedNetworksConfig.internalValue),
      mesh_certificates: googleContainerClusterMeshCertificatesToTerraform(this._meshCertificates.internalValue),
      monitoring_config: googleContainerClusterMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      network_performance_config: googleContainerClusterNetworkPerformanceConfigToTerraform(this._networkPerformanceConfig.internalValue),
      network_policy: googleContainerClusterNetworkPolicyToTerraform(this._networkPolicy.internalValue),
      node_config: googleContainerClusterNodeConfigToTerraform(this._nodeConfig.internalValue),
      node_pool: cdktf.listMapper(googleContainerClusterNodePoolToTerraform, true)(this._nodePool.internalValue),
      node_pool_auto_config: googleContainerClusterNodePoolAutoConfigToTerraform(this._nodePoolAutoConfig.internalValue),
      node_pool_defaults: googleContainerClusterNodePoolDefaultsToTerraform(this._nodePoolDefaults.internalValue),
      notification_config: googleContainerClusterNotificationConfigToTerraform(this._notificationConfig.internalValue),
      pod_autoscaling: googleContainerClusterPodAutoscalingToTerraform(this._podAutoscaling.internalValue),
      pod_security_policy_config: googleContainerClusterPodSecurityPolicyConfigToTerraform(this._podSecurityPolicyConfig.internalValue),
      private_cluster_config: googleContainerClusterPrivateClusterConfigToTerraform(this._privateClusterConfig.internalValue),
      protect_config: googleContainerClusterProtectConfigToTerraform(this._protectConfig.internalValue),
      release_channel: googleContainerClusterReleaseChannelToTerraform(this._releaseChannel.internalValue),
      resource_usage_export_config: googleContainerClusterResourceUsageExportConfigToTerraform(this._resourceUsageExportConfig.internalValue),
      secret_manager_config: googleContainerClusterSecretManagerConfigToTerraform(this._secretManagerConfig.internalValue),
      security_posture_config: googleContainerClusterSecurityPostureConfigToTerraform(this._securityPostureConfig.internalValue),
      service_external_ips_config: googleContainerClusterServiceExternalIpsConfigToTerraform(this._serviceExternalIpsConfig.internalValue),
      timeouts: googleContainerClusterTimeoutsToTerraform(this._timeouts.internalValue),
      tpu_config: googleContainerClusterTpuConfigToTerraform(this._tpuConfig.internalValue),
      user_managed_keys_config: googleContainerClusterUserManagedKeysConfigToTerraform(this._userManagedKeysConfig.internalValue),
      vertical_pod_autoscaling: googleContainerClusterVerticalPodAutoscalingToTerraform(this._verticalPodAutoscaling.internalValue),
      workload_alts_config: googleContainerClusterWorkloadAltsConfigToTerraform(this._workloadAltsConfig.internalValue),
      workload_identity_config: googleContainerClusterWorkloadIdentityConfigToTerraform(this._workloadIdentityConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_net_admin: {
        value: cdktf.booleanToHclTerraform(this._allowNetAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_ipv4_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterIpv4Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datapath_provider: {
        value: cdktf.stringToHclTerraform(this._datapathProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_max_pods_per_node: {
        value: cdktf.numberToHclTerraform(this._defaultMaxPodsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
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
      disable_l4_lb_firewall_reconciliation: {
        value: cdktf.booleanToHclTerraform(this._disableL4LbFirewallReconciliation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_autopilot: {
        value: cdktf.booleanToHclTerraform(this._enableAutopilot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cilium_clusterwide_network_policy: {
        value: cdktf.booleanToHclTerraform(this._enableCiliumClusterwideNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fqdn_network_policy: {
        value: cdktf.booleanToHclTerraform(this._enableFqdnNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_intranode_visibility: {
        value: cdktf.booleanToHclTerraform(this._enableIntranodeVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_kubernetes_alpha: {
        value: cdktf.booleanToHclTerraform(this._enableKubernetesAlpha),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_l4_ilb_subsetting: {
        value: cdktf.booleanToHclTerraform(this._enableL4IlbSubsetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_legacy_abac: {
        value: cdktf.booleanToHclTerraform(this._enableLegacyAbac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_multi_networking: {
        value: cdktf.booleanToHclTerraform(this._enableMultiNetworking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_shielded_nodes: {
        value: cdktf.booleanToHclTerraform(this._enableShieldedNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tpu: {
        value: cdktf.booleanToHclTerraform(this._enableTpu),
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
      in_transit_encryption_config: {
        value: cdktf.stringToHclTerraform(this._inTransitEncryptionConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_node_count: {
        value: cdktf.numberToHclTerraform(this._initialNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_service: {
        value: cdktf.stringToHclTerraform(this._loggingService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_master_version: {
        value: cdktf.stringToHclTerraform(this._minMasterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_service: {
        value: cdktf.stringToHclTerraform(this._monitoringService),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networking_mode: {
        value: cdktf.stringToHclTerraform(this._networkingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      node_version: {
        value: cdktf.stringToHclTerraform(this._nodeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ipv6_google_access: {
        value: cdktf.stringToHclTerraform(this._privateIpv6GoogleAccess),
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
      remove_default_node_pool: {
        value: cdktf.booleanToHclTerraform(this._removeDefaultNodePool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons_config: {
        value: googleContainerClusterAddonsConfigToHclTerraform(this._addonsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterAddonsConfigList",
      },
      authenticator_groups_config: {
        value: googleContainerClusterAuthenticatorGroupsConfigToHclTerraform(this._authenticatorGroupsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterAuthenticatorGroupsConfigList",
      },
      binary_authorization: {
        value: googleContainerClusterBinaryAuthorizationToHclTerraform(this._binaryAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterBinaryAuthorizationList",
      },
      cluster_autoscaling: {
        value: googleContainerClusterClusterAutoscalingToHclTerraform(this._clusterAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterClusterAutoscalingList",
      },
      cluster_telemetry: {
        value: googleContainerClusterClusterTelemetryToHclTerraform(this._clusterTelemetry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterClusterTelemetryList",
      },
      confidential_nodes: {
        value: googleContainerClusterConfidentialNodesToHclTerraform(this._confidentialNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterConfidentialNodesList",
      },
      control_plane_endpoints_config: {
        value: googleContainerClusterControlPlaneEndpointsConfigToHclTerraform(this._controlPlaneEndpointsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterControlPlaneEndpointsConfigList",
      },
      cost_management_config: {
        value: googleContainerClusterCostManagementConfigToHclTerraform(this._costManagementConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterCostManagementConfigList",
      },
      database_encryption: {
        value: googleContainerClusterDatabaseEncryptionToHclTerraform(this._databaseEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterDatabaseEncryptionList",
      },
      default_snat_status: {
        value: googleContainerClusterDefaultSnatStatusToHclTerraform(this._defaultSnatStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterDefaultSnatStatusList",
      },
      dns_config: {
        value: googleContainerClusterDnsConfigToHclTerraform(this._dnsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterDnsConfigList",
      },
      enable_k8s_beta_apis: {
        value: googleContainerClusterEnableK8SBetaApisToHclTerraform(this._enableK8SBetaApis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterEnableK8SBetaApisList",
      },
      enterprise_config: {
        value: googleContainerClusterEnterpriseConfigToHclTerraform(this._enterpriseConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterEnterpriseConfigList",
      },
      fleet: {
        value: googleContainerClusterFleetToHclTerraform(this._fleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterFleetList",
      },
      gateway_api_config: {
        value: googleContainerClusterGatewayApiConfigToHclTerraform(this._gatewayApiConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterGatewayApiConfigList",
      },
      identity_service_config: {
        value: googleContainerClusterIdentityServiceConfigToHclTerraform(this._identityServiceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterIdentityServiceConfigList",
      },
      ip_allocation_policy: {
        value: googleContainerClusterIpAllocationPolicyToHclTerraform(this._ipAllocationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterIpAllocationPolicyList",
      },
      logging_config: {
        value: googleContainerClusterLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterLoggingConfigList",
      },
      maintenance_policy: {
        value: googleContainerClusterMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterMaintenancePolicyList",
      },
      master_auth: {
        value: googleContainerClusterMasterAuthToHclTerraform(this._masterAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterMasterAuthList",
      },
      master_authorized_networks_config: {
        value: googleContainerClusterMasterAuthorizedNetworksConfigToHclTerraform(this._masterAuthorizedNetworksConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterMasterAuthorizedNetworksConfigList",
      },
      mesh_certificates: {
        value: googleContainerClusterMeshCertificatesToHclTerraform(this._meshCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterMeshCertificatesList",
      },
      monitoring_config: {
        value: googleContainerClusterMonitoringConfigToHclTerraform(this._monitoringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterMonitoringConfigList",
      },
      network_performance_config: {
        value: googleContainerClusterNetworkPerformanceConfigToHclTerraform(this._networkPerformanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterNetworkPerformanceConfigList",
      },
      network_policy: {
        value: googleContainerClusterNetworkPolicyToHclTerraform(this._networkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterNetworkPolicyList",
      },
      node_config: {
        value: googleContainerClusterNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterNodeConfigList",
      },
      node_pool: {
        value: cdktf.listMapperHcl(googleContainerClusterNodePoolToHclTerraform, true)(this._nodePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterNodePoolList",
      },
      node_pool_auto_config: {
        value: googleContainerClusterNodePoolAutoConfigToHclTerraform(this._nodePoolAutoConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterNodePoolAutoConfigList",
      },
      node_pool_defaults: {
        value: googleContainerClusterNodePoolDefaultsToHclTerraform(this._nodePoolDefaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterNodePoolDefaultsList",
      },
      notification_config: {
        value: googleContainerClusterNotificationConfigToHclTerraform(this._notificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterNotificationConfigList",
      },
      pod_autoscaling: {
        value: googleContainerClusterPodAutoscalingToHclTerraform(this._podAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterPodAutoscalingList",
      },
      pod_security_policy_config: {
        value: googleContainerClusterPodSecurityPolicyConfigToHclTerraform(this._podSecurityPolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterPodSecurityPolicyConfigList",
      },
      private_cluster_config: {
        value: googleContainerClusterPrivateClusterConfigToHclTerraform(this._privateClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterPrivateClusterConfigList",
      },
      protect_config: {
        value: googleContainerClusterProtectConfigToHclTerraform(this._protectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterProtectConfigList",
      },
      release_channel: {
        value: googleContainerClusterReleaseChannelToHclTerraform(this._releaseChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterReleaseChannelList",
      },
      resource_usage_export_config: {
        value: googleContainerClusterResourceUsageExportConfigToHclTerraform(this._resourceUsageExportConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterResourceUsageExportConfigList",
      },
      secret_manager_config: {
        value: googleContainerClusterSecretManagerConfigToHclTerraform(this._secretManagerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterSecretManagerConfigList",
      },
      security_posture_config: {
        value: googleContainerClusterSecurityPostureConfigToHclTerraform(this._securityPostureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterSecurityPostureConfigList",
      },
      service_external_ips_config: {
        value: googleContainerClusterServiceExternalIpsConfigToHclTerraform(this._serviceExternalIpsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterServiceExternalIpsConfigList",
      },
      timeouts: {
        value: googleContainerClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleContainerClusterTimeouts",
      },
      tpu_config: {
        value: googleContainerClusterTpuConfigToHclTerraform(this._tpuConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterTpuConfigList",
      },
      user_managed_keys_config: {
        value: googleContainerClusterUserManagedKeysConfigToHclTerraform(this._userManagedKeysConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterUserManagedKeysConfigList",
      },
      vertical_pod_autoscaling: {
        value: googleContainerClusterVerticalPodAutoscalingToHclTerraform(this._verticalPodAutoscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterVerticalPodAutoscalingList",
      },
      workload_alts_config: {
        value: googleContainerClusterWorkloadAltsConfigToHclTerraform(this._workloadAltsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterWorkloadAltsConfigList",
      },
      workload_identity_config: {
        value: googleContainerClusterWorkloadIdentityConfigToHclTerraform(this._workloadIdentityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerClusterWorkloadIdentityConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
