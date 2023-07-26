// https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataprocClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#graceful_decommission_timeout GoogleDataprocCluster#graceful_decommission_timeout}
  */
  readonly gracefulDecommissionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#id GoogleDataprocCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The list of labels (key/value pairs) to be applied to instances in the cluster. GCP generates some itself including goog-dataproc-cluster-name which is the name of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#labels GoogleDataprocCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the cluster, unique within the project and zone.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#name GoogleDataprocCluster#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the cluster will exist. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#project GoogleDataprocCluster#project}
  */
  readonly project?: string;
  /**
  * The region in which the cluster and associated nodes will be created in. Defaults to global.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#region GoogleDataprocCluster#region}
  */
  readonly region?: string;
  /**
  * cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#cluster_config GoogleDataprocCluster#cluster_config}
  */
  readonly clusterConfig?: GoogleDataprocClusterClusterConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#timeouts GoogleDataprocCluster#timeouts}
  */
  readonly timeouts?: GoogleDataprocClusterTimeouts;
  /**
  * virtual_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#virtual_cluster_config GoogleDataprocCluster#virtual_cluster_config}
  */
  readonly virtualClusterConfig?: GoogleDataprocClusterVirtualClusterConfig;
}
export interface GoogleDataprocClusterClusterConfigAutoscalingConfig {
  /**
  * The autoscaling policy used by the cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#policy_uri GoogleDataprocCluster#policy_uri}
  */
  readonly policyUri: string;
}

export function googleDataprocClusterClusterConfigAutoscalingConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigAutoscalingConfigOutputReference | GoogleDataprocClusterClusterConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_uri: cdktf.stringToTerraform(struct!.policyUri),
  }
}

export class GoogleDataprocClusterClusterConfigAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyUri = this._policyUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyUri = value.policyUri;
    }
  }

  // policy_uri - computed: false, optional: false, required: true
  private _policyUri?: string; 
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }
  public set policyUri(value: string) {
    this._policyUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriInput() {
    return this._policyUri;
  }
}
export interface GoogleDataprocClusterClusterConfigDataprocMetricConfigMetrics {
  /**
  * Specify one or more [available OSS metrics] (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#metric_overrides GoogleDataprocCluster#metric_overrides}
  */
  readonly metricOverrides?: string[];
  /**
  * A source for the collection of Dataproc OSS metrics (see [available OSS metrics] (https://cloud.google.com//dataproc/docs/guides/monitoring#available_oss_metrics)).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#metric_source GoogleDataprocCluster#metric_source}
  */
  readonly metricSource: string;
}

export function googleDataprocClusterClusterConfigDataprocMetricConfigMetricsToTerraform(struct?: GoogleDataprocClusterClusterConfigDataprocMetricConfigMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_overrides: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metricOverrides),
    metric_source: cdktf.stringToTerraform(struct!.metricSource),
  }
}

export class GoogleDataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataprocClusterClusterConfigDataprocMetricConfigMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricOverrides = this._metricOverrides;
    }
    if (this._metricSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSource = this._metricSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigDataprocMetricConfigMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricOverrides = undefined;
      this._metricSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricOverrides = value.metricOverrides;
      this._metricSource = value.metricSource;
    }
  }

  // metric_overrides - computed: false, optional: true, required: false
  private _metricOverrides?: string[]; 
  public get metricOverrides() {
    return cdktf.Fn.tolist(this.getListAttribute('metric_overrides'));
  }
  public set metricOverrides(value: string[]) {
    this._metricOverrides = value;
  }
  public resetMetricOverrides() {
    this._metricOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOverridesInput() {
    return this._metricOverrides;
  }

  // metric_source - computed: false, optional: false, required: true
  private _metricSource?: string; 
  public get metricSource() {
    return this.getStringAttribute('metric_source');
  }
  public set metricSource(value: string) {
    this._metricSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSourceInput() {
    return this._metricSource;
  }
}

export class GoogleDataprocClusterClusterConfigDataprocMetricConfigMetricsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocClusterClusterConfigDataprocMetricConfigMetrics[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference {
    return new GoogleDataprocClusterClusterConfigDataprocMetricConfigMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocClusterClusterConfigDataprocMetricConfig {
  /**
  * metrics block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#metrics GoogleDataprocCluster#metrics}
  */
  readonly metrics: GoogleDataprocClusterClusterConfigDataprocMetricConfigMetrics[] | cdktf.IResolvable;
}

export function googleDataprocClusterClusterConfigDataprocMetricConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigDataprocMetricConfigOutputReference | GoogleDataprocClusterClusterConfigDataprocMetricConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics: cdktf.listMapper(googleDataprocClusterClusterConfigDataprocMetricConfigMetricsToTerraform, true)(struct!.metrics),
  }
}

export class GoogleDataprocClusterClusterConfigDataprocMetricConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigDataprocMetricConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigDataprocMetricConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metrics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metrics.internalValue = value.metrics;
    }
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new GoogleDataprocClusterClusterConfigDataprocMetricConfigMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: GoogleDataprocClusterClusterConfigDataprocMetricConfigMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}
export interface GoogleDataprocClusterClusterConfigEncryptionConfig {
  /**
  * The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#kms_key_name GoogleDataprocCluster#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleDataprocClusterClusterConfigEncryptionConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigEncryptionConfigOutputReference | GoogleDataprocClusterClusterConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class GoogleDataprocClusterClusterConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleDataprocClusterClusterConfigEndpointConfig {
  /**
  * The flag to enable http access to specific ports on the cluster from external sources (aka Component Gateway). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#enable_http_port_access GoogleDataprocCluster#enable_http_port_access}
  */
  readonly enableHttpPortAccess: boolean | cdktf.IResolvable;
}

export function googleDataprocClusterClusterConfigEndpointConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigEndpointConfigOutputReference | GoogleDataprocClusterClusterConfigEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http_port_access: cdktf.booleanToTerraform(struct!.enableHttpPortAccess),
  }
}

export class GoogleDataprocClusterClusterConfigEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttpPortAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpPortAccess = this._enableHttpPortAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHttpPortAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHttpPortAccess = value.enableHttpPortAccess;
    }
  }

  // enable_http_port_access - computed: false, optional: false, required: true
  private _enableHttpPortAccess?: boolean | cdktf.IResolvable; 
  public get enableHttpPortAccess() {
    return this.getBooleanAttribute('enable_http_port_access');
  }
  public set enableHttpPortAccess(value: boolean | cdktf.IResolvable) {
    this._enableHttpPortAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpPortAccessInput() {
    return this._enableHttpPortAccess;
  }

  // http_ports - computed: true, optional: false, required: false
  private _httpPorts = new cdktf.StringMap(this, "http_ports");
  public get httpPorts() {
    return this._httpPorts;
  }
}
export interface GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity {
  /**
  * The URI of a sole-tenant that the cluster will be created on.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#node_group_uri GoogleDataprocCluster#node_group_uri}
  */
  readonly nodeGroupUri: string;
}

export function googleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct?: GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference | GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_group_uri: cdktf.stringToTerraform(struct!.nodeGroupUri),
  }
}

export class GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroupUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupUri = this._nodeGroupUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeGroupUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeGroupUri = value.nodeGroupUri;
    }
  }

  // node_group_uri - computed: false, optional: false, required: true
  private _nodeGroupUri?: string; 
  public get nodeGroupUri() {
    return this.getStringAttribute('node_group_uri');
  }
  public set nodeGroupUri(value: string) {
    this._nodeGroupUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupUriInput() {
    return this._nodeGroupUri;
  }
}
export interface GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinity {
  /**
  * Type of reservation to consume.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#consume_reservation_type GoogleDataprocCluster#consume_reservation_type}
  */
  readonly consumeReservationType?: string;
  /**
  * Corresponds to the label key of reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#key GoogleDataprocCluster#key}
  */
  readonly key?: string;
  /**
  * Corresponds to the label values of reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#values GoogleDataprocCluster#values}
  */
  readonly values?: string[];
}

