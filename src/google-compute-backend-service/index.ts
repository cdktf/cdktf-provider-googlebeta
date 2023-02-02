// https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeBackendServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lifetime of cookies in seconds if session_affinity is
GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#affinity_cookie_ttl_sec GoogleComputeBackendService#affinity_cookie_ttl_sec}
  */
  readonly affinityCookieTtlSec?: number;
  /**
  * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#compression_mode GoogleComputeBackendService#compression_mode}
  */
  readonly compressionMode?: string;
  /**
  * Time for which instance will be drained (not accept new
connections, but still work to finish started).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#connection_draining_timeout_sec GoogleComputeBackendService#connection_draining_timeout_sec}
  */
  readonly connectionDrainingTimeoutSec?: number;
  /**
  * Headers that the HTTP/S load balancer should add to proxied
requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#custom_request_headers GoogleComputeBackendService#custom_request_headers}
  */
  readonly customRequestHeaders?: string[];
  /**
  * Headers that the HTTP/S load balancer should add to proxied
responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#custom_response_headers GoogleComputeBackendService#custom_response_headers}
  */
  readonly customResponseHeaders?: string[];
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#description GoogleComputeBackendService#description}
  */
  readonly description?: string;
  /**
  * The resource URL for the edge security policy associated with this backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#edge_security_policy GoogleComputeBackendService#edge_security_policy}
  */
  readonly edgeSecurityPolicy?: string;
  /**
  * If true, enable Cloud CDN for this BackendService.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#enable_cdn GoogleComputeBackendService#enable_cdn}
  */
  readonly enableCdn?: boolean | cdktf.IResolvable;
  /**
  * The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource
for health checking this BackendService. Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#health_checks GoogleComputeBackendService#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#id GoogleComputeBackendService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the backend service will be used with internal or
external load balancing. A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "EXTERNAL_MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#load_balancing_scheme GoogleComputeBackendService#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * The load balancing algorithm used within the scope of the locality.
The possible values are:

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
                 is selected in round robin order.

* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
                   hosts and picks the host which has fewer active requests.

* 'RING_HASH': The ring/modulo hash load balancer implements consistent
               hashing to backends. The algorithm has the property that the
               addition/removal of a host from a set of N hosts only affects
               1/N of the requests.

* 'RANDOM': The load balancer selects a random healthy host.

* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
                          connection metadata, i.e., connections are opened
                          to the same address as the destination address of
                          the incoming connection before the connection
                          was redirected to the load balancer.

* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
            Maglev is not as stable as ring hash but has faster table lookup
            build times and host selection times. For more information about
            Maglev, refer to https://ai.google/research/pubs/pub44824


This field is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.


If session_affinity is not NONE, and this field is not set to MAGLEV or RING_HASH,
session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#locality_lb_policy GoogleComputeBackendService#locality_lb_policy}
  */
  readonly localityLbPolicy?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#name GoogleComputeBackendService#name}
  */
  readonly name: string;
  /**
  * Name of backend port. The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#port_name GoogleComputeBackendService#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#project GoogleComputeBackendService#project}
  */
  readonly project?: string;
  /**
  * The protocol this BackendService uses to communicate with backends.
The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#protocol GoogleComputeBackendService#protocol}
  */
  readonly protocol?: string;
  /**
  * The security policy associated with this backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#security_policy GoogleComputeBackendService#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Type of session affinity to use. The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#session_affinity GoogleComputeBackendService#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * How many seconds to wait for the backend before considering it a
failed request. Default is 30 seconds. Valid range is [1, 86400].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#timeout_sec GoogleComputeBackendService#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#backend GoogleComputeBackendService#backend}
  */
  readonly backend?: GoogleComputeBackendServiceBackend[] | cdktf.IResolvable;
  /**
  * cdn_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#cdn_policy GoogleComputeBackendService#cdn_policy}
  */
  readonly cdnPolicy?: GoogleComputeBackendServiceCdnPolicy;
  /**
  * circuit_breakers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#circuit_breakers GoogleComputeBackendService#circuit_breakers}
  */
  readonly circuitBreakers?: GoogleComputeBackendServiceCircuitBreakers;
  /**
  * consistent_hash block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#consistent_hash GoogleComputeBackendService#consistent_hash}
  */
  readonly consistentHash?: GoogleComputeBackendServiceConsistentHash;
  /**
  * iap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#iap GoogleComputeBackendService#iap}
  */
  readonly iap?: GoogleComputeBackendServiceIap;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#log_config GoogleComputeBackendService#log_config}
  */
  readonly logConfig?: GoogleComputeBackendServiceLogConfig;
  /**
  * outlier_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#outlier_detection GoogleComputeBackendService#outlier_detection}
  */
  readonly outlierDetection?: GoogleComputeBackendServiceOutlierDetection;
  /**
  * security_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#security_settings GoogleComputeBackendService#security_settings}
  */
  readonly securitySettings?: GoogleComputeBackendServiceSecuritySettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#timeouts GoogleComputeBackendService#timeouts}
  */
  readonly timeouts?: GoogleComputeBackendServiceTimeouts;
}
export interface GoogleComputeBackendServiceBackend {
  /**
  * Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL).

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#balancing_mode GoogleComputeBackendService#balancing_mode}
  */
  readonly balancingMode?: string;
  /**
  * A multiplier applied to the group's maximum servicing capacity
(based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#capacity_scaler GoogleComputeBackendService#capacity_scaler}
  */
  readonly capacityScaler?: number;
  /**
  * An optional description of this resource.
Provide this property when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#description GoogleComputeBackendService#description}
  */
  readonly description?: string;
  /**
  * The fully-qualified URL of an Instance Group or Network Endpoint
Group resource. In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#group GoogleComputeBackendService#group}
  */
  readonly group: string;
  /**
  * The max number of simultaneous connections for the group. Can
be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The max number of simultaneous connections that a single backend
network endpoint can handle. This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_connections_per_endpoint GoogleComputeBackendService#max_connections_per_endpoint}
  */
  readonly maxConnectionsPerEndpoint?: number;
  /**
  * The max number of simultaneous connections that a single
backend instance can handle. This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_connections_per_instance GoogleComputeBackendService#max_connections_per_instance}
  */
  readonly maxConnectionsPerInstance?: number;
  /**
  * The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_rate GoogleComputeBackendService#max_rate}
  */
  readonly maxRate?: number;
  /**
  * The max requests per second (RPS) that a single backend network
endpoint can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_rate_per_endpoint GoogleComputeBackendService#max_rate_per_endpoint}
  */
  readonly maxRatePerEndpoint?: number;
  /**
  * The max requests per second (RPS) that a single backend
instance can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_rate_per_instance GoogleComputeBackendService#max_rate_per_instance}
  */
  readonly maxRatePerInstance?: number;
  /**
  * Used when balancingMode is UTILIZATION. This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_utilization GoogleComputeBackendService#max_utilization}
  */
  readonly maxUtilization?: number;
}

