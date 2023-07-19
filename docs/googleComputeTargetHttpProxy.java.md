# `google_compute_target_http_proxy`

Refer to the Terraform Registory for docs: [`google_compute_target_http_proxy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy).

# `googleComputeTargetHttpProxy` Submodule <a name="`googleComputeTargetHttpProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetHttpProxy <a name="GoogleComputeTargetHttpProxy" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy google_compute_target_http_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_http_proxy.GoogleComputeTargetHttpProxy;

GoogleComputeTargetHttpProxy.Builder.create(Construct scope, java.lang.String id)
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
    .urlMap(java.lang.String)
//  .description(java.lang.String)
//  .httpKeepAliveTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .proxyBind(java.lang.Boolean)
//  .proxyBind(IResolvable)
//  .timeouts(GoogleComputeTargetHttpProxyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.urlMap">urlMap</a></code> | <code>java.lang.String</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#id GoogleComputeTargetHttpProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#project GoogleComputeTargetHttpProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.proxyBind">proxyBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#name GoogleComputeTargetHttpProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.urlMap"></a>

- *Type:* java.lang.String

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#url_map GoogleComputeTargetHttpProxy#url_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#description GoogleComputeTargetHttpProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.httpKeepAliveTimeoutSec"></a>

- *Type:* java.lang.Number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (610 seconds) will be used. For Global
external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
the maximum allowed value is 1200 seconds. For Global external HTTP(S)
load balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#http_keep_alive_timeout_sec GoogleComputeTargetHttpProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#id GoogleComputeTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#project GoogleComputeTargetHttpProxy#project}.

---

##### `proxyBind`<sup>Optional</sup> <a name="proxyBind" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.proxyBind"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#proxy_bind GoogleComputeTargetHttpProxy#proxy_bind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#timeouts GoogleComputeTargetHttpProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetHttpKeepAliveTimeoutSec">resetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetProxyBind">resetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeTargetHttpProxyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpKeepAliveTimeoutSec` <a name="resetHttpKeepAliveTimeoutSec" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetHttpKeepAliveTimeoutSec"></a>

```java
public void resetHttpKeepAliveTimeoutSec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetProject"></a>

```java
public void resetProject()
```

##### `resetProxyBind` <a name="resetProxyBind" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetProxyBind"></a>

```java
public void resetProxyBind()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_http_proxy.GoogleComputeTargetHttpProxy;

GoogleComputeTargetHttpProxy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_http_proxy.GoogleComputeTargetHttpProxy;

GoogleComputeTargetHttpProxy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_http_proxy.GoogleComputeTargetHttpProxy;

GoogleComputeTargetHttpProxy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.proxyId">proxyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference">GoogleComputeTargetHttpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.httpKeepAliveTimeoutSecInput">httpKeepAliveTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.proxyBindInput">proxyBindInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.urlMapInput">urlMapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.proxyBind">proxyBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.proxyId"></a>

```java
public java.lang.Number getProxyId();
```

- *Type:* java.lang.Number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.timeouts"></a>

```java
public GoogleComputeTargetHttpProxyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference">GoogleComputeTargetHttpProxyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `httpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.httpKeepAliveTimeoutSecInput"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `proxyBindInput`<sup>Optional</sup> <a name="proxyBindInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.proxyBindInput"></a>

```java
public java.lang.Object getProxyBindInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a>

---

##### `urlMapInput`<sup>Optional</sup> <a name="urlMapInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.urlMapInput"></a>

```java
public java.lang.String getUrlMapInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `httpKeepAliveTimeoutSec`<sup>Required</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.httpKeepAliveTimeoutSec"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `proxyBind`<sup>Required</sup> <a name="proxyBind" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.proxyBind"></a>

```java
public java.lang.Object getProxyBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetHttpProxyConfig <a name="GoogleComputeTargetHttpProxyConfig" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_http_proxy.GoogleComputeTargetHttpProxyConfig;

GoogleComputeTargetHttpProxyConfig.builder()
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
    .urlMap(java.lang.String)
//  .description(java.lang.String)
//  .httpKeepAliveTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .proxyBind(java.lang.Boolean)
//  .proxyBind(IResolvable)
//  .timeouts(GoogleComputeTargetHttpProxyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#id GoogleComputeTargetHttpProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#project GoogleComputeTargetHttpProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.proxyBind">proxyBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#name GoogleComputeTargetHttpProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#url_map GoogleComputeTargetHttpProxy#url_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#description GoogleComputeTargetHttpProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSec();
```

- *Type:* java.lang.Number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (610 seconds) will be used. For Global
external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
the maximum allowed value is 1200 seconds. For Global external HTTP(S)
load balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#http_keep_alive_timeout_sec GoogleComputeTargetHttpProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#id GoogleComputeTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#project GoogleComputeTargetHttpProxy#project}.

---

##### `proxyBind`<sup>Optional</sup> <a name="proxyBind" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.proxyBind"></a>

```java
public java.lang.Object getProxyBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#proxy_bind GoogleComputeTargetHttpProxy#proxy_bind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyConfig.property.timeouts"></a>

```java
public GoogleComputeTargetHttpProxyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#timeouts GoogleComputeTargetHttpProxy#timeouts}

---

### GoogleComputeTargetHttpProxyTimeouts <a name="GoogleComputeTargetHttpProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_http_proxy.GoogleComputeTargetHttpProxyTimeouts;

GoogleComputeTargetHttpProxyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#create GoogleComputeTargetHttpProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#delete GoogleComputeTargetHttpProxy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#update GoogleComputeTargetHttpProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#create GoogleComputeTargetHttpProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#delete GoogleComputeTargetHttpProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.74.0/docs/resources/google_compute_target_http_proxy#update GoogleComputeTargetHttpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetHttpProxyTimeoutsOutputReference <a name="GoogleComputeTargetHttpProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_http_proxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference;

new GoogleComputeTargetHttpProxyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxyTimeouts">GoogleComputeTargetHttpProxyTimeouts</a>

---



