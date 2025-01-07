# `googleCertificateManagerTrustConfig` Submodule <a name="`googleCertificateManagerTrustConfig` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerTrustConfig <a name="GoogleCertificateManagerTrustConfig" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config google_certificate_manager_trust_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfig;

GoogleCertificateManagerTrustConfig.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .allowlistedCertificates(IResolvable)
//  .allowlistedCertificates(java.util.List<GoogleCertificateManagerTrustConfigAllowlistedCertificates>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleCertificateManagerTrustConfigTimeouts)
//  .trustStores(IResolvable)
//  .trustStores(java.util.List<GoogleCertificateManagerTrustConfigTrustStores>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates">allowlistedCertificates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>></code> | allowlisted_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.trustStores">trustStores</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>></code> | trust_stores block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#location GoogleCertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#name GoogleCertificateManagerTrustConfig#name}

---

##### `allowlistedCertificates`<sup>Optional</sup> <a name="allowlistedCertificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>>

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#allowlisted_certificates GoogleCertificateManagerTrustConfig#allowlisted_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#description GoogleCertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#labels GoogleCertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#timeouts GoogleCertificateManagerTrustConfig#timeouts}

---

##### `trustStores`<sup>Optional</sup> <a name="trustStores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.trustStores"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>>

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#trust_stores GoogleCertificateManagerTrustConfig#trust_stores}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putAllowlistedCertificates">putAllowlistedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTrustStores">putTrustStores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetAllowlistedCertificates">resetAllowlistedCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTrustStores">resetTrustStores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowlistedCertificates` <a name="putAllowlistedCertificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putAllowlistedCertificates"></a>