export function googleComputeBackendServiceBackendToTerraform(struct?: GoogleComputeBackendServiceBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancing_mode: cdktf.stringToTerraform(struct!.balancingMode),
    capacity_scaler: cdktf.numberToTerraform(struct!.capacityScaler),
    description: cdktf.stringToTerraform(struct!.description),
    group: cdktf.stringToTerraform(struct!.group),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_connections_per_endpoint: cdktf.numberToTerraform(struct!.maxConnectionsPerEndpoint),
    max_connections_per_instance: cdktf.numberToTerraform(struct!.maxConnectionsPerInstance),
    max_rate: cdktf.numberToTerraform(struct!.maxRate),
    max_rate_per_endpoint: cdktf.numberToTerraform(struct!.maxRatePerEndpoint),
    max_rate_per_instance: cdktf.numberToTerraform(struct!.maxRatePerInstance),
    max_utilization: cdktf.numberToTerraform(struct!.maxUtilization),
  }
}

export class GoogleComputeBackendServiceBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeBackendServiceBackend | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeBackendServiceBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balancingMode = undefined;
      this._capacityScaler = undefined;
      this._description = undefined;
      this._group = undefined;
      this._maxConnections = undefined;
      this._maxConnectionsPerEndpoint = undefined;
      this._maxConnectionsPerInstance = undefined;
      this._maxRate = undefined;
      this._maxRatePerEndpoint = undefined;
      this._maxRatePerInstance = undefined;
      this._maxUtilization = undefined;
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
      this._group = value.group;
      this._maxConnections = value.maxConnections;
      this._maxConnectionsPerEndpoint = value.maxConnectionsPerEndpoint;
      this._maxConnectionsPerInstance = value.maxConnectionsPerInstance;
      this._maxRate = value.maxRate;
      this._maxRatePerEndpoint = value.maxRatePerEndpoint;
      this._maxRatePerInstance = value.maxRatePerInstance;
      this._maxUtilization = value.maxUtilization;
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

  // max_connections - computed: true, optional: true, required: false
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

  // max_connections_per_endpoint - computed: true, optional: true, required: false
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

  // max_connections_per_instance - computed: true, optional: true, required: false
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

  // max_rate - computed: true, optional: true, required: false
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

  // max_rate_per_endpoint - computed: true, optional: true, required: false
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

  // max_rate_per_instance - computed: true, optional: true, required: false
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

  // max_utilization - computed: true, optional: true, required: false
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
}