export function googleDataprocClusterClusterConfigGceClusterConfigReservationAffinityToTerraform(struct?: GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference | GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: true, required: false
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  public resetConsumeReservationType() {
    this._consumeReservationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
  /**
  * Defines whether instances have integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#enable_integrity_monitoring GoogleDataprocCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether instances have Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#enable_secure_boot GoogleDataprocCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether instances have the vTPM enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#enable_vtpm GoogleDataprocCluster#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function googleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference | GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export class GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig | undefined {
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
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
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

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface GoogleDataprocClusterClusterConfigGceClusterConfig {
  /**
  * By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. If set to true, all instances in the cluster will only have internal IP addresses. Note: Private Google Access (also known as privateIpGoogleAccess) must be enabled on the subnetwork that the cluster will be launched in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#internal_ip_only GoogleDataprocCluster#internal_ip_only}
  */
  readonly internalIpOnly?: boolean | cdktf.IResolvable;
  /**
  * A map of the Compute Engine metadata entries to add to all instances
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#metadata GoogleDataprocCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name or self_link of the Google Compute Engine network to the cluster will be part of. Conflicts with subnetwork. If neither is specified, this defaults to the "default" network.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#network GoogleDataprocCluster#network}
  */
  readonly network?: string;
  /**
  * The service account to be used by the Node VMs. If not specified, the "default" service account is used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#service_account GoogleDataprocCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs under the service_account specified. These can be either FQDNs, or scope aliases.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#service_account_scopes GoogleDataprocCluster#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#subnetwork GoogleDataprocCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The list of instance tags applied to instances in the cluster. Tags are used to identify valid sources or targets for network firewalls.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#tags GoogleDataprocCluster#tags}
  */
  readonly tags?: string[];
  /**
  * The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#zone GoogleDataprocCluster#zone}
  */
  readonly zone?: string;
  /**
  * node_group_affinity block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#node_group_affinity GoogleDataprocCluster#node_group_affinity}
  */
  readonly nodeGroupAffinity?: GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity;
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#reservation_affinity GoogleDataprocCluster#reservation_affinity}
  */
  readonly reservationAffinity?: GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinity;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#shielded_instance_config GoogleDataprocCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig;
}

export function googleDataprocClusterClusterConfigGceClusterConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigGceClusterConfigOutputReference | GoogleDataprocClusterClusterConfigGceClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip_only: cdktf.booleanToTerraform(struct!.internalIpOnly),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountScopes),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
    node_group_affinity: googleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityToTerraform(struct!.nodeGroupAffinity),
    reservation_affinity: googleDataprocClusterClusterConfigGceClusterConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    shielded_instance_config: googleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}

export class GoogleDataprocClusterClusterConfigGceClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigGceClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpOnly = this._internalIpOnly;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountScopes = this._serviceAccountScopes;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._nodeGroupAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupAffinity = this._nodeGroupAffinity?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigGceClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalIpOnly = undefined;
      this._metadata = undefined;
      this._network = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountScopes = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
      this._zone = undefined;
      this._nodeGroupAffinity.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalIpOnly = value.internalIpOnly;
      this._metadata = value.metadata;
      this._network = value.network;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountScopes = value.serviceAccountScopes;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
      this._zone = value.zone;
      this._nodeGroupAffinity.internalValue = value.nodeGroupAffinity;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // internal_ip_only - computed: false, optional: true, required: false
  private _internalIpOnly?: boolean | cdktf.IResolvable; 
  public get internalIpOnly() {
    return this.getBooleanAttribute('internal_ip_only');
  }
  public set internalIpOnly(value: boolean | cdktf.IResolvable) {
    this._internalIpOnly = value;
  }
  public resetInternalIpOnly() {
    this._internalIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpOnlyInput() {
    return this._internalIpOnly;
  }

  // metadata - computed: false, optional: true, required: false
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

  // network - computed: true, optional: true, required: false
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

  // service_account - computed: false, optional: true, required: false
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

  // service_account_scopes - computed: true, optional: true, required: false
  private _serviceAccountScopes?: string[]; 
  public get serviceAccountScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_scopes'));
  }
  public set serviceAccountScopes(value: string[]) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes;
  }

  // subnetwork - computed: false, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // zone - computed: true, optional: true, required: false
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

  // node_group_affinity - computed: false, optional: true, required: false
  private _nodeGroupAffinity = new GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinityOutputReference(this, "node_group_affinity");
  public get nodeGroupAffinity() {
    return this._nodeGroupAffinity;
  }
  public putNodeGroupAffinity(value: GoogleDataprocClusterClusterConfigGceClusterConfigNodeGroupAffinity) {
    this._nodeGroupAffinity.internalValue = value;
  }
  public resetNodeGroupAffinity() {
    this._nodeGroupAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupAffinityInput() {
    return this._nodeGroupAffinity.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: GoogleDataprocClusterClusterConfigGceClusterConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleDataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface GoogleDataprocClusterClusterConfigInitializationAction {
  /**
  * The script to be executed during initialization of the cluster. The script must be a GCS file with a gs:// prefix.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#script GoogleDataprocCluster#script}
  */
  readonly script: string;
  /**
  * The maximum duration (in seconds) which script is allowed to take to execute its action. GCP will default to a predetermined computed value if not set (currently 300).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#timeout_sec GoogleDataprocCluster#timeout_sec}
  */
  readonly timeoutSec?: number;
}

export function googleDataprocClusterClusterConfigInitializationActionToTerraform(struct?: GoogleDataprocClusterClusterConfigInitializationAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
    timeout_sec: cdktf.numberToTerraform(struct!.timeoutSec),
  }
}

export class GoogleDataprocClusterClusterConfigInitializationActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataprocClusterClusterConfigInitializationAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._timeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSec = this._timeoutSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigInitializationAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._script = undefined;
      this._timeoutSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._script = value.script;
      this._timeoutSec = value.timeoutSec;
    }
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // timeout_sec - computed: false, optional: true, required: false
  private _timeoutSec?: number; 
  public get timeoutSec() {
    return this.getNumberAttribute('timeout_sec');
  }
  public set timeoutSec(value: number) {
    this._timeoutSec = value;
  }
  public resetTimeoutSec() {
    this._timeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecInput() {
    return this._timeoutSec;
  }
}

export class GoogleDataprocClusterClusterConfigInitializationActionList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocClusterClusterConfigInitializationAction[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataprocClusterClusterConfigInitializationActionOutputReference {
    return new GoogleDataprocClusterClusterConfigInitializationActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocClusterClusterConfigLifecycleConfig {
  /**
  * The time when cluster will be auto-deleted. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#auto_delete_time GoogleDataprocCluster#auto_delete_time}
  */
  readonly autoDeleteTime?: string;
  /**
  * The duration to keep the cluster alive while idling (no jobs running). After this TTL, the cluster will be deleted. Valid range: [10m, 14d].
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#idle_delete_ttl GoogleDataprocCluster#idle_delete_ttl}
  */
  readonly idleDeleteTtl?: string;
}

export function googleDataprocClusterClusterConfigLifecycleConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigLifecycleConfigOutputReference | GoogleDataprocClusterClusterConfigLifecycleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_delete_time: cdktf.stringToTerraform(struct!.autoDeleteTime),
    idle_delete_ttl: cdktf.stringToTerraform(struct!.idleDeleteTtl),
  }
}

