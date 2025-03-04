# `googleComputeRegionSslCertificate` Submodule <a name="`googleComputeRegionSslCertificate` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionSslCertificate <a name="GoogleComputeRegionSslCertificate" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate google_compute_region_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificate;

GoogleComputeRegionSslCertificate.Builder.create(Construct scope, java.lang.String id)
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
    .certificate(java.lang.String)
    .privateKey(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleComputeRegionSslCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | The certificate in PEM format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#id GoogleComputeRegionSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#project GoogleComputeRegionSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created regional ssl certificate should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#certificate GoogleComputeRegionSslCertificate#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#private_key GoogleComputeRegionSslCertificate#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#description GoogleComputeRegionSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#id GoogleComputeRegionSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#name GoogleComputeRegionSslCertificate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#name_prefix GoogleComputeRegionSslCertificate#name_prefix}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#project GoogleComputeRegionSslCertificate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created regional ssl certificate should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#region GoogleComputeRegionSslCertificate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#timeouts GoogleComputeRegionSslCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionSslCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionSslCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificate;

GoogleComputeRegionSslCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificate;

GoogleComputeRegionSslCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificate;

GoogleComputeRegionSslCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificate;

GoogleComputeRegionSslCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionSslCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeRegionSslCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionSslCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionSslCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionSslCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.certificateId">certificateId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference">GoogleComputeRegionSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.certificateId"></a>

```java
public java.lang.Number getCertificateId();
```

- *Type:* java.lang.Number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.timeouts"></a>

```java
public GoogleComputeRegionSslCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference">GoogleComputeRegionSslCertificateTimeoutsOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionSslCertificateConfig <a name="GoogleComputeRegionSslCertificateConfig" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificateConfig;

GoogleComputeRegionSslCertificateConfig.builder()
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
    .certificate(java.lang.String)
    .privateKey(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleComputeRegionSslCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | The certificate in PEM format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#id GoogleComputeRegionSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#project GoogleComputeRegionSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created regional ssl certificate should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#certificate GoogleComputeRegionSslCertificate#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#private_key GoogleComputeRegionSslCertificate#private_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#description GoogleComputeRegionSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#id GoogleComputeRegionSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.name"></a>

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

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#name GoogleComputeRegionSslCertificate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#name_prefix GoogleComputeRegionSslCertificate#name_prefix}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#project GoogleComputeRegionSslCertificate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created regional ssl certificate should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#region GoogleComputeRegionSslCertificate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateConfig.property.timeouts"></a>

```java
public GoogleComputeRegionSslCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#timeouts GoogleComputeRegionSslCertificate#timeouts}

---

### GoogleComputeRegionSslCertificateTimeouts <a name="GoogleComputeRegionSslCertificateTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificateTimeouts;

GoogleComputeRegionSslCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#create GoogleComputeRegionSslCertificate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#delete GoogleComputeRegionSslCertificate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#create GoogleComputeRegionSslCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_ssl_certificate#delete GoogleComputeRegionSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionSslCertificateTimeoutsOutputReference <a name="GoogleComputeRegionSslCertificateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_region_ssl_certificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference;

new GoogleComputeRegionSslCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRegionSslCertificate.GoogleComputeRegionSslCertificateTimeouts">GoogleComputeRegionSslCertificateTimeouts</a>

---



