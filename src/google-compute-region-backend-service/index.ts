/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionBackendServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lifetime of cookies in seconds if session_affinity is
  * GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
  * only until the end of the browser session (or equivalent). The
  * maximum allowed value for TTL is one day.
  * 
  * When the load balancing scheme is INTERNAL, this field is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#affinity_cookie_ttl_sec GoogleComputeRegionBackendService#affinity_cookie_ttl_sec}
  */
  readonly affinityCookieTtlSec?: number;
  /**
  * Time for which instance will be drained (not accept new
  * connections, but still work to finish started).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#connection_draining_timeout_sec GoogleComputeRegionBackendService#connection_draining_timeout_sec}
  */
  readonly connectionDrainingTimeoutSec?: number;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}
  */
  readonly description?: string;
  /**
  * If true, enable Cloud CDN for this RegionBackendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enable_cdn GoogleComputeRegionBackendService#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * The set of URLs to HealthCheck resources for health checking
  * this RegionBackendService. Currently at most one health
  * check can be specified.
  * 
  * A health check must be specified unless the backend service uses an internet
  * or serverless NEG as a backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#health_checks GoogleComputeRegionBackendService#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#id GoogleComputeRegionBackendService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#ip_address_selection_policy GoogleComputeRegionBackendService#ip_address_selection_policy}
  */
  readonly ipAddressSelectionPolicy?: string;
  /**
  * Indicates what kind of load balancing this regional backend service
  * will be used for. A backend service created for one type of load
  * balancing cannot be used with the other(s). For more information, refer to
  * [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#load_balancing_scheme GoogleComputeRegionBackendService#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * The load balancing algorithm used within the scope of the locality.
  * The possible values are:
  * 
  * * 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  *                  is selected in round robin order.
  * 
  * * 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  *                    hosts and picks the host which has fewer active requests.
  * 
  * * 'RING_HASH': The ring/modulo hash load balancer implements consistent
  *                hashing to backends. The algorithm has the property that the
  *                addition/removal of a host from a set of N hosts only affects
  *                1/N of the requests.
  * 
  * * 'RANDOM': The load balancer selects a random healthy host.
  * 
  * * 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  *                           connection metadata, i.e., connections are opened
  *                           to the same address as the destination address of
  *                           the incoming connection before the connection
  *                           was redirected to the load balancer.
  * 
  * * 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  *             Maglev is not as stable as ring hash but has faster table lookup
  *             build times and host selection times. For more information about
  *             Maglev, refer to https://ai.google/research/pubs/pub44824
  * 
  * * 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  *                      reported weights. Only applicable to loadBalancingScheme
  *                      EXTERNAL. If set, the Backend Service must
  *                      configure a non legacy HTTP-based Health Check, and
  *                      health check replies are expected to contain
  *                      non-standard HTTP response header field
  *                      X-Load-Balancing-Endpoint-Weight to specify the
  *                      per-instance weights. If set, Load Balancing is weight
  *                      based on the per-instance weights reported in the last
  *                      processed health check replies, as long as every
  *                      instance either reported a valid weight or had
  *                      UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  *                      equal-weight.
  * 
  * * 'WEIGHTED_ROUND_ROBIN': Per-endpoint weighted round-robin Load Balancing using weights computed
  *                           from Backend reported Custom Metrics. If set, the Backend Service
  *                           responses are expected to contain non-standard HTTP response header field
  *                           X-Endpoint-Load-Metrics. The reported metrics
  *                           to use for computing the weights are specified via the
  *                           backends[].customMetrics fields.
  * 
  * locality_lb_policy is applicable to either:
  * 
  * * A regional backend service with the service_protocol set to HTTP, HTTPS, HTTP2 or H2C,
  *   and loadBalancingScheme set to INTERNAL_MANAGED.
  * * A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
  * * A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  *   Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  *   Network Load Balancing. The default is MAGLEV.
  * 
  * If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
  * or RING_HASH, session affinity settings will not take effect.
  * 
  * Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
  * by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
  * field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV", "WEIGHTED_ROUND_ROBIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#locality_lb_policy GoogleComputeRegionBackendService#locality_lb_policy}
  */
  readonly localityLbPolicy?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}
  */
  readonly name: string;
  /**
  * The URL of the network to which this backend service belongs.
  * This field can only be specified when the load balancing scheme is set to INTERNAL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#network GoogleComputeRegionBackendService#network}
  */
  readonly network?: string;
  /**
  * A named port on a backend instance group representing the port for
  * communication to the backend VMs in that group. Required when the
  * loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
  * and the backends are instance groups. The named port must be defined on each
  * backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
  * default of "http" if not given.
  * Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#port_name GoogleComputeRegionBackendService#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#project GoogleComputeRegionBackendService#project}
  */
  readonly project?: string;
  /**
  * The protocol this BackendService uses to communicate with backends.
  * The default is HTTP. Possible values are HTTP, HTTPS, HTTP2, H2C, TCP, SSL, UDP
  * or GRPC. Refer to the documentation for the load balancers or for Traffic Director
  * for more information. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "UDP", "GRPC", "UNSPECIFIED", "H2C"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#protocol GoogleComputeRegionBackendService#protocol}
  */
  readonly protocol?: string;
  /**
  * The Region in which the created backend service should reside.
  * If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#region GoogleComputeRegionBackendService#region}
  */
  readonly region?: string;
  /**
  * The security policy associated with this backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#security_policy GoogleComputeRegionBackendService#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Type of session affinity to use. The default is NONE. Session affinity is
  * not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION", "STRONG_COOKIE_AFFINITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#session_affinity GoogleComputeRegionBackendService#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * The backend service timeout has a different meaning depending on the type of load balancer.
  * For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
  * The default is 30 seconds.
  * The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#timeout_sec GoogleComputeRegionBackendService#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#backend GoogleComputeRegionBackendService#backend}
  */
  readonly backend?: GoogleComputeRegionBackendServiceBackend[] | cdktf.IResolvable;
  /**
  * cdn_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#cdn_policy GoogleComputeRegionBackendService#cdn_policy}
  */
  readonly cdnPolicy?: GoogleComputeRegionBackendServiceCdnPolicy;
  /**
  * circuit_breakers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#circuit_breakers GoogleComputeRegionBackendService#circuit_breakers}
  */
  readonly circuitBreakers?: GoogleComputeRegionBackendServiceCircuitBreakers;
  /**
  * connection_tracking_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#connection_tracking_policy GoogleComputeRegionBackendService#connection_tracking_policy}
  */
  readonly connectionTrackingPolicy?: GoogleComputeRegionBackendServiceConnectionTrackingPolicy;
  /**
  * consistent_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#consistent_hash GoogleComputeRegionBackendService#consistent_hash}
  */
  readonly consistentHash?: GoogleComputeRegionBackendServiceConsistentHash;
  /**
  * custom_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#custom_metrics GoogleComputeRegionBackendService#custom_metrics}
  */
  readonly customMetrics?: GoogleComputeRegionBackendServiceCustomMetrics[] | cdktf.IResolvable;
  /**
  * dynamic_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#dynamic_forwarding GoogleComputeRegionBackendService#dynamic_forwarding}
  */
  readonly dynamicForwarding?: GoogleComputeRegionBackendServiceDynamicForwarding;
  /**
  * failover_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#failover_policy GoogleComputeRegionBackendService#failover_policy}
  */
  readonly failoverPolicy?: GoogleComputeRegionBackendServiceFailoverPolicy;
  /**
  * iap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#iap GoogleComputeRegionBackendService#iap}
  */
  readonly iap?: GoogleComputeRegionBackendServiceIap;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#log_config GoogleComputeRegionBackendService#log_config}
  */
  readonly logConfig?: GoogleComputeRegionBackendServiceLogConfig;
  /**
  * outlier_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#outlier_detection GoogleComputeRegionBackendService#outlier_detection}
  */
  readonly outlierDetection?: GoogleComputeRegionBackendServiceOutlierDetection;
  /**
  * strong_session_affinity_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#strong_session_affinity_cookie GoogleComputeRegionBackendService#strong_session_affinity_cookie}
  */
  readonly strongSessionAffinityCookie?: GoogleComputeRegionBackendServiceStrongSessionAffinityCookie;
  /**
  * subsetting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#subsetting GoogleComputeRegionBackendService#subsetting}
  */
  readonly subsetting?: GoogleComputeRegionBackendServiceSubsetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#timeouts GoogleComputeRegionBackendService#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionBackendServiceTimeouts;
}
export interface GoogleComputeRegionBackendServiceBackendCustomMetrics {
  /**
  * If true, the metric data is collected and reported to Cloud
  * Monitoring, but is not used for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#dry_run GoogleComputeRegionBackendService#dry_run}
  */
  readonly dryRun: boolean | cdktf.IResolvable;
  /**
  * Optional parameter to define a target utilization for the Custom Metrics
  * balancing mode. The valid range is <code>[0.0, 1.0]</code>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_utilization GoogleComputeRegionBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
  /**
  * Name of a custom utilization signal. The name must be 1-64 characters
  * long and match the regular expression [a-z]([-_.a-z0-9]*[a-z0-9])? which
  * means the first character must be a lowercase letter, and all following
  * characters must be a dash, period, underscore, lowercase letter, or
  * digit, except the last character, which cannot be a dash, period, or
  * underscore. For usage guidelines, see Custom Metrics balancing mode. This
  * field can only be used for a global or regional backend service with the
  * loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
  * <code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}
  */
  readonly name: string;
}

