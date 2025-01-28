// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleManagedKafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for the cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' to comply with RFC 1035. This value is structured like: 'my-cluster-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#cluster_id GoogleManagedKafkaCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#id GoogleManagedKafkaCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of label KEY=VALUE pairs to add. Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#labels GoogleManagedKafkaCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#location GoogleManagedKafkaCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#project GoogleManagedKafkaCluster#project}
  */
  readonly project?: string;
  /**
  * capacity_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#capacity_config GoogleManagedKafkaCluster#capacity_config}
  */
  readonly capacityConfig: GoogleManagedKafkaClusterCapacityConfig;
  /**
  * gcp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#gcp_config GoogleManagedKafkaCluster#gcp_config}
  */
  readonly gcpConfig: GoogleManagedKafkaClusterGcpConfig;
  /**
  * rebalance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#rebalance_config GoogleManagedKafkaCluster#rebalance_config}
  */
  readonly rebalanceConfig?: GoogleManagedKafkaClusterRebalanceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#timeouts GoogleManagedKafkaCluster#timeouts}
  */
  readonly timeouts?: GoogleManagedKafkaClusterTimeouts;
}
export interface GoogleManagedKafkaClusterCapacityConfig {
  /**
  * The memory to provision for the cluster in bytes. The value must be between 1 GiB and 8 GiB per vCPU. Ex. 1024Mi, 4Gi.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#memory_bytes GoogleManagedKafkaCluster#memory_bytes}
  */
  readonly memoryBytes: string;
  /**
  * The number of vCPUs to provision for the cluster. The minimum is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#vcpu_count GoogleManagedKafkaCluster#vcpu_count}
  */
  readonly vcpuCount: string;
}

export function googleManagedKafkaClusterCapacityConfigToTerraform(struct?: GoogleManagedKafkaClusterCapacityConfigOutputReference | GoogleManagedKafkaClusterCapacityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_bytes: cdktf.stringToTerraform(struct!.memoryBytes),
    vcpu_count: cdktf.stringToTerraform(struct!.vcpuCount),
  }
}