export class GoogleComputeBackendServiceBackendList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeBackendServiceBackend[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeBackendServiceBackendOutputReference {
    return new GoogleComputeBackendServiceBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy {
  /**
  * If true requests to different hosts will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#include_host GoogleComputeBackendService#include_host}
  */
  readonly includeHost?: boolean | cdktf.IResolvable;
  /**
  * Allows HTTP request headers (by name) to be used in the
cache key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#include_http_headers GoogleComputeBackendService#include_http_headers}
  */
  readonly includeHttpHeaders?: string[];
  /**
  * Names of cookies to include in cache keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#include_named_cookies GoogleComputeBackendService#include_named_cookies}
  */
  readonly includeNamedCookies?: string[];
  /**
  * If true, http and https requests will be cached separately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#include_protocol GoogleComputeBackendService#include_protocol}
  */
  readonly includeProtocol?: boolean | cdktf.IResolvable;
  /**
  * If true, include query string parameters in the cache key
according to query_string_whitelist and
query_string_blacklist. If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#include_query_string GoogleComputeBackendService#include_query_string}
  */
  readonly includeQueryString?: boolean | cdktf.IResolvable;
  /**
  * Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#query_string_blacklist GoogleComputeBackendService#query_string_blacklist}
  */
  readonly queryStringBlacklist?: string[];
  /**
  * Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#query_string_whitelist GoogleComputeBackendService#query_string_whitelist}
  */
  readonly queryStringWhitelist?: string[];
}

export function googleComputeBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct?: GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference | GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_host: cdktf.booleanToTerraform(struct!.includeHost),
    include_http_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeHttpHeaders),
    include_named_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeNamedCookies),
    include_protocol: cdktf.booleanToTerraform(struct!.includeProtocol),
    include_query_string: cdktf.booleanToTerraform(struct!.includeQueryString),
    query_string_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringBlacklist),
    query_string_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringWhitelist),
  }
}

