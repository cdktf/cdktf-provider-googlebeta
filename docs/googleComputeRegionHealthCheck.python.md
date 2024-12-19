# `googleComputeRegionHealthCheck` Submodule <a name="`googleComputeRegionHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionHealthCheck <a name="GoogleComputeRegionHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check google_compute_region_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  check_interval_sec: typing.Union[int, float] = None,
  description: str = None,
  grpc_health_check: GoogleComputeRegionHealthCheckGrpcHealthCheck = None,
  healthy_threshold: typing.Union[int, float] = None,
  http2_health_check: GoogleComputeRegionHealthCheckHttp2HealthCheck = None,
  http_health_check: GoogleComputeRegionHealthCheckHttpHealthCheck = None,
  https_health_check: GoogleComputeRegionHealthCheckHttpsHealthCheck = None,
  id: str = None,
  log_config: GoogleComputeRegionHealthCheckLogConfig = None,
  project: str = None,
  region: str = None,
  ssl_health_check: GoogleComputeRegionHealthCheckSslHealthCheck = None,
  tcp_health_check: GoogleComputeRegionHealthCheckTcpHealthCheck = None,
  timeouts: GoogleComputeRegionHealthCheckTimeouts = None,
  timeout_sec: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.checkIntervalSec">check_interval_sec</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.grpcHealthCheck">grpc_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.http2HealthCheck">http2_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.httpsHealthCheck">https_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.sslHealthCheck">ssl_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.tcpHealthCheck">tcp_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#name GoogleComputeRegionHealthCheck#name}

---

##### `check_interval_sec`<sup>Optional</sup> <a name="check_interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.checkIntervalSec"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#check_interval_sec GoogleComputeRegionHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#description GoogleComputeRegionHealthCheck#description}

---

##### `grpc_health_check`<sup>Optional</sup> <a name="grpc_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.grpcHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#grpc_health_check GoogleComputeRegionHealthCheck#grpc_health_check}

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#healthy_threshold GoogleComputeRegionHealthCheck#healthy_threshold}

---

##### `http2_health_check`<sup>Optional</sup> <a name="http2_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.http2HealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#http2_health_check GoogleComputeRegionHealthCheck#http2_health_check}

---

##### `http_health_check`<sup>Optional</sup> <a name="http_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.httpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#http_health_check GoogleComputeRegionHealthCheck#http_health_check}

---

##### `https_health_check`<sup>Optional</sup> <a name="https_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.httpsHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#https_health_check GoogleComputeRegionHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#log_config GoogleComputeRegionHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#region GoogleComputeRegionHealthCheck#region}

---

##### `ssl_health_check`<sup>Optional</sup> <a name="ssl_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.sslHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#ssl_health_check GoogleComputeRegionHealthCheck#ssl_health_check}

---

##### `tcp_health_check`<sup>Optional</sup> <a name="tcp_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.tcpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#tcp_health_check GoogleComputeRegionHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#timeouts GoogleComputeRegionHealthCheck#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.timeoutSec"></a>

- *Type:* typing.Union[int, float]

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#timeout_sec GoogleComputeRegionHealthCheck#timeout_sec}

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#unhealthy_threshold GoogleComputeRegionHealthCheck#unhealthy_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck">put_grpc_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck">put_http2_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck">put_http_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck">put_https_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck">put_ssl_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck">put_tcp_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetCheckIntervalSec">reset_check_interval_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetGrpcHealthCheck">reset_grpc_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttp2HealthCheck">reset_http2_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpHealthCheck">reset_http_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpsHealthCheck">reset_https_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetSslHealthCheck">reset_ssl_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTcpHealthCheck">reset_tcp_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeoutSec">reset_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_grpc_health_check` <a name="put_grpc_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck"></a>

```python
def put_grpc_health_check(
  grpc_service_name: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None
) -> None
```

###### `grpc_service_name`<sup>Optional</sup> <a name="grpc_service_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck.parameter.grpcServiceName"></a>

- *Type:* str

The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:.

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#grpc_service_name GoogleComputeRegionHealthCheck#grpc_service_name}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `put_http2_health_check` <a name="put_http2_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck"></a>

