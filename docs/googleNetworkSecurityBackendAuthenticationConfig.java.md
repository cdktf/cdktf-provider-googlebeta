# `googleNetworkSecurityBackendAuthenticationConfig` Submodule <a name="`googleNetworkSecurityBackendAuthenticationConfig` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config google_network_security_backend_authentication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfig;

GoogleNetworkSecurityBackendAuthenticationConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .clientCertificate(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityBackendAuthenticationConfigTimeouts)
//  .trustConfig(java.lang.String)
//  .wellKnownRoots(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.wellKnownRoots">wellKnownRoots</a></code> | <code>java.lang.String</code> | Well known roots to use for server certificate validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#name GoogleNetworkSecurityBackendAuthenticationConfig#name}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#client_certificate GoogleNetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#description GoogleNetworkSecurityBackendAuthenticationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#labels GoogleNetworkSecurityBackendAuthenticationConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#location GoogleNetworkSecurityBackendAuthenticationConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#timeouts GoogleNetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.trustConfig"></a>

- *Type:* java.lang.String

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#trust_config GoogleNetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `wellKnownRoots`<sup>Optional</sup> <a name="wellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.Initializer.parameter.wellKnownRoots"></a>

- *Type:* java.lang.String

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#well_known_roots GoogleNetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots">resetWellKnownRoots</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityBackendAuthenticationConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetTrustConfig"></a>

```java
public void resetTrustConfig()
```

##### `resetWellKnownRoots` <a name="resetWellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots"></a>

```java
public void resetWellKnownRoots()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfig;

GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfig;

GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfig;

GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfig;

GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityBackendAuthenticationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityBackendAuthenticationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityBackendAuthenticationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput">trustConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput">wellKnownRootsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots">wellKnownRoots</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfigInput"></a>

```java
public java.lang.String getTrustConfigInput();
```

- *Type:* java.lang.String

---

##### `wellKnownRootsInput`<sup>Optional</sup> <a name="wellKnownRootsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput"></a>

```java
public java.lang.String getWellKnownRootsInput();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

---

##### `wellKnownRoots`<sup>Required</sup> <a name="wellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots"></a>

```java
public java.lang.String getWellKnownRoots();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigConfig <a name="GoogleNetworkSecurityBackendAuthenticationConfigConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfigConfig;

GoogleNetworkSecurityBackendAuthenticationConfigConfig.builder()
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
//  .clientCertificate(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityBackendAuthenticationConfigTimeouts)
//  .trustConfig(java.lang.String)
//  .wellKnownRoots(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig">trustConfig</a></code> | <code>java.lang.String</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots">wellKnownRoots</a></code> | <code>java.lang.String</code> | Well known roots to use for server certificate validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#name GoogleNetworkSecurityBackendAuthenticationConfig#name}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#client_certificate GoogleNetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#description GoogleNetworkSecurityBackendAuthenticationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#id GoogleNetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#labels GoogleNetworkSecurityBackendAuthenticationConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#location GoogleNetworkSecurityBackendAuthenticationConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#project GoogleNetworkSecurityBackendAuthenticationConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityBackendAuthenticationConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#timeouts GoogleNetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig"></a>

```java
public java.lang.String getTrustConfig();
```

- *Type:* java.lang.String

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#trust_config GoogleNetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `wellKnownRoots`<sup>Optional</sup> <a name="wellKnownRoots" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots"></a>

```java
public java.lang.String getWellKnownRoots();
```

- *Type:* java.lang.String

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#well_known_roots GoogleNetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

### GoogleNetworkSecurityBackendAuthenticationConfigTimeouts <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts;

GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#create GoogleNetworkSecurityBackendAuthenticationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#delete GoogleNetworkSecurityBackendAuthenticationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_backend_authentication_config#update GoogleNetworkSecurityBackendAuthenticationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference <a name="GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_backend_authentication_config.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference;

new GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityBackendAuthenticationConfig.GoogleNetworkSecurityBackendAuthenticationConfigTimeouts">GoogleNetworkSecurityBackendAuthenticationConfigTimeouts</a>

---



