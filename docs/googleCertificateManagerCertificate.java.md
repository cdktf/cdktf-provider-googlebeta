# `googleCertificateManagerCertificate` Submodule <a name="`googleCertificateManagerCertificate` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificate <a name="GoogleCertificateManagerCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate google_certificate_manager_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificate;

GoogleCertificateManagerCertificate.Builder.create(Construct scope, java.lang.String id)
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
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .managed(GoogleCertificateManagerCertificateManaged)
//  .project(java.lang.String)
//  .scope(java.lang.String)
//  .selfManaged(GoogleCertificateManagerCertificateSelfManaged)
//  .timeouts(GoogleCertificateManagerCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#id GoogleCertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.managed">managed</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#project GoogleCertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#name GoogleCertificateManagerCertificate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#description GoogleCertificateManagerCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#id GoogleCertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#labels GoogleCertificateManagerCertificate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#location GoogleCertificateManagerCertificate#location}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.managed"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#managed GoogleCertificateManagerCertificate#managed}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#project GoogleCertificateManagerCertificate#project}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#scope GoogleCertificateManagerCertificate#scope}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#self_managed GoogleCertificateManagerCertificate#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#timeouts GoogleCertificateManagerCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putManaged">putManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManaged` <a name="putManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putManaged"></a>