export class GoogleDataprocClusterClusterConfigLifecycleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigLifecycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeleteTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeleteTime = this._autoDeleteTime;
    }
    if (this._idleDeleteTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDeleteTtl = this._idleDeleteTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigLifecycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDeleteTime = undefined;
      this._idleDeleteTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDeleteTime = value.autoDeleteTime;
      this._idleDeleteTtl = value.idleDeleteTtl;
    }
  }

  // auto_delete_time - computed: false, optional: true, required: false
  private _autoDeleteTime?: string; 
  public get autoDeleteTime() {
    return this.getStringAttribute('auto_delete_time');
  }
  public set autoDeleteTime(value: string) {
    this._autoDeleteTime = value;
  }
  public resetAutoDeleteTime() {
    this._autoDeleteTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteTimeInput() {
    return this._autoDeleteTime;
  }

  // idle_delete_ttl - computed: false, optional: true, required: false
  private _idleDeleteTtl?: string; 
  public get idleDeleteTtl() {
    return this.getStringAttribute('idle_delete_ttl');
  }
  public set idleDeleteTtl(value: string) {
    this._idleDeleteTtl = value;
  }
  public resetIdleDeleteTtl() {
    this._idleDeleteTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDeleteTtlInput() {
    return this._idleDeleteTtl;
  }

  // idle_start_time - computed: true, optional: false, required: false
  public get idleStartTime() {
    return this.getStringAttribute('idle_start_time');
  }
}
export interface GoogleDataprocClusterClusterConfigMasterConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#accelerator_count GoogleDataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#accelerator_type GoogleDataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function googleDataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform(struct?: GoogleDataprocClusterClusterConfigMasterConfigAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export class GoogleDataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataprocClusterClusterConfigMasterConfigAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigMasterConfigAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
    }
  }

  // accelerator_count - computed: false, optional: false, required: true
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class GoogleDataprocClusterClusterConfigMasterConfigAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocClusterClusterConfigMasterConfigAccelerators[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference {
    return new GoogleDataprocClusterClusterConfigMasterConfigAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocClusterClusterConfigMasterConfigDiskConfig {
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#boot_disk_size_gb GoogleDataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#boot_disk_type GoogleDataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#num_local_ssds GoogleDataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function googleDataprocClusterClusterConfigMasterConfigDiskConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigMasterConfigDiskConfigOutputReference | GoogleDataprocClusterClusterConfigMasterConfigDiskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class GoogleDataprocClusterClusterConfigMasterConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigMasterConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigMasterConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface GoogleDataprocClusterClusterConfigMasterConfig {
  /**
  * The URI for the image to use for this master/worker
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#image_uri GoogleDataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master/worker
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#machine_type GoogleDataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#min_cpu_platform GoogleDataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#num_instances GoogleDataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#accelerators GoogleDataprocCluster#accelerators}
  */
  readonly accelerators?: GoogleDataprocClusterClusterConfigMasterConfigAccelerators[] | cdktf.IResolvable;
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#disk_config GoogleDataprocCluster#disk_config}
  */
  readonly diskConfig?: GoogleDataprocClusterClusterConfigMasterConfigDiskConfig;
}

export function googleDataprocClusterClusterConfigMasterConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigMasterConfigOutputReference | GoogleDataprocClusterClusterConfigMasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    accelerators: cdktf.listMapper(googleDataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform, true)(struct!.accelerators),
    disk_config: googleDataprocClusterClusterConfigMasterConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class GoogleDataprocClusterClusterConfigMasterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigMasterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigMasterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._accelerators.internalValue = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._accelerators.internalValue = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // instance_names - computed: true, optional: false, required: false
  public get instanceNames() {
    return this.getListAttribute('instance_names');
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

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new GoogleDataprocClusterClusterConfigMasterConfigAcceleratorsList(this, "accelerators", true);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: GoogleDataprocClusterClusterConfigMasterConfigAccelerators[] | cdktf.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new GoogleDataprocClusterClusterConfigMasterConfigDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: GoogleDataprocClusterClusterConfigMasterConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}
export interface GoogleDataprocClusterClusterConfigMetastoreConfig {
  /**
  * Resource name of an existing Dataproc Metastore service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#dataproc_metastore_service GoogleDataprocCluster#dataproc_metastore_service}
  */
  readonly dataprocMetastoreService: string;
}

export function googleDataprocClusterClusterConfigMetastoreConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigMetastoreConfigOutputReference | GoogleDataprocClusterClusterConfigMetastoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_metastore_service: cdktf.stringToTerraform(struct!.dataprocMetastoreService),
  }
}

export class GoogleDataprocClusterClusterConfigMetastoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigMetastoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocMetastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocMetastoreService = this._dataprocMetastoreService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigMetastoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocMetastoreService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocMetastoreService = value.dataprocMetastoreService;
    }
  }

  // dataproc_metastore_service - computed: false, optional: false, required: true
  private _dataprocMetastoreService?: string; 
  public get dataprocMetastoreService() {
    return this.getStringAttribute('dataproc_metastore_service');
  }
  public set dataprocMetastoreService(value: string) {
    this._dataprocMetastoreService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetastoreServiceInput() {
    return this._dataprocMetastoreService;
  }
}
export interface GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig {
  /**
  * Size of the primary disk attached to each preemptible worker node, specified in GB. The smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#boot_disk_size_gb GoogleDataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each preemptible worker node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#boot_disk_type GoogleDataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#num_local_ssds GoogleDataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function googleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference | GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface GoogleDataprocClusterClusterConfigPreemptibleWorkerConfig {
  /**
  * Specifies the number of preemptible nodes to create. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#num_instances GoogleDataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * Specifies the preemptibility of the secondary nodes. Defaults to PREEMPTIBLE.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#preemptibility GoogleDataprocCluster#preemptibility}
  */
  readonly preemptibility?: string;
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#disk_config GoogleDataprocCluster#disk_config}
  */
  readonly diskConfig?: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig;
}

export function googleDataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference | GoogleDataprocClusterClusterConfigPreemptibleWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    preemptibility: cdktf.stringToTerraform(struct!.preemptibility),
    disk_config: googleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigPreemptibleWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._preemptibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibility = this._preemptibility;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numInstances = undefined;
      this._preemptibility = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numInstances = value.numInstances;
      this._preemptibility = value.preemptibility;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // instance_names - computed: true, optional: false, required: false
  public get instanceNames() {
    return this.getListAttribute('instance_names');
  }

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // preemptibility - computed: false, optional: true, required: false
  private _preemptibility?: string; 
  public get preemptibility() {
    return this.getStringAttribute('preemptibility');
  }
  public set preemptibility(value: string) {
    this._preemptibility = value;
  }
  public resetPreemptibility() {
    this._preemptibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibilityInput() {
    return this._preemptibility;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}
export interface GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfig {
  /**
  * The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#cross_realm_trust_admin_server GoogleDataprocCluster#cross_realm_trust_admin_server}
  */
  readonly crossRealmTrustAdminServer?: string;
  /**
  * The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#cross_realm_trust_kdc GoogleDataprocCluster#cross_realm_trust_kdc}
  */
  readonly crossRealmTrustKdc?: string;
  /**
  * The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#cross_realm_trust_realm GoogleDataprocCluster#cross_realm_trust_realm}
  */
  readonly crossRealmTrustRealm?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster
Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#cross_realm_trust_shared_password_uri GoogleDataprocCluster#cross_realm_trust_shared_password_uri}
  */
  readonly crossRealmTrustSharedPasswordUri?: string;
  /**
  * Flag to indicate whether to Kerberize the cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#enable_kerberos GoogleDataprocCluster#enable_kerberos}
  */
  readonly enableKerberos?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#kdc_db_key_uri GoogleDataprocCluster#kdc_db_key_uri}
  */
  readonly kdcDbKeyUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#key_password_uri GoogleDataprocCluster#key_password_uri}
  */
  readonly keyPasswordUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided keystore. For the self-signed certificate, this password is generated
by Dataproc
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#keystore_password_uri GoogleDataprocCluster#keystore_password_uri}
  */
  readonly keystorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#keystore_uri GoogleDataprocCluster#keystore_uri}
  */
  readonly keystoreUri?: string;
  /**
  * The uri of the KMS key used to encrypt various sensitive files.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#kms_key_uri GoogleDataprocCluster#kms_key_uri}
  */
  readonly kmsKeyUri: string;
  /**
  * The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#realm GoogleDataprocCluster#realm}
  */
  readonly realm?: string;
  /**
  * The cloud Storage URI of a KMS encrypted file containing the root principal password.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#root_principal_password_uri GoogleDataprocCluster#root_principal_password_uri}
  */
  readonly rootPrincipalPasswordUri: string;
  /**
  * The lifetime of the ticket granting ticket, in hours.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#tgt_lifetime_hours GoogleDataprocCluster#tgt_lifetime_hours}
  */
  readonly tgtLifetimeHours?: number;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#truststore_password_uri GoogleDataprocCluster#truststore_password_uri}
  */
  readonly truststorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#truststore_uri GoogleDataprocCluster#truststore_uri}
  */
  readonly truststoreUri?: string;
}

export function googleDataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference | GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_realm_trust_admin_server: cdktf.stringToTerraform(struct!.crossRealmTrustAdminServer),
    cross_realm_trust_kdc: cdktf.stringToTerraform(struct!.crossRealmTrustKdc),
    cross_realm_trust_realm: cdktf.stringToTerraform(struct!.crossRealmTrustRealm),
    cross_realm_trust_shared_password_uri: cdktf.stringToTerraform(struct!.crossRealmTrustSharedPasswordUri),
    enable_kerberos: cdktf.booleanToTerraform(struct!.enableKerberos),
    kdc_db_key_uri: cdktf.stringToTerraform(struct!.kdcDbKeyUri),
    key_password_uri: cdktf.stringToTerraform(struct!.keyPasswordUri),
    keystore_password_uri: cdktf.stringToTerraform(struct!.keystorePasswordUri),
    keystore_uri: cdktf.stringToTerraform(struct!.keystoreUri),
    kms_key_uri: cdktf.stringToTerraform(struct!.kmsKeyUri),
    realm: cdktf.stringToTerraform(struct!.realm),
    root_principal_password_uri: cdktf.stringToTerraform(struct!.rootPrincipalPasswordUri),
    tgt_lifetime_hours: cdktf.numberToTerraform(struct!.tgtLifetimeHours),
    truststore_password_uri: cdktf.stringToTerraform(struct!.truststorePasswordUri),
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
  }
}

