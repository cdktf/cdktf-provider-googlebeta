# `googleComputeBackendBucket` Submodule <a name="`googleComputeBackendBucket` Submodule" id="@cdktf/provider-google-beta.googleComputeBackendBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendBucket <a name="GoogleComputeBackendBucket" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket google_compute_backend_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucket;

GoogleComputeBackendBucket.Builder.create(Construct scope, java.lang.String id)
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
    .bucketName(java.lang.String)
    .name(java.lang.String)
//  .cdnPolicy(GoogleComputeBackendBucketCdnPolicy)
//  .compressionMode(java.lang.String)
//  .customResponseHeaders(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeSecurityPolicy(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeBackendBucketTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource; provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendBucket. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#id GoogleComputeBackendBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#project GoogleComputeBackendBucket#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#bucket_name GoogleComputeBackendBucket#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#name GoogleComputeBackendBucket#name}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.cdnPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#cdn_policy GoogleComputeBackendBucket#cdn_policy}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.compressionMode"></a>

- *Type:* java.lang.String

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#compression_mode GoogleComputeBackendBucket#compression_mode}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.customResponseHeaders"></a>

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#custom_response_headers GoogleComputeBackendBucket#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional textual description of the resource; provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#description GoogleComputeBackendBucket#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.edgeSecurityPolicy"></a>

- *Type:* java.lang.String

The security policy associated with this backend bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#edge_security_policy GoogleComputeBackendBucket#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.enableCdn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this BackendBucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#enable_cdn GoogleComputeBackendBucket#enable_cdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#id GoogleComputeBackendBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#project GoogleComputeBackendBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#timeouts GoogleComputeBackendBucket#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCustomResponseHeaders">resetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putCdnPolicy"></a>

```java
public void putCdnPolicy(GoogleComputeBackendBucketCdnPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeBackendBucketTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

---

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCdnPolicy"></a>

```java
public void resetCdnPolicy()
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCompressionMode"></a>

```java
public void resetCompressionMode()
```

##### `resetCustomResponseHeaders` <a name="resetCustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCustomResponseHeaders"></a>

```java
public void resetCustomResponseHeaders()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEdgeSecurityPolicy"></a>

```java
public void resetEdgeSecurityPolicy()
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEnableCdn"></a>

```java
public void resetEnableCdn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeBackendBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucket;

GoogleComputeBackendBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucket;

GoogleComputeBackendBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucket;

GoogleComputeBackendBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucket;

GoogleComputeBackendBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeBackendBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeBackendBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeBackendBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeBackendBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference">GoogleComputeBackendBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionModeInput">compressionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeadersInput">customResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdnInput">enableCdnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicy"></a>

```java
public GoogleComputeBackendBucketCdnPolicyOutputReference getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeouts"></a>

```java
public GoogleComputeBackendBucketTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference">GoogleComputeBackendBucketTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicyInput"></a>

```java
public GoogleComputeBackendBucketCdnPolicy getCdnPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionModeInput"></a>

```java
public java.lang.String getCompressionModeInput();
```

- *Type:* java.lang.String

---

##### `customResponseHeadersInput`<sup>Optional</sup> <a name="customResponseHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicyInput"></a>

```java
public java.lang.String getEdgeSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdnInput"></a>

```java
public java.lang.Object getEnableCdnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

---

##### `customResponseHeaders`<sup>Required</sup> <a name="customResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendBucketCdnPolicy <a name="GoogleComputeBackendBucketCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicy;

GoogleComputeBackendBucketCdnPolicy.builder()
//  .bypassCacheOnRequestHeaders(IResolvable)
//  .bypassCacheOnRequestHeaders(java.util.List<GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders>)
//  .cacheKeyPolicy(GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy)
//  .cacheMode(java.lang.String)
//  .clientTtl(java.lang.Number)
//  .defaultTtl(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .negativeCaching(java.lang.Boolean)
//  .negativeCaching(IResolvable)
//  .negativeCachingPolicy(IResolvable)
//  .negativeCachingPolicy(java.util.List<GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy>)
//  .requestCoalescing(java.lang.Boolean)
//  .requestCoalescing(IResolvable)
//  .serveWhileStale(java.lang.Number)
//  .signedUrlCacheMaxAgeSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>></code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>></code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.requestCoalescing">requestCoalescing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh. |

---

##### `bypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```java
public java.lang.Object getBypassCacheOnRequestHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>>

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#bypass_cache_on_request_headers GoogleComputeBackendBucket#bypass_cache_on_request_headers}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheKeyPolicy"></a>

```java
public GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#cache_key_policy GoogleComputeBackendBucket#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#cache_mode GoogleComputeBackendBucket#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#client_ttl GoogleComputeBackendBucket#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#default_ttl GoogleComputeBackendBucket#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#max_ttl GoogleComputeBackendBucket#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#negative_caching GoogleComputeBackendBucket#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCachingPolicy"></a>

```java
public java.lang.Object getNegativeCachingPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>>

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#negative_caching_policy GoogleComputeBackendBucket#negative_caching_policy}

---

##### `requestCoalescing`<sup>Optional</sup> <a name="requestCoalescing" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.requestCoalescing"></a>

