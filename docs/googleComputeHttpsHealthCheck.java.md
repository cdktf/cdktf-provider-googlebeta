# `google_compute_https_health_check`

Refer to the Terraform Registory for docs: [`google_compute_https_health_check`](https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check).

# `googleComputeHttpsHealthCheck` Submodule <a name="`googleComputeHttpsHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHttpsHealthCheck <a name="GoogleComputeHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check google_compute_https_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_https_health_check.GoogleComputeHttpsHealthCheck;

GoogleComputeHttpsHealthCheck.Builder.create(Construct scope, java.lang.String id)
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
//  .healthyThreshold(java.lang.Number)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .requestPath(java.lang.String)
//  .timeouts(GoogleComputeHttpsHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#id GoogleComputeHttpsHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#project GoogleComputeHttpsHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#name GoogleComputeHttpsHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.checkIntervalSec"></a>

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#check_interval_sec GoogleComputeHttpsHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#description GoogleComputeHttpsHealthCheck#description}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.healthyThreshold"></a>

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#healthy_threshold GoogleComputeHttpsHealthCheck#healthy_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The value of the host header in the HTTPS health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#host GoogleComputeHttpsHealthCheck#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#id GoogleComputeHttpsHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#port GoogleComputeHttpsHealthCheck#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#project GoogleComputeHttpsHealthCheck#project}.

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.requestPath"></a>

- *Type:* java.lang.String

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#request_path GoogleComputeHttpsHealthCheck#request_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#timeouts GoogleComputeHttpsHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.timeoutSec"></a>

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#timeout_sec GoogleComputeHttpsHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.Initializer.parameter.unhealthyThreshold"></a>

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#unhealthy_threshold GoogleComputeHttpsHealthCheck#unhealthy_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeHttpsHealthCheckTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetCheckIntervalSec"></a>

```java
public void resetCheckIntervalSec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetPort"></a>

```java
public void resetPort()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_https_health_check.GoogleComputeHttpsHealthCheck;

GoogleComputeHttpsHealthCheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_https_health_check.GoogleComputeHttpsHealthCheck;

GoogleComputeHttpsHealthCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_https_health_check.GoogleComputeHttpsHealthCheck;

GoogleComputeHttpsHealthCheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference">GoogleComputeHttpsHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeouts"></a>

```java
public GoogleComputeHttpsHealthCheckTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference">GoogleComputeHttpsHealthCheckTimeoutsOutputReference</a>

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSecInput"></a>

```java
public java.lang.Number getCheckIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHttpsHealthCheckConfig <a name="GoogleComputeHttpsHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_https_health_check.GoogleComputeHttpsHealthCheckConfig;

GoogleComputeHttpsHealthCheckConfig.builder()
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
//  .healthyThreshold(java.lang.Number)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .requestPath(java.lang.String)
//  .timeouts(GoogleComputeHttpsHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#id GoogleComputeHttpsHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#project GoogleComputeHttpsHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#name GoogleComputeHttpsHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#check_interval_sec GoogleComputeHttpsHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#description GoogleComputeHttpsHealthCheck#description}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#healthy_threshold GoogleComputeHttpsHealthCheck#healthy_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTPS health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#host GoogleComputeHttpsHealthCheck#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#id GoogleComputeHttpsHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#port GoogleComputeHttpsHealthCheck#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#project GoogleComputeHttpsHealthCheck#project}.

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#request_path GoogleComputeHttpsHealthCheck#request_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeouts"></a>

```java
public GoogleComputeHttpsHealthCheckTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#timeouts GoogleComputeHttpsHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#timeout_sec GoogleComputeHttpsHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckConfig.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#unhealthy_threshold GoogleComputeHttpsHealthCheck#unhealthy_threshold}

---

### GoogleComputeHttpsHealthCheckTimeouts <a name="GoogleComputeHttpsHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_https_health_check.GoogleComputeHttpsHealthCheckTimeouts;

GoogleComputeHttpsHealthCheckTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#create GoogleComputeHttpsHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#delete GoogleComputeHttpsHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#update GoogleComputeHttpsHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#create GoogleComputeHttpsHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#delete GoogleComputeHttpsHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.64.0/docs/resources/google_compute_https_health_check#update GoogleComputeHttpsHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHttpsHealthCheckTimeoutsOutputReference <a name="GoogleComputeHttpsHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_https_health_check.GoogleComputeHttpsHealthCheckTimeoutsOutputReference;

new GoogleComputeHttpsHealthCheckTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpsHealthCheck.GoogleComputeHttpsHealthCheckTimeouts">GoogleComputeHttpsHealthCheckTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



