/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleNetworkManagementConnectivityTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the analysis should skip firewall checking. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#bypass_firewall_checks GoogleNetworkManagementConnectivityTest#bypass_firewall_checks}
  */
  readonly bypassFirewallChecks?: boolean | cdktf.IResolvable;
  /**
  * The user-supplied description of the Connectivity Test.
  * Maximum of 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#description GoogleNetworkManagementConnectivityTest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#labels GoogleNetworkManagementConnectivityTest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique name for the connectivity test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#name GoogleNetworkManagementConnectivityTest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}
  */
  readonly project?: string;
  /**
  * IP Protocol of the test. When not provided, "TCP" is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#protocol GoogleNetworkManagementConnectivityTest#protocol}
  */
  readonly protocol?: string;
  /**
  * Other projects that may be relevant for reachability analysis.
  * This is applicable to scenarios where a test can cross project
  * boundaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#related_projects GoogleNetworkManagementConnectivityTest#related_projects}
  */
  readonly relatedProjects?: string[];
  /**
  * Whether run analysis for the return path from destination to source.
  * Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#round_trip GoogleNetworkManagementConnectivityTest#round_trip}
  */
  readonly roundTrip?: boolean | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#destination GoogleNetworkManagementConnectivityTest#destination}
  */
  readonly destination: GoogleNetworkManagementConnectivityTestDestination;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#source GoogleNetworkManagementConnectivityTest#source}
  */
  readonly source: GoogleNetworkManagementConnectivityTestSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#timeouts GoogleNetworkManagementConnectivityTest#timeouts}
  */
  readonly timeouts?: GoogleNetworkManagementConnectivityTestTimeouts;
}
export interface GoogleNetworkManagementConnectivityTestDestination {
  /**
  * A Cloud SQL instance URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#cloud_sql_instance GoogleNetworkManagementConnectivityTest#cloud_sql_instance}
  */
  readonly cloudSqlInstance?: string;
  /**
  * Forwarding rule URI. Forwarding rules are frontends for load balancers,
  * PSC endpoints, and Protocol Forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#forwarding_rule GoogleNetworkManagementConnectivityTest#forwarding_rule}
  */
  readonly forwardingRule?: string;
  /**
  * A DNS endpoint of Google Kubernetes Engine cluster control plane.
  * Requires gke_master_cluster to be set, can't be used simultaneoulsly with
  * ip_address or network. Applicable only to destination endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#fqdn GoogleNetworkManagementConnectivityTest#fqdn}
  */
  readonly fqdn?: string;
  /**
  * A cluster URI for Google Kubernetes Engine cluster control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#gke_master_cluster GoogleNetworkManagementConnectivityTest#gke_master_cluster}
  */
  readonly gkeMasterCluster?: string;
  /**
  * A Compute Engine instance URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}
  */
  readonly instance?: string;
  /**
  * The IP address of the endpoint, which can be an external or internal IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * A VPC network URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}
  */
  readonly network?: string;
  /**
  * The IP protocol port of the endpoint. Only applicable when protocol is
  * TCP or UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}
  */
  readonly port?: number;
  /**
  * Project ID where the endpoint is located.
  * The project ID can be derived from the URI if you provide a endpoint or
  * network URI.
  * The following are two cases where you may need to provide the project ID:
  * 1. Only the IP address is specified, and the IP address is within a Google
  * Cloud project.
  * 2. When you are using Shared VPC and the IP address that you provide is
  * from the service project. In this case, the network that the IP address
  * resides in is defined in the host project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}
  */
  readonly projectId?: string;
  /**
  * A Redis Cluster URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#redis_cluster GoogleNetworkManagementConnectivityTest#redis_cluster}
  */
  readonly redisCluster?: string;
  /**
  * A Redis Instance URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#redis_instance GoogleNetworkManagementConnectivityTest#redis_instance}
  */
  readonly redisInstance?: string;
}

export function googleNetworkManagementConnectivityTestDestinationToTerraform(struct?: GoogleNetworkManagementConnectivityTestDestinationOutputReference | GoogleNetworkManagementConnectivityTestDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_sql_instance: cdktf.stringToTerraform(struct!.cloudSqlInstance),
    forwarding_rule: cdktf.stringToTerraform(struct!.forwardingRule),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    gke_master_cluster: cdktf.stringToTerraform(struct!.gkeMasterCluster),
    instance: cdktf.stringToTerraform(struct!.instance),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network: cdktf.stringToTerraform(struct!.network),
    port: cdktf.numberToTerraform(struct!.port),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    redis_cluster: cdktf.stringToTerraform(struct!.redisCluster),
    redis_instance: cdktf.stringToTerraform(struct!.redisInstance),
  }
}