export class GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHost = this._includeHost;
    }
    if (this._includeHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHttpHeaders = this._includeHttpHeaders;
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

  public set internalValue(value: GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeHost = undefined;
      this._includeHttpHeaders = undefined;
      this._includeNamedCookies = undefined;
      this._includeProtocol = undefined;
      this._includeQueryString = undefined;
      this._queryStringBlacklist = undefined;
      this._queryStringWhitelist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeHost = value.includeHost;
      this._includeHttpHeaders = value.includeHttpHeaders;
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

  // include_http_headers - computed: false, optional: true, required: false
  private _includeHttpHeaders?: string[]; 
  public get includeHttpHeaders() {
    return this.getListAttribute('include_http_headers');
  }
  public set includeHttpHeaders(value: string[]) {
    this._includeHttpHeaders = value;
  }
  public resetIncludeHttpHeaders() {
    this._includeHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHttpHeadersInput() {
    return this._includeHttpHeaders;
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
export interface GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy {
  /**
  * The HTTP status code to define a TTL against. Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#code GoogleComputeBackendService#code}
  */
  readonly code?: number;
  /**
  * The TTL (in seconds) for which to cache responses with the corresponding status code. The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}
  */
  readonly ttl?: number;
}

export function googleComputeBackendServiceCdnPolicyNegativeCachingPolicyToTerraform(struct?: GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy | cdktf.IResolvable | undefined) {
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

export class GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList extends cdktf.ComplexList {
  public internalValue? : GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable

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
  public get(index: number): GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference {
    return new GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleComputeBackendServiceCdnPolicy {
  /**
  * Specifies the cache setting for all responses from this backend.
The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#cache_mode GoogleComputeBackendService#cache_mode}
  */
  readonly cacheMode?: string;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#client_ttl GoogleComputeBackendService#client_ttl}
  */
  readonly clientTtl?: number;
  /**
  * Specifies the default TTL for cached content served by this origin for responses
that do not have an existing valid TTL (max-age or s-max-age).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#default_ttl GoogleComputeBackendService#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Specifies the maximum allowed TTL for cached content served by this origin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_ttl GoogleComputeBackendService#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#negative_caching GoogleComputeBackendService#negative_caching}
  */
  readonly negativeCaching?: boolean | cdktf.IResolvable;
  /**
  * Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#serve_while_stale GoogleComputeBackendService#serve_while_stale}
  */
  readonly serveWhileStale?: number;
  /**
  * Maximum number of seconds the response to a signed URL request
will be considered fresh, defaults to 1hr (3600s). After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#signed_url_cache_max_age_sec GoogleComputeBackendService#signed_url_cache_max_age_sec}
  */
  readonly signedUrlCacheMaxAgeSec?: number;
  /**
  * cache_key_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#cache_key_policy GoogleComputeBackendService#cache_key_policy}
  */
  readonly cacheKeyPolicy?: GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy;
  /**
  * negative_caching_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#negative_caching_policy GoogleComputeBackendService#negative_caching_policy}
  */
  readonly negativeCachingPolicy?: GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable;
}

export function googleComputeBackendServiceCdnPolicyToTerraform(struct?: GoogleComputeBackendServiceCdnPolicyOutputReference | GoogleComputeBackendServiceCdnPolicy): any {
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
    cache_key_policy: googleComputeBackendServiceCdnPolicyCacheKeyPolicyToTerraform(struct!.cacheKeyPolicy),
    negative_caching_policy: cdktf.listMapper(googleComputeBackendServiceCdnPolicyNegativeCachingPolicyToTerraform, true)(struct!.negativeCachingPolicy),
  }
}

export class GoogleComputeBackendServiceCdnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceCdnPolicy | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceCdnPolicy | undefined) {
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
  private _cacheKeyPolicy = new GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(this, "cache_key_policy");
  public get cacheKeyPolicy() {
    return this._cacheKeyPolicy;
  }
  public putCacheKeyPolicy(value: GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy) {
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
  private _negativeCachingPolicy = new GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList(this, "negative_caching_policy", false);
  public get negativeCachingPolicy() {
    return this._negativeCachingPolicy;
  }
  public putNegativeCachingPolicy(value: GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy[] | cdktf.IResolvable) {
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
export interface GoogleComputeBackendServiceCircuitBreakersConnectTimeout {
  /**
  * Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
Must be from 0 to 315,576,000,000 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeBackendServiceCircuitBreakersConnectTimeoutToTerraform(struct?: GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference | GoogleComputeBackendServiceCircuitBreakersConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceCircuitBreakersConnectTimeout | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceCircuitBreakersConnectTimeout | undefined) {
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
export interface GoogleComputeBackendServiceCircuitBreakers {
  /**
  * The maximum number of connections to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of pending requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_pending_requests GoogleComputeBackendService#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
  /**
  * The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_requests GoogleComputeBackendService#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_requests_per_connection GoogleComputeBackendService#max_requests_per_connection}
  */
  readonly maxRequestsPerConnection?: number;
  /**
  * The maximum number of parallel retries to the backend cluster.
Defaults to 3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_retries GoogleComputeBackendService#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * connect_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#connect_timeout GoogleComputeBackendService#connect_timeout}
  */
  readonly connectTimeout?: GoogleComputeBackendServiceCircuitBreakersConnectTimeout;
}

export function googleComputeBackendServiceCircuitBreakersToTerraform(struct?: GoogleComputeBackendServiceCircuitBreakersOutputReference | GoogleComputeBackendServiceCircuitBreakers): any {
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
    connect_timeout: googleComputeBackendServiceCircuitBreakersConnectTimeoutToTerraform(struct!.connectTimeout),
  }
}

export class GoogleComputeBackendServiceCircuitBreakersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceCircuitBreakers | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceCircuitBreakers | undefined) {
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
  private _connectTimeout = new GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference(this, "connect_timeout");
  public get connectTimeout() {
    return this._connectTimeout;
  }
  public putConnectTimeout(value: GoogleComputeBackendServiceCircuitBreakersConnectTimeout) {
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
export interface GoogleComputeBackendServiceConsistentHashHttpCookieTtl {
  /**
  * Span of time that's a fraction of a second at nanosecond
resolution. Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second.
Must be from 0 to 315,576,000,000 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeBackendServiceConsistentHashHttpCookieTtlToTerraform(struct?: GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference | GoogleComputeBackendServiceConsistentHashHttpCookieTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceConsistentHashHttpCookieTtl | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceConsistentHashHttpCookieTtl | undefined) {
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
export interface GoogleComputeBackendServiceConsistentHashHttpCookie {
  /**
  * Name of the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#name GoogleComputeBackendService#name}
  */
  readonly name?: string;
  /**
  * Path to set for the cookie.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#path GoogleComputeBackendService#path}
  */
  readonly path?: string;
  /**
  * ttl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}
  */
  readonly ttl?: GoogleComputeBackendServiceConsistentHashHttpCookieTtl;
}

export function googleComputeBackendServiceConsistentHashHttpCookieToTerraform(struct?: GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference | GoogleComputeBackendServiceConsistentHashHttpCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ttl: googleComputeBackendServiceConsistentHashHttpCookieTtlToTerraform(struct!.ttl),
  }
}

export class GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceConsistentHashHttpCookie | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceConsistentHashHttpCookie | undefined) {
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
  private _ttl = new GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: GoogleComputeBackendServiceConsistentHashHttpCookieTtl) {
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
export interface GoogleComputeBackendServiceConsistentHash {
  /**
  * The hash based on the value of the specified header field.
This field is applicable if the sessionAffinity is set to HEADER_FIELD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#http_header_name GoogleComputeBackendService#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * The minimum number of virtual nodes to use for the hash ring.
Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#minimum_ring_size GoogleComputeBackendService#minimum_ring_size}
  */
  readonly minimumRingSize?: number;
  /**
  * http_cookie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#http_cookie GoogleComputeBackendService#http_cookie}
  */
  readonly httpCookie?: GoogleComputeBackendServiceConsistentHashHttpCookie;
}

export function googleComputeBackendServiceConsistentHashToTerraform(struct?: GoogleComputeBackendServiceConsistentHashOutputReference | GoogleComputeBackendServiceConsistentHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    minimum_ring_size: cdktf.numberToTerraform(struct!.minimumRingSize),
    http_cookie: googleComputeBackendServiceConsistentHashHttpCookieToTerraform(struct!.httpCookie),
  }
}

export class GoogleComputeBackendServiceConsistentHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceConsistentHash | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceConsistentHash | undefined) {
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
  private _httpCookie = new GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference(this, "http_cookie");
  public get httpCookie() {
    return this._httpCookie;
  }
  public putHttpCookie(value: GoogleComputeBackendServiceConsistentHashHttpCookie) {
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
export interface GoogleComputeBackendServiceIap {
  /**
  * OAuth2 Client ID for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#oauth2_client_id GoogleComputeBackendService#oauth2_client_id}
  */
  readonly oauth2ClientId: string;
  /**
  * OAuth2 Client Secret for IAP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#oauth2_client_secret GoogleComputeBackendService#oauth2_client_secret}
  */
  readonly oauth2ClientSecret: string;
}

export function googleComputeBackendServiceIapToTerraform(struct?: GoogleComputeBackendServiceIapOutputReference | GoogleComputeBackendServiceIap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_client_secret: cdktf.stringToTerraform(struct!.oauth2ClientSecret),
  }
}

export class GoogleComputeBackendServiceIapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceIap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleComputeBackendServiceIap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauth2ClientId = undefined;
      this._oauth2ClientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2ClientSecret = value.oauth2ClientSecret;
    }
  }

  // oauth2_client_id - computed: false, optional: false, required: true
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_client_secret - computed: false, optional: false, required: true
  private _oauth2ClientSecret?: string; 
  public get oauth2ClientSecret() {
    return this.getStringAttribute('oauth2_client_secret');
  }
  public set oauth2ClientSecret(value: string) {
    this._oauth2ClientSecret = value;
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
export interface GoogleComputeBackendServiceLogConfig {
  /**
  * Whether to enable logging for the load balancer traffic served by this backend service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#enable GoogleComputeBackendService#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * This field can only be specified if logging is enabled for this backend service. The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#sample_rate GoogleComputeBackendService#sample_rate}
  */
  readonly sampleRate?: number;
}

export function googleComputeBackendServiceLogConfigToTerraform(struct?: GoogleComputeBackendServiceLogConfigOutputReference | GoogleComputeBackendServiceLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}

export class GoogleComputeBackendServiceLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeBackendServiceLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
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
export interface GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct?: GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference | GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime | undefined) {
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
export interface GoogleComputeBackendServiceOutlierDetectionInterval {
  /**
  * Span of time that's a fraction of a second at nanosecond resolution. Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}
  */
  readonly nanos?: number;
  /**
  * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000
inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}
  */
  readonly seconds: number;
}

export function googleComputeBackendServiceOutlierDetectionIntervalToTerraform(struct?: GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference | GoogleComputeBackendServiceOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceOutlierDetectionInterval | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceOutlierDetectionInterval | undefined) {
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
export interface GoogleComputeBackendServiceOutlierDetection {
  /**
  * Number of errors before a host is ejected from the connection pool. When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#consecutive_errors GoogleComputeBackendService#consecutive_errors}
  */
  readonly consecutiveErrors?: number;
  /**
  * The number of consecutive gateway failures (502, 503, 504 status or connection
errors that are mapped to one of those status codes) before a consecutive
gateway failure ejection occurs. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#consecutive_gateway_failure GoogleComputeBackendService#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive 5xx. This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#enforcing_consecutive_errors GoogleComputeBackendService#enforcing_consecutive_errors}
  */
  readonly enforcingConsecutiveErrors?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through consecutive gateway failures. This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#enforcing_consecutive_gateway_failure GoogleComputeBackendService#enforcing_consecutive_gateway_failure}
  */
  readonly enforcingConsecutiveGatewayFailure?: number;
  /**
  * The percentage chance that a host will be actually ejected when an outlier
status is detected through success rate statistics. This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#enforcing_success_rate GoogleComputeBackendService#enforcing_success_rate}
  */
  readonly enforcingSuccessRate?: number;
  /**
  * Maximum percentage of hosts in the load balancing pool for the backend service
that can be ejected. Defaults to 10%.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#max_ejection_percent GoogleComputeBackendService#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
  /**
  * The number of hosts in a cluster that must have enough request volume to detect
success rate outliers. If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#success_rate_minimum_hosts GoogleComputeBackendService#success_rate_minimum_hosts}
  */
  readonly successRateMinimumHosts?: number;
  /**
  * The minimum number of total requests that must be collected in one interval (as
defined by the interval duration above) to include this host in success rate
based outlier detection. If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#success_rate_request_volume GoogleComputeBackendService#success_rate_request_volume}
  */
  readonly successRateRequestVolume?: number;
  /**
  * This factor is used to determine the ejection threshold for success rate outlier
ejection. The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#success_rate_stdev_factor GoogleComputeBackendService#success_rate_stdev_factor}
  */
  readonly successRateStdevFactor?: number;
  /**
  * base_ejection_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#base_ejection_time GoogleComputeBackendService#base_ejection_time}
  */
  readonly baseEjectionTime?: GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime;
  /**
  * interval block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#interval GoogleComputeBackendService#interval}
  */
  readonly interval?: GoogleComputeBackendServiceOutlierDetectionInterval;
}

export function googleComputeBackendServiceOutlierDetectionToTerraform(struct?: GoogleComputeBackendServiceOutlierDetectionOutputReference | GoogleComputeBackendServiceOutlierDetection): any {
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
    base_ejection_time: googleComputeBackendServiceOutlierDetectionBaseEjectionTimeToTerraform(struct!.baseEjectionTime),
    interval: googleComputeBackendServiceOutlierDetectionIntervalToTerraform(struct!.interval),
  }
}

export class GoogleComputeBackendServiceOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceOutlierDetection | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceOutlierDetection | undefined) {
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
  private _baseEjectionTime = new GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(this, "base_ejection_time");
  public get baseEjectionTime() {
    return this._baseEjectionTime;
  }
  public putBaseEjectionTime(value: GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime) {
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
  private _interval = new GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: GoogleComputeBackendServiceOutlierDetectionInterval) {
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
export interface GoogleComputeBackendServiceSecuritySettings {
  /**
  * ClientTlsPolicy is a resource that specifies how a client should authenticate
connections to backends of a service. This resource itself does not affect
configuration unless it is attached to a backend service resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#client_tls_policy GoogleComputeBackendService#client_tls_policy}
  */
  readonly clientTlsPolicy: string;
  /**
  * A list of alternate names to verify the subject identity in the certificate.
If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#subject_alt_names GoogleComputeBackendService#subject_alt_names}
  */
  readonly subjectAltNames: string[];
}

export function googleComputeBackendServiceSecuritySettingsToTerraform(struct?: GoogleComputeBackendServiceSecuritySettingsOutputReference | GoogleComputeBackendServiceSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_tls_policy: cdktf.stringToTerraform(struct!.clientTlsPolicy),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
  }
}

export class GoogleComputeBackendServiceSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientTlsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTlsPolicy = this._clientTlsPolicy;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeBackendServiceSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientTlsPolicy = undefined;
      this._subjectAltNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientTlsPolicy = value.clientTlsPolicy;
      this._subjectAltNames = value.subjectAltNames;
    }
  }

  // client_tls_policy - computed: false, optional: false, required: true
  private _clientTlsPolicy?: string; 
  public get clientTlsPolicy() {
    return this.getStringAttribute('client_tls_policy');
  }
  public set clientTlsPolicy(value: string) {
    this._clientTlsPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsPolicyInput() {
    return this._clientTlsPolicy;
  }

  // subject_alt_names - computed: false, optional: false, required: true
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }
}
export interface GoogleComputeBackendServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#create GoogleComputeBackendService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#delete GoogleComputeBackendService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service#update GoogleComputeBackendService#update}
  */
  readonly update?: string;
}

export function googleComputeBackendServiceTimeoutsToTerraform(struct?: GoogleComputeBackendServiceTimeoutsOutputReference | GoogleComputeBackendServiceTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeBackendServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeBackendServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeBackendServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service google_compute_backend_service}
*/
export class GoogleComputeBackendService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_backend_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_compute_backend_service google_compute_backend_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeBackendServiceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeBackendServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_backend_service',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.51.0',
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
    this._affinityCookieTtlSec = config.affinityCookieTtlSec;
    this._compressionMode = config.compressionMode;
    this._connectionDrainingTimeoutSec = config.connectionDrainingTimeoutSec;
    this._customRequestHeaders = config.customRequestHeaders;
    this._customResponseHeaders = config.customResponseHeaders;
    this._description = config.description;
    this._edgeSecurityPolicy = config.edgeSecurityPolicy;
    this._enableCdn = config.enableCdn;
    this._healthChecks = config.healthChecks;
    this._id = config.id;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._localityLbPolicy = config.localityLbPolicy;
    this._name = config.name;
    this._portName = config.portName;
    this._project = config.project;
    this._protocol = config.protocol;
    this._securityPolicy = config.securityPolicy;
    this._sessionAffinity = config.sessionAffinity;
    this._timeoutSec = config.timeoutSec;
    this._backend.internalValue = config.backend;
    this._cdnPolicy.internalValue = config.cdnPolicy;
    this._circuitBreakers.internalValue = config.circuitBreakers;
    this._consistentHash.internalValue = config.consistentHash;
    this._iap.internalValue = config.iap;
    this._logConfig.internalValue = config.logConfig;
    this._outlierDetection.internalValue = config.outlierDetection;
    this._securitySettings.internalValue = config.securitySettings;
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

  // compression_mode - computed: false, optional: true, required: false
  private _compressionMode?: string; 
  public get compressionMode() {
    return this.getStringAttribute('compression_mode');
  }
  public set compressionMode(value: string) {
    this._compressionMode = value;
  }
  public resetCompressionMode() {
    this._compressionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionModeInput() {
    return this._compressionMode;
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

  // custom_request_headers - computed: false, optional: true, required: false
  private _customRequestHeaders?: string[]; 
  public get customRequestHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_request_headers'));
  }
  public set customRequestHeaders(value: string[]) {
    this._customRequestHeaders = value;
  }
  public resetCustomRequestHeaders() {
    this._customRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHeadersInput() {
    return this._customRequestHeaders;
  }

  // custom_response_headers - computed: false, optional: true, required: false
  private _customResponseHeaders?: string[]; 
  public get customResponseHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_response_headers'));
  }
  public set customResponseHeaders(value: string[]) {
    this._customResponseHeaders = value;
  }
  public resetCustomResponseHeaders() {
    this._customResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseHeadersInput() {
    return this._customResponseHeaders;
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

  // edge_security_policy - computed: false, optional: true, required: false
  private _edgeSecurityPolicy?: string; 
  public get edgeSecurityPolicy() {
    return this.getStringAttribute('edge_security_policy');
  }
  public set edgeSecurityPolicy(value: string) {
    this._edgeSecurityPolicy = value;
  }
  public resetEdgeSecurityPolicy() {
    this._edgeSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeSecurityPolicyInput() {
    return this._edgeSecurityPolicy;
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
  private _backend = new GoogleComputeBackendServiceBackendList(this, "backend", true);
  public get backend() {
    return this._backend;
  }
  public putBackend(value: GoogleComputeBackendServiceBackend[] | cdktf.IResolvable) {
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
  private _cdnPolicy = new GoogleComputeBackendServiceCdnPolicyOutputReference(this, "cdn_policy");
  public get cdnPolicy() {
    return this._cdnPolicy;
  }
  public putCdnPolicy(value: GoogleComputeBackendServiceCdnPolicy) {
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
  private _circuitBreakers = new GoogleComputeBackendServiceCircuitBreakersOutputReference(this, "circuit_breakers");
  public get circuitBreakers() {
    return this._circuitBreakers;
  }
  public putCircuitBreakers(value: GoogleComputeBackendServiceCircuitBreakers) {
    this._circuitBreakers.internalValue = value;
  }
  public resetCircuitBreakers() {
    this._circuitBreakers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakersInput() {
    return this._circuitBreakers.internalValue;
  }

  // consistent_hash - computed: false, optional: true, required: false
  private _consistentHash = new GoogleComputeBackendServiceConsistentHashOutputReference(this, "consistent_hash");
  public get consistentHash() {
    return this._consistentHash;
  }
  public putConsistentHash(value: GoogleComputeBackendServiceConsistentHash) {
    this._consistentHash.internalValue = value;
  }
  public resetConsistentHash() {
    this._consistentHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentHashInput() {
    return this._consistentHash.internalValue;
  }

  // iap - computed: false, optional: true, required: false
  private _iap = new GoogleComputeBackendServiceIapOutputReference(this, "iap");
  public get iap() {
    return this._iap;
  }
  public putIap(value: GoogleComputeBackendServiceIap) {
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
  private _logConfig = new GoogleComputeBackendServiceLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: GoogleComputeBackendServiceLogConfig) {
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
  private _outlierDetection = new GoogleComputeBackendServiceOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: GoogleComputeBackendServiceOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings = new GoogleComputeBackendServiceSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }
  public putSecuritySettings(value: GoogleComputeBackendServiceSecuritySettings) {
    this._securitySettings.internalValue = value;
  }
  public resetSecuritySettings() {
    this._securitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeBackendServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeBackendServiceTimeouts) {
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
      compression_mode: cdktf.stringToTerraform(this._compressionMode),
      connection_draining_timeout_sec: cdktf.numberToTerraform(this._connectionDrainingTimeoutSec),
      custom_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customRequestHeaders),
      custom_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customResponseHeaders),
      description: cdktf.stringToTerraform(this._description),
      edge_security_policy: cdktf.stringToTerraform(this._edgeSecurityPolicy),
      enable_cdn: cdktf.booleanToTerraform(this._enableCdn),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthChecks),
      id: cdktf.stringToTerraform(this._id),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      locality_lb_policy: cdktf.stringToTerraform(this._localityLbPolicy),
      name: cdktf.stringToTerraform(this._name),
      port_name: cdktf.stringToTerraform(this._portName),
      project: cdktf.stringToTerraform(this._project),
      protocol: cdktf.stringToTerraform(this._protocol),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      backend: cdktf.listMapper(googleComputeBackendServiceBackendToTerraform, true)(this._backend.internalValue),
      cdn_policy: googleComputeBackendServiceCdnPolicyToTerraform(this._cdnPolicy.internalValue),
      circuit_breakers: googleComputeBackendServiceCircuitBreakersToTerraform(this._circuitBreakers.internalValue),
      consistent_hash: googleComputeBackendServiceConsistentHashToTerraform(this._consistentHash.internalValue),
      iap: googleComputeBackendServiceIapToTerraform(this._iap.internalValue),
      log_config: googleComputeBackendServiceLogConfigToTerraform(this._logConfig.internalValue),
      outlier_detection: googleComputeBackendServiceOutlierDetectionToTerraform(this._outlierDetection.internalValue),
      security_settings: googleComputeBackendServiceSecuritySettingsToTerraform(this._securitySettings.internalValue),
      timeouts: googleComputeBackendServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
