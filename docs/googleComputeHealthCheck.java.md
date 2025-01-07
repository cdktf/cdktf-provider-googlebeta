# `googleComputeHealthCheck` Submodule <a name="`googleComputeHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHealthCheck <a name="GoogleComputeHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check google_compute_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheck;

GoogleComputeHealthCheck.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .checkIntervalSec(java.lang.Number)
//  .description(java.lang.String)
//  .grpcHealthCheck(GoogleComputeHealthCheckGrpcHealthCheck)
//  .healthyThreshold(java.lang.Number)
//  .http2HealthCheck(GoogleComputeHealthCheckHttp2HealthCheck)
//  .httpHealthCheck(GoogleComputeHealthCheckHttpHealthCheck)
//  .httpsHealthCheck(GoogleComputeHealthCheckHttpsHealthCheck)
//  .id(java.lang.String)
//  .logConfig(GoogleComputeHealthCheckLogConfig)
//  .project(java.lang.String)
//  .sourceRegions(java.util.List<java.lang.String>)
//  .sslHealthCheck(GoogleComputeHealthCheckSslHealthCheck)
//  .tcpHealthCheck(GoogleComputeHealthCheckTcpHealthCheck)
//  .timeouts(GoogleComputeHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.sourceRegions">sourceRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of cloud regions from which health checks are performed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#name GoogleComputeHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.checkIntervalSec"></a>

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#check_interval_sec GoogleComputeHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#description GoogleComputeHealthCheck#description}

---

##### `grpcHealthCheck`<sup>Optional</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.grpcHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#grpc_health_check GoogleComputeHealthCheck#grpc_health_check}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.healthyThreshold"></a>

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#healthy_threshold GoogleComputeHealthCheck#healthy_threshold}

---

##### `http2HealthCheck`<sup>Optional</sup> <a name="http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.http2HealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#http2_health_check GoogleComputeHealthCheck#http2_health_check}

---

##### `httpHealthCheck`<sup>Optional</sup> <a name="httpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.httpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#http_health_check GoogleComputeHealthCheck#http_health_check}

---

##### `httpsHealthCheck`<sup>Optional</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.httpsHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#https_health_check GoogleComputeHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#log_config GoogleComputeHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}.

---

##### `sourceRegions`<sup>Optional</sup> <a name="sourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.sourceRegions"></a>

- *Type:* java.util.List<java.lang.String>

The list of cloud regions from which health checks are performed.

If
any regions are specified, then exactly 3 regions should be specified.
The region names must be valid names of Google Cloud regions. This can
only be set for global health check. If this list is non-empty, then
there are restrictions on what other health check fields are supported
and what other resources can use this health check:

* SSL, HTTP2, and GRPC protocols are not supported.
* The TCP request field is not supported.
* The proxyHeader field for HTTP, HTTPS, and TCP is not supported.
* The checkIntervalSec field must be at least 30.
* The health check cannot be used with BackendService nor with managed
  instance group auto-healing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#source_regions GoogleComputeHealthCheck#source_regions}

---

##### `sslHealthCheck`<sup>Optional</sup> <a name="sslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.sslHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#ssl_health_check GoogleComputeHealthCheck#ssl_health_check}

---

##### `tcpHealthCheck`<sup>Optional</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.tcpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#tcp_health_check GoogleComputeHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#timeouts GoogleComputeHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.timeoutSec"></a>

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#timeout_sec GoogleComputeHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.unhealthyThreshold"></a>

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#unhealthy_threshold GoogleComputeHealthCheck#unhealthy_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck">putGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck">putHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck">putHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck">putHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck">putSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck">putTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetGrpcHealthCheck">resetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttp2HealthCheck">resetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpHealthCheck">resetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpsHealthCheck">resetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSourceRegions">resetSourceRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSslHealthCheck">resetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTcpHealthCheck">resetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGrpcHealthCheck` <a name="putGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck"></a>

