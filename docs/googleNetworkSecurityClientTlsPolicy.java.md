# `googleNetworkSecurityClientTlsPolicy` Submodule <a name="`googleNetworkSecurityClientTlsPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityClientTlsPolicy <a name="GoogleNetworkSecurityClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy google_network_security_client_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicy;

GoogleNetworkSecurityClientTlsPolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .clientCertificate(GoogleNetworkSecurityClientTlsPolicyClientCertificate)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .serverValidationCa(IResolvable)
//  .serverValidationCa(java.util.List<GoogleNetworkSecurityClientTlsPolicyServerValidationCa>)
//  .sni(java.lang.String)
//  .timeouts(GoogleNetworkSecurityClientTlsPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the client tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.serverValidationCa">serverValidationCa</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>></code> | server_validation_ca block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.sni">sni</a></code> | <code>java.lang.String</code> | Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the ClientTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#name GoogleNetworkSecurityClientTlsPolicy#name}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.clientCertificate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#client_certificate GoogleNetworkSecurityClientTlsPolicy#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#description GoogleNetworkSecurityClientTlsPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the ClientTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#labels GoogleNetworkSecurityClientTlsPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the client tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#location GoogleNetworkSecurityClientTlsPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}.

---

##### `serverValidationCa`<sup>Optional</sup> <a name="serverValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.serverValidationCa"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>>

server_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#server_validation_ca GoogleNetworkSecurityClientTlsPolicy#server_validation_ca}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.sni"></a>

- *Type:* java.lang.String

Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#sni GoogleNetworkSecurityClientTlsPolicy#sni}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#timeouts GoogleNetworkSecurityClientTlsPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate">putClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa">putServerValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetServerValidationCa">resetServerValidationCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetSni">resetSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientCertificate` <a name="putClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate"></a>