```java
public void putAllowlistedCertificates(IResolvable OR java.util.List<GoogleCertificateManagerTrustConfigAllowlistedCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putAllowlistedCertificates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleCertificateManagerTrustConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>

---

##### `putTrustStores` <a name="putTrustStores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTrustStores"></a>

```java
public void putTrustStores(IResolvable OR java.util.List<GoogleCertificateManagerTrustConfigTrustStores> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTrustStores.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>>

---

##### `resetAllowlistedCertificates` <a name="resetAllowlistedCertificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetAllowlistedCertificates"></a>

```java
public void resetAllowlistedCertificates()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustStores` <a name="resetTrustStores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTrustStores"></a>

```java
public void resetTrustStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfig;

GoogleCertificateManagerTrustConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfig;

GoogleCertificateManagerTrustConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfig;

GoogleCertificateManagerTrustConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfig;

GoogleCertificateManagerTrustConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCertificateManagerTrustConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleCertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCertificateManagerTrustConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCertificateManagerTrustConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerTrustConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificates">allowlistedCertificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList">GoogleCertificateManagerTrustConfigAllowlistedCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference">GoogleCertificateManagerTrustConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStores">trustStores</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList">GoogleCertificateManagerTrustConfigTrustStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificatesInput">allowlistedCertificatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStoresInput">trustStoresInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowlistedCertificates`<sup>Required</sup> <a name="allowlistedCertificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificates"></a>

```java
public GoogleCertificateManagerTrustConfigAllowlistedCertificatesList getAllowlistedCertificates();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList">GoogleCertificateManagerTrustConfigAllowlistedCertificatesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeouts"></a>

```java
public GoogleCertificateManagerTrustConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference">GoogleCertificateManagerTrustConfigTimeoutsOutputReference</a>

---

##### `trustStores`<sup>Required</sup> <a name="trustStores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStores"></a>

```java
public GoogleCertificateManagerTrustConfigTrustStoresList getTrustStores();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList">GoogleCertificateManagerTrustConfigTrustStoresList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `allowlistedCertificatesInput`<sup>Optional</sup> <a name="allowlistedCertificatesInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificatesInput"></a>

```java
public java.lang.Object getAllowlistedCertificatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>

---

##### `trustStoresInput`<sup>Optional</sup> <a name="trustStoresInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStoresInput"></a>

```java
public java.lang.Object getTrustStoresInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerTrustConfigAllowlistedCertificates <a name="GoogleCertificateManagerTrustConfigAllowlistedCertificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigAllowlistedCertificates;

GoogleCertificateManagerTrustConfigAllowlistedCertificates.builder()
    .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM certificate that is allowlisted. |

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM certificate that is allowlisted.

The certificate can be up to 5k bytes, and must be a parseable X.509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#pem_certificate GoogleCertificateManagerTrustConfig#pem_certificate}

---

### GoogleCertificateManagerTrustConfigConfig <a name="GoogleCertificateManagerTrustConfigConfig" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigConfig;

GoogleCertificateManagerTrustConfigConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
//  .allowlistedCertificates(IResolvable)
//  .allowlistedCertificates(java.util.List<GoogleCertificateManagerTrustConfigAllowlistedCertificates>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleCertificateManagerTrustConfigTimeouts)
//  .trustStores(IResolvable)
//  .trustStores(java.util.List<GoogleCertificateManagerTrustConfigTrustStores>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.allowlistedCertificates">allowlistedCertificates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>></code> | allowlisted_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.trustStores">trustStores</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>></code> | trust_stores block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#location GoogleCertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#name GoogleCertificateManagerTrustConfig#name}

---

##### `allowlistedCertificates`<sup>Optional</sup> <a name="allowlistedCertificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.allowlistedCertificates"></a>

```java
public java.lang.Object getAllowlistedCertificates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>>

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#allowlisted_certificates GoogleCertificateManagerTrustConfig#allowlisted_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#description GoogleCertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#labels GoogleCertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.timeouts"></a>

```java
public GoogleCertificateManagerTrustConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#timeouts GoogleCertificateManagerTrustConfig#timeouts}

---

##### `trustStores`<sup>Optional</sup> <a name="trustStores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.trustStores"></a>

```java
public java.lang.Object getTrustStores();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>>

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#trust_stores GoogleCertificateManagerTrustConfig#trust_stores}

---

### GoogleCertificateManagerTrustConfigTimeouts <a name="GoogleCertificateManagerTrustConfigTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTimeouts;

GoogleCertificateManagerTrustConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#create GoogleCertificateManagerTrustConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#delete GoogleCertificateManagerTrustConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#update GoogleCertificateManagerTrustConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#create GoogleCertificateManagerTrustConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#delete GoogleCertificateManagerTrustConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#update GoogleCertificateManagerTrustConfig#update}.

---

### GoogleCertificateManagerTrustConfigTrustStores <a name="GoogleCertificateManagerTrustConfigTrustStores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStores;

GoogleCertificateManagerTrustConfigTrustStores.builder()
//  .intermediateCas(IResolvable)
//  .intermediateCas(java.util.List<GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas>)
//  .trustAnchors(IResolvable)
//  .trustAnchors(java.util.List<GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.intermediateCas">intermediateCas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>></code> | intermediate_cas block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.trustAnchors">trustAnchors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>></code> | trust_anchors block. |

---

##### `intermediateCas`<sup>Optional</sup> <a name="intermediateCas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.intermediateCas"></a>

```java
public java.lang.Object getIntermediateCas();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#intermediate_cas GoogleCertificateManagerTrustConfig#intermediate_cas}

---

##### `trustAnchors`<sup>Optional</sup> <a name="trustAnchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.trustAnchors"></a>

```java
public java.lang.Object getTrustAnchors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#trust_anchors GoogleCertificateManagerTrustConfig#trust_anchors}

---

### GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas <a name="GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas;

GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas.builder()
//  .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM intermediate certificate used for building up paths for validation. |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM intermediate certificate used for building up paths for validation.

Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#pem_certificate GoogleCertificateManagerTrustConfig#pem_certificate}

---

### GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors <a name="GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors;

GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors.builder()
//  .pemCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. |

---

##### `pemCertificate`<sup>Optional</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_certificate_manager_trust_config#pem_certificate GoogleCertificateManagerTrustConfig#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerTrustConfigAllowlistedCertificatesList <a name="GoogleCertificateManagerTrustConfigAllowlistedCertificatesList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList;

new GoogleCertificateManagerTrustConfigAllowlistedCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.get"></a>

```java
public GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>>

---


### GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference <a name="GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference;

new GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>

---


### GoogleCertificateManagerTrustConfigTimeoutsOutputReference <a name="GoogleCertificateManagerTrustConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTimeoutsOutputReference;

new GoogleCertificateManagerTrustConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>

---


### GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList <a name="GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList;

new GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.get"></a>

```java
public GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

---


### GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference <a name="GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference;

new GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>

---


### GoogleCertificateManagerTrustConfigTrustStoresList <a name="GoogleCertificateManagerTrustConfigTrustStoresList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresList;

new GoogleCertificateManagerTrustConfigTrustStoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.get"></a>

```java
public GoogleCertificateManagerTrustConfigTrustStoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>>

---


### GoogleCertificateManagerTrustConfigTrustStoresOutputReference <a name="GoogleCertificateManagerTrustConfigTrustStoresOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresOutputReference;

new GoogleCertificateManagerTrustConfigTrustStoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas">putIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors">putTrustAnchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas">resetIntermediateCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors">resetTrustAnchors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntermediateCas` <a name="putIntermediateCas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas"></a>

```java
public void putIntermediateCas(IResolvable OR java.util.List<GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

---

##### `putTrustAnchors` <a name="putTrustAnchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors"></a>

```java
public void putTrustAnchors(IResolvable OR java.util.List<GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

---

##### `resetIntermediateCas` <a name="resetIntermediateCas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas"></a>

```java
public void resetIntermediateCas()
```

##### `resetTrustAnchors` <a name="resetTrustAnchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors"></a>

```java
public void resetTrustAnchors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas">intermediateCas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors">trustAnchors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput">intermediateCasInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput">trustAnchorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intermediateCas`<sup>Required</sup> <a name="intermediateCas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas"></a>

```java
public GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList getIntermediateCas();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList</a>

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors"></a>

```java
public GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList getTrustAnchors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList</a>

---

##### `intermediateCasInput`<sup>Optional</sup> <a name="intermediateCasInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput"></a>

```java
public java.lang.Object getIntermediateCasInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>>

---

##### `trustAnchorsInput`<sup>Optional</sup> <a name="trustAnchorsInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput"></a>

```java
public java.lang.Object getTrustAnchorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>

---


### GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList <a name="GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList;

new GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.get"></a>

```java
public GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>>

---


### GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference <a name="GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_certificate_manager_trust_config.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference;

new GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate">resetPemCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificate` <a name="resetPemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate"></a>

```java
public void resetPemCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput">pemCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificateInput`<sup>Optional</sup> <a name="pemCertificateInput" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```java
public java.lang.String getPemCertificateInput();
```

- *Type:* java.lang.String

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate"></a>

```java
public java.lang.String getPemCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>

---