export function googleNetworkManagementConnectivityTestDestinationToHclTerraform(struct?: GoogleNetworkManagementConnectivityTestDestinationOutputReference | GoogleNetworkManagementConnectivityTestDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_sql_instance: {
      value: cdktf.stringToHclTerraform(struct!.cloudSqlInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_rule: {
      value: cdktf.stringToHclTerraform(struct!.forwardingRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gke_master_cluster: {
      value: cdktf.stringToHclTerraform(struct!.gkeMasterCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_cluster: {
      value: cdktf.stringToHclTerraform(struct!.redisCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_instance: {
      value: cdktf.stringToHclTerraform(struct!.redisInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkManagementConnectivityTestDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkManagementConnectivityTestDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSqlInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlInstance = this._cloudSqlInstance;
    }
    if (this._forwardingRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRule = this._forwardingRule;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._gkeMasterCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeMasterCluster = this._gkeMasterCluster;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._redisCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisCluster = this._redisCluster;
    }
    if (this._redisInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisInstance = this._redisInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkManagementConnectivityTestDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudSqlInstance = undefined;
      this._forwardingRule = undefined;
      this._fqdn = undefined;
      this._gkeMasterCluster = undefined;
      this._instance = undefined;
      this._ipAddress = undefined;
      this._network = undefined;
      this._port = undefined;
      this._projectId = undefined;
      this._redisCluster = undefined;
      this._redisInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudSqlInstance = value.cloudSqlInstance;
      this._forwardingRule = value.forwardingRule;
      this._fqdn = value.fqdn;
      this._gkeMasterCluster = value.gkeMasterCluster;
      this._instance = value.instance;
      this._ipAddress = value.ipAddress;
      this._network = value.network;
      this._port = value.port;
      this._projectId = value.projectId;
      this._redisCluster = value.redisCluster;
      this._redisInstance = value.redisInstance;
    }
  }

  // cloud_sql_instance - computed: false, optional: true, required: false
  private _cloudSqlInstance?: string; 
  public get cloudSqlInstance() {
    return this.getStringAttribute('cloud_sql_instance');
  }
  public set cloudSqlInstance(value: string) {
    this._cloudSqlInstance = value;
  }
  public resetCloudSqlInstance() {
    this._cloudSqlInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInstanceInput() {
    return this._cloudSqlInstance;
  }

  // forwarding_rule - computed: false, optional: true, required: false
  private _forwardingRule?: string; 
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }
  public set forwardingRule(value: string) {
    this._forwardingRule = value;
  }
  public resetForwardingRule() {
    this._forwardingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // gke_master_cluster - computed: false, optional: true, required: false
  private _gkeMasterCluster?: string; 
  public get gkeMasterCluster() {
    return this.getStringAttribute('gke_master_cluster');
  }
  public set gkeMasterCluster(value: string) {
    this._gkeMasterCluster = value;
  }
  public resetGkeMasterCluster() {
    this._gkeMasterCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeMasterClusterInput() {
    return this._gkeMasterCluster;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // redis_cluster - computed: false, optional: true, required: false
  private _redisCluster?: string; 
  public get redisCluster() {
    return this.getStringAttribute('redis_cluster');
  }
  public set redisCluster(value: string) {
    this._redisCluster = value;
  }
  public resetRedisCluster() {
    this._redisCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterInput() {
    return this._redisCluster;
  }

  // redis_instance - computed: false, optional: true, required: false
  private _redisInstance?: string; 
  public get redisInstance() {
    return this.getStringAttribute('redis_instance');
  }
  public set redisInstance(value: string) {
    this._redisInstance = value;
  }
  public resetRedisInstance() {
    this._redisInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInstanceInput() {
    return this._redisInstance;
  }
}
export interface GoogleNetworkManagementConnectivityTestSourceAppEngineVersion {
  /**
  * An App Engine service version name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#uri GoogleNetworkManagementConnectivityTest#uri}
  */
  readonly uri?: string;
}

export function googleNetworkManagementConnectivityTestSourceAppEngineVersionToTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference | GoogleNetworkManagementConnectivityTestSourceAppEngineVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleNetworkManagementConnectivityTestSourceAppEngineVersionToHclTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference | GoogleNetworkManagementConnectivityTestSourceAppEngineVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkManagementConnectivityTestSourceAppEngineVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkManagementConnectivityTestSourceAppEngineVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleNetworkManagementConnectivityTestSourceCloudFunction {
  /**
  * A Cloud Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#uri GoogleNetworkManagementConnectivityTest#uri}
  */
  readonly uri?: string;
}

export function googleNetworkManagementConnectivityTestSourceCloudFunctionToTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference | GoogleNetworkManagementConnectivityTestSourceCloudFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleNetworkManagementConnectivityTestSourceCloudFunctionToHclTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference | GoogleNetworkManagementConnectivityTestSourceCloudFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkManagementConnectivityTestSourceCloudFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkManagementConnectivityTestSourceCloudFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleNetworkManagementConnectivityTestSourceCloudRunRevision {
  /**
  * A Cloud Run revision URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#uri GoogleNetworkManagementConnectivityTest#uri}
  */
  readonly uri?: string;
}

export function googleNetworkManagementConnectivityTestSourceCloudRunRevisionToTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference | GoogleNetworkManagementConnectivityTestSourceCloudRunRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleNetworkManagementConnectivityTestSourceCloudRunRevisionToHclTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference | GoogleNetworkManagementConnectivityTestSourceCloudRunRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkManagementConnectivityTestSourceCloudRunRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkManagementConnectivityTestSourceCloudRunRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleNetworkManagementConnectivityTestSource {
  /**
  * A Cloud SQL instance URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#cloud_sql_instance GoogleNetworkManagementConnectivityTest#cloud_sql_instance}
  */
  readonly cloudSqlInstance?: string;
  /**
  * A cluster URI for Google Kubernetes Engine cluster control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#gke_master_cluster GoogleNetworkManagementConnectivityTest#gke_master_cluster}
  */
  readonly gkeMasterCluster?: string;
  /**
  * A Compute Engine instance URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}
  */
  readonly instance?: string;
  /**
  * The IP address of the endpoint, which can be an external or internal IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * A VPC network URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}
  */
  readonly network?: string;
  /**
  * Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#network_type GoogleNetworkManagementConnectivityTest#network_type}
  */
  readonly networkType?: string;
  /**
  * The IP protocol port of the endpoint. Only applicable when protocol is
  * TCP or UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}
  */
  readonly port?: number;
  /**
  * Project ID where the endpoint is located.
  * The project ID can be derived from the URI if you provide a endpoint or
  * network URI.
  * The following are two cases where you may need to provide the project ID:
  * 1. Only the IP address is specified, and the IP address is within a Google
  * Cloud project.
  * 2. When you are using Shared VPC and the IP address that you provide is
  * from the service project. In this case, the network that the IP address
  * resides in is defined in the host project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}
  */
  readonly projectId?: string;
  /**
  * app_engine_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#app_engine_version GoogleNetworkManagementConnectivityTest#app_engine_version}
  */
  readonly appEngineVersion?: GoogleNetworkManagementConnectivityTestSourceAppEngineVersion;
  /**
  * cloud_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#cloud_function GoogleNetworkManagementConnectivityTest#cloud_function}
  */
  readonly cloudFunction?: GoogleNetworkManagementConnectivityTestSourceCloudFunction;
  /**
  * cloud_run_revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#cloud_run_revision GoogleNetworkManagementConnectivityTest#cloud_run_revision}
  */
  readonly cloudRunRevision?: GoogleNetworkManagementConnectivityTestSourceCloudRunRevision;
}

export function googleNetworkManagementConnectivityTestSourceToTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceOutputReference | GoogleNetworkManagementConnectivityTestSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_sql_instance: cdktf.stringToTerraform(struct!.cloudSqlInstance),
    gke_master_cluster: cdktf.stringToTerraform(struct!.gkeMasterCluster),
    instance: cdktf.stringToTerraform(struct!.instance),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network: cdktf.stringToTerraform(struct!.network),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    port: cdktf.numberToTerraform(struct!.port),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    app_engine_version: googleNetworkManagementConnectivityTestSourceAppEngineVersionToTerraform(struct!.appEngineVersion),
    cloud_function: googleNetworkManagementConnectivityTestSourceCloudFunctionToTerraform(struct!.cloudFunction),
    cloud_run_revision: googleNetworkManagementConnectivityTestSourceCloudRunRevisionToTerraform(struct!.cloudRunRevision),
  }
}


export function googleNetworkManagementConnectivityTestSourceToHclTerraform(struct?: GoogleNetworkManagementConnectivityTestSourceOutputReference | GoogleNetworkManagementConnectivityTestSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_sql_instance: {
      value: cdktf.stringToHclTerraform(struct!.cloudSqlInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gke_master_cluster: {
      value: cdktf.stringToHclTerraform(struct!.gkeMasterCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_engine_version: {
      value: googleNetworkManagementConnectivityTestSourceAppEngineVersionToHclTerraform(struct!.appEngineVersion),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkManagementConnectivityTestSourceAppEngineVersionList",
    },
    cloud_function: {
      value: googleNetworkManagementConnectivityTestSourceCloudFunctionToHclTerraform(struct!.cloudFunction),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkManagementConnectivityTestSourceCloudFunctionList",
    },
    cloud_run_revision: {
      value: googleNetworkManagementConnectivityTestSourceCloudRunRevisionToHclTerraform(struct!.cloudRunRevision),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleNetworkManagementConnectivityTestSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleNetworkManagementConnectivityTestSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSqlInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlInstance = this._cloudSqlInstance;
    }
    if (this._gkeMasterCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeMasterCluster = this._gkeMasterCluster;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._appEngineVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appEngineVersion = this._appEngineVersion?.internalValue;
    }
    if (this._cloudFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudFunction = this._cloudFunction?.internalValue;
    }
    if (this._cloudRunRevision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRunRevision = this._cloudRunRevision?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleNetworkManagementConnectivityTestSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudSqlInstance = undefined;
      this._gkeMasterCluster = undefined;
      this._instance = undefined;
      this._ipAddress = undefined;
      this._network = undefined;
      this._networkType = undefined;
      this._port = undefined;
      this._projectId = undefined;
      this._appEngineVersion.internalValue = undefined;
      this._cloudFunction.internalValue = undefined;
      this._cloudRunRevision.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudSqlInstance = value.cloudSqlInstance;
      this._gkeMasterCluster = value.gkeMasterCluster;
      this._instance = value.instance;
      this._ipAddress = value.ipAddress;
      this._network = value.network;
      this._networkType = value.networkType;
      this._port = value.port;
      this._projectId = value.projectId;
      this._appEngineVersion.internalValue = value.appEngineVersion;
      this._cloudFunction.internalValue = value.cloudFunction;
      this._cloudRunRevision.internalValue = value.cloudRunRevision;
    }
  }

  // cloud_sql_instance - computed: false, optional: true, required: false
  private _cloudSqlInstance?: string; 
  public get cloudSqlInstance() {
    return this.getStringAttribute('cloud_sql_instance');
  }
  public set cloudSqlInstance(value: string) {
    this._cloudSqlInstance = value;
  }
  public resetCloudSqlInstance() {
    this._cloudSqlInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInstanceInput() {
    return this._cloudSqlInstance;
  }

  // gke_master_cluster - computed: false, optional: true, required: false
  private _gkeMasterCluster?: string; 
  public get gkeMasterCluster() {
    return this.getStringAttribute('gke_master_cluster');
  }
  public set gkeMasterCluster(value: string) {
    this._gkeMasterCluster = value;
  }
  public resetGkeMasterCluster() {
    this._gkeMasterCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeMasterClusterInput() {
    return this._gkeMasterCluster;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // app_engine_version - computed: false, optional: true, required: false
  private _appEngineVersion = new GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference(this, "app_engine_version");
  public get appEngineVersion() {
    return this._appEngineVersion;
  }
  public putAppEngineVersion(value: GoogleNetworkManagementConnectivityTestSourceAppEngineVersion) {
    this._appEngineVersion.internalValue = value;
  }
  public resetAppEngineVersion() {
    this._appEngineVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineVersionInput() {
    return this._appEngineVersion.internalValue;
  }

  // cloud_function - computed: false, optional: true, required: false
  private _cloudFunction = new GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference(this, "cloud_function");
  public get cloudFunction() {
    return this._cloudFunction;
  }
  public putCloudFunction(value: GoogleNetworkManagementConnectivityTestSourceCloudFunction) {
    this._cloudFunction.internalValue = value;
  }
  public resetCloudFunction() {
    this._cloudFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction.internalValue;
  }

  // cloud_run_revision - computed: false, optional: true, required: false
  private _cloudRunRevision = new GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference(this, "cloud_run_revision");
  public get cloudRunRevision() {
    return this._cloudRunRevision;
  }
  public putCloudRunRevision(value: GoogleNetworkManagementConnectivityTestSourceCloudRunRevision) {
    this._cloudRunRevision.internalValue = value;
  }
  public resetCloudRunRevision() {
    this._cloudRunRevision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunRevisionInput() {
    return this._cloudRunRevision.internalValue;
  }
}
export interface GoogleNetworkManagementConnectivityTestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}
  */
  readonly update?: string;
}

export function googleNetworkManagementConnectivityTestTimeoutsToTerraform(struct?: GoogleNetworkManagementConnectivityTestTimeouts | cdktf.IResolvable): any {
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


export function googleNetworkManagementConnectivityTestTimeoutsToHclTerraform(struct?: GoogleNetworkManagementConnectivityTestTimeouts | cdktf.IResolvable): any {
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

export class GoogleNetworkManagementConnectivityTestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleNetworkManagementConnectivityTestTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleNetworkManagementConnectivityTestTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test google_network_management_connectivity_test}
*/
export class GoogleNetworkManagementConnectivityTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_management_connectivity_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleNetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleNetworkManagementConnectivityTest to import
  * @param importFromId The id of the existing GoogleNetworkManagementConnectivityTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleNetworkManagementConnectivityTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_management_connectivity_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_network_management_connectivity_test google_network_management_connectivity_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleNetworkManagementConnectivityTestConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleNetworkManagementConnectivityTestConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_management_connectivity_test',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.49.1',
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
    this._bypassFirewallChecks = config.bypassFirewallChecks;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._protocol = config.protocol;
    this._relatedProjects = config.relatedProjects;
    this._roundTrip = config.roundTrip;
    this._destination.internalValue = config.destination;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_firewall_checks - computed: false, optional: true, required: false
  private _bypassFirewallChecks?: boolean | cdktf.IResolvable; 
  public get bypassFirewallChecks() {
    return this.getBooleanAttribute('bypass_firewall_checks');
  }
  public set bypassFirewallChecks(value: boolean | cdktf.IResolvable) {
    this._bypassFirewallChecks = value;
  }
  public resetBypassFirewallChecks() {
    this._bypassFirewallChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassFirewallChecksInput() {
    return this._bypassFirewallChecks;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // related_projects - computed: false, optional: true, required: false
  private _relatedProjects?: string[]; 
  public get relatedProjects() {
    return this.getListAttribute('related_projects');
  }
  public set relatedProjects(value: string[]) {
    this._relatedProjects = value;
  }
  public resetRelatedProjects() {
    this._relatedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedProjectsInput() {
    return this._relatedProjects;
  }

  // round_trip - computed: false, optional: true, required: false
  private _roundTrip?: boolean | cdktf.IResolvable; 
  public get roundTrip() {
    return this.getBooleanAttribute('round_trip');
  }
  public set roundTrip(value: boolean | cdktf.IResolvable) {
    this._roundTrip = value;
  }
  public resetRoundTrip() {
    this._roundTrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundTripInput() {
    return this._roundTrip;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new GoogleNetworkManagementConnectivityTestDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: GoogleNetworkManagementConnectivityTestDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new GoogleNetworkManagementConnectivityTestSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleNetworkManagementConnectivityTestSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleNetworkManagementConnectivityTestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleNetworkManagementConnectivityTestTimeouts) {
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
      bypass_firewall_checks: cdktf.booleanToTerraform(this._bypassFirewallChecks),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      related_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relatedProjects),
      round_trip: cdktf.booleanToTerraform(this._roundTrip),
      destination: googleNetworkManagementConnectivityTestDestinationToTerraform(this._destination.internalValue),
      source: googleNetworkManagementConnectivityTestSourceToTerraform(this._source.internalValue),
      timeouts: googleNetworkManagementConnectivityTestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_firewall_checks: {
        value: cdktf.booleanToHclTerraform(this._bypassFirewallChecks),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      related_projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relatedProjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      round_trip: {
        value: cdktf.booleanToHclTerraform(this._roundTrip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination: {
        value: googleNetworkManagementConnectivityTestDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkManagementConnectivityTestDestinationList",
      },
      source: {
        value: googleNetworkManagementConnectivityTestSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleNetworkManagementConnectivityTestSourceList",
      },
      timeouts: {
        value: googleNetworkManagementConnectivityTestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleNetworkManagementConnectivityTestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
