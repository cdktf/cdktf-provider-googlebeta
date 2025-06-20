/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleComputeRegionHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * How often (in seconds) to send a health check. The default value is 5
  * seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#check_interval_sec GoogleComputeRegionHealthCheck#check_interval_sec}
  */
  readonly checkIntervalSec?: number;
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#description GoogleComputeRegionHealthCheck#description}
  */
  readonly description?: string;
  /**
  * A so-far unhealthy instance will be marked healthy after this many
  * consecutive successes. The default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#healthy_threshold GoogleComputeRegionHealthCheck#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035.  Specifically, the name must be 1-63 characters long and
  * match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
  * the first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the
  * last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#name GoogleComputeRegionHealthCheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}
  */
  readonly project?: string;
  /**
  * The Region in which the created health check should reside.
  * If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#region GoogleComputeRegionHealthCheck#region}
  */
  readonly region?: string;
  /**
  * How long (in seconds) to wait before claiming failure.
  * The default value is 5 seconds.  It is invalid for timeoutSec to have
  * greater value than checkIntervalSec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#timeout_sec GoogleComputeRegionHealthCheck#timeout_sec}
  */
  readonly timeoutSec?: number;
  /**
  * A so-far healthy instance will be marked unhealthy after this many
  * consecutive failures. The default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#unhealthy_threshold GoogleComputeRegionHealthCheck#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#grpc_health_check GoogleComputeRegionHealthCheck#grpc_health_check}
  */
  readonly grpcHealthCheck?: GoogleComputeRegionHealthCheckGrpcHealthCheck;
  /**
  * grpc_tls_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#grpc_tls_health_check GoogleComputeRegionHealthCheck#grpc_tls_health_check}
  */
  readonly grpcTlsHealthCheck?: GoogleComputeRegionHealthCheckGrpcTlsHealthCheck;
  /**
  * http2_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#http2_health_check GoogleComputeRegionHealthCheck#http2_health_check}
  */
  readonly http2HealthCheck?: GoogleComputeRegionHealthCheckHttp2HealthCheck;
  /**
  * http_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#http_health_check GoogleComputeRegionHealthCheck#http_health_check}
  */
  readonly httpHealthCheck?: GoogleComputeRegionHealthCheckHttpHealthCheck;
  /**
  * https_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#https_health_check GoogleComputeRegionHealthCheck#https_health_check}
  */
  readonly httpsHealthCheck?: GoogleComputeRegionHealthCheckHttpsHealthCheck;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#log_config GoogleComputeRegionHealthCheck#log_config}
  */
  readonly logConfig?: GoogleComputeRegionHealthCheckLogConfig;
  /**
  * ssl_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#ssl_health_check GoogleComputeRegionHealthCheck#ssl_health_check}
  */
  readonly sslHealthCheck?: GoogleComputeRegionHealthCheckSslHealthCheck;
  /**
  * tcp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#tcp_health_check GoogleComputeRegionHealthCheck#tcp_health_check}
  */
  readonly tcpHealthCheck?: GoogleComputeRegionHealthCheckTcpHealthCheck;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#timeouts GoogleComputeRegionHealthCheck#timeouts}
  */
  readonly timeouts?: GoogleComputeRegionHealthCheckTimeouts;
}
export interface GoogleComputeRegionHealthCheckGrpcHealthCheck {
  /**
  * The gRPC service name for the health check.
  * The value of grpcServiceName has the following meanings by convention:
  * 
  * * Empty serviceName means the overall status of all services at the backend.
  * * Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  * 
  * The grpcServiceName can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#grpc_service_name GoogleComputeRegionHealthCheck#grpc_service_name}
  */
  readonly grpcServiceName?: string;
  /**
  * The port number for the health check request.
  * Must be specified if portName and portSpecification are not set
  * or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
  * port_name are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
  * following values:
  * 
  *   * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
  * 
  *   * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 
  *   * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  *   network endpoint is used for health checking. For other backends, the
  *   port or named port specified in the Backend Service is used for health
  *   checking.
  * 
  * If not specified, gRPC health check follows behavior specified in 'port' and
  * 'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
}

export function googleComputeRegionHealthCheckGrpcHealthCheckToTerraform(struct?: GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference | GoogleComputeRegionHealthCheckGrpcHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_service_name: cdktf.stringToTerraform(struct!.grpcServiceName),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
  }
}


export function googleComputeRegionHealthCheckGrpcHealthCheckToHclTerraform(struct?: GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference | GoogleComputeRegionHealthCheckGrpcHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_service_name: {
      value: cdktf.stringToHclTerraform(struct!.grpcServiceName),
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckGrpcHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcServiceName = this._grpcServiceName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckGrpcHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcServiceName = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcServiceName = value.grpcServiceName;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
    }
  }

  // grpc_service_name - computed: false, optional: true, required: false
  private _grpcServiceName?: string; 
  public get grpcServiceName() {
    return this.getStringAttribute('grpc_service_name');
  }
  public set grpcServiceName(value: string) {
    this._grpcServiceName = value;
  }
  public resetGrpcServiceName() {
    this._grpcServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceNameInput() {
    return this._grpcServiceName;
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

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }
}
export interface GoogleComputeRegionHealthCheckGrpcTlsHealthCheck {
  /**
  * The gRPC service name for the health check.
  * The value of grpcServiceName has the following meanings by convention:
  * 
  * * Empty serviceName means the overall status of all services at the backend.
  * * Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  * 
  * The grpcServiceName can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#grpc_service_name GoogleComputeRegionHealthCheck#grpc_service_name}
  */
  readonly grpcServiceName?: string;
  /**
  * The port number for the health check request.
  * Must be specified if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Specifies how port is selected for health checking, can be one of the
  * following values:
  * 
  *   * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
  * 
  *   * 'USE_NAMED_PORT': Not supported for GRPC with TLS health checking.
  * 
  *   * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  *   network endpoint is used for health checking. For other backends, the
  *   port or named port specified in the Backend Service is used for health
  *   checking.
  * 
  * If not specified, gRPC health check follows behavior specified in the 'port' field. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
}

export function googleComputeRegionHealthCheckGrpcTlsHealthCheckToTerraform(struct?: GoogleComputeRegionHealthCheckGrpcTlsHealthCheckOutputReference | GoogleComputeRegionHealthCheckGrpcTlsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_service_name: cdktf.stringToTerraform(struct!.grpcServiceName),
    port: cdktf.numberToTerraform(struct!.port),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
  }
}


export function googleComputeRegionHealthCheckGrpcTlsHealthCheckToHclTerraform(struct?: GoogleComputeRegionHealthCheckGrpcTlsHealthCheckOutputReference | GoogleComputeRegionHealthCheckGrpcTlsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_service_name: {
      value: cdktf.stringToHclTerraform(struct!.grpcServiceName),
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
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckGrpcTlsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckGrpcTlsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcServiceName = this._grpcServiceName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckGrpcTlsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcServiceName = undefined;
      this._port = undefined;
      this._portSpecification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcServiceName = value.grpcServiceName;
      this._port = value.port;
      this._portSpecification = value.portSpecification;
    }
  }

  // grpc_service_name - computed: false, optional: true, required: false
  private _grpcServiceName?: string; 
  public get grpcServiceName() {
    return this.getStringAttribute('grpc_service_name');
  }
  public set grpcServiceName(value: string) {
    this._grpcServiceName = value;
  }
  public resetGrpcServiceName() {
    this._grpcServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceNameInput() {
    return this._grpcServiceName;
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }
}
export interface GoogleComputeRegionHealthCheckHttp2HealthCheck {
  /**
  * The value of the host header in the HTTP2 health check request.
  * If left empty (default value), the public IP on behalf of which this health
  * check is performed will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the HTTP2 health check request.
  * The default value is 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
  * port_name are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
  * following values:
  * 
  *   * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
  * 
  *   * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 
  *   * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  *   network endpoint is used for health checking. For other backends, the
  *   port or named port specified in the Backend Service is used for health
  *   checking.
  * 
  * If not specified, HTTP2 health check follows behavior specified in 'port' and
  * 'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
  * backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTP2 health check request.
  * The default value is /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}
  */
  readonly requestPath?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
  * (the default value), any response will indicate health. The response data
  * can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function googleComputeRegionHealthCheckHttp2HealthCheckToTerraform(struct?: GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference | GoogleComputeRegionHealthCheckHttp2HealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function googleComputeRegionHealthCheckHttp2HealthCheckToHclTerraform(struct?: GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference | GoogleComputeRegionHealthCheckHttp2HealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_path: {
      value: cdktf.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckHttp2HealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckHttp2HealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface GoogleComputeRegionHealthCheckHttpHealthCheck {
  /**
  * The value of the host header in the HTTP health check request.
  * If left empty (default value), the public IP on behalf of which this health
  * check is performed will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the HTTP health check request.
  * The default value is 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
  * port_name are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
  * following values:
  * 
  *   * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
  * 
  *   * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 
  *   * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  *   network endpoint is used for health checking. For other backends, the
  *   port or named port specified in the Backend Service is used for health
  *   checking.
  * 
  * If not specified, HTTP health check follows behavior specified in 'port' and
  * 'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
  * backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTP health check request.
  * The default value is /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}
  */
  readonly requestPath?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
  * (the default value), any response will indicate health. The response data
  * can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function googleComputeRegionHealthCheckHttpHealthCheckToTerraform(struct?: GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference | GoogleComputeRegionHealthCheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function googleComputeRegionHealthCheckHttpHealthCheckToHclTerraform(struct?: GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference | GoogleComputeRegionHealthCheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_path: {
      value: cdktf.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckHttpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckHttpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface GoogleComputeRegionHealthCheckHttpsHealthCheck {
  /**
  * The value of the host header in the HTTPS health check request.
  * If left empty (default value), the public IP on behalf of which this health
  * check is performed will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}
  */
  readonly host?: string;
  /**
  * The TCP port number for the HTTPS health check request.
  * The default value is 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
  * port_name are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
  * following values:
  * 
  *   * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
  * 
  *   * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 
  *   * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  *   network endpoint is used for health checking. For other backends, the
  *   port or named port specified in the Backend Service is used for health
  *   checking.
  * 
  * If not specified, HTTPS health check follows behavior specified in 'port' and
  * 'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
  * backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The request path of the HTTPS health check request.
  * The default value is /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}
  */
  readonly requestPath?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
  * (the default value), any response will indicate health. The response data
  * can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function googleComputeRegionHealthCheckHttpsHealthCheckToTerraform(struct?: GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference | GoogleComputeRegionHealthCheckHttpsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request_path: cdktf.stringToTerraform(struct!.requestPath),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function googleComputeRegionHealthCheckHttpsHealthCheckToHclTerraform(struct?: GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference | GoogleComputeRegionHealthCheckHttpsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_path: {
      value: cdktf.stringToHclTerraform(struct!.requestPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckHttpsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._requestPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckHttpsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._requestPath = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._requestPath = value.requestPath;
      this._response = value.response;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  public resetRequestPath() {
    this._requestPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface GoogleComputeRegionHealthCheckLogConfig {
  /**
  * Indicates whether or not to export logs. This is false by default,
  * which means no health check logging will be done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#enable GoogleComputeRegionHealthCheck#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function googleComputeRegionHealthCheckLogConfigToTerraform(struct?: GoogleComputeRegionHealthCheckLogConfigOutputReference | GoogleComputeRegionHealthCheckLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function googleComputeRegionHealthCheckLogConfigToHclTerraform(struct?: GoogleComputeRegionHealthCheckLogConfigOutputReference | GoogleComputeRegionHealthCheckLogConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
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
}
export interface GoogleComputeRegionHealthCheckSslHealthCheck {
  /**
  * The TCP port number for the SSL health check request.
  * The default value is 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
  * port_name are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
  * following values:
  * 
  *   * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
  * 
  *   * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 
  *   * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  *   network endpoint is used for health checking. For other backends, the
  *   port or named port specified in the Backend Service is used for health
  *   checking.
  * 
  * If not specified, SSL health check follows behavior specified in 'port' and
  * 'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
  * backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The application data to send once the SSL connection has been
  * established (default value is empty). If both request and response are
  * empty, the connection establishment alone will indicate health. The request
  * data can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}
  */
  readonly request?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
  * (the default value), any response will indicate health. The response data
  * can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function googleComputeRegionHealthCheckSslHealthCheckToTerraform(struct?: GoogleComputeRegionHealthCheckSslHealthCheckOutputReference | GoogleComputeRegionHealthCheckSslHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request: cdktf.stringToTerraform(struct!.request),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function googleComputeRegionHealthCheckSslHealthCheckToHclTerraform(struct?: GoogleComputeRegionHealthCheckSslHealthCheckOutputReference | GoogleComputeRegionHealthCheckSslHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckSslHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckSslHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckSslHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._request = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._request = value.request;
      this._response = value.response;
    }
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

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface GoogleComputeRegionHealthCheckTcpHealthCheck {
  /**
  * The TCP port number for the TCP health check request.
  * The default value is 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}
  */
  readonly port?: number;
  /**
  * Port name as defined in InstanceGroup#NamedPort#name. If both port and
  * port_name are defined, port takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}
  */
  readonly portName?: string;
  /**
  * Specifies how port is selected for health checking, can be one of the
  * following values:
  * 
  *   * 'USE_FIXED_PORT': The port number in 'port' is used for health checking.
  * 
  *   * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 
  *   * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  *   network endpoint is used for health checking. For other backends, the
  *   port or named port specified in the Backend Service is used for health
  *   checking.
  * 
  * If not specified, TCP health check follows behavior specified in 'port' and
  * 'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}
  */
  readonly portSpecification?: string;
  /**
  * Specifies the type of proxy header to append before sending data to the
  * backend. Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}
  */
  readonly proxyHeader?: string;
  /**
  * The application data to send once the TCP connection has been
  * established (default value is empty). If both request and response are
  * empty, the connection establishment alone will indicate health. The request
  * data can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}
  */
  readonly request?: string;
  /**
  * The bytes to match against the beginning of the response data. If left empty
  * (the default value), any response will indicate health. The response data
  * can only be ASCII.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}
  */
  readonly response?: string;
}

export function googleComputeRegionHealthCheckTcpHealthCheckToTerraform(struct?: GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference | GoogleComputeRegionHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_specification: cdktf.stringToTerraform(struct!.portSpecification),
    proxy_header: cdktf.stringToTerraform(struct!.proxyHeader),
    request: cdktf.stringToTerraform(struct!.request),
    response: cdktf.stringToTerraform(struct!.response),
  }
}


export function googleComputeRegionHealthCheckTcpHealthCheckToHclTerraform(struct?: GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference | GoogleComputeRegionHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_specification: {
      value: cdktf.stringToHclTerraform(struct!.portSpecification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_header: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckTcpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portSpecification !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSpecification = this._portSpecification;
    }
    if (this._proxyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeader = this._proxyHeader;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleComputeRegionHealthCheckTcpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._portName = undefined;
      this._portSpecification = undefined;
      this._proxyHeader = undefined;
      this._request = undefined;
      this._response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._portName = value.portName;
      this._portSpecification = value.portSpecification;
      this._proxyHeader = value.proxyHeader;
      this._request = value.request;
      this._response = value.response;
    }
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

  // port_name - computed: false, optional: true, required: false
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

  // port_specification - computed: false, optional: true, required: false
  private _portSpecification?: string; 
  public get portSpecification() {
    return this.getStringAttribute('port_specification');
  }
  public set portSpecification(value: string) {
    this._portSpecification = value;
  }
  public resetPortSpecification() {
    this._portSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpecificationInput() {
    return this._portSpecification;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader?: string; 
  public get proxyHeader() {
    return this.getStringAttribute('proxy_header');
  }
  public set proxyHeader(value: string) {
    this._proxyHeader = value;
  }
  public resetProxyHeader() {
    this._proxyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }
}
export interface GoogleComputeRegionHealthCheckTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}
  */
  readonly update?: string;
}

export function googleComputeRegionHealthCheckTimeoutsToTerraform(struct?: GoogleComputeRegionHealthCheckTimeouts | cdktf.IResolvable): any {
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


export function googleComputeRegionHealthCheckTimeoutsToHclTerraform(struct?: GoogleComputeRegionHealthCheckTimeouts | cdktf.IResolvable): any {
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

export class GoogleComputeRegionHealthCheckTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleComputeRegionHealthCheckTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleComputeRegionHealthCheckTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check google_compute_region_health_check}
*/
export class GoogleComputeRegionHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleComputeRegionHealthCheck to import
  * @param importFromId The id of the existing GoogleComputeRegionHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleComputeRegionHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_region_health_check google_compute_region_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleComputeRegionHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleComputeRegionHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_health_check',
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
    this._checkIntervalSec = config.checkIntervalSec;
    this._description = config.description;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._timeoutSec = config.timeoutSec;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._grpcHealthCheck.internalValue = config.grpcHealthCheck;
    this._grpcTlsHealthCheck.internalValue = config.grpcTlsHealthCheck;
    this._http2HealthCheck.internalValue = config.http2HealthCheck;
    this._httpHealthCheck.internalValue = config.httpHealthCheck;
    this._httpsHealthCheck.internalValue = config.httpsHealthCheck;
    this._logConfig.internalValue = config.logConfig;
    this._sslHealthCheck.internalValue = config.sslHealthCheck;
    this._tcpHealthCheck.internalValue = config.tcpHealthCheck;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval_sec - computed: false, optional: true, required: false
  private _checkIntervalSec?: number; 
  public get checkIntervalSec() {
    return this.getNumberAttribute('check_interval_sec');
  }
  public set checkIntervalSec(value: number) {
    this._checkIntervalSec = value;
  }
  public resetCheckIntervalSec() {
    this._checkIntervalSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalSecInput() {
    return this._checkIntervalSec;
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

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getNumberAttribute('health_check_id');
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_health_check - computed: false, optional: true, required: false
  private _grpcHealthCheck = new GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference(this, "grpc_health_check");
  public get grpcHealthCheck() {
    return this._grpcHealthCheck;
  }
  public putGrpcHealthCheck(value: GoogleComputeRegionHealthCheckGrpcHealthCheck) {
    this._grpcHealthCheck.internalValue = value;
  }
  public resetGrpcHealthCheck() {
    this._grpcHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthCheckInput() {
    return this._grpcHealthCheck.internalValue;
  }

  // grpc_tls_health_check - computed: false, optional: true, required: false
  private _grpcTlsHealthCheck = new GoogleComputeRegionHealthCheckGrpcTlsHealthCheckOutputReference(this, "grpc_tls_health_check");
  public get grpcTlsHealthCheck() {
    return this._grpcTlsHealthCheck;
  }
  public putGrpcTlsHealthCheck(value: GoogleComputeRegionHealthCheckGrpcTlsHealthCheck) {
    this._grpcTlsHealthCheck.internalValue = value;
  }
  public resetGrpcTlsHealthCheck() {
    this._grpcTlsHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcTlsHealthCheckInput() {
    return this._grpcTlsHealthCheck.internalValue;
  }

  // http2_health_check - computed: false, optional: true, required: false
  private _http2HealthCheck = new GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference(this, "http2_health_check");
  public get http2HealthCheck() {
    return this._http2HealthCheck;
  }
  public putHttp2HealthCheck(value: GoogleComputeRegionHealthCheckHttp2HealthCheck) {
    this._http2HealthCheck.internalValue = value;
  }
  public resetHttp2HealthCheck() {
    this._http2HealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HealthCheckInput() {
    return this._http2HealthCheck.internalValue;
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck = new GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference(this, "http_health_check");
  public get httpHealthCheck() {
    return this._httpHealthCheck;
  }
  public putHttpHealthCheck(value: GoogleComputeRegionHealthCheckHttpHealthCheck) {
    this._httpHealthCheck.internalValue = value;
  }
  public resetHttpHealthCheck() {
    this._httpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthCheckInput() {
    return this._httpHealthCheck.internalValue;
  }

  // https_health_check - computed: false, optional: true, required: false
  private _httpsHealthCheck = new GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference(this, "https_health_check");
  public get httpsHealthCheck() {
    return this._httpsHealthCheck;
  }
  public putHttpsHealthCheck(value: GoogleComputeRegionHealthCheckHttpsHealthCheck) {
    this._httpsHealthCheck.internalValue = value;
  }
  public resetHttpsHealthCheck() {
    this._httpsHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHealthCheckInput() {
    return this._httpsHealthCheck.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new GoogleComputeRegionHealthCheckLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: GoogleComputeRegionHealthCheckLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // ssl_health_check - computed: false, optional: true, required: false
  private _sslHealthCheck = new GoogleComputeRegionHealthCheckSslHealthCheckOutputReference(this, "ssl_health_check");
  public get sslHealthCheck() {
    return this._sslHealthCheck;
  }
  public putSslHealthCheck(value: GoogleComputeRegionHealthCheckSslHealthCheck) {
    this._sslHealthCheck.internalValue = value;
  }
  public resetSslHealthCheck() {
    this._sslHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHealthCheckInput() {
    return this._sslHealthCheck.internalValue;
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck = new GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference(this, "tcp_health_check");
  public get tcpHealthCheck() {
    return this._tcpHealthCheck;
  }
  public putTcpHealthCheck(value: GoogleComputeRegionHealthCheckTcpHealthCheck) {
    this._tcpHealthCheck.internalValue = value;
  }
  public resetTcpHealthCheck() {
    this._tcpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHealthCheckInput() {
    return this._tcpHealthCheck.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleComputeRegionHealthCheckTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleComputeRegionHealthCheckTimeouts) {
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
      check_interval_sec: cdktf.numberToTerraform(this._checkIntervalSec),
      description: cdktf.stringToTerraform(this._description),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeout_sec: cdktf.numberToTerraform(this._timeoutSec),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      grpc_health_check: googleComputeRegionHealthCheckGrpcHealthCheckToTerraform(this._grpcHealthCheck.internalValue),
      grpc_tls_health_check: googleComputeRegionHealthCheckGrpcTlsHealthCheckToTerraform(this._grpcTlsHealthCheck.internalValue),
      http2_health_check: googleComputeRegionHealthCheckHttp2HealthCheckToTerraform(this._http2HealthCheck.internalValue),
      http_health_check: googleComputeRegionHealthCheckHttpHealthCheckToTerraform(this._httpHealthCheck.internalValue),
      https_health_check: googleComputeRegionHealthCheckHttpsHealthCheckToTerraform(this._httpsHealthCheck.internalValue),
      log_config: googleComputeRegionHealthCheckLogConfigToTerraform(this._logConfig.internalValue),
      ssl_health_check: googleComputeRegionHealthCheckSslHealthCheckToTerraform(this._sslHealthCheck.internalValue),
      tcp_health_check: googleComputeRegionHealthCheckTcpHealthCheckToTerraform(this._tcpHealthCheck.internalValue),
      timeouts: googleComputeRegionHealthCheckTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_interval_sec: {
        value: cdktf.numberToHclTerraform(this._checkIntervalSec),
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
      healthy_threshold: {
        value: cdktf.numberToHclTerraform(this._healthyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
      timeout_sec: {
        value: cdktf.numberToHclTerraform(this._timeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unhealthy_threshold: {
        value: cdktf.numberToHclTerraform(this._unhealthyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      grpc_health_check: {
        value: googleComputeRegionHealthCheckGrpcHealthCheckToHclTerraform(this._grpcHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckGrpcHealthCheckList",
      },
      grpc_tls_health_check: {
        value: googleComputeRegionHealthCheckGrpcTlsHealthCheckToHclTerraform(this._grpcTlsHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckGrpcTlsHealthCheckList",
      },
      http2_health_check: {
        value: googleComputeRegionHealthCheckHttp2HealthCheckToHclTerraform(this._http2HealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckHttp2HealthCheckList",
      },
      http_health_check: {
        value: googleComputeRegionHealthCheckHttpHealthCheckToHclTerraform(this._httpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckHttpHealthCheckList",
      },
      https_health_check: {
        value: googleComputeRegionHealthCheckHttpsHealthCheckToHclTerraform(this._httpsHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckHttpsHealthCheckList",
      },
      log_config: {
        value: googleComputeRegionHealthCheckLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckLogConfigList",
      },
      ssl_health_check: {
        value: googleComputeRegionHealthCheckSslHealthCheckToHclTerraform(this._sslHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckSslHealthCheckList",
      },
      tcp_health_check: {
        value: googleComputeRegionHealthCheckTcpHealthCheckToHclTerraform(this._tcpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleComputeRegionHealthCheckTcpHealthCheckList",
      },
      timeouts: {
        value: googleComputeRegionHealthCheckTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleComputeRegionHealthCheckTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