```java
public void putManaged(GoogleCertificateManagerCertificateManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

---

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putSelfManaged"></a>

```java
public void putSelfManaged(GoogleCertificateManagerCertificateSelfManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putTimeouts"></a>

```java
public void putTimeouts(GoogleCertificateManagerCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetManaged"></a>

```java
public void resetManaged()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetProject"></a>

```java
public void resetProject()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetScope"></a>

```java
public void resetScope()
```

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetSelfManaged"></a>

```java
public void resetSelfManaged()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificate;

GoogleCertificateManagerCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificate;

GoogleCertificateManagerCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificate;

GoogleCertificateManagerCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificate;

GoogleCertificateManagerCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCertificateManagerCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleCertificateManagerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCertificateManagerCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCertificateManagerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference">GoogleCertificateManagerCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.sanDnsnames">sanDnsnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference">GoogleCertificateManagerCertificateSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference">GoogleCertificateManagerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managedInput">managedInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManagedInput">selfManagedInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managed"></a>

```java
public GoogleCertificateManagerCertificateManagedOutputReference getManaged();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference">GoogleCertificateManagerCertificateManagedOutputReference</a>

---

##### `sanDnsnames`<sup>Required</sup> <a name="sanDnsnames" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.sanDnsnames"></a>

```java
public java.util.List<java.lang.String> getSanDnsnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManaged"></a>

```java
public GoogleCertificateManagerCertificateSelfManagedOutputReference getSelfManaged();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference">GoogleCertificateManagerCertificateSelfManagedOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeouts"></a>

```java
public GoogleCertificateManagerCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference">GoogleCertificateManagerCertificateTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.managedInput"></a>

```java
public GoogleCertificateManagerCertificateManaged getManagedInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.selfManagedInput"></a>

```java
public GoogleCertificateManagerCertificateSelfManaged getSelfManagedInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateConfig <a name="GoogleCertificateManagerCertificateConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateConfig;

GoogleCertificateManagerCertificateConfig.builder()
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
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .managed(GoogleCertificateManagerCertificateManaged)
//  .project(java.lang.String)
//  .scope(java.lang.String)
//  .selfManaged(GoogleCertificateManagerCertificateSelfManaged)
//  .timeouts(GoogleCertificateManagerCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#id GoogleCertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#project GoogleCertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#name GoogleCertificateManagerCertificate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#description GoogleCertificateManagerCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#id GoogleCertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#labels GoogleCertificateManagerCertificate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#location GoogleCertificateManagerCertificate#location}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.managed"></a>

```java
public GoogleCertificateManagerCertificateManaged getManaged();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#managed GoogleCertificateManagerCertificate#managed}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#project GoogleCertificateManagerCertificate#project}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#scope GoogleCertificateManagerCertificate#scope}

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.selfManaged"></a>

```java
public GoogleCertificateManagerCertificateSelfManaged getSelfManaged();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#self_managed GoogleCertificateManagerCertificate#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateConfig.property.timeouts"></a>

```java
public GoogleCertificateManagerCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#timeouts GoogleCertificateManagerCertificate#timeouts}

---

### GoogleCertificateManagerCertificateManaged <a name="GoogleCertificateManagerCertificateManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManaged;

GoogleCertificateManagerCertificateManaged.builder()
//  .dnsAuthorizations(java.util.List<java.lang.String>)
//  .domains(java.util.List<java.lang.String>)
//  .issuanceConfig(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>java.util.List<java.lang.String></code> | Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.issuanceConfig">issuanceConfig</a></code> | <code>java.lang.String</code> | The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*. |

---

##### `dnsAuthorizations`<sup>Optional</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.dnsAuthorizations"></a>

```java
public java.util.List<java.lang.String> getDnsAuthorizations();
```

- *Type:* java.util.List<java.lang.String>

Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#dns_authorizations GoogleCertificateManagerCertificate#dns_authorizations}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#domains GoogleCertificateManagerCertificate#domains}

---

##### `issuanceConfig`<sup>Optional</sup> <a name="issuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged.property.issuanceConfig"></a>

```java
public java.lang.String getIssuanceConfig();
```

- *Type:* java.lang.String

The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*.

If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#issuance_config GoogleCertificateManagerCertificate#issuance_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo <a name="GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo;

GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo.builder()
    .build();
```


### GoogleCertificateManagerCertificateManagedProvisioningIssue <a name="GoogleCertificateManagerCertificateManagedProvisioningIssue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManagedProvisioningIssue;

GoogleCertificateManagerCertificateManagedProvisioningIssue.builder()
    .build();
```


### GoogleCertificateManagerCertificateSelfManaged <a name="GoogleCertificateManagerCertificateSelfManaged" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateSelfManaged;

GoogleCertificateManagerCertificateSelfManaged.builder()
//  .certificatePem(java.lang.String)
//  .pemCertificate(java.lang.String)
//  .pemPrivateKey(java.lang.String)
//  .privateKeyPem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemPrivateKey">pemPrivateKey</a></code> | <code>java.lang.String</code> | The private key of the leaf certificate in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | The private key of the leaf certificate in PEM-encoded form. |

---

##### `certificatePem`<sup>Optional</sup> <a name="certificatePem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#certificate_pem GoogleCertificateManagerCertificate#certificate_pem}

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#pem_certificate GoogleCertificateManagerCertificate#pem_certificate}

---

##### `pemPrivateKey`<sup>Optional</sup> <a name="pemPrivateKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.pemPrivateKey"></a>

```java
public java.lang.String getPemPrivateKey();
```

- *Type:* java.lang.String

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#pem_private_key GoogleCertificateManagerCertificate#pem_private_key}

---

##### `privateKeyPem`<sup>Optional</sup> <a name="privateKeyPem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#private_key_pem GoogleCertificateManagerCertificate#private_key_pem}

---

### GoogleCertificateManagerCertificateTimeouts <a name="GoogleCertificateManagerCertificateTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateTimeouts;

GoogleCertificateManagerCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#create GoogleCertificateManagerCertificate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#delete GoogleCertificateManagerCertificate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#update GoogleCertificateManagerCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#create GoogleCertificateManagerCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#delete GoogleCertificateManagerCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_certificate_manager_certificate#update GoogleCertificateManagerCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList <a name="GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList;

new GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.get"></a>

```java
public GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference <a name="GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference;

new GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```java
public GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfo</a>

---


### GoogleCertificateManagerCertificateManagedOutputReference <a name="GoogleCertificateManagerCertificateManagedOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManagedOutputReference;

new GoogleCertificateManagerCertificateManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations">resetDnsAuthorizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetIssuanceConfig">resetIssuanceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsAuthorizations` <a name="resetDnsAuthorizations" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations"></a>

```java
public void resetDnsAuthorizations()
```

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetIssuanceConfig` <a name="resetIssuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.resetIssuanceConfig"></a>

```java
public void resetIssuanceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo">authorizationAttemptInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.provisioningIssue">provisioningIssue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList">GoogleCertificateManagerCertificateManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput">dnsAuthorizationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput">issuanceConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations">dnsAuthorizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfig">issuanceConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationAttemptInfo`<sup>Required</sup> <a name="authorizationAttemptInfo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo"></a>

```java
public GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList getAuthorizationAttemptInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList">GoogleCertificateManagerCertificateManagedAuthorizationAttemptInfoList</a>

---

##### `provisioningIssue`<sup>Required</sup> <a name="provisioningIssue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.provisioningIssue"></a>

```java
public GoogleCertificateManagerCertificateManagedProvisioningIssueList getProvisioningIssue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList">GoogleCertificateManagerCertificateManagedProvisioningIssueList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `dnsAuthorizationsInput`<sup>Optional</sup> <a name="dnsAuthorizationsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput"></a>

```java
public java.util.List<java.lang.String> getDnsAuthorizationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuanceConfigInput`<sup>Optional</sup> <a name="issuanceConfigInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput"></a>

```java
public java.lang.String getIssuanceConfigInput();
```

- *Type:* java.lang.String

---

##### `dnsAuthorizations`<sup>Required</sup> <a name="dnsAuthorizations" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations"></a>

```java
public java.util.List<java.lang.String> getDnsAuthorizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuanceConfig`<sup>Required</sup> <a name="issuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.issuanceConfig"></a>

```java
public java.lang.String getIssuanceConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedOutputReference.property.internalValue"></a>

```java
public GoogleCertificateManagerCertificateManaged getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManaged">GoogleCertificateManagerCertificateManaged</a>

---


### GoogleCertificateManagerCertificateManagedProvisioningIssueList <a name="GoogleCertificateManagerCertificateManagedProvisioningIssueList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList;

new GoogleCertificateManagerCertificateManagedProvisioningIssueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.get"></a>

```java
public GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference <a name="GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference;

new GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details">details</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue">GoogleCertificateManagerCertificateManagedProvisioningIssue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details"></a>

```java
public java.lang.String getDetails();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue"></a>

```java
public GoogleCertificateManagerCertificateManagedProvisioningIssue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateManagedProvisioningIssue">GoogleCertificateManagerCertificateManagedProvisioningIssue</a>

---


### GoogleCertificateManagerCertificateSelfManagedOutputReference <a name="GoogleCertificateManagerCertificateSelfManagedOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateSelfManagedOutputReference;

new GoogleCertificateManagerCertificateSelfManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem">resetCertificatePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey">resetPemPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem">resetPrivateKeyPem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificatePem` <a name="resetCertificatePem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem"></a>

```java
public void resetCertificatePem()
```

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```

##### `resetPemPrivateKey` <a name="resetPemPrivateKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey"></a>

```java
public void resetPemPrivateKey()
```

##### `resetPrivateKeyPem` <a name="resetPrivateKeyPem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem"></a>

```java
public void resetPrivateKeyPem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput">certificatePemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput">pemPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput">privateKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey">pemPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificatePemInput`<sup>Optional</sup> <a name="certificatePemInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput"></a>

```java
public java.lang.String getCertificatePemInput();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemPrivateKeyInput`<sup>Optional</sup> <a name="pemPrivateKeyInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput"></a>

```java
public java.lang.String getPemPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="privateKeyPemInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput"></a>

```java
public java.lang.String getPrivateKeyPemInput();
```

- *Type:* java.lang.String

---

##### `certificatePem`<sup>Required</sup> <a name="certificatePem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `pemPrivateKey`<sup>Required</sup> <a name="pemPrivateKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey"></a>

```java
public java.lang.String getPemPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManagedOutputReference.property.internalValue"></a>

```java
public GoogleCertificateManagerCertificateSelfManaged getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateSelfManaged">GoogleCertificateManagerCertificateSelfManaged</a>

---


### GoogleCertificateManagerCertificateTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_certificate.GoogleCertificateManagerCertificateTimeoutsOutputReference;

new GoogleCertificateManagerCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificate.GoogleCertificateManagerCertificateTimeouts">GoogleCertificateManagerCertificateTimeouts</a>

---