export function googleComputeRegionBackendServiceBackendCustomMetricsToTerraform(struct?: GoogleComputeRegionBackendServiceBackendCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    max_utilization: cdktf.numberToTerraform(struct!.maxUtilization),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleComputeRegionBackendServiceBackendCustomMetricsToHclTerraform(struct?: GoogleComputeRegionBackendServiceBackendCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_utilization: {
      value: cdktf.numberToHclTerraform(struct!.maxUtilization),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionBackendServiceBackendCustomMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._maxUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUtilization = this._maxUtilization;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceBackendCustomMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._maxUtilization = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._maxUtilization = value.maxUtilization;
      this._name = value.name;
    }
  }

  // dry_run - computed: false, optional: false, required: true
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // max_utilization - computed: false, optional: true, required: false
  private _maxUtilization?: number; 
  public get maxUtilization() {
    return this.getNumberAttribute('max_utilization');
  }
  public set maxUtilization(value: number) {
    this._maxUtilization = value;
  }
  public resetMaxUtilization() {
    this._maxUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUtilizationInput() {
    return this._maxUtilization;
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
}

export class GoogleComputeRegionBackendServiceBackendCustomMetricsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionBackendServiceBackendCustomMetrics[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference {
    return new GoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionBackendServiceBackend {
  /**
  * Specifies the balancing mode for this backend.
  * 
  * See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
  * for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION", "CUSTOM_METRICS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#balancing_mode GoogleComputeRegionBackendService#balancing_mode}
  */
  readonly balancingMode?: string;
  /**
  * A multiplier applied to the group's maximum servicing capacity
  * (based on UTILIZATION, RATE or CONNECTION).
  * 
  * ~>**NOTE**: This field cannot be set for
  * INTERNAL region backend services (default loadBalancingScheme),
  * but is required for non-INTERNAL backend service. The total
  * capacity_scaler for all backends must be non-zero.
  * 
  * A setting of 0 means the group is completely drained, offering
  * 0% of its available Capacity. Valid range is [0.0,1.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#capacity_scaler GoogleComputeRegionBackendService#capacity_scaler}
  */
  readonly capacityScaler?: number;
  /**
  * An optional description of this resource.
  * Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#description GoogleComputeRegionBackendService#description}
  */
  readonly description?: string;
  /**
  * This field designates whether this is a failover backend. More
  * than one failover backend can be configured for a given RegionBackendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#failover GoogleComputeRegionBackendService#failover}
  */
  readonly failover?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified URL of an Instance Group or Network Endpoint
  * Group resource. In case of instance group this defines the list
  * of instances that serve traffic. Member virtual machine
  * instances from each instance group must live in the same zone as
  * the instance group itself. No two backends in a backend service
  * are allowed to use same Instance Group resource.
  * 
  * For Network Endpoint Groups this defines list of endpoints. All
  * endpoints of Network Endpoint Group must be hosted on instances
  * located in the same zone as the Network Endpoint Group.
  * 
  * Backend services cannot mix Instance Group and
  * Network Endpoint Group backends.
  * 
  * When the 'load_balancing_scheme' is INTERNAL, only instance groups
  * are supported.
  * 
  * Note that you must specify an Instance Group or Network Endpoint
  * Group resource using the fully-qualified URL, rather than a
  * partial URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#group GoogleComputeRegionBackendService#group}
  */
  readonly group: string;
  /**
  * The max number of simultaneous connections for the group. Can
  * be used with either CONNECTION or UTILIZATION balancing modes.
  * Cannot be set for INTERNAL backend services.
  * 
  * For CONNECTION mode, either maxConnections or one
  * of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
  * as appropriate for group type, must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The max number of simultaneous connections that a single backend
  * network endpoint can handle. Cannot be set
  * for INTERNAL backend services.
  * 
  * This is used to calculate the capacity of the group. Can be
  * used in either CONNECTION or UTILIZATION balancing modes. For
  * CONNECTION mode, either maxConnections or
  * maxConnectionsPerEndpoint must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_connections_per_endpoint GoogleComputeRegionBackendService#max_connections_per_endpoint}
  */
  readonly maxConnectionsPerEndpoint?: number;
  /**
  * The max number of simultaneous connections that a single
  * backend instance can handle. Cannot be set for INTERNAL backend
  * services.
  * 
  * This is used to calculate the capacity of the group.
  * Can be used in either CONNECTION or UTILIZATION balancing modes.
  * For CONNECTION mode, either maxConnections or
  * maxConnectionsPerInstance must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_connections_per_instance GoogleComputeRegionBackendService#max_connections_per_instance}
  */
  readonly maxConnectionsPerInstance?: number;
  /**
  * The max requests per second (RPS) of the group. Cannot be set
  * for INTERNAL backend services.
  * 
  * Can be used with either RATE or UTILIZATION balancing modes,
  * but required if RATE mode. Either maxRate or one
  * of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
  * group type, must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_rate GoogleComputeRegionBackendService#max_rate}
  */
  readonly maxRate?: number;
  /**
  * The max requests per second (RPS) that a single backend network
  * endpoint can handle. This is used to calculate the capacity of
  * the group. Can be used in either balancing mode. For RATE mode,
  * either maxRate or maxRatePerEndpoint must be set. Cannot be set
  * for INTERNAL backend services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_rate_per_endpoint GoogleComputeRegionBackendService#max_rate_per_endpoint}
  */
  readonly maxRatePerEndpoint?: number;
  /**
  * The max requests per second (RPS) that a single backend
  * instance can handle. This is used to calculate the capacity of
  * the group. Can be used in either balancing mode. For RATE mode,
  * either maxRate or maxRatePerInstance must be set. Cannot be set
  * for INTERNAL backend services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_rate_per_instance GoogleComputeRegionBackendService#max_rate_per_instance}
  */
  readonly maxRatePerInstance?: number;
  /**
  * Used when balancingMode is UTILIZATION. This ratio defines the
  * CPU utilization target for the group. Valid range is [0.0, 1.0].
  * Cannot be set for INTERNAL backend services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_utilization GoogleComputeRegionBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
  /**
  * custom_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#custom_metrics GoogleComputeRegionBackendService#custom_metrics}
  */
  readonly customMetrics?: GoogleComputeRegionBackendServiceBackendCustomMetrics[] | cdktf.IResolvable;
}

export function googleComputeRegionBackendServiceBackendToTerraform(struct?: GoogleComputeRegionBackendServiceBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancing_mode: cdktf.stringToTerraform(struct!.balancingMode),
    capacity_scaler: cdktf.numberToTerraform(struct!.capacityScaler),
    description: cdktf.stringToTerraform(struct!.description),
    failover: cdktf.booleanToTerraform(struct!.failover),
    group: cdktf.stringToTerraform(struct!.group),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_connections_per_endpoint: cdktf.numberToTerraform(struct!.maxConnectionsPerEndpoint),
    max_connections_per_instance: cdktf.numberToTerraform(struct!.maxConnectionsPerInstance),
    max_rate: cdktf.numberToTerraform(struct!.maxRate),
    max_rate_per_endpoint: cdktf.numberToTerraform(struct!.maxRatePerEndpoint),
    max_rate_per_instance: cdktf.numberToTerraform(struct!.maxRatePerInstance),
    max_utilization: cdktf.numberToTerraform(struct!.maxUtilization),
    custom_metrics: cdktf.listMapper(googleComputeRegionBackendServiceBackendCustomMetricsToTerraform, true)(struct!.customMetrics),
  }
}


export function googleComputeRegionBackendServiceBackendToHclTerraform(struct?: GoogleComputeRegionBackendServiceBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balancing_mode: {
      value: cdktf.stringToHclTerraform(struct!.balancingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_scaler: {
      value: cdktf.numberToHclTerraform(struct!.capacityScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover: {
      value: cdktf.booleanToHclTerraform(struct!.failover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections_per_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionsPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rate_per_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.maxRatePerEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rate_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.maxRatePerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_utilization: {
      value: cdktf.numberToHclTerraform(struct!.maxUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_metrics: {
      value: cdktf.listMapperHcl(googleComputeRegionBackendServiceBackendCustomMetricsToHclTerraform, true)(struct!.customMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceBackendCustomMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionBackendServiceBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balancingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancingMode = this._balancingMode;
    }
    if (this._capacityScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityScaler = this._capacityScaler;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._failover !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxConnectionsPerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerEndpoint = this._maxConnectionsPerEndpoint;
    }
    if (this._maxConnectionsPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionsPerInstance = this._maxConnectionsPerInstance;
    }
    if (this._maxRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRate = this._maxRate;
    }
    if (this._maxRatePerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRatePerEndpoint = this._maxRatePerEndpoint;
    }
    if (this._maxRatePerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRatePerInstance = this._maxRatePerInstance;
    }
    if (this._maxUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUtilization = this._maxUtilization;
    }
    if (this._customMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetrics = this._customMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balancingMode = undefined;
      this._capacityScaler = undefined;
      this._description = undefined;
      this._failover = undefined;
      this._group = undefined;
      this._maxConnections = undefined;
      this._maxConnectionsPerEndpoint = undefined;
      this._maxConnectionsPerInstance = undefined;
      this._maxRate = undefined;
      this._maxRatePerEndpoint = undefined;
      this._maxRatePerInstance = undefined;
      this._maxUtilization = undefined;
      this._customMetrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balancingMode = value.balancingMode;
      this._capacityScaler = value.capacityScaler;
      this._description = value.description;
      this._failover = value.failover;
      this._group = value.group;
      this._maxConnections = value.maxConnections;
      this._maxConnectionsPerEndpoint = value.maxConnectionsPerEndpoint;
      this._maxConnectionsPerInstance = value.maxConnectionsPerInstance;
      this._maxRate = value.maxRate;
      this._maxRatePerEndpoint = value.maxRatePerEndpoint;
      this._maxRatePerInstance = value.maxRatePerInstance;
      this._maxUtilization = value.maxUtilization;
      this._customMetrics.internalValue = value.customMetrics;
    }
  }

  // balancing_mode - computed: false, optional: true, required: false
  private _balancingMode?: string; 
  public get balancingMode() {
    return this.getStringAttribute('balancing_mode');
  }
  public set balancingMode(value: string) {
    this._balancingMode = value;
  }
  public resetBalancingMode() {
    this._balancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancingModeInput() {
    return this._balancingMode;
  }

  // capacity_scaler - computed: false, optional: true, required: false
  private _capacityScaler?: number; 
  public get capacityScaler() {
    return this.getNumberAttribute('capacity_scaler');
  }
  public set capacityScaler(value: number) {
    this._capacityScaler = value;
  }
  public resetCapacityScaler() {
    this._capacityScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityScalerInput() {
    return this._capacityScaler;
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

  // failover - computed: true, optional: true, required: false
  private _failover?: boolean | cdktf.IResolvable; 
  public get failover() {
    return this.getBooleanAttribute('failover');
  }
  public set failover(value: boolean | cdktf.IResolvable) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_connections_per_endpoint - computed: false, optional: true, required: false
  private _maxConnectionsPerEndpoint?: number; 
  public get maxConnectionsPerEndpoint() {
    return this.getNumberAttribute('max_connections_per_endpoint');
  }
  public set maxConnectionsPerEndpoint(value: number) {
    this._maxConnectionsPerEndpoint = value;
  }
  public resetMaxConnectionsPerEndpoint() {
    this._maxConnectionsPerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerEndpointInput() {
    return this._maxConnectionsPerEndpoint;
  }

  // max_connections_per_instance - computed: false, optional: true, required: false
  private _maxConnectionsPerInstance?: number; 
  public get maxConnectionsPerInstance() {
    return this.getNumberAttribute('max_connections_per_instance');
  }
  public set maxConnectionsPerInstance(value: number) {
    this._maxConnectionsPerInstance = value;
  }
  public resetMaxConnectionsPerInstance() {
    this._maxConnectionsPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPerInstanceInput() {
    return this._maxConnectionsPerInstance;
  }

  // max_rate - computed: false, optional: true, required: false
  private _maxRate?: number; 
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }
  public set maxRate(value: number) {
    this._maxRate = value;
  }
  public resetMaxRate() {
    this._maxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRateInput() {
    return this._maxRate;
  }

  // max_rate_per_endpoint - computed: false, optional: true, required: false
  private _maxRatePerEndpoint?: number; 
  public get maxRatePerEndpoint() {
    return this.getNumberAttribute('max_rate_per_endpoint');
  }
  public set maxRatePerEndpoint(value: number) {
    this._maxRatePerEndpoint = value;
  }
  public resetMaxRatePerEndpoint() {
    this._maxRatePerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRatePerEndpointInput() {
    return this._maxRatePerEndpoint;
  }

  // max_rate_per_instance - computed: false, optional: true, required: false
  private _maxRatePerInstance?: number; 
  public get maxRatePerInstance() {
    return this.getNumberAttribute('max_rate_per_instance');
  }
  public set maxRatePerInstance(value: number) {
    this._maxRatePerInstance = value;
  }
  public resetMaxRatePerInstance() {
    this._maxRatePerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRatePerInstanceInput() {
    return this._maxRatePerInstance;
  }

  // max_utilization - computed: false, optional: true, required: false
  private _maxUtilization?: number; 
  public get maxUtilization() {
    return this.getNumberAttribute('max_utilization');
  }
  public set maxUtilization(value: number) {
    this._maxUtilization = value;
  }
  public resetMaxUtilization() {
    this._maxUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUtilizationInput() {
    return this._maxUtilization;
  }

  // custom_metrics - computed: false, optional: true, required: false
  private _customMetrics = new GoogleComputeRegionBackendServiceBackendCustomMetricsList(this, "custom_metrics", false);
  public get customMetrics() {
    return this._customMetrics;
  }
  public putCustomMetrics(value: GoogleComputeRegionBackendServiceBackendCustomMetrics[] | cdktf.IResolvable) {
    this._customMetrics.internalValue = value;
  }
  public resetCustomMetrics() {
    this._customMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsInput() {
    return this._customMetrics.internalValue;
  }
}

export class GoogleComputeRegionBackendServiceBackendList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionBackendServiceBackend[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionBackendServiceBackendOutputReference {
    return new GoogleComputeRegionBackendServiceBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy {
  /**
  * If true requests to different hosts will be cached separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#include_host GoogleComputeRegionBackendService#include_host}
  */
  readonly includeHost?: boolean | cdktf.IResolvable;
  /**
  * Names of cookies to include in cache keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#include_named_cookies GoogleComputeRegionBackendService#include_named_cookies}
  */
  readonly includeNamedCookies?: string[];
  /**
  * If true, http and https requests will be cached separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#include_protocol GoogleComputeRegionBackendService#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktf.IResolvable;
  /**
  * If true, include query string parameters in the cache key
  * according to query_string_whitelist and
  * query_string_blacklist. If neither is set, the entire query
  * string will be included.
  * 
  * If false, the query string will be excluded from the cache
  * key entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#include_query_string GoogleComputeRegionBackendService#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Names of query string parameters to exclude in cache keys.
  * 
  * All other parameters will be included. Either specify
  * query_string_whitelist or query_string_blacklist, not both.
  * '&' and '=' will be percent encoded and not treated as
  * delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#query_string_blacklist GoogleComputeRegionBackendService#query_string_blacklist}
  */
  readonly queryStringBlacklist?: string[];
  /**
  * Names of query string parameters to include in cache keys.
  * 
  * All other parameters will be excluded. Either specify
  * query_string_whitelist or query_string_blacklist, not both.
  * '&' and '=' will be percent encoded and not treated as
  * delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#query_string_whitelist GoogleComputeRegionBackendService#query_string_whitelist}
  */
  readonly queryStringWhitelist?: string[];
}

export function googleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference | GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_host: cdktf.booleanToTerraform(struct!.includeHost),
    include_named_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeNamedCookies),
    include_protocol: cdktf.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktf.booleanToTerraform(struct!.includeQueryString),
    query_string_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringBlacklist),
    query_string_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringWhitelist),
  }
}


export function googleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyToHclTerraform(struct?: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference | GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_host: {
      value: cdktf.booleanToHclTerraform(struct!.includeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_named_cookies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeNamedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.includeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query_string: {
      value: cdktf.booleanToHclTerraform(struct!.includeQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_string_blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryStringBlacklist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query_string_whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryStringWhitelist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeNamedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNamedCookies = this._includeNamedCookies;
    }
    if (this._includeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProtocol = this._includeProtocol;
    }
    if (this._includeQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQueryString = this._includeQueryString;
    }
    if (this._queryStringBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringBlacklist = this._queryStringBlacklist;
    }
    if (this._queryStringWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringWhitelist = this._queryStringWhitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeHost = undefined;
      this._includeNamedCookies = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._queryStringBlacklist = undefined;
      this._queryStringWhitelist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeHost = value.includeHost;
      this._includeNamedCookies = value.includeNamedCookies;
      this._includeProtocol = value.includeProtocol;
      this._includeQueryString = value.includeQueryString;
      this._queryStringBlacklist = value.queryStringBlacklist;
      this._queryStringWhitelist = value.queryStringWhitelist;
    }
  }

  // include_host - computed: false, optional: true, required: false
  private _includeHost?: boolean | cdktf.IResolvable; 
  public get includeHost() {
    return this.getBooleanAttribute('include_host');
  }
  public set includeHost(value: boolean | cdktf.IResolvable) {
    this._includeHost = value;
  }
  public resetIncludeHost() {
    this._includeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHostInput() {
    return this._includeHost;
  }

  // include_named_cookies - computed: false, optional: true, required: false
  private _includeNamedCookies?: string[]; 
  public get includeNamedCookies() {
    return this.getListAttribute('include_named_cookies');
  }
  public set includeNamedCookies(value: string[]) {
    this._includeNamedCookies = value;
  }
  public resetIncludeNamedCookies() {
    this._includeNamedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNamedCookiesInput() {
    return this._includeNamedCookies;
  }

  // include_protocol - computed: false, optional: true, required: false
  private _includeProtocol?: boolean | cdktf.IResolvable; 
  public get includeProtocol() {
    return this.getBooleanAttribute('include_protocol');
  }
  public set includeProtocol(value: boolean | cdktf.IResolvable) {
    this._includeProtocol = value;
  }
  public resetIncludeProtocol() {
    this._includeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInput() {
    return this._includeProtocol;
  }

  // include_query_string - computed: false, optional: true, required: false
  private _includeQueryString?: boolean | cdktf.IResolvable; 
  public get includeQueryString() {
    return this.getBooleanAttribute('include_query_string');
  }
  public set includeQueryString(value: boolean | cdktf.IResolvable) {
    this._includeQueryString = value;
  }
  public resetIncludeQueryString() {
    this._includeQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryStringInput() {
    return this._includeQueryString;
  }

  // query_string_blacklist - computed: false, optional: true, required: false
  private _queryStringBlacklist?: string[]; 
  public get queryStringBlacklist() {
    return cdktf.Fn.tolist(this.getListAttribute('query_string_blacklist'));
  }
  public set queryStringBlacklist(value: string[]) {
    this._queryStringBlacklist = value;
  }
  public resetQueryStringBlacklist() {
    this._queryStringBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBlacklistInput() {
    return this._queryStringBlacklist;
  }

  // query_string_whitelist - computed: false, optional: true, required: false
  private _queryStringWhitelist?: string[]; 
  public get queryStringWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('query_string_whitelist'));
  }
  public set queryStringWhitelist(value: string[]) {
    this._queryStringWhitelist = value;
  }
  public resetQueryStringWhitelist() {
    this._queryStringWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringWhitelistInput() {
    return this._queryStringWhitelist;
  }
}
export interface GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
  * can be specified as values, and you cannot specify a status code more than once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#code GoogleComputeRegionBackendService#code}
  */
  readonly code?: number;
  /**
  * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
  * (30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}
  */
  readonly ttl?: number;
}

export function googleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyToTerraform(struct?: GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function googleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyToHclTerraform(struct?: GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._ttl = value.ttl;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference {
    return new GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionBackendServiceCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
  * The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#cache_mode GoogleComputeRegionBackendService#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#client_ttl GoogleComputeRegionBackendService#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
  * that do not have an existing valid TTL (max-age or s-max-age).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#default_ttl GoogleComputeRegionBackendService#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_ttl GoogleComputeRegionBackendService#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#negative_caching GoogleComputeRegionBackendService#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#serve_while_stale GoogleComputeRegionBackendService#serve_while_stale}
  */
  readonly serveWhileStale?: number;
  /**
  * Maximum number of seconds the response to a signed URL request
  * will be considered fresh, defaults to 1hr (3600s). After this
  * time period, the response will be revalidated before
  * being served.
  * 
  * When serving responses to signed URL requests, Cloud CDN will
  * internally behave as though all responses from this backend had a
  * "Cache-Control: public, max-age=[TTL]" header, regardless of any
  * existing Cache-Control header. The actual headers served in
  * responses will not be altered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#signed_url_cache_max_age_sec GoogleComputeRegionBackendService#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * cache_key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#cache_key_policy GoogleComputeRegionBackendService#cache_key_policy}
  */
  readonly cacheKeyPolicy?: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;
  /**
  * negative_caching_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#negative_caching_policy GoogleComputeRegionBackendService#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable;
}

export function googleComputeRegionBackendServiceCdnPolicyToTerraform(struct?: GoogleComputeRegionBackendServiceCdnPolicyOutputReference | GoogleComputeRegionBackendServiceCdnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_mode: cdktf.stringToTerraform(struct!.cacheMode),
    client_ttl: cdktf.numberToTerraform(struct!.clientTtl),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    max_ttl: cdktf.numberToTerraform(struct!.maxTtl),
    negative_caching: cdktf.booleanToTerraform(struct!.negativeCaching),
    serve_while_stale: cdktf.numberToTerraform(struct!.serveWhileStale),
    signed_url_cache_max_age_sec: cdktf.numberToTerraform(struct!.signedUrlCacheMaxAgeSec),
    cache_key_policy: googleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    negative_caching_policy: cdktf.listMapper(googleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
  }
}


export function googleComputeRegionBackendServiceCdnPolicyToHclTerraform(struct?: GoogleComputeRegionBackendServiceCdnPolicyOutputReference | GoogleComputeRegionBackendServiceCdnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_mode: {
      value: cdktf.stringToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ttl: {
      value: cdktf.numberToHclTerraform(struct!.clientTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ttl: {
      value: cdktf.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negative_caching: {
      value: cdktf.booleanToHclTerraform(struct!.negativeCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serve_while_stale: {
      value: cdktf.numberToHclTerraform(struct!.serveWhileStale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signed_url_cache_max_age_sec: {
      value: cdktf.numberToHclTerraform(struct!.signedUrlCacheMaxAgeSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_key_policy: {
      value: googleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyToHclTerraform(struct!.cacheKeyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList",
    },
    negative_caching_policy: {
      value: cdktf.listMapperHcl(googleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyToHclTerraform, true)(struct!.negativeCachingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceCdnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceCdnPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._clientTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTtl = this._clientTtl;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._negativeCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCaching = this._negativeCaching;
    }
    if (this._serveWhileStale !== undefined) {
      hasAnyValues = true;
      internalValueResult.serveWhileStale = this._serveWhileStale;
    }
    if (this._signedUrlCacheMaxAgeSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedUrlCacheMaxAgeSec = this._signedUrlCacheMaxAgeSec;
    }
    if (this._cacheKeyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyPolicy = this._cacheKeyPolicy?.internalValue;
    }
    if (this._negativeCachingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingPolicy = this._negativeCachingPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceCdnPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheMode = undefined;
      this._clientTtl = undefined;
      this._defaultTtl = undefined;
      this._maxTtl = undefined;
      this._negativeCaching = undefined;
      this._serveWhileStale = undefined;
      this._signedUrlCacheMaxAgeSec = undefined;
      this._cacheKeyPolicy.internalValue = undefined;
      this._negativeCachingPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheMode = value.cacheMode;
      this._clientTtl = value.clientTtl;
      this._defaultTtl = value.defaultTtl;
      this._maxTtl = value.maxTtl;
      this._negativeCaching = value.negativeCaching;
      this._serveWhileStale = value.serveWhileStale;
      this._signedUrlCacheMaxAgeSec = value.signedUrlCacheMaxAgeSec;
      this._cacheKeyPolicy.internalValue = value.cacheKeyPolicy;
      this._negativeCachingPolicy.internalValue = value.negativeCachingPolicy;
    }
  }

  // cache_mode - computed: true, optional: true, required: false
  private _cacheMode?: string; 
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }
  public set cacheMode(value: string) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // client_ttl - computed: true, optional: true, required: false
  private _clientTtl?: number; 
  public get clientTtl() {
    return this.getNumberAttribute('client_ttl');
  }
  public set clientTtl(value: number) {
    this._clientTtl = value;
  }
  public resetClientTtl() {
    this._clientTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTtlInput() {
    return this._clientTtl;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // negative_caching - computed: true, optional: true, required: false
  private _negativeCaching?: boolean | cdktf.IResolvable; 
  public get negativeCaching() {
    return this.getBooleanAttribute('negative_caching');
  }
  public set negativeCaching(value: boolean | cdktf.IResolvable) {
    this._negativeCaching = value;
  }
  public resetNegativeCaching() {
    this._negativeCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingInput() {
    return this._negativeCaching;
  }

  // serve_while_stale - computed: true, optional: true, required: false
  private _serveWhileStale?: number; 
  public get serveWhileStale() {
    return this.getNumberAttribute('serve_while_stale');
  }
  public set serveWhileStale(value: number) {
    this._serveWhileStale = value;
  }
  public resetServeWhileStale() {
    this._serveWhileStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveWhileStaleInput() {
    return this._serveWhileStale;
  }

  // signed_url_cache_max_age_sec - computed: false, optional: true, required: false
  private _signedUrlCacheMaxAgeSec?: number; 
  public get signedUrlCacheMaxAgeSec() {
    return this.getNumberAttribute('signed_url_cache_max_age_sec');
  }
  public set signedUrlCacheMaxAgeSec(value: number) {
    this._signedUrlCacheMaxAgeSec = value;
  }
  public resetSignedUrlCacheMaxAgeSec() {
    this._signedUrlCacheMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedUrlCacheMaxAgeSecInput() {
    return this._signedUrlCacheMaxAgeSec;
  }

  // cache_key_policy - computed: false, optional: true, required: false
  private _cacheKeyPolicy = new GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: GoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy) {
    this._cacheKeyPolicy.internalValue = value;
  }
  public resetCacheKeyPolicy() {
    this._cacheKeyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyPolicyInput() {
    return this._cacheKeyPolicy.internalValue;
  }

  // negative_caching_policy - computed: false, optional: true, required: false
  private _negativeCachingPolicy = new GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: GoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable) {
    this._negativeCachingPolicy.internalValue = value;
  }
  public resetNegativeCachingPolicy() {
    this._negativeCachingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingPolicyInput() {
    return this._negativeCachingPolicy.internalValue;
  }
}
export interface GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeRegionBackendServiceCircuitBreakersConnectTimeoutToTerraform(struct?: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference | GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionBackendServiceCircuitBreakersConnectTimeoutToHclTerraform(struct?: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference | GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
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

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionBackendServiceCircuitBreakers {
  /**
  * The maximum number of connections to the backend cluster.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_connections GoogleComputeRegionBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests to the backend cluster.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_pending_requests GoogleComputeRegionBackendService#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests to the backend cluster.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_requests GoogleComputeRegionBackendService#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Maximum requests for a single backend connection. This parameter
  * is respected by both the HTTP/1.1 and HTTP/2 implementations. If
  * not specified, there is no limit. Setting this parameter to 1
  * will effectively disable keep alive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_requests_per_connection GoogleComputeRegionBackendService#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * The maximum number of parallel retries to the backend cluster.
  * Defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_retries GoogleComputeRegionBackendService#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * connect_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#connect_timeout GoogleComputeRegionBackendService#connect_timeout}
  */
  readonly connectTimeout?: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout;
}

export function googleComputeRegionBackendServiceCircuitBreakersToTerraform(struct?: GoogleComputeRegionBackendServiceCircuitBreakersOutputReference | GoogleComputeRegionBackendServiceCircuitBreakers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    max_requests_per_connection: cdktf.numberToTerraform(struct!.maxRequestsPerConnection),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    connect_timeout: googleComputeRegionBackendServiceCircuitBreakersConnectTimeoutToTerraform(struct!.connectTimeout),
  }
}


export function googleComputeRegionBackendServiceCircuitBreakersToHclTerraform(struct?: GoogleComputeRegionBackendServiceCircuitBreakersOutputReference | GoogleComputeRegionBackendServiceCircuitBreakers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests_per_connection: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_timeout: {
      value: googleComputeRegionBackendServiceCircuitBreakersConnectTimeoutToHclTerraform(struct!.connectTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceCircuitBreakersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceCircuitBreakers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._maxRequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestsPerConnection = this._maxRequestsPerConnection;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._connectTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceCircuitBreakers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConnections = undefined;
      this._maxPendingRequests = undefined;
      this._maxRequests = undefined;
      this._maxRequestsPerConnection = undefined;
      this._maxRetries = undefined;
      this._connectTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConnections = value.maxConnections;
      this._maxPendingRequests = value.maxPendingRequests;
      this._maxRequests = value.maxRequests;
      this._maxRequestsPerConnection = value.maxRequestsPerConnection;
      this._maxRetries = value.maxRetries;
      this._connectTimeout.internalValue = value.connectTimeout;
    }
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // max_requests_per_connection - computed: false, optional: true, required: false
  private _maxRequestsPerConnection?: number; 
  public get maxRequestsPerConnection() {
    return this.getNumberAttribute('max_requests_per_connection');
  }
  public set maxRequestsPerConnection(value: number) {
    this._maxRequestsPerConnection = value;
  }
  public resetMaxRequestsPerConnection() {
    this._maxRequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsPerConnectionInput() {
    return this._maxRequestsPerConnection;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout = new GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference(this, "connect_timeout");
  public get connectTimeout() {
    return this._connectTimeout;
  }
  public putConnectTimeout(value: GoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout) {
    this._connectTimeout.internalValue = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout.internalValue;
  }
}
export interface GoogleComputeRegionBackendServiceConnectionTrackingPolicy {
  /**
  * Specifies connection persistence when backends are unhealthy.
  * 
  * If set to 'DEFAULT_FOR_PROTOCOL', the existing connections persist on
  * unhealthy backends only for connection-oriented protocols (TCP and SCTP)
  * and only if the Tracking Mode is PER_CONNECTION (default tracking mode)
  * or the Session Affinity is configured for 5-tuple. They do not persist
  * for UDP.
  * 
  * If set to 'NEVER_PERSIST', after a backend becomes unhealthy, the existing
  * connections on the unhealthy backend are never persisted on the unhealthy
  * backend. They are always diverted to newly selected healthy backends
  * (unless all backends are unhealthy).
  * 
  * If set to 'ALWAYS_PERSIST', existing connections always persist on
  * unhealthy backends regardless of protocol and session affinity. It is
  * generally not recommended to use this mode overriding the default. Default value: "DEFAULT_FOR_PROTOCOL" Possible values: ["DEFAULT_FOR_PROTOCOL", "NEVER_PERSIST", "ALWAYS_PERSIST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#connection_persistence_on_unhealthy_backends GoogleComputeRegionBackendService#connection_persistence_on_unhealthy_backends}
  */
  readonly connectionPersistenceOnUnhealthyBackends?: string;
  /**
  * Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enable_strong_affinity GoogleComputeRegionBackendService#enable_strong_affinity}
  */
  readonly enableStrongAffinity?: boolean | cdktf.IResolvable;
  /**
  * Specifies how long to keep a Connection Tracking entry while there is
  * no matching traffic (in seconds).
  * 
  * For L4 ILB the minimum(default) is 10 minutes and maximum is 16 hours.
  * 
  * For NLB the minimum(default) is 60 seconds and the maximum is 16 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#idle_timeout_sec GoogleComputeRegionBackendService#idle_timeout_sec}
  */
  readonly idleTimeoutSec?: number;
  /**
  * Specifies the key used for connection tracking. There are two options:
  * 'PER_CONNECTION': The Connection Tracking is performed as per the
  * Connection Key (default Hash Method) for the specific protocol.
  * 
  * 'PER_SESSION': The Connection Tracking is performed as per the
  * configured Session Affinity. It matches the configured Session Affinity. Default value: "PER_CONNECTION" Possible values: ["PER_CONNECTION", "PER_SESSION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#tracking_mode GoogleComputeRegionBackendService#tracking_mode}
  */
  readonly trackingMode?: string;
}

export function googleComputeRegionBackendServiceConnectionTrackingPolicyToTerraform(struct?: GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference | GoogleComputeRegionBackendServiceConnectionTrackingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_persistence_on_unhealthy_backends: cdktf.stringToTerraform(struct!.connectionPersistenceOnUnhealthyBackends),
    enable_strong_affinity: cdktf.booleanToTerraform(struct!.enableStrongAffinity),
    idle_timeout_sec: cdktf.numberToTerraform(struct!.idleTimeoutSec),
    tracking_mode: cdktf.stringToTerraform(struct!.trackingMode),
  }
}


export function googleComputeRegionBackendServiceConnectionTrackingPolicyToHclTerraform(struct?: GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference | GoogleComputeRegionBackendServiceConnectionTrackingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_persistence_on_unhealthy_backends: {
      value: cdktf.stringToHclTerraform(struct!.connectionPersistenceOnUnhealthyBackends),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_strong_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.enableStrongAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idle_timeout_sec: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracking_mode: {
      value: cdktf.stringToHclTerraform(struct!.trackingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceConnectionTrackingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPersistenceOnUnhealthyBackends !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPersistenceOnUnhealthyBackends = this._connectionPersistenceOnUnhealthyBackends;
    }
    if (this._enableStrongAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStrongAffinity = this._enableStrongAffinity;
    }
    if (this._idleTimeoutSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutSec = this._idleTimeoutSec;
    }
    if (this._trackingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingMode = this._trackingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceConnectionTrackingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionPersistenceOnUnhealthyBackends = undefined;
      this._enableStrongAffinity = undefined;
      this._idleTimeoutSec = undefined;
      this._trackingMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionPersistenceOnUnhealthyBackends = value.connectionPersistenceOnUnhealthyBackends;
      this._enableStrongAffinity = value.enableStrongAffinity;
      this._idleTimeoutSec = value.idleTimeoutSec;
      this._trackingMode = value.trackingMode;
    }
  }

  // connection_persistence_on_unhealthy_backends - computed: false, optional: true, required: false
  private _connectionPersistenceOnUnhealthyBackends?: string; 
  public get connectionPersistenceOnUnhealthyBackends() {
    return this.getStringAttribute('connection_persistence_on_unhealthy_backends');
  }
  public set connectionPersistenceOnUnhealthyBackends(value: string) {
    this._connectionPersistenceOnUnhealthyBackends = value;
  }
  public resetConnectionPersistenceOnUnhealthyBackends() {
    this._connectionPersistenceOnUnhealthyBackends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPersistenceOnUnhealthyBackendsInput() {
    return this._connectionPersistenceOnUnhealthyBackends;
  }

  // enable_strong_affinity - computed: false, optional: true, required: false
  private _enableStrongAffinity?: boolean | cdktf.IResolvable; 
  public get enableStrongAffinity() {
    return this.getBooleanAttribute('enable_strong_affinity');
  }
  public set enableStrongAffinity(value: boolean | cdktf.IResolvable) {
    this._enableStrongAffinity = value;
  }
  public resetEnableStrongAffinity() {
    this._enableStrongAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStrongAffinityInput() {
    return this._enableStrongAffinity;
  }

  // idle_timeout_sec - computed: true, optional: true, required: false
  private _idleTimeoutSec?: number; 
  public get idleTimeoutSec() {
    return this.getNumberAttribute('idle_timeout_sec');
  }
  public set idleTimeoutSec(value: number) {
    this._idleTimeoutSec = value;
  }
  public resetIdleTimeoutSec() {
    this._idleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutSecInput() {
    return this._idleTimeoutSec;
  }

  // tracking_mode - computed: false, optional: true, required: false
  private _trackingMode?: string; 
  public get trackingMode() {
    return this.getStringAttribute('tracking_mode');
  }
  public set trackingMode(value: string) {
    this._trackingMode = value;
  }
  public resetTrackingMode() {
    this._trackingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingModeInput() {
    return this._trackingMode;
  }
}
export interface GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeRegionBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference | GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionBackendServiceConsistentHashHttpCookieTtlToHclTerraform(struct?: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference | GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
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

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionBackendServiceConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}
  */
  readonly ttl?: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl;
}

export function googleComputeRegionBackendServiceConsistentHashHttpCookieToTerraform(struct?: GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference | GoogleComputeRegionBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: googleComputeRegionBackendServiceConsistentHashHttpCookieTtlToTerraform(struct!.ttl),
  }
}


export function googleComputeRegionBackendServiceConsistentHashHttpCookieToHclTerraform(struct?: GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference | GoogleComputeRegionBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: googleComputeRegionBackendServiceConsistentHashHttpCookieTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceConsistentHashHttpCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceConsistentHashHttpCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
      this._ttl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
      this._ttl.internalValue = value.ttl;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: GoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}
export interface GoogleComputeRegionBackendServiceConsistentHash {
  /**
  * The hash based on the value of the specified header field.
  * This field is applicable if the sessionAffinity is set to HEADER_FIELD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#http_header_name GoogleComputeRegionBackendService#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * The minimum number of virtual nodes to use for the hash ring.
  * Larger ring sizes result in more granular load
  * distributions. If the number of hosts in the load balancing pool
  * is larger than the ring size, each host will be assigned a single
  * virtual node.
  * Defaults to 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#minimum_ring_size GoogleComputeRegionBackendService#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * http_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#http_cookie GoogleComputeRegionBackendService#http_cookie}
  */
  readonly httpCookie?: GoogleComputeRegionBackendServiceConsistentHashHttpCookie;
}

export function googleComputeRegionBackendServiceConsistentHashToTerraform(struct?: GoogleComputeRegionBackendServiceConsistentHashOutputReference | GoogleComputeRegionBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    http_cookie: googleComputeRegionBackendServiceConsistentHashHttpCookieToTerraform(struct!.httpCookie),
  }
}


export function googleComputeRegionBackendServiceConsistentHashToHclTerraform(struct?: GoogleComputeRegionBackendServiceConsistentHashOutputReference | GoogleComputeRegionBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_ring_size: {
      value: cdktf.numberToHclTerraform(struct!.minimumRingSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie: {
      value: googleComputeRegionBackendServiceConsistentHashHttpCookieToHclTerraform(struct!.httpCookie),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceConsistentHashHttpCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceConsistentHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._minimumRingSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRingSize = this._minimumRingSize;
    }
    if (this._httpCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceConsistentHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpHeaderName = undefined;
      this._minimumRingSize = undefined;
      this._httpCookie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpHeaderName = value.httpHeaderName;
      this._minimumRingSize = value.minimumRingSize;
      this._httpCookie.internalValue = value.httpCookie;
    }
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // minimum_ring_size - computed: false, optional: true, required: false
  private _minimumRingSize?: number; 
  public get minimumRingSize() {
    return this.getNumberAttribute('minimum_ring_size');
  }
  public set minimumRingSize(value: number) {
    this._minimumRingSize = value;
  }
  public resetMinimumRingSize() {
    this._minimumRingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRingSizeInput() {
    return this._minimumRingSize;
  }

  // http_cookie - computed: false, optional: true, required: false
  private _httpCookie = new GoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: GoogleComputeRegionBackendServiceConsistentHashHttpCookie) {
    this._httpCookie.internalValue = value;
  }
  public resetHttpCookie() {
    this._httpCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie.internalValue;
  }
}
export interface GoogleComputeRegionBackendServiceCustomMetrics {
  /**
  * If true, the metric data is not used for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#dry_run GoogleComputeRegionBackendService#dry_run}
  */
  readonly dryRun: boolean | cdktf.IResolvable;
  /**
  * Name of a custom utilization signal. The name must be 1-64 characters
  * long and match the regular expression [a-z]([-_.a-z0-9]*[a-z0-9])? which
  * means the first character must be a lowercase letter, and all following
  * characters must be a dash, period, underscore, lowercase letter, or
  * digit, except the last character, which cannot be a dash, period, or
  * underscore. For usage guidelines, see Custom Metrics balancing mode. This
  * field can only be used for a global or regional backend service with the
  * loadBalancingScheme set to <code>EXTERNAL_MANAGED</code>,
  * <code>INTERNAL_MANAGED</code> <code>INTERNAL_SELF_MANAGED</code>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}
  */
  readonly name: string;
}

export function googleComputeRegionBackendServiceCustomMetricsToTerraform(struct?: GoogleComputeRegionBackendServiceCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleComputeRegionBackendServiceCustomMetricsToHclTerraform(struct?: GoogleComputeRegionBackendServiceCustomMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceCustomMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeRegionBackendServiceCustomMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceCustomMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._name = value.name;
    }
  }

  // dry_run - computed: false, optional: false, required: true
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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
}

export class GoogleComputeRegionBackendServiceCustomMetricsList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeRegionBackendServiceCustomMetrics[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeRegionBackendServiceCustomMetricsOutputReference {
    return new GoogleComputeRegionBackendServiceCustomMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection {
  /**
  * A boolean flag enabling IP:PORT based dynamic forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enabled GoogleComputeRegionBackendService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleComputeRegionBackendServiceDynamicForwardingIpPortSelectionToTerraform(struct?: GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference | GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleComputeRegionBackendServiceDynamicForwardingIpPortSelectionToHclTerraform(struct?: GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference | GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection): any {
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

export class GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleComputeRegionBackendServiceDynamicForwarding {
  /**
  * ip_port_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#ip_port_selection GoogleComputeRegionBackendService#ip_port_selection}
  */
  readonly ipPortSelection?: GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection;
}

export function googleComputeRegionBackendServiceDynamicForwardingToTerraform(struct?: GoogleComputeRegionBackendServiceDynamicForwardingOutputReference | GoogleComputeRegionBackendServiceDynamicForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_port_selection: googleComputeRegionBackendServiceDynamicForwardingIpPortSelectionToTerraform(struct!.ipPortSelection),
  }
}


export function googleComputeRegionBackendServiceDynamicForwardingToHclTerraform(struct?: GoogleComputeRegionBackendServiceDynamicForwardingOutputReference | GoogleComputeRegionBackendServiceDynamicForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_port_selection: {
      value: googleComputeRegionBackendServiceDynamicForwardingIpPortSelectionToHclTerraform(struct!.ipPortSelection),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceDynamicForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceDynamicForwarding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPortSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPortSelection = this._ipPortSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceDynamicForwarding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipPortSelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipPortSelection.internalValue = value.ipPortSelection;
    }
  }

  // ip_port_selection - computed: false, optional: true, required: false
  private _ipPortSelection = new GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference(this, "ip_port_selection");
  public get ipPortSelection() {
    return this._ipPortSelection;
  }
  public putIpPortSelection(value: GoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection) {
    this._ipPortSelection.internalValue = value;
  }
  public resetIpPortSelection() {
    this._ipPortSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortSelectionInput() {
    return this._ipPortSelection.internalValue;
  }
}
export interface GoogleComputeRegionBackendServiceFailoverPolicy {
  /**
  * On failover or failback, this field indicates whether connection drain
  * will be honored. Setting this to true has the following effect: connections
  * to the old active pool are not drained. Connections to the new active pool
  * use the timeout of 10 min (currently fixed). Setting to false has the
  * following effect: both old and new connections will have a drain timeout
  * of 10 min.
  * This can be set to true only if the protocol is TCP.
  * The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#disable_connection_drain_on_failover GoogleComputeRegionBackendService#disable_connection_drain_on_failover}
  */
  readonly disableConnectionDrainOnFailover?: boolean | cdktf.IResolvable;
  /**
  * This option is used only when no healthy VMs are detected in the primary
  * and backup instance groups. When set to true, traffic is dropped. When
  * set to false, new connections are sent across all VMs in the primary group.
  * The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#drop_traffic_if_unhealthy GoogleComputeRegionBackendService#drop_traffic_if_unhealthy}
  */
  readonly dropTrafficIfUnhealthy?: boolean | cdktf.IResolvable;
  /**
  * The value of the field must be in [0, 1]. If the ratio of the healthy
  * VMs in the primary backend is at or below this number, traffic arriving
  * at the load-balanced IP will be directed to the failover backend.
  * In case where 'failoverRatio' is not set or all the VMs in the backup
  * backend are unhealthy, the traffic will be directed back to the primary
  * backend in the "force" mode, where traffic will be spread to the healthy
  * VMs with the best effort, or to all VMs when no VM is healthy.
  * This field is only used with l4 load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#failover_ratio GoogleComputeRegionBackendService#failover_ratio}
  */
  readonly failoverRatio?: number;
}

export function googleComputeRegionBackendServiceFailoverPolicyToTerraform(struct?: GoogleComputeRegionBackendServiceFailoverPolicyOutputReference | GoogleComputeRegionBackendServiceFailoverPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_connection_drain_on_failover: cdktf.booleanToTerraform(struct!.disableConnectionDrainOnFailover),
    drop_traffic_if_unhealthy: cdktf.booleanToTerraform(struct!.dropTrafficIfUnhealthy),
    failover_ratio: cdktf.numberToTerraform(struct!.failoverRatio),
  }
}


export function googleComputeRegionBackendServiceFailoverPolicyToHclTerraform(struct?: GoogleComputeRegionBackendServiceFailoverPolicyOutputReference | GoogleComputeRegionBackendServiceFailoverPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_connection_drain_on_failover: {
      value: cdktf.booleanToHclTerraform(struct!.disableConnectionDrainOnFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_traffic_if_unhealthy: {
      value: cdktf.booleanToHclTerraform(struct!.dropTrafficIfUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover_ratio: {
      value: cdktf.numberToHclTerraform(struct!.failoverRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceFailoverPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceFailoverPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableConnectionDrainOnFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConnectionDrainOnFailover = this._disableConnectionDrainOnFailover;
    }
    if (this._dropTrafficIfUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropTrafficIfUnhealthy = this._dropTrafficIfUnhealthy;
    }
    if (this._failoverRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverRatio = this._failoverRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceFailoverPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableConnectionDrainOnFailover = undefined;
      this._dropTrafficIfUnhealthy = undefined;
      this._failoverRatio = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableConnectionDrainOnFailover = value.disableConnectionDrainOnFailover;
      this._dropTrafficIfUnhealthy = value.dropTrafficIfUnhealthy;
      this._failoverRatio = value.failoverRatio;
    }
  }

  // disable_connection_drain_on_failover - computed: true, optional: true, required: false
  private _disableConnectionDrainOnFailover?: boolean | cdktf.IResolvable; 
  public get disableConnectionDrainOnFailover() {
    return this.getBooleanAttribute('disable_connection_drain_on_failover');
  }
  public set disableConnectionDrainOnFailover(value: boolean | cdktf.IResolvable) {
    this._disableConnectionDrainOnFailover = value;
  }
  public resetDisableConnectionDrainOnFailover() {
    this._disableConnectionDrainOnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnectionDrainOnFailoverInput() {
    return this._disableConnectionDrainOnFailover;
  }

  // drop_traffic_if_unhealthy - computed: true, optional: true, required: false
  private _dropTrafficIfUnhealthy?: boolean | cdktf.IResolvable; 
  public get dropTrafficIfUnhealthy() {
    return this.getBooleanAttribute('drop_traffic_if_unhealthy');
  }
  public set dropTrafficIfUnhealthy(value: boolean | cdktf.IResolvable) {
    this._dropTrafficIfUnhealthy = value;
  }
  public resetDropTrafficIfUnhealthy() {
    this._dropTrafficIfUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTrafficIfUnhealthyInput() {
    return this._dropTrafficIfUnhealthy;
  }

  // failover_ratio - computed: false, optional: true, required: false
  private _failoverRatio?: number; 
  public get failoverRatio() {
    return this.getNumberAttribute('failover_ratio');
  }
  public set failoverRatio(value: number) {
    this._failoverRatio = value;
  }
  public resetFailoverRatio() {
    this._failoverRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRatioInput() {
    return this._failoverRatio;
  }
}
export interface GoogleComputeRegionBackendServiceIap {
  /**
  * Whether the serving infrastructure will authenticate and authorize all incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enabled GoogleComputeRegionBackendService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * OAuth2 Client ID for IAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#oauth2_client_id GoogleComputeRegionBackendService#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * OAuth2 Client Secret for IAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#oauth2_client_secret GoogleComputeRegionBackendService#oauth2_client_secret}
  */
  readonly oauth2ClientSecret?: string;
}

export function googleComputeRegionBackendServiceIapToTerraform(struct?: GoogleComputeRegionBackendServiceIapOutputReference | GoogleComputeRegionBackendServiceIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}


export function googleComputeRegionBackendServiceIapToHclTerraform(struct?: GoogleComputeRegionBackendServiceIapOutputReference | GoogleComputeRegionBackendServiceIap): any {
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
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2ClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientSecret = this._oauth2ClientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2ClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2ClientSecret = value.oauth2ClientSecret;
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

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: true, required: false
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
  }
  public resetOauth2ClientSecret() {
    this._oauth2ClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientSecretInput() {
    return this._oauth2ClientSecret;
  }

  // oauth2_client_secret_sha256 - computed: true, optional: false, required: false
  public get oauth2ClientSecretSha256() {
    return this.getStringAttribute('oauth2_client_secret_sha256');
  }
}
export interface GoogleComputeRegionBackendServiceLogConfig {
  /**
  * Whether to enable logging for the load balancer traffic served by this backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enable GoogleComputeRegionBackendService#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Specifies the fields to include in logging. This field can only be specified if logging is enabled for this backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#optional_fields GoogleComputeRegionBackendService#optional_fields}
  */
  readonly optionalFields?: string[];
  /**
  * Specifies the optional logging mode for the load balancer traffic.
  * Supported values: INCLUDE_ALL_OPTIONAL, EXCLUDE_ALL_OPTIONAL, CUSTOM. Possible values: ["INCLUDE_ALL_OPTIONAL", "EXCLUDE_ALL_OPTIONAL", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#optional_mode GoogleComputeRegionBackendService#optional_mode}
  */
  readonly optionalMode?: string;
  /**
  * This field can only be specified if logging is enabled for this backend service. The value of
  * the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
  * where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
  * The default value is 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#sample_rate GoogleComputeRegionBackendService#sample_rate}
  */
  readonly sampleRate?: number;
}

export function googleComputeRegionBackendServiceLogConfigToTerraform(struct?: GoogleComputeRegionBackendServiceLogConfigOutputReference | GoogleComputeRegionBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    optional_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionalFields),
    optional_mode: cdktf.stringToTerraform(struct!.optionalMode),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function googleComputeRegionBackendServiceLogConfigToHclTerraform(struct?: GoogleComputeRegionBackendServiceLogConfigOutputReference | GoogleComputeRegionBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optional_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionalFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    optional_mode: {
      value: cdktf.stringToHclTerraform(struct!.optionalMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._optionalFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalFields = this._optionalFields;
    }
    if (this._optionalMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalMode = this._optionalMode;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._optionalFields = undefined;
      this._optionalMode = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._optionalFields = value.optionalFields;
      this._optionalMode = value.optionalMode;
      this._sampleRate = value.sampleRate;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // optional_fields - computed: true, optional: true, required: false
  private _optionalFields?: string[]; 
  public get optionalFields() {
    return this.getListAttribute('optional_fields');
  }
  public set optionalFields(value: string[]) {
    this._optionalFields = value;
  }
  public resetOptionalFields() {
    this._optionalFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalFieldsInput() {
    return this._optionalFields;
  }

  // optional_mode - computed: true, optional: true, required: false
  private _optionalMode?: string; 
  public get optionalMode() {
    return this.getStringAttribute('optional_mode');
  }
  public set optionalMode(value: string) {
    this._optionalMode = value;
  }
  public resetOptionalMode() {
    this._optionalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalModeInput() {
    return this._optionalMode;
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeToHclTerraform(struct?: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
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

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionBackendServiceOutlierDetectionInterval {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
  * less than one second are represented with a 0 'seconds' field and a positive
  * 'nanos' field. Must be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
  * inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeRegionBackendServiceOutlierDetectionIntervalToTerraform(struct?: GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference | GoogleComputeRegionBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionBackendServiceOutlierDetectionIntervalToHclTerraform(struct?: GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference | GoogleComputeRegionBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceOutlierDetectionInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeRegionBackendServiceOutlierDetectionInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
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

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionBackendServiceOutlierDetection {
  /**
  * Number of errors before a host is ejected from the connection pool. When the
  * backend host is accessed over HTTP, a 5xx return code qualifies as an error.
  * Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#consecutive_errors GoogleComputeRegionBackendService#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * The number of consecutive gateway failures (502, 503, 504 status or connection
  * errors that are mapped to one of those status codes) before a consecutive
  * gateway failure ejection occurs. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#consecutive_gateway_failure GoogleComputeRegionBackendService#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
  * status is detected through consecutive 5xx. This setting can be used to disable
  * ejection or to ramp it up slowly. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_errors GoogleComputeRegionBackendService#enforcing_consecutive_errors}
  */
  readonly enforcingConsecutiveErrors?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
  * status is detected through consecutive gateway failures. This setting can be
  * used to disable ejection or to ramp it up slowly. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enforcing_consecutive_gateway_failure GoogleComputeRegionBackendService#enforcing_consecutive_gateway_failure}
  */
  readonly enforcingConsecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
  * status is detected through success rate statistics. This setting can be used to
  * disable ejection or to ramp it up slowly. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#enforcing_success_rate GoogleComputeRegionBackendService#enforcing_success_rate}
  */
  readonly enforcingSuccessRate?: number;
  /**
  * Maximum percentage of hosts in the load balancing pool for the backend service
  * that can be ejected. Defaults to 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#max_ejection_percent GoogleComputeRegionBackendService#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * The number of hosts in a cluster that must have enough request volume to detect
  * success rate outliers. If the number of hosts is less than this setting, outlier
  * detection via success rate statistics is not performed for any host in the
  * cluster. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#success_rate_minimum_hosts GoogleComputeRegionBackendService#success_rate_minimum_hosts}
  */
  readonly successRateMinimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as
  * defined by the interval duration above) to include this host in success rate
  * based outlier detection. If the volume is lower than this setting, outlier
  * detection via success rate statistics is not performed for that host. Defaults
  * to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#success_rate_request_volume GoogleComputeRegionBackendService#success_rate_request_volume}
  */
  readonly successRateRequestVolume?: number;
  /**
  * This factor is used to determine the ejection threshold for success rate outlier
  * ejection. The ejection threshold is the difference between the mean success
  * rate, and the product of this factor and the standard deviation of the mean
  * success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
  * by a thousand to get a double. That is, if the desired factor is 1.9, the
  * runtime value should be 1900. Defaults to 1900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#success_rate_stdev_factor GoogleComputeRegionBackendService#success_rate_stdev_factor}
  */
  readonly successRateStdevFactor?: number;
  /**
  * base_ejection_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#base_ejection_time GoogleComputeRegionBackendService#base_ejection_time}
  */
  readonly baseEjectionTime?: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;
  /**
  * interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#interval GoogleComputeRegionBackendService#interval}
  */
  readonly interval?: GoogleComputeRegionBackendServiceOutlierDetectionInterval;
}

export function googleComputeRegionBackendServiceOutlierDetectionToTerraform(struct?: GoogleComputeRegionBackendServiceOutlierDetectionOutputReference | GoogleComputeRegionBackendServiceOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_errors: cdktf.numberToTerraform(struct!.consecutiveErrors),
    consecutive_gateway_failure: cdktf.numberToTerraform(struct!.consecutiveGatewayFailure),
    enforcing_consecutive_errors: cdktf.numberToTerraform(struct!.enforcingConsecutiveErrors),
    enforcing_consecutive_gateway_failure: cdktf.numberToTerraform(struct!.enforcingConsecutiveGatewayFailure),
    enforcing_success_rate: cdktf.numberToTerraform(struct!.enforcingSuccessRate),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    success_rate_minimum_hosts: cdktf.numberToTerraform(struct!.successRateMinimumHosts),
    success_rate_request_volume: cdktf.numberToTerraform(struct!.successRateRequestVolume),
    success_rate_stdev_factor: cdktf.numberToTerraform(struct!.successRateStdevFactor),
    base_ejection_time: googleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct!.baseEjectionTime),
    interval: googleComputeRegionBackendServiceOutlierDetectionIntervalToTerraform(struct!.interval),
  }
}


export function googleComputeRegionBackendServiceOutlierDetectionToHclTerraform(struct?: GoogleComputeRegionBackendServiceOutlierDetectionOutputReference | GoogleComputeRegionBackendServiceOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_failure: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforcing_consecutive_errors: {
      value: cdktf.numberToHclTerraform(struct!.enforcingConsecutiveErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforcing_consecutive_gateway_failure: {
      value: cdktf.numberToHclTerraform(struct!.enforcingConsecutiveGatewayFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforcing_success_rate: {
      value: cdktf.numberToHclTerraform(struct!.enforcingSuccessRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_rate_minimum_hosts: {
      value: cdktf.numberToHclTerraform(struct!.successRateMinimumHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_rate_request_volume: {
      value: cdktf.numberToHclTerraform(struct!.successRateRequestVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_rate_stdev_factor: {
      value: cdktf.numberToHclTerraform(struct!.successRateStdevFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    base_ejection_time: {
      value: googleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeToHclTerraform(struct!.baseEjectionTime),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList",
    },
    interval: {
      value: googleComputeRegionBackendServiceOutlierDetectionIntervalToHclTerraform(struct!.interval),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceOutlierDetectionIntervalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceOutlierDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveErrors = this._consecutiveErrors;
    }
    if (this._consecutiveGatewayFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayFailure = this._consecutiveGatewayFailure;
    }
    if (this._enforcingConsecutiveErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingConsecutiveErrors = this._enforcingConsecutiveErrors;
    }
    if (this._enforcingConsecutiveGatewayFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingConsecutiveGatewayFailure = this._enforcingConsecutiveGatewayFailure;
    }
    if (this._enforcingSuccessRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcingSuccessRate = this._enforcingSuccessRate;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    if (this._successRateMinimumHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRateMinimumHosts = this._successRateMinimumHosts;
    }
    if (this._successRateRequestVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRateRequestVolume = this._successRateRequestVolume;
    }
    if (this._successRateStdevFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.successRateStdevFactor = this._successRateStdevFactor;
    }
    if (this._baseEjectionTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime?.internalValue;
    }
    if (this._interval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceOutlierDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consecutiveErrors = undefined;
      this._consecutiveGatewayFailure = undefined;
      this._enforcingConsecutiveErrors = undefined;
      this._enforcingConsecutiveGatewayFailure = undefined;
      this._enforcingSuccessRate = undefined;
      this._maxEjectionPercent = undefined;
      this._successRateMinimumHosts = undefined;
      this._successRateRequestVolume = undefined;
      this._successRateStdevFactor = undefined;
      this._baseEjectionTime.internalValue = undefined;
      this._interval.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consecutiveErrors = value.consecutiveErrors;
      this._consecutiveGatewayFailure = value.consecutiveGatewayFailure;
      this._enforcingConsecutiveErrors = value.enforcingConsecutiveErrors;
      this._enforcingConsecutiveGatewayFailure = value.enforcingConsecutiveGatewayFailure;
      this._enforcingSuccessRate = value.enforcingSuccessRate;
      this._maxEjectionPercent = value.maxEjectionPercent;
      this._successRateMinimumHosts = value.successRateMinimumHosts;
      this._successRateRequestVolume = value.successRateRequestVolume;
      this._successRateStdevFactor = value.successRateStdevFactor;
      this._baseEjectionTime.internalValue = value.baseEjectionTime;
      this._interval.internalValue = value.interval;
    }
  }

  // consecutive_errors - computed: false, optional: true, required: false
  private _consecutiveErrors?: number; 
  public get consecutiveErrors() {
    return this.getNumberAttribute('consecutive_errors');
  }
  public set consecutiveErrors(value: number) {
    this._consecutiveErrors = value;
  }
  public resetConsecutiveErrors() {
    this._consecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveErrorsInput() {
    return this._consecutiveErrors;
  }

  // consecutive_gateway_failure - computed: false, optional: true, required: false
  private _consecutiveGatewayFailure?: number; 
  public get consecutiveGatewayFailure() {
    return this.getNumberAttribute('consecutive_gateway_failure');
  }
  public set consecutiveGatewayFailure(value: number) {
    this._consecutiveGatewayFailure = value;
  }
  public resetConsecutiveGatewayFailure() {
    this._consecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayFailureInput() {
    return this._consecutiveGatewayFailure;
  }

  // enforcing_consecutive_errors - computed: false, optional: true, required: false
  private _enforcingConsecutiveErrors?: number; 
  public get enforcingConsecutiveErrors() {
    return this.getNumberAttribute('enforcing_consecutive_errors');
  }
  public set enforcingConsecutiveErrors(value: number) {
    this._enforcingConsecutiveErrors = value;
  }
  public resetEnforcingConsecutiveErrors() {
    this._enforcingConsecutiveErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutiveErrorsInput() {
    return this._enforcingConsecutiveErrors;
  }

  // enforcing_consecutive_gateway_failure - computed: false, optional: true, required: false
  private _enforcingConsecutiveGatewayFailure?: number; 
  public get enforcingConsecutiveGatewayFailure() {
    return this.getNumberAttribute('enforcing_consecutive_gateway_failure');
  }
  public set enforcingConsecutiveGatewayFailure(value: number) {
    this._enforcingConsecutiveGatewayFailure = value;
  }
  public resetEnforcingConsecutiveGatewayFailure() {
    this._enforcingConsecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingConsecutiveGatewayFailureInput() {
    return this._enforcingConsecutiveGatewayFailure;
  }

  // enforcing_success_rate - computed: false, optional: true, required: false
  private _enforcingSuccessRate?: number; 
  public get enforcingSuccessRate() {
    return this.getNumberAttribute('enforcing_success_rate');
  }
  public set enforcingSuccessRate(value: number) {
    this._enforcingSuccessRate = value;
  }
  public resetEnforcingSuccessRate() {
    this._enforcingSuccessRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcingSuccessRateInput() {
    return this._enforcingSuccessRate;
  }

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }

  // success_rate_minimum_hosts - computed: false, optional: true, required: false
  private _successRateMinimumHosts?: number; 
  public get successRateMinimumHosts() {
    return this.getNumberAttribute('success_rate_minimum_hosts');
  }
  public set successRateMinimumHosts(value: number) {
    this._successRateMinimumHosts = value;
  }
  public resetSuccessRateMinimumHosts() {
    this._successRateMinimumHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateMinimumHostsInput() {
    return this._successRateMinimumHosts;
  }

  // success_rate_request_volume - computed: false, optional: true, required: false
  private _successRateRequestVolume?: number; 
  public get successRateRequestVolume() {
    return this.getNumberAttribute('success_rate_request_volume');
  }
  public set successRateRequestVolume(value: number) {
    this._successRateRequestVolume = value;
  }
  public resetSuccessRateRequestVolume() {
    this._successRateRequestVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateRequestVolumeInput() {
    return this._successRateRequestVolume;
  }

  // success_rate_stdev_factor - computed: false, optional: true, required: false
  private _successRateStdevFactor?: number; 
  public get successRateStdevFactor() {
    return this.getNumberAttribute('success_rate_stdev_factor');
  }
  public set successRateStdevFactor(value: number) {
    this._successRateStdevFactor = value;
  }
  public resetSuccessRateStdevFactor() {
    this._successRateStdevFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRateStdevFactorInput() {
    return this._successRateStdevFactor;
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime = new GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(this, "base_ejection_time");
  public get baseEjectionTime() {
    return this._baseEjectionTime;
  }
  public putBaseEjectionTime(value: GoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime) {
    this._baseEjectionTime.internalValue = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime.internalValue;
  }

  // interval - computed: false, optional: true, required: false
  private _interval = new GoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: GoogleComputeRegionBackendServiceOutlierDetectionInterval) {
    this._interval.internalValue = value;
  }
  public resetInterval() {
    this._interval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }
}
export interface GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond
  * resolution. Durations less than one second are represented
  * with a 0 seconds field and a positive nanos field. Must
  * be from 0 to 999,999,999 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#nanos GoogleComputeRegionBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
  * Must be from 0 to 315,576,000,000 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#seconds GoogleComputeRegionBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeRegionBackendServiceStrongSessionAffinityCookieTtlToTerraform(struct?: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference | GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleComputeRegionBackendServiceStrongSessionAffinityCookieTtlToHclTerraform(struct?: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference | GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
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

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleComputeRegionBackendServiceStrongSessionAffinityCookie {
  /**
  * Name of the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#name GoogleComputeRegionBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#path GoogleComputeRegionBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#ttl GoogleComputeRegionBackendService#ttl}
  */
  readonly ttl?: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl;
}

export function googleComputeRegionBackendServiceStrongSessionAffinityCookieToTerraform(struct?: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference | GoogleComputeRegionBackendServiceStrongSessionAffinityCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: googleComputeRegionBackendServiceStrongSessionAffinityCookieTtlToTerraform(struct!.ttl),
  }
}


export function googleComputeRegionBackendServiceStrongSessionAffinityCookieToHclTerraform(struct?: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference | GoogleComputeRegionBackendServiceStrongSessionAffinityCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: googleComputeRegionBackendServiceStrongSessionAffinityCookieTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceStrongSessionAffinityCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceStrongSessionAffinityCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._path = undefined;
      this._ttl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._path = value.path;
      this._ttl.internalValue = value.ttl;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: GoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}
export interface GoogleComputeRegionBackendServiceSubsetting {
  /**
  * The algorithm used for subsetting. Possible values: ["CONSISTENT_HASH_SUBSETTING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#policy GoogleComputeRegionBackendService#policy}
  */
  readonly policy: string;
  /**
  * The number of backends per backend group assigned to each proxy instance or each service mesh client.
  * An input parameter to the CONSISTENT_HASH_SUBSETTING algorithm. Can only be set if policy is set to
  * CONSISTENT_HASH_SUBSETTING. Can only be set if load balancing scheme is INTERNAL_MANAGED or INTERNAL_SELF_MANAGED.
  * subsetSize is optional for Internal HTTP(S) load balancing and required for Traffic Director.
  * If you do not provide this value, Cloud Load Balancing will calculate it dynamically to optimize the number
  * of proxies/clients visible to each backend and vice versa.
  * Must be greater than 0. If subsetSize is larger than the number of backends/endpoints, then subsetting is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#subset_size GoogleComputeRegionBackendService#subset_size}
  */
  readonly subsetSize?: number;
}

export function googleComputeRegionBackendServiceSubsettingToTerraform(struct?: GoogleComputeRegionBackendServiceSubsettingOutputReference | GoogleComputeRegionBackendServiceSubsetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    subset_size: cdktf.numberToTerraform(struct!.subsetSize),
  }
}


export function googleComputeRegionBackendServiceSubsettingToHclTerraform(struct?: GoogleComputeRegionBackendServiceSubsettingOutputReference | GoogleComputeRegionBackendServiceSubsetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subset_size: {
      value: cdktf.numberToHclTerraform(struct!.subsetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionBackendServiceSubsettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceSubsetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._subsetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsetSize = this._subsetSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionBackendServiceSubsetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._subsetSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._subsetSize = value.subsetSize;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // subset_size - computed: false, optional: true, required: false
  private _subsetSize?: number; 
  public get subsetSize() {
    return this.getNumberAttribute('subset_size');
  }
  public set subsetSize(value: number) {
    this._subsetSize = value;
  }
  public resetSubsetSize() {
    this._subsetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetSizeInput() {
    return this._subsetSize;
  }
}
export interface GoogleComputeRegionBackendServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#create GoogleComputeRegionBackendService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#delete GoogleComputeRegionBackendService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#update GoogleComputeRegionBackendService#update}
  */
  readonly update?: string;
}

export function googleComputeRegionBackendServiceTimeoutsToTerraform(struct?: GoogleComputeRegionBackendServiceTimeouts | cdktf.IResolvable): any {
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


export function googleComputeRegionBackendServiceTimeoutsToHclTerraform(struct?: GoogleComputeRegionBackendServiceTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionBackendServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeRegionBackendServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionBackendServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service google_compute_region_backend_service}
*/
export class GoogleComputeRegionBackendService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_backend_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeRegionBackendService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeRegionBackendService to import
  * @param importFromId The id of the existing GoogleComputeRegionBackendService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeRegionBackendService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_backend_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/resources/google_compute_region_backend_service google_compute_region_backend_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionBackendServiceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionBackendServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_backend_service',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.39.0',
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
    this._affinityCookieTtlSec = config.affinityCookieTtlSec;
    this._connectionDrainingTimeoutSec = config.connectionDrainingTimeoutSec;
    this._description = config.description;
    this._enableCdn = config.enableCdn;
    this._healthChecks = config.healthChecks;
    this._id = config.id;
    this._ipAddressSelectionPolicy = config.ipAddressSelectionPolicy;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._localityLbPolicy = config.localityLbPolicy;
    this._name = config.name;
    this._network = config.network;
    this._portName = config.portName;
    this._project = config.project;
    this._protocol = config.protocol;
    this._region = config.region;
    this._securityPolicy = config.securityPolicy;
    this._sessionAffinity = config.sessionAffinity;
    this._timeoutSec = config.timeoutSec;
    this._backend.internalValue = config.backend;
    this._cdnPolicy.internalValue = config.cdnPolicy;
    this._circuitBreakers.internalValue = config.circuitBreakers;
    this._connectionTrackingPolicy.internalValue = config.connectionTrackingPolicy;
    this._consistentHash.internalValue = config.consistentHash;
    this._customMetrics.internalValue = config.customMetrics;
    this._dynamicForwarding.internalValue = config.dynamicForwarding;
    this._failoverPolicy.internalValue = config.failoverPolicy;
    this._iap.internalValue = config.iap;
    this._logConfig.internalValue = config.logConfig;
    this._outlierDetection.internalValue = config.outlierDetection;
    this._strongSessionAffinityCookie.internalValue = config.strongSessionAffinityCookie;
    this._subsetting.internalValue = config.subsetting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_cookie_ttl_sec - computed: false, optional: true, required: false
  private _affinityCookieTtlSec?: number; 
  public get affinityCookieTtlSec() {
    return this.getNumberAttribute('affinity_cookie_ttl_sec');
  }
  public set affinityCookieTtlSec(value: number) {
    this._affinityCookieTtlSec = value;
  }
  public resetAffinityCookieTtlSec() {
    this._affinityCookieTtlSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityCookieTtlSecInput() {
    return this._affinityCookieTtlSec;
  }

  // connection_draining_timeout_sec - computed: false, optional: true, required: false
  private _connectionDrainingTimeoutSec?: number; 
  public get connectionDrainingTimeoutSec() {
    return this.getNumberAttribute('connection_draining_timeout_sec');
  }
  public set connectionDrainingTimeoutSec(value: number) {
    this._connectionDrainingTimeoutSec = value;
  }
  public resetConnectionDrainingTimeoutSec() {
    this._connectionDrainingTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingTimeoutSecInput() {
    return this._connectionDrainingTimeoutSec;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // enable_cdn - computed: false, optional: true, required: false
  private _enableCdn?: boolean | cdktf.IResolvable; 
  public get enableCdn() {
    return this.getBooleanAttribute('enable_cdn');
  }
  public set enableCdn(value: boolean | cdktf.IResolvable) {
    this._enableCdn = value;
  }
  public resetEnableCdn() {
    this._enableCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCdnInput() {
    return this._enableCdn;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // generated_id - computed: true, optional: false, required: false
  public get generatedId() {
    return this.getNumberAttribute('generated_id');
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string[]; 
  public get healthChecks() {
    return cdktf.Fn.tolist(this.getListAttribute('health_checks'));
  }
  public set healthChecks(value: string[]) {
    this._healthChecks = value;
  }
  public resetHealthChecks() {
    this._healthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks;
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

  // ip_address_selection_policy - computed: false, optional: true, required: false
  private _ipAddressSelectionPolicy?: string; 
  public get ipAddressSelectionPolicy() {
    return this.getStringAttribute('ip_address_selection_policy');
  }
  public set ipAddressSelectionPolicy(value: string) {
    this._ipAddressSelectionPolicy = value;
  }
  public resetIpAddressSelectionPolicy() {
    this._ipAddressSelectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressSelectionPolicyInput() {
    return this._ipAddressSelectionPolicy;
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
  }

  // locality_lb_policy - computed: false, optional: true, required: false
  private _localityLbPolicy?: string; 
  public get localityLbPolicy() {
    return this.getStringAttribute('locality_lb_policy');
  }
  public set localityLbPolicy(value: string) {
    this._localityLbPolicy = value;
  }
  public resetLocalityLbPolicy() {
    this._localityLbPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityLbPolicyInput() {
    return this._localityLbPolicy;
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

  // port_name - computed: true, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
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

  // protocol - computed: true, optional: true, required: false
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

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // session_affinity - computed: true, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // timeout_sec - computed: true, optional: true, required: false
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

  // backend - computed: false, optional: true, required: false
  private _backend = new GoogleComputeRegionBackendServiceBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: GoogleComputeRegionBackendServiceBackend[] | cdktf.IResolvable) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // cdn_policy - computed: false, optional: true, required: false
  private _cdnPolicy = new GoogleComputeRegionBackendServiceCdnPolicyOutputReference(this, "cdn_policy");
  public get cdnPolicy() {
    return this._cdnPolicy;
  }
  public putCdnPolicy(value: GoogleComputeRegionBackendServiceCdnPolicy) {
    this._cdnPolicy.internalValue = value;
  }
  public resetCdnPolicy() {
    this._cdnPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnPolicyInput() {
    return this._cdnPolicy.internalValue;
  }

  // circuit_breakers - computed: false, optional: true, required: false
  private _circuitBreakers = new GoogleComputeRegionBackendServiceCircuitBreakersOutputReference(this, "circuit_breakers");
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: GoogleComputeRegionBackendServiceCircuitBreakers) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // connection_tracking_policy - computed: false, optional: true, required: false
  private _connectionTrackingPolicy = new GoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference(this, "connection_tracking_policy");
  public get connectionTrackingPolicy() {
    return this._connectionTrackingPolicy;
  }
  public putConnectionTrackingPolicy(value: GoogleComputeRegionBackendServiceConnectionTrackingPolicy) {
    this._connectionTrackingPolicy.internalValue = value;
  }
  public resetConnectionTrackingPolicy() {
    this._connectionTrackingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTrackingPolicyInput() {
    return this._connectionTrackingPolicy.internalValue;
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new GoogleComputeRegionBackendServiceConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: GoogleComputeRegionBackendServiceConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // custom_metrics - computed: false, optional: true, required: false
  private _customMetrics = new GoogleComputeRegionBackendServiceCustomMetricsList(this, "custom_metrics", false);
  public get customMetrics() {
    return this._customMetrics;
  }
  public putCustomMetrics(value: GoogleComputeRegionBackendServiceCustomMetrics[] | cdktf.IResolvable) {
    this._customMetrics.internalValue = value;
  }
  public resetCustomMetrics() {
    this._customMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetricsInput() {
    return this._customMetrics.internalValue;
  }

  // dynamic_forwarding - computed: false, optional: true, required: false
  private _dynamicForwarding = new GoogleComputeRegionBackendServiceDynamicForwardingOutputReference(this, "dynamic_forwarding");
  public get dynamicForwarding() {
    return this._dynamicForwarding;
  }
  public putDynamicForwarding(value: GoogleComputeRegionBackendServiceDynamicForwarding) {
    this._dynamicForwarding.internalValue = value;
  }
  public resetDynamicForwarding() {
    this._dynamicForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicForwardingInput() {
    return this._dynamicForwarding.internalValue;
  }

  // failover_policy - computed: false, optional: true, required: false
  private _failoverPolicy = new GoogleComputeRegionBackendServiceFailoverPolicyOutputReference(this, "failover_policy");
  public get failoverPolicy() {
    return this._failoverPolicy;
  }
  public putFailoverPolicy(value: GoogleComputeRegionBackendServiceFailoverPolicy) {
    this._failoverPolicy.internalValue = value;
  }
  public resetFailoverPolicy() {
    this._failoverPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPolicyInput() {
    return this._failoverPolicy.internalValue;
  }

  // iap - computed: false, optional: true, required: false
  private _iap = new GoogleComputeRegionBackendServiceIapOutputReference(this, "iap");
  public get iap() {
    return this._iap;
  }
  public putIap(value: GoogleComputeRegionBackendServiceIap) {
    this._iap.internalValue = value;
  }
  public resetIap() {
    this._iap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapInput() {
    return this._iap.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new GoogleComputeRegionBackendServiceLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: GoogleComputeRegionBackendServiceLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new GoogleComputeRegionBackendServiceOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: GoogleComputeRegionBackendServiceOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // strong_session_affinity_cookie - computed: false, optional: true, required: false
  private _strongSessionAffinityCookie = new GoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference(this, "strong_session_affinity_cookie");
  public get strongSessionAffinityCookie() {
    return this._strongSessionAffinityCookie;
  }
  public putStrongSessionAffinityCookie(value: GoogleComputeRegionBackendServiceStrongSessionAffinityCookie) {
    this._strongSessionAffinityCookie.internalValue = value;
  }
  public resetStrongSessionAffinityCookie() {
    this._strongSessionAffinityCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongSessionAffinityCookieInput() {
    return this._strongSessionAffinityCookie.internalValue;
  }

  // subsetting - computed: false, optional: true, required: false
  private _subsetting = new GoogleComputeRegionBackendServiceSubsettingOutputReference(this, "subsetting");
  public get subsetting() {
    return this._subsetting;
  }
  public putSubsetting(value: GoogleComputeRegionBackendServiceSubsetting) {
    this._subsetting.internalValue = value;
  }
  public resetSubsetting() {
    this._subsetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsettingInput() {
    return this._subsetting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionBackendServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionBackendServiceTimeouts) {
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
      affinity_cookie_ttl_sec: cdktf.numberToTerraform(this._affinityCookieTtlSec),
      connection_draining_timeout_sec: cdktf.numberToTerraform(this._connectionDrainingTimeoutSec),
      description: cdktf.stringToTerraform(this._description),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthChecks),
      id: cdktf.stringToTerraform(this._id),
      ip_address_selection_policy: cdktf.stringToTerraform(this._ipAddressSelectionPolicy),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      locality_lb_policy: cdktf.stringToTerraform(this._localityLbPolicy),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      port_name: cdktf.stringToTerraform(this._portName),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      backend: cdktf.listMapper(googleComputeRegionBackendServiceBackendToTerraform, true)(this._backend.internalValue),
      cdn_policy: googleComputeRegionBackendServiceCdnPolicyToTerraform(this._cdnPolicy.internalValue),
      circuit_breakers: googleComputeRegionBackendServiceCircuitBreakersToTerraform(this._circuitBreakers.internalValue),
      connection_tracking_policy: googleComputeRegionBackendServiceConnectionTrackingPolicyToTerraform(this._connectionTrackingPolicy.internalValue),
      consistent_hash: googleComputeRegionBackendServiceConsistentHashToTerraform(this._consistentHash.internalValue),
      custom_metrics: cdktf.listMapper(googleComputeRegionBackendServiceCustomMetricsToTerraform, true)(this._customMetrics.internalValue),
      dynamic_forwarding: googleComputeRegionBackendServiceDynamicForwardingToTerraform(this._dynamicForwarding.internalValue),
      failover_policy: googleComputeRegionBackendServiceFailoverPolicyToTerraform(this._failoverPolicy.internalValue),
      iap: googleComputeRegionBackendServiceIapToTerraform(this._iap.internalValue),
      log_config: googleComputeRegionBackendServiceLogConfigToTerraform(this._logConfig.internalValue),
      outlier_detection: googleComputeRegionBackendServiceOutlierDetectionToTerraform(this._outlierDetection.internalValue),
      strong_session_affinity_cookie: googleComputeRegionBackendServiceStrongSessionAffinityCookieToTerraform(this._strongSessionAffinityCookie.internalValue),
      subsetting: googleComputeRegionBackendServiceSubsettingToTerraform(this._subsetting.internalValue),
      timeouts: googleComputeRegionBackendServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_cookie_ttl_sec: {
        value: cdktf.numberToHclTerraform(this._affinityCookieTtlSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_draining_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._connectionDrainingTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cdn: {
        value: cdktf.booleanToHclTerraform(this._enableCdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_checks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthChecks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_selection_policy: {
        value: cdktf.stringToHclTerraform(this._ipAddressSelectionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancing_scheme: {
        value: cdktf.stringToHclTerraform(this._loadBalancingScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locality_lb_policy: {
        value: cdktf.stringToHclTerraform(this._localityLbPolicy),
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
      port_name: {
        value: cdktf.stringToHclTerraform(this._portName),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_affinity: {
        value: cdktf.stringToHclTerraform(this._sessionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_sec: {
        value: cdktf.numberToHclTerraform(this._timeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backend: {
        value: cdktf.listMapperHcl(googleComputeRegionBackendServiceBackendToHclTerraform, true)(this._backend.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleComputeRegionBackendServiceBackendList",
      },
      cdn_policy: {
        value: googleComputeRegionBackendServiceCdnPolicyToHclTerraform(this._cdnPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceCdnPolicyList",
      },
      circuit_breakers: {
        value: googleComputeRegionBackendServiceCircuitBreakersToHclTerraform(this._circuitBreakers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceCircuitBreakersList",
      },
      connection_tracking_policy: {
        value: googleComputeRegionBackendServiceConnectionTrackingPolicyToHclTerraform(this._connectionTrackingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceConnectionTrackingPolicyList",
      },
      consistent_hash: {
        value: googleComputeRegionBackendServiceConsistentHashToHclTerraform(this._consistentHash.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceConsistentHashList",
      },
      custom_metrics: {
        value: cdktf.listMapperHcl(googleComputeRegionBackendServiceCustomMetricsToHclTerraform, true)(this._customMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceCustomMetricsList",
      },
      dynamic_forwarding: {
        value: googleComputeRegionBackendServiceDynamicForwardingToHclTerraform(this._dynamicForwarding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceDynamicForwardingList",
      },
      failover_policy: {
        value: googleComputeRegionBackendServiceFailoverPolicyToHclTerraform(this._failoverPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceFailoverPolicyList",
      },
      iap: {
        value: googleComputeRegionBackendServiceIapToHclTerraform(this._iap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceIapList",
      },
      log_config: {
        value: googleComputeRegionBackendServiceLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceLogConfigList",
      },
      outlier_detection: {
        value: googleComputeRegionBackendServiceOutlierDetectionToHclTerraform(this._outlierDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceOutlierDetectionList",
      },
      strong_session_affinity_cookie: {
        value: googleComputeRegionBackendServiceStrongSessionAffinityCookieToHclTerraform(this._strongSessionAffinityCookie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceStrongSessionAffinityCookieList",
      },
      subsetting: {
        value: googleComputeRegionBackendServiceSubsettingToHclTerraform(this._subsetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionBackendServiceSubsettingList",
      },
      timeouts: {
        value: googleComputeRegionBackendServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeRegionBackendServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