export function googleManagedKafkaClusterCapacityConfigToHclTerraform(struct?: GoogleManagedKafkaClusterCapacityConfigOutputReference | GoogleManagedKafkaClusterCapacityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_bytes: {
      value: cdktf.stringToHclTerraform(struct!.memoryBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpu_count: {
      value: cdktf.stringToHclTerraform(struct!.vcpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleManagedKafkaClusterCapacityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleManagedKafkaClusterCapacityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryBytes = this._memoryBytes;
    }
    if (this._vcpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpuCount = this._vcpuCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleManagedKafkaClusterCapacityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryBytes = undefined;
      this._vcpuCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryBytes = value.memoryBytes;
      this._vcpuCount = value.vcpuCount;
    }
  }

  // memory_bytes - computed: false, optional: false, required: true
  private _memoryBytes?: string; 
  public get memoryBytes() {
    return this.getStringAttribute('memory_bytes');
  }
  public set memoryBytes(value: string) {
    this._memoryBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBytesInput() {
    return this._memoryBytes;
  }

  // vcpu_count - computed: false, optional: false, required: true
  private _vcpuCount?: string; 
  public get vcpuCount() {
    return this.getStringAttribute('vcpu_count');
  }
  public set vcpuCount(value: string) {
    this._vcpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCountInput() {
    return this._vcpuCount;
  }
}
export interface GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs {
  /**
  * Name of the VPC subnet from which the cluster is accessible. Both broker and bootstrap server IP addresses and DNS entries are automatically created in the subnet. The subnet must be located in the same region as the cluster. The project may differ. The name of the subnet must be in the format 'projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#subnet GoogleManagedKafkaCluster#subnet}
  */
  readonly subnet: string;
}

export function googleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsToTerraform(struct?: GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function googleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsToHclTerraform(struct?: GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet = value.subnet;
    }
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference {
    return new GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleManagedKafkaClusterGcpConfigAccessConfig {
  /**
  * network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#network_configs GoogleManagedKafkaCluster#network_configs}
  */
  readonly networkConfigs: GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs[] | cdktf.IResolvable;
}

export function googleManagedKafkaClusterGcpConfigAccessConfigToTerraform(struct?: GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference | GoogleManagedKafkaClusterGcpConfigAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_configs: cdktf.listMapper(googleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsToTerraform, true)(struct!.networkConfigs),
  }
}


export function googleManagedKafkaClusterGcpConfigAccessConfigToHclTerraform(struct?: GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference | GoogleManagedKafkaClusterGcpConfigAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_configs: {
      value: cdktf.listMapperHcl(googleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsToHclTerraform, true)(struct!.networkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleManagedKafkaClusterGcpConfigAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfigs = this._networkConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleManagedKafkaClusterGcpConfigAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkConfigs.internalValue = value.networkConfigs;
    }
  }

  // network_configs - computed: false, optional: false, required: true
  private _networkConfigs = new GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigsList(this, "network_configs", false);
  public get networkConfigs() {
    return this._networkConfigs;
  }
  public putNetworkConfigs(value: GoogleManagedKafkaClusterGcpConfigAccessConfigNetworkConfigs[] | cdktf.IResolvable) {
    this._networkConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigsInput() {
    return this._networkConfigs.internalValue;
  }
}
export interface GoogleManagedKafkaClusterGcpConfig {
  /**
  * The Cloud KMS Key name to use for encryption. The key must be located in the same region as the cluster and cannot be changed. Must be in the format 'projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#kms_key GoogleManagedKafkaCluster#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#access_config GoogleManagedKafkaCluster#access_config}
  */
  readonly accessConfig: GoogleManagedKafkaClusterGcpConfigAccessConfig;
}

export function googleManagedKafkaClusterGcpConfigToTerraform(struct?: GoogleManagedKafkaClusterGcpConfigOutputReference | GoogleManagedKafkaClusterGcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    access_config: googleManagedKafkaClusterGcpConfigAccessConfigToTerraform(struct!.accessConfig),
  }
}


export function googleManagedKafkaClusterGcpConfigToHclTerraform(struct?: GoogleManagedKafkaClusterGcpConfigOutputReference | GoogleManagedKafkaClusterGcpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_config: {
      value: googleManagedKafkaClusterGcpConfigAccessConfigToHclTerraform(struct!.accessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleManagedKafkaClusterGcpConfigAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleManagedKafkaClusterGcpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleManagedKafkaClusterGcpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleManagedKafkaClusterGcpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
      this._accessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
      this._accessConfig.internalValue = value.accessConfig;
    }
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

  // access_config - computed: false, optional: false, required: true
  private _accessConfig = new GoogleManagedKafkaClusterGcpConfigAccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: GoogleManagedKafkaClusterGcpConfigAccessConfig) {
    this._accessConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }
}
export interface GoogleManagedKafkaClusterRebalanceConfig {
  /**
  * The rebalance behavior for the cluster. When not specified, defaults to 'NO_REBALANCE'. Possible values: 'MODE_UNSPECIFIED', 'NO_REBALANCE', 'AUTO_REBALANCE_ON_SCALE_UP'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#mode GoogleManagedKafkaCluster#mode}
  */
  readonly mode?: string;
}

export function googleManagedKafkaClusterRebalanceConfigToTerraform(struct?: GoogleManagedKafkaClusterRebalanceConfigOutputReference | GoogleManagedKafkaClusterRebalanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleManagedKafkaClusterRebalanceConfigToHclTerraform(struct?: GoogleManagedKafkaClusterRebalanceConfigOutputReference | GoogleManagedKafkaClusterRebalanceConfig): any {
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

export class GoogleManagedKafkaClusterRebalanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleManagedKafkaClusterRebalanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleManagedKafkaClusterRebalanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
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
}
export interface GoogleManagedKafkaClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#create GoogleManagedKafkaCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#delete GoogleManagedKafkaCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#update GoogleManagedKafkaCluster#update}
  */
  readonly update?: string;
}

export function googleManagedKafkaClusterTimeoutsToTerraform(struct?: GoogleManagedKafkaClusterTimeouts | cdktf.IResolvable): any {
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


export function googleManagedKafkaClusterTimeoutsToHclTerraform(struct?: GoogleManagedKafkaClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleManagedKafkaClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleManagedKafkaClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleManagedKafkaClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster google_managed_kafka_cluster}
*/
export class GoogleManagedKafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_managed_kafka_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleManagedKafkaCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleManagedKafkaCluster to import
  * @param importFromId The id of the existing GoogleManagedKafkaCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleManagedKafkaCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_managed_kafka_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_managed_kafka_cluster google_managed_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleManagedKafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleManagedKafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_managed_kafka_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.18.0',
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
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._capacityConfig.internalValue = config.capacityConfig;
    this._gcpConfig.internalValue = config.gcpConfig;
    this._rebalanceConfig.internalValue = config.rebalanceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // capacity_config - computed: false, optional: false, required: true
  private _capacityConfig = new GoogleManagedKafkaClusterCapacityConfigOutputReference(this, "capacity_config");
  public get capacityConfig() {
    return this._capacityConfig;
  }
  public putCapacityConfig(value: GoogleManagedKafkaClusterCapacityConfig) {
    this._capacityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityConfigInput() {
    return this._capacityConfig.internalValue;
  }

  // gcp_config - computed: false, optional: false, required: true
  private _gcpConfig = new GoogleManagedKafkaClusterGcpConfigOutputReference(this, "gcp_config");
  public get gcpConfig() {
    return this._gcpConfig;
  }
  public putGcpConfig(value: GoogleManagedKafkaClusterGcpConfig) {
    this._gcpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpConfigInput() {
    return this._gcpConfig.internalValue;
  }

  // rebalance_config - computed: false, optional: true, required: false
  private _rebalanceConfig = new GoogleManagedKafkaClusterRebalanceConfigOutputReference(this, "rebalance_config");
  public get rebalanceConfig() {
    return this._rebalanceConfig;
  }
  public putRebalanceConfig(value: GoogleManagedKafkaClusterRebalanceConfig) {
    this._rebalanceConfig.internalValue = value;
  }
  public resetRebalanceConfig() {
    this._rebalanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceConfigInput() {
    return this._rebalanceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleManagedKafkaClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleManagedKafkaClusterTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      capacity_config: googleManagedKafkaClusterCapacityConfigToTerraform(this._capacityConfig.internalValue),
      gcp_config: googleManagedKafkaClusterGcpConfigToTerraform(this._gcpConfig.internalValue),
      rebalance_config: googleManagedKafkaClusterRebalanceConfigToTerraform(this._rebalanceConfig.internalValue),
      timeouts: googleManagedKafkaClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_config: {
        value: googleManagedKafkaClusterCapacityConfigToHclTerraform(this._capacityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleManagedKafkaClusterCapacityConfigList",
      },
      gcp_config: {
        value: googleManagedKafkaClusterGcpConfigToHclTerraform(this._gcpConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleManagedKafkaClusterGcpConfigList",
      },
      rebalance_config: {
        value: googleManagedKafkaClusterRebalanceConfigToHclTerraform(this._rebalanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleManagedKafkaClusterRebalanceConfigList",
      },
      timeouts: {
        value: googleManagedKafkaClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleManagedKafkaClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