export class GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossRealmTrustAdminServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustAdminServer = this._crossRealmTrustAdminServer;
    }
    if (this._crossRealmTrustKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustKdc = this._crossRealmTrustKdc;
    }
    if (this._crossRealmTrustRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustRealm = this._crossRealmTrustRealm;
    }
    if (this._crossRealmTrustSharedPasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustSharedPasswordUri = this._crossRealmTrustSharedPasswordUri;
    }
    if (this._enableKerberos !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKerberos = this._enableKerberos;
    }
    if (this._kdcDbKeyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcDbKeyUri = this._kdcDbKeyUri;
    }
    if (this._keyPasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPasswordUri = this._keyPasswordUri;
    }
    if (this._keystorePasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystorePasswordUri = this._keystorePasswordUri;
    }
    if (this._keystoreUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoreUri = this._keystoreUri;
    }
    if (this._kmsKeyUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyUri = this._kmsKeyUri;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._rootPrincipalPasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPrincipalPasswordUri = this._rootPrincipalPasswordUri;
    }
    if (this._tgtLifetimeHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtLifetimeHours = this._tgtLifetimeHours;
    }
    if (this._truststorePasswordUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststorePasswordUri = this._truststorePasswordUri;
    }
    if (this._truststoreUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststoreUri = this._truststoreUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossRealmTrustAdminServer = undefined;
      this._crossRealmTrustKdc = undefined;
      this._crossRealmTrustRealm = undefined;
      this._crossRealmTrustSharedPasswordUri = undefined;
      this._enableKerberos = undefined;
      this._kdcDbKeyUri = undefined;
      this._keyPasswordUri = undefined;
      this._keystorePasswordUri = undefined;
      this._keystoreUri = undefined;
      this._kmsKeyUri = undefined;
      this._realm = undefined;
      this._rootPrincipalPasswordUri = undefined;
      this._tgtLifetimeHours = undefined;
      this._truststorePasswordUri = undefined;
      this._truststoreUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossRealmTrustAdminServer = value.crossRealmTrustAdminServer;
      this._crossRealmTrustKdc = value.crossRealmTrustKdc;
      this._crossRealmTrustRealm = value.crossRealmTrustRealm;
      this._crossRealmTrustSharedPasswordUri = value.crossRealmTrustSharedPasswordUri;
      this._enableKerberos = value.enableKerberos;
      this._kdcDbKeyUri = value.kdcDbKeyUri;
      this._keyPasswordUri = value.keyPasswordUri;
      this._keystorePasswordUri = value.keystorePasswordUri;
      this._keystoreUri = value.keystoreUri;
      this._kmsKeyUri = value.kmsKeyUri;
      this._realm = value.realm;
      this._rootPrincipalPasswordUri = value.rootPrincipalPasswordUri;
      this._tgtLifetimeHours = value.tgtLifetimeHours;
      this._truststorePasswordUri = value.truststorePasswordUri;
      this._truststoreUri = value.truststoreUri;
    }
  }

  // cross_realm_trust_admin_server - computed: false, optional: true, required: false
  private _crossRealmTrustAdminServer?: string; 
  public get crossRealmTrustAdminServer() {
    return this.getStringAttribute('cross_realm_trust_admin_server');
  }
  public set crossRealmTrustAdminServer(value: string) {
    this._crossRealmTrustAdminServer = value;
  }
  public resetCrossRealmTrustAdminServer() {
    this._crossRealmTrustAdminServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustAdminServerInput() {
    return this._crossRealmTrustAdminServer;
  }

  // cross_realm_trust_kdc - computed: false, optional: true, required: false
  private _crossRealmTrustKdc?: string; 
  public get crossRealmTrustKdc() {
    return this.getStringAttribute('cross_realm_trust_kdc');
  }
  public set crossRealmTrustKdc(value: string) {
    this._crossRealmTrustKdc = value;
  }
  public resetCrossRealmTrustKdc() {
    this._crossRealmTrustKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustKdcInput() {
    return this._crossRealmTrustKdc;
  }

  // cross_realm_trust_realm - computed: false, optional: true, required: false
  private _crossRealmTrustRealm?: string; 
  public get crossRealmTrustRealm() {
    return this.getStringAttribute('cross_realm_trust_realm');
  }
  public set crossRealmTrustRealm(value: string) {
    this._crossRealmTrustRealm = value;
  }
  public resetCrossRealmTrustRealm() {
    this._crossRealmTrustRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustRealmInput() {
    return this._crossRealmTrustRealm;
  }

  // cross_realm_trust_shared_password_uri - computed: false, optional: true, required: false
  private _crossRealmTrustSharedPasswordUri?: string; 
  public get crossRealmTrustSharedPasswordUri() {
    return this.getStringAttribute('cross_realm_trust_shared_password_uri');
  }
  public set crossRealmTrustSharedPasswordUri(value: string) {
    this._crossRealmTrustSharedPasswordUri = value;
  }
  public resetCrossRealmTrustSharedPasswordUri() {
    this._crossRealmTrustSharedPasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustSharedPasswordUriInput() {
    return this._crossRealmTrustSharedPasswordUri;
  }

  // enable_kerberos - computed: false, optional: true, required: false
  private _enableKerberos?: boolean | cdktf.IResolvable; 
  public get enableKerberos() {
    return this.getBooleanAttribute('enable_kerberos');
  }
  public set enableKerberos(value: boolean | cdktf.IResolvable) {
    this._enableKerberos = value;
  }
  public resetEnableKerberos() {
    this._enableKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKerberosInput() {
    return this._enableKerberos;
  }

  // kdc_db_key_uri - computed: false, optional: true, required: false
  private _kdcDbKeyUri?: string; 
  public get kdcDbKeyUri() {
    return this.getStringAttribute('kdc_db_key_uri');
  }
  public set kdcDbKeyUri(value: string) {
    this._kdcDbKeyUri = value;
  }
  public resetKdcDbKeyUri() {
    this._kdcDbKeyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcDbKeyUriInput() {
    return this._kdcDbKeyUri;
  }

  // key_password_uri - computed: false, optional: true, required: false
  private _keyPasswordUri?: string; 
  public get keyPasswordUri() {
    return this.getStringAttribute('key_password_uri');
  }
  public set keyPasswordUri(value: string) {
    this._keyPasswordUri = value;
  }
  public resetKeyPasswordUri() {
    this._keyPasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordUriInput() {
    return this._keyPasswordUri;
  }

  // keystore_password_uri - computed: false, optional: true, required: false
  private _keystorePasswordUri?: string; 
  public get keystorePasswordUri() {
    return this.getStringAttribute('keystore_password_uri');
  }
  public set keystorePasswordUri(value: string) {
    this._keystorePasswordUri = value;
  }
  public resetKeystorePasswordUri() {
    this._keystorePasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordUriInput() {
    return this._keystorePasswordUri;
  }

  // keystore_uri - computed: false, optional: true, required: false
  private _keystoreUri?: string; 
  public get keystoreUri() {
    return this.getStringAttribute('keystore_uri');
  }
  public set keystoreUri(value: string) {
    this._keystoreUri = value;
  }
  public resetKeystoreUri() {
    this._keystoreUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreUriInput() {
    return this._keystoreUri;
  }

  // kms_key_uri - computed: false, optional: false, required: true
  private _kmsKeyUri?: string; 
  public get kmsKeyUri() {
    return this.getStringAttribute('kms_key_uri');
  }
  public set kmsKeyUri(value: string) {
    this._kmsKeyUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyUriInput() {
    return this._kmsKeyUri;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // root_principal_password_uri - computed: false, optional: false, required: true
  private _rootPrincipalPasswordUri?: string; 
  public get rootPrincipalPasswordUri() {
    return this.getStringAttribute('root_principal_password_uri');
  }
  public set rootPrincipalPasswordUri(value: string) {
    this._rootPrincipalPasswordUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPrincipalPasswordUriInput() {
    return this._rootPrincipalPasswordUri;
  }

  // tgt_lifetime_hours - computed: false, optional: true, required: false
  private _tgtLifetimeHours?: number; 
  public get tgtLifetimeHours() {
    return this.getNumberAttribute('tgt_lifetime_hours');
  }
  public set tgtLifetimeHours(value: number) {
    this._tgtLifetimeHours = value;
  }
  public resetTgtLifetimeHours() {
    this._tgtLifetimeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtLifetimeHoursInput() {
    return this._tgtLifetimeHours;
  }

  // truststore_password_uri - computed: false, optional: true, required: false
  private _truststorePasswordUri?: string; 
  public get truststorePasswordUri() {
    return this.getStringAttribute('truststore_password_uri');
  }
  public set truststorePasswordUri(value: string) {
    this._truststorePasswordUri = value;
  }
  public resetTruststorePasswordUri() {
    this._truststorePasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststorePasswordUriInput() {
    return this._truststorePasswordUri;
  }

  // truststore_uri - computed: false, optional: true, required: false
  private _truststoreUri?: string; 
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }
  public set truststoreUri(value: string) {
    this._truststoreUri = value;
  }
  public resetTruststoreUri() {
    this._truststoreUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreUriInput() {
    return this._truststoreUri;
  }
}
export interface GoogleDataprocClusterClusterConfigSecurityConfig {
  /**
  * kerberos_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#kerberos_config GoogleDataprocCluster#kerberos_config}
  */
  readonly kerberosConfig: GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfig;
}

export function googleDataprocClusterClusterConfigSecurityConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigSecurityConfigOutputReference | GoogleDataprocClusterClusterConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_config: googleDataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}

export class GoogleDataprocClusterClusterConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosConfig = this._kerberosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kerberosConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kerberosConfig.internalValue = value.kerberosConfig;
    }
  }

  // kerberos_config - computed: false, optional: false, required: true
  private _kerberosConfig = new GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference(this, "kerberos_config");
  public get kerberosConfig() {
    return this._kerberosConfig;
  }
  public putKerberosConfig(value: GoogleDataprocClusterClusterConfigSecurityConfigKerberosConfig) {
    this._kerberosConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosConfigInput() {
    return this._kerberosConfig.internalValue;
  }
}
export interface GoogleDataprocClusterClusterConfigSoftwareConfig {
  /**
  * The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters. If not specified, defaults to the latest version.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#image_version GoogleDataprocCluster#image_version}
  */
  readonly imageVersion?: string;
  /**
  * The set of optional components to activate on the cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#optional_components GoogleDataprocCluster#optional_components}
  */
  readonly optionalComponents?: string[];
  /**
  * A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#override_properties GoogleDataprocCluster#override_properties}
  */
  readonly overrideProperties?: { [key: string]: string };
}

export function googleDataprocClusterClusterConfigSoftwareConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigSoftwareConfigOutputReference | GoogleDataprocClusterClusterConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    optional_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionalComponents),
    override_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overrideProperties),
  }
}

export class GoogleDataprocClusterClusterConfigSoftwareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._optionalComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalComponents = this._optionalComponents;
    }
    if (this._overrideProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProperties = this._overrideProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageVersion = undefined;
      this._optionalComponents = undefined;
      this._overrideProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageVersion = value.imageVersion;
      this._optionalComponents = value.optionalComponents;
      this._overrideProperties = value.overrideProperties;
    }
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // optional_components - computed: false, optional: true, required: false
  private _optionalComponents?: string[]; 
  public get optionalComponents() {
    return cdktf.Fn.tolist(this.getListAttribute('optional_components'));
  }
  public set optionalComponents(value: string[]) {
    this._optionalComponents = value;
  }
  public resetOptionalComponents() {
    this._optionalComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalComponentsInput() {
    return this._optionalComponents;
  }

  // override_properties - computed: false, optional: true, required: false
  private _overrideProperties?: { [key: string]: string }; 
  public get overrideProperties() {
    return this.getStringMapAttribute('override_properties');
  }
  public set overrideProperties(value: { [key: string]: string }) {
    this._overrideProperties = value;
  }
  public resetOverrideProperties() {
    this._overrideProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePropertiesInput() {
    return this._overrideProperties;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }
}
export interface GoogleDataprocClusterClusterConfigWorkerConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#accelerator_count GoogleDataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#accelerator_type GoogleDataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function googleDataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: GoogleDataprocClusterClusterConfigWorkerConfigAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export class GoogleDataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataprocClusterClusterConfigWorkerConfigAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigWorkerConfigAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
    }
  }

  // accelerator_count - computed: false, optional: false, required: true
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class GoogleDataprocClusterClusterConfigWorkerConfigAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocClusterClusterConfigWorkerConfigAccelerators[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference {
    return new GoogleDataprocClusterClusterConfigWorkerConfigAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocClusterClusterConfigWorkerConfigDiskConfig {
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#boot_disk_size_gb GoogleDataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. Such as "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#boot_disk_type GoogleDataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#num_local_ssds GoogleDataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function googleDataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference | GoogleDataprocClusterClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class GoogleDataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigWorkerConfigDiskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface GoogleDataprocClusterClusterConfigWorkerConfig {
  /**
  * The URI for the image to use for this master/worker
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#image_uri GoogleDataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master/worker
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#machine_type GoogleDataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#min_cpu_platform GoogleDataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#num_instances GoogleDataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#accelerators GoogleDataprocCluster#accelerators}
  */
  readonly accelerators?: GoogleDataprocClusterClusterConfigWorkerConfigAccelerators[] | cdktf.IResolvable;
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#disk_config GoogleDataprocCluster#disk_config}
  */
  readonly diskConfig?: GoogleDataprocClusterClusterConfigWorkerConfigDiskConfig;
}

export function googleDataprocClusterClusterConfigWorkerConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigWorkerConfigOutputReference | GoogleDataprocClusterClusterConfigWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    accelerators: cdktf.listMapper(googleDataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform, true)(struct!.accelerators),
    disk_config: googleDataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class GoogleDataprocClusterClusterConfigWorkerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfigWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    if (this._diskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfigWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageUri = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._accelerators.internalValue = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageUri = value.imageUri;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._accelerators.internalValue = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // instance_names - computed: true, optional: false, required: false
  public get instanceNames() {
    return this.getListAttribute('instance_names');
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

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new GoogleDataprocClusterClusterConfigWorkerConfigAcceleratorsList(this, "accelerators", true);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: GoogleDataprocClusterClusterConfigWorkerConfigAccelerators[] | cdktf.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new GoogleDataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference(this, "disk_config");
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: GoogleDataprocClusterClusterConfigWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}
export interface GoogleDataprocClusterClusterConfig {
  /**
  * The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster. Note: If you don't explicitly specify a staging_bucket then GCP will auto create / assign one for you. However, you are not guaranteed an auto generated bucket which is solely dedicated to your cluster; it may be shared with other clusters in the same region/zone also choosing to use the auto generation option.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#staging_bucket GoogleDataprocCluster#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. Note: If you don't explicitly specify a temp_bucket then GCP will auto create / assign one for you.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#temp_bucket GoogleDataprocCluster#temp_bucket}
  */
  readonly tempBucket?: string;
  /**
  * autoscaling_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#autoscaling_config GoogleDataprocCluster#autoscaling_config}
  */
  readonly autoscalingConfig?: GoogleDataprocClusterClusterConfigAutoscalingConfig;
  /**
  * dataproc_metric_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#dataproc_metric_config GoogleDataprocCluster#dataproc_metric_config}
  */
  readonly dataprocMetricConfig?: GoogleDataprocClusterClusterConfigDataprocMetricConfig;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#encryption_config GoogleDataprocCluster#encryption_config}
  */
  readonly encryptionConfig?: GoogleDataprocClusterClusterConfigEncryptionConfig;
  /**
  * endpoint_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#endpoint_config GoogleDataprocCluster#endpoint_config}
  */
  readonly endpointConfig?: GoogleDataprocClusterClusterConfigEndpointConfig;
  /**
  * gce_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#gce_cluster_config GoogleDataprocCluster#gce_cluster_config}
  */
  readonly gceClusterConfig?: GoogleDataprocClusterClusterConfigGceClusterConfig;
  /**
  * initialization_action block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#initialization_action GoogleDataprocCluster#initialization_action}
  */
  readonly initializationAction?: GoogleDataprocClusterClusterConfigInitializationAction[] | cdktf.IResolvable;
  /**
  * lifecycle_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#lifecycle_config GoogleDataprocCluster#lifecycle_config}
  */
  readonly lifecycleConfig?: GoogleDataprocClusterClusterConfigLifecycleConfig;
  /**
  * master_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#master_config GoogleDataprocCluster#master_config}
  */
  readonly masterConfig?: GoogleDataprocClusterClusterConfigMasterConfig;
  /**
  * metastore_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#metastore_config GoogleDataprocCluster#metastore_config}
  */
  readonly metastoreConfig?: GoogleDataprocClusterClusterConfigMetastoreConfig;
  /**
  * preemptible_worker_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#preemptible_worker_config GoogleDataprocCluster#preemptible_worker_config}
  */
  readonly preemptibleWorkerConfig?: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfig;
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#security_config GoogleDataprocCluster#security_config}
  */
  readonly securityConfig?: GoogleDataprocClusterClusterConfigSecurityConfig;
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#software_config GoogleDataprocCluster#software_config}
  */
  readonly softwareConfig?: GoogleDataprocClusterClusterConfigSoftwareConfig;
  /**
  * worker_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#worker_config GoogleDataprocCluster#worker_config}
  */
  readonly workerConfig?: GoogleDataprocClusterClusterConfigWorkerConfig;
}

export function googleDataprocClusterClusterConfigToTerraform(struct?: GoogleDataprocClusterClusterConfigOutputReference | GoogleDataprocClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    temp_bucket: cdktf.stringToTerraform(struct!.tempBucket),
    autoscaling_config: googleDataprocClusterClusterConfigAutoscalingConfigToTerraform(struct!.autoscalingConfig),
    dataproc_metric_config: googleDataprocClusterClusterConfigDataprocMetricConfigToTerraform(struct!.dataprocMetricConfig),
    encryption_config: googleDataprocClusterClusterConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    endpoint_config: googleDataprocClusterClusterConfigEndpointConfigToTerraform(struct!.endpointConfig),
    gce_cluster_config: googleDataprocClusterClusterConfigGceClusterConfigToTerraform(struct!.gceClusterConfig),
    initialization_action: cdktf.listMapper(googleDataprocClusterClusterConfigInitializationActionToTerraform, true)(struct!.initializationAction),
    lifecycle_config: googleDataprocClusterClusterConfigLifecycleConfigToTerraform(struct!.lifecycleConfig),
    master_config: googleDataprocClusterClusterConfigMasterConfigToTerraform(struct!.masterConfig),
    metastore_config: googleDataprocClusterClusterConfigMetastoreConfigToTerraform(struct!.metastoreConfig),
    preemptible_worker_config: googleDataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform(struct!.preemptibleWorkerConfig),
    security_config: googleDataprocClusterClusterConfigSecurityConfigToTerraform(struct!.securityConfig),
    software_config: googleDataprocClusterClusterConfigSoftwareConfigToTerraform(struct!.softwareConfig),
    worker_config: googleDataprocClusterClusterConfigWorkerConfigToTerraform(struct!.workerConfig),
  }
}

export class GoogleDataprocClusterClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stagingBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._tempBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempBucket = this._tempBucket;
    }
    if (this._autoscalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfig = this._autoscalingConfig?.internalValue;
    }
    if (this._dataprocMetricConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocMetricConfig = this._dataprocMetricConfig?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._endpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointConfig = this._endpointConfig?.internalValue;
    }
    if (this._gceClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceClusterConfig = this._gceClusterConfig?.internalValue;
    }
    if (this._initializationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializationAction = this._initializationAction?.internalValue;
    }
    if (this._lifecycleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfig = this._lifecycleConfig?.internalValue;
    }
    if (this._masterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterConfig = this._masterConfig?.internalValue;
    }
    if (this._metastoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreConfig = this._metastoreConfig?.internalValue;
    }
    if (this._preemptibleWorkerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibleWorkerConfig = this._preemptibleWorkerConfig?.internalValue;
    }
    if (this._securityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityConfig = this._securityConfig?.internalValue;
    }
    if (this._softwareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareConfig = this._softwareConfig?.internalValue;
    }
    if (this._workerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConfig = this._workerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stagingBucket = undefined;
      this._tempBucket = undefined;
      this._autoscalingConfig.internalValue = undefined;
      this._dataprocMetricConfig.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._endpointConfig.internalValue = undefined;
      this._gceClusterConfig.internalValue = undefined;
      this._initializationAction.internalValue = undefined;
      this._lifecycleConfig.internalValue = undefined;
      this._masterConfig.internalValue = undefined;
      this._metastoreConfig.internalValue = undefined;
      this._preemptibleWorkerConfig.internalValue = undefined;
      this._securityConfig.internalValue = undefined;
      this._softwareConfig.internalValue = undefined;
      this._workerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stagingBucket = value.stagingBucket;
      this._tempBucket = value.tempBucket;
      this._autoscalingConfig.internalValue = value.autoscalingConfig;
      this._dataprocMetricConfig.internalValue = value.dataprocMetricConfig;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._endpointConfig.internalValue = value.endpointConfig;
      this._gceClusterConfig.internalValue = value.gceClusterConfig;
      this._initializationAction.internalValue = value.initializationAction;
      this._lifecycleConfig.internalValue = value.lifecycleConfig;
      this._masterConfig.internalValue = value.masterConfig;
      this._metastoreConfig.internalValue = value.metastoreConfig;
      this._preemptibleWorkerConfig.internalValue = value.preemptibleWorkerConfig;
      this._securityConfig.internalValue = value.securityConfig;
      this._softwareConfig.internalValue = value.softwareConfig;
      this._workerConfig.internalValue = value.workerConfig;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // temp_bucket - computed: true, optional: true, required: false
  private _tempBucket?: string; 
  public get tempBucket() {
    return this.getStringAttribute('temp_bucket');
  }
  public set tempBucket(value: string) {
    this._tempBucket = value;
  }
  public resetTempBucket() {
    this._tempBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempBucketInput() {
    return this._tempBucket;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new GoogleDataprocClusterClusterConfigAutoscalingConfigOutputReference(this, "autoscaling_config");
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: GoogleDataprocClusterClusterConfigAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }

  // dataproc_metric_config - computed: false, optional: true, required: false
  private _dataprocMetricConfig = new GoogleDataprocClusterClusterConfigDataprocMetricConfigOutputReference(this, "dataproc_metric_config");
  public get dataprocMetricConfig() {
    return this._dataprocMetricConfig;
  }
  public putDataprocMetricConfig(value: GoogleDataprocClusterClusterConfigDataprocMetricConfig) {
    this._dataprocMetricConfig.internalValue = value;
  }
  public resetDataprocMetricConfig() {
    this._dataprocMetricConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetricConfigInput() {
    return this._dataprocMetricConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleDataprocClusterClusterConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleDataprocClusterClusterConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // endpoint_config - computed: false, optional: true, required: false
  private _endpointConfig = new GoogleDataprocClusterClusterConfigEndpointConfigOutputReference(this, "endpoint_config");
  public get endpointConfig() {
    return this._endpointConfig;
  }
  public putEndpointConfig(value: GoogleDataprocClusterClusterConfigEndpointConfig) {
    this._endpointConfig.internalValue = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig.internalValue;
  }

  // gce_cluster_config - computed: false, optional: true, required: false
  private _gceClusterConfig = new GoogleDataprocClusterClusterConfigGceClusterConfigOutputReference(this, "gce_cluster_config");
  public get gceClusterConfig() {
    return this._gceClusterConfig;
  }
  public putGceClusterConfig(value: GoogleDataprocClusterClusterConfigGceClusterConfig) {
    this._gceClusterConfig.internalValue = value;
  }
  public resetGceClusterConfig() {
    this._gceClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceClusterConfigInput() {
    return this._gceClusterConfig.internalValue;
  }

  // initialization_action - computed: false, optional: true, required: false
  private _initializationAction = new GoogleDataprocClusterClusterConfigInitializationActionList(this, "initialization_action", false);
  public get initializationAction() {
    return this._initializationAction;
  }
  public putInitializationAction(value: GoogleDataprocClusterClusterConfigInitializationAction[] | cdktf.IResolvable) {
    this._initializationAction.internalValue = value;
  }
  public resetInitializationAction() {
    this._initializationAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationActionInput() {
    return this._initializationAction.internalValue;
  }

  // lifecycle_config - computed: false, optional: true, required: false
  private _lifecycleConfig = new GoogleDataprocClusterClusterConfigLifecycleConfigOutputReference(this, "lifecycle_config");
  public get lifecycleConfig() {
    return this._lifecycleConfig;
  }
  public putLifecycleConfig(value: GoogleDataprocClusterClusterConfigLifecycleConfig) {
    this._lifecycleConfig.internalValue = value;
  }
  public resetLifecycleConfig() {
    this._lifecycleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigInput() {
    return this._lifecycleConfig.internalValue;
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig = new GoogleDataprocClusterClusterConfigMasterConfigOutputReference(this, "master_config");
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: GoogleDataprocClusterClusterConfigMasterConfig) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }

  // metastore_config - computed: false, optional: true, required: false
  private _metastoreConfig = new GoogleDataprocClusterClusterConfigMetastoreConfigOutputReference(this, "metastore_config");
  public get metastoreConfig() {
    return this._metastoreConfig;
  }
  public putMetastoreConfig(value: GoogleDataprocClusterClusterConfigMetastoreConfig) {
    this._metastoreConfig.internalValue = value;
  }
  public resetMetastoreConfig() {
    this._metastoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreConfigInput() {
    return this._metastoreConfig.internalValue;
  }

  // preemptible_worker_config - computed: false, optional: true, required: false
  private _preemptibleWorkerConfig = new GoogleDataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference(this, "preemptible_worker_config");
  public get preemptibleWorkerConfig() {
    return this._preemptibleWorkerConfig;
  }
  public putPreemptibleWorkerConfig(value: GoogleDataprocClusterClusterConfigPreemptibleWorkerConfig) {
    this._preemptibleWorkerConfig.internalValue = value;
  }
  public resetPreemptibleWorkerConfig() {
    this._preemptibleWorkerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleWorkerConfigInput() {
    return this._preemptibleWorkerConfig.internalValue;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig = new GoogleDataprocClusterClusterConfigSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: GoogleDataprocClusterClusterConfigSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new GoogleDataprocClusterClusterConfigSoftwareConfigOutputReference(this, "software_config");
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: GoogleDataprocClusterClusterConfigSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new GoogleDataprocClusterClusterConfigWorkerConfigOutputReference(this, "worker_config");
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: GoogleDataprocClusterClusterConfigWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }
}
export interface GoogleDataprocClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#create GoogleDataprocCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#delete GoogleDataprocCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#update GoogleDataprocCluster#update}
  */
  readonly update?: string;
}

export function googleDataprocClusterTimeoutsToTerraform(struct?: GoogleDataprocClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataprocClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataprocClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataprocClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig {
  /**
  * The Hive Metastore configuration for this workload.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#dataproc_metastore_service GoogleDataprocCluster#dataproc_metastore_service}
  */
  readonly dataprocMetastoreService?: string;
}

export function googleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_metastore_service: cdktf.stringToTerraform(struct!.dataprocMetastoreService),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocMetastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocMetastoreService = this._dataprocMetastoreService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocMetastoreService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocMetastoreService = value.dataprocMetastoreService;
    }
  }

  // dataproc_metastore_service - computed: false, optional: true, required: false
  private _dataprocMetastoreService?: string; 
  public get dataprocMetastoreService() {
    return this.getStringAttribute('dataproc_metastore_service');
  }
  public set dataprocMetastoreService(value: string) {
    this._dataprocMetastoreService = value;
  }
  public resetDataprocMetastoreService() {
    this._dataprocMetastoreService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetastoreServiceInput() {
    return this._dataprocMetastoreService;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig {
  /**
  * Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#dataproc_cluster GoogleDataprocCluster#dataproc_cluster}
  */
  readonly dataprocCluster?: string;
}

export function googleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_cluster: cdktf.stringToTerraform(struct!.dataprocCluster),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocCluster = this._dataprocCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocCluster = value.dataprocCluster;
    }
  }

  // dataproc_cluster - computed: false, optional: true, required: false
  private _dataprocCluster?: string; 
  public get dataprocCluster() {
    return this.getStringAttribute('dataproc_cluster');
  }
  public set dataprocCluster(value: string) {
    this._dataprocCluster = value;
  }
  public resetDataprocCluster() {
    this._dataprocCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocClusterInput() {
    return this._dataprocCluster;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfig {
  /**
  * metastore_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#metastore_config GoogleDataprocCluster#metastore_config}
  */
  readonly metastoreConfig?: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig;
  /**
  * spark_history_server_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#spark_history_server_config GoogleDataprocCluster#spark_history_server_config}
  */
  readonly sparkHistoryServerConfig?: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig;
}

export function googleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_config: googleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigToTerraform(struct!.metastoreConfig),
    spark_history_server_config: googleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigToTerraform(struct!.sparkHistoryServerConfig),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreConfig = this._metastoreConfig?.internalValue;
    }
    if (this._sparkHistoryServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkHistoryServerConfig = this._sparkHistoryServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreConfig.internalValue = undefined;
      this._sparkHistoryServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreConfig.internalValue = value.metastoreConfig;
      this._sparkHistoryServerConfig.internalValue = value.sparkHistoryServerConfig;
    }
  }

  // metastore_config - computed: false, optional: true, required: false
  private _metastoreConfig = new GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfigOutputReference(this, "metastore_config");
  public get metastoreConfig() {
    return this._metastoreConfig;
  }
  public putMetastoreConfig(value: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig) {
    this._metastoreConfig.internalValue = value;
  }
  public resetMetastoreConfig() {
    this._metastoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreConfigInput() {
    return this._metastoreConfig.internalValue;
  }

  // spark_history_server_config - computed: false, optional: true, required: false
  private _sparkHistoryServerConfig = new GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfigOutputReference(this, "spark_history_server_config");
  public get sparkHistoryServerConfig() {
    return this._sparkHistoryServerConfig;
  }
  public putSparkHistoryServerConfig(value: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigSparkHistoryServerConfig) {
    this._sparkHistoryServerConfig.internalValue = value;
  }
  public resetSparkHistoryServerConfig() {
    this._sparkHistoryServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkHistoryServerConfigInput() {
    return this._sparkHistoryServerConfig.internalValue;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling {
  /**
  * The maximum number of nodes in the node pool. Must be >= minNodeCount, and must be > 0.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#max_node_count GoogleDataprocCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#min_node_count GoogleDataprocCluster#min_node_count}
  */
  readonly minNodeCount?: number;
}

export function googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference | GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling | undefined {
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

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling | undefined) {
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

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig {
  /**
  * The minimum number of nodes in the node pool. Must be >= 0 and <= maxNodeCount.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#local_ssd_count GoogleDataprocCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#machine_type GoogleDataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell" or "Intel Sandy Bridge".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#min_cpu_platform GoogleDataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Whether the nodes are created as preemptible VM instances. Preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#preemptible GoogleDataprocCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#spot GoogleDataprocCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
}

export function googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    spot: cdktf.booleanToTerraform(struct!.spot),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._preemptible = undefined;
      this._spot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._preemptible = value.preemptible;
      this._spot = value.spot;
    }
  }

  // local_ssd_count - computed: false, optional: true, required: false
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

  // machine_type - computed: false, optional: true, required: false
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
}
export interface GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig {
  /**
  * The list of Compute Engine zones where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#locations GoogleDataprocCluster#locations}
  */
  readonly locations: string[];
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#autoscaling GoogleDataprocCluster#autoscaling}
  */
  readonly autoscaling?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#config GoogleDataprocCluster#config}
  */
  readonly config?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig;
}

export function googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
    autoscaling: googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingToTerraform(struct!.autoscaling),
    config: googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigToTerraform(struct!.config),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locations = undefined;
      this._autoscaling.internalValue = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locations = value.locations;
      this._autoscaling.internalValue = value.autoscaling;
      this._config.internalValue = value.config;
    }
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget {
  /**
  * The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{nodePool}'
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#node_pool GoogleDataprocCluster#node_pool}
  */
  readonly nodePool: string;
  /**
  * The roles associated with the GKE node pool.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#roles GoogleDataprocCluster#roles}
  */
  readonly roles: string[];
  /**
  * node_pool_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#node_pool_config GoogleDataprocCluster#node_pool_config}
  */
  readonly nodePoolConfig?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig;
}

export function googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool: cdktf.stringToTerraform(struct!.nodePool),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    node_pool_config: googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigToTerraform(struct!.nodePoolConfig),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePool = this._nodePool;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._nodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolConfig = this._nodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodePool = undefined;
      this._roles = undefined;
      this._nodePoolConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodePool = value.nodePool;
      this._roles = value.roles;
      this._nodePoolConfig.internalValue = value.nodePoolConfig;
    }
  }

  // node_pool - computed: false, optional: false, required: true
  private _nodePool?: string; 
  public get nodePool() {
    return this.getStringAttribute('node_pool');
  }
  public set nodePool(value: string) {
    this._nodePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // node_pool_config - computed: false, optional: true, required: false
  private _nodePoolConfig = new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigOutputReference(this, "node_pool_config");
  public get nodePoolConfig() {
    return this._nodePoolConfig;
  }
  public putNodePoolConfig(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfig) {
    this._nodePoolConfig.internalValue = value;
  }
  public resetNodePoolConfig() {
    this._nodePoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig.internalValue;
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference {
    return new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig {
  /**
  * A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#gke_cluster_target GoogleDataprocCluster#gke_cluster_target}
  */
  readonly gkeClusterTarget?: string;
  /**
  * node_pool_target block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#node_pool_target GoogleDataprocCluster#node_pool_target}
  */
  readonly nodePoolTarget?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget[] | cdktf.IResolvable;
}

export function googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gke_cluster_target: cdktf.stringToTerraform(struct!.gkeClusterTarget),
    node_pool_target: cdktf.listMapper(googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetToTerraform, true)(struct!.nodePoolTarget),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gkeClusterTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterTarget = this._gkeClusterTarget;
    }
    if (this._nodePoolTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolTarget = this._nodePoolTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gkeClusterTarget = undefined;
      this._nodePoolTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gkeClusterTarget = value.gkeClusterTarget;
      this._nodePoolTarget.internalValue = value.nodePoolTarget;
    }
  }

  // gke_cluster_target - computed: false, optional: true, required: false
  private _gkeClusterTarget?: string; 
  public get gkeClusterTarget() {
    return this.getStringAttribute('gke_cluster_target');
  }
  public set gkeClusterTarget(value: string) {
    this._gkeClusterTarget = value;
  }
  public resetGkeClusterTarget() {
    this._gkeClusterTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterTargetInput() {
    return this._gkeClusterTarget;
  }

  // node_pool_target - computed: false, optional: true, required: false
  private _nodePoolTarget = new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetList(this, "node_pool_target", false);
  public get nodePoolTarget() {
    return this._nodePoolTarget;
  }
  public putNodePoolTarget(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTarget[] | cdktf.IResolvable) {
    this._nodePoolTarget.internalValue = value;
  }
  public resetNodePoolTarget() {
    this._nodePoolTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolTargetInput() {
    return this._nodePoolTarget.internalValue;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig {
  /**
  * The components that should be installed in this Dataproc cluster. The key must be a string from the KubernetesComponent enumeration. The value is the version of the software to be installed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#component_version GoogleDataprocCluster#component_version}
  */
  readonly componentVersion: { [key: string]: string };
  /**
  * The properties to set on daemon config files. Property keys are specified in prefix:property format, for example spark:spark.kubernetes.container.image.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#properties GoogleDataprocCluster#properties}
  */
  readonly properties?: { [key: string]: string };
}

export function googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_version: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.componentVersion),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentVersion = this._componentVersion;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._componentVersion = undefined;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._componentVersion = value.componentVersion;
      this._properties = value.properties;
    }
  }

  // component_version - computed: false, optional: false, required: true
  private _componentVersion?: { [key: string]: string }; 
  public get componentVersion() {
    return this.getStringMapAttribute('component_version');
  }
  public set componentVersion(value: { [key: string]: string }) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion;
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfig {
  /**
  * A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#kubernetes_namespace GoogleDataprocCluster#kubernetes_namespace}
  */
  readonly kubernetesNamespace?: string;
  /**
  * gke_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#gke_cluster_config GoogleDataprocCluster#gke_cluster_config}
  */
  readonly gkeClusterConfig: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig;
  /**
  * kubernetes_software_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#kubernetes_software_config GoogleDataprocCluster#kubernetes_software_config}
  */
  readonly kubernetesSoftwareConfig: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig;
}

export function googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference | GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_namespace: cdktf.stringToTerraform(struct!.kubernetesNamespace),
    gke_cluster_config: googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigToTerraform(struct!.gkeClusterConfig),
    kubernetes_software_config: googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigToTerraform(struct!.kubernetesSoftwareConfig),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNamespace = this._kubernetesNamespace;
    }
    if (this._gkeClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusterConfig = this._gkeClusterConfig?.internalValue;
    }
    if (this._kubernetesSoftwareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSoftwareConfig = this._kubernetesSoftwareConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetesNamespace = undefined;
      this._gkeClusterConfig.internalValue = undefined;
      this._kubernetesSoftwareConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetesNamespace = value.kubernetesNamespace;
      this._gkeClusterConfig.internalValue = value.gkeClusterConfig;
      this._kubernetesSoftwareConfig.internalValue = value.kubernetesSoftwareConfig;
    }
  }

  // kubernetes_namespace - computed: false, optional: true, required: false
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  public resetKubernetesNamespace() {
    this._kubernetesNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }

  // gke_cluster_config - computed: false, optional: false, required: true
  private _gkeClusterConfig = new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigOutputReference(this, "gke_cluster_config");
  public get gkeClusterConfig() {
    return this._gkeClusterConfig;
  }
  public putGkeClusterConfig(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfig) {
    this._gkeClusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterConfigInput() {
    return this._gkeClusterConfig.internalValue;
  }

  // kubernetes_software_config - computed: false, optional: false, required: true
  private _kubernetesSoftwareConfig = new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfigOutputReference(this, "kubernetes_software_config");
  public get kubernetesSoftwareConfig() {
    return this._kubernetesSoftwareConfig;
  }
  public putKubernetesSoftwareConfig(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigKubernetesSoftwareConfig) {
    this._kubernetesSoftwareConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSoftwareConfigInput() {
    return this._kubernetesSoftwareConfig.internalValue;
  }
}
export interface GoogleDataprocClusterVirtualClusterConfig {
  /**
  * A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#staging_bucket GoogleDataprocCluster#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * auxiliary_services_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#auxiliary_services_config GoogleDataprocCluster#auxiliary_services_config}
  */
  readonly auxiliaryServicesConfig?: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfig;
  /**
  * kubernetes_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster#kubernetes_cluster_config GoogleDataprocCluster#kubernetes_cluster_config}
  */
  readonly kubernetesClusterConfig?: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfig;
}

export function googleDataprocClusterVirtualClusterConfigToTerraform(struct?: GoogleDataprocClusterVirtualClusterConfigOutputReference | GoogleDataprocClusterVirtualClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    auxiliary_services_config: googleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigToTerraform(struct!.auxiliaryServicesConfig),
    kubernetes_cluster_config: googleDataprocClusterVirtualClusterConfigKubernetesClusterConfigToTerraform(struct!.kubernetesClusterConfig),
  }
}

export class GoogleDataprocClusterVirtualClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocClusterVirtualClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stagingBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._auxiliaryServicesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryServicesConfig = this._auxiliaryServicesConfig?.internalValue;
    }
    if (this._kubernetesClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterConfig = this._kubernetesClusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocClusterVirtualClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stagingBucket = undefined;
      this._auxiliaryServicesConfig.internalValue = undefined;
      this._kubernetesClusterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stagingBucket = value.stagingBucket;
      this._auxiliaryServicesConfig.internalValue = value.auxiliaryServicesConfig;
      this._kubernetesClusterConfig.internalValue = value.kubernetesClusterConfig;
    }
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // auxiliary_services_config - computed: false, optional: true, required: false
  private _auxiliaryServicesConfig = new GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfigOutputReference(this, "auxiliary_services_config");
  public get auxiliaryServicesConfig() {
    return this._auxiliaryServicesConfig;
  }
  public putAuxiliaryServicesConfig(value: GoogleDataprocClusterVirtualClusterConfigAuxiliaryServicesConfig) {
    this._auxiliaryServicesConfig.internalValue = value;
  }
  public resetAuxiliaryServicesConfig() {
    this._auxiliaryServicesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryServicesConfigInput() {
    return this._auxiliaryServicesConfig.internalValue;
  }

  // kubernetes_cluster_config - computed: false, optional: true, required: false
  private _kubernetesClusterConfig = new GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfigOutputReference(this, "kubernetes_cluster_config");
  public get kubernetesClusterConfig() {
    return this._kubernetesClusterConfig;
  }
  public putKubernetesClusterConfig(value: GoogleDataprocClusterVirtualClusterConfigKubernetesClusterConfig) {
    this._kubernetesClusterConfig.internalValue = value;
  }
  public resetKubernetesClusterConfig() {
    this._kubernetesClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterConfigInput() {
    return this._kubernetesClusterConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster google_dataproc_cluster}
*/
export class GoogleDataprocCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_dataproc_cluster google_dataproc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataprocClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataprocClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.75.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gracefulDecommissionTimeout = config.gracefulDecommissionTimeout;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._timeouts.internalValue = config.timeouts;
    this._virtualClusterConfig.internalValue = config.virtualClusterConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // graceful_decommission_timeout - computed: false, optional: true, required: false
  private _gracefulDecommissionTimeout?: string; 
  public get gracefulDecommissionTimeout() {
    return this.getStringAttribute('graceful_decommission_timeout');
  }
  public set gracefulDecommissionTimeout(value: string) {
    this._gracefulDecommissionTimeout = value;
  }
  public resetGracefulDecommissionTimeout() {
    this._gracefulDecommissionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulDecommissionTimeoutInput() {
    return this._gracefulDecommissionTimeout;
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

  // region - computed: false, optional: true, required: false
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

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new GoogleDataprocClusterClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: GoogleDataprocClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataprocClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataprocClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_cluster_config - computed: false, optional: true, required: false
  private _virtualClusterConfig = new GoogleDataprocClusterVirtualClusterConfigOutputReference(this, "virtual_cluster_config");
  public get virtualClusterConfig() {
    return this._virtualClusterConfig;
  }
  public putVirtualClusterConfig(value: GoogleDataprocClusterVirtualClusterConfig) {
    this._virtualClusterConfig.internalValue = value;
  }
  public resetVirtualClusterConfig() {
    this._virtualClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterConfigInput() {
    return this._virtualClusterConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      graceful_decommission_timeout: cdktf.stringToTerraform(this._gracefulDecommissionTimeout),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      cluster_config: googleDataprocClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      timeouts: googleDataprocClusterTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_cluster_config: googleDataprocClusterVirtualClusterConfigToTerraform(this._virtualClusterConfig.internalValue),
    };
  }
}
