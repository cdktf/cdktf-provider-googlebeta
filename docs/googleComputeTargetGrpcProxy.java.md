# `google_compute_target_grpc_proxy`

Refer to the Terraform Registory for docs: [`google_compute_target_grpc_proxy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy).

# `googleComputeTargetGrpcProxy` Submodule <a name="`googleComputeTargetGrpcProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeTargetGrpcProxy <a name="GoogleComputeTargetGrpcProxy" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy google_compute_target_grpc_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_grpc_proxy.GoogleComputeTargetGrpcProxy;

GoogleComputeTargetGrpcProxy.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeTargetGrpcProxyTimeouts)
//  .urlMap(java.lang.String)
//  .validateForProxyless(java.lang.Boolean)
//  .validateForProxyless(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.urlMap">urlMap</a></code> | <code>java.lang.String</code> | URL to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.validateForProxyless">validateForProxyless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#name GoogleComputeTargetGrpcProxy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#description GoogleComputeTargetGrpcProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#timeouts GoogleComputeTargetGrpcProxy#timeouts}

---

##### `urlMap`<sup>Optional</sup> <a name="urlMap" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.urlMap"></a>

- *Type:* java.lang.String

URL to the UrlMap resource that defines the mapping from URL to the BackendService.

The protocol field in the BackendService
must be set to GRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#url_map GoogleComputeTargetGrpcProxy#url_map}

---

##### `validateForProxyless`<sup>Optional</sup> <a name="validateForProxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.Initializer.parameter.validateForProxyless"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy.

This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#validate_for_proxyless GoogleComputeTargetGrpcProxy#validate_for_proxyless}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetUrlMap">resetUrlMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetValidateForProxyless">resetValidateForProxyless</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeTargetGrpcProxyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUrlMap` <a name="resetUrlMap" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetUrlMap"></a>

```java
public void resetUrlMap()
```

##### `resetValidateForProxyless` <a name="resetValidateForProxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.resetValidateForProxyless"></a>

```java
public void resetValidateForProxyless()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_grpc_proxy.GoogleComputeTargetGrpcProxy;

GoogleComputeTargetGrpcProxy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_grpc_proxy.GoogleComputeTargetGrpcProxy;

GoogleComputeTargetGrpcProxy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_grpc_proxy.GoogleComputeTargetGrpcProxy;

GoogleComputeTargetGrpcProxy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLinkWithId">selfLinkWithId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference">GoogleComputeTargetGrpcProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMapInput">urlMapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxylessInput">validateForProxylessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxyless">validateForProxyless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.selfLinkWithId"></a>

```java
public java.lang.String getSelfLinkWithId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeouts"></a>

```java
public GoogleComputeTargetGrpcProxyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference">GoogleComputeTargetGrpcProxyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `urlMapInput`<sup>Optional</sup> <a name="urlMapInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMapInput"></a>

```java
public java.lang.String getUrlMapInput();
```

- *Type:* java.lang.String

---

##### `validateForProxylessInput`<sup>Optional</sup> <a name="validateForProxylessInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxylessInput"></a>

```java
public java.lang.Object getValidateForProxylessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

---

##### `validateForProxyless`<sup>Required</sup> <a name="validateForProxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.validateForProxyless"></a>

```java
public java.lang.Object getValidateForProxyless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeTargetGrpcProxyConfig <a name="GoogleComputeTargetGrpcProxyConfig" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_grpc_proxy.GoogleComputeTargetGrpcProxyConfig;

GoogleComputeTargetGrpcProxyConfig.builder()
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeTargetGrpcProxyTimeouts)
//  .urlMap(java.lang.String)
//  .validateForProxyless(java.lang.Boolean)
//  .validateForProxyless(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | URL to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.validateForProxyless">validateForProxyless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#name GoogleComputeTargetGrpcProxy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#description GoogleComputeTargetGrpcProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#id GoogleComputeTargetGrpcProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#project GoogleComputeTargetGrpcProxy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.timeouts"></a>

```java
public GoogleComputeTargetGrpcProxyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#timeouts GoogleComputeTargetGrpcProxy#timeouts}

---

##### `urlMap`<sup>Optional</sup> <a name="urlMap" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

URL to the UrlMap resource that defines the mapping from URL to the BackendService.

The protocol field in the BackendService
must be set to GRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#url_map GoogleComputeTargetGrpcProxy#url_map}

---

##### `validateForProxyless`<sup>Optional</sup> <a name="validateForProxyless" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyConfig.property.validateForProxyless"></a>

```java
public java.lang.Object getValidateForProxyless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy.

This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#validate_for_proxyless GoogleComputeTargetGrpcProxy#validate_for_proxyless}

---

### GoogleComputeTargetGrpcProxyTimeouts <a name="GoogleComputeTargetGrpcProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_grpc_proxy.GoogleComputeTargetGrpcProxyTimeouts;

GoogleComputeTargetGrpcProxyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#create GoogleComputeTargetGrpcProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#delete GoogleComputeTargetGrpcProxy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#update GoogleComputeTargetGrpcProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#create GoogleComputeTargetGrpcProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#delete GoogleComputeTargetGrpcProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_compute_target_grpc_proxy#update GoogleComputeTargetGrpcProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeTargetGrpcProxyTimeoutsOutputReference <a name="GoogleComputeTargetGrpcProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_target_grpc_proxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference;

new GoogleComputeTargetGrpcProxyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeTargetGrpcProxy.GoogleComputeTargetGrpcProxyTimeouts">GoogleComputeTargetGrpcProxyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