```java
public java.lang.Object getRequestCoalescing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#request_coalescing GoogleComputeBackendBucket#request_coalescing}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#serve_while_stale GoogleComputeBackendBucket#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

Maximum number of seconds the response to a signed URL request will be considered fresh.

After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#signed_url_cache_max_age_sec GoogleComputeBackendBucket#signed_url_cache_max_age_sec}

---

### GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders <a name="GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders;

GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.builder()
//  .headerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#header_name GoogleComputeBackendBucket#header_name}

---

### GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy <a name="GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy;

GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.builder()
//  .includeHttpHeaders(java.util.List<java.lang.String>)
//  .queryStringWhitelist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to include in cache keys. |

---

##### `includeHttpHeaders`<sup>Optional</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#include_http_headers GoogleComputeBackendBucket#include_http_headers}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to include in cache keys.

Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#query_string_whitelist GoogleComputeBackendBucket#query_string_whitelist}

---

### GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy <a name="GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy;

GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.builder()
//  .code(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>java.lang.Number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#code GoogleComputeBackendBucket#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#ttl GoogleComputeBackendBucket#ttl}

---

### GoogleComputeBackendBucketConfig <a name="GoogleComputeBackendBucketConfig" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketConfig;

GoogleComputeBackendBucketConfig.builder()
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
    .bucketName(java.lang.String)
    .name(java.lang.String)
//  .cdnPolicy(GoogleComputeBackendBucketCdnPolicy)
//  .compressionMode(java.lang.String)
//  .customResponseHeaders(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeSecurityPolicy(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleComputeBackendBucketTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource; provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendBucket. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#id GoogleComputeBackendBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#project GoogleComputeBackendBucket#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#bucket_name GoogleComputeBackendBucket#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#name GoogleComputeBackendBucket#name}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.cdnPolicy"></a>

```java
public GoogleComputeBackendBucketCdnPolicy getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#cdn_policy GoogleComputeBackendBucket#cdn_policy}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#compression_mode GoogleComputeBackendBucket#compression_mode}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.customResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#custom_response_headers GoogleComputeBackendBucket#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional textual description of the resource; provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#description GoogleComputeBackendBucket#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

The security policy associated with this backend bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#edge_security_policy GoogleComputeBackendBucket#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this BackendBucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#enable_cdn GoogleComputeBackendBucket#enable_cdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#id GoogleComputeBackendBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#project GoogleComputeBackendBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.timeouts"></a>

```java
public GoogleComputeBackendBucketTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#timeouts GoogleComputeBackendBucket#timeouts}

---

### GoogleComputeBackendBucketTimeouts <a name="GoogleComputeBackendBucketTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketTimeouts;

GoogleComputeBackendBucketTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#create GoogleComputeBackendBucket#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#delete GoogleComputeBackendBucket#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#update GoogleComputeBackendBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#create GoogleComputeBackendBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#delete GoogleComputeBackendBucket#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_backend_bucket#update GoogleComputeBackendBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList <a name="GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList;

new GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```java
public GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>>

---


### GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference;

new GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName"></a>

```java
public void resetHeaderName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>

---


### GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference;

new GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">resetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHttpHeaders` <a name="resetIncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```java
public void resetIncludeHttpHeaders()
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```java
public void resetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">includeHttpHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeHttpHeadersInput`<sup>Optional</sup> <a name="includeHttpHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeHttpHeaders`<sup>Required</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList;

new GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get"></a>

```java
public GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>>

---


### GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference;

new GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>

---


### GoogleComputeBackendBucketCdnPolicyOutputReference <a name="GoogleComputeBackendBucketCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketCdnPolicyOutputReference;

new GoogleComputeBackendBucketCdnPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">putBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">resetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing">resetRequestCoalescing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassCacheOnRequestHeaders` <a name="putBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```java
public void putBypassCacheOnRequestHeaders(IResolvable OR java.util.List<GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>>

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```java
public void putCacheKeyPolicy(GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```java
public void putNegativeCachingPolicy(IResolvable OR java.util.List<GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>>

---

##### `resetBypassCacheOnRequestHeaders` <a name="resetBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```java
public void resetBypassCacheOnRequestHeaders()
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```java
public void resetCacheKeyPolicy()
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheMode"></a>

```java
public void resetCacheMode()
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetClientTtl"></a>

```java
public void resetClientTtl()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching"></a>

```java
public void resetNegativeCaching()
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```java
public void resetNegativeCachingPolicy()
```

##### `resetRequestCoalescing` <a name="resetRequestCoalescing" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing"></a>

```java
public void resetRequestCoalescing()
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale"></a>

```java
public void resetServeWhileStale()
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```java
public void resetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypassCacheOnRequestHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput">requestCoalescingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing">requestCoalescing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassCacheOnRequestHeaders`<sup>Required</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```java
public GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList getBypassCacheOnRequestHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```java
public GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```java
public GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList getNegativeCachingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="bypassCacheOnRequestHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```java
public java.lang.Object getBypassCacheOnRequestHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>>

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```java
public GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy getCacheKeyPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput"></a>

```java
public java.lang.String getCacheModeInput();
```

- *Type:* java.lang.String

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput"></a>

```java
public java.lang.Number getClientTtlInput();
```

- *Type:* java.lang.Number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput"></a>

```java
public java.lang.Object getNegativeCachingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```java
public java.lang.Object getNegativeCachingPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>>

---

##### `requestCoalescingInput`<sup>Optional</sup> <a name="requestCoalescingInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput"></a>

```java
public java.lang.Object getRequestCoalescingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```java
public java.lang.Number getServeWhileStaleInput();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSecInput();
```

- *Type:* java.lang.Number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requestCoalescing`<sup>Required</sup> <a name="requestCoalescing" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing"></a>

```java
public java.lang.Object getRequestCoalescing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.internalValue"></a>

```java
public GoogleComputeBackendBucketCdnPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

---


### GoogleComputeBackendBucketTimeoutsOutputReference <a name="GoogleComputeBackendBucketTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_backend_bucket.GoogleComputeBackendBucketTimeoutsOutputReference;

new GoogleComputeBackendBucketTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

---