```python
def put_http2_health_check(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.host"></a>

- *Type:* str

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

###### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.requestPath"></a>

- *Type:* str

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

##### `put_http_health_check` <a name="put_http_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck"></a>

```python
def put_http_health_check(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.host"></a>

- *Type:* str

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

###### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.requestPath"></a>

- *Type:* str

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

##### `put_https_health_check` <a name="put_https_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck"></a>

```python
def put_https_health_check(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.host"></a>

- *Type:* str

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

###### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.requestPath"></a>

- *Type:* str

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig"></a>

```python
def put_log_config(
  enable: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#enable GoogleComputeRegionHealthCheck#enable}

---

##### `put_ssl_health_check` <a name="put_ssl_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck"></a>

```python
def put_ssl_health_check(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

###### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.request"></a>

- *Type:* str

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

##### `put_tcp_health_check` <a name="put_tcp_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck"></a>

```python
def put_tcp_health_check(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.port"></a>

- *Type:* typing.Union[int, float]

The TCP port number for the TCP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

###### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.portName"></a>

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

###### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.portSpecification"></a>

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

###### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

###### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.request"></a>

- *Type:* str

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.response"></a>

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}.

---

##### `reset_check_interval_sec` <a name="reset_check_interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetCheckIntervalSec"></a>

```python
def reset_check_interval_sec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_grpc_health_check` <a name="reset_grpc_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetGrpcHealthCheck"></a>

```python
def reset_grpc_health_check() -> None
```

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_http2_health_check` <a name="reset_http2_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttp2HealthCheck"></a>

```python
def reset_http2_health_check() -> None
```

##### `reset_http_health_check` <a name="reset_http_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpHealthCheck"></a>

```python
def reset_http_health_check() -> None
```

##### `reset_https_health_check` <a name="reset_https_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpsHealthCheck"></a>

```python
def reset_https_health_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_ssl_health_check` <a name="reset_ssl_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetSslHealthCheck"></a>

```python
def reset_ssl_health_check() -> None
```

##### `reset_tcp_health_check` <a name="reset_tcp_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTcpHealthCheck"></a>

```python
def reset_tcp_health_check() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timeout_sec` <a name="reset_timeout_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeoutSec"></a>

```python
def reset_timeout_sec() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRegionHealthCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRegionHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheck">grpc_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference">GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthCheckId">health_check_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheck">http2_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference">GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheck">https_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference">GoogleComputeRegionHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheck">ssl_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference">GoogleComputeRegionHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheck">tcp_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference">GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference">GoogleComputeRegionHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSecInput">check_interval_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheckInput">grpc_health_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheckInput">http2_health_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheckInput">http_health_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheckInput">https_health_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheckInput">ssl_health_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheckInput">tcp_health_check_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSecInput">timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSec">check_interval_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `grpc_health_check`<sup>Required</sup> <a name="grpc_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheck"></a>

```python
grpc_health_check: GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference">GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthCheckId"></a>

```python
health_check_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http2_health_check`<sup>Required</sup> <a name="http2_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheck"></a>

```python
http2_health_check: GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference">GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `http_health_check`<sup>Required</sup> <a name="http_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheck"></a>

```python
http_health_check: GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference</a>

---

##### `https_health_check`<sup>Required</sup> <a name="https_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheck"></a>

```python
https_health_check: GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfig"></a>

```python
log_config: GoogleComputeRegionHealthCheckLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference">GoogleComputeRegionHealthCheckLogConfigOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `ssl_health_check`<sup>Required</sup> <a name="ssl_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheck"></a>

```python
ssl_health_check: GoogleComputeRegionHealthCheckSslHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference">GoogleComputeRegionHealthCheckSslHealthCheckOutputReference</a>

---

##### `tcp_health_check`<sup>Required</sup> <a name="tcp_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheck"></a>

```python
tcp_health_check: GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference">GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference">GoogleComputeRegionHealthCheckTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `check_interval_sec_input`<sup>Optional</sup> <a name="check_interval_sec_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSecInput"></a>

```python
check_interval_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `grpc_health_check_input`<sup>Optional</sup> <a name="grpc_health_check_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheckInput"></a>

```python
grpc_health_check_input: GoogleComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http2_health_check_input`<sup>Optional</sup> <a name="http2_health_check_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheckInput"></a>

```python
http2_health_check_input: GoogleComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `http_health_check_input`<sup>Optional</sup> <a name="http_health_check_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheckInput"></a>

```python
http_health_check_input: GoogleComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `https_health_check_input`<sup>Optional</sup> <a name="https_health_check_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheckInput"></a>

```python
https_health_check_input: GoogleComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfigInput"></a>

```python
log_config_input: GoogleComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ssl_health_check_input`<sup>Optional</sup> <a name="ssl_health_check_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheckInput"></a>

```python
ssl_health_check_input: GoogleComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---

##### `tcp_health_check_input`<sup>Optional</sup> <a name="tcp_health_check_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheckInput"></a>

```python
tcp_health_check_input: GoogleComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `timeout_sec_input`<sup>Optional</sup> <a name="timeout_sec_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSecInput"></a>

```python
timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionHealthCheckTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_interval_sec`<sup>Required</sup> <a name="check_interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSec"></a>

```python
check_interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `timeout_sec`<sup>Required</sup> <a name="timeout_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionHealthCheckConfig <a name="GoogleComputeRegionHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  check_interval_sec: typing.Union[int, float] = None,
  description: str = None,
  grpc_health_check: GoogleComputeRegionHealthCheckGrpcHealthCheck = None,
  healthy_threshold: typing.Union[int, float] = None,
  http2_health_check: GoogleComputeRegionHealthCheckHttp2HealthCheck = None,
  http_health_check: GoogleComputeRegionHealthCheckHttpHealthCheck = None,
  https_health_check: GoogleComputeRegionHealthCheckHttpsHealthCheck = None,
  id: str = None,
  log_config: GoogleComputeRegionHealthCheckLogConfig = None,
  project: str = None,
  region: str = None,
  ssl_health_check: GoogleComputeRegionHealthCheckSslHealthCheck = None,
  tcp_health_check: GoogleComputeRegionHealthCheckTcpHealthCheck = None,
  timeouts: GoogleComputeRegionHealthCheckTimeouts = None,
  timeout_sec: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.checkIntervalSec">check_interval_sec</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.grpcHealthCheck">grpc_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.http2HealthCheck">http2_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpsHealthCheck">https_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.sslHealthCheck">ssl_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.tcpHealthCheck">tcp_health_check</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#name GoogleComputeRegionHealthCheck#name}

---

##### `check_interval_sec`<sup>Optional</sup> <a name="check_interval_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.checkIntervalSec"></a>

```python
check_interval_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#check_interval_sec GoogleComputeRegionHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#description GoogleComputeRegionHealthCheck#description}

---

##### `grpc_health_check`<sup>Optional</sup> <a name="grpc_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.grpcHealthCheck"></a>

```python
grpc_health_check: GoogleComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#grpc_health_check GoogleComputeRegionHealthCheck#grpc_health_check}

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#healthy_threshold GoogleComputeRegionHealthCheck#healthy_threshold}

---

##### `http2_health_check`<sup>Optional</sup> <a name="http2_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.http2HealthCheck"></a>

```python
http2_health_check: GoogleComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#http2_health_check GoogleComputeRegionHealthCheck#http2_health_check}

---

##### `http_health_check`<sup>Optional</sup> <a name="http_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpHealthCheck"></a>

```python
http_health_check: GoogleComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#http_health_check GoogleComputeRegionHealthCheck#http_health_check}

---

##### `https_health_check`<sup>Optional</sup> <a name="https_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpsHealthCheck"></a>

```python
https_health_check: GoogleComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#https_health_check GoogleComputeRegionHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.logConfig"></a>

```python
log_config: GoogleComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#log_config GoogleComputeRegionHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#region GoogleComputeRegionHealthCheck#region}

---

##### `ssl_health_check`<sup>Optional</sup> <a name="ssl_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.sslHealthCheck"></a>

```python
ssl_health_check: GoogleComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#ssl_health_check GoogleComputeRegionHealthCheck#ssl_health_check}

---

##### `tcp_health_check`<sup>Optional</sup> <a name="tcp_health_check" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.tcpHealthCheck"></a>

```python
tcp_health_check: GoogleComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#tcp_health_check GoogleComputeRegionHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionHealthCheckTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#timeouts GoogleComputeRegionHealthCheck#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#timeout_sec GoogleComputeRegionHealthCheck#timeout_sec}

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#unhealthy_threshold GoogleComputeRegionHealthCheck#unhealthy_threshold}

---

### GoogleComputeRegionHealthCheckGrpcHealthCheck <a name="GoogleComputeRegionHealthCheckGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck(
  grpc_service_name: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName">grpc_service_name</a></code> | <code>str</code> | The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `grpc_service_name`<sup>Optional</sup> <a name="grpc_service_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```python
grpc_service_name: str
```

- *Type:* str

The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:.

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#grpc_service_name GoogleComputeRegionHealthCheck#grpc_service_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

### GoogleComputeRegionHealthCheckHttp2HealthCheck <a name="GoogleComputeRegionHealthCheckHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.host">host</a></code> | <code>str</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.requestPath">request_path</a></code> | <code>str</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.host"></a>

```python
host: str
```

- *Type:* str

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckHttpHealthCheck <a name="GoogleComputeRegionHealthCheckHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.host">host</a></code> | <code>str</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.requestPath">request_path</a></code> | <code>str</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.host"></a>

```python
host: str
```

- *Type:* str

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckHttpsHealthCheck <a name="GoogleComputeRegionHealthCheckHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck(
  host: str = None,
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request_path: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.host">host</a></code> | <code>str</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.requestPath">request_path</a></code> | <code>str</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.host"></a>

```python
host: str
```

- *Type:* str

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `request_path`<sup>Optional</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckLogConfig <a name="GoogleComputeRegionHealthCheckLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig(
  enable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to export logs. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#enable GoogleComputeRegionHealthCheck#enable}

---

### GoogleComputeRegionHealthCheckSslHealthCheck <a name="GoogleComputeRegionHealthCheckSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.request">request</a></code> | <code>str</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.request"></a>

```python
request: str
```

- *Type:* str

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckTcpHealthCheck <a name="GoogleComputeRegionHealthCheckTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck(
  port: typing.Union[int, float] = None,
  port_name: str = None,
  port_specification: str = None,
  proxy_header: str = None,
  request: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The TCP port number for the TCP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portName">port_name</a></code> | <code>str</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portSpecification">port_specification</a></code> | <code>str</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.request">request</a></code> | <code>str</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.response">response</a></code> | <code>str</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TCP port number for the TCP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `port_specification`<sup>Optional</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.request"></a>

```python
request: str
```

- *Type:* str

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckTimeouts <a name="GoogleComputeRegionHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">reset_grpc_service_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grpc_service_name` <a name="reset_grpc_service_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```python
def reset_grpc_service_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">grpc_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">grpc_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc_service_name_input`<sup>Optional</sup> <a name="grpc_service_name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```python
grpc_service_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `grpc_service_name`<sup>Required</sup> <a name="grpc_service_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```python
grpc_service_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionHealthCheckGrpcHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">reset_request_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request_path` <a name="reset_request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```python
def reset_request_path() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">request_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath">request_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_path_input`<sup>Optional</sup> <a name="request_path_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```python
request_path_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request_path`<sup>Required</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionHealthCheckHttp2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath">reset_request_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request_path` <a name="reset_request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```python
def reset_request_path() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">request_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath">request_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_path_input`<sup>Optional</sup> <a name="request_path_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```python
request_path_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request_path`<sup>Required</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionHealthCheckHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">reset_request_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request_path` <a name="reset_request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```python
def reset_request_path() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">request_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath">request_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_path_input`<sup>Optional</sup> <a name="request_path_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```python
request_path_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request_path`<sup>Required</sup> <a name="request_path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```python
request_path: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionHealthCheckHttpsHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---


### GoogleComputeRegionHealthCheckLogConfigOutputReference <a name="GoogleComputeRegionHealthCheckLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionHealthCheckLogConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---


### GoogleComputeRegionHealthCheckSslHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest">reset_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request` <a name="reset_request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```python
def reset_request() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput">request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_input`<sup>Optional</sup> <a name="request_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```python
request_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionHealthCheckSslHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---


### GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">reset_port_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest">reset_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_port_specification` <a name="reset_port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```python
def reset_port_specification() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_request` <a name="reset_request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```python
def reset_request() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">port_specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput">request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification">port_specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `port_specification_input`<sup>Optional</sup> <a name="port_specification_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```python
port_specification_input: str
```

- *Type:* str

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `request_input`<sup>Optional</sup> <a name="request_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```python
request_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `port_specification`<sup>Required</sup> <a name="port_specification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```python
port_specification: str
```

- *Type:* str

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRegionHealthCheckTcpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---


### GoogleComputeRegionHealthCheckTimeoutsOutputReference <a name="GoogleComputeRegionHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_health_check

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionHealthCheckTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>]

---