```java
public void putClientCertificate(GoogleNetworkSecurityClientTlsPolicyClientCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---

##### `putServerValidationCa` <a name="putServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa"></a>

```java
public void putServerValidationCa(IResolvable OR java.util.List<GoogleNetworkSecurityClientTlsPolicyServerValidationCa> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityClientTlsPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetServerValidationCa` <a name="resetServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetServerValidationCa"></a>

```java
public void resetServerValidationCa()
```

##### `resetSni` <a name="resetSni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetSni"></a>

```java
public void resetSni()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicy;

GoogleNetworkSecurityClientTlsPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicy;

GoogleNetworkSecurityClientTlsPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicy;

GoogleNetworkSecurityClientTlsPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicy;

GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityClientTlsPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityClientTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityClientTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCa">serverValidationCa</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList">GoogleNetworkSecurityClientTlsPolicyServerValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificateInput">clientCertificateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCaInput">serverValidationCaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sniInput">sniInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sni">sni</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificate"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference getClientCertificate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `serverValidationCa`<sup>Required</sup> <a name="serverValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCa"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaList getServerValidationCa();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList">GoogleNetworkSecurityClientTlsPolicyServerValidationCaList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeouts"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificateInput"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificate getClientCertificateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serverValidationCaInput`<sup>Optional</sup> <a name="serverValidationCaInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCaInput"></a>

```java
public java.lang.Object getServerValidationCaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>>

---

##### `sniInput`<sup>Optional</sup> <a name="sniInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sniInput"></a>

```java
public java.lang.String getSniInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sni"></a>

```java
public java.lang.String getSni();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityClientTlsPolicyClientCertificate <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyClientCertificate;

GoogleNetworkSecurityClientTlsPolicyClientCertificate.builder()
//  .certificateProviderInstance(GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance)
//  .grpcEndpoint(GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificateProviderInstance`<sup>Optional</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance getCertificateProviderInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#certificate_provider_instance GoogleNetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `grpcEndpoint`<sup>Optional</sup> <a name="grpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint getGrpcEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#grpc_endpoint GoogleNetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance;

GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.builder()
    .pluginInstance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance">pluginInstance</a></code> | <code>java.lang.String</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance"></a>

```java
public java.lang.String getPluginInstance();
```

- *Type:* java.lang.String

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint;

GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.builder()
    .targetUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

### GoogleNetworkSecurityClientTlsPolicyConfig <a name="GoogleNetworkSecurityClientTlsPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyConfig;

GoogleNetworkSecurityClientTlsPolicyConfig.builder()
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
//  .clientCertificate(GoogleNetworkSecurityClientTlsPolicyClientCertificate)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .serverValidationCa(IResolvable)
//  .serverValidationCa(java.util.List<GoogleNetworkSecurityClientTlsPolicyServerValidationCa>)
//  .sni(java.lang.String)
//  .timeouts(GoogleNetworkSecurityClientTlsPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the client tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.serverValidationCa">serverValidationCa</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>></code> | server_validation_ca block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.sni">sni</a></code> | <code>java.lang.String</code> | Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the ClientTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#name GoogleNetworkSecurityClientTlsPolicy#name}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.clientCertificate"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificate getClientCertificate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#client_certificate GoogleNetworkSecurityClientTlsPolicy#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#description GoogleNetworkSecurityClientTlsPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the ClientTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#labels GoogleNetworkSecurityClientTlsPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the client tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#location GoogleNetworkSecurityClientTlsPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}.

---

##### `serverValidationCa`<sup>Optional</sup> <a name="serverValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.serverValidationCa"></a>

```java
public java.lang.Object getServerValidationCa();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>>

server_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#server_validation_ca GoogleNetworkSecurityClientTlsPolicy#server_validation_ca}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.sni"></a>

```java
public java.lang.String getSni();
```

- *Type:* java.lang.String

Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#sni GoogleNetworkSecurityClientTlsPolicy#sni}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#timeouts GoogleNetworkSecurityClientTlsPolicy#timeouts}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCa <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa;

GoogleNetworkSecurityClientTlsPolicyServerValidationCa.builder()
//  .certificateProviderInstance(GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance)
//  .grpcEndpoint(GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificateProviderInstance`<sup>Optional</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance getCertificateProviderInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#certificate_provider_instance GoogleNetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `grpcEndpoint`<sup>Optional</sup> <a name="grpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint getGrpcEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#grpc_endpoint GoogleNetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance;

GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.builder()
    .pluginInstance(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance">pluginInstance</a></code> | <code>java.lang.String</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```java
public java.lang.String getPluginInstance();
```

- *Type:* java.lang.String

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint;

GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.builder()
    .targetUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

### GoogleNetworkSecurityClientTlsPolicyTimeouts <a name="GoogleNetworkSecurityClientTlsPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyTimeouts;

GoogleNetworkSecurityClientTlsPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#create GoogleNetworkSecurityClientTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#delete GoogleNetworkSecurityClientTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#update GoogleNetworkSecurityClientTlsPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#create GoogleNetworkSecurityClientTlsPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#delete GoogleNetworkSecurityClientTlsPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_network_security_client_tls_policy#update GoogleNetworkSecurityClientTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference;

new GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">pluginInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">pluginInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pluginInstanceInput`<sup>Optional</sup> <a name="pluginInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```java
public java.lang.String getPluginInstanceInput();
```

- *Type:* java.lang.String

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```java
public java.lang.String getPluginInstance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---


### GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference;

new GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput">targetUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```java
public java.lang.String getTargetUriInput();
```

- *Type:* java.lang.String

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---


### GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference;

new GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance">putCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint">putGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance">resetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint">resetGrpcEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateProviderInstance` <a name="putCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance"></a>

```java
public void putCertificateProviderInstance(GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---

##### `putGrpcEndpoint` <a name="putGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint"></a>

```java
public void putGrpcEndpoint(GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---

##### `resetCertificateProviderInstance` <a name="resetCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance"></a>

```java
public void resetCertificateProviderInstance()
```

##### `resetGrpcEndpoint` <a name="resetGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint"></a>

```java
public void resetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput">certificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput">grpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateProviderInstance`<sup>Required</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference getCertificateProviderInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a>

---

##### `grpcEndpoint`<sup>Required</sup> <a name="grpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference getGrpcEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a>

---

##### `certificateProviderInstanceInput`<sup>Optional</sup> <a name="certificateProviderInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance getCertificateProviderInstanceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---

##### `grpcEndpointInput`<sup>Optional</sup> <a name="grpcEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint getGrpcEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyClientCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference;

new GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">pluginInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">pluginInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pluginInstanceInput`<sup>Optional</sup> <a name="pluginInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```java
public java.lang.String getPluginInstanceInput();
```

- *Type:* java.lang.String

---

##### `pluginInstance`<sup>Required</sup> <a name="pluginInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```java
public java.lang.String getPluginInstance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference;

new GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput">targetUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```java
public java.lang.String getTargetUriInput();
```

- *Type:* java.lang.String

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaList <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaList" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList;

new GoogleNetworkSecurityClientTlsPolicyServerValidationCaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference;

new GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance">putCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint">putGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance">resetCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint">resetGrpcEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateProviderInstance` <a name="putCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance"></a>

```java
public void putCertificateProviderInstance(GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---

##### `putGrpcEndpoint` <a name="putGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint"></a>

```java
public void putGrpcEndpoint(GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---

##### `resetCertificateProviderInstance` <a name="resetCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance"></a>

```java
public void resetCertificateProviderInstance()
```

##### `resetGrpcEndpoint` <a name="resetGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint"></a>

```java
public void resetGrpcEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance">certificateProviderInstance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint">grpcEndpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput">certificateProviderInstanceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput">grpcEndpointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateProviderInstance`<sup>Required</sup> <a name="certificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference getCertificateProviderInstance();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `grpcEndpoint`<sup>Required</sup> <a name="grpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference getGrpcEndpoint();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a>

---

##### `certificateProviderInstanceInput`<sup>Optional</sup> <a name="certificateProviderInstanceInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance getCertificateProviderInstanceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---

##### `grpcEndpointInput`<sup>Optional</sup> <a name="grpcEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput"></a>

```java
public GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint getGrpcEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>

---


### GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_client_tls_policy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference;

new GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

---