```java
public void putGrpcHealthCheck(GoogleComputeHealthCheckGrpcHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---

##### `putHttp2HealthCheck` <a name="putHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck"></a>

```java
public void putHttp2HealthCheck(GoogleComputeHealthCheckHttp2HealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---

##### `putHttpHealthCheck` <a name="putHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck"></a>

```java
public void putHttpHealthCheck(GoogleComputeHealthCheckHttpHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---

##### `putHttpsHealthCheck` <a name="putHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck"></a>

```java
public void putHttpsHealthCheck(GoogleComputeHealthCheckHttpsHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig"></a>

```java
public void putLogConfig(GoogleComputeHealthCheckLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---

##### `putSslHealthCheck` <a name="putSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck"></a>

```java
public void putSslHealthCheck(GoogleComputeHealthCheckSslHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---

##### `putTcpHealthCheck` <a name="putTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck"></a>

```java
public void putTcpHealthCheck(GoogleComputeHealthCheckTcpHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeHealthCheckTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetCheckIntervalSec"></a>

```java
public void resetCheckIntervalSec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGrpcHealthCheck` <a name="resetGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetGrpcHealthCheck"></a>

```java
public void resetGrpcHealthCheck()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetHttp2HealthCheck` <a name="resetHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttp2HealthCheck"></a>

```java
public void resetHttp2HealthCheck()
```

##### `resetHttpHealthCheck` <a name="resetHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpHealthCheck"></a>

```java
public void resetHttpHealthCheck()
```

##### `resetHttpsHealthCheck` <a name="resetHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpsHealthCheck"></a>

```java
public void resetHttpsHealthCheck()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetId"></a>

```java
public void resetId()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetProject"></a>

```java
public void resetProject()
```

##### `resetSourceRegions` <a name="resetSourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSourceRegions"></a>

```java
public void resetSourceRegions()
```

##### `resetSslHealthCheck` <a name="resetSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSslHealthCheck"></a>

```java
public void resetSslHealthCheck()
```

##### `resetTcpHealthCheck` <a name="resetTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTcpHealthCheck"></a>

```java
public void resetTcpHealthCheck()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheck;

GoogleComputeHealthCheck.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheck;

GoogleComputeHealthCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheck;

GoogleComputeHealthCheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheck;

GoogleComputeHealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeHealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference">GoogleComputeHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference">GoogleComputeHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference">GoogleComputeHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference">GoogleComputeHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference">GoogleComputeHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference">GoogleComputeHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference">GoogleComputeHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference">GoogleComputeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheckInput">grpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheckInput">http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheckInput">httpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheckInput">httpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegionsInput">sourceRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheckInput">sslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheckInput">tcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegions">sourceRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `grpcHealthCheck`<sup>Required</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheck"></a>

```java
public GoogleComputeHealthCheckGrpcHealthCheckOutputReference getGrpcHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference">GoogleComputeHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `http2HealthCheck`<sup>Required</sup> <a name="http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheck"></a>

```java
public GoogleComputeHealthCheckHttp2HealthCheckOutputReference getHttp2HealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference">GoogleComputeHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `httpHealthCheck`<sup>Required</sup> <a name="httpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheck"></a>

```java
public GoogleComputeHealthCheckHttpHealthCheckOutputReference getHttpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference">GoogleComputeHealthCheckHttpHealthCheckOutputReference</a>

---

##### `httpsHealthCheck`<sup>Required</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheck"></a>

```java
public GoogleComputeHealthCheckHttpsHealthCheckOutputReference getHttpsHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference">GoogleComputeHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfig"></a>

```java
public GoogleComputeHealthCheckLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference">GoogleComputeHealthCheckLogConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sslHealthCheck`<sup>Required</sup> <a name="sslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheck"></a>

```java
public GoogleComputeHealthCheckSslHealthCheckOutputReference getSslHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference">GoogleComputeHealthCheckSslHealthCheckOutputReference</a>

---

##### `tcpHealthCheck`<sup>Required</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheck"></a>

```java
public GoogleComputeHealthCheckTcpHealthCheckOutputReference getTcpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference">GoogleComputeHealthCheckTcpHealthCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeouts"></a>

```java
public GoogleComputeHealthCheckTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference">GoogleComputeHealthCheckTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSecInput"></a>

```java
public java.lang.Number getCheckIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `grpcHealthCheckInput`<sup>Optional</sup> <a name="grpcHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheckInput"></a>

```java
public GoogleComputeHealthCheckGrpcHealthCheck getGrpcHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `http2HealthCheckInput`<sup>Optional</sup> <a name="http2HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheckInput"></a>

```java
public GoogleComputeHealthCheckHttp2HealthCheck getHttp2HealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---

##### `httpHealthCheckInput`<sup>Optional</sup> <a name="httpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheckInput"></a>

```java
public GoogleComputeHealthCheckHttpHealthCheck getHttpHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---

##### `httpsHealthCheckInput`<sup>Optional</sup> <a name="httpsHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheckInput"></a>

```java
public GoogleComputeHealthCheckHttpsHealthCheck getHttpsHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfigInput"></a>

```java
public GoogleComputeHealthCheckLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceRegionsInput`<sup>Optional</sup> <a name="sourceRegionsInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegionsInput"></a>

```java
public java.util.List<java.lang.String> getSourceRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslHealthCheckInput`<sup>Optional</sup> <a name="sslHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheckInput"></a>

```java
public GoogleComputeHealthCheckSslHealthCheck getSslHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---

##### `tcpHealthCheckInput`<sup>Optional</sup> <a name="tcpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheckInput"></a>

```java
public GoogleComputeHealthCheckTcpHealthCheck getTcpHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sourceRegions`<sup>Required</sup> <a name="sourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegions"></a>

```java
public java.util.List<java.lang.String> getSourceRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHealthCheckConfig <a name="GoogleComputeHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckConfig;

GoogleComputeHealthCheckConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .checkIntervalSec(java.lang.Number)
//  .description(java.lang.String)
//  .grpcHealthCheck(GoogleComputeHealthCheckGrpcHealthCheck)
//  .healthyThreshold(java.lang.Number)
//  .http2HealthCheck(GoogleComputeHealthCheckHttp2HealthCheck)
//  .httpHealthCheck(GoogleComputeHealthCheckHttpHealthCheck)
//  .httpsHealthCheck(GoogleComputeHealthCheckHttpsHealthCheck)
//  .id(java.lang.String)
//  .logConfig(GoogleComputeHealthCheckLogConfig)
//  .project(java.lang.String)
//  .sourceRegions(java.util.List<java.lang.String>)
//  .sslHealthCheck(GoogleComputeHealthCheckSslHealthCheck)
//  .tcpHealthCheck(GoogleComputeHealthCheckTcpHealthCheck)
//  .timeouts(GoogleComputeHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sourceRegions">sourceRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of cloud regions from which health checks are performed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#name GoogleComputeHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#check_interval_sec GoogleComputeHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#description GoogleComputeHealthCheck#description}

---

##### `grpcHealthCheck`<sup>Optional</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.grpcHealthCheck"></a>

```java
public GoogleComputeHealthCheckGrpcHealthCheck getGrpcHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#grpc_health_check GoogleComputeHealthCheck#grpc_health_check}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#healthy_threshold GoogleComputeHealthCheck#healthy_threshold}

---

##### `http2HealthCheck`<sup>Optional</sup> <a name="http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.http2HealthCheck"></a>

```java
public GoogleComputeHealthCheckHttp2HealthCheck getHttp2HealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#http2_health_check GoogleComputeHealthCheck#http2_health_check}

---

##### `httpHealthCheck`<sup>Optional</sup> <a name="httpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpHealthCheck"></a>

```java
public GoogleComputeHealthCheckHttpHealthCheck getHttpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#http_health_check GoogleComputeHealthCheck#http_health_check}

---

##### `httpsHealthCheck`<sup>Optional</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpsHealthCheck"></a>

```java
public GoogleComputeHealthCheckHttpsHealthCheck getHttpsHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#https_health_check GoogleComputeHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.logConfig"></a>

```java
public GoogleComputeHealthCheckLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#log_config GoogleComputeHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}.

---

##### `sourceRegions`<sup>Optional</sup> <a name="sourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sourceRegions"></a>

```java
public java.util.List<java.lang.String> getSourceRegions();
```

- *Type:* java.util.List<java.lang.String>

The list of cloud regions from which health checks are performed.

If
any regions are specified, then exactly 3 regions should be specified.
The region names must be valid names of Google Cloud regions. This can
only be set for global health check. If this list is non-empty, then
there are restrictions on what other health check fields are supported
and what other resources can use this health check:

* SSL, HTTP2, and GRPC protocols are not supported.
* The TCP request field is not supported.
* The proxyHeader field for HTTP, HTTPS, and TCP is not supported.
* The checkIntervalSec field must be at least 30.
* The health check cannot be used with BackendService nor with managed
  instance group auto-healing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#source_regions GoogleComputeHealthCheck#source_regions}

---

##### `sslHealthCheck`<sup>Optional</sup> <a name="sslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sslHealthCheck"></a>

```java
public GoogleComputeHealthCheckSslHealthCheck getSslHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#ssl_health_check GoogleComputeHealthCheck#ssl_health_check}

---

##### `tcpHealthCheck`<sup>Optional</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.tcpHealthCheck"></a>

```java
public GoogleComputeHealthCheckTcpHealthCheck getTcpHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#tcp_health_check GoogleComputeHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeouts"></a>

```java
public GoogleComputeHealthCheckTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#timeouts GoogleComputeHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#timeout_sec GoogleComputeHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#unhealthy_threshold GoogleComputeHealthCheck#unhealthy_threshold}

---

### GoogleComputeHealthCheckGrpcHealthCheck <a name="GoogleComputeHealthCheckGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckGrpcHealthCheck;

GoogleComputeHealthCheckGrpcHealthCheck.builder()
//  .grpcServiceName(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.grpcServiceName">grpcServiceName</a></code> | <code>java.lang.String</code> | The gRPC service name for the health check. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `grpcServiceName`<sup>Optional</sup> <a name="grpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```java
public java.lang.String getGrpcServiceName();
```

- *Type:* java.lang.String

The gRPC service name for the health check.

The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#grpc_service_name GoogleComputeHealthCheck#grpc_service_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

### GoogleComputeHealthCheckHttp2HealthCheck <a name="GoogleComputeHealthCheckHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckHttp2HealthCheck;

GoogleComputeHealthCheckHttp2HealthCheck.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .requestPath(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckHttpHealthCheck <a name="GoogleComputeHealthCheckHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckHttpHealthCheck;

GoogleComputeHealthCheckHttpHealthCheck.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .requestPath(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckHttpsHealthCheck <a name="GoogleComputeHealthCheckHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckHttpsHealthCheck;

GoogleComputeHealthCheckHttpsHealthCheck.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .requestPath(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckLogConfig <a name="GoogleComputeHealthCheckLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckLogConfig;

GoogleComputeHealthCheckLogConfig.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not to export logs. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#enable GoogleComputeHealthCheck#enable}

---

### GoogleComputeHealthCheckSslHealthCheck <a name="GoogleComputeHealthCheckSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckSslHealthCheck;

GoogleComputeHealthCheckSslHealthCheck.builder()
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .request(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.request">request</a></code> | <code>java.lang.String</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#request GoogleComputeHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckTcpHealthCheck <a name="GoogleComputeHealthCheckTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckTcpHealthCheck;

GoogleComputeHealthCheckTcpHealthCheck.builder()
//  .port(java.lang.Number)
//  .portName(java.lang.String)
//  .portSpecification(java.lang.String)
//  .proxyHeader(java.lang.String)
//  .request(java.lang.String)
//  .response(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the TCP health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portName">portName</a></code> | <code>java.lang.String</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.request">request</a></code> | <code>java.lang.String</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.response">response</a></code> | <code>java.lang.String</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the TCP health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#request GoogleComputeHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckTimeouts <a name="GoogleComputeHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckTimeouts;

GoogleComputeHealthCheckTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#create GoogleComputeHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#delete GoogleComputeHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#update GoogleComputeHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#create GoogleComputeHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#delete GoogleComputeHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_health_check#update GoogleComputeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHealthCheckGrpcHealthCheckOutputReference <a name="GoogleComputeHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckGrpcHealthCheckOutputReference;

new GoogleComputeHealthCheckGrpcHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">resetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrpcServiceName` <a name="resetGrpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```java
public void resetGrpcServiceName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">grpcServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">grpcServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpcServiceNameInput`<sup>Optional</sup> <a name="grpcServiceNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```java
public java.lang.String getGrpcServiceNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `grpcServiceName`<sup>Required</sup> <a name="grpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```java
public java.lang.String getGrpcServiceName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```java
public GoogleComputeHealthCheckGrpcHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---


### GoogleComputeHealthCheckHttp2HealthCheckOutputReference <a name="GoogleComputeHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckHttp2HealthCheckOutputReference;

new GoogleComputeHealthCheckHttp2HealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```java
public GoogleComputeHealthCheckHttp2HealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---


### GoogleComputeHealthCheckHttpHealthCheckOutputReference <a name="GoogleComputeHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckHttpHealthCheckOutputReference;

new GoogleComputeHealthCheckHttpHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```java
public GoogleComputeHealthCheckHttpHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---


### GoogleComputeHealthCheckHttpsHealthCheckOutputReference <a name="GoogleComputeHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckHttpsHealthCheckOutputReference;

new GoogleComputeHealthCheckHttpsHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```java
public GoogleComputeHealthCheckHttpsHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---


### GoogleComputeHealthCheckLogConfigOutputReference <a name="GoogleComputeHealthCheckLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckLogConfigOutputReference;

new GoogleComputeHealthCheckLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeHealthCheckLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---


### GoogleComputeHealthCheckSslHealthCheckOutputReference <a name="GoogleComputeHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckSslHealthCheckOutputReference;

new GoogleComputeHealthCheckSslHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```java
public void resetRequest()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```java
public java.lang.String getRequestInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```java
public GoogleComputeHealthCheckSslHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---


### GoogleComputeHealthCheckTcpHealthCheckOutputReference <a name="GoogleComputeHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckTcpHealthCheckOutputReference;

new GoogleComputeHealthCheckTcpHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```java
public void resetPortSpecification()
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```java
public void resetProxyHeader()
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```java
public void resetRequest()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```java
public java.lang.String getPortSpecificationInput();
```

- *Type:* java.lang.String

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```java
public java.lang.String getProxyHeaderInput();
```

- *Type:* java.lang.String

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```java
public java.lang.String getRequestInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```java
public java.lang.String getPortSpecification();
```

- *Type:* java.lang.String

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```java
public java.lang.String getProxyHeader();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```java
public GoogleComputeHealthCheckTcpHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---


### GoogleComputeHealthCheckTimeoutsOutputReference <a name="GoogleComputeHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_health_check.GoogleComputeHealthCheckTimeoutsOutputReference;

new GoogleComputeHealthCheckTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

---



