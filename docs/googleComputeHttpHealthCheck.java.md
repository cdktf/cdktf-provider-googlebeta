# `googleComputeHttpHealthCheck` Submodule <a name="`googleComputeHttpHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHttpHealthCheck <a name="GoogleComputeHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check google_compute_http_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheck;

GoogleComputeHttpHealthCheck.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(GoogleComputeHttpHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#name GoogleComputeHttpHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.checkIntervalSec"></a>

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#check_interval_sec GoogleComputeHttpHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#description GoogleComputeHttpHealthCheck#description}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.healthyThreshold"></a>

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#healthy_threshold GoogleComputeHttpHealthCheck#healthy_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The value of the host header in the HTTP health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#host GoogleComputeHttpHealthCheck#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#port GoogleComputeHttpHealthCheck#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}.

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.requestPath"></a>

- *Type:* java.lang.String

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#request_path GoogleComputeHttpHealthCheck#request_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#timeouts GoogleComputeHttpHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.timeoutSec"></a>

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#timeout_sec GoogleComputeHttpHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.Initializer.parameter.unhealthyThreshold"></a>

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#unhealthy_threshold GoogleComputeHttpHealthCheck#unhealthy_threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeHttpHealthCheckTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetCheckIntervalSec"></a>

```java
public void resetCheckIntervalSec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetPort"></a>

```java
public void resetPort()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetRequestPath"></a>

```java
public void resetRequestPath()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHttpHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheck;

GoogleComputeHttpHealthCheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheck;

GoogleComputeHttpHealthCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheck;

GoogleComputeHttpHealthCheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheck;

GoogleComputeHttpHealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeHttpHealthCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeHttpHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeHttpHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeHttpHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHttpHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference">GoogleComputeHttpHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPathInput">requestPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeouts"></a>

```java
public GoogleComputeHttpHealthCheckTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference">GoogleComputeHttpHealthCheckTimeoutsOutputReference</a>

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSecInput"></a>

```java
public java.lang.Number getCheckIntervalSecInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPathInput"></a>

```java
public java.lang.String getRequestPathInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHttpHealthCheckConfig <a name="GoogleComputeHttpHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheckConfig;

GoogleComputeHttpHealthCheckConfig.builder()
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
//  .timeouts(GoogleComputeHttpHealthCheckTimeouts)
//  .timeoutSec(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>java.lang.Number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.host">host</a></code> | <code>java.lang.String</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.requestPath">requestPath</a></code> | <code>java.lang.String</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#name GoogleComputeHttpHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.checkIntervalSec"></a>

```java
public java.lang.Number getCheckIntervalSec();
```

- *Type:* java.lang.Number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#check_interval_sec GoogleComputeHttpHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#description GoogleComputeHttpHealthCheck#description}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#healthy_threshold GoogleComputeHttpHealthCheck#healthy_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The value of the host header in the HTTP health check request.

If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#host GoogleComputeHttpHealthCheck#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#id GoogleComputeHttpHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#port GoogleComputeHttpHealthCheck#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#project GoogleComputeHttpHealthCheck#project}.

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.requestPath"></a>

```java
public java.lang.String getRequestPath();
```

- *Type:* java.lang.String

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#request_path GoogleComputeHttpHealthCheck#request_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeouts"></a>

```java
public GoogleComputeHttpHealthCheckTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#timeouts GoogleComputeHttpHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#timeout_sec GoogleComputeHttpHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckConfig.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#unhealthy_threshold GoogleComputeHttpHealthCheck#unhealthy_threshold}

---

### GoogleComputeHttpHealthCheckTimeouts <a name="GoogleComputeHttpHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheckTimeouts;

GoogleComputeHttpHealthCheckTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#create GoogleComputeHttpHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#delete GoogleComputeHttpHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#update GoogleComputeHttpHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#create GoogleComputeHttpHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#delete GoogleComputeHttpHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_http_health_check#update GoogleComputeHttpHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHttpHealthCheckTimeoutsOutputReference <a name="GoogleComputeHttpHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_http_health_check.GoogleComputeHttpHealthCheckTimeoutsOutputReference;

new GoogleComputeHttpHealthCheckTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHttpHealthCheck.GoogleComputeHttpHealthCheckTimeouts">GoogleComputeHttpHealthCheckTimeouts</a>

---



